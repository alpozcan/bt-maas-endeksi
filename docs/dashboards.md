# Dashboard Research: Design Patterns & Inspiration

> Research date: 2026-03-28
> Purpose: Extract design patterns from top-selling and most-starred dashboard projects for SWE Salary Comparison app.

---

## Table of Contents

1. [Tremor Dashboard Projects (GitHub)](#1-tremor-dashboard-projects-github)
2. [Shadcn Dashboard Projects (GitHub)](#2-shadcn-dashboard-projects-github)
3. [Nivo Dashboard Projects (GitHub)](#3-nivo-dashboard-projects-github)
4. [React Data Visualization Dashboards (GitHub, stars >200)](#4-react-data-visualization-dashboards-github)
5. [Tremor OSS Dashboard Template (Deep Dive)](#5-tremor-oss-dashboard-template)
6. [Tremor NPM Chart Components (Complete List)](#6-tremor-npm-chart-components)
7. [ThemeForest Best-Selling React Dashboards](#7-themeforest-best-selling-react-dashboards)
8. [Salary / Compensation / HR Analytics Dashboards](#8-salary--compensation--hr-analytics-dashboards)
9. [Shadcn Admin (Deep Dive)](#9-shadcn-admin-deep-dive)
10. [Light Mode Dashboard Inspiration](#10-light-mode-dashboard-inspiration)
11. [Master Summary: Design Pattern Extraction](#11-master-summary-design-pattern-extraction)

---

## 1. Tremor Dashboard Projects (GitHub)

Sorted by stars. Tremor is built on React + Tailwind CSS + Radix UI + Recharts.

| # | Repository | Stars | Description | URL |
|---|-----------|-------|-------------|-----|
| 1 | tremorlabs/tremor | ~16.5k | Core library: 35+ customizable, accessible React components for dashboards | https://github.com/tremorlabs/tremor |
| 2 | tremorlabs/tremor-npm | ~16.5k | 20+ open-source chart/viz components on Tailwind CSS | https://github.com/tremorlabs/tremor-npm |
| 3 | tremorlabs/template-dashboard-oss | ~3.2k | Free Next.js SaaS dashboard template using Tremor Raw | https://github.com/tremorlabs/template-dashboard-oss |
| 4 | app-generator/sample-tremor-github-charts | - | GitHub API data visualized with Tremor | https://github.com/app-generator/sample-tremor-github-charts |
| 5 | redwoodjs/redwoodjs-tremor-dashboard-demo | - | RedwoodJS + Tremor demo dashboard | https://github.com/redwoodjs/redwoodjs-tremor-dashboard-demo |
| 6 | fson/tremor (fork) | - | Fork of the core Tremor library | https://github.com/fson/tremor |
| 7 | alrico88/tremor (fork) | - | Fork of the core Tremor library | https://github.com/alrico88/tremor |

**What makes Tremor premium:**
- Data-centric minimal chrome -- content over decoration
- Blue as default brand color; gray-based neutral backgrounds
- Built on Radix UI primitives for accessibility
- 250+ pre-built blocks/templates with light & dark mode defaults

---

## 2. Shadcn Dashboard Projects (GitHub)

| # | Repository | Stars | Description | URL |
|---|-----------|-------|-------------|-----|
| 1 | satnaing/shadcn-admin | ~11.1k | Admin Dashboard UI with Shadcn + Vite | https://github.com/satnaing/shadcn-admin |
| 2 | Kiranism/next-shadcn-dashboard-starter | ~5.8k | Admin dashboard with Next.js 16 + shadcn/ui + Tailwind + TS | https://github.com/Kiranism/next-shadcn-dashboard-starter |
| 3 | birobirobiro/awesome-shadcn-ui | - | Curated list of awesome shadcn/ui resources | https://github.com/birobirobiro/awesome-shadcn-ui |
| 4 | shadcn/ui (official examples) | - | Official dashboard example at ui.shadcn.com/examples/dashboard | https://ui.shadcn.com/examples/dashboard |
| 5 | Sven-Bo/streamlit-shadcn-dashboard | - | Streamlit + shadcn dashboard | https://github.com/Sven-Bo/streamlit-shadcn-dashboard |

**What makes shadcn dashboards premium:**
- Copy-paste ownership model -- no runtime dependency
- Radix UI primitives for accessibility
- Cmd+K global search command palette
- Consistent light/dark mode with RTL support
- Collapsible sidebar with grouped menu items

---

## 3. Nivo Dashboard Projects (GitHub)

Nivo is built on D3.js + React. Main repo: [plouc/nivo](https://github.com/plouc/nivo) (~14k stars).

| # | Repository | Description | URL |
|---|-----------|-------------|-----|
| 1 | plouc/nivo | Core library: rich dataviz components on D3 + React (14k stars) | https://github.com/plouc/nivo |
| 2 | fezzopro/react-admin-dashboard | React + MUI + Nivo Charts + Formik + FullCalendar | https://github.com/fezzopro/react-admin-dashboard |
| 3 | arnobt78/Admin-Panel-Dashboard | React + MUI + Nivo (Pie, Line, Geo charts) + Data Grid | https://github.com/arnobt78/Admin-Panel-User-Employee-Management-Dashboard--React-Frontend |
| 4 | Shivam-Sharma-1/Dashboard | MERN stack + Nivo, light/dark mode | https://github.com/Shivam-Sharma-1/Dashboard |
| 5 | samiur-r/react-nivo-dashboard | Simple data visualization in React with Nivo | https://github.com/samiur-r/react-nivo-dashboard |
| 6 | julbrs/cube-nivo-tutorial | Cube.dev + Nivo dashboard tutorial | https://github.com/julbrs/cube-nivo-tutorial |

**Nivo design characteristics:**
- SVG-based with smooth animations
- Server-side rendering support (unique among chart libs)
- Rich interactivity: tooltips, legends, annotations
- Theming system with full color control
- Typically paired with Material UI in dashboard projects

---

## 4. React Data Visualization Dashboards (GitHub)

Projects with significant stars focused on data visualization.

| # | Repository | Stars | Tech Stack | URL |
|---|-----------|-------|------------|-----|
| 1 | ant-design/ant-design-pro | ~37.9k | React + Ant Design + UmiJS | https://github.com/ant-design/ant-design-pro |
| 2 | refinedev/refine | ~34.1k | React, headless (any UI lib) | https://github.com/refinedev/refine |
| 3 | recharts/recharts | ~26.8k | React + D3 (chart library) | https://github.com/recharts/recharts |
| 4 | marmelab/react-admin | ~26.5k | React + Material UI | https://github.com/marmelab/react-admin |
| 5 | TanStack/react-charts | - | React chart library by TanStack | https://github.com/TanStack/react-charts |
| 6 | reaviz/reaviz | - | Modular React chart components on D3 | https://github.com/reaviz/reaviz |
| 7 | reactchartjs/react-chartjs-2 | - | React wrapper for Chart.js | https://github.com/reactchartjs/react-chartjs-2 |
| 8 | propeldata/ui-kit | - | React data viz components for analytics | https://github.com/propeldata/ui-kit |
| 9 | creativetimofficial/material-dashboard-react | ~3k | React + MUI | https://github.com/creativetimofficial/material-dashboard-react |
| 10 | devias-io/material-kit-react | ~5.6k | React + MUI | https://github.com/devias-io/material-kit-react |
| 11 | horizon-ui/horizon-ui-chakra | ~2.8k | React + Chakra UI | https://github.com/horizon-ui/horizon-ui-chakra |
| 12 | cruip/tailwind-dashboard-template | ~2.7k | React + Vite + Tailwind + Chart.js 3 | https://github.com/cruip/tailwind-dashboard-template |
| 13 | 0wczar/airframe-react | - | React + Bootstrap 4 | https://github.com/0wczar/airframe-react |
| 14 | admin-dashboards/react-dashboards | - | Curated list of free React dashboards | https://github.com/admin-dashboards/react-dashboards |
| 15 | themesberg/volt-react-dashboard | ~1k | React + Bootstrap 5 | https://github.com/themesberg/volt-react-dashboard |

---

## 5. Tremor OSS Dashboard Template

**Repo:** https://github.com/tremorlabs/template-dashboard-oss

### Tech Stack
- Framework: Next.js + TypeScript (98.7% of codebase)
- UI Components: Tremor Raw component library
- Styling: Tailwind CSS
- Charts: Recharts
- Primitives: Radix UI
- Font: Inter (via Next.js font optimization)

### Live Demos
- OSS version: https://dashboard-oss.tremor.so/overview
- Full version: https://dashboard.tremor.so/overview

### Color Palette (Light Mode Defaults)
| Element | Value |
|---------|-------|
| Background | White (`bg-white`) |
| Dark BG | Gray-950 (`bg-gray-950`) |
| Primary text | Gray-900 |
| Secondary text | Gray-600 |
| Muted text | Gray-500 |
| Borders | Gray-200 (light), Gray-800 (dark) |
| Accent / Brand | Blue-500 |
| Color scheme | `color-scheme: light` on html element |

### Layout Pattern
- Sidebar navigation (collapsible)
- KPI cards at top
- Chart area below with area charts, bar charts
- Data tables with filtering
- Clean whitespace, minimal chrome

### What Makes It Premium
- Professional Tremor Raw component system
- Optimized font loading (Inter via Next.js)
- TypeScript throughout
- Data-centric: charts and metrics take center stage
- Clean, enterprise SaaS aesthetic
- Available in both OSS and commercial versions

---

## 6. Tremor NPM Chart Components

**Repo:** https://github.com/tremorlabs/tremor-npm (16.5k stars)
**Docs:** https://tremor.so

### Complete Chart Components

| Component | Type | Description |
|-----------|------|-------------|
| AreaChart | Chart | Stacked/simple area charts with gradient fills |
| BarChart | Chart | Horizontal and vertical bar charts |
| LineChart | Chart | Single/multi-line trend charts |
| DonutChart | Chart | Ring/donut charts with center label |
| ComboChart | Chart | Combined bar + line charts |
| SparkChart | Chart | Inline mini charts for KPI cards |

### Data Display Components

| Component | Type | Description |
|-----------|------|-------------|
| BarList | Visualization | Horizontal ranked bar lists |
| CategoryBar | Visualization | Segmented category progress bars |
| ProgressBar | Visualization | Linear progress indicators |
| ProgressCircle | Visualization | Circular progress indicators |
| Tracker | Visualization | Status tracker (uptime-style grid) |

### Tremor Full Color Palette (22 Colors)

| Color | Hex |
|-------|-----|
| Slate | #64748b |
| Gray | #6b7280 |
| Zinc | #71717a |
| Neutral | #737373 |
| Stone | #78716c |
| Red | #ef4444 |
| Orange | #f97316 |
| Amber | #f59e0b |
| Yellow | #eab308 |
| Lime | #84cc16 |
| Green | #22c55e |
| Emerald | #10b981 |
| Teal | #14b8a6 |
| Cyan | #06b6d4 |
| Sky | #0ea5e9 |
| Blue | #3b82f6 |
| Indigo | #6366f1 |
| Violet | #8b5cf6 |
| Purple | #a855f7 |
| Fuchsia | #d946ef |
| Pink | #ec4899 |
| Rose | #f43f5e |

Colors are semantic: pick a major color and shades auto-adjust. Custom hex values supported via Tailwind safelist.

---

## 7. ThemeForest Best-Selling React Dashboards

### Top 10 from ThemeForest Search

| # | Name | Price | Sales | Key Features |
|---|------|-------|-------|-------------|
| 1 | **Metronic** | $49 | 100k+ | World's #1 selling. Tailwind + shadcn/ui, 40+ layouts, 1000+ components, 8 framework variants |
| 2 | **Vuexy** | $49 | ~30k | Next.js + MUI, 5 niche dashboards (Analytics, CRM, eCommerce, Logistics, Academy), full TS |
| 3 | **Fuse React** | $29 | 11.3k | Next.js + Vite, React 19, TypeScript, Tailwind. 295 reviews |
| 4 | **Isomorphic** | $24 | 8.3k | React admin with NextJS and TypeScript options. 174 reviews |
| 5 | **Velzon** | - | ~5k | React (JS + TS), 7 dashboard demos, 165+ pages, 14+ apps, 12+ color themes |
| 6 | **Skote** | $22 | 4.6k | React Redux & Hooks, minimal design. 82 reviews |
| 7 | **Gogo (Vite)** | $28 | 3.6k | React 19 + MUI + Tailwind + Figma included. 113 reviews |
| 8 | **Gogo (Next.js)** | $28 | 2.1k | Next.js variant of Gogo. 57 reviews |
| 9 | **Acorn (Vite)** | $28 | 1.9k | React 19 + MUI + TypeScript + Figma. 45 reviews |
| 10 | **Acorn (Next.js)** | $28 | 1.1k | Next.js variant of Acorn. 35 reviews |

### What the best-sellers have in common
- All include TypeScript support
- All have light + dark mode
- All include Figma or design files
- Price range: $22-$49
- Top sellers all have 5+ dashboard variants
- MUI and Tailwind are the dominant styling approaches
- Metronic's dominance (100k+ sales) comes from breadth: 1000+ components

---

## 8. Salary / Compensation / HR Analytics Dashboards

### React-Based Projects

| Project | Stack | Features | URL |
|---------|-------|----------|-----|
| rajkumarpave/hr-dashboard-react | React + Vite | HR metrics, hiring stats, charts, customizable widgets | https://github.com/rajkumarpave/hr-dashboard-react |
| Darsh-Jogi/Employee-Management-System | MERN stack | Employee + HR dashboards, salary records, attendance, leave management | https://github.com/Darsh-Jogi/Employee-Management-System |
| fenil29/employee-management-system | React + Node + Express + MongoDB | Admin/HR/Employee dashboards, auth, mobile-friendly | https://github.com/fenil29/employee-management-system-frontend-react |
| berthutapea/mern-employee-salary-management | MERN (MySQL variant) | Payroll management with ApexCharts for interactive graphics | https://github.com/berthutapea/mern-employee-salary-management |

### Commercial Platforms (Reference)
- **PayAnalytics** (payanalytics.com) -- Pay equity & workforce analytics
- **Payscale** (payscale.com) -- Salary comparison, compensation data, pay equity analysis
- **Ravio** (ravio.com) -- Compensation benchmarking with company data vs market averages
- **Crunchr** -- Compensation analysis with compa-ratio & benchmarking

### Key Design Patterns from Salary/HR Dashboards
- **KPI cards at top:** Average salary, headcount, attrition rate, pay gap %
- **Distribution charts:** Salary histogram by level/department/location
- **Comparison views:** Side-by-side bars for market vs actual compensation
- **Filter panels:** Department, location, seniority, gender breakdowns
- **Tables with sparklines:** Employee lists with inline salary trend charts
- **Percentile bands:** P25/P50/P75/P90 salary range visualizations

---

## 9. Shadcn Admin (Deep Dive)

**Repo:** https://github.com/satnaing/shadcn-admin (11.1k stars)
**Demo:** https://shadcn-admin.netlify.app/

### Tech Stack
- UI Framework: shadcn/ui (Tailwind CSS + Radix UI)
- Build Tool: Vite
- Routing: TanStack Router
- Language: TypeScript
- Icons: Lucide Icons + Tabler Icons (brands only)
- Auth: Clerk (partial implementation)
- Code Quality: ESLint + Prettier

### Layout Pattern
- **Sidebar:** Collapsible, with grouped menu items, scrollable, mini/wide modes
- **Global Search:** Cmd+K command palette for quick navigation
- **Content Area:** Card-based grid layouts
- **Mobile:** Sheet-based sidebar on mobile viewports

### Pages (10+ pre-built)
- Dashboard (main overview with charts)
- User management / profile
- Data tables with pagination, filtering, sorting
- Authentication (sign-in/sign-up)
- Settings
- Notifications
- Error pages (404, 500, 403)
- Tasks

### Color Palette
- Light mode: White backgrounds, gray-100 cards, gray-900 text
- Dark mode: Full dark theme toggle
- Accent: Blue/violet primary actions
- Borders: Gray-200 (light), gray-800 (dark)
- Follows shadcn/ui default zinc-based neutral scale

### What Makes It Premium
- RTL support with directional layout awareness (10+ components modified)
- Accessible: WAI-ARIA compliant components from Radix UI
- Cmd+K search -- feels like a real SaaS product
- Clean typography with consistent spacing
- No runtime dependency (copy-paste model)
- Active maintenance, 11k+ stars growing fast

---

## 10. Light Mode Dashboard Inspiration

### Top Light-Mode-First Templates

| Template | Tech Stack | Demo | Standout Feature |
|----------|-----------|------|-----------------|
| **Mosaic Lite** | React + Vite + Tailwind + Chart.js 3 | https://mosaic.cruip.com/ | Looks like a finished SaaS product out of the box |
| **TailAdmin** | React 19 + Vite + Tailwind v4 | https://tailadmin.com/react | 500+ UI elements, 7 dashboard variants, AI-ready components |
| **Horizon UI** | React + Chakra UI | https://horizon-ui.com/horizon-ui-chakra/ | Glassmorphism effects, gradient accents, NFT marketplace page |
| **Minimal UI** | React + MUI | https://free.minimals.cc | Premium-grade Material UI, generous whitespace |
| **Windmill Dashboard** | React + Tailwind + Windmill UI | https://windmill-dashboard-react.vercel.app/ | 100% keyboard navigable, WCAG compliant, accessibility-first |
| **Berry MUI** | React + MUI + Redux + ApexCharts | https://berrydashboard.com/free/ | Bold color palette with visual warmth, MUI Store featured |
| **Mantis** | React + MUI + Redux Toolkit + ApexCharts | https://mantisdashboard.com/free/ | MUI + Ant Design visual philosophy blend |
| **Devias Kit** | React + MUI | https://material-kit-react.devias.io | Benchmark for free Material Design dashboards |

### Premium (Paid) Light Mode Templates

| Template | Price | Demo | Standout Feature |
|----------|-------|------|-----------------|
| **Apex** | $69+ | https://apex-dashboard.pages.dev/ | Next.js 16 + shadcn + Recharts 3, 125+ routes, live theme customizer |
| **Flux** | $69+ | https://flux-dashboard.pages.dev/ | Gradient-forward design, 300+ color combos, Framer Motion animations |
| **Zenith** | $69+ | https://zenith-dashboard.pages.dev/dashboard | Achromatic (black-and-white) palette, ultra-minimal, brand-neutral |
| **Vault** | $69+ | https://vault-dashboard-9l9.pages.dev/dashboard | Robinhood-inspired fintech dashboard, 10+ chart types |
| **Ember** | $69+ | https://ember-dashboard-dlr.pages.dev/ | Healthcare-specific, 50+ medical workflow pages |

### Light Mode Color Patterns (Common Across Top Templates)

| Element | Typical Values |
|---------|---------------|
| Page background | `#FFFFFF` or `#F9FAFB` (gray-50) or `#F8FAFC` (slate-50) |
| Card background | `#FFFFFF` with subtle shadow |
| Card border | `#E5E7EB` (gray-200) or none with shadow |
| Primary text | `#111827` (gray-900) or `#1F2937` (gray-800) |
| Secondary text | `#6B7280` (gray-500) |
| Muted text | `#9CA3AF` (gray-400) |
| Primary accent | Blue-500 (`#3B82F6`) or Indigo-600 (`#4F46E5`) |
| Success | Emerald-500 (`#10B981`) |
| Warning | Amber-500 (`#F59E0B`) |
| Danger | Red-500 (`#EF4444`) |
| Border radius | `0.5rem` (8px) cards, `0.375rem` (6px) buttons |
| Shadow | `0 1px 3px rgba(0,0,0,0.1)` (shadow-sm) |

---

## 11. Master Summary: Design Pattern Extraction

### Layout Patterns (What Works)

**Sidebar + Top Bar (Dominant Pattern -- 80%+ of top templates)**
- Collapsible sidebar: 240px expanded, 64px collapsed
- Logo/brand at top of sidebar
- Grouped nav items with section labels
- User avatar + settings at sidebar bottom
- Breadcrumbs or page title in top bar
- Global search (Cmd+K) in top bar

**Content Area Patterns:**
- KPI metric cards in a 3-4 column grid at top
- Main chart (area or bar) spanning full width below KPIs
- Secondary charts in 2-column grid
- Data table below charts with filters
- Right sidebar for details/panels (optional)

### Chart Libraries Ranked by Popularity in Dashboards

| Library | Used By | Stars | Best For |
|---------|---------|-------|----------|
| Recharts | Tremor, shadcn templates, Apex | 26.8k | General purpose, React-native API |
| Chart.js (react-chartjs-2) | Mosaic, CoreUI, Volt | - | Simple charts, lightweight |
| ApexCharts | Berry, Mantis, salary dashboards | - | Interactive, animations |
| Nivo | MUI-based admin panels | 14k | Complex viz, SSR support |
| D3.js (direct) | Custom dashboards | - | Full control, complex viz |

### What Makes a Dashboard Look Premium

1. **Typography:** Inter or system font, clear hierarchy (text-3xl for KPIs, text-sm for labels)
2. **Whitespace:** Generous padding (p-6 cards, gap-6 grids), never cramped
3. **Shadows:** Subtle, consistent (`shadow-sm` or `shadow-md`), never harsh
4. **Color restraint:** 1 accent color + grays. Max 3-4 colors in charts
5. **Rounded corners:** Consistent radius (8px cards, 6px buttons, 4px inputs)
6. **Micro-interactions:** Hover states on cards, smooth transitions (150-200ms)
7. **Data density done right:** Show metrics that matter, hide complexity behind filters
8. **Chart polish:** Gridlines light gray, no excessive axis labels, tooltips on hover
9. **Consistent spacing:** 4px/8px grid system throughout
10. **Professional empty states:** Illustrations + CTAs when no data

### Recommended Stack for SWE Salary Comparison Dashboard

Based on this research, the optimal stack for a premium-feeling salary comparison dashboard:

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Astro (existing) or Next.js | SSG for performance |
| UI Components | shadcn/ui (Tailwind + Radix) | Copy-paste, accessible, 11k+ stars momentum |
| Charts | Recharts or Tremor chart components | React-native API, great defaults |
| Styling | Tailwind CSS v4 | Utility-first, matches component libs |
| Color Palette | Slate/gray neutrals + Blue/Indigo accent | Proven professional look |
| Layout | Sidebar (collapsible) + KPI cards + charts | Dominant pattern across all top templates |
| Typography | Inter | Universal dashboard font |

### Salary-Specific UI Patterns to Implement

- Percentile range bars (P25/P50/P75/P90) for salary bands
- Location comparison cards (side-by-side city comparisons)
- Experience vs salary scatter plots or line charts
- Company-tier breakdown (FAANG vs startup vs mid-size)
- Filter bar: role, location, experience, company size
- KPI cards: median salary, YoY change, sample size, top-paying company
- Salary distribution histogram
- Interactive data table with sortable columns
