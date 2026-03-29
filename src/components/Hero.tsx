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
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-[clamp(2.5rem,5vw,3.5rem)] font-black leading-[1.1] tracking-[-2px] text-text mb-4">
          Türkiye Yazılım Sektörü{' '}
          <span className="text-accent">Maaş Raporu</span>
        </h1>

        <p className="text-lg text-text-secondary leading-relaxed max-w-[700px] mb-12">
          Bu rapor; önceki yazılımcı anketi (5.002 katılımcı), Levels.fyi (64.000+ beyan)
          ve TÜİK verilerini temel alarak 37 pozisyon ve 9 yıllık maaş karşılaştırması sunmaktadır.{' '}
          <a href="https://github.com/alpozcan/bt-maas-endeksi" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Açık kaynak.</a>
        </p>
      </motion.div>

      {/* KPI Cards */}
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

      <p className="source-text mt-6">
        Kaynak:{' '}
        <a
          href="https://github.com/nicatdursunlu/onceki-yazilimci-2026-anket-sonuclari"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          önceki yazılımcı 2026 anketi
        </a>
        , medyan aylık net TRY
      </p>
    </section>
  );
}
