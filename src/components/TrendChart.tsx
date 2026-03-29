import { ResponsiveLine } from '@nivo/line';
import { trend, years } from '../data/salaries';

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

// Direct labels at end of each line (instead of legend)
const endLabels = [
  { id: 'Senior', y: trend.senior[8], color: '#ef4444' },
  { id: 'Mid',    y: trend.mid[8],    color: '#6366f1' },
  { id: 'Junior', y: trend.junior[8], color: '#10b981' },
];

const theme = {
  background: 'transparent',
  text: { fill: '#666666', fontSize: 12, fontFamily: 'Inter' },
  axis: {
    ticks: {
      text: { fill: '#999999', fontSize: 11, fontFamily: 'JetBrains Mono' },
      line: { stroke: 'transparent' },
    },
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
      <h2 className="text-2xl font-bold text-text tracking-tight mb-1">
        Maaş artışı 8 yılda 34 katına ulaştı
      </h2>
      <p className="text-sm text-text-secondary mb-6">
        Aylık net TRY, seviyeye göre medyan — 2018'den 2026'ya
      </p>

      <div className="bg-bg-white rounded-xl shadow-sm p-6 pb-4">
        <div className="h-[400px] relative">
          <ResponsiveLine
            data={data}
            theme={theme}
            margin={{ top: 20, right: 90, bottom: 44, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 0, max: 200000 }}
            curve="monotoneX"
            colors={(d: { color?: string }) => d.color ?? '#6366f1'}
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
            legends={[]}
            layers={[
              'grid', 'markers', 'axes', 'areas', 'crosshair', 'lines', 'points', 'slices', 'mesh', 'legends',
              // Direct end-of-line labels layer
              ({ series, xScale, yScale }: { series: { id: string; color: string; data: { position: { x: number; y: number } }[] }[]; xScale: (v: string) => number; yScale: (v: number) => number }) => (
                <g key="direct-labels">
                  {series.map(s => {
                    const lastPoint = s.data[s.data.length - 1];
                    if (!lastPoint) return null;
                    return (
                      <g key={s.id} transform={`translate(${lastPoint.position.x + 10}, ${lastPoint.position.y})`}>
                        <text
                          style={{
                            fill: s.color,
                            fontSize: 12,
                            fontFamily: 'Inter',
                            fontWeight: 600,
                          }}
                          dominantBaseline="central"
                        >
                          {s.id}
                        </text>
                      </g>
                    );
                  })}
                </g>
              ),
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
