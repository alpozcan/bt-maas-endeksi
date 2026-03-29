import * as http from 'node:http';
import * as fs from 'node:fs';
import * as path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '../..');
const DSE_DIR = path.join(ROOT, 'dse_results');
const STATE_FILE = path.join(DSE_DIR, 'DSE_STATE.json');
const LOG_FILE = path.join(DSE_DIR, 'dse_log.csv');
const SCREENSHOT_DIR = path.join(DSE_DIR, 'screenshots');
const PORT = 3333;

const CATEGORIES = [
  { key: 'visual_design', label: 'Visual Design', color: '#60a5fa', icon: '🎨' },
  { key: 'typography', label: 'Typography', color: '#a78bfa', icon: '🔤' },
  { key: 'layout', label: 'Layout', color: '#f97316', icon: '📐' },
  { key: 'chart_craft', label: 'Chart Craft', color: '#06b6d4', icon: '📊' },
  { key: 'interactivity', label: 'Interactivity', color: '#f43f5e', icon: '👆' },
  { key: 'animation', label: 'Animation', color: '#ec4899', icon: '✨' },
  { key: 'trust', label: 'Trust', color: '#10b981', icon: '🔒' },
  { key: 'polish', label: 'Polish', color: '#fbbf24', icon: '💎' },
];

