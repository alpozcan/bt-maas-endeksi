# Visual Design References for SWE Salary Comparison

> 50+ curated references from award-winning data visualizations, infographics, and component libraries.
> Each entry includes: URL, visual description, what makes it impressive, and extractable design patterns.

---

## Table of Contents

1. [Information is Beautiful Awards 2024 Winners](#iib-2024)
2. [Information is Beautiful Awards 2023 Winners](#iib-2023)
3. [Best Data Visualizations of 2024 (AnyChart / FlowingData / GIJN)](#best-2024)
4. [Best Data Visualizations of 2025 (AnyChart / FlowingData / GIJN)](#best-2025)
5. [The Pudding Visual Essays](#pudding)
6. [Pew Research Favorite Visualizations 2025](#pew)
7. [Tremor Blocks & Component Library](#tremor)
8. [Nivo Chart Library](#nivo)
9. [Levels.fyi Design Analysis](#levelsfyi)
10. [Stack Overflow Survey 2024 Design Analysis](#stackoverflow)
11. [Our World in Data Design Analysis](#owid)
12. [Extracted Design Tokens & Patterns](#design-tokens)

---

<a id="iib-2024"></a>
## 1. Information is Beautiful Awards 2024 Winners

Source: https://www.informationisbeautifulawards.com/news/680-announcing-the-2024-winners

### Gold Winners

#### R1. "Is the Love Song Dying?" -- MOST BEAUTIFUL + Gold (Arts, Entertainment & Culture)
- **URL:** https://pudding.cool/2024/11/love-songs/
- **Creators:** David Mora, Michelle Jia (The Pudding)
- **What it looks like:** Analysis of 5,100 Billboard Top 10 hits. Flowing, animated timeline with category breakdowns showing how love songs have declined over decades. Rich scrollytelling with embedded audio.
- **What makes it visually impressive:** Seamless blend of data and narrative. Smooth scroll-driven animations. Warm color palette against light backgrounds. Typography-forward headings with generous whitespace.
- **Design patterns to extract:**
  - Scrollytelling with sticky chart panels
  - Warm accent colors (pink, coral, gold) on neutral cream/white backgrounds
  - Large serif headings paired with sans-serif body text
  - Audio integration as supplementary data layer
  - Generous vertical rhythm between sections (80-120px)

#### R2. "Moody's Office Vacancies Data Story" -- Gold (Business Analytics)
- **URL:** Via Moody's Corporation data stories platform
- **Creators:** Moody's Corporation
- **What it looks like:** Corporate data dashboard with polished area charts, KPI cards, and geographic heat maps showing commercial real estate vacancy trends.
- **What makes it visually impressive:** Enterprise-grade polish with restrained color use. Data density without clutter. Professional typography hierarchy.
- **Design patterns to extract:**
  - KPI cards with large numbers + small delta indicators
  - Muted blue-gray palette with single accent color for highlights
  - Clean grid layout with consistent card padding (24-32px)
  - Subtle card shadows (0 1px 3px rgba(0,0,0,0.08))

#### R3. "The Birdsong of Sorrow above Ukraine" -- Gold (Current Affairs & Politics)
- **URL:** By Anastasia Balagurova
- **What it looks like:** Poetic data visualization mapping birdsong recordings across war-affected regions of Ukraine. Combines audio data with geographic visualization.
- **What makes it visually impressive:** Emotional resonance through data. Unusual data source creates memorable experience. Artistic yet rigorous.
- **Design patterns to extract:**
  - Data as emotional storytelling device
  - Minimal chrome, maximum data-ink ratio
  - Geographic visualization with audio overlay

#### R4. "Swiss Mountains" -- Gold (Leisure, Games & Sports)
- **URL:** By Fabian Lang
- **What it looks like:** Topographic visualization of Swiss mountain landscapes with elevation profiles and comparative sizing. Clean, cartographic aesthetic.
- **What makes it visually impressive:** Physical geography rendered with precision. Beautiful use of contour lines and elevation gradients.
- **Design patterns to extract:**
  - Gradient fills for elevation/magnitude encoding
  - Cartographic styling with clean labels
  - Monochromatic scheme with tonal variation

#### R5. "This is a Teenager" -- Gold (People, Language & Identity)
- **URL:** By Alvin Chang
- **What it looks like:** Interactive scrollytelling exploring what it means to be a teenager through data and personal narratives.
- **What makes it visually impressive:** Human-centered data visualization that makes statistics feel personal.
- **Design patterns to extract:**
  - Personal narrative + aggregate data juxtaposition
  - Progressive disclosure through scrolling
  - Empathetic color choices (soft, non-clinical)

#### R6. "I Want a Better Catastrophe" -- Gold (Places, Spaces & Environment)
- **URL:** By Andrew Boyd, Jona Pomerance, Marlan Dork
- **What it looks like:** Interactive flowchart for navigating climate predicament decisions. Visual decision tree with branching paths.
- **What makes it visually impressive:** Complex decision logic made navigable and visually appealing.
- **Design patterns to extract:**
  - Flowchart/decision tree as primary visualization
  - Node-link diagrams with clear visual hierarchy
  - Interactive path highlighting

#### R7. "Zoonotic Web" -- Gold (Science, Technology & Health)
- **URL:** By Liuhuaying Yang
- **What it looks like:** Network visualization showing connections between animal species and diseases that jump to humans. Organic, web-like layout.
- **What makes it visually impressive:** Complex network data rendered beautifully. Node sizing and color encoding multiple dimensions.
- **Design patterns to extract:**
  - Force-directed network graph
  - Node color + size encoding dual variables
  - Organic layout with emergent clustering

#### R8. "World in Tangible Fragments" -- Gold (Unusual)
- **URL:** By Nadezda Andrianova
- **What it looks like:** Physical data visualization using tangible materials to represent world data.
- **What makes it visually impressive:** Bridges digital and physical data representation.
- **Design patterns to extract:**
  - Materiality and texture as data encoding channels

### Silver Winners

#### R9. "Databeads" -- Silver (Arts, Entertainment & Culture)
- **URL:** By Eszter Katona and Mihaly Minko
- **Design patterns:** Physical/wearable data visualization, color-coded bead sequences

#### R10. "What's driving up burger prices?" -- Silver (Business Analytics)
- **URL:** By ABC News
- **Design patterns:** Cost decomposition charts, ingredient-level breakdowns, relatable consumer framing

#### R11. "How the 2024 U.S. election was decided, vote by vote" -- Silver (Current Affairs)
- **URL:** By The Washington Post
- **Design patterns:** Progressive vote counting animation, geographic + temporal dual encoding

#### R12. "Pathways to Prosperity for Adolescent Girls in Africa" -- Silver (Humanitarian)
- **URL:** By OneTandem
- **Design patterns:** Pathway/journey visualization, human-centered infographic design

#### R13. "Vertical Momentum: High Jump & Pole Vault" -- Silver (Leisure, Games & Sports)
- **URL:** By Krisztina Szucs
- **Design patterns:** Comparative athletic achievement visualization, vertical scale encoding

#### R14. "The Roots of Racism" -- Silver (People, Language & Identity)
- **URL:** By Jack Beckwith
- **Design patterns:** Root/tree metaphor visualization, historical timeline integration

### Bronze Winners

#### R15. "Beyond the Score - Wynton Marsalis' Musical Legacy" -- Bronze (Arts)
- **URL:** By Emanuele Pizzuti, Martina Dossi

#### R16. "A Torrent of Trash" -- Bronze (Current Affairs)
- **URL:** https://www.reuters.com/graphics/NORTHKOREA-SOUTHKOREA/TRASH/klvynygmjpg/
- **Creators:** Reuters Graphics

#### R17. "Games of Two Eras" -- Bronze (Leisure, Games & Sports)
- **URL:** https://multimedia.scmp.com/infographics/sport/article/3270445/olympics-games-2024/
- **Creators:** South China Morning Post

### Special Awards

#### R18. Outstanding Studio Gold: **The Pudding**
- **URL:** https://pudding.cool/
- **Why:** Consistently produces the most visually innovative, interactive data stories on the web.

#### R19. Test of Time: **RAWGraphs**
- **URL:** https://rawgraphs.io/
- **Why:** Open-source tool by DensityDesign, Calibro, Inmagik. Democratized data visualization.

#### R20. Community Vote: "Aguayos: Migratory Flows in Latin America"
- **URL:** By Mariana Villamizar
- **Design patterns:** Flow/Sankey visualization of migration patterns, cultural textile metaphor

---

<a id="iib-2023"></a>
## 2. Information is Beautiful Awards 2023 Winners

Source: https://www.informationisbeautifulawards.com/news/636-information-is-beautiful-awards-2023-the-winners

### Gold Winners

#### R21. "Atlas of Sustainable Development Goals 2023" -- MOST BEAUTIFUL + Gold (Humanitarian)
- **URL:** By World Bank
- **What it looks like:** Comprehensive atlas with carefully designed charts covering all 17 SDGs. Clean, institutional design with consistent visual language across dozens of indicators.
- **What makes it visually impressive:** Massive scope with unwavering design consistency. Each chart type carefully chosen for the data. Accessible color palettes.
- **Design patterns to extract:**
  - Consistent chart styling across 100+ visualizations
  - SDG-aligned color coding system
  - Small multiples for cross-country comparison
  - Clean white backgrounds with minimal decoration

#### R22. "Ripple Effect" -- Gold (Arts, Entertainment & Culture)
- **URL:** By Dorsey Kaufmann
- **Design patterns:** Ripple/wave metaphor visualization, concentric data encoding

#### R23. "How do we compare?" -- Gold (Business Analytics)
- **URL:** By Lindsey Poulter
- **Design patterns:** Benchmark comparison visualization, relative positioning

#### R24. "Britain's shadowy border" -- Gold (Current Affairs)
- **URL:** By CNN
- **Design patterns:** Investigative geographic visualization, satellite imagery integration

#### R25. "LeBron James shot visualization" -- Gold (Leisure, Games & Sport)
- **URL:** By USA Today
- **What it looks like:** Every shot LeBron James ever took, mapped on court diagrams with heat maps and statistical overlays.
- **Design patterns to extract:**
  - Shot chart / spatial frequency visualization
  - Heat map overlay on domain-specific diagram
  - Progressive reveal of career-spanning data

#### R26. "On Upward Mobility" -- Gold (People, Language & Identity)
- **URL:** By Aaron Williams and The Pudding Team
- **Design patterns:** Socioeconomic pathway visualization, personal narrative + data

#### R27. "The collapse of insects" -- Gold (Places, Spaces & Environment)
- **URL:** By Reuters
- **What it looks like:** Dramatic visualization of insect population decline using scale comparisons and species illustrations.
- **Design patterns to extract:**
  - Dramatic scale comparison (before/after)
  - Scientific illustration integration
  - Dark/dramatic backgrounds for environmental urgency

#### R28. "Turkey's toxic dust" -- Gold (Science, Technology & Health)
- **URL:** By Reuters
- **Design patterns:** Environmental health investigation, particle/dust visualization, geographic overlays

#### R29. "Say 'Cheese' with your Chart" -- Gold (Unusual)
- **URL:** By Weibo Zhou and Evie Huang
- **Design patterns:** Playful data visualization, food-as-metaphor encoding

### Silver & Bronze Highlights

#### R30. "Traditional Chinese Color Libraries Browser" -- Silver (Arts)
- **URL:** By Xin Ge
- **Design patterns:** Color swatch grid, cultural color naming system, filterable palette browser

#### R31. "The Sounds of CDMX" -- Silver (Places, Spaces & Environment)
- **URL:** By Aaron Reiss, Oscar Molina Palestina, The Pudding
- **Design patterns:** Audio-geographic mapping, sound frequency visualization

---

<a id="best-2024"></a>
## 3. Best Data Visualizations of 2024

Source: https://www.anychart.com/blog/2025/01/17/best-data-visualizations-2024/

### FlowingData Selections

#### R32. "This is Not My Name"
- **URL:** https://vis.csh.ac.at/notmyname/
- **Creator:** Complexity Science Hub
- **What it looks like:** Research visualization exploring convergence of Chinese names, with audio pronunciation features.
- **Design patterns:** Audio-visual integration, name/identity data encoding, interactive exploration

#### R33. "Your Name In Landsat"
- **URL:** https://landsat.gsfc.nasa.gov/apps/YourNameInLandsat-main/index.html
- **Creator:** NASA Landsat Science
- **What it looks like:** Interactive tool that spells user names using satellite imagery letterforms.
- **Design patterns:** Personalized data interaction, satellite imagery as design element

#### R34. "Climate-Conflict-Vulnerability Index"
- **URL:** https://climate-conflict.org/
- **Creator:** German Federal Foreign Office, UniBw Munich, PIK, Truth & Beauty
- **What it looks like:** Interactive choropleth map with multi-dimensional risk scoring. Clean white background with traffic-light color encoding.
- **Design patterns to extract:**
  - Multi-layer choropleth map
  - Composite index visualization
  - Clean filter/control panels alongside map
  - Traffic-light diverging palette (green-yellow-red)

#### R35. "Full Of Themselves" (Title Drops)
- **URL:** https://www.titledrops.net/
- **Creator:** Dominikus Baur and Alice Thudt
- **What it looks like:** Exploration of self-referential movie quotes starting with Back to the Future references.
- **Design patterns:** Timeline scrubbing, movie metadata visualization, playful interaction design

#### R36. "The United States of Abortion Mazes"
- **URL:** https://pudding.cool/2024/10/abortion-mazes/
- **Creator:** The Pudding
- **What it looks like:** Interactive mazes representing each state's abortion access laws. Users physically navigate the complexity.
- **What makes it visually impressive:** Metaphor made interactive -- bureaucratic complexity becomes literal navigation.
- **Design patterns to extract:**
  - Maze/labyrinth as data metaphor
  - State-by-state small multiples
  - Interaction as empathy-building tool

#### R37. "How Uber and Lyft Used a Loophole to Deny NYC Drivers Millions in Pay"
- **URL:** https://www.bloomberg.com/graphics/2024-uber-lyft-nyc-drivers-pay-lockouts
- **Creator:** Bloomberg
- **What it looks like:** Data-driven investigation with scrollytelling, animated charts, and document evidence integration.
- **Design patterns to extract:**
  - Bloomberg's signature dark charcoal backgrounds (#1a1a2e)
  - Accent colors: Bloomberg blue (#2800D7), teal, warm amber
  - Generous chart padding with ample breathing room
  - Step-by-step animated data reveals

#### R38. "Parallel Lives"
- **URL:** https://janwillemtulp.github.io/parallel-lives/
- **Creator:** Jan Willem Tulp
- **What it looks like:** Ages of notable historical figures visualized as parallel timelines, showing what they achieved at various ages.
- **Design patterns:** Parallel coordinate-style timeline, age-achievement mapping, horizontal scrolling

### Pudding Cup Winners

#### R39. "Votes in a Name"
- **URL:** https://diagramchasing.fun/2024/votes-in-a-name
- **Creator:** Aman Bhargava, Reechik Banerjee
- **Design patterns:** Name similarity analysis, Indian election data, beeswarm-style dot plots

#### R40. "Battle of the Chocolate Bars"
- **URL:** https://surbhi-bh.github.io/chocolate-wars/
- **Creator:** Surbhi Bhatia
- **Design patterns:** Comparative ingredient analysis, annotated bar charts, chocolate-themed color palette (browns, golds, creams)

### GIJN Data Journalism Projects

#### R41. "How Counties Are Shifting in the 2024 Presidential Election"
- **URL:** https://www.washingtonpost.com/elections/interactive/2024/11/05/compare-2020-2024-presidential-results/
- **Creator:** The Washington Post
- **What it looks like:** Interactive county-level map with swing arrows and comparison toggles between 2020/2024.
- **Design patterns to extract:**
  - Diverging red-blue political palette
  - Arrow/vector overlays showing change direction
  - County-level choropleth with zoom interaction
  - Side-by-side comparison layout

#### R42. "Bloomberg Underground Wildfires"
- **URL:** https://www.bloomberg.com/graphics/2024-underground-wildfires/
- **Creator:** Bloomberg
- **What it looks like:** Interactive report on Arctic/underground wildfires with satellite imagery, animated fire progression maps.
- **Design patterns to extract:**
  - Dark background with fire-palette accents (amber, orange, red)
  - Satellite imagery integration with annotated overlays
  - Scroll-driven map zoom transitions

#### R43. "Tokyo Runway Collision"
- **URL:** https://asia.nikkei.com/static/vdata/infographics/haneda-runway-collision/
- **Creator:** Nikkei
- **What it looks like:** 3D reconstruction of Haneda Airport collision using flight data. Technical diagram meets cinematic storytelling.
- **Design patterns to extract:**
  - 3D reconstruction from data
  - Aviation diagram conventions (runway layouts, flight paths)
  - Step-by-step temporal reconstruction

### Year-End Roundups

#### R44. "2024: The Year in Graphics" -- Bloomberg
- **URL:** https://www.bloomberg.com/graphics/2024-in-graphics/
- **Design language:** Dark backgrounds (#121212), neon accent data lines, cinematic full-bleed images, minimal UI chrome

#### R45. "A Year of Our Visual Journalism" -- The Economist
- **URL:** https://www.economist.com/interactive/christmas-specials/2024/12/19/a-year-of-our-visual-journalism
- **Design language:** The Economist red (#E3120B), clean serif headings (Econ Sans), white backgrounds, thin-line charts, restrained palette

#### R46. "2024: The Year in Visual Stories" -- NYT
- **URL:** https://www.nytimes.com/interactive/2024/12/20/us/2024-year-in-graphics.html
- **Design language:** NYT Franklin Gothic headings, Imperial body text, white canvas, precise annotation lines, controlled blue-gray palette

#### R47. "2024: The Year in Graphics" -- WSJ
- **URL:** https://www.wsj.com/us-news/year-in-graphics-2024-f3b9d865
- **Design language:** WSJ Exchange/Retina fonts, cream/ivory backgrounds, hand-drawn illustration style mixed with data, refined serif typography

---

<a id="best-2025"></a>
## 4. Best Data Visualizations of 2025

Source: https://www.anychart.com/blog/2026/01/09/best-data-visualizations-2025/

### FlowingData Selections

#### R48. "Inside the Confusing World of Women's Clothing Sizes"
- **URL:** https://www.straitstimes.com/multimedia/graphics/2025/09/womens-clothing-size-guide-singapore/index.html
- **Creator:** The Straits Times
- **What it looks like:** Multi-layered investigation with sizing charts, 3D body models, and comparative data tables.
- **Design patterns:** 3D body model integration, comparative sizing tables, layered data presentation

#### R49. "How California Fights Fires from the Skies"
- **URL:** https://www.reuters.com/graphics/CALIFORNIA-WILDFIRES/AIRCRAFTS/egvbjgkajvq/
- **Creator:** Reuters (Simon Scarr et al.)
- **What it looks like:** Technical diagrams of firefighting aircraft, operational maps, capacity comparison charts.
- **Design patterns to extract:**
  - Technical illustration + data hybrid
  - Aircraft silhouette comparison (unit chart style)
  - Geographic operational zone mapping
  - Reuters house style: white background, black text, red/orange accents

#### R50. "Size of Life"
- **URL:** https://neal.fun/size-of-life/
- **Creator:** Neal Agarwal
- **What it looks like:** Immersive scroll-driven experience comparing organism scales from microscopic to massive. Illustrated organisms at relative scale.
- **What makes it visually impressive:** The infinite scroll creates a sense of wonder. Beautiful scientific illustrations. Smooth transitions between scale levels.
- **Design patterns to extract:**
  - Continuous zoom/scale visualization
  - Scientific illustration style
  - Infinite scroll as primary interaction
  - Clean white/cream background
  - Delicate annotation lines with small text labels

#### R51. "Bird Migration Is Changing"
- **URL:** https://www.theguardian.com/environment/ng-interactive/2025/oct/16/bird-migration-is-changing
- **Creator:** The Guardian
- **What it looks like:** Animated migration route maps showing how bird patterns are shifting due to climate change.
- **Design patterns to extract:**
  - Animated flow lines on geographic maps
  - Temporal animation showing change over decades
  - Guardian house style: clean white, bold yellow (#FFE500) accent

#### R52. "Eroding Protections for Public Lands"
- **URL:** https://www.reuters.com/graphics/USA-TRUMP/PUBLIC-LANDS/zdpxkxdwnvx/
- **Creator:** Reuters
- **What it looks like:** Atlas-inspired layout mapping policy changes affecting protected lands.
- **Design patterns:** Atlas/cartographic aesthetic, policy change before/after maps

### GIJN Data Journalism 2025

#### R53. "AI Data Centers and Electricity Prices"
- **URL:** https://www.bloomberg.com/graphics/2025-ai-data-centers-electricity-prices/
- **Creator:** Bloomberg
- **What it looks like:** Maps of data center locations overlaid with electricity price change heatmaps. Line charts of price spikes.
- **Design patterns to extract:**
  - Dual-layer map (point locations + heatmap)
  - Bloomberg dark mode aesthetic
  - Price spike annotation with callout lines
  - Gradient color ramp for continuous data (cool blue to hot red)

#### R54. "Why Some Homes Survived the Los Angeles Fires"
- **URL:** https://www.washingtonpost.com/weather/interactive/2025/la-fires-homes-survive-building-materials/
- **Creator:** The Washington Post
- **What it looks like:** Building material analysis with before/after satellite imagery, structural diagrams.
- **Design patterns:** Before/after slider comparison, structural diagram annotations, material property tables

#### R55. "Dicing an Onion the Mathematically Optimal Way"
- **URL:** https://pudding.cool/2025/08/onions/
- **Creator:** Andrew Aquino, The Pudding
- **What it looks like:** Step-by-step animated geometry showing different cutting techniques with uniformity scores.
- **What makes it visually impressive:** Mathematical rigor applied to everyday cooking. Beautiful geometric animations.
- **Design patterns to extract:**
  - Step-by-step animated geometry
  - Playful color palette on white background
  - Mathematical notation styled accessibly
  - Progressive reveal of optimal solution

#### R56. "Measles Vaccines Save Millions of Lives Each Year"
- **URL:** https://ourworldindata.org/measles-vaccines-save-lives
- **Creator:** Our World in Data
- **What it looks like:** Heatmap visualization showing vaccination coverage by country over time.
- **Design patterns to extract:**
  - Sequential heatmap (light-to-dark single hue)
  - Country-by-year matrix layout
  - OWID house style (clean, authoritative, minimal)

#### R57. "When You Will Die"
- **URL:** https://flowingdata.com/projects/2025/when-die/
- **Creator:** Nathan Yau (FlowingData)
- **What it looks like:** Probabilistic simulation showing personalized life expectancy through thousands of simulated lifetimes.
- **Design patterns to extract:**
  - Simulation/Monte Carlo visualization
  - Personal data input driving visualization
  - Dot-based probability display
  - FlowingData house style: warm, accessible, approachable typography

#### R58. "Biocubes: A Visual Story of the Living and the Built"
- **URL:** https://biocubes.net/
- **Creator:** Brice Menard, Nikita Shtarkman
- **What it looks like:** 3D visualization comparing global biomass vs. human-made mass using cube volumes.
- **Design patterns to extract:**
  - 3D volume comparison
  - Physical metaphor (cubes) for abstract quantities
  - Dark background with glowing/lit 3D objects

### Year-End Roundups 2025

#### R59. "2025: The Year in Graphics" -- Bloomberg
- **URL:** https://www.bloomberg.com/graphics/2025-in-graphics/
- **Design language:** Consistent dark theme, data-forward, cinematic layouts

#### R60. "2025: Year in Graphics" -- NYT
- **URL:** https://www.nytimes.com/interactive/2025/12/22/us/2025-year-in-graphics.html
- **Design language:** NYT precision, white canvas, annotation-heavy, clean axes

#### R61. "2025: Year in Graphics" -- WSJ
- **URL:** https://www.wsj.com/articles/2025-the-year-in-graphics-fafcc11e
- **Design language:** WSJ cream backgrounds, refined serif typography, hand-drawn elements

---

<a id="pudding"></a>
## 5. The Pudding -- Recent Visual Essays

Source: https://pudding.cool/

### R62. "Infertility Journey" (March 2026)
- **URL:** https://pudding.cool/2026/03/ivf
- **What it looks like:** Dual-perspective interactive narrative about IVF treatment.
- **Design patterns:** Split-screen narrative, perspective switching, medical data visualization

### R63. "Happy Map" (February 2026)
- **URL:** https://pudding.cool/2026/02/happy-map
- **What it looks like:** Geospatial visualization of 100,000 moments of human happiness mapped globally.
- **Design patterns:** Dot-density geographic map, emotional data encoding, warm color palette

### R64. "Women's Sizing" (February 2026)
- **URL:** https://pudding.cool/2026/02/womens-sizing
- **What it looks like:** Inter-generational analysis of clothing size inconsistency.
- **Design patterns:** Body measurement comparison, timeline of standards changes, size chart visualizations

### R65. "Musical Motifs" (December 2025)
- **URL:** https://pudding.cool/2025/12/motifs
- **What it looks like:** Musical notation synchronized with audio playback showing recurring motifs in musicals.
- **Design patterns:** Audio-visual synchronization, musical notation as data, waveform visualization

### R66. "Democracy" (November 2025)
- **URL:** https://pudding.cool/2025/11/democracy
- **What it looks like:** Temporal frequency analysis of every time "democracy" was said in Congress.
- **Design patterns:** Word frequency timeline, legislative speech analysis, density ridge plot

### R67. "Walkachusetts" (October 2025)
- **URL:** https://pudding.cool/2025/10/walk
- **What it looks like:** Map-based walking journal combining GPS data with personal narrative.
- **Design patterns:** Route map + personal diary, scroll-driven map animation, photo integration

### R68. "NYC Street View" (July 2025)
- **URL:** https://pudding.cool/2025/07/street-view
- **What it looks like:** Searchable database of every visible word on NYC streets.
- **Design patterns:** Full-text search interface, street-level photography, spatial text mapping

### R69. "Kids Book Animals" (July 2025)
- **URL:** https://pudding.cool/2025/07/kids-books
- **What it looks like:** Linguistic analysis of how animals are gendered in children's literature.
- **Design patterns:** Waffle/unit charts for proportions, book cover imagery, categorical color coding

### R70. "30 Minutes with a Stranger" (June 2025)
- **URL:** https://pudding.cool/2025/06/hello-stranger
- **What it looks like:** Embedded video of strangers talking with mood-tracking overlay showing emotional trajectories.
- **Design patterns:** Video + data overlay, mood/sentiment line chart, real-time annotation

### The Pudding Design Language (Common Patterns)
- **Background:** White (#FFFFFF) or very light gray (#FAFAFA)
- **Text:** Near-black (#1a1a1a) headings, medium gray (#555) body
- **Typography:** Bold, large headings (often 48-72px), clean sans-serif (National, Atlas Grotesk)
- **Charts:** Custom D3.js with playful color palettes, hand-crafted animations
- **Layout:** Full-width sections, generous whitespace, mobile-first responsive
- **Interaction:** Scroll-driven primarily, with selective click/hover interactions
- **What makes it premium:** Editorial confidence -- large type, bold color choices, unhurried pacing

---

<a id="pew"></a>
## 6. Pew Research Center -- Favorite Visualizations 2025

Source: https://www.pewresearch.org/short-reads/2025/12/15/our-favorite-data-visualizations-of-2025/

### R71. American Electorate Shift (2020-2024)
- **Chart type:** Alluvial/Sankey diagram (paneled)
- **What it looks like:** Voter flow visualization tracking how 2020 Trump/Biden voters and nonvoters shifted in 2024.
- **What makes it visually impressive:** Small compositional changes driving larger electoral outcomes are immediately visible through flow width.
- **Design patterns to extract:**
  - Alluvial/Sankey for before-after flow
  - Panel comparison layout
  - Pew's restrained palette: dark gray text, single accent color per data series

### R72. Israeli Religious Switching Within Judaism
- **Chart type:** Alluvial diagram
- **Design patterns:** Religious denomination flow, childhood-to-present comparison, narrow color-coded streams

### R73. News Outlet Audiences by Education Level
- **Chart type:** Bar chart with contextual dot annotations
- **What it looks like:** Horizontal bar chart of 30 news sources with overlaid dots showing U.S. population benchmark.
- **Design patterns to extract:**
  - Bar + dot annotation pattern (absolute value + benchmark)
  - Sorted ranking layout
  - Pew typography: clean sans-serif, subdued colors

### R74. Christians as Global Majority
- **Chart type:** Bullet chart
- **Design patterns:** Compact multi-measure comparison, nested bars for actual vs. expected

### R75. Public Behavior Acceptability (Interactive Quiz)
- **Chart type:** Rose plot (polar area diagram) with age breakdowns
- **What it looks like:** Users answer quiz questions, then see their responses plotted against population data in polar area charts, with smaller age-segmented versions below.
- **Design patterns to extract:**
  - Interactive quiz driving personalized data reveal
  - Rose/polar area chart for categorical distribution
  - Small multiples for demographic breakdowns
  - User input arrow annotation on chart

### R76. News Source Trust/Distrust by Party
- **Chart type:** Beeswarm plot
- **What it looks like:** Each dot = news source (sized by familiarity), positioned on trust/distrust axis, grouped by party.
- **Design patterns to extract:**
  - Beeswarm for dense categorical-continuous data
  - Dot size encoding secondary variable (familiarity)
  - Red/blue political party color convention
  - Label-on-hover for dot identification

### Pew Research Design Language
- **Background:** White (#FFFFFF)
- **Text colors:** Heading: dark charcoal (#2C2C2C), body: medium gray (#555555), muted: (#888888)
- **Chart colors:** Restrained -- typically 2-4 colors per chart. Blues and grays dominant. Political: blue (#436983) / red (#C0392B)
- **Typography:** Franklin Gothic / Gotham-style sans-serif. Large bold numbers for callouts.
- **Cards:** No visible borders, subtle section dividers, generous padding
- **What makes it premium:** Academic authority, deliberate restraint, every element earns its place

---

<a id="tremor"></a>
## 7. Tremor Blocks & Component Library

### Tremor Blocks Dashboard Categories

Source: https://blocks.tremor.so

**Available Block Categories:**
- **KPI Cards** (29 blocks) -- Metric displays with sparklines, deltas, and trend indicators
- **Bar Charts** (12 blocks) -- Horizontal and vertical bar chart compositions
- **Area Charts** -- Gradient-filled trend lines
- **Line Charts** -- Multi-series time series
- **Donut Charts** -- Proportional breakdowns
- **Chart Tooltips** (21 blocks) -- Custom tooltip designs
- **Chart Compositions** (15 blocks) -- Combined chart layouts
- **Spark Charts** -- Inline miniature charts
- **Bar Lists** -- Ranked horizontal bar lists
- **Tables** -- Data tables with sorting, filtering, pagination
- **Filterbars** -- Filter control layouts
- **Page Shells** -- Full page dashboard layouts
- **Forms** (6 blocks) -- Input form layouts
- **Dialogs** -- Modal and slide-over patterns
- **Grid Lists** -- Card grid layouts
- **Banners** -- Notification bars
- **Status Monitoring** -- Health/status dashboards

**Design System:**
- Built entirely with Tremor components + Tailwind CSS
- Light and dark mode by default
- React and Next.js compatible
- Copy-paste ready components

### Tremor AreaChart API

Source: https://npm.tremor.so/docs/visualizations/area-chart

```tsx
import { AreaChart } from '@tremor/react';

<AreaChart
  data={chartdata}
  index="date"
  categories={['SolarPanels', 'Inverters']}
  colors={['indigo', 'rose']}
  valueFormatter={(n) => `$${Intl.NumberFormat('us').format(n)}`}
  yAxisWidth={60}
  showGradient={true}     // tinted area fill
  showAnimation={true}    // 900ms load animation
  showGridLines={true}    // subtle grid
  showLegend={true}       // bottom legend
  curveType="linear"      // or "monotone", "step"
  connectNulls={false}
  className="h-80"
/>
```

**Key Props:**
| Prop | Type | Default |
|------|------|---------|
| `data` | `any[]` | required |
| `categories` | `string[]` | required |
| `index` | `string` | required |
| `colors` | `(Color \| string)[]` | theme default |
| `showGradient` | `boolean` | `true` |
| `showAnimation` | `boolean` | `false` |
| `animationDuration` | `number` | `900` |
| `stack` | `boolean` | `false` |
| `curveType` | `string` | `"linear"` |
| `yAxisWidth` | `number` | `56` |
| `showGridLines` | `boolean` | `true` |
| `showLegend` | `boolean` | `true` |
| `startEndOnly` | `boolean` | `false` |
| `autoMinValue` | `boolean` | `false` |
| `customTooltip` | `React.ComponentType` | -- |
| `onValueChange` | `(EventProps) => void` | -- |

**Tremor Design Tokens:**
- Grid lines: `tremor-border`
- Axis labels: `tremor-content-DEFAULT` / `tremor-label` font size
- Tooltip border: `tremor-border-DEFAULT`
- Tooltip text: `tremor-content-emphasis`
- Tooltip bg: `tremor-background-default`
- Tooltip shadow: `tremor-dropdown`
- Tooltip radius: `tremor-default`
- Legend text: `tremor-content-DEFAULT` (default), `tremor-content-emphasis` (hover)
- Legend bg hover: `tremor-background-subtle`

### Tremor BarChart API

Source: https://npm.tremor.so/docs/visualizations/bar-chart

```tsx
import { BarChart } from '@tremor/react';

<BarChart
  data={chartdata}
  index="name"
  categories={['Group A', 'Group B']}
  colors={['blue', 'teal']}
  valueFormatter={(n) => Intl.NumberFormat('us').format(n)}
  yAxisWidth={48}
  layout="horizontal"     // or "vertical"
  stack={false}
  relative={false}
  barCategoryGap="10%"
  showAnimation={true}
/>
```

**Additional BarChart Props:**
| Prop | Type | Default |
|------|------|---------|
| `layout` | `string` | `"horizontal"` |
| `stack` | `boolean` | `false` |
| `relative` | `boolean` | `false` |
| `barCategoryGap` | `string \| number` | `"10%"` |

---

<a id="nivo"></a>
## 8. Nivo Chart Library

Source: https://nivo.rocks/

### Nivo Bump Chart
- **Package:** `@nivo/bump`
- **Components:** `ResponsiveBump`, `ResponsiveAreaBump`
- **What it looks like:** Ranking chart showing how items change position over time. Lines connect positions, crossing and weaving as rankings shift.
- **Visual design:** Colored lines per series, circular point markers at each position, subtle grid lines on y-axis for rank positions.

**Key Props:**
| Prop | Type | Description |
|------|------|-------------|
| `data` | `BumpSerie[]` | Array of `{ id, data: [{ x, y }] }` |
| `colors` | `OrdinalColorsInstruction` | Color scheme |
| `lineWidth` | `number` | Line thickness |
| `activeLineWidth` | `number` | Hovered line thickness |
| `inactiveLineWidth` | `number` | Non-hovered line thickness |
| `opacity` | `number` | Base line opacity |
| `activeOpacity` | `number` | Hovered line opacity |
| `inactiveOpacity` | `number` | Non-hovered line opacity |
| `pointSize` | `number` | Rank marker size |
| `activePointSize` | `number` | Hovered point size |
| `pointBorderWidth` | `number` | Point border width |
| `startLabel` | `boolean \| string` | Show label at start |
| `endLabel` | `boolean \| string` | Show label at end |
| `axisTop` / `axisBottom` / `axisLeft` / `axisRight` | `object \| null` | Axis config |

**Use case for salary comparison:** Rank companies or roles by compensation over time.

### Nivo Stream Chart
- **Package:** `@nivo/stream`
- **Components:** `ResponsiveStream`
- **What it looks like:** Flowing, organic stacked areas showing compositional changes over time. Like a river with colored currents.
- **Visual design:** Smooth curves, vibrant fill colors with slight transparency, baseline centered for symmetry.

**Key Props:**
| Prop | Type | Description |
|------|------|-------------|
| `data` | `object[]` | Array of objects with keys per layer |
| `keys` | `string[]` | Layer identifiers |
| `offsetType` | `string` | `"silhouette"` (centered), `"diverging"`, `"expand"`, `"none"` |
| `curve` | `string` | `"basis"`, `"linear"`, `"monotoneX"`, etc. |
| `colors` | `OrdinalColorsInstruction` | Color scheme |
| `fillOpacity` | `number` | Area fill opacity |
| `borderWidth` | `number` | Border between layers |
| `enableDots` | `boolean` | Show data points |
| `enableStackTooltip` | `boolean` | Tooltip for full stack |

**Use case for salary comparison:** Show composition of total compensation (base + stock + bonus) flowing over time.

### Nivo SwarmPlot
- **Package:** `@nivo/swarmplot`
- **Components:** `ResponsiveSwarmPlot`, `ResponsiveSwarmPlotCanvas`
- **What it looks like:** Beeswarm-style dot plot where circles are packed without overlap along a quantitative axis. Groups are separated into lanes.
- **Visual design:** Colorful packed circles, force-directed layout prevents overlap, voronoi mesh for precise hover targeting.

**Key Props:**
| Prop | Type | Description |
|------|------|-------------|
| `data` | `object[]` | Data with `id`, `group`, `value` |
| `groups` | `string[]` | Group names (lanes) |
| `identity` | `string` | Node identity key |
| `value` | `string` | Quantitative value key |
| `size` | `number \| object` | Node size or dynamic sizing |
| `forceStrength` | `number` | Physics simulation strength |
| `simulationIterations` | `number` | Layout iterations |
| `colors` | `OrdinalColorsInstruction` | Color scheme |
| `useMesh` | `boolean` | Voronoi mesh for interactions |
| `layout` | `string` | `"horizontal"` or `"vertical"` |

**Use case for salary comparison:** Distribution of individual salary reports clustered by company/role. Each dot = one data point. Size could encode YoE.

---

<a id="levelsfyi"></a>
## 9. Levels.fyi Design Analysis

Source: https://levels.fyi

### Layout Structure
- **Max width:** 1200px container, centered
- **Grid:** Flexbox-based with breakpoints at 600px (mobile), 768px (tablet), 1200px+ (desktop)
- **Hero section:** Large search bar + tabbed content sections
- **Content:** Horizontal scrolling cards for salary data, tabbed panels for categories

### Typography
- **Primary font:** "Nunito" (Google Fonts), system fallbacks
- **Heading weights:** 600 (semi-bold) to 700 (bold)
- **Body weight:** 400 (normal)
- **Font sizes:** 0.625rem to 2.75rem, base 0.875rem (14px)
- **Line heights:** 1.43 - 1.75 depending on content type

### Color Palette
| Role | Color | Hex |
|------|-------|-----|
| Primary (links, buttons) | Professional blue | `#0060b9` |
| Background (main) | Light cloud blue | `#f7f9fb` |
| Background (cards) | White | `#ffffff` |
| Background (alt sections) | Subtle gray | `#f4f5f9` |
| Text (headings) | Dark navy | `#071230` |
| Text (body/muted) | Gray | `#616161` |
| Success/progress | Green | `#10b981` |
| Neutral scale | Light to dark | `#f9f9f9` to `#212121` |

### Card & Component Styles
| Property | Value |
|----------|-------|
| Border radius (default) | `0.5rem` (8px) |
| Border radius (subtle) | `0.25rem` (4px) |
| Border radius (rounded) | `1rem` (16px) |
| Border radius (pill) | `20rem` |
| Shadow (small) | `1px 3px` |
| Shadow (default) | `4px 8px` |
| Shadow (large) | `4px 16px` |
| Shadow (XL) | `15px 50px` |
| Card padding | Consistent spacing system |
| Button padding | `8px 22px` |

### Active States
- Tab indicators: 3px blue underline bar
- Hover: 250ms transition, opacity changes on inactive items
- Skeleton loaders for premium loading experience
- Dark navbar variant: #5d707a background

### What Makes It Premium (Light Mode)
- Cloud-blue background (#f7f9fb) instead of stark white -- reduces eye strain
- Limited to 5-6 primary colors -- no visual noise
- Generous whitespace between sections
- Professional font (Nunito) with careful weight hierarchy
- Smooth micro-interactions (250ms transitions)
- Data-forward design: numbers are heroes, chrome is minimal

---

<a id="stackoverflow"></a>
## 10. Stack Overflow Developer Survey 2024

Source: https://survey.stackoverflow.co/2024/

### Layout & Navigation
- **Sections:** Developer Profile, Technology, AI, Work, Community, Professional Developers
- **Navigation:** Section-based with linked headings for deep exploration
- **Built with:** Svelte framework

### Data Presentation Patterns
- **Callout cards:** Large percentage figures as hero stats (e.g., "62.3% Have used JavaScript")
- **Geographic data:** Top 10 countries with flags + percentages for scannable distribution
- **Comparison statements:** Narrative framing with embedded stats ("PostgreSQL is used by 49% of developers")
- **Salary data:** Presented through geographic comparisons and role-based breakdowns

### Design Elements
- **Typography:** Clear heading hierarchy, emphasized statistics as visual anchors
- **Cards:** Information grouped into discrete, visually separated sections
- **Color:** Minimal -- survey brand colors + muted chart palette
- **Interaction:** Linked section headings for progressive exploration

### Design Patterns to Extract
- Hero stat callout: `<div class="stat"><span class="number">62.3%</span><span class="label">description</span></div>`
- Flag + percentage pattern for geographic data
- Section-based progressive disclosure
- Narrative + chart hybrid (stat in sentence, chart beside it)

### What Makes It Premium (Light Mode)
- Clean white backgrounds with ample section spacing
- Large numbers as visual anchors create scannable hierarchy
- Minimal chart decoration -- data speaks for itself
- Consistent card patterns across all sections
- Mobile-responsive section collapsing

---

<a id="owid"></a>
## 11. Our World in Data Design Analysis

Source: https://ourworldindata.org

### Design Philosophy
OWID achieves authority through extreme restraint. No decorative elements. Every pixel serves the data.

### Typography
- **Headings:** Sans-serif (Lato family), bold weight, dark color
- **Body:** Lato regular, generous line spacing (~1.6), optimized for long-form reading
- **Chart labels:** Small, subdued, never competing with data
- **Article titles:** Large (28-36px), bold, dark (#333)

### Color Palette
- **Background:** White (#FFFFFF)
- **Text:** Near-black (#333333) for headings, medium gray (#666666) for body
- **Chart color sequence:** Carefully selected for accessibility and distinction:
  - Primary blue: `#3C4E66` / `#286BBB`
  - Red/coral: `#C15065` / `#E63E52`
  - Green: `#18470F` / `#58AC8C`
  - Purple: `#6D3E91`
  - Orange: `#C05917` / `#E68033`
  - Teal: `#00847E` / `#01847E`
  - Brown: `#883000` / `#996633`
- **Categorical:** 6-8 distinct hues, muted but distinguishable
- **Sequential:** Single-hue ramps (light to dark) for heatmaps
- **Diverging:** Blue-to-red through white midpoint

### Chart Styles
- **Grid:** Very subtle light gray (#E0E0E0), horizontal only
- **Axes:** Thin lines, small tick marks, muted labels
- **Line thickness:** 2-3px for primary data, 1px for reference lines
- **Point markers:** Small circles on line charts for data identification
- **Annotations:** Thin leader lines with small text labels
- **No chart borders/frames** -- charts float on white background

### Layout
- **Max width:** ~800px for articles (optimal reading width)
- **Chart width:** Full article width or slightly wider
- **Section spacing:** Generous (40-60px between sections)
- **Sidebar:** Country/topic selectors in collapsible panels

### What Makes It Premium (Light Mode)
- Academic authority through minimalism
- Charts are visually "weightless" -- no heavy borders, no box shadows
- Data-ink ratio is extremely high (Tufte-inspired)
- Consistent visual language across 13,000+ charts
- Color choices optimized for colorblind accessibility
- White space used deliberately to let data breathe
- No gradients, no 3D effects, no decoration

---

<a id="design-tokens"></a>
## 12. Extracted Design Tokens & Patterns for SWE Salary Comparison

### Recommended Background & Surface Colors (Light Mode)

| Token | Hex | Source |
|-------|-----|--------|
| `--bg-page` | `#F7F9FB` | Levels.fyi (cloud blue tint) |
| `--bg-card` | `#FFFFFF` | Universal across all references |
| `--bg-card-alt` | `#F4F5F9` | Levels.fyi alternate sections |
| `--bg-subtle` | `#FAFAFA` | The Pudding, OWID |
| `--bg-hover` | `#F0F2F5` | Derived from Levels.fyi neutral scale |

### Recommended Text Colors

| Token | Hex | Usage | Source |
|-------|-----|-------|--------|
| `--text-heading` | `#071230` | Page/section headings | Levels.fyi |
| `--text-body` | `#333333` | Primary body text | OWID |
| `--text-secondary` | `#616161` | Secondary/supporting text | Levels.fyi |
| `--text-muted` | `#888888` | Captions, footnotes, axis labels | Pew Research |
| `--text-link` | `#0060B9` | Interactive links | Levels.fyi |

### Recommended Chart Color Sequence

For a salary comparison tool, use a professional palette inspired by Levels.fyi + OWID + Pew:

| Index | Color | Hex | Use Case |
|-------|-------|-----|----------|
| 1 | Primary Blue | `#0060B9` | Base salary / primary metric |
| 2 | Teal | `#10B981` | Stock/equity component |
| 3 | Amber | `#F59E0B` | Bonus component |
| 4 | Coral | `#E63E52` | Negative deltas / below market |
| 5 | Purple | `#6D3E91` | Secondary comparison |
| 6 | Slate | `#64748B` | Baseline / median reference |

**Diverging palette (above/below median):**
- Below: `#E63E52` (coral red)
- Neutral: `#F7F9FB` (page bg)
- Above: `#10B981` (teal green)

### Recommended Card Styles

```css
.card {
  background: #FFFFFF;
  border-radius: 12px;             /* Between Levels.fyi 8px and 16px */
  padding: 24px;                   /* Consistent with enterprise dashboards */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08),
              0 1px 2px rgba(0, 0, 0, 0.06);  /* Subtle, professional */
  border: 1px solid rgba(0, 0, 0, 0.05);      /* Near-invisible border */
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.10);
  transition: box-shadow 250ms ease;
}
```

### Recommended Typography Scale

Inspired by Levels.fyi (Nunito) + OWID (Lato) + Pew (Franklin Gothic):

```css
/* Font: Inter or Nunito for salary data (tabular numerals important) */
--font-heading: 'Inter', 'Nunito', system-ui, sans-serif;
--font-body: 'Inter', 'Nunito', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace; /* For exact salary figures */

/* Scale */
--text-xs: 0.75rem;     /* 12px - axis labels, fine print */
--text-sm: 0.875rem;    /* 14px - body text, table cells */
--text-base: 1rem;       /* 16px - standard body */
--text-lg: 1.125rem;     /* 18px - card headings */
--text-xl: 1.25rem;      /* 20px - section subheads */
--text-2xl: 1.5rem;      /* 24px - section headings */
--text-3xl: 1.875rem;    /* 30px - page headings */
--text-4xl: 2.25rem;     /* 36px - hero stats */
--text-5xl: 3rem;        /* 48px - hero numbers (salary figures) */

/* Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

/* Line heights */
--leading-tight: 1.25;   /* Headings */
--leading-normal: 1.5;   /* Body text */
--leading-relaxed: 1.625; /* Long-form reading */
```

### Recommended Chart Styling

```css
/* Axes */
--axis-color: #E2E8F0;           /* Very light gray */
--axis-label-color: #888888;     /* Muted text */
--axis-label-size: 0.75rem;      /* 12px */
--axis-line-width: 1px;

/* Grid */
--grid-color: #F1F5F9;           /* Near-invisible horizontal lines */
--grid-width: 1px;
--grid-style: solid;             /* No dashes for clean look */

/* Data lines */
--line-width: 2.5px;
--point-radius: 4px;
--point-hover-radius: 6px;

/* Tooltip */
--tooltip-bg: #FFFFFF;
--tooltip-border: 1px solid #E2E8F0;
--tooltip-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
--tooltip-radius: 8px;
--tooltip-padding: 12px 16px;

/* Animation */
--chart-animation-duration: 900ms;
--chart-animation-easing: cubic-bezier(0.4, 0, 0.2, 1);
```

### What Makes a Salary Dashboard Look Premium in Light Mode

Based on analysis of all 70+ references:

1. **Cloud-tinted page background** (#F7F9FB not #FFFFFF) -- reduces harshness, adds sophistication
2. **White cards floating on tinted background** -- creates depth without heavy shadows
3. **Hero salary numbers in large type** (36-48px, semibold) -- Levels.fyi and SO Survey pattern
4. **Restrained color palette** -- 3-5 colors maximum per view, not a rainbow
5. **Generous whitespace** -- 24-32px card padding, 40-60px section gaps
6. **Subtle shadows** -- barely visible (0.08 opacity), never harsh drop shadows
7. **Thin grid lines** -- near-invisible, horizontal only, no vertical grid
8. **Typography hierarchy** -- clear distinction between heading/body/caption levels
9. **Tabular numerals** -- monospaced numbers for salary columns (Inter has this built in)
10. **Minimal chart chrome** -- no heavy borders, no 3D, no gradients on bars
11. **Interactive feedback** -- 250ms hover transitions, not instant, not slow
12. **Data-ink ratio** -- every visual element encodes data (Tufte principle applied by OWID, Pew, Economist)

### Chart Type Recommendations for Salary Comparison

Based on the award-winning patterns observed:

| Data Story | Chart Type | Reference |
|-----------|-----------|-----------|
| Salary distribution by company | **SwarmPlot / Beeswarm** | Pew R76, Nivo SwarmPlot |
| Compensation breakdown (base/stock/bonus) | **Stacked Bar** or **Stream** | Tremor BarChart, Nivo Stream |
| Salary by YoE progression | **Bump Chart** or **Line** | Nivo Bump |
| Company vs. company ranking | **Bump Chart** | Nivo Bump |
| Geographic salary comparison | **Choropleth Map** | OWID, WaPo R41 |
| Before/after (raise, job change) | **Alluvial / Sankey** | Pew R71, R72 |
| Single salary vs. market | **Bullet Chart** | Pew R74 |
| Salary percentiles (P25/P50/P75) | **Box Plot or Range Bar** | Levels.fyi pattern |
| Historical salary trends | **Area Chart** | Tremor AreaChart |
| Role/level comparison | **Horizontal Bar** | Tremor BarChart, Pew R73 |

---

## Appendix: All URLs Index

### Award Winners & Curated Lists
1. https://www.informationisbeautifulawards.com/news/680-announcing-the-2024-winners
2. https://www.informationisbeautifulawards.com/news/636-information-is-beautiful-awards-2023-the-winners
3. https://www.anychart.com/blog/2025/01/17/best-data-visualizations-2024/
4. https://www.anychart.com/blog/2026/01/09/best-data-visualizations-2025/
5. https://www.pewresearch.org/short-reads/2025/12/15/our-favorite-data-visualizations-of-2025/

### Individual Projects
6. https://pudding.cool/2024/11/love-songs/
7. https://pudding.cool/2024/10/abortion-mazes/
8. https://pudding.cool/2025/08/onions/
9. https://pudding.cool/2025/06/hello-stranger/
10. https://pudding.cool/2026/03/ivf
11. https://pudding.cool/2026/02/happy-map
12. https://pudding.cool/2025/12/motifs
13. https://pudding.cool/2025/11/democracy
14. https://pudding.cool/2025/10/walk
15. https://pudding.cool/2025/07/street-view
16. https://pudding.cool/2025/07/kids-books
17. https://neal.fun/size-of-life/
18. https://biocubes.net/
19. https://vis.csh.ac.at/notmyname/
20. https://landsat.gsfc.nasa.gov/apps/YourNameInLandsat-main/index.html
21. https://climate-conflict.org/
22. https://www.titledrops.net/
23. https://janwillemtulp.github.io/parallel-lives/
24. https://diagramchasing.fun/2024/votes-in-a-name
25. https://surbhi-bh.github.io/chocolate-wars/
26. https://www.bloomberg.com/graphics/2024-uber-lyft-nyc-drivers-pay-lockouts
27. https://www.bloomberg.com/graphics/2024-underground-wildfires/
28. https://www.bloomberg.com/graphics/2025-ai-data-centers-electricity-prices/
29. https://www.washingtonpost.com/elections/interactive/2024/11/05/compare-2020-2024-presidential-results/
30. https://www.washingtonpost.com/weather/interactive/2025/la-fires-homes-survive-building-materials/
31. https://www.reuters.com/graphics/NORTHKOREA-SOUTHKOREA/TRASH/klvynygmjpg/
32. https://www.reuters.com/graphics/CALIFORNIA-WILDFIRES/AIRCRAFTS/egvbjgkajvq/
33. https://www.reuters.com/graphics/USA-TRUMP/PUBLIC-LANDS/zdpxkxdwnvx/
34. https://asia.nikkei.com/static/vdata/infographics/haneda-runway-collision/
35. https://multimedia.scmp.com/infographics/sport/article/3270445/olympics-games-2024/
36. https://ourworldindata.org/measles-vaccines-save-lives
37. https://flowingdata.com/projects/2025/when-die/
38. https://www.nytimes.com/interactive/2025/upshot/zodiac-signs.html
39. https://www.theguardian.com/environment/ng-interactive/2025/oct/16/bird-migration-is-changing
40. https://www.straitstimes.com/multimedia/graphics/2025/09/womens-clothing-size-guide-singapore/index.html

### Year-End Roundups
41. https://www.bloomberg.com/graphics/2024-in-graphics/
42. https://www.bloomberg.com/graphics/2025-in-graphics/
43. https://www.economist.com/interactive/christmas-specials/2024/12/19/a-year-of-our-visual-journalism
44. https://www.economist.com/interactive/christmas-specials/2025/12/22/a-year-of-our-visual-journalism
45. https://www.nytimes.com/interactive/2024/12/20/us/2024-year-in-graphics.html
46. https://www.nytimes.com/interactive/2025/12/22/us/2025-year-in-graphics.html
47. https://www.wsj.com/us-news/year-in-graphics-2024-f3b9d865
48. https://www.wsj.com/articles/2025-the-year-in-graphics-fafcc11e
49. https://hbr.org/2024/12/the-charts-that-help-make-sense-of-2024
50. https://hbr.org/2025/12/the-hbr-charts-that-help-explain-2025

### Design References & Component Libraries
51. https://levels.fyi
52. https://survey.stackoverflow.co/2024/
53. https://ourworldindata.org
54. https://blocks.tremor.so
55. https://npm.tremor.so/docs/visualizations/area-chart
56. https://npm.tremor.so/docs/visualizations/bar-chart
57. https://nivo.rocks/bump/
58. https://nivo.rocks/stream/
59. https://nivo.rocks/swarmplot/
60. https://rawgraphs.io/
