import * as fs from 'node:fs';
import * as path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '../..');
const CSS_FILE = path.join(ROOT, 'src/styles/global.css');
const HERO_FILE = path.join(ROOT, 'src/components/Hero.tsx');
const TREND_FILE = path.join(ROOT, 'src/components/TrendChart.tsx');
const ROLEBAR_FILE = path.join(ROOT, 'src/components/RoleBar.tsx');
const AI_FILE = path.join(ROOT, 'src/components/AIAdoption.tsx');
const STREAM_FILE = path.join(ROOT, 'src/components/SalaryStream.tsx');
const BUMP_FILE = path.join(ROOT, 'src/components/RoleBump.tsx');
const RADAR_FILE = path.join(ROOT, 'src/components/RoleRadar.tsx');
const LAYOUT_FILE = path.join(ROOT, 'src/layouts/Layout.astro');
const INDEX_FILE = path.join(ROOT, 'src/pages/index.astro');

export interface Mutation {
  id: string;
  category: 'typography' | 'color' | 'spacing' | 'chart' | 'layout' | 'animation';
  targetMetric: string; // which scoring metric this primarily affects
  description: string;
  file: string;
  find: string;
  replace: string;
}

// Helper: read file content
function read(filePath: string): string {
  return fs.readFileSync(filePath, 'utf-8');
}

