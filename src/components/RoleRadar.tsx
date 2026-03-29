import { ResponsiveRadar } from '@nivo/radar';

const radarData = [
  { role: 'Backend',  'Türkiye': 180, 'ABD': 750, 'Almanya': 550 },
  { role: 'Frontend', 'Türkiye': 145, 'ABD': 690, 'Almanya': 510 },
  { role: 'DevOps',   'Türkiye': 185, 'ABD': 840, 'Almanya': 570 },
  { role: 'AI/ML',    'Türkiye': 200, 'ABD': 990, 'Almanya': 650 },
  { role: 'Mobil',    'Türkiye': 170, 'ABD': 780, 'Almanya': 540 },
  { role: 'QA',       'Türkiye': 130, 'ABD': 600, 'Almanya': 408 },
];

const countries = [
  { key: 'Türkiye', color: '#6366f1' },
  { key: 'ABD', color: '#10b981' },
  { key: 'Almanya', color: '#f59e0b' },
];

const theme = {
  background: 'transparent',
  text: { fill: '#666', fontSize: 12, fontFamily: 'Inter' },
  grid: { line: { stroke: '#EBEBEB' } },
  tooltip: {
    container: { background: '#fff', border: '1px solid #E5E5E5', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', color: '#333', fontSize: '12px' },
  },
};

export default function RoleRadar() {
  return (
    <section className="max-w-[960px] mx-auto px-6 section" data-section="radar">
      <h2 className="text-2xl font-bold text-text tracking-tight mb-1">
        AI/ML alanında Türkiye-ABD farkı en yüksek
      </h2>
      <p className="text-sm text-text-secondary mb-6">
        Pozisyon bazında yıllık brüt maaş karşılaştırması - Türkiye vs ABD vs Almanya ($K)
      </p>
      <div className="bg-bg-white rounded-xl shadow-sm p-5 pb-4">
        {/* Inline direct labels instead of legend */}
        <div className="flex items-center gap-5 mb-3">
          {countries.map(c => (
            <span key={c.key} className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: c.color }}>
              <span className="w-3 h-[2.5px] rounded-full inline-block" style={{ backgroundColor: c.color }} />
              {c.key}
            </span>
          ))}
        </div>
        <div className="h-[420px]">
          <ResponsiveRadar
            data={radarData}
            keys={['Türkiye', 'ABD', 'Almanya']}
            indexBy="role"
            theme={theme}
            maxValue={1100}
            margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
            curve="linearClosed"
            borderWidth={2}
            borderColor={{ from: 'color' }}
            colors={['#6366f1', '#10b981', '#f59e0b']}
            fillOpacity={0.08}
            blendMode="multiply"
            dotSize={7}
            dotColor="#FFFFFF"
            dotBorderWidth={2}
            dotBorderColor={{ from: 'color' }}
            gridLevels={5}
            gridShape="circular"
            legends={[]}
            motionConfig="gentle"
          />
        </div>
        <p className="source-text mt-2">Kaynak: önceki yazılımcı 2026, Levels.fyi, Glassdoor · Yıllık brüt $K</p>
      </div>
    </section>
  );
}
