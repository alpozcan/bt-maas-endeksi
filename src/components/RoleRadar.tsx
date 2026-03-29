import { ResponsiveRadar } from '@nivo/radar';
import FadeIn from './FadeIn';

const LEVELS_URL = 'https://www.levels.fyi/t/software-engineer/locations/turkey';
const GLASSDOOR_URL = 'https://www.glassdoor.com/Salaries/turkey-software-engineer-salary-SRCH_IL.0,6_IN239_KO7,24.htm';

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
    <FadeIn>
      <section className="max-w-[960px] mx-auto px-6 section" data-section="radar">
        <h2 className="text-2xl font-bold text-text tracking-tight mb-1">
          AI/ML alanında Türkiye-ABD farkı en yüksek
        </h2>
        <p className="text-sm text-text-secondary mb-6 leading-relaxed max-w-[700px]">
          Türkiye'deki yazılım maaşları ABD'nin yaklaşık dörtte biri, Almanya'nın ise üçte biri düzeyinde.
          En büyük fark AI/ML alanında ortaya çıkıyor: bir Türk AI mühendisi yıllık $200K kazanırken,
          ABD'deki meslektaşı $990K kazanıyor. Satın alma gücü paritesi hesaba katıldığında fark daralsa da
          hâlâ önemli düzeyde.
        </p>
        <div className="bg-bg-white rounded-xl shadow-sm p-5 pb-4">
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
          <p className="source-text mt-2">
            Kaynak:{' '}
            <a href="https://github.com/nicatdursunlu/onceki-yazilimci-2026-anket-sonuclari" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">önceki yazılımcı 2026</a>,{' '}
            <a href={LEVELS_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Levels.fyi</a>,{' '}
            <a href={GLASSDOOR_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Glassdoor</a>
            {' '}- yıllık brüt ($K)
          </p>
        </div>
      </section>
    </FadeIn>
  );
}
