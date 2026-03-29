import * as fs from 'node:fs';
import * as path from 'node:path';
import { execSync } from 'node:child_process';
import { scoreCurrentSite, type ScoreResult, ALL_METRIC_KEYS, METRIC_COUNT } from './score.js';
import { generateMutations, applyMutation, type Mutation } from './mutations.js';

const ROOT = path.resolve(import.meta.dirname, '../..');
const DSE_DIR = path.join(ROOT, 'dse_results');
const STATE_FILE = path.join(DSE_DIR, 'DSE_STATE.json');
const LOG_FILE = path.join(DSE_DIR, 'dse_log.csv');

interface DSEState {
  iteration: number;
  status: string;
  best_metric: number;
  best_params: Record<string, string>;
  total_iterations: number;
  start_time: string;
  timeout: string;
  max_iterations: number;
  patience: number;
  patience_counter: number;
  objective: string;
  metric_name: string;
  target: number;
  baseline?: ScoreResult;
  best_result?: ScoreResult;
}

const MAX_ITERATIONS = Number(process.env.MAX_ITERATIONS ?? 1000);
const PATIENCE_LIMIT = 30;
const PATIENCE_RESHUFFLE = 30;
const TARGET_SCORE = 320; // 80% of 400
const TIMEOUT_HOURS = 8;
const DRY_RUN = process.argv.includes('--dry-run');
const DRY_RUN_LIMIT = 3;
const HMR_WAIT_MS = 3000;

function loadState(): DSEState {
  return JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8'));
}

