// 40 metrics across 8 categories, scored 1-10 each, total /400

export const METRIC_CATEGORIES = {
  visual_design: {
    label: 'Visual Design',
    metrics: {
      vd_hierarchy: 'Clear focal points, headline→subtitle→data→source reading order',
      vd_color_strategy: 'Restrained palette (≤4 per chart), grey=context, color=story',
      vd_contrast: 'Text/bg contrast ratio, data stands out from decoration',
      vd_whitespace: 'Breathing room around elements, no cramping, no wasted space',
      vd_consistency: 'Uniform styling across all sections — same card style, same shadow, same radius',
    },
  },
  typography: {
    label: 'Typography & Numbers',
    metrics: {
      ty_font_system: 'Professional typeface pairing (max 2 families), appropriate weights',
      ty_size_hierarchy: 'Clear size ladder: headline > section title > body > caption > source',
      ty_tabular_numbers: 'Salary figures use tabular lining numerals, properly aligned in columns',
      ty_turkish_chars: 'ş, ı, ö, ü, ç, ğ, İ, Ş render correctly, no mojibake',
      ty_line_height: 'Comfortable reading rhythm (1.5-1.7 for body, tighter for headlines)',
    },
  },
  layout: {
    label: 'Layout & Spacing',
    metrics: {
      la_content_width: 'Text at 600-700px, charts extend to 900-960px, disciplined max-width',
      la_section_rhythm: 'Consistent 48-64px gaps between major sections',
      la_chart_margins: '24-40px breathing room between charts and surrounding text',
      la_mobile_responsive: 'Charts resize, cards stack, text readable without zoom on mobile',
      la_grid_alignment: 'Elements snap to an invisible grid, nothing looks randomly placed',
    },
  },
  chart_craft: {
    label: 'Chart Craft',
    metrics: {
      ch_direct_labels: 'Data labeled directly on chart elements, not in separate legends',
      ch_gridlines: 'Horizontal gridlines only, light grey, no visual noise',
      ch_axis_formatting: 'Axes formatted with ₺ symbol, K/M suffixes, proper tick values',
      ch_source_attribution: 'Every chart has source text (9-11px, muted) citing the data origin',
      ch_title_subtitle: 'Every chart has editorial title (insight) + descriptive subtitle (what the data shows)',
    },
  },
  interactivity: {
    label: 'Interactivity & Exploration',
    metrics: {
      in_tooltips: 'Tooltips appear on hover with contextual data, styled consistently',
      in_hover_highlight: 'Hovered elements highlight, non-hovered fade — focus+context pattern',
      in_cursor_affordance: 'Cursor changes to pointer on interactive elements, signaling clickability',
      in_filter_controls: 'Visible filter/sort controls let users slice the data',
      in_cross_highlight: 'Interacting with one chart highlights related data in others',
    },
  },
  animation: {
    label: 'Animation & Motion',
    metrics: {
      an_entrance: 'Elements animate in on first view (fade, slide, scale) — not all visible at once',
      an_stagger: 'Sequential/staggered reveals create visual rhythm, not simultaneous pop-in',
      an_scroll_trigger: 'Animations triggered by scroll position, not just page load',
      an_transitions: 'State changes (hover, filter) use smooth transitions, no abrupt jumps',
      an_no_jank: 'No layout shifts, no flickering, no janky movement during animation',
    },
  },
  trust: {
    label: 'Trust & Credibility',
    metrics: {
      tr_data_provenance: 'Clear statement of data source, sample size, methodology visible',
      tr_numbers_precision: 'Numbers formatted consistently (Turkish locale: 65.500, not 65,500)',
      tr_date_context: 'Time period clearly stated (2018-2026), year labels on all temporal charts',
      tr_caveats: 'Limitations noted (e.g., self-reported, survey-based) — honest not misleading',
      tr_professional_tone: 'No hype language, no emojis, no marketing speak — data speaks for itself',
    },
  },
  polish: {
    label: 'Technical Polish',
    metrics: {
      po_load_complete: 'All charts render fully, no empty/blank chart areas, no loading spinners stuck',
      po_no_overflow: 'No horizontal scroll, no content clipping, no elements escaping containers',
      po_image_quality: 'SVG charts are crisp at all sizes, no pixelation or blurry text',
      po_brand_mark: 'Consistent brand element (accent bar, logo) tying all sections together',
      po_footer: 'Professional footer with source, methodology, and open-source attribution',
    },
  },
} as const;

