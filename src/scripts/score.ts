import { chromium, type Browser, type Page } from '@playwright/test';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { SCORING_SYSTEM_PROMPT, SCORING_USER_PROMPT, ALL_METRIC_KEYS, METRIC_COUNT } from './prompts.js';

// Re-export for consumers
export { ALL_METRIC_KEYS, METRIC_COUNT };

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY ?? '';
const MODEL = process.env.SCORING_MODEL ?? 'google/gemini-2.5-flash-lite';
const BASE_URL = process.env.BASE_URL ?? 'http://localhost:4321';
const SCREENSHOT_DIR = path.resolve('dse_results/screenshots');

export type Metrics = Record<string, number>;

export interface CategoryTotals {
  visual_design: number;
  typography: number;
  layout: number;
  chart_craft: number;
  interactivity: number;
  animation: number;
  trust: number;
  polish: number;
}

export interface ScoreResult {
  metrics: Metrics;
  category_totals: CategoryTotals;
  total: number;
  weakest_category: string;
  weakest_metric: string;
  reasoning: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ─── Screenshot Capture: End-to-End Audit ───────────────────────────

interface AuditScreenshots {
  desktop_full: string;    // Full page at 1440×900
  hover_trend: string;     // Hovering over trend chart
  hover_rolebar: string;   // Hovering over role bar chart
  hover_bump: string;      // Hovering over bump chart
  scrolled_mid: string;    // Scrolled to ~50%
  scrolled_bottom: string; // Scrolled to bottom
  mobile_full: string;     // Full page at 375×812
}

async function captureAuditScreenshots(page: Page, label: string): Promise<AuditScreenshots> {
  const dir = path.join(SCREENSHOT_DIR, label);
  fs.mkdirSync(dir, { recursive: true });

  const shot = async (name: string, fullPage = false): Promise<string> => {
    const filePath = path.join(dir, `${name}.png`);
    await page.screenshot({ path: filePath, fullPage });
    return filePath;
  };

  // 1. Desktop full page
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  await sleep(4000); // Wait for React hydration + chart rendering + entrance animations
  const desktop_full = await shot('1-desktop-full', true);

  // 2. Hover over trend chart (line chart)
  const trendSection = page.locator('[data-section="trend"]');
  if (await trendSection.count() > 0) {
    await trendSection.scrollIntoViewIfNeeded();
    await sleep(500);
    // Hover over the chart SVG area to trigger Nivo tooltip
    const trendChart = trendSection.locator('svg').first();
    if (await trendChart.count() > 0) {
      const box = await trendChart.boundingBox();
      if (box) {
        // Hover at ~70% x, ~40% y of the chart (likely to hit a data point)
        await page.mouse.move(box.x + box.width * 0.7, box.y + box.height * 0.4);
        await sleep(600);
      }
    }
  }
  const hover_trend = await shot('2-hover-trend');

  // 3. Hover over role bar chart
  const rolesSection = page.locator('[data-section="roles"]');
  if (await rolesSection.count() > 0) {
    await rolesSection.scrollIntoViewIfNeeded();
    await sleep(500);
    // Hover over the 3rd bar (likely visible and interactive)
    const bars = rolesSection.locator('.group');
    if (await bars.count() > 2) {
      await bars.nth(2).hover();
      await sleep(600);
    }
  }
  const hover_rolebar = await shot('3-hover-rolebar');

  // 4. Hover over bump chart
  const bumpSection = page.locator('[data-section="bump"]');
  if (await bumpSection.count() > 0) {
    await bumpSection.scrollIntoViewIfNeeded();
    await sleep(500);
    const bumpChart = bumpSection.locator('svg').first();
    if (await bumpChart.count() > 0) {
      const box = await bumpChart.boundingBox();
      if (box) {
        await page.mouse.move(box.x + box.width * 0.5, box.y + box.height * 0.3);
        await sleep(600);
      }
    }
  }
  const hover_bump = await shot('4-hover-bump');

  // 5. Scroll to mid-page
  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight * 0.5, behavior: 'instant' }));
  await sleep(1500); // Wait for scroll-triggered animations
  const scrolled_mid = await shot('5-scrolled-mid');

  // 6. Scroll to bottom
  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }));
  await sleep(1500);
  const scrolled_bottom = await shot('6-scrolled-bottom');

  // 7. Mobile viewport
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  await sleep(3000);
  const mobile_full = await shot('7-mobile-full', true);

  return { desktop_full, hover_trend, hover_rolebar, hover_bump, scrolled_mid, scrolled_bottom, mobile_full };
}

// ─── OpenRouter API ─────────────────────────────────────────────────

function imageToContent(filePath: string): { type: string; image_url: { url: string } } {
  const buf = fs.readFileSync(filePath);
  const b64 = buf.toString('base64');
  return { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } };
}

