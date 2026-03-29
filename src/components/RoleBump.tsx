import { ResponsiveBump } from '@nivo/bump';
import FadeIn from './FadeIn';

const ONCEKI_URL = 'https://github.com/nicatdursunlu/onceki-yazilimci-2026-anket-sonuclari';

const bumpYears = ['2020', '2021', '2022', '2023', '2024', '2025', '2026'];

const bumpData = [
  { id: 'CTO',          data: bumpYears.map((x, i) => ({ x, y: [1,1,1,1,1,1,1][i] })) },
  { id: 'Architect',    data: bumpYears.map((x, i) => ({ x, y: [2,2,2,2,2,2,2][i] })) },
  { id: 'Tech Lead',    data: bumpYears.map((x, i) => ({ x, y: [3,3,3,3,3,3,3][i] })) },
  { id: 'AI Engineer',  data: bumpYears.map((x, i) => ({ x, y: [14,13,11,8,5,4,4][i] })) },
  { id: 'ML Engineer',  data: bumpYears.map((x, i) => ({ x, y: [12,11,9,6,4,5,5][i] })) },
  { id: 'DevOps',       data: bumpYears.map((x, i) => ({ x, y: [5,5,5,4,6,6,6][i] })) },
  { id: 'Backend',      data: bumpYears.map((x, i) => ({ x, y: [4,4,4,7,7,7,7][i] })) },
  { id: 'Cloud',        data: bumpYears.map((x, i) => ({ x, y: [8,7,6,9,8,8,8][i] })) },
  { id: 'iOS',          data: bumpYears.map((x, i) => ({ x, y: [6,6,10,10,9,9,9][i] })) },
  { id: 'Siber Güvenlik', data: bumpYears.map((x, i) => ({ x, y: [7,10,12,12,10,10,10][i] })) },
  { id: 'Full Stack',   data: bumpYears.map((x, i) => ({ x, y: [9,8,7,11,11,11,11][i] })) },
  { id: 'Veri Bilimci', data: bumpYears.map((x, i) => ({ x, y: [11,9,8,5,12,12,12][i] })) },
  { id: 'Frontend',     data: bumpYears.map((x, i) => ({ x, y: [10,12,13,13,13,13,13][i] })) },
  { id: 'Android',      data: bumpYears.map((x, i) => ({ x, y: [13,14,14,14,14,14,14][i] })) },
];

const theme = {
  background: 'transparent',
  text: { fill: '#666', fontSize: 11, fontFamily: 'Inter' },
  axis: {
    ticks: { text: { fill: '#999', fontSize: 11, fontFamily: 'JetBrains Mono' }, line: { stroke: 'transparent' } },
    domain: { line: { stroke: '#E5E5E5' } },
  },
  grid: { line: { stroke: '#EBEBEB' } },
  tooltip: {
    container: { background: '#fff', border: '1px solid #E5E5E5', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', color: '#333', fontSize: '12px' },
  },
};

const colors = [
  '#ef4444', '#6366f1', '#818cf8', '#10b981', '#059669',
  '#f59e0b', '#a78bfa', '#06b6d4', '#f97316', '#8b5cf6',
  '#64748b', '#14b8a6', '#e879f9', '#fb923c',
];

export default function RoleBump() {
  return (
    <FadeIn>
      <section className="max-w-[960px] mx-auto px-6 section" data-section="bump">
        <h2 className="text-2xl font-bold text-text tracking-tight mb-1">
          AI Engineer 2020'de 14. sıradayken 2026 itibarıyla 4. sıraya yükseldi
        </h2>
        <p className="text-sm text-text-secondary mb-6 leading-relaxed max-w-[700px]">
          AI mühendisliği, ChatGPT sonrası dönemde hızla yükseldi ve 2024 itibarıyla dördüncü sıraya oturdu.
          Üst üç sıra (CTO, Architect, Tech Lead) yıllardır değişmiyor; bu durum yönetim rollerinin maaş istikrarını yansıtıyor.
          Klasik geliştirme rolleri (Frontend, Full Stack) ise sıralamada geriledi.
        </p>
        <div className="bg-bg-white rounded-xl shadow-sm p-5 pb-4">
          <div className="h-[480px]">
            <ResponsiveBump
              data={bumpData}
              theme={theme}
              colors={colors}
              lineWidth={2.5}
              activeLineWidth={5}
              inactiveLineWidth={1.5}
              inactiveOpacity={0.15}
              pointSize={7}
              activePointSize={12}
              inactivePointSize={0}
              pointColor="#FFFFFF"
              pointBorderWidth={2.5}
              activePointBorderWidth={3}
              pointBorderColor={{ from: 'serie.color' }}
              axisTop={null}
              axisBottom={{ tickSize: 0, tickPadding: 10 }}
              axisLeft={{ tickSize: 0, tickPadding: 8 }}
              margin={{ top: 16, right: 120, bottom: 36, left: 36 }}
              motionConfig="gentle"
            />
          </div>
          <p className="source-text mt-2">
            Kaynak:{' '}
            <a href={ONCEKI_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              önceki yazılımcı
            </a>
            {' '}anketleri 2020-2026, senior medyan maaşa göre sıralama
          </p>
        </div>
      </section>
    </FadeIn>
  );
}
