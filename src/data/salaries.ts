export const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] as const;

export const trend = {
  junior:   [3000, 3500, 4500, 5500, 8500, 17500, 34500, 49500, 65500],
  mid:      [4500, 5500, 6500, 8500, 13500, 26500, 50500, 74500, 102500],
  senior:   [7000, 9000, 10500, 13500, 21500, 42500, 82500, 127500, 172500],
  minWage:  [2029, 2324, 2943, 3577, 5500, 11402, 17002, 22104, 25000],
};

export type Category = 'dev' | 'data' | 'infra' | 'mgmt';

export const categories: Record<Category, { label: string; color: string }> = {
  dev:  { label: 'Geliştirme', color: '#a78bfa' },
  data: { label: 'Veri & YZ', color: '#34d399' },
  infra:{ label: 'Altyapı', color: '#fbbf24' },
  mgmt: { label: 'Yönetim', color: '#f87171' },
};

export interface Role {
  name: string;
  jr: number;   // ₺K monthly net
  mid: number;
  sr: number;
  n: number;    // participant count
  cat: Category;
}

export const roles: Role[] = [
  { name: 'Software Architect', jr: 100, mid: 155, sr: 230, n: 143, cat: 'mgmt' },
  { name: 'Team / Tech Lead',   jr: 90,  mid: 140, sr: 210, n: 385, cat: 'mgmt' },
  { name: 'CTO',                jr: 130, mid: 200, sr: 280, n: 42,  cat: 'mgmt' },
  { name: 'AI Engineer',        jr: 75,  mid: 130, sr: 200, n: 87,  cat: 'data' },
  { name: 'Veri Bilimci',       jr: 55,  mid: 95,  sr: 160, n: 72,  cat: 'data' },
  { name: 'ML Mühendisi',       jr: 70,  mid: 120, sr: 185, n: 58,  cat: 'data' },
  { name: 'DevOps Mühendisi',   jr: 65,  mid: 120, sr: 185, n: 104, cat: 'infra' },
  { name: 'Cloud Mühendisi',    jr: 60,  mid: 115, sr: 178, n: 68,  cat: 'infra' },
  { name: 'SRE',                jr: 62,  mid: 112, sr: 170, n: 45,  cat: 'infra' },
  { name: 'Siber Güvenlik',     jr: 58,  mid: 108, sr: 170, n: 52,  cat: 'infra' },
  { name: 'Backend Geliştirici',jr: 62,  mid: 110, sr: 180, n: 1003,cat: 'dev' },
  { name: 'Full Stack Geliştirici', jr: 58, mid: 102, sr: 172, n: 1229, cat: 'dev' },
  { name: 'Frontend Geliştirici',jr: 52,  mid: 90,  sr: 145, n: 395, cat: 'dev' },
  { name: 'Mobil Geliştirici (iOS)', jr: 60, mid: 108, sr: 175, n: 129, cat: 'dev' },
  { name: 'Mobil Geliştirici (Android)', jr: 55, mid: 100, sr: 165, n: 139, cat: 'dev' },
  { name: 'QA Mühendisi',       jr: 45,  mid: 78,  sr: 130, n: 89,  cat: 'dev' },
  { name: 'Embedded Geliştirici', jr: 50, mid: 90,  sr: 150, n: 34,  cat: 'dev' },
  { name: 'Oyun Geliştirici',  jr: 40,  mid: 72,  sr: 120, n: 37,  cat: 'dev' },
  { name: 'Veri Analisti',      jr: 42,  mid: 75,  sr: 125, n: 55,  cat: 'data' },
  { name: 'DBA',               jr: 48,  mid: 88,  sr: 145, n: 28,  cat: 'infra' },
  { name: 'Ürün Yöneticisi',   jr: 55,  mid: 100, sr: 168, n: 95,  cat: 'mgmt' },
  { name: 'Ürün Sahibi',       jr: 50,  mid: 92,  sr: 155, n: 63,  cat: 'mgmt' },
  { name: 'UX/UI Tasarımcı',   jr: 38,  mid: 68,  sr: 115, n: 47,  cat: 'dev' },
  { name: 'Scrum Master',      jr: 45,  mid: 82,  sr: 140, n: 31,  cat: 'mgmt' },
  { name: 'İş Analisti',       jr: 42,  mid: 76,  sr: 128, n: 41,  cat: 'mgmt' },
  { name: 'Ağ Mühendisi',      jr: 45,  mid: 82,  sr: 138, n: 22,  cat: 'infra' },
];

export const aiTools = [
  { name: 'Claude',   pct: 55.4, count: 2770, color: '#a78bfa' },
  { name: 'Gemini',   pct: 31.7, count: 1588, color: '#34d399' },
  { name: 'Codex',    pct: 19.1, count: 956,  color: '#fbbf24' },
  { name: 'DeepSeek', pct: 8.2,  count: 410,  color: '#f87171' },
];

export const cities = [
  { name: 'İstanbul', pct: 54.5, count: 2727 },
  { name: 'Ankara',   pct: 17.7, count: 886 },
  { name: 'İzmir',    pct: 7.6,  count: 381 },
  { name: 'Kocaeli',  pct: 3.6,  count: 181 },
  { name: 'Antalya',  pct: 2.3,  count: 116 },
];

export const companyTypes = [
  { name: 'Şans Oyunları ve Bahis', median: 102500, count: 29,  color: '#ef4444' },
  { name: 'Savunma Sanayii',        median: 92500,  count: 116, color: '#6366f1' },
  { name: 'Banka',                  median: 92500,  count: 275, color: '#6366f1' },
  { name: 'Sigorta',                median: 92500,  count: 68,  color: '#6366f1' },
  { name: 'E-Ticaret',              median: 82500,  count: 201, color: '#10b981' },
  { name: 'Kurumsal',               median: 77500,  count: 450, color: '#10b981' },
  { name: 'Startup',                median: 70500,  count: 249, color: '#f59e0b' },
  { name: 'Yazılım Evi',            median: 68000,  count: 322, color: '#f59e0b' },
  { name: 'Dijital Ajans',          median: 55500,  count: 45,  color: '#f59e0b' },
];

export const kpis = [
  { label: 'Medyan Maaş (Mid)', value: 102500, prefix: '₺', color: '#a78bfa' },
  { label: 'Katılımcı',         value: 5002,   prefix: '',  color: '#34d399' },
  { label: 'AI Araç Kullanımı', value: 68,     suffix: '%', color: '#fbbf24' },
  { label: 'Senior Medyan',     value: 172500, prefix: '₺', color: '#f87171' },
];
