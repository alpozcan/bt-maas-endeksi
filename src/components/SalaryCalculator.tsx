import { useState, useEffect, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';

interface SurveyRecord {
  level: string;
  position: string;
  experience: string;
  city: string;
  workType: string;
  salary: number;
}

interface CompactData {
  _p: string[];
  _c: string[];
  _co: string[];
  _e: string[];
  d: (string | number)[][];
}

export default function SalaryCalculator() {
  const [records, setRecords] = useState<SurveyRecord[]>([]);
  const [loading, setLoading] = useState(true);

  const [level, setLevel] = useState('M');
  const [position, setPosition] = useState('');
  const [experience, setExperience] = useState('');
  const [city, setCity] = useState('');
  const [workType, setWorkType] = useState('');
  const [userSalary, setUserSalary] = useState<number>(0);
  const [calculated, setCalculated] = useState(false);

  const [positions, setPositions] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [experiences, setExperiences] = useState<string[]>([]);

  useEffect(() => {
    fetch('/data/survey-2025.json')
      .then(r => r.json())
      .then((compact: CompactData) => {
        const recs = compact.d.map(row => ({
          level: row[0] as string,
          position: compact._p[row[1] as number] || '',
          experience: compact._e[row[3] as number] || '',
          city: compact._c[row[4] as number] || '',
          workType: row[5] as string,
          salary: row[6] as number,
        }));
        setRecords(recs);
        setPositions([...new Set(recs.map(r => r.position))].sort());
        setCities([...new Set(recs.map(r => r.city))].filter(c => !c.startsWith('Yurt')).sort());
        setExperiences(compact._e);
        setLoading(false);
      })
      .catch(err => { console.error('Survey data error:', err); setLoading(false); });
  }, []);

  const filtered = useMemo(() => records.filter(r => {
    if (level && r.level !== level) return false;
    if (position && r.position !== position) return false;
    if (experience && r.experience !== experience) return false;
    if (city && r.city !== city) return false;
    if (workType && r.workType !== workType) return false;
    return true;
  }), [records, level, position, experience, city, workType]);

  const salaries = useMemo(() => filtered.map(r => r.salary).sort((a, b) => a - b), [filtered]);

  const stats = useMemo(() => {
    if (salaries.length === 0) return null;
    const pct = (p: number) => salaries[Math.max(0, Math.ceil((p / 100) * salaries.length) - 1)];
    const avg = Math.round(salaries.reduce((a, b) => a + b, 0) / salaries.length);
    const rank = userSalary > 0 ? Math.round((salaries.filter(s => s <= userSalary).length / salaries.length) * 100) : 0;
    return { p25: pct(25), p50: pct(50), p75: pct(75), avg, rank, count: salaries.length };
  }, [salaries, userSalary]);

  const histogram = useMemo(() => {
    if (salaries.length < 5) return [];
    const min = salaries[0];
    const max = salaries[salaries.length - 1];
    const binCount = Math.min(25, Math.max(10, Math.floor(salaries.length / 20)));
    const binSize = Math.ceil((max - min) / binCount);
    return Array.from({ length: binCount }, (_, i) => {
      const lo = min + i * binSize;
      const hi = lo + binSize;
      const count = salaries.filter(s => s >= lo && s < hi).length;
      return { label: `₺${Math.round(lo / 1000)}K`, count, hasUser: userSalary >= lo && userSalary < hi };
    });
  }, [salaries, userSalary]);

  if (loading) {
    return <div className="flex items-center justify-center py-20 text-sm text-text-muted">Veri yükleniyor... (8.241 kayıt)</div>;
  }

  return (
    <div>
      {/* Filters */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {[
          { label: 'Seviye', value: level, set: setLevel, options: [['', 'Tümü'], ['J', 'Junior'], ['M', 'Orta'], ['S', 'Senior']] },
          { label: 'Pozisyon', value: position, set: setPosition, options: [['', 'Tümü'], ...positions.map(p => [p, p])] },
          { label: 'Deneyim', value: experience, set: setExperience, options: [['', 'Tümü'], ...experiences.map(e => [e, e])] },
          { label: 'Şehir', value: city, set: setCity, options: [['', 'Tümü'], ...cities.map(c => [c, c])] },
          { label: 'Çalışma Şekli', value: workType, set: setWorkType, options: [['', 'Tümü'], ['R', 'Remote'], ['H', 'Hibrit'], ['O', 'Ofis']] },
        ].map(f => (
          <div key={f.label}>
            <label className="block text-[10px] text-text-muted font-medium mb-1 uppercase tracking-wide">{f.label}</label>
            <select
              value={f.value}
              onChange={e => { f.set(e.target.value); setCalculated(false); }}
              className="w-full px-3 py-2 rounded-lg border border-border bg-bg-white text-text text-sm outline-none focus:border-accent transition"
            >
              {f.options.map(([val, label]) => <option key={val} value={val}>{label}</option>)}
            </select>
          </div>
        ))}
        <div>
          <label className="block text-[10px] text-text-muted font-medium mb-1 uppercase tracking-wide">Aylık Net (₺)</label>
          <input
            type="number"
            placeholder="75000"
            value={userSalary || ''}
            onChange={e => { setUserSalary(Number(e.target.value)); setCalculated(false); }}
            onKeyDown={e => e.key === 'Enter' && setCalculated(true)}
            className="w-full px-3 py-2 rounded-lg border border-border bg-bg-white text-text text-sm outline-none focus:border-accent transition font-mono"
          />
        </div>
      </div>

      {/* Calculate Button */}
      <button
        onClick={() => userSalary > 0 && setCalculated(true)}
        className="mt-4 w-full py-3 rounded-xl bg-accent text-white font-semibold text-sm cursor-pointer hover:opacity-90 transition"
      >
        Hesapla — {filtered.length.toLocaleString('tr-TR')} kişi arasında
      </button>

      {/* Results */}
      {calculated && stats && stats.count >= 5 && (
        <div className="mt-6 space-y-3">
          {/* Percentile Hero */}
          <div className="bg-bg-chart rounded-xl p-8 text-center">
            <p className="text-sm text-text-muted">{stats.count.toLocaleString('tr-TR')} kişi arasında</p>
            <div className="my-3">
              <span className="text-6xl font-black text-accent font-mono">{stats.rank}</span>
              <span className="text-xl text-text-muted">. yüzdelik</span>
            </div>
            <p className="text-sm text-text-secondary">
              ₺{userSalary.toLocaleString('tr-TR')} ile bu gruptaki geliştiricilerin %{stats.rank >= 50 ? 100 - stats.rank : stats.rank}'
              {stats.rank >= 50 ? 'ünden daha fazla' : 'ünden daha az'} kazanıyorsunuz.
            </p>

            {/* Percentile bar */}
            <div className="relative h-2.5 rounded-full bg-border mt-5 overflow-hidden">
              <div className="absolute left-0 top-0 h-full rounded-full bg-accent transition-all duration-700" style={{ width: `${stats.rank}%` }} />
            </div>
            <div className="flex justify-between text-xs text-text-dim mt-1 font-mono">
              <span>%0</span><span>%25</span><span>%50</span><span>%75</span><span>%100</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: 'P25', value: stats.p25, accent: false },
              { label: 'Medyan', value: stats.p50, accent: true },
              { label: 'P75', value: stats.p75, accent: false },
              { label: 'Ortalama', value: stats.avg, accent: false },
            ].map(s => (
              <div key={s.label} className="bg-bg-white rounded-xl border border-border p-3 text-center">
                <div className="text-[10px] text-text-dim uppercase tracking-wide">{s.label}</div>
                <div className={`text-lg font-bold font-mono mt-0.5 ${s.accent ? 'text-accent' : 'text-text'}`}>
                  ₺{s.value.toLocaleString('tr-TR')}
                </div>
              </div>
            ))}
          </div>

          {/* Histogram */}
          <div className="bg-bg-white rounded-xl border border-border p-5">
            <h3 className="text-sm font-semibold text-text mb-3">Maaş Dağılımı</h3>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={histogram} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                <XAxis dataKey="label" tick={{ fill: '#999', fontSize: 9 }} axisLine={{ stroke: '#E5E5E5' }} tickLine={false} />
                <YAxis tick={{ fill: '#999', fontSize: 10 }} axisLine={{ stroke: '#E5E5E5' }} tickLine={false} />
                <Tooltip
                  contentStyle={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: '8px', fontSize: '12px' }}
                  formatter={(value: number) => [`${value} kişi`, 'Sayı']}
                />
                {userSalary > 0 && (
                  <ReferenceLine
                    x={histogram.find(b => b.hasUser)?.label}
                    stroke="#ef4444" strokeWidth={2} strokeDasharray="4 4"
                    label={{ value: 'Sen', fill: '#ef4444', fontSize: 11, position: 'top' }}
                  />
                )}
                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                  {histogram.map((entry, i) => (
                    <Cell key={i} fill={entry.hasUser ? '#ef4444' : '#6366f1'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <p className="source-text">Kaynak: önceki yazılımcı 2026 anketi · {stats.count.toLocaleString('tr-TR')} kayıt</p>
        </div>
      )}

      {calculated && stats && stats.count < 5 && (
        <div className="mt-6 text-center py-8 text-sm text-text-muted">
          Seçtiğiniz kriterlere uyan yalnızca {stats.count} kişi bulundu. Daha geniş filtreler deneyin.
        </div>
      )}
    </div>
  );
}
