import { chromium, type Browser, type Page } from '@playwright/test';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { SCORING_SYSTEM_PROMPT, SCORING_USER_PROMPT } from './prompts.js';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY ?? '';
const MODEL = process.env.SCORING_MODEL ?? 'google/gemini-2.5-flash-lite';
const BASE_URL = process.env.BASE_URL ?? 'http://localhost:4321';
const SCREENSHOT_DIR = path.resolve('dse_results/screenshots');

export interface Metrics {
  visual_hierarchy: number;
  information_density: number;
  typography: number;
  color_contrast: number;
  spacing_layout: number;
  chart_craft: number;
  interactivity: number;
  animation_polish: number;
}

export interface ScoreResult {
  metrics: Metrics;
  total: number;
  weakest: string;
  reasoning: string;
}

const METRIC_KEYS: (keyof Metrics)[] = [
  'visual_hierarchy', 'information_density', 'typography', 'color_contrast',
  'spacing_layout', 'chart_craft', 'interactivity', 'animation_polish',
];

async function takeScreenshot(page: Page, label: string): Promise<string> {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
  const filePath = path.join(SCREENSHOT_DIR, `${label}.png`);
  await page.screenshot({ path: filePath, fullPage: true });
  return filePath;
}

async function callOpenRouter(imageBase64: string, retries = 1): Promise<ScoreResult> {
  const body = {
    model: MODEL,
    messages: [
      { role: 'system', content: SCORING_SYSTEM_PROMPT },
      {
        role: 'user',
        content: [
          { type: 'image_url', image_url: { url: `data:image/png;base64,${imageBase64}` } },
          { type: 'text', text: SCORING_USER_PROMPT },
        ],
      },
    ],
    temperature: 0.2,
    max_tokens: 600,
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
        console.warn(`OpenRouter API error (attempt ${attempt + 1}): ${res.status} — retrying...`);
        await sleep(2000);
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
        await sleep(1000);
        continue;
      }
      throw new Error(`Failed to parse score response after ${retries + 1} attempts: ${raw}`);
    }
  }

  throw new Error('Unreachable');
}

function parseScoreResponse(raw: string): ScoreResult {
  // Strip markdown fences if present
  let cleaned = raw.trim();
  if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
  }

  const parsed = JSON.parse(cleaned);

  if (!parsed.metrics || typeof parsed.metrics !== 'object') {
    throw new Error('Missing metrics object');
  }

  const metrics: Metrics = {} as Metrics;
  let total = 0;

  for (const key of METRIC_KEYS) {
    const val = Number(parsed.metrics[key]);
    if (isNaN(val) || val < 1 || val > 10) {
      throw new Error(`Invalid metric value for ${key}: ${parsed.metrics[key]}`);
    }
    metrics[key] = val;
    total += val;
  }

  let weakest = METRIC_KEYS[0];
  for (const key of METRIC_KEYS) {
    if (metrics[key] < metrics[weakest]) {
      weakest = key;
    }
  }

  return {
    metrics,
    total,
    weakest,
    reasoning: String(parsed.reasoning ?? ''),
  };
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function scoreCurrentSite(iterationLabel?: string): Promise<ScoreResult> {
  const label = iterationLabel ?? `baseline-${Date.now()}`;
  let browser: Browser | null = null;

  try {
    browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    // Wait for React hydration + chart rendering
    await sleep(4000);

    const screenshotPath = await takeScreenshot(page, label);
    const imageBuffer = fs.readFileSync(screenshotPath);
    const imageBase64 = imageBuffer.toString('base64');

    const result = await callOpenRouter(imageBase64);

    // Save result alongside screenshot
    const resultPath = path.join(SCREENSHOT_DIR, `${label}.json`);
    fs.writeFileSync(resultPath, JSON.stringify(result, null, 2));

    return result;
  } finally {
    if (browser) await browser.close();
  }
}

// CLI entry point
if (process.argv[1]?.endsWith('score.ts') || process.argv[1]?.endsWith('score.js')) {
  if (!OPENROUTER_API_KEY) {
    console.error('Missing OPENROUTER_API_KEY env var');
    process.exit(1);
  }

  console.log(`Scoring ${BASE_URL} with ${MODEL}...`);
  scoreCurrentSite('cli-run')
    .then(result => {
      console.log('\n=== SCORE RESULT ===');
      console.log(JSON.stringify(result, null, 2));
      console.log(`\nTotal: ${result.total}/80`);
      console.log(`Weakest: ${result.weakest} (${result.metrics[result.weakest as keyof Metrics]})`);
    })
    .catch(err => {
      console.error('Scoring failed:', err);
      process.exit(1);
    });
}
