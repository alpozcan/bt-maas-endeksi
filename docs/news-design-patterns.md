# News Outlet Data Visualization Design Patterns

> Research compiled from NYT, Bloomberg, Reuters, Washington Post, The Economist, and Financial Times design systems.
> For use in SWE Salary Comparison project.

---

## Table of Contents

1. [New York Times](#new-york-times)
2. [Bloomberg](#bloomberg)
3. [The Economist](#the-economist)
4. [Financial Times](#financial-times)
5. [Washington Post](#washington-post)
6. [Reuters Graphics](#reuters-graphics)
7. [Urban Institute (Reference Style Guide)](#urban-institute-reference)
8. [FT Visual Vocabulary (Chart Type Selection)](#ft-visual-vocabulary)
9. [Salary / Compensation Infographic Patterns](#salary-infographic-patterns)
10. [Premium Light-Mode Design Principles](#premium-light-mode-principles)
11. [20 Specific Design Rules to Follow](#20-design-rules)

---

## New York Times

### Typography
| Element | Font | Weight | Size | Notes |
|---------|------|--------|------|-------|
| Masthead | Engravers' Old English BT | — | — | Blackletter heritage |
| Headlines | NYT Cheltenham (custom) | Bold | ~28-36px | Serif, sharp, authoritative |
| Body text | Georgia | Regular | 20px | Softer grey (#333), not pure black |
| Subheadings/captions | Franklin Gothic (NYT Franklin) | Medium/Bold | 14-16px | Sans-serif contrast |
| Data labels | NYT Franklin | Regular/Medium | 12-14px | Sans-serif, uppercase for categories |
| Chart titles | NYT Cheltenham | Bold | 22-24px | Left-aligned |
| Source/credit | NYT Franklin | Regular | 11-12px | Light grey |

**Web-available alternatives:** Georgia (body), Franklin Gothic / Libre Franklin (UI/data), Cheltenham alternatives like Sentinel or Zilla Slab (headlines).

### Colors
| Use | Color | Hex |
|-----|-------|-----|
| Background | White | `#FFFFFF` |
| Body text | Dark grey (not black) | `#333333` |
| Secondary text | Medium grey | `#666666` |
| Tertiary/caption | Light grey | `#999999` |
| Chart blue | — | `#1A4E8A` (typical) |
| Chart red | — | `#CB4335` |
| Chart accent | Muted palette, 4-6 colors max | Varies by story |
| Borders | Very subtle bottom lines | `#E2E2E2` |
| Section dividers | Thin hairlines | `#EBEBEB` |

### Layout
- Article max-width: ~600-700px for text column
- Charts can extend wider: up to ~945px (breaking out of text column)
- Line-height: ~1.6 for body text
- Generous top/bottom padding between sections: 40-60px
- Charts float with ~20-30px margin from surrounding text
- White backgrounds with no card borders; separation via whitespace alone

### Chart Style
- Minimal axis lines: only bottom x-axis, no left/right/top borders
- Light grey horizontal gridlines (#E2E2E2) or none at all
- Direct annotation on the chart itself rather than legends
- Annotations use arrows + small text blocks
- Tooltips: clean white card with subtle shadow, 12-14px text

### What Makes It Premium
- Extreme restraint: charts use 2-3 colors maximum
- Annotation-driven storytelling: text sits on the chart, not in a separate legend
- No decorative elements; every pixel has a purpose
- Separation through whitespace, not borders or backgrounds

---

## Bloomberg

### Typography
| Element | Font | Notes |
|---------|------|-------|
| Primary sans-serif | Neue Haas Grotesk | Helvetica-derived, slightly straighter R and a |
| Map labels (uppercase) | Haas Grotesk | letter-spacing: 0.2em |
| Numbers in data | Tabular lining figures | Monospaced numerals for alignment |
| Headlines | Neue Haas Grotesk | Bold, large |

**Web-available alternatives:** Inter, Helvetica Neue, or Haas Grotesk (if licensed).

### Colors
| Use | Color | Hex |
|-----|-------|-----|
| Web background | White | `#FFFFFF` |
| Terminal background | Black | `#000000` |
| Primary black | Black | `#000000` |
| Brand red | — | `#FF433D` |
| Brand blue | — | `#0068FF` |
| Brand green/teal | — | `#4AF6C3` |
| Brand orange | — | `#FB8B1E` |
| Chart palette | Saturated, pure, bright | High chroma colors |

### Chart Style
- Bold, high-contrast color choices — saturated and pure, never muddy
- Clean sans-serif labels
- Distinctive thick axis lines
- Data-dense: Bloomberg packs more information per chart than most outlets
- Terminal-inspired typography: monospace feel for numerical displays
- Interactive charts with smooth transitions

### What Makes It Premium
- Confidence in bold color: saturated hues that feel authoritative, not playful
- Data density: does not dumb down; trusts the reader
- Consistent monospace-style number treatment across all data displays
- Strong brand recognition from color + type combination alone

---

## The Economist

### Typography
| Element | Font | Weight/Size | Notes |
|---------|------|-------------|-------|
| Chart titles | Econ Sans | Bold, ~18-20px | Left-aligned, flush with chart |
| Chart subtitles | Econ Sans | Regular, ~14px | Describes what chart shows |
| Axis labels | Econ Sans | Regular, ~12px | Grey (#758D99) |
| Source line | Econ Sans | Regular, ~9-10px | 75% opacity, bottom-left |
| Data labels | Econ Sans Condensed | Regular | Inside chart area |

**Web-available alternatives:** Roboto Condensed (commonly used in recreations), or IBM Plex Sans.

### Colors
| Use | Color | Hex |
|-----|-------|-----|
| Economist Red (top bar) | Red | `#E3120B` |
| Chart background | Light grey-blue | `#E9EDF0` |
| Alternative bg (beige) | Warm grey | `#F1F0E9` |
| Alternative bg (blue) | Light blue | `#DEE9EC` |
| Gridlines | Grey | `#758D99` |
| Red (chart) | — | `#DB444B` |
| Blue (chart) | — | `#006BA2` |
| Cyan (chart) | — | `#3EBCD2` |
| Green (chart) | — | `#379A8B` |
| Yellow (chart) | — | `#EBB434` |
| Olive (chart) | — | `#B4BA39` |
| Purple (chart) | — | `#9A607F` |
| Gold (chart) | — | `#D1B07C` |
| Unhighlighted lines | Light grey | `#D4DDDD` |

### Layout Rules
- Aspect ratio: 3.2 / 7 (~0.46, portrait-leaning)
- Margins: 0.5cm left and right
- Legend positioned inside plot area (top-left region)
- No legend title; no legend background
- Highlighted lines: stroke-width 1.25; unhighlighted: 0.75

### Chart Style
- **Red top bar**: A horizontal line in `#E3120B` runs across the entire top of every chart
- **Red tag**: A small rectangle at top-left corner (brand mark)
- Y-axis labels sit **inside** the chart area, on top of gridlines
- Y-axis positioned on the **right** side
- Only horizontal gridlines shown (no vertical, no minor gridlines)
- Only the bottom x-axis shown; no bounding box
- Titles are short, sometimes witty; subtitles are descriptive
- Source text at bottom-left in 75% opacity

### What Makes It Premium
- The red top bar is instantly recognizable brand identity
- Controlled, muted color palette — never more than 3-4 active colors per chart
- Chart background is tinted (not pure white), adding warmth and depth
- Y-axis labels float inside the chart: eliminates dead space
- Witty, editorial titles that tell you what to think about the data

---

## Financial Times

### Typography
| Element | Font | Notes |
|---------|------|-------|
| Headlines | Financier Display | Serif, designed by Kris Sowersby (Klim Type Foundry) |
| Body text | Financier Text | Serif, optimized for reading |
| UI / Data / Charts | Metric | Sans-serif by Klim |
| Monospace/data | — | Tabular figures in Metric |

**Web-available alternatives:** Source Serif Pro (headlines), Inter or Source Sans Pro (data/UI).

### Colors (Origami Design System — o-colors)
| Use | Color | Hex |
|-----|-------|-----|
| Paper (background) | FT Pink/Cream | `#FFF1E5` |
| White | — | `#FFFFFF` |
| Black | — | `#000000` |
| Claret (primary accent) | Deep wine red | `#990F3D` |
| Teal | — | `#0D7680` |
| Oxford (blue) | — | `#0F5499` |
| Wheat (warm neutral) | — | `#F2DFCE` |
| Mandarin (orange) | — | `#FF8833` |
| Lemon | — | `#FFD700` |
| Jade | — | `#00994D` |
| Crimson | — | `#CC0000` |
| Candy (pink) | — | `#FF7FAA` |
| Wasabi | — | `#96CC28` |
| Peach (brand) | — | `#FCD0AF` |
| Grey (brand) | — | `#3E474F` |

### Layout
- Signature warm `#FFF1E5` background (the "FT pink") instead of pure white
- Article max-width: ~700px
- Charts can break out to ~960px
- Generous whitespace: 32-48px between sections

### Chart Style
- Horizontal gridlines only, very light grey
- Direct labeling preferred over legends
- Annotation-heavy: callout boxes, reference lines
- Clean axis: minimal tick marks, no box borders
- Source and methodology notes below chart in small text

### What Makes It Premium
- The warm paper background (`#FFF1E5`) is THE signature move — it feels like quality newsprint
- Financier Display is an exceptionally elegant headline font
- The teal/claret color pairing is distinctive and sophisticated
- Background color means white charts "float" — built-in card effect without borders

---

## Washington Post

### Typography
| Element | Font | Notes |
|---------|------|-------|
| Masthead | Blackletter custom | Heritage identity |
| Headlines | Postoni (custom Bodoni) | Redrawn by Matthew Carter |
| Body text | Postroman (custom Century) | Higher x-height for screen readability |
| UI/Navigation | Franklin Gothic variant | Sans-serif |
| Data viz labels | Sans-serif system | Clean, neutral |

**Web-available alternatives:** Playfair Display (headlines), Source Serif Pro or Lora (body), system sans for data.

### Colors
| Use | Color | Hex |
|-----|-------|-----|
| Background | White | `#FFFFFF` |
| Body text | Near-black | `#222222` |
| Secondary text | — | `#555555` |
| Links | WaPo blue | `#0066CC` |
| Chart emphasis | Teal/blue primary | Varies |
| De-emphasis | Grey | `#CCCCCC` |

### Chart Style
- Interactive-first: search boxes, sort tools, scroll-through affordances
- Grey for non-emphasized data (background bars); color only for focus
- Step-by-step reveal: charts broken into digestible sections
- Strong annotation: callout boxes, highlighted segments
- Often uses scrollytelling (chart transitions on scroll)

### What Makes It Premium
- Interaction design: every chart invites engagement
- "Grey everything, color the story" approach to emphasis
- Editorial voice in annotations and chart titles
- Breaking large datasets into guided tours rather than overwhelming all-at-once

---

## Reuters Graphics

### Design Approach
- Designed for translation: layouts must work across multiple languages
- Modular, reusable chart components (open source: github.com/reuters-graphics)
- "Visual merit" test: Will the visual add value beyond text alone?
- Agency-style: clean, neutral, no strong brand color imposition
- Reporter-driven: graphics serve the story, not the other way around

### Chart Types (Open Source Modules)
- Categorical bar charts
- Simple line/area charts
- Parliament charts (seat distributions)
- US county maps and state cartograms
- Reusable via their chart module blueprint

### What Makes It Premium
- Extreme clarity: every chart must work without context (syndicated globally)
- Neutral palette that does not compete with partner outlet branding
- Built for localization: spacing and layout accommodate variable text lengths
- Data journalism rigor: methodology always documented

---

## Urban Institute (Reference Style Guide)

The Urban Institute published one of the most detailed open-source data viz style guides. Key specs for reference:

### Typography
- Font: **Lato** (Arial fallback)
- Title: 20px, Lato Black
- Subtitle: 16px, Lato Black Italic
- Axis labels: 12px, Lato Regular
- Data labels: 12px, Lato Regular
- Legend: 14px, Lato Regular
- Source/notes: 11px, Lato Regular
- Figure number: 11px, color `#0A4B69`

### Colors
- Primary Blue: `#1696D2`
- Primary Grey: `#D2D2D2`
- Black: `#000000`
- Yellow: `#FDBF11`
- Magenta: `#EC008B`
- Background lightest grey: `#F5F5F5`
- Table borders: `#D9D9D9`, 1pt, round dot style

### Layout
- Full width (web): 760px
- Bar gap: approximately half the bar width
- Accessibility: WCAG compliant, 4.5:1 contrast for text, 3:1 for large text

---

## FT Visual Vocabulary

The Financial Times Visual Vocabulary is the industry-standard chart selection guide. Use this to pick the right chart type for your salary data:

### Deviation
*Variations (+/-) from a reference point*
- Diverging bar, diverging stacked bar, spine chart, surplus/deficit filled line

### Correlation
*Relationship between two or more variables*
- Scatterplot, line + column, connected scatterplot, bubble, XY heatmap

### Ranking
*Position in an ordered list matters*
- **Ordered bar** (ideal for salary comparisons by company/role)
- Ordered column, dot strip plot, slope, lollipop chart

### Distribution
*How values occur across a range*
- **Histogram** (ideal for salary distribution)
- **Boxplot** (ideal for salary range comparisons)
- Violin plot, population pyramid, dot strip plot, barcode plot

### Change over Time
*Emphasize trends*
- **Line chart** (ideal for salary trends YoY)
- Column, slope, area chart, fan chart (projections)

### Part-to-whole
*How an entity breaks into components*
- **Stacked bar** (ideal for compensation breakdown: base + stock + bonus)
- Treemap, waterfall, donut

### Magnitude
*Size comparisons*
- **Bar chart** (ideal for salary comparison across companies)
- Paired bar/column, lollipop, proportional symbol

### Spatial
*Geographic patterns*
- Choropleth (salary by region), proportional symbol, dot density

### Flow
*Movement and relationships*
- Sankey (career progression paths), waterfall (compensation buildup)

---

## Salary / Compensation Infographic Patterns

### Common Approaches in the Wild
1. **Levels.fyi style**: Stacked bar for TC (base + stock + bonus), grouped by level and company. Clean, data-dense, white background.
2. **Glassdoor style**: Horizontal bar charts with salary ranges (min-median-max). Blue primary color.
3. **Flowing Data bubble chart**: Circle size = number of workers, y-axis = salary, color = job category. Exploratory.
4. **IAPP Salary Report**: Infographic poster with hero numbers, donut charts for breakdowns, small multiples.
5. **Compensation band charts**: Horizontal bars showing 25th, 50th, 75th percentile with marker for user's position.
6. **Salary.com comparisons**: Side-by-side gauges or thermometer-style progress bars.
7. **Range plot / dumbbell chart**: Two dots per row (e.g., junior vs senior) connected by a line. Excellent for showing gaps.
8. **Heatmap tables**: Company x Level matrix with color-coded cells for TC.
9. **Waterfall chart**: Build up from base salary through stock, bonus, benefits to total comp.
10. **Small multiples line charts**: One per company showing comp trajectory over YoE.

### What Works Best for Salary Data
- **Horizontal bar charts**: Easy to scan, labels read naturally left-to-right
- **Range/dumbbell charts**: Perfect for showing variance within a role
- **Stacked bars**: Clear breakdown of compensation components
- **Lollipop charts**: Cleaner alternative to bar charts for sparse data
- **Box plots / violin plots**: Show distribution, not just averages

---

## Premium Light-Mode Design Principles

### Background
- Pure white (`#FFFFFF`) for maximum contrast and "print" quality
- Warm off-white (`#FAFAF8`, `#F8F8F8`) for reduced harshness
- FT-style warm paper (`#FFF1E5`) for distinctive warmth
- Avoid cool greys for page backgrounds; they feel clinical

### Text Hierarchy
1. **Headline**: 28-36px, bold/black weight, near-black (`#1A1A1A` to `#222222`)
2. **Subheadline**: 18-22px, medium weight, dark grey (`#333333`)
3. **Body**: 16-20px, regular weight, medium-dark (`#333` to `#444`)
4. **Caption/meta**: 12-14px, regular, medium grey (`#666666` to `#888888`)
5. **Muted/disabled**: 11-12px, light grey (`#999999` to `#AAAAAA`)

### Spacing Rules
- Section spacing: 48-64px between major sections
- Card padding: 24-32px internal
- Chart margin from text: 24-40px
- Between chart title and chart: 12-16px
- Between chart and source text: 8-12px
- Line-height for body: 1.5-1.7
- Line-height for headlines: 1.2-1.3

### What Makes Light Mode Look Premium (Not Generic)
1. **Warm backgrounds** instead of pure white (#FAFAFA or warmer)
2. **Not-quite-black text** (#222 or #333 instead of #000)
3. **Generous whitespace** — more than feels necessary
4. **Type scale with clear jumps**: 12 / 14 / 16 / 20 / 28 / 36
5. **Minimal borders**: use whitespace and subtle shadows instead
6. **One accent color** used sparingly, never competing with data
7. **Serif headlines + sans-serif body** (or vice versa) for contrast
8. **Tabular/monospace numbers** in all data displays
9. **Muted chart gridlines** (#E5E5E5 or lighter)
10. **Direct labeling** on charts instead of legends

---

## 20 Design Rules from News Outlets

These are specific, actionable rules extracted from how the best newsrooms design their data visualizations:

### Typography

1. **Use 20px body text with 1.5-1.7 line-height** — The NYT and most premium publications use generous body text sizing. Never go below 16px for body content.

2. **Use tabular lining figures for all numerical data** — Bloomberg and the FT use fonts with fixed-width numerals so columns of numbers align perfectly. In CSS: `font-variant-numeric: tabular-nums lining-nums;`

3. **Chart titles should be left-aligned and bold, subtitles should be regular weight** — The Economist places bold titles flush-left with a regular-weight subtitle directly below that describes the data.

4. **Source text should be 9-11px at 75% opacity** — The Economist sets source attribution at the bottom-left in a small, deemphasized style. It is present but not competing.

5. **Use a maximum of two typefaces: one serif, one sans-serif** — The NYT pairs Cheltenham (serif headlines) with Franklin (sans-serif data). The FT pairs Financier (serif) with Metric (sans-serif). Never use three.

### Color

6. **Use no more than 3-4 colors per chart** — Every outlet limits their active palette. The Economist uses 2-3 active colors and greys out the rest (`#D4DDDD`).

7. **Grey out non-essential data, color only the story** — The Washington Post and NYT grey background bars (`#CCCCCC` to `#D4DDDD`) and use color only for the data points that matter.

8. **Body text should be dark grey, not pure black** — NYT uses `#333333`, not `#000000`. Pure black on white creates harsh contrast that strains eyes over long reading sessions.

9. **Use a warm background instead of pure white** — The FT uses `#FFF1E5` (paper). For a more subtle effect, use `#FAFAF8` or `#F9F9F6`. This single change separates premium from generic.

10. **Establish a sequential color scale from your primary brand color** — The Urban Institute generates 8 shades from their primary blue `#1696D2`. Do the same for your primary color to handle heatmaps and gradients.

### Layout & Spacing

11. **Article text max-width of 600-700px; charts can extend to 900-960px** — The NYT and FT constrain text for readability but allow charts to "break out" wider, creating visual punctuation.

12. **Use 48-64px spacing between major sections** — Premium publications use significantly more whitespace between sections than typical web apps. When in doubt, add more space.

13. **Charts should have 24-40px margin from surrounding text** — This breathing room prevents data from feeling cramped against prose.

14. **No card borders; separate content with whitespace alone** — The NYT does not put cards in bordered boxes. If you must have containers, use a subtle bottom border (`#E2E2E2`) or a barely-there shadow (`0 1px 3px rgba(0,0,0,0.08)`).

### Charts

15. **Show only horizontal gridlines, and make them light grey** — The Economist uses `#758D99` (or lighter) horizontal gridlines only. No vertical gridlines. No bounding box around the chart.

16. **Label data directly on the chart rather than using a separate legend** — The NYT and Economist annotate lines and bars directly. Legends force the reader's eye to bounce back and forth.

17. **Position Y-axis labels inside the chart area** — The Economist places Y-axis values on top of gridlines inside the plot area. This eliminates the dead space between axis labels and chart content.

18. **Use a brand mark on every chart** — The Economist uses a red top bar (`#E3120B`) and red corner tag. The FT uses its warm paper background. Establish a consistent, subtle brand element.

19. **Aspect ratio for standard charts should be roughly 16:9 or 4:3** — The Economist uses approximately 7:3.2 (~2.2:1, wide landscape). Avoid square charts for time series. Use portrait-leaning ratios for ranking/comparison charts.

20. **Always include a descriptive subtitle and data source** — Every Economist and FT chart has three text elements: (1) an editorial title that tells you the insight, (2) a descriptive subtitle that says what the data is, and (3) a source line. Never publish a chart with just a title.

---

## Quick Reference: Font Stacks for Web Implementation

```css
/* Premium news-style font stack */

/* Headlines (NYT-inspired) */
--font-headline: 'Playfair Display', 'Georgia', 'Times New Roman', serif;

/* Body text */
--font-body: 'Source Serif Pro', 'Georgia', serif;

/* Data / UI / Charts (FT-inspired) */
--font-data: 'Inter', 'Helvetica Neue', 'Arial', sans-serif;

/* Monospace for raw numbers */
--font-mono: 'JetBrains Mono', 'SF Mono', 'Consolas', monospace;

/* Numeric alignment */
.data-value {
  font-variant-numeric: tabular-nums lining-nums;
}
```

## Quick Reference: Color Tokens

```css
/* Warm light-mode palette inspired by FT + Economist */

--color-bg-primary: #FAFAF8;        /* Warm off-white page */
--color-bg-surface: #FFFFFF;         /* Cards, chart areas */
--color-bg-chart: #F5F5F2;          /* Chart plot area */

--color-text-primary: #1A1A1A;      /* Headlines */
--color-text-body: #333333;         /* Body text */
--color-text-secondary: #666666;    /* Captions, meta */
--color-text-muted: #999999;        /* Source lines */

--color-border-subtle: #E5E5E5;     /* Dividers */
--color-gridline: #EBEBEB;          /* Chart gridlines */

/* Chart data palette (Economist-inspired, muted but distinct) */
--color-chart-1: #006BA2;           /* Blue (primary) */
--color-chart-2: #DB444B;           /* Red */
--color-chart-3: #3EBCD2;           /* Cyan */
--color-chart-4: #379A8B;           /* Green */
--color-chart-5: #EBB434;           /* Yellow */
--color-chart-6: #9A607F;           /* Purple */
--color-chart-emphasis: #E3120B;    /* Economist red — for highlights */
--color-chart-deemphasis: #D4DDDD;  /* Grey — for background data */
```

## Quick Reference: Spacing Scale

```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;

/* Usage */
--chart-title-gap: var(--space-md);      /* 16px: title to chart */
--chart-source-gap: var(--space-sm);     /* 8px: chart to source */
--chart-margin: var(--space-xl);         /* 32px: chart to surrounding text */
--section-gap: var(--space-2xl);         /* 48px: between major sections */
--card-padding: var(--space-lg);         /* 24px: internal card padding */
```

---

## Sources

- [Design Data Figures Like the NYT](https://encyclopaediia.blog/design-data-figures-nyt-keynote-42986/)
- [Datawrapper: Fonts for Data Visualization](https://www.datawrapper.de/blog/fonts-for-data-visualization)
- [Datawrapper: Colors for Data Vis Style Guides](https://www.datawrapper.de/blog/colors-for-data-vis-style-guides)
- [Economist-Style Charts (Medium)](https://medium.com/@matteo.larrode2/create-a-the-economist-style-chart-84193a69263e)
- [Making Economist-Style Plots in Matplotlib](https://medium.com/data-science/making-economist-style-plots-in-matplotlib-e7de6d679739)
- [Economist Visual Style Guide (Fountn)](https://fountn.design/resource/the-economist-visual-style-guide/)
- [FT Visual Vocabulary (GitHub)](https://github.com/Financial-Times/chart-doctor/tree/main/visual-vocabulary)
- [FT Origami Design System (o-colors)](https://github.com/Financial-Times/o-colors)
- [FT Brand Colors](https://www.brandcolorcode.com/financial-times)
- [Klim Type Foundry: FT Fonts](https://klim.co.nz/in-use/financial-times/)
- [NYT Fonts (Sensatype)](https://sensatype.com/every-font-used-by-the-new-york-times-in-2025)
- [NYT Design Teardown](https://austinwsmith.wordpress.com/2017/04/25/design-teardown-of-the-new-york-times/)
- [Bloomberg Visual Data](https://www.bloomberg.com/graphics/infographics/)
- [Bloomberg Brand Colors (Mobbin)](https://mobbin.com/colors/brand/bloomberg)
- [Washington Post Fonts (Type Network)](https://typenetwork.com/articles/washington-post)
- [Washington Post Data Viz Tools (Storybench)](https://www.storybench.org/35-data-visualization-tools-that-the-washington-post-uses/)
- [Reuters Graphics (GitHub)](https://github.com/reuters-graphics)
- [Urban Institute Data Viz Style Guide](http://urbaninstitute.github.io/graphics-styleguide/)
- [UXPin Dashboard Design Principles](https://www.uxpin.com/studio/blog/dashboard-design-principles/)
- [Design Patterns for Data-Driven News (CHI 2024)](https://dl.acm.org/doi/10.1145/3613904.3641916)
- [Levels.fyi Salary Charts](https://www.levels.fyi/charts.html)
- [Analyst Academy: How The Economist Makes Charts](https://www.theanalystacademy.com/how-the-economist-makes-the-best-charts-on-the-internet/)
- [FT Visual Vocabulary (Interactive)](https://ft-interactive.github.io/visual-vocabulary/)