function readState(): Record<string, unknown> {
  try { return JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8')); }
  catch { return {}; }
}

function readLog(): Record<string, string>[] {
  try {
    const raw = fs.readFileSync(LOG_FILE, 'utf-8').trim();
    const lines = raw.split('\n');
    if (lines.length < 2) return [];
    const headers = lines[0].split(',');
    return lines.slice(1).filter(l => l.trim()).map(line => {
      const parts = line.split(',');
      const row: Record<string, string> = {};
      headers.forEach((h, i) => {
        if (i === headers.length - 1) row[h] = parts.slice(i).join(',');
        else row[h] = parts[i] ?? '';
      });
      return row;
    });
  } catch { return []; }
}

function renderDashboard(): string {
  const state = readState();
  const log = readLog();

  const baseline = (state.baseline as Record<string, unknown>) ?? {};
  const baselineCats = (baseline.category_totals as Record<string, number>) ?? {};
  const best = (state.best_result as Record<string, unknown>) ?? {};
  const bestCats = (best.category_totals as Record<string, number>) ?? {};
  const bestMetrics = (best.metrics as Record<string, number>) ?? {};
  const baselineMetrics = (baseline.metrics as Record<string, number>) ?? {};

  const committed = log.filter(r => r.status === 'committed');
  const reverted = log.filter(r => r.status === 'reverted');
  const skipped = log.filter(r => r.status === 'skipped');
  const totalExperiments = log.filter(r => r.iteration !== '0').length;

  // Score history
  const scoreHistory = log
    .filter(r => r.total && r.status !== 'skipped' && r.status !== 'error')
    .map(r => ({ iter: Number(r.iteration), total: Number(r.total), status: r.status }));

  let runningBest = 0;
  const bestOverTime = scoreHistory.map(s => {
    if (s.total > runningBest) runningBest = s.total;
    return { iter: s.iter, best: runningBest, actual: s.total, status: s.status };
  });

  const startTime = state.start_time ? new Date(state.start_time as string).getTime() : 0;
  const elapsed = startTime ? ((Date.now() - startTime) / 1000 / 60).toFixed(0) : '—';
  const rate = totalExperiments > 0 && startTime
    ? (totalExperiments / ((Date.now() - startTime) / 1000 / 60)).toFixed(1) : '—';

  const MAX = 400;

  // Find latest screenshots
  const latestExp = [...log].reverse().find(r => r.status === 'committed' || r.status === 'baseline');
  const latestLabel = latestExp?.status === 'baseline' ? 'baseline' : latestExp ? `exp-${latestExp.iteration}` : null;

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="15">
  <title>DSE Dashboard — yazılımmaaş (40 metrics)</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', -apple-system, sans-serif; background: #0f1117; color: #e0e0e0; padding: 24px; min-height: 100vh; }
    h1 { font-size: 24px; font-weight: 700; color: #fff; margin-bottom: 4px; }
    .subtitle { font-size: 13px; color: #888; margin-bottom: 24px; }
    .badge { display: inline-block; padding: 3px 10px; border-radius: 12px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
    .badge-running { background: #1a3a2a; color: #4ade80; }
    .badge-completed { background: #1a2a3a; color: #60a5fa; }
    .badge-ready { background: #2a2a1a; color: #fbbf24; }

    .kpi-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; margin-bottom: 20px; }
    .kpi { background: #1a1d27; border-radius: 12px; padding: 16px; border: 1px solid #2a2d3a; }
    .kpi-label { font-size: 10px; color: #888; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
    .kpi-value { font-size: 28px; font-weight: 700; font-variant-numeric: tabular-nums; }
    .kpi-sub { font-size: 11px; color: #555; margin-top: 4px; }

    .panels { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
    .panel { background: #1a1d27; border-radius: 12px; padding: 20px; border: 1px solid #2a2d3a; }
    .panel-full { grid-column: 1 / -1; }
    .panel-title { font-size: 13px; font-weight: 600; color: #aaa; margin-bottom: 14px; text-transform: uppercase; letter-spacing: 0.5px; }

    .cat-row { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
    .cat-icon { font-size: 14px; width: 20px; text-align: center; }
    .cat-label { font-size: 12px; color: #999; width: 100px; flex-shrink: 0; }
    .cat-bar-bg { flex: 1; height: 28px; background: #252836; border-radius: 6px; position: relative; overflow: hidden; }
    .cat-bar-baseline { position: absolute; left: 0; top: 0; height: 100%; background: #374151; border-radius: 6px; opacity: 0.4; }
    .cat-bar-best { position: absolute; left: 0; top: 0; height: 100%; border-radius: 6px; }
    .cat-score { font-size: 13px; font-weight: 600; font-variant-numeric: tabular-nums; width: 55px; text-align: right; flex-shrink: 0; }
    .cat-delta { font-size: 11px; width: 35px; text-align: right; flex-shrink: 0; }
    .cat-delta-pos { color: #4ade80; }
    .cat-delta-zero { color: #555; }
    .cat-delta-neg { color: #f87171; }

    .metric-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-top: 8px; }
    .metric-pill { display: flex; justify-content: space-between; align-items: center; background: #252836; border-radius: 6px; padding: 4px 8px; font-size: 10px; }
    .metric-name { color: #888; }
    .metric-val { font-weight: 600; font-variant-numeric: tabular-nums; }

    .chart-svg { width: 100%; height: 100%; }
    .progress-bg { width: 100%; height: 6px; background: #252836; border-radius: 3px; margin-top: 6px; overflow: hidden; }
    .progress-fill { height: 100%; border-radius: 3px; transition: width 0.3s; }

    table { width: 100%; border-collapse: collapse; font-size: 11px; }
    th { text-align: left; padding: 6px 8px; color: #666; font-weight: 500; border-bottom: 1px solid #2a2d3a; font-size: 10px; text-transform: uppercase; letter-spacing: 0.5px; }
    td { padding: 5px 8px; border-bottom: 1px solid #1f2233; font-variant-numeric: tabular-nums; }
    tr:hover td { background: #1f2233; }
    .pill { display: inline-block; padding: 2px 7px; border-radius: 6px; font-size: 9px; font-weight: 600; }
    .pill-committed { background: #1a3a2a; color: #4ade80; }
    .pill-reverted { background: #3a1a1a; color: #f87171; }
    .pill-skipped { background: #2a2a1a; color: #fbbf24; }
    .pill-baseline { background: #1a2a3a; color: #60a5fa; }
    .pill-error { background: #3a1a2a; color: #fb7185; }

    .screenshots { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
    .screenshots img { width: 100%; border-radius: 8px; border: 1px solid #2a2d3a; }
    .screenshots .label { font-size: 10px; color: #666; text-align: center; margin-top: 4px; }
    .footer { font-size: 10px; color: #444; text-align: center; margin-top: 24px; }
  </style>
</head>
<body>
  <div style="display:flex;align-items:center;gap:16px;margin-bottom:4px">
    <h1>yazılımmaaş DSE</h1>
    <span class="badge badge-${state.status ?? 'ready'}">${state.status ?? 'ready'}</span>
    <span style="font-size:12px;color:#666">40 metrics · 8 categories · 7 screenshots/eval</span>
  </div>
  <p class="subtitle">${totalExperiments} experiments · ${committed.length} improvements · ${elapsed}m elapsed · ~${rate} exp/min</p>

  <!-- KPIs -->
  <div class="kpi-grid">
    <div class="kpi">
      <div class="kpi-label">Best Score</div>
      <div class="kpi-value" style="color:#4ade80">${state.best_metric ?? 0}<span style="font-size:14px;color:#555">/${MAX}</span></div>
      <div class="kpi-sub">Target: ${320}/${MAX} (80%)</div>
      <div class="progress-bg"><div class="progress-fill" style="width:${((Number(state.best_metric ?? 0)/MAX)*100).toFixed(0)}%;background:linear-gradient(90deg,#6366f1,#4ade80)"></div></div>
    </div>
    <div class="kpi">
      <div class="kpi-label">Iteration</div>
      <div class="kpi-value" style="color:#60a5fa">${state.iteration ?? 0}<span style="font-size:14px;color:#555">/1000</span></div>
      <div class="kpi-sub">Patience: ${state.patience_counter ?? 0}/30</div>
      <div class="progress-bg"><div class="progress-fill" style="width:${((Number(state.iteration ?? 0)/1000)*100).toFixed(1)}%;background:#60a5fa"></div></div>
    </div>
    <div class="kpi">
      <div class="kpi-label">Improvements</div>
      <div class="kpi-value" style="color:#a78bfa">${committed.length}</div>
      <div class="kpi-sub">Hit rate: ${totalExperiments > 0 ? ((committed.length/totalExperiments)*100).toFixed(1) : '0'}%</div>
    </div>
    <div class="kpi">
      <div class="kpi-label">Baseline → Best</div>
      <div class="kpi-value" style="color:#fbbf24">${baseline.total ?? '—'}<span style="font-size:14px;color:#555"> → </span>${state.best_metric ?? '—'}</div>
      <div class="kpi-sub">+${Number(state.best_metric ?? 0) - Number(baseline.total ?? 0)} points</div>
    </div>
    <div class="kpi">
      <div class="kpi-label">Weakest Category</div>
      <div class="kpi-value" style="font-size:14px;color:#f43f5e">${(best as Record<string, unknown>).weakest_category ?? '—'}</div>
      <div class="kpi-sub">Weakest metric: ${(best as Record<string, unknown>).weakest_metric ?? '—'}</div>
    </div>
  </div>

  <div class="panels">
    <!-- Category Breakdown -->
    <div class="panel">
      <div class="panel-title">Category Breakdown (baseline → best, /50 each)</div>
      ${CATEGORIES.map(c => {
        const bVal = baselineCats[c.key] ?? 0;
        const cVal = bestCats[c.key] ?? 0;
        const delta = cVal - bVal;
        const deltaClass = delta > 0 ? 'cat-delta-pos' : delta === 0 ? 'cat-delta-zero' : 'cat-delta-neg';
        return `<div class="cat-row">
          <span class="cat-icon">${c.icon}</span>
          <span class="cat-label">${c.label}</span>
          <div class="cat-bar-bg">
            <div class="cat-bar-baseline" style="width:${bVal*2}%"></div>
            <div class="cat-bar-best" style="width:${cVal*2}%;background:${c.color}"></div>
          </div>
          <span class="cat-score" style="color:${c.color}">${cVal}/50</span>
          <span class="cat-delta ${deltaClass}">${delta > 0 ? '+'+delta : delta === 0 ? '—' : delta}</span>
        </div>`;
      }).join('\n')}
    </div>

    <!-- Score Chart -->
    <div class="panel">
      <div class="panel-title">Score Over Time</div>
      <div style="height:220px">
        ${bestOverTime.length > 1 ? (() => {
          const maxIter = Math.max(...bestOverTime.map(d => d.iter), 1);
          const pad = { l: 40, r: 10, t: 10, b: 25 };
          const w = 500 - pad.l - pad.r;
          const h = 220 - pad.t - pad.b;
          const x = (iter: number) => pad.l + (iter / maxIter) * w;
          const y = (score: number) => pad.t + h - (score / MAX) * h;
          const bestLine = bestOverTime.map((d, i) => `${i === 0 ? 'M' : 'L'}${x(d.iter).toFixed(1)},${y(d.best).toFixed(1)}`).join(' ');
          const dots = bestOverTime.filter((_, i) => i % Math.max(1, Math.floor(bestOverTime.length / 50)) === 0 || bestOverTime[_?.iter]?.status === 'committed').map(d => {
            const color = d.status === 'committed' ? '#4ade80' : d.status === 'baseline' ? '#60a5fa' : '#f8717155';
            return `<circle cx="${x(d.iter).toFixed(1)}" cy="${y(d.actual).toFixed(1)}" r="2" fill="${color}"/>`;
          }).join('\n');
          const yLabels = [0, 100, 200, 300, 400].map(v => `<text x="${pad.l-5}" y="${y(v).toFixed(1)}" fill="#555" font-size="9" text-anchor="end" dominant-baseline="middle">${v}</text><line x1="${pad.l}" y1="${y(v).toFixed(1)}" x2="${pad.l+w}" y2="${y(v).toFixed(1)}" stroke="#2a2d3a" stroke-width="0.5"/>`).join('');
          const targetY = y(320);
          return `<svg class="chart-svg" viewBox="0 0 500 220" preserveAspectRatio="xMidYMid meet">
            ${yLabels}
            <line x1="${pad.l}" y1="${targetY.toFixed(1)}" x2="${pad.l+w}" y2="${targetY.toFixed(1)}" stroke="#fbbf24" stroke-width="1" stroke-dasharray="4,3" opacity="0.4"/>
            <text x="${pad.l+w}" y="${(targetY-4).toFixed(1)}" fill="#fbbf24" font-size="9" text-anchor="end" opacity="0.6">target: 320</text>
            <path d="${bestLine}" fill="none" stroke="#a78bfa" stroke-width="2"/>
            ${dots}
          </svg>`;
        })() : '<p style="color:#555;font-size:12px;padding-top:90px;text-align:center">Waiting for data...</p>'}
      </div>
    </div>
  </div>

  <!-- Individual Metrics Grid -->
  <div class="panel panel-full" style="background:#1a1d27;border-radius:12px;padding:20px;border:1px solid #2a2d3a;margin-bottom:20px">
    <div class="panel-title">All 40 Metrics (best scores)</div>
    ${CATEGORIES.map(c => {
      const prefix = c.key === 'visual_design' ? 'vd_' : c.key === 'typography' ? 'ty_' : c.key === 'layout' ? 'la_' : c.key === 'chart_craft' ? 'ch_' : c.key === 'interactivity' ? 'in_' : c.key === 'animation' ? 'an_' : c.key === 'trust' ? 'tr_' : 'po_';
      const metrics = Object.keys(bestMetrics).filter(k => k.startsWith(prefix));
      if (metrics.length === 0) return '';
      return `<div style="margin-bottom:12px">
        <div style="font-size:11px;color:${c.color};font-weight:600;margin-bottom:6px">${c.icon} ${c.label}</div>
        <div class="metric-grid">
          ${metrics.map(m => {
            const val = bestMetrics[m] ?? 0;
            const bval = baselineMetrics[m] ?? 0;
            const d = val - bval;
            const color = val >= 8 ? '#4ade80' : val >= 6 ? '#fbbf24' : val >= 4 ? '#f97316' : '#f87171';
            return `<div class="metric-pill">
              <span class="metric-name">${m.replace(prefix, '')}</span>
              <span class="metric-val" style="color:${color}">${val}${d !== 0 ? ` <span style="font-size:8px;color:${d>0?'#4ade80':'#f87171'}">${d>0?'+':''}${d}</span>` : ''}</span>
            </div>`;
          }).join('')}
        </div>
      </div>`;
    }).join('\n')}
  </div>

  <!-- Latest Screenshots -->
  ${latestLabel ? `
  <div class="panel panel-full" style="background:#1a1d27;border-radius:12px;padding:20px;border:1px solid #2a2d3a;margin-bottom:20px">
    <div class="panel-title">Latest Audit Screenshots (${latestLabel})</div>
    <div class="screenshots">
      ${['1-desktop-full', '2-hover-trend', '3-hover-rolebar', '7-mobile-full'].map(name => {
        return `<div>
          <img src="/screenshots/${latestLabel}/${name}.png" alt="${name}" loading="lazy" onerror="this.style.display='none'"/>
          <div class="label">${name.replace(/^\d-/, '')}</div>
        </div>`;
      }).join('')}
    </div>
  </div>` : ''}

  <!-- Experiment Log -->
  <div class="panel panel-full" style="background:#1a1d27;border-radius:12px;padding:20px;border:1px solid #2a2d3a;margin-bottom:20px">
    <div class="panel-title">Experiment Log (latest ${Math.min(log.length, 30)})</div>
    <div style="max-height:400px;overflow-y:auto">
      <table>
        <thead><tr>
          <th>#</th><th>Mutation</th><th>Target</th>
          ${CATEGORIES.map(c => `<th title="${c.label}" style="color:${c.color}">${c.icon}</th>`).join('')}
          <th>Total</th><th>Status</th><th>Time</th>
        </tr></thead>
        <tbody>
          ${[...log].reverse().slice(0, 30).map(r => {
            const pillClass = r.status === 'committed' ? 'pill-committed' : r.status === 'reverted' ? 'pill-reverted' : r.status === 'baseline' ? 'pill-baseline' : r.status === 'error' ? 'pill-error' : 'pill-skipped';
            const catKeys = ['visual_design','typography','layout','chart_craft','interactivity','animation','trust','polish'];
            return `<tr title="${r.reasoning ?? ''}">
              <td>${r.iteration}</td>
              <td>${(r.description ?? '').slice(0, 35)}${(r.description?.length ?? 0) > 35 ? '…' : ''}</td>
              <td style="font-size:10px;color:#888">${r.target_metric ?? ''}</td>
              ${catKeys.map(k => `<td>${r[k] ?? ''}</td>`).join('')}
              <td style="font-weight:600">${r.total || ''}</td>
              <td><span class="pill ${pillClass}">${r.status}</span></td>
              <td style="color:#555;font-size:10px">${(r.timestamp ?? '').slice(11)}</td>
            </tr>`;
          }).join('\n')}
        </tbody>
      </table>
    </div>
  </div>

  <!-- Committed Improvements -->
  ${committed.length > 0 ? `
  <div class="panel panel-full" style="background:#1a1d27;border-radius:12px;padding:20px;border:1px solid #2a2d3a;margin-bottom:20px">
    <div class="panel-title">Committed Improvements (${committed.length})</div>
    <table>
      <thead><tr><th>#</th><th>Mutation</th><th>Score</th><th>Weakest</th><th>Time</th></tr></thead>
      <tbody>
        ${committed.map(r => `<tr>
          <td>${r.iteration}</td>
          <td>${r.description}</td>
          <td style="font-weight:600;color:#4ade80">${r.total}/400</td>
          <td style="font-size:10px;color:#888">${r.weakest_cat ?? ''}</td>
          <td style="color:#555">${(r.timestamp ?? '').slice(11)}</td>
        </tr>`).join('\n')}
      </tbody>
    </table>
  </div>` : ''}

  <p class="footer">Auto-refreshes every 15s · yazılımmaaş DSE · 40 metrics · 8 categories · 7 screenshots/eval</p>
</body>
</html>`;
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url ?? '/', `http://localhost:${PORT}`);

  if (url.pathname === '/api/state') {
    res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    res.end(JSON.stringify(readState()));
  } else if (url.pathname === '/api/log') {
    res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    res.end(JSON.stringify(readLog()));
  } else if (url.pathname.startsWith('/screenshots/')) {
    const filePath = path.join(SCREENSHOT_DIR, url.pathname.replace('/screenshots/', ''));
    if (fs.existsSync(filePath)) {
      const ext = path.extname(filePath).toLowerCase();
      const mime = ext === '.png' ? 'image/png' : ext === '.json' ? 'application/json' : 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': mime });
      res.end(fs.readFileSync(filePath));
    } else {
      res.writeHead(404); res.end('Not found');
    }
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(renderDashboard());
  }
});

server.listen(PORT, () => {
  console.log(`\n🖥️  DSE Dashboard (40 metrics) running at http://localhost:${PORT}`);
  console.log('   Auto-refreshes every 15 seconds');
  console.log('   Shows: 8 categories, 40 metrics, audit screenshots, experiment log\n');
});
