import * as fs from 'node:fs';
import * as path from 'node:path';
import { execSync } from 'node:child_process';
import { scoreCurrentSite, type ScoreResult, type Metrics } from './score.js';
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
const TARGET_SCORE = 64;
const TIMEOUT_HOURS = 6;
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

// Prioritize mutations that target the weakest metric
function prioritize(mutations: Mutation[], weakest: string): Mutation[] {
  const targeting = mutations.filter(m => m.targetMetric === weakest);
  const rest = mutations.filter(m => m.targetMetric !== weakest);
  return [...shuffle(targeting), ...shuffle(rest)];
}

function formatTimestamp(): string {
  return new Date().toISOString().replace('T', ' ').slice(0, 19);
}

function metricsToCSV(r: ScoreResult): string {
  return [
    r.metrics.visual_hierarchy,
    r.metrics.information_density,
    r.metrics.typography,
    r.metrics.color_contrast,
    r.metrics.spacing_layout,
    r.metrics.chart_craft,
    r.metrics.interactivity,
    r.metrics.animation_polish,
    r.total,
  ].join(',');
}

async function main() {
  console.log('=== yazılımmaaş Design Space Exploration ===');
  console.log(`Max iterations: ${DRY_RUN ? DRY_RUN_LIMIT : MAX_ITERATIONS}`);
  console.log(`Target score: ${TARGET_SCORE}/80`);
  console.log(`Patience limit: ${PATIENCE_LIMIT}`);
  console.log(`Timeout: ${TIMEOUT_HOURS}h`);
  if (DRY_RUN) console.log('*** DRY RUN MODE ***');
  console.log();

  const state = loadState();
  const startTime = Date.now();
  const timeoutMs = TIMEOUT_HOURS * 60 * 60 * 1000;

  // Step 1: Baseline score
  console.log('📊 Scoring baseline...');
  let baseline: ScoreResult;
  try {
    baseline = await scoreCurrentSite('baseline');
    state.baseline = baseline;
    state.best_result = baseline;
    state.best_metric = baseline.total;
    saveState(state);
    console.log(`Baseline score: ${baseline.total}/80`);
    console.log(`Weakest metric: ${baseline.weakest}`);
    console.log(`Metrics: ${JSON.stringify(baseline.metrics)}`);
    console.log(`Reasoning: ${baseline.reasoning}`);
    appendLog(`0,baseline,baseline,,${metricsToCSV(baseline)},baseline,${formatTimestamp()},${baseline.reasoning}`);
  } catch (err) {
    console.error('Failed to get baseline score:', err);
    process.exit(1);
  }

  // Step 2: Generate and prioritize mutations
  let allMutations = generateMutations();
  console.log(`\nGenerated ${allMutations.length} mutations`);

  let queue = prioritize(allMutations, baseline.weakest);
  let queueIndex = 0;
  let bestTotal = baseline.total;
  let patienceCounter = 0;
  let improvements = 0;

  const maxIter = DRY_RUN ? DRY_RUN_LIMIT : MAX_ITERATIONS;

  // Step 3: Experiment loop
  for (let i = 1; i <= maxIter; i++) {
    // Check timeout
    if (Date.now() - startTime > timeoutMs) {
      console.log(`\n⏰ Timeout reached (${TIMEOUT_HOURS}h). Stopping.`);
      break;
    }

    // Check if we've exhausted the queue — reshuffle
    if (queueIndex >= queue.length) {
      console.log('\n🔄 Queue exhausted. Reshuffling with new priority...');
      const currentBest = state.best_result;
      queue = prioritize(allMutations, currentBest?.weakest ?? baseline.weakest);
      queueIndex = 0;
    }

    const mutation = queue[queueIndex];
    queueIndex++;

    console.log(`\n--- Experiment #${i} ---`);
    console.log(`Mutation: ${mutation.description} (${mutation.id})`);
    console.log(`Target metric: ${mutation.targetMetric}`);

    // Apply mutation
    const applied = applyMutation(mutation);
    if (!applied) {
      console.log('⏭️  Skipped (pattern not found or no change)');
      appendLog(`${i},${mutation.id},${mutation.description},${mutation.targetMetric},,,,,,,skipped,${formatTimestamp()},pattern not found`);
      continue;
    }

    // Wait for HMR
    await sleep(HMR_WAIT_MS);

    // Score
    let result: ScoreResult;
    try {
      result = await scoreCurrentSite(`exp-${i}`);
    } catch (err) {
      console.error(`Scoring failed: ${err}`);
      revertChanges();
      appendLog(`${i},${mutation.id},${mutation.description},${mutation.targetMetric},,,,,,,error,${formatTimestamp()},scoring failed`);
      continue;
    }

    console.log(`Score: ${result.total}/80 (best: ${bestTotal}/80)`);

    if (result.total > bestTotal) {
      // Improvement! Keep it.
      improvements++;
      bestTotal = result.total;
      patienceCounter = 0;
      state.best_metric = bestTotal;
      state.best_result = result;
      state.best_params[mutation.id] = mutation.replace;

      const commitMsg = `experiment #${i}: ${mutation.description} → ${result.total}/80 (+${result.total - (state.baseline?.total ?? 0)} from baseline)`;
      commitChanges(commitMsg);
      console.log(`✅ Improvement! Committed. (+${result.total - bestTotal + (result.total - bestTotal)} → ${result.total}/80)`);

      appendLog(`${i},${mutation.id},${mutation.description},${mutation.targetMetric},${metricsToCSV(result)},committed,${formatTimestamp()},${result.reasoning}`);
    } else {
      // No improvement — revert
      revertChanges();
      patienceCounter++;
      console.log(`❌ No improvement (${result.total} ≤ ${bestTotal}). Patience: ${patienceCounter}/${PATIENCE_LIMIT}`);

      appendLog(`${i},${mutation.id},${mutation.description},${mutation.targetMetric},${metricsToCSV(result)},reverted,${formatTimestamp()},${result.reasoning}`);
    }

    // Update state
    state.iteration = i;
    state.total_iterations = i;
    state.patience_counter = patienceCounter;
    state.status = 'running';
    saveState(state);

    // Check early stop
    if (bestTotal >= TARGET_SCORE && patienceCounter >= 15) {
      console.log(`\n🎯 Target reached (${bestTotal}/80 ≥ ${TARGET_SCORE}) and patience exhausted. Stopping.`);
      break;
    }

    // Reshuffle on sustained plateau
    if (patienceCounter >= PATIENCE_RESHUFFLE) {
      console.log(`\n🔄 Patience limit hit (${PATIENCE_RESHUFFLE}). Reshuffling queue...`);
      const currentBest = state.best_result;
      queue = prioritize(allMutations, currentBest?.weakest ?? baseline.weakest);
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
  console.log(`Baseline: ${baseline.total}/80 → Best: ${bestTotal}/80`);
  console.log(`Elapsed: ${elapsed} minutes`);
  console.log(`Final weakest: ${state.best_result?.weakest ?? 'unknown'}`);

  if (bestTotal >= TARGET_SCORE) {
    console.log(`\n🏆 TARGET MET! ${bestTotal}/80 ≥ ${TARGET_SCORE}/80`);
  } else {
    console.log(`\n📈 Best: ${bestTotal}/80 (target was ${TARGET_SCORE}/80)`);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
