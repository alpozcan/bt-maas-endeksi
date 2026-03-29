import FadeIn from './FadeIn';

const LEVELS_URL = 'https://www.levels.fyi/t/software-engineer/locations/turkey';

// Levels.fyi 2025 data - annual total compensation in USD
const countries = [
  { name: 'ABD',       flag: '🇺🇸', p25: 135000, p50: 190000, p75: 275000, submissions: 51339 },
  { name: 'İngiltere', flag: '🇬🇧', p25: 73400,  p50: 107800, p75: 155000, submissions: 5057 },
  { name: 'Almanya',   flag: '🇩🇪', p25: 71800,  p50: 86100,  p75: 105300, submissions: 3365 },
  { name: 'İspanya',   flag: '🇪🇸', p25: 36700,  p50: 52500,  p75: 73800,  submissions: 1715 },
  { name: 'Hollanda',  flag: '🇳🇱', p25: 73900,  p50: 95200,  p75: 128700, submissions: 1383 },
  { name: 'İsviçre',   flag: '🇨🇭', p25: 110300, p50: 139200, p75: 200300, submissions: 688 },
  { name: 'Japonya',   flag: '🇯🇵', p25: 42700,  p50: 57000,  p75: 81700,  submissions: 383 },
  { name: 'Türkiye',   flag: '🇹🇷', p25: 27900,  p50: 38600,  p75: 52050,  submissions: 326, highlight: true },
  { name: 'Danimarka', flag: '🇩🇰', p25: 82100,  p50: 96100,  p75: 123200, submissions: 191 },
  { name: 'Estonya',   flag: '🇪🇪', p25: 53100,  p50: 70500,  p75: 83600,  submissions: 119 },
];

const sorted = [...countries].sort((a, b) => b.p50 - a.p50);
const maxP75 = Math.max(...sorted.map(c => c.p75));

function formatK(n: number): string {
  return `$${Math.round(n / 1000)}K`;
}

export default function GlobalSalaryComparison() {
  return (
    <FadeIn>
      <section className="max-w-[960px] mx-auto px-6 section" data-section="global">
        <h2 className="text-2xl font-bold text-text tracking-tight mb-1">
          Türkiye, 10 ülke arasında en düşük medyan toplam ücrete sahip
        </h2>
        <p className="text-sm text-text-secondary mb-6 leading-relaxed max-w-[700px]">
          Levels.fyi üzerinden 64.000'den fazla yazılım mühendisinin beyan ettiği toplam ücret (maaş + hisse + bonus)
          verileri aşağıda ülke bazında karşılaştırılmaktadır. Türkiye'de medyan toplam ücret yıllık $38.600 iken
          ABD'de bu rakam $190.000 düzeyindedir. Satın alma gücü paritesi hesaba katılsa dahi aradaki fark belirgin
          şekilde sürmektedir.
        </p>

        <div className="bg-bg-white rounded-xl shadow-sm p-5">
          {/* Header */}
          <div className="flex items-center gap-3 pb-3 mb-3 border-b border-border text-[10px] text-text-dim uppercase tracking-wide font-medium">
            <span className="w-5" />
            <span className="w-24">Ülke</span>
            <span className="flex-1">P25 - P50 - P75 toplam ücret (yıllık USD)</span>
            <span className="w-20 text-right">Beyan</span>
          </div>

          <div className="space-y-2">
            {sorted.map(c => {
              const isHighlight = (c as { highlight?: boolean }).highlight;
              const barLeft = (c.p25 / maxP75) * 100;
              const barWidth = ((c.p75 - c.p25) / maxP75) * 100;
              const medianPos = (c.p50 / maxP75) * 100;

              return (
                <div
                  key={c.name}
                  className={`flex items-center gap-3 py-1.5 ${isHighlight ? 'bg-chart-4/5 -mx-2 px-2 rounded-lg' : ''}`}
                >
                  <span className="text-sm w-5">{c.flag}</span>
                  <span className={`text-sm w-24 shrink-0 ${isHighlight ? 'font-semibold text-text' : 'text-text-body'}`}>
                    {c.name}
                  </span>
                  <div className="flex-1 h-6 relative">
                    {/* P25-P75 range bar */}
                    <div
                      className={`absolute top-0.5 h-5 rounded ${isHighlight ? 'bg-chart-4/30' : 'bg-accent/15'}`}
                      style={{ left: `${barLeft}%`, width: `${barWidth}%` }}
                    />
                    {/* P50 median marker */}
                    <div
                      className={`absolute top-0 h-6 w-0.5 ${isHighlight ? 'bg-chart-4' : 'bg-accent/60'}`}
                      style={{ left: `${medianPos}%` }}
                    />
                    {/* P50 label */}
                    <span
                      className={`absolute top-0.5 text-[10px] font-mono font-semibold ${isHighlight ? 'text-chart-4' : 'text-text-muted'}`}
                      style={{ left: `${medianPos + 1}%` }}
                    >
                      {formatK(c.p50)}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-text-dim w-20 text-right">
                    {c.submissions.toLocaleString('tr-TR')}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 mt-4 pt-3 border-t border-border/50 text-[10px] text-text-dim">
            <span className="flex items-center gap-1.5">
              <span className="w-6 h-3 bg-accent/15 rounded inline-block" />
              P25-P75 aralığı
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-0.5 h-3 bg-accent/60 inline-block" />
              P50 (medyan)
            </span>
          </div>

          <p className="source-text mt-3">
            Kaynak:{' '}
            <a href={LEVELS_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Levels.fyi
            </a>
            {' '}2025 verileri, toplam ücret = maaş + hisse + bonus (yıllık USD)
          </p>
        </div>
      </section>
    </FadeIn>
  );
}
