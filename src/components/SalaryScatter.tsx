import { useState, useEffect, useMemo } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer, ZAxis } from 'recharts';

interface DataPoint {
  experience: number;
  salary: number;
  level: string;
  position: string;
  city: string;
}

interface CompactData {
  _p: string[];
  _c: string[];
  _co: string[];
  _e: string[];
  d: (string | number)[][];
}

const LEVEL_COLORS = {
  junior: '#6366f1',
  mid: '#f59e0b',
  senior: '#10b981',
};

const expToYears: Record<string, number> = {
  '0 - 1 Yıl': 0.5, '1 - 3 Yıl': 2, '3 - 5 Yıl': 4,
  '5 - 7 Yıl': 6, '7 - 10 Yıl': 8.5, '10 - 12 Yıl': 11,
  '12 - 14 Yıl': 13, '15 Yıl ve üzeri': 17,
};

export default function SalaryScatter() {
  const [data, setData] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [cityFilter, setCityFilter] = useState('');
  const [cities, setCities] = useState<string[]>([]);
  const [cityInput, setCityInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    fetch('/data/survey-2025.json')
      .then(r => r.json())
      .then((compact: CompactData) => {
        const points: DataPoint[] = compact.d
          .filter(row => typeof row[6] === 'number' && (row[6] as number) > 500)
          .map(row => ({
            experience: expToYears[compact._e[row[3] as number]] || 5,
            salary: row[6] as number,
            level: row[0] as string,
            position: compact._p[row[1] as number] || '',
            city: compact._c[row[4] as number] || '',
          }))
          .filter(p => !p.city.startsWith('Yurt') && !p.city.startsWith('*'));

        setData(points);
        setCities([...new Set(points.map(p => p.city))].sort());
        setLoading(false);
      })
      .catch(err => { console.error('Survey data error:', err); setLoading(false); });
  }, []);

  const filtered = useMemo(() => cityFilter ? data.filter(d => d.city === cityFilter) : data, [data, cityFilter]);

  const sampled = useMemo(() => {
    const MAX = 1500;
    if (filtered.length <= MAX) return filtered;
    const byLevel: Record<string, DataPoint[]> = {};
    for (const p of filtered) (byLevel[p.level] ||= []).push(p);
    const result: DataPoint[] = [];
    for (const points of Object.values(byLevel)) {
      const step = Math.max(1, Math.floor(points.length / Math.round((points.length / filtered.length) * MAX)));
      for (let i = 0; i < points.length && result.length < MAX; i += step) result.push(points[i]);
    }
    return result;
  }, [filtered]);

  const junior = useMemo(() => sampled.filter(d => d.level === 'J'), [sampled]);
  const mid = useMemo(() => sampled.filter(d => d.level === 'M'), [sampled]);
  const senior = useMemo(() => sampled.filter(d => d.level === 'S'), [sampled]);

  const cityMatches = useMemo(() => {
    if (!cityInput) return [];
    const q = cityInput.toLowerCase();
    return cities.filter(c => c.toLowerCase().includes(q)).slice(0, 8);
  }, [cityInput, cities]);

  if (loading) {
    return <div className="flex items-center justify-center py-20 text-sm text-text-muted">Veri yükleniyor...</div>;
  }

  return (
    <div>
      {/* City filter */}
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <span className="text-xs text-text-muted">Şehir:</span>
        <div className="relative">
          <input
            type="text"
            value={cityInput}
            onChange={e => { setCityInput(e.target.value); setCityFilter(''); setShowSuggestions(true); }}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Şehir ara..."
            className="px-3 py-1.5 rounded-lg border border-border bg-bg-white text-text text-sm outline-none focus:border-accent w-48"
          />
          {showSuggestions && (cityInput ? cityMatches : cities.slice(0, 10)).length > 0 && (
            <div className="absolute top-full left-0 right-0 z-50 bg-bg-white border border-border rounded-lg mt-1 overflow-hidden shadow-md">
              {!cityInput && (
                <button
                  onClick={() => { setCityFilter(''); setCityInput(''); setShowSuggestions(false); }}
                  className="w-full text-left px-3 py-2 text-xs text-text-muted hover:bg-bg-hover cursor-pointer"
                >
                  Tümü ({data.length.toLocaleString('tr-TR')})
                </button>
              )}
              {(cityInput ? cityMatches : cities.slice(0, 10)).map(c => (
                <button
                  key={c}
                  onClick={() => { setCityFilter(c); setCityInput(c); setShowSuggestions(false); }}
                  className="w-full text-left px-3 py-2 text-xs text-text border-t border-border hover:bg-bg-hover cursor-pointer"
                >
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>
        {cityFilter && (
          <button onClick={() => { setCityFilter(''); setCityInput(''); }} className="text-xs text-accent hover:underline cursor-pointer">
            Temizle
          </button>
        )}
        <span className="text-xs text-text-dim">
          Gösterilen: {sampled.length.toLocaleString('tr-TR')}{sampled.length < filtered.length ? ` / ${filtered.length.toLocaleString('tr-TR')}` : ''}
        </span>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mb-4">
        {[
          { label: 'Junior', color: LEVEL_COLORS.junior },
          { label: 'Orta Seviye', color: LEVEL_COLORS.mid },
          { label: 'Kıdemli', color: LEVEL_COLORS.senior },
        ].map(l => (
          <span key={l.label} className="flex items-center gap-2 text-sm text-text">
            <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: l.color }} />
            {l.label}
          </span>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={500}>
        <ScatterChart margin={{ top: 10, right: 20, bottom: 30, left: 20 }}>
          <XAxis
            type="number" dataKey="experience" name="Deneyim"
            unit=" yıl" domain={[0, 20]}
            tick={{ fill: '#999', fontSize: 12 }}
            axisLine={{ stroke: '#E5E5E5' }}
            tickLine={false}
            label={{ value: 'Deneyim (yıl)', position: 'bottom', fill: '#999', fontSize: 12, offset: 10 }}
          />
          <YAxis
            type="number" dataKey="salary" name="Maaş"
            tick={{ fill: '#999', fontSize: 12 }}
            axisLine={{ stroke: '#E5E5E5' }}
            tickLine={false}
            tickFormatter={(v: number) => `₺${v / 1000}K`}
            label={{ value: 'Aylık net ₺', angle: -90, position: 'insideLeft', fill: '#999', fontSize: 12 }}
            width={70}
          />
          <ZAxis range={[20, 20]} />
          <Tooltip
            contentStyle={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: '8px', fontSize: '12px' }}
            formatter={(value: number, name: string) => {
              if (name === 'Maaş') return [`₺${value.toLocaleString('tr-TR')}`, 'Maaş'];
              return [value, name];
            }}
          />
          <Scatter name="Junior" data={junior} fill={LEVEL_COLORS.junior} opacity={0.45} />
          <Scatter name="Orta" data={mid} fill={LEVEL_COLORS.mid} opacity={0.45} />
          <Scatter name="Kıdemli" data={senior} fill={LEVEL_COLORS.senior} opacity={0.45} />
        </ScatterChart>
      </ResponsiveContainer>

      <p className="source-text text-center mt-4">
        Kaynak: önceki yazılımcı 2026 anketi ·{' '}
        <a href="https://github.com/oncekiyazilimci/2025-yazilim-sektoru-maaslari" target="_blank" rel="noopener" className="text-accent hover:underline">
          oncekiyazilimci
        </a>
      </p>
    </div>
  );
}