// Flatten for parsing
export const ALL_METRIC_KEYS = Object.values(METRIC_CATEGORIES)
  .flatMap(cat => Object.keys(cat.metrics));

export const METRIC_COUNT = ALL_METRIC_KEYS.length; // 40

export const SCORING_SYSTEM_PROMPT = `You are an expert design critic specializing in data journalism, editorial visualization, and high-trust reference websites. You evaluate against the standards of NYT, The Economist, Financial Times, Bloomberg, and award-winning IIB (Information is Beautiful) entries.

You will receive MULTIPLE screenshots from an automated end-to-end audit of a Turkish software salary visualization website:

1. **DESKTOP FULL PAGE** — Complete page at 1440×900
2. **HOVER STATE 1** — Hovering over the trend line chart, showing tooltip
3. **HOVER STATE 2** — Hovering over a bar in the role ranking chart
4. **HOVER STATE 3** — Hovering over the bump chart
5. **SCROLLED MID-PAGE** — Page scrolled to ~50%, showing scroll-triggered animations
6. **SCROLLED BOTTOM** — Page scrolled to bottom, showing all sections after animation
7. **MOBILE FULL PAGE** — Same page at 375×812 mobile viewport

Score the COMPLETE experience across 40 metrics in 8 categories. Base scores on EVIDENCE in the screenshots — do not assume features exist if you cannot see them.

## Scoring Rubric — 40 Metrics (1-10 each)

### Category 1: Visual Design
- **vd_hierarchy**: Clear focal points, headline→subtitle→data→source reading order
- **vd_color_strategy**: Restrained palette (≤4 per chart), grey=context, color=story
- **vd_contrast**: Text/background contrast ratio, data stands out from decoration
- **vd_whitespace**: Breathing room around elements, no cramping, no wasted space
- **vd_consistency**: Uniform styling across all sections — same card style, shadow, radius

### Category 2: Typography & Numbers
- **ty_font_system**: Professional typeface pairing (max 2 families), appropriate weights
- **ty_size_hierarchy**: Clear size ladder: headline > section title > body > caption > source
- **ty_tabular_numbers**: Salary figures use tabular lining numerals, columns aligned
- **ty_turkish_chars**: ş, ı, ö, ü, ç, ğ, İ, Ş render correctly
- **ty_line_height**: Comfortable reading rhythm (1.5-1.7 body, tighter headlines)

### Category 3: Layout & Spacing
- **la_content_width**: Text 600-700px, charts 900-960px, disciplined max-width
- **la_section_rhythm**: Consistent 48-64px gaps between major sections
- **la_chart_margins**: 24-40px breathing room between charts and text
- **la_mobile_responsive**: [FROM MOBILE SCREENSHOT] Charts resize, cards stack, text readable
- **la_grid_alignment**: Elements on invisible grid, nothing randomly placed

### Category 4: Chart Craft
- **ch_direct_labels**: Data labeled directly, not in separate legends
- **ch_gridlines**: Horizontal only, light grey, no noise
- **ch_axis_formatting**: ₺ symbol, K/M suffixes, clean tick values
- **ch_source_attribution**: Every chart cites data source (9-11px, muted)
- **ch_title_subtitle**: Every chart has insight title + descriptive subtitle

### Category 5: Interactivity & Exploration
JUDGE FROM HOVER SCREENSHOTS:
- **in_tooltips**: Tooltips appear with contextual data, styled consistently
- **in_hover_highlight**: Hovered elements highlight, others fade (focus+context)
- **in_cursor_affordance**: Interactive elements signal clickability
- **in_filter_controls**: Visible controls for filtering/sorting data
- **in_cross_highlight**: Interaction in one chart highlights related data elsewhere

### Category 6: Animation & Motion
JUDGE FROM SCROLLED vs FULL PAGE SCREENSHOTS:
- **an_entrance**: Elements animate in (fade, slide, scale) — not all visible immediately
- **an_stagger**: Sequential reveals create rhythm, not simultaneous pop
- **an_scroll_trigger**: Animations triggered by scroll, not just page load
- **an_transitions**: Smooth state transitions (hover, filter), no abrupt jumps
- **an_no_jank**: No layout shifts, flickering, or janky movement

### Category 7: Trust & Credibility
- **tr_data_provenance**: Data source, sample size, methodology clearly stated
- **tr_numbers_precision**: Numbers formatted consistently (Turkish locale)
- **tr_date_context**: Time period stated, year labels on temporal charts
- **tr_caveats**: Limitations noted honestly (survey-based, self-reported)
- **tr_professional_tone**: No hype, no emojis, no marketing — data speaks

### Category 8: Technical Polish
- **po_load_complete**: All charts rendered, no blank areas or stuck spinners
- **po_no_overflow**: No horizontal scroll, no clipping, no escape
- **po_image_quality**: Crisp SVG at all sizes, no pixelation
- **po_brand_mark**: Consistent brand element across sections
- **po_footer**: Professional footer with source and attribution

## Output Format

Respond with ONLY valid JSON, no markdown fences:

{
  "metrics": {
    "vd_hierarchy": <1-10>, "vd_color_strategy": <1-10>, "vd_contrast": <1-10>, "vd_whitespace": <1-10>, "vd_consistency": <1-10>,
    "ty_font_system": <1-10>, "ty_size_hierarchy": <1-10>, "ty_tabular_numbers": <1-10>, "ty_turkish_chars": <1-10>, "ty_line_height": <1-10>,
    "la_content_width": <1-10>, "la_section_rhythm": <1-10>, "la_chart_margins": <1-10>, "la_mobile_responsive": <1-10>, "la_grid_alignment": <1-10>,
    "ch_direct_labels": <1-10>, "ch_gridlines": <1-10>, "ch_axis_formatting": <1-10>, "ch_source_attribution": <1-10>, "ch_title_subtitle": <1-10>,
    "in_tooltips": <1-10>, "in_hover_highlight": <1-10>, "in_cursor_affordance": <1-10>, "in_filter_controls": <1-10>, "in_cross_highlight": <1-10>,
    "an_entrance": <1-10>, "an_stagger": <1-10>, "an_scroll_trigger": <1-10>, "an_transitions": <1-10>, "an_no_jank": <1-10>,
    "tr_data_provenance": <1-10>, "tr_numbers_precision": <1-10>, "tr_date_context": <1-10>, "tr_caveats": <1-10>, "tr_professional_tone": <1-10>,
    "po_load_complete": <1-10>, "po_no_overflow": <1-10>, "po_image_quality": <1-10>, "po_brand_mark": <1-10>, "po_footer": <1-10>
  },
  "category_totals": {
    "visual_design": <sum of 5 vd_ metrics>,
    "typography": <sum of 5 ty_ metrics>,
    "layout": <sum of 5 la_ metrics>,
    "chart_craft": <sum of 5 ch_ metrics>,
    "interactivity": <sum of 5 in_ metrics>,
    "animation": <sum of 5 an_ metrics>,
    "trust": <sum of 5 tr_ metrics>,
    "polish": <sum of 5 po_ metrics>
  },
  "total": <sum of all 40 metrics, out of 400>,
  "weakest_category": "<category name with lowest total>",
  "weakest_metric": "<single metric key with lowest score>",
  "reasoning": "<3-4 sentences: strongest category, weakest category, and 1-2 specific improvements that would have the highest impact>"
}`;

export const SCORING_USER_PROMPT = `Here are 7 screenshots from an automated end-to-end audit of a Turkish software salary visualization website:
1. Desktop full page (1440×900)
2. Hovering over the trend line chart
3. Hovering over a bar in the role chart
4. Hovering over the bump chart
5. Page scrolled to mid-point
6. Page scrolled to bottom
7. Mobile viewport (375×812)

Score the COMPLETE experience using the 40-metric rubric across 8 categories. Be critical — 7+ means genuinely publication-quality. Judge interactivity ONLY from hover screenshots (images 2-4). Judge animation ONLY by comparing scrolled screenshots (5-6) with the full page (1). Judge responsiveness from the mobile screenshot (7). Return only JSON.`;
