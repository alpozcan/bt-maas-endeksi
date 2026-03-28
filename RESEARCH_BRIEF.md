# Research Brief — yazılımmaaş Design Optimization

## Problem Statement
Build an award-winning, light-mode data visualization website for Turkish software salary data (2018-2026). Current implementation looks generic — needs to match the quality of NYT, Economist, FT data visualizations.

## Research Direction
Iterative visual design improvement of a React/Astro/Nivo/Tremor data dashboard. Each experiment should:
1. Research ONE specific design pattern from an award-winning reference (IIB Awards, Pudding, NYT, Economist, FT, Bloomberg)
2. Apply that specific pattern to one component in the project
3. Take a Playwright screenshot
4. Score on 5 metrics (Visual Hierarchy, Information Density, Interactivity, Animation, Typography)
5. If score improved → commit. If not → revert.

## Base Repository
`/Users/alp/Development/SWESalaryComparison/` — Astro + React + Nivo + Tailwind

## Reference Documents
- `/Users/alp/Development/SWESalaryComparison/docs/references.md` — 76 visual references from IIB Awards, Pudding, Pew, Tremor, Nivo, Levels.fyi
- `/Users/alp/Development/SWESalaryComparison/docs/dashboards.md` — GitHub/Envato dashboard research
- `/Users/alp/Development/SWESalaryComparison/docs/news-design-patterns.md` — NYT/Bloomberg/FT/Economist design rules

## Metric (Karpathy Loop pattern)
Single objective metric: **Total design score out of 50** (5 sub-metrics × 10 each)
- Visual Hierarchy (1-10)
- Information Density (1-10)
- Interactivity Depth (1-10)
- Animation Polish (1-10)
- Typography & Spacing (1-10)

## Constraints
- Light mode only (warm off-white background #FAFAF8)
- Turkish text with proper characters (ş, ı, ö, ü, ç, ğ)
- Max 960px content width (NYT pattern)
- Must use: Nivo charts, Framer Motion, Tailwind CSS
- Each experiment ≤ 5 minutes
- Dev server at localhost:4321
- Screenshots saved to /screenshots/
- Log to /docs/experiment-log.md
