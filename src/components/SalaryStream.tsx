import { ResponsiveStream } from '@nivo/stream';
import { years } from '../data/salaries';

const streamData = years.map((_, i) => ({
  'Geliştirme': [12, 14, 17, 22, 35, 60, 95, 130, 165][i],
  'Veri & YZ': [3, 4, 5, 8, 15, 30, 55, 80, 110][i],
  'Altyapı': [5, 6, 8, 11, 18, 32, 55, 78, 105][i],
  'Yönetim': [8, 10, 13, 18, 30, 55, 100, 145, 200][i],
}));

const theme = {
  background: 'transparent',
  text: { fill: '#666', fontSize: 11, fontFamily: 'Inter' },
  axis: {
    ticks: { text: { fill: '#999', fontSize: 11, fontFamily: 'JetBrains Mono' }, line: { stroke: 'transparent' } },
  },
  grid: { line: { stroke: '#EBEBEB' } },
  tooltip: {
    container: { background: '#fff', border: '1px solid #E5E5E5', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', color: '#333', fontSize: '12px' },
  },
};

export default function SalaryStream() {
  return (
    <section className="max-w-[960px] mx-auto px-6 section" data-section="stream">
      <h2 className="text-2xl font-bold text-text tracking-tight mb-1">
        Tüm kategorilerde maaşlar paralel yükseldi
      </h2>
      <p className="text-sm text-text-secondary mb-6">
        Kategori bazında medyan maaş akışı — ₺K aylık net TRY
      </p>
      <div className="bg-bg-white rounded-xl shadow-sm p-6 pb-4">
        <div className="h-[360px]">
          <ResponsiveStream
            data={streamData}
            keys={['Geliştirme', 'Veri & YZ', 'Altyapı', 'Yönetim']}
            theme={theme}
            margin={{ top: 16, right: 100, bottom: 36, left: 48 }}
            axisBottom={{
              tickSize: 0,
              tickPadding: 10,
              format: (i: number) => String(years[i] ?? ''),
            }}
            axisLeft={null}
            offsetType="diverging"
            colors={['#6366f1', '#10b981', '#f59e0b', '#ef4444']}
            fillOpacity={0.65}
            borderColor={{ theme: 'background' }}
            enableDots={false}
            curve="catmullRom"
            legends={[{
              anchor: 'right', direction: 'column', translateX: 90,
              itemWidth: 80, itemHeight: 22, itemTextColor: '#666',
              symbolSize: 10, symbolShape: 'circle',
            }]}
          />
        </div>
        <p className="source-text mt-2">Kaynak: önceki yazılımcı anketleri 2018–2026</p>
      </div>
    </section>
  );
}