function saveState(state: DSEState): void {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

function appendLog(row: string): void {
  fs.appendFileSync(LOG_FILE, row + '\n');
}

function git(cmd: string): string {
  try {
    return execSync(`git ${cmd}`, { cwd: ROOT, encoding: 'utf-8', timeout: 10000 }).trim();
  } catch (err) {
    console.error(`Git error: git ${cmd}`);
    throw err;
  }
}

function revertChanges(): void {
  git('checkout -- .');
}

function commitChanges(message: string): void {
  git('add -A');
  git(`commit -m "${message.replace(/"/g, '\\"')}"`);
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Map mutation targetMetric to the relevant scoring category
const METRIC_TO_CATEGORY: Record<string, string> = {
  typography: 'typography',
  chart_craft: 'chart_craft',
  visual_hierarchy: 'visual_design',
  color_contrast: 'visual_design',
  spacing_layout: 'layout',
  animation_polish: 'animation',
  interactivity: 'interactivity',
};

// Prioritize mutations targeting the weakest category
function prioritize(mutations: Mutation[], weakestCategory: string): Mutation[] {
  // Find which mutation targetMetrics map to this category
  const targetingCategory = mutations.filter(m => {
    const cat = METRIC_TO_CATEGORY[m.targetMetric];
    return cat === weakestCategory;
  });
  const rest = mutations.filter(m => {
    const cat = METRIC_TO_CATEGORY[m.targetMetric];
    return cat !== weakestCategory;
  });
  return [...shuffle(targetingCategory), ...shuffle(rest)];
}

function formatTimestamp(): string {
  return new Date().toISOString().replace('T', ' ').slice(0, 19);
}

function resultToCSV(r: ScoreResult): string {
  const cats = r.category_totals;
  return [
    cats.visual_design, cats.typography, cats.layout, cats.chart_craft,
    cats.interactivity, cats.animation, cats.trust, cats.polish,
    r.total,
  ].join(',');
}

// CSV header matching resultToCSV columns
const CSV_HEADER = 'iteration,mutation_id,description,target_metric,visual_design,typography,layout,chart_craft,interactivity,animation,trust,polish,total,status,timestamp,weakest_cat,weakest_metric,reasoning';

async function main() {
  const MAX_SCORE = METRIC_COUNT * 10;
  console.log('=== yazılımmaaş Design Space Exploration (40 metrics) ===');
  console.log(`Max iterations: ${DRY_RUN ? DRY_RUN_LIMIT : MAX_ITERATIONS}`);
  console.log(`Target score: ${TARGET_SCORE}/${MAX_SCORE}`);
  console.log(`Metrics: ${METRIC_COUNT} across 8 categories`);
  console.log(`Scoring: 7 screenshots per evaluation (desktop, 3 hovers, 2 scrolls, mobile)`);
  console.log(`Patience limit: ${PATIENCE_LIMIT}`);
  console.log(`Timeout: ${TIMEOUT_HOURS}h`);
  if (DRY_RUN) console.log('*** DRY RUN MODE ***');
  console.log();

  // Initialize CSV if empty
  const logContent = fs.readFileSync(LOG_FILE, 'utf-8').trim();
  if (!logContent || logContent.split('\n').length <= 1) {
    fs.writeFileSync(LOG_FILE, CSV_HEADER + '\n');
  }

  const state = loadState();
  state.start_time = new Date().toISOString();
  state.target = TARGET_SCORE;
  const startTime = Date.now();
  const timeoutMs = TIMEOUT_HOURS * 60 * 60 * 1000;

  // Step 1: Baseline score
  console.log('📊 Scoring baseline (7 screenshots, 40 metrics)...');
  let baseline: ScoreResult;
  try {
    baseline = await scoreCurrentSite('baseline');
    state.baseline = baseline;
    state.best_result = baseline;
    state.best_metric = baseline.total;
    saveState(state);

    console.log(`\nBaseline score: ${baseline.total}/${MAX_SCORE}`);
    console.log(`Category breakdown:`);
    for (const [cat, sum] of Object.entries(baseline.category_totals)) {
      console.log(`  ${cat.padEnd(16)} ${String(sum).padStart(2)}/50`);
    }
    console.log(`Weakest category: ${baseline.weakest_category}`);
    console.log(`Weakest metric: ${baseline.weakest_metric} (${baseline.metrics[baseline.weakest_metric]})`);
    console.log(`Reasoning: ${baseline.reasoning}`);

    appendLog(`0,baseline,baseline,,${resultToCSV(baseline)},baseline,${formatTimestamp()},${baseline.weakest_category},${baseline.weakest_metric},${baseline.reasoning.replace(/,/g, ';')}`);
  } catch (err) {
    console.error('Failed to get baseline score:', err);
    process.exit(1);
  }

  // Step 2: Generate and prioritize mutations
  const allMutations = generateMutations();
  console.log(`\nGenerated ${allMutations.length} mutations`);

  let queue = prioritize(allMutations, baseline.weakest_category);
  let queueIndex = 0;
  let bestTotal = baseline.total;
  let patienceCounter = 0;
  let improvements = 0;

  const maxIter = DRY_RUN ? DRY_RUN_LIMIT : MAX_ITERATIONS;

  // Step 3: Experiment loop
  for (let i = 1; i <= maxIter; i++) {
    if (Date.now() - startTime > timeoutMs) {
      console.log(`\n⏰ Timeout reached (${TIMEOUT_HOURS}h). Stopping.`);
      break;
    }

    if (queueIndex >= queue.length) {
      console.log('\n🔄 Queue exhausted. Reshuffling with new priority...');
      const currentBest = state.best_result;
      queue = prioritize(allMutations, currentBest?.weakest_category ?? baseline.weakest_category);
      queueIndex = 0;
    }

    const mutation = queue[queueIndex];
    queueIndex++;

    const elapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(0);
    console.log(`\n--- Experiment #${i} [${elapsed}m elapsed, best: ${bestTotal}/${MAX_SCORE}] ---`);
    console.log(`Mutation: ${mutation.description} (${mutation.id})`);

    // Apply mutation
    const applied = applyMutation(mutation);
    if (!applied) {
      console.log('⏭️  Skipped (pattern not found or no change)');
      appendLog(`${i},${mutation.id},${mutation.description},${mutation.targetMetric},,,,,,,,,,skipped,${formatTimestamp()},,,-`);
      continue;
    }

    // Wait for HMR
    await sleep(HMR_WAIT_MS);

    // Score with full end-to-end audit
    let result: ScoreResult;
    try {
      result = await scoreCurrentSite(`exp-${i}`);
    } catch (err) {
      console.error(`Scoring failed: ${err}`);
      revertChanges();
      appendLog(`${i},${mutation.id},${mutation.description},${mutation.targetMetric},,,,,,,,,,error,${formatTimestamp()},,,scoring failed`);
      continue;
    }

    console.log(`Score: ${result.total}/${MAX_SCORE} (best: ${bestTotal}/${MAX_SCORE})`);
    console.log(`  Categories: VD=${result.category_totals.visual_design} TY=${result.category_totals.typography} LA=${result.category_totals.layout} CH=${result.category_totals.chart_craft} IN=${result.category_totals.interactivity} AN=${result.category_totals.animation} TR=${result.category_totals.trust} PO=${result.category_totals.polish}`);

    if (result.total > bestTotal) {
      improvements++;
      const delta = result.total - bestTotal;
      bestTotal = result.total;
      patienceCounter = 0;
      state.best_metric = bestTotal;
      state.best_result = result;
      state.best_params[mutation.id] = mutation.replace;

      const commitMsg = `experiment #${i}: ${mutation.description} → ${result.total}/${MAX_SCORE} (+${delta})`;
      commitChanges(commitMsg);
      console.log(`✅ Improvement! +${delta} → ${result.total}/${MAX_SCORE}. Committed.`);

      appendLog(`${i},${mutation.id},${mutation.description},${mutation.targetMetric},${resultToCSV(result)},committed,${formatTimestamp()},${result.weakest_category},${result.weakest_metric},${result.reasoning.replace(/,/g, ';')}`);
    } else {
      revertChanges();
      patienceCounter++;
      console.log(`❌ No improvement (${result.total} ≤ ${bestTotal}). Patience: ${patienceCounter}/${PATIENCE_LIMIT}`);

      appendLog(`${i},${mutation.id},${mutation.description},${mutation.targetMetric},${resultToCSV(result)},reverted,${formatTimestamp()},${result.weakest_category},${result.weakest_metric},${result.reasoning.replace(/,/g, ';')}`);
    }

    // Update state
    state.iteration = i;
    state.total_iterations = i;
    state.patience_counter = patienceCounter;
    state.status = 'running';
    saveState(state);

    // Early stop: target reached and plateau
    if (bestTotal >= TARGET_SCORE && patienceCounter >= 15) {
      console.log(`\n🎯 Target reached (${bestTotal}/${MAX_SCORE} ≥ ${TARGET_SCORE}) and patience exhausted. Stopping.`);
      break;
    }

    // Reshuffle on sustained plateau
    if (patienceCounter >= PATIENCE_RESHUFFLE) {
      console.log(`\n🔄 Patience limit hit. Reshuffling queue toward weakest category: ${state.best_result?.weakest_category}...`);
      queue = prioritize(allMutations, state.best_result?.weakest_category ?? 'visual_design');
      queueIndex = 0;
      patienceCounter = 0;
    }
  }

  // Final summary
  const elapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  state.status = 'completed';
  saveState(state);

  console.log('\n=== EXPERIMENT LOOP COMPLETE ===');
  console.log(`Total iterations: ${state.total_iterations}`);
  console.log(`Improvements: ${improvements}`);
  console.log(`Baseline: ${baseline.total}/${MAX_SCORE} → Best: ${bestTotal}/${MAX_SCORE}`);
  console.log(`Elapsed: ${elapsed} minutes`);

  if (state.best_result) {
    console.log(`\nFinal category breakdown:`);
    for (const [cat, sum] of Object.entries(state.best_result.category_totals)) {
      const pct = ((sum / 50) * 100).toFixed(0);
      console.log(`  ${cat.padEnd(16)} ${String(sum).padStart(2)}/50  (${pct}%)`);
    }
    console.log(`Weakest: ${state.best_result.weakest_category}`);
  }

  if (bestTotal >= TARGET_SCORE) {
    console.log(`\n🏆 TARGET MET! ${bestTotal}/${MAX_SCORE} ≥ ${TARGET_SCORE}/${MAX_SCORE}`);
  } else {
    console.log(`\n📈 Best: ${bestTotal}/${MAX_SCORE} (target: ${TARGET_SCORE}/${MAX_SCORE})`);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
