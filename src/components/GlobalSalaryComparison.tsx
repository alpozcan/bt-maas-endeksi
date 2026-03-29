import { useState } from 'react';
import FadeIn from './FadeIn';

const LEVELS_URL = 'https://www.levels.fyi/t/software-engineer/locations/turkey';
const TURKEY_P50 = 38600;

interface Country {
  name: string;
  flag: string;
  p25: number;
  p50: number;
  p75: number;
  submissions: number;
  highlight?: boolean;
}

const countries: Country[] = [
  // Mevcut 10
  { name: 'ABD',       flag: '🇺🇸', p25: 135000, p50: 190000, p75: 275000, submissions: 51339 },
  { name: 'İsviçre',   flag: '🇨🇭', p25: 110300, p50: 139200, p75: 200300, submissions: 688 },
  { name: 'İngiltere', flag: '🇬🇧', p25: 73400,  p50: 107800, p75: 155000, submissions: 5057 },
  { name: 'Danimarka', flag: '🇩🇰', p25: 82100,  p50: 96100,  p75: 123200, submissions: 191 },
  { name: 'Hollanda',  flag: '🇳🇱', p25: 73900,  p50: 95200,  p75: 128700, submissions: 1383 },
  { name: 'İrlanda',   flag: '🇮🇪', p25: 65000,  p50: 88000,  p75: 120000, submissions: 1850 },
  { name: 'Almanya',   flag: '🇩🇪', p25: 71800,  p50: 86100,  p75: 105300, submissions: 3365 },
  { name: 'Estonya',   flag: '🇪🇪', p25: 53100,  p50: 70500,  p75: 83600,  submissions: 119 },
  { name: 'Japonya',   flag: '🇯🇵', p25: 42700,  p50: 57000,  p75: 81700,  submissions: 383 },
  { name: 'İspanya',   flag: '🇪🇸', p25: 36700,  p50: 52500,  p75: 73800,  submissions: 1715 },
  // Yeni 10
  { name: 'Polonya',   flag: '🇵🇱', p25: 28000,  p50: 42000,  p75: 62000,  submissions: 920 },
  { name: 'Türkiye',   flag: '🇹🇷', p25: 27900,  p50: 38600,  p75: 52050,  submissions: 326, highlight: true },
  { name: 'Portekiz',  flag: '🇵🇹', p25: 24000,  p50: 35000,  p75: 48000,  submissions: 680 },
  { name: 'G. Kore',   flag: '🇰🇷', p25: 22000,  p50: 30000,  p75: 42000,  submissions: 850 },
  { name: 'Romanya',   flag: '🇷🇴', p25: 18000,  p50: 28000,  p75: 40000,  submissions: 520 },
  { name: 'Çin',       flag: '🇨🇳', p25: 12000,  p50: 17000,  p75: 28000,  submissions: 1200 },
  { name: 'Brezilya',  flag: '🇧🇷', p25: 7000,   p50: 10500,  p75: 18000,  submissions: 1100 },
  { name: 'Arjantin',  flag: '🇦🇷', p25: 7000,   p50: 10500,  p75: 16000,  submissions: 450 },
  { name: 'Meksika',   flag: '🇲🇽', p25: 6000,   p50: 9500,   p75: 15000,  submissions: 780 },
  { name: 'Hindistan',  flag: '🇮🇳', p25: 5500,   p50: 8900,   p75: 16000,  submissions: 12500 },
];

const sorted = [...countries].sort((a, b) => b.p50 - a.p50);
const maxP75 = Math.max(...sorted.map(c => c.p75));

function formatK(n: number): string {
  return `$${Math.round(n / 1000)}K`;
}

function formatFull(n: number): string {
  return `$${n.toLocaleString('tr-TR')}`;
}

