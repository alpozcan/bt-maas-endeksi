# User Instructions — Session 2026-03-28/29

## Project Goal
Build a lightweight, bookmark-worthy salary visualization website for the Turkish software industry using the önceki yazılımcı 2026 survey data (5,002 respondents, 37 positions).

**This is a NEW REPO** at `/Users/alp/Development/SWESalaryComparison/` — extracted from the existing multi-sector salary site at `/Users/alp/Development/Experimental/salary-comparison-astro/`. The existing repo stays untouched for all industries. This new repo is SOFTWARE INDUSTRY ONLY.

## Source Data
- Raw 2026 JSON: `/Users/alp/Development/Experimental/salary-comparison-astro/data/oncekiyazilimci-2026.json`
- Historical trend data: 2018–2026 (junior/mid/senior medians)
- Existing multi-sector site: `/Users/alp/Development/Experimental/salary-comparison-astro/`

## Key Data Points
- 5,002 respondents, 37 positions, 4 currencies (92% TRY)
- Medians (TRY monthly net): Junior ₺65,500 / Mid ₺102,500 / Senior ₺172,500
- YoY vs 2025: +32% / +38% / +35%
- AI tool usage: 67.8% total — Claude 55.4%, Gemini 31.7%, Codex 19.1%
- Istanbul 54.5%, Ankara 17.7%, Izmir 7.6%
- Remote 38%, Hybrid 44%, Office 16%

## Design Requirements
- **Light mode** — warm off-white background (#FAFAF8), not dark theme
- **Award-winning quality** — should look like NYT, Economist, FT data journalism, not a generic dashboard
- **Highly interactive** — not static charts; users should be able to explore, drag, filter, hover
- **Proper Turkish characters** throughout (ş, ı, ö, ü, ç, ğ, İ, Ş)
- **People should want to bookmark this** — it's a citable reference, not a landing page
- **Tells a story** — 8-year journey of Turkish software salaries (2018→2026)

## Design References Collected
- `docs/references.md` — 76 visual references from IIB Awards, Pudding, Pew, Tremor, Nivo, Levels.fyi
- `docs/dashboards.md` — GitHub/Envato dashboard research (Tremor, shadcn, ThemeForest bestsellers)
- `docs/news-design-patterns.md` — NYT, Bloomberg, FT, Economist, Reuters design rules with exact hex values, font sizes, spacing

## 20 Design Rules (from news-design-patterns.md)
1. 20px body text, 1.5-1.7 line-height
2. Tabular lining figures for all numerical data (`font-variant-numeric: tabular-nums lining-nums`)
3. Chart titles left-aligned bold, subtitles regular weight
4. Source text 9-11px at 75% opacity
5. Max 2 typefaces (one serif, one sans-serif)
6. Max 3-4 colors per chart
7. Grey out non-essential data, color only the story
8. Body text dark grey (#333), not pure black
9. Warm background (#FAFAF8) instead of pure white
10. Sequential color scale from primary brand color
11. Text max-width 600-700px; charts extend to 900-960px
12. 48-64px spacing between major sections
13. Charts need 24-40px margin from surrounding text
14. No card borders — separate with whitespace and subtle shadows
15. Horizontal gridlines only, light grey (#EBEBEB)
16. Direct labeling on charts instead of legends
17. Y-axis labels inside chart area
18. Brand mark on every chart (thin accent bar)
19. Chart aspect ratio ~16:9 or 4:3
20. Always include descriptive subtitle AND data source

## Tech Stack
- Astro 6 + React + Tailwind CSS 4
- Nivo (line, bump, stream, radar, swarmplot, chord, sunburst, waffle)
- Tremor (AreaChart, BarChart, DonutChart, SparkChart, Tracker, Card)
- Three.js / React Three Fiber + Drei + @react-three/postprocessing (Bloom)
- D3.js (d3-force for clustered bubble simulation)
- Framer Motion (entrance animations, spring physics)
- GSAP + ScrollTrigger (scroll-driven choreography)
- Lenis (smooth scroll)
- Plotly.js (animated bubble chart with frames/slider/play-pause)
- Matter.js (physics playground)
- tsParticles (particle backgrounds)
- ECharts + ECharts GL (3D bar charts)
- Playwright (visual regression screenshots)
- Vitest (data integrity tests)

## Experimentation Pipeline (ARIS / Karpathy Loop)
- Use ARIS (Auto-Research-In-Sleep) pattern installed at `~/.claude/skills/`
- Use `/dse-loop` skill for autonomous design space exploration
- Each experiment: research one reference → apply one improvement → screenshot → score → commit or revert
- 5 quality metrics (each 1-10, total /50):
  1. Visual Hierarchy
  2. Information Density
  3. Interactivity Depth
  4. Animation Polish
  5. Typography & Spacing
- Target: total score ≥ 40/50
- Use OpenRouter API for visual scoring of screenshots (multimodal model)
- OpenRouter API key: stored as env var OPENROUTER_API_KEY
- Budget: $10 for 1000 experiments
- Need a multimodal vision model that can score screenshots visually

## Domain
- Preferred: yazilimmaas.com.tr (cheapest, ~50-150 TRY/year via nic.tr or isimtescil.net)
- Alternative: devmaas.com (~$8-9/year via Cloudflare)
- Deploy: Cloudflare Pages

## Critical Feedback
- Do NOT write raw HTML/CSS mockups — use proper frameworks
- Do NOT use bare JavaScript — use the actual library APIs (React components, Nivo, Tremor)
- Do NOT code blind without studying real references first
- Do NOT iterate 16 times on the same failing approach — pivot after 2 failures
- For design work, recommend visual-first tools (v0.dev) or study references BEFORE coding
- Build ONE section at a time, get feedback, then proceed
- Research BEFORE building — study actual example projects from the libraries
