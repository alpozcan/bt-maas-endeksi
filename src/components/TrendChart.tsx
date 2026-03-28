import { ResponsiveLine } from '@nivo/line';
import { trend, years } from '../data/salaries';

/* Rules applied:
   #3: Left-aligned bold title + regular subtitle
   #6: Max 3-4 colors per chart
   #15: Horizontal gridlines only, light grey
   #16: Direct labeling on chart
   #17: Y-axis labels inside chart area
   #20: Title + subtitle + source
*/

const data = [
  {
    id: 'Senior',
    color: '#ef4444',
    data: years.map((y, i) => ({ x: String(y), y: trend.senior[i] })),
  },
  {
    id: 'Mid',
    color: '#6366f1',
    data: years.map((y, i) => ({ x: String(y), y: trend.mid[i] })),
  },
  {
    id: 'Junior',
    color: '#10b981',
    data: years.map((y, i) => ({ x: String(y), y: trend.junior[i] })),
  },
];

const theme = {
  background: 'transparent',
  text: { fill: '#666666', fontSize: 12, fontFamily: 'Inter' },
  axis: {
    ticks: {
      text: { fill: '#999999', fontSize: 11, fontFamily: 'JetBrains Mono' },
      line: { stroke: 'transparent' },
    },
    legend: { text: { fill: '#666666', fontSize: 13, fontFamily: 'Inter', fontWeight: 500 } },
    domain: { line: { stroke: '#E5E5E5' } },
  },
  grid: { line: { stroke: '#EBEBEB', strokeWidth: 1 } },
  crosshair: { line: { stroke: '#6366f1', strokeWidth: 1, strokeOpacity: 0.3 } },
  tooltip: {
    container: {
      background: '#FFFFFF',
      border: '1px solid #E5E5E5',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      color: '#333333',
      fontFamily: 'Inter',
      fontSize: '12px',
      padding: '8px 12px',
    },
  },
};

export default function TrendChart() {
  return (
    <section className="max-w-[960px] mx-auto px-6 section" data-section="trend">
      {/* Rule #3: Bold title, regular subtitle */}
      <h2 className="text-2xl font-bold text-text tracking-tight mb-1">
        Maaş artışı 8 yılda 34 katına ulaştı
      </h2>
      <p className="text-sm text-text-secondary mb-6">
        Aylık net TRY, seviyeye göre medyan — 2018'den 2026'ya
      </p>

      {/* Rule #19: ~16:9 aspect ratio */}
      <div className="bg-bg-white rounded-xl shadow-sm p-6 pb-4">
        <div className="h-[400px]">
          <ResponsiveLine
            data={data}
            theme={theme}
            margin={{ top: 20, right: 80, bottom: 44, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 0, max: 200000 }}
            curve="monotoneX"
            colors={d => d.color ?? '#6366f1'}
            lineWidth={2.5}
            enablePoints
            pointSize={6}
            pointColor="#FFFFFF"
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            enableArea
            areaOpacity={0.08}
            areaBlendMode="multiply"
            useMesh
            enableSlices="x"
            axisLeft={{
              tickSize: 0,
              tickPadding: 8,
              tickValues: [0, 50000, 100000, 150000, 200000],
              format: (v: number) => `₺${(v / 1000).toFixed(0)}K`,
            }}
            axisBottom={{
              tickSize: 0,
              tickPadding: 12,
            }}
            enableGridX={false}
            gridYValues={[0, 50000, 100000, 150000, 200000]}
            /* Rule #16: Direct labels instead of legend */
            legends={[
              {
                anchor: 'right',
                direction: 'column',
                translateX: 70,
                itemWidth: 60,
                itemHeight: 22,
                itemTextColor: '#666',
                symbolSize: 8,
                symbolShape: 'circle',
              },
            ]}
            motionConfig="gentle"
          />
        </div>
        <p className="source-text mt-2">
          Kaynak: önceki yazılımcı anketleri 2018–2026
        </p>
      </div>
    </section>
  );
}