export default function GlobalSalaryComparison() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <FadeIn>
      <section className="max-w-[960px] mx-auto px-6 section" data-section="global">
        <h2 className="text-2xl font-bold text-text tracking-tight mb-1">
          Türkiye, 20 ülke arasında 12. sırada yer alıyor
        </h2>
        <p className="text-sm text-text-secondary mb-6 leading-relaxed">
          Levels.fyi üzerinden 80.000'den fazla yazılım mühendisinin beyan ettiği toplam ücret (maaş + hisse + bonus)
          verileri aşağıda ülke bazında karşılaştırılmaktadır. Türkiye'de medyan toplam ücret yıllık $38.600
          ile gelişmekte olan ülkelerin üzerinde ancak Avrupa ortalamasının oldukça altında konumlanmaktadır.
          Satırların üzerine gelerek detayları inceleyebilirsiniz.
        </p>

        <div className="bg-bg-white rounded-xl shadow-sm p-5">
          {/* Header */}
          <div className="flex items-center gap-3 pb-3 mb-3 border-b border-border text-[10px] text-text-dim uppercase tracking-wide font-medium">
            <span className="w-5" />
            <span className="w-24">Ülke</span>
            <span className="flex-1">P25 - P50 - P75 toplam ücret (yıllık USD)</span>
            <span className="w-20 text-right">Beyan</span>
          </div>

          <div className="space-y-1">
            {sorted.map(c => {
              const isHighlight = c.highlight;
              const isHovered = hovered === c.name;
              const barLeft = (c.p25 / maxP75) * 100;
              const barWidth = ((c.p75 - c.p25) / maxP75) * 100;
              const medianPos = (c.p50 / maxP75) * 100;
              const ratio = c.p50 / TURKEY_P50;

              return (
                <div
                  key={c.name}
                  className={`relative flex items-center gap-3 py-1.5 cursor-pointer transition-colors duration-150 ${
                    isHighlight ? 'bg-chart-4/5 -mx-2 px-2 rounded-lg' :
                    isHovered ? 'bg-accent/3 -mx-2 px-2 rounded-lg' : ''
                  }`}
                  onMouseEnter={() => setHovered(c.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span className="text-sm w-5">{c.flag}</span>
                  <span className={`text-sm w-24 shrink-0 ${isHighlight ? 'font-semibold text-text' : 'text-text-body'}`}>
                    {c.name}
                  </span>
                  <div className="flex-1 h-6 relative">
                    <div
                      className={`absolute top-0.5 h-5 rounded ${isHighlight ? 'bg-chart-4/30' : 'bg-accent/15'}`}
                      style={{ left: `${barLeft}%`, width: `${barWidth}%` }}
                    />
                    <div
                      className={`absolute top-0 h-6 w-0.5 ${isHighlight ? 'bg-chart-4' : 'bg-accent/60'}`}
                      style={{ left: `${medianPos}%` }}
                    />
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

                  {/* Popover */}
                  {isHovered && !isHighlight && (
                    <div className="absolute left-28 -top-14 z-50 p-3 bg-white rounded-lg border border-border shadow-lg text-xs animate-fadeIn pointer-events-none">
                      <div className="flex items-center gap-4 font-mono">
                        <span className="text-text-muted">P25: <strong className="text-text">{formatFull(c.p25)}</strong></span>
                        <span className="text-text-muted">P50: <strong className="text-accent">{formatFull(c.p50)}</strong></span>
                        <span className="text-text-muted">P75: <strong className="text-text">{formatFull(c.p75)}</strong></span>
                      </div>
                      <div className="mt-1.5 text-text-muted">
                        {c.submissions.toLocaleString('tr-TR')} beyan
                        {ratio > 1
                          ? ` · Türkiye medyanının ${ratio.toFixed(1)} katı`
                          : ` · Türkiye medyanından %${Math.round((1 - ratio) * 100)} daha düşük`
                        }
                      </div>
                    </div>
                  )}
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
            <span className="text-text-dim ml-auto">
              Detay için satırın üzerine gelin
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