// Generate all mutations dynamically based on current file contents
export function generateMutations(): Mutation[] {
  const mutations: Mutation[] = [];
  let id = 0;
  const nextId = (cat: string) => `${cat}-${++id}`;

  // =============================================
  // TYPOGRAPHY MUTATIONS (target: typography metric)
  // =============================================

  // Body font size
  for (const size of ['17px', '18px', '19px', '20px', '21px']) {
    mutations.push({
      id: nextId('typo'),
      category: 'typography',
      targetMetric: 'typography',
      description: `Body font-size → ${size}`,
      file: CSS_FILE,
      find: /font-size: \d+px;/.source,
      replace: `font-size: ${size};`,
    });
  }

  // Body line-height
  for (const lh of ['1.4', '1.5', '1.55', '1.6', '1.65', '1.7']) {
    mutations.push({
      id: nextId('typo'),
      category: 'typography',
      targetMetric: 'typography',
      description: `Body line-height → ${lh}`,
      file: CSS_FILE,
      find: /line-height: [\d.]+;/.source,
      replace: `line-height: ${lh};`,
    });
  }

  // Hero headline tracking
  for (const track of ['-0.5px', '-1px', '-1.5px', '-2px', '-2.5px', '-3px']) {
    mutations.push({
      id: nextId('typo'),
      category: 'typography',
      targetMetric: 'typography',
      description: `Hero headline tracking → ${track}`,
      file: HERO_FILE,
      find: /tracking-\[-\d+(?:\.\d+)?px\]/.source,
      replace: `tracking-[${track}]`,
    });
  }

  // Hero headline font weight
  for (const weight of ['font-extrabold', 'font-black', 'font-bold']) {
    mutations.push({
      id: nextId('typo'),
      category: 'typography',
      targetMetric: 'typography',
      description: `Hero headline weight → ${weight}`,
      file: HERO_FILE,
      find: /font-(?:black|extrabold|bold)/.source,
      replace: weight,
    });
  }

  // Source text size
  for (const size of ['9px', '10px', '11px', '12px']) {
    mutations.push({
      id: nextId('typo'),
      category: 'typography',
      targetMetric: 'typography',
      description: `Source text size → ${size}`,
      file: CSS_FILE,
      find: /\.source-text \{\n\s*font-size: \d+px;/.source,
      replace: `.source-text {\n  font-size: ${size};`,
    });
  }

  // Chart axis font size
  for (const size of ['10', '11', '12', '13']) {
    mutations.push({
      id: nextId('typo'),
      category: 'typography',
      targetMetric: 'chart_craft',
      description: `Chart axis font size → ${size}px (TrendChart)`,
      file: TREND_FILE,
      find: /fontSize: 11,(?=.*fontFamily: 'JetBrains Mono')/s.source,
      replace: `fontSize: ${size},`,
    });
  }

  // Section title size
  for (const size of ['text-xl', 'text-2xl', 'text-3xl']) {
    for (const [file, comp] of [[TREND_FILE, 'Trend'], [ROLEBAR_FILE, 'RoleBar'], [STREAM_FILE, 'Stream'], [BUMP_FILE, 'Bump'], [RADAR_FILE, 'Radar']] as const) {
      mutations.push({
        id: nextId('typo'),
        category: 'typography',
        targetMetric: 'visual_hierarchy',
        description: `${comp} title size → ${size}`,
        file: file,
        find: /text-(?:xl|2xl|3xl) font-bold/.source,
        replace: `${size} font-bold`,
      });
    }
  }

  // =============================================
  // COLOR MUTATIONS (target: color_contrast metric)
  // =============================================

  // Background warmth
  for (const bg of ['#FAFAF8', '#FAF9F6', '#F8F7F5', '#FAFAFA', '#F9F9F7', '#FFFFFF']) {
    mutations.push({
      id: nextId('color'),
      category: 'color',
      targetMetric: 'color_contrast',
      description: `Page background → ${bg}`,
      file: CSS_FILE,
      find: /--color-bg: #[A-Fa-f0-9]+;/.source,
      replace: `--color-bg: ${bg};`,
    });
  }

  // Text primary color
  for (const c of ['#1A1A1A', '#1F1F1F', '#222222', '#2D2D2D', '#333333']) {
    mutations.push({
      id: nextId('color'),
      category: 'color',
      targetMetric: 'color_contrast',
      description: `Primary text → ${c}`,
      file: CSS_FILE,
      find: /--color-text: #[A-Fa-f0-9]+;/.source,
      replace: `--color-text: ${c};`,
    });
  }

  // Accent color
  for (const [hex, name] of [
    ['#6366f1', 'indigo'], ['#3b82f6', 'blue'], ['#0ea5e9', 'sky'],
    ['#0d9488', 'teal'], ['#059669', 'emerald'], ['#e63946', 'economist-red'],
    ['#0060B9', 'levels-blue'], ['#d4a574', 'ft-gold'],
  ] as const) {
    mutations.push({
      id: nextId('color'),
      category: 'color',
      targetMetric: 'color_contrast',
      description: `Accent color → ${name} (${hex})`,
      file: CSS_FILE,
      find: /--color-accent: #[A-Fa-f0-9]+;/.source,
      replace: `--color-accent: ${hex};`,
    });
  }

  // Chart palette combos
  const palettes = [
    { name: 'indigo-emerald-amber-red', colors: ['#6366f1', '#10b981', '#f59e0b', '#ef4444'] },
    { name: 'blue-teal-orange-rose', colors: ['#3b82f6', '#14b8a6', '#f97316', '#f43f5e'] },
    { name: 'economist', colors: ['#e3120b', '#0060B9', '#2a9d8f', '#f59e0b'] },
    { name: 'nyt', colors: ['#1a1a1a', '#d4a574', '#6b7280', '#e63946'] },
    { name: 'ft', colors: ['#0d6680', '#96c9dc', '#f2dfce', '#cc0000'] },
    { name: 'cool-muted', colors: ['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd'] },
    { name: 'warm-earth', colors: ['#92400e', '#b45309', '#d97706', '#f59e0b'] },
    { name: 'high-contrast', colors: ['#1e40af', '#15803d', '#b91c1c', '#7e22ce'] },
  ];
  for (const p of palettes) {
    mutations.push({
      id: nextId('color'),
      category: 'color',
      targetMetric: 'color_contrast',
      description: `Chart palette → ${p.name}`,
      file: CSS_FILE,
      find: /--color-chart-1: #[A-Fa-f0-9]+;\n\s*--color-chart-2: #[A-Fa-f0-9]+;\n\s*--color-chart-3: #[A-Fa-f0-9]+;\n\s*--color-chart-4: #[A-Fa-f0-9]+;/.source,
      replace: `--color-chart-1: ${p.colors[0]};\n  --color-chart-2: ${p.colors[1]};\n  --color-chart-3: ${p.colors[2]};\n  --color-chart-4: ${p.colors[3]};`,
    });
  }

  // Gridline color
  for (const c of ['#EBEBEB', '#E5E5E5', '#E0E0E0', '#D9D9D9', '#F0F0F0']) {
    mutations.push({
      id: nextId('color'),
      category: 'color',
      targetMetric: 'chart_craft',
      description: `Gridline color → ${c}`,
      file: CSS_FILE,
      find: /--color-gridline: #[A-Fa-f0-9]+;/.source,
      replace: `--color-gridline: ${c};`,
    });
  }

  // =============================================
  // SPACING MUTATIONS (target: spacing_layout metric)
  // =============================================

  // Section top padding
  for (const px of ['40px', '48px', '56px', '64px', '72px', '80px']) {
    mutations.push({
      id: nextId('space'),
      category: 'spacing',
      targetMetric: 'spacing_layout',
      description: `Section top padding → ${px}`,
      file: CSS_FILE,
      find: /\.section \{\n\s*padding-top: \d+px;/.source,
      replace: `.section {\n  padding-top: ${px};`,
    });
  }

  // Section bottom padding
  for (const px of ['16px', '24px', '32px', '40px', '48px']) {
    mutations.push({
      id: nextId('space'),
      category: 'spacing',
      targetMetric: 'spacing_layout',
      description: `Section bottom padding → ${px}`,
      file: CSS_FILE,
      find: /padding-bottom: \d+px;\n\}/.source,
      replace: `padding-bottom: ${px};\n}`,
    });
  }

  // Card border radius
  for (const r of ['8px', '10px', '12px', '16px', '20px']) {
    mutations.push({
      id: nextId('space'),
      category: 'spacing',
      targetMetric: 'spacing_layout',
      description: `Card border-radius → ${r}`,
      file: CSS_FILE,
      find: /border-radius: \d+px;\n\s*box-shadow/.source,
      replace: `border-radius: ${r};\n  box-shadow`,
    });
  }

  // Card padding
  for (const p of ['16px', '20px', '24px', '28px', '32px']) {
    mutations.push({
      id: nextId('space'),
      category: 'spacing',
      targetMetric: 'spacing_layout',
      description: `Card padding → ${p}`,
      file: CSS_FILE,
      find: /\.card \{[^}]*padding: \d+px;/s.source,
      replace: `.card {\n  background: var(--color-bg-white);\n  border-radius: 12px;\n  box-shadow: var(--shadow-sm);\n  padding: ${p};`,
    });
  }

  // Content max-width
  for (const w of ['860px', '900px', '960px', '1024px', '1080px']) {
    mutations.push({
      id: nextId('space'),
      category: 'layout',
      targetMetric: 'spacing_layout',
      description: `Content max-width → ${w} (all sections)`,
      file: HERO_FILE,
      find: /max-w-\[\d+px\]/.source,
      replace: `max-w-[${w}]`,
    });
  }

  // Shadow strength
  for (const [sm, md, lg, name] of [
    ['0 1px 2px rgba(0,0,0,0.02)', '0 2px 6px rgba(0,0,0,0.04)', '0 4px 16px rgba(0,0,0,0.06)', 'subtle'],
    ['0 1px 2px rgba(0,0,0,0.04)', '0 2px 8px rgba(0,0,0,0.06)', '0 4px 20px rgba(0,0,0,0.08)', 'medium'],
    ['0 1px 3px rgba(0,0,0,0.06)', '0 3px 12px rgba(0,0,0,0.08)', '0 6px 24px rgba(0,0,0,0.10)', 'strong'],
    ['none', 'none', 'none', 'flat'],
  ] as const) {
    mutations.push({
      id: nextId('space'),
      category: 'spacing',
      targetMetric: 'spacing_layout',
      description: `Shadow style → ${name}`,
      file: CSS_FILE,
      find: /--shadow-sm: [^;]+;\n\s*--shadow-md: [^;]+;\n\s*--shadow-lg: [^;]+;/.source,
      replace: `--shadow-sm: ${sm};\n  --shadow-md: ${md};\n  --shadow-lg: ${lg};`,
    });
  }

  // =============================================
  // CHART MUTATIONS (target: chart_craft metric)
  // =============================================

  // TrendChart line width
  for (const w of ['1.5', '2', '2.5', '3', '3.5']) {
    mutations.push({
      id: nextId('chart'),
      category: 'chart',
      targetMetric: 'chart_craft',
      description: `TrendChart line width → ${w}`,
      file: TREND_FILE,
      find: /lineWidth=\{[\d.]+\}/.source,
      replace: `lineWidth={${w}}`,
    });
  }

  // TrendChart point size
  for (const s of ['0', '4', '5', '6', '7', '8']) {
    mutations.push({
      id: nextId('chart'),
      category: 'chart',
      targetMetric: 'chart_craft',
      description: `TrendChart point size → ${s}`,
      file: TREND_FILE,
      find: /pointSize=\{[\d]+\}/.source,
      replace: `pointSize={${s}}`,
    });
  }

  // TrendChart area opacity
  for (const o of ['0', '0.02', '0.04', '0.06', '0.08', '0.12']) {
    mutations.push({
      id: nextId('chart'),
      category: 'chart',
      targetMetric: 'chart_craft',
      description: `TrendChart area opacity → ${o}`,
      file: TREND_FILE,
      find: /areaOpacity=\{[\d.]+\}/.source,
      replace: `areaOpacity={${o}}`,
    });
  }

  // TrendChart curve type
  for (const curve of ['monotoneX', 'catmullRom', 'natural', 'linear', 'cardinal']) {
    mutations.push({
      id: nextId('chart'),
      category: 'chart',
      targetMetric: 'chart_craft',
      description: `TrendChart curve → ${curve}`,
      file: TREND_FILE,
      find: /curve="[^"]+"/.source,
      replace: `curve="${curve}"`,
    });
  }

  // TrendChart height
  for (const h of ['320', '360', '400', '440', '480']) {
    mutations.push({
      id: nextId('chart'),
      category: 'chart',
      targetMetric: 'chart_craft',
      description: `TrendChart height → ${h}px`,
      file: TREND_FILE,
      find: /h-\[\d+px\]/.source,
      replace: `h-[${h}px]`,
    });
  }

  // TrendChart enableArea toggle
  for (const val of ['true', 'false']) {
    mutations.push({
      id: nextId('chart'),
      category: 'chart',
      targetMetric: 'chart_craft',
      description: `TrendChart enableArea → ${val}`,
      file: TREND_FILE,
      find: /enableArea/.source,
      replace: val === 'true' ? 'enableArea' : '{/* enableArea disabled */}enableArea={false}',
    });
  }

  // RoleBar bar opacity
  for (const o of ['0.55', '0.65', '0.75', '0.85', '0.95', '1.0']) {
    mutations.push({
      id: nextId('chart'),
      category: 'chart',
      targetMetric: 'chart_craft',
      description: `RoleBar opacity → ${o}`,
      file: ROLEBAR_FILE,
      find: /opacity: [\d.]+,/.source,
      replace: `opacity: ${o},`,
    });
  }

  // RoleBar bar height
  for (const h of ['h-5', 'h-6', 'h-7', 'h-8', 'h-9', 'h-10']) {
    mutations.push({
      id: nextId('chart'),
      category: 'chart',
      targetMetric: 'chart_craft',
      description: `RoleBar bar height → ${h}`,
      file: ROLEBAR_FILE,
      find: /flex-1 h-\d+ bg/.source,
      replace: `flex-1 ${h} bg`,
    });
  }

  // Stream chart height
  for (const h of ['300', '320', '360', '400', '440']) {
    mutations.push({
      id: nextId('chart'),
      category: 'chart',
      targetMetric: 'chart_craft',
      description: `Stream chart height → ${h}px`,
      file: STREAM_FILE,
      find: /h-\[\d+px\]/.source,
      replace: `h-[${h}px]`,
    });
  }

  // Stream fill opacity
  for (const o of ['0.45', '0.55', '0.65', '0.75', '0.85']) {
    mutations.push({
      id: nextId('chart'),
      category: 'chart',
      targetMetric: 'chart_craft',
      description: `Stream fillOpacity → ${o}`,
      file: STREAM_FILE,
      find: /fillOpacity=\{[\d.]+\}/.source,
      replace: `fillOpacity={${o}}`,
    });
  }

  // Stream curve type
  for (const curve of ['catmullRom', 'monotoneX', 'natural', 'basis']) {
    mutations.push({
      id: nextId('chart'),
      category: 'chart',
      targetMetric: 'chart_craft',
      description: `Stream curve → ${curve}`,
      file: STREAM_FILE,
      find: /curve="[^"]+"/.source,
      replace: `curve="${curve}"`,
    });
  }

  // Bump chart line width
  for (const w of ['1.5', '2', '2.5', '3', '3.5']) {
    mutations.push({
      id: nextId('chart'),
      category: 'chart',
      targetMetric: 'chart_craft',
      description: `Bump chart line width → ${w}`,
      file: BUMP_FILE,
      find: /lineWidth=\{[\d.]+\}/.source,
      replace: `lineWidth={${w}}`,
    });
  }

  // Bump chart point size
  for (const s of ['5', '6', '7', '8', '9', '10']) {
    mutations.push({
      id: nextId('chart'),
      category: 'chart',
      targetMetric: 'chart_craft',
      description: `Bump chart point size → ${s}`,
      file: BUMP_FILE,
      find: /pointSize=\{[\d]+\}/.source,
      replace: `pointSize={${s}}`,
    });
  }

  // Bump chart height
  for (const h of ['360', '400', '420', '460', '500']) {
    mutations.push({
      id: nextId('chart'),
      category: 'chart',
      targetMetric: 'chart_craft',
      description: `Bump chart height → ${h}px`,
      file: BUMP_FILE,
      find: /h-\[\d+px\]/.source,
      replace: `h-[${h}px]`,
    });
  }

  // Radar chart height
  for (const h of ['360', '400', '420', '460', '500']) {
    mutations.push({
      id: nextId('chart'),
      category: 'chart',
      targetMetric: 'chart_craft',
      description: `Radar chart height → ${h}px`,
      file: RADAR_FILE,
      find: /h-\[\d+px\]/.source,
      replace: `h-[${h}px]`,
    });
  }

  // Radar fill opacity
  for (const o of ['0.02', '0.04', '0.06', '0.08', '0.12']) {
    mutations.push({
      id: nextId('chart'),
      category: 'chart',
      targetMetric: 'chart_craft',
      description: `Radar fillOpacity → ${o}`,
      file: RADAR_FILE,
      find: /fillOpacity=\{[\d.]+\}/.source,
      replace: `fillOpacity={${o}}`,
    });
  }

  // Radar grid shape
  for (const shape of ['circular', 'linear']) {
    mutations.push({
      id: nextId('chart'),
      category: 'chart',
      targetMetric: 'chart_craft',
      description: `Radar grid shape → ${shape}`,
      file: RADAR_FILE,
      find: /gridShape="[^"]+"/.source,
      replace: `gridShape="${shape}"`,
    });
  }

  // Radar border width
  for (const w of ['1', '1.5', '2', '2.5', '3']) {
    mutations.push({
      id: nextId('chart'),
      category: 'chart',
      targetMetric: 'chart_craft',
      description: `Radar border width → ${w}`,
      file: RADAR_FILE,
      find: /borderWidth=\{[\d.]+\}/.source,
      replace: `borderWidth={${w}}`,
    });
  }

  // =============================================
  // ANIMATION MUTATIONS (target: animation_polish)
  // =============================================

  // Hero animation duration
  for (const d of ['0.3', '0.4', '0.5', '0.6', '0.8', '1.0']) {
    mutations.push({
      id: nextId('anim'),
      category: 'animation',
      targetMetric: 'animation_polish',
      description: `Hero entrance duration → ${d}s`,
      file: HERO_FILE,
      find: /duration: 0\.\d+/.source,
      replace: `duration: ${d}`,
    });
  }

  // Hero stagger delay
  for (const d of ['0.04', '0.06', '0.08', '0.10', '0.12', '0.15']) {
    mutations.push({
      id: nextId('anim'),
      category: 'animation',
      targetMetric: 'animation_polish',
      description: `Hero KPI stagger delay → ${d}s`,
      file: HERO_FILE,
      find: /delay: 0\.2 \+ i \* [\d.]+/.source,
      replace: `delay: 0.2 + i * ${d}`,
    });
  }

  // Hero entrance Y offset
  for (const y of ['8', '12', '16', '20', '24', '32']) {
    mutations.push({
      id: nextId('anim'),
      category: 'animation',
      targetMetric: 'animation_polish',
      description: `Hero entrance Y offset → ${y}px`,
      file: HERO_FILE,
      find: /initial=\{\{ opacity: 0, y: \d+ \}\}/.source,
      replace: `initial={{ opacity: 0, y: ${y} }}`,
    });
  }

  // Nivo motion config (applied to all charts)
  for (const config of ['gentle', 'wobbly', 'stiff', 'slow', 'molasses']) {
    for (const [file, comp] of [
      [TREND_FILE, 'TrendChart'], [BUMP_FILE, 'BumpChart'], [RADAR_FILE, 'RadarChart'],
    ] as const) {
      mutations.push({
        id: nextId('anim'),
        category: 'animation',
        targetMetric: 'animation_polish',
        description: `${comp} motionConfig → ${config}`,
        file: file,
        find: /motionConfig="[^"]+"/.source,
        replace: `motionConfig="${config}"`,
      });
    }
  }

  // =============================================
  // LAYOUT / HIERARCHY MUTATIONS
  // =============================================

  // Hero subtitle max-width
  for (const w of ['500px', '550px', '600px', '650px', '700px']) {
    mutations.push({
      id: nextId('layout'),
      category: 'layout',
      targetMetric: 'visual_hierarchy',
      description: `Hero subtitle max-width → ${w}`,
      file: HERO_FILE,
      find: /max-w-\[600px\]/.source,
      replace: `max-w-[${w}]`,
    });
  }

  // Hero KPI grid columns
  for (const cols of ['grid-cols-2', 'grid-cols-3', 'grid-cols-4']) {
    mutations.push({
      id: nextId('layout'),
      category: 'layout',
      targetMetric: 'visual_hierarchy',
      description: `Hero KPI mobile grid → ${cols}`,
      file: HERO_FILE,
      find: /grid grid-cols-\d+/.source,
      replace: `grid ${cols}`,
    });
  }

  // Hero top padding
  for (const pt of ['pt-16', 'pt-20', 'pt-24', 'pt-28', 'pt-32']) {
    mutations.push({
      id: nextId('layout'),
      category: 'layout',
      targetMetric: 'spacing_layout',
      description: `Hero top padding → ${pt}`,
      file: HERO_FILE,
      find: /pt-\d+/.source,
      replace: pt,
    });
  }

  // Chart card internal padding
  for (const p of ['p-4', 'p-5', 'p-6', 'p-7', 'p-8']) {
    for (const [file, comp] of [
      [TREND_FILE, 'TrendChart'], [ROLEBAR_FILE, 'RoleBar'], [STREAM_FILE, 'Stream'],
      [BUMP_FILE, 'Bump'], [RADAR_FILE, 'Radar'],
    ] as const) {
      mutations.push({
        id: nextId('layout'),
        category: 'layout',
        targetMetric: 'spacing_layout',
        description: `${comp} card padding → ${p}`,
        file: file,
        find: /rounded-xl shadow-sm p-\d+/.source,
        replace: `rounded-xl shadow-sm ${p}`,
      });
    }
  }

  // Chart card style: shadow vs flat vs border
  for (const [style, name] of [
    ['rounded-xl shadow-sm', 'shadow'],
    ['rounded-xl shadow-none border border-border', 'bordered'],
    ['rounded-xl shadow-md', 'strong-shadow'],
    ['rounded-none shadow-none', 'flat'],
    ['rounded-lg shadow-sm', 'small-radius'],
  ] as const) {
    mutations.push({
      id: nextId('layout'),
      category: 'layout',
      targetMetric: 'spacing_layout',
      description: `Chart card style → ${name}`,
      file: TREND_FILE,
      find: /rounded-\w+ shadow-\w+/.source,
      replace: style,
    });
  }

  // Subtitle margin bottom
  for (const mb of ['mb-4', 'mb-5', 'mb-6', 'mb-8', 'mb-10']) {
    mutations.push({
      id: nextId('layout'),
      category: 'layout',
      targetMetric: 'visual_hierarchy',
      description: `Section subtitle margin → ${mb}`,
      file: TREND_FILE,
      find: /text-sm text-text-secondary mb-\d+/.source,
      replace: `text-sm text-text-secondary ${mb}`,
    });
  }

  return mutations;
}