async function callOpenRouter(screenshots: AuditScreenshots, retries = 1): Promise<ScoreResult> {
  const body = {
    model: MODEL,
    messages: [
      { role: 'system', content: SCORING_SYSTEM_PROMPT },
      {
        role: 'user',
        content: [
          imageToContent(screenshots.desktop_full),
          imageToContent(screenshots.hover_trend),
          imageToContent(screenshots.hover_rolebar),
          imageToContent(screenshots.hover_bump),
          imageToContent(screenshots.scrolled_mid),
          imageToContent(screenshots.scrolled_bottom),
          imageToContent(screenshots.mobile_full),
          { type: 'text', text: SCORING_USER_PROMPT },
        ],
      },
    ],
    temperature: 0.2,
    max_tokens: 2000,
  };

  for (let attempt = 0; attempt <= retries; attempt++) {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://yazilimmaas.com.tr',
        'X-Title': 'yazilimmaas-dse',
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errText = await res.text();
      if (attempt < retries) {
        console.warn(`OpenRouter API error (attempt ${attempt + 1}): ${res.status} — retrying in 3s...`);
        await sleep(3000);
        continue;
      }
      throw new Error(`OpenRouter API error: ${res.status} ${errText}`);
    }

    const data = await res.json() as { choices: { message: { content: string } }[] };
    const raw = data.choices[0]?.message?.content ?? '';

    try {
      return parseScoreResponse(raw);
    } catch (parseErr) {
      if (attempt < retries) {
        console.warn(`Parse error (attempt ${attempt + 1}): ${parseErr} — retrying...`);
        await sleep(2000);
        continue;
      }
      throw new Error(`Failed to parse score response after ${retries + 1} attempts. Raw: ${raw.slice(0, 500)}`);
    }
  }

  throw new Error('Unreachable');
}

// ─── Response Parsing ───────────────────────────────────────────────

const CATEGORY_PREFIXES: Record<string, string> = {
  vd_: 'visual_design',
  ty_: 'typography',
  la_: 'layout',
  ch_: 'chart_craft',
  in_: 'interactivity',
  an_: 'animation',
  tr_: 'trust',
  po_: 'polish',
};

function parseScoreResponse(raw: string): ScoreResult {
  let cleaned = raw.trim();
  if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
  }

  const parsed = JSON.parse(cleaned);

  if (!parsed.metrics || typeof parsed.metrics !== 'object') {
    throw new Error('Missing metrics object');
  }

  const metrics: Metrics = {};
  const categoryTotals: Record<string, number> = {
    visual_design: 0, typography: 0, layout: 0, chart_craft: 0,
    interactivity: 0, animation: 0, trust: 0, polish: 0,
  };
  let total = 0;

  for (const key of ALL_METRIC_KEYS) {
    const val = Number(parsed.metrics[key]);
    if (isNaN(val) || val < 1 || val > 10) {
      throw new Error(`Invalid metric value for ${key}: ${parsed.metrics[key]}`);
    }
    metrics[key] = val;
    total += val;

    // Sum into category
    const prefix = key.slice(0, 3);
    const cat = CATEGORY_PREFIXES[prefix];
    if (cat) categoryTotals[cat] += val;
  }

  // Find weakest category and metric
  let weakestCat = 'visual_design';
  for (const [cat, sum] of Object.entries(categoryTotals)) {
    if (sum < categoryTotals[weakestCat]) weakestCat = cat;
  }

  let weakestMetric = ALL_METRIC_KEYS[0];
  for (const key of ALL_METRIC_KEYS) {
    if (metrics[key] < metrics[weakestMetric]) weakestMetric = key;
  }

  return {
    metrics,
    category_totals: categoryTotals as unknown as CategoryTotals,
    total,
    weakest_category: weakestCat,
    weakest_metric: weakestMetric,
    reasoning: String(parsed.reasoning ?? ''),
  };
}

// ─── Public API ─────────────────────────────────────────────────────

export async function scoreCurrentSite(iterationLabel?: string): Promise<ScoreResult> {
  const label = iterationLabel ?? `run-${Date.now()}`;
  let browser: Browser | null = null;

  try {
    browser = await chromium.launch({ headless: true });
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();

    console.log(`  Capturing 7 audit screenshots...`);
    const screenshots = await captureAuditScreenshots(page, label);

    console.log(`  Sending to ${MODEL} for scoring...`);
    const result = await callOpenRouter(screenshots);

    // Save result
    const resultPath = path.join(SCREENSHOT_DIR, label, 'score.json');
    fs.writeFileSync(resultPath, JSON.stringify(result, null, 2));

    return result;
  } finally {
    if (browser) await browser.close();
  }
}

// ─── CLI ────────────────────────────────────────────────────────────

if (process.argv[1]?.endsWith('score.ts') || process.argv[1]?.endsWith('score.js')) {
  if (!OPENROUTER_API_KEY) {
    console.error('Missing OPENROUTER_API_KEY env var');
    process.exit(1);
  }

  console.log(`Scoring ${BASE_URL} with ${MODEL} (40 metrics, 7 screenshots)...`);
  scoreCurrentSite('cli-run')
    .then(result => {
      console.log('\n=== SCORE RESULT ===');
      console.log(`Total: ${result.total}/${METRIC_COUNT * 10}`);
      console.log(`\nCategory breakdown:`);
      for (const [cat, sum] of Object.entries(result.category_totals)) {
        const pct = ((sum / 50) * 100).toFixed(0);
        const bar = '█'.repeat(Math.round(sum / 5)) + '░'.repeat(10 - Math.round(sum / 5));
        console.log(`  ${cat.padEnd(16)} ${String(sum).padStart(2)}/50  ${bar}  ${pct}%`);
      }
      console.log(`\nWeakest category: ${result.weakest_category}`);
      console.log(`Weakest metric:   ${result.weakest_metric} (${result.metrics[result.weakest_metric]})`);
      console.log(`\n${result.reasoning}`);
      console.log(`\nFull metrics:`);
      console.log(JSON.stringify(result.metrics, null, 2));
    })
    .catch(err => {
      console.error('Scoring failed:', err);
      process.exit(1);
    });
}
