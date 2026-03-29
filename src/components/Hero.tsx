import { motion } from 'framer-motion';
import { kpis, trend, years } from '../data/salaries';

function MiniSparkline({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const h = 32;
  const w = 80;
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / (max - min)) * h;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width={w} height={h} className="opacity-40">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="max-w-[960px] mx-auto px-6 pt-24 pb-16">
      {/* Rule #3: Left-aligned bold title + regular subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Source badge */}
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-block w-2 h-2 rounded-full bg-accent" />
          <span className="text-xs font-medium text-text-secondary tracking-wide">
            önceki yazılımcı 2026 · 5.002 katılımcı · 37 pozisyon
          </span>
        </div>

        {/* Rule #1: Large headline, not-quite-black */}
        <h1 className="text-[clamp(2.5rem,5vw,3.5rem)] font-black leading-[1.1] tracking-[-2px] text-text mb-4">
          Türkiye Yazılım Sektörü{' '}
          <span className="text-accent">Maaş Raporu</span>
        </h1>

        {/* Rule #20: Descriptive subtitle */}
        <p className="text-lg text-text-secondary leading-relaxed max-w-[650px] mb-12">
          2018'den 2026'ya, binlerce yazılımcının anonim katılımıyla oluşturulan
          Türkiye'nin en kapsamlı maaş analizi. Veriye dayalı, bağımsız, açık kaynak.
        </p>
      </motion.div>

      {/* KPI Cards — Rule #14: subtle shadow, no borders */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
            className="bg-bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-start justify-between mb-2">
              <div
                className="font-mono text-2xl font-bold tracking-tight"
                style={{ color: kpi.color }}
              >
                {kpi.prefix ?? ''}{kpi.value.toLocaleString('tr-TR')}{kpi.suffix ?? ''}
              </div>
              <MiniSparkline
                data={kpi.label.includes('Senior') ? trend.senior : kpi.label.includes('Mid') ? trend.mid : trend.junior}
                color={kpi.color}
              />
            </div>
            <div className="text-xs text-text-muted font-medium">
              {kpi.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Source attribution — Rule #4 */}
      <p className="source-text mt-6">
        Kaynak: önceki yazılımcı 2026 anketi · Medyan aylık net TRY
      </p>
    </section>
  );
}