// Apply a mutation to the filesystem
export function applyMutation(mutation: Mutation): boolean {
  try {
    const content = read(mutation.file);
    const regex = new RegExp(mutation.find);

    if (!regex.test(content)) {
      console.warn(`Pattern not found for ${mutation.id}: ${mutation.find.slice(0, 60)}...`);
      return false;
    }

    const newContent = content.replace(regex, mutation.replace);
    if (newContent === content) {
      return false; // No change (already at this value)
    }

    fs.writeFileSync(mutation.file, newContent, 'utf-8');
    return true;
  } catch (err) {
    console.error(`Failed to apply ${mutation.id}: ${err}`);
    return false;
  }
}

// CLI: list all mutations
if (process.argv[1]?.endsWith('mutations.ts') || process.argv[1]?.endsWith('mutations.js')) {
  const all = generateMutations();
  console.log(`Total mutations: ${all.length}`);
  const byCategory = new Map<string, number>();
  const byMetric = new Map<string, number>();
  for (const m of all) {
    byCategory.set(m.category, (byCategory.get(m.category) ?? 0) + 1);
    byMetric.set(m.targetMetric, (byMetric.get(m.targetMetric) ?? 0) + 1);
  }
  console.log('\nBy category:');
  for (const [k, v] of byCategory) console.log(`  ${k}: ${v}`);
  console.log('\nBy target metric:');
  for (const [k, v] of byMetric) console.log(`  ${k}: ${v}`);
}
