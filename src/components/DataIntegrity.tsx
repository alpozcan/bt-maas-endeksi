import FadeIn from './FadeIn';

const ONCEKI_URL = 'https://github.com/nicatdursunlu/onceki-yazilimci-2026-anket-sonuclari';
const LEVELS_URL = 'https://www.levels.fyi/t/software-engineer/locations/turkey';

// onceki yazilimci: aylik net TRY -> yillik brut USD (kur: 37, brut carpan: 1.35)
const FX = 37;
const BRUT = 1.35;
function tryToUsd(monthlyNet: number): number {
  return Math.round((monthlyNet * BRUT * 12) / FX);
}

const comparison = [
  {
    metric: 'Katılımcı sayısı',
    onceki: '5.002',
    levels: '326',
    note: 'önceki yazılımcı 15 kat daha fazla katılımcıya sahip',
  },
  {
    metric: 'Kapsam',
    onceki: 'Aylık net maaş (TRY)',
    levels: 'Toplam ücret: maaş + hisse + bonus (USD)',
    note: 'Farklı ölçüm kapsamları',
  },
  {
    metric: 'Junior medyan',
    onceki: `₺65.500/ay = ~$${tryToUsd(65500).toLocaleString('tr-TR')}/yıl`,
    levels: '$27.900/yıl (P25)',
    note: 'Kur ve brüt/net farkı etkisi',
  },
  {
    metric: 'Mid medyan',
    onceki: `₺102.500/ay = ~$${tryToUsd(102500).toLocaleString('tr-TR')}/yıl`,
    levels: '$38.600/yıl (P50)',
    note: 'Levels.fyi verisi daha düşük',
  },
  {
    metric: 'Senior medyan',
    onceki: `₺172.500/ay = ~$${tryToUsd(172500).toLocaleString('tr-TR')}/yıl`,
    levels: '$52.050/yıl (P75)',
    note: 'En yakın eşleşme',
  },
];

const reasons = [
  {
    title: 'Kapsam farkı',
    detail: 'önceki yazılımcı yalnızca aylık net maaş sorarken, Levels.fyi toplam ücret (maaş + hisse senedi + yıllık bonus) raporlamaktadır. Türkiye\'deki yazılımcıların çoğunluğu hisse senedi almadığı için bu fark beklenenden düşük kalmaktadır.',
  },
  {
    title: 'Katılımcı profili',
    detail: 'Levels.fyi\'da beyan edenlerin önemli bir kısmı uluslararası teknoloji şirketlerinde (Google, Meta, Amazon) çalışan mühendislerden oluşmaktadır. Bu profil Türkiye ortalamasının üzerinde ücret almaktadır.',
  },
  {
    title: 'Kur dönüşümü',
    detail: 'TRY/USD dönüşümünde hangi tarihin kuru kullanıldığı sonucu önemli ölçüde değiştirmektedir. 2025 ortalaması olan 37,0 kuru baz alınmıştır.',
  },
  {
    title: 'Net ve brüt farkı',
    detail: 'önceki yazılımcı anketi net (vergi sonrası) maaş sorarken, Levels.fyi brüt (vergi öncesi) toplam ücret raporlamaktadır. Brüt/net dönüşümü için 1,35x çarpanı kullanılmıştır.',
  },
];

export default function DataIntegrity() {
  return (
    <FadeIn>
      <section className="max-w-[960px] mx-auto px-6 section" data-section="integrity">
        <h2 className="text-2xl font-bold text-text tracking-tight mb-1">
          Veri kaynakları arasındaki farklar
        </h2>
        <p className="text-sm text-text-secondary mb-6 leading-relaxed">
          Bu rapor iki ana veri kaynağını bir araya getirmektedir: 5.002 katılımcılı önceki yazılımcı anketi
          ve 326 Türkiye beyanı içeren Levels.fyi veritabanı. İki kaynak farklı metrikleri ölçtüğü için
          doğrudan karşılaştırma yaparken aşağıdaki farkların göz önünde bulundurulması gerekmektedir.
        </p>

        {/* Comparison Table */}
        <div className="bg-bg-white rounded-xl shadow-sm p-5 mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 text-xs text-text-muted font-medium w-36">Metrik</th>
                  <th className="text-left py-2 text-xs text-text-muted font-medium">
                    <a href={ONCEKI_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      önceki yazılımcı
                    </a>
                    {' '}2026
                  </th>
                  <th className="text-left py-2 text-xs text-text-muted font-medium">
                    <a href={LEVELS_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      Levels.fyi
                    </a>
                    {' '}2025
                  </th>
                  <th className="text-left py-2 text-xs text-text-muted font-medium w-48">Not</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(row => (
                  <tr key={row.metric} className="border-b border-border/50">
                    <td className="py-2.5 text-xs font-medium text-text">{row.metric}</td>
                    <td className="py-2.5 text-xs font-mono text-text-secondary">{row.onceki}</td>
                    <td className="py-2.5 text-xs font-mono text-text-secondary">{row.levels}</td>
                    <td className="py-2.5 text-xs text-text-dim">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Why different */}
        <div className="bg-bg-white rounded-xl shadow-sm p-5">
          <h3 className="text-sm font-semibold text-text mb-4">Farkların nedenleri</h3>
          <div className="space-y-3">
            {reasons.map(r => (
              <div key={r.title} className="border-l-2 border-accent/30 pl-4">
                <div className="text-sm font-medium text-text">{r.title}</div>
                <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>

          <p className="source-text mt-4">
            Kaynak:{' '}
            <a href={ONCEKI_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              önceki yazılımcı 2026
            </a>
            {' '}(5.002 katılımcı),{' '}
            <a href={LEVELS_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Levels.fyi
            </a>
            {' '}(326 Türkiye beyanı). Kur: $1 = ₺37,0 (2025 ortalaması).
          </p>
        </div>
      </section>
    </FadeIn>
  );
}
