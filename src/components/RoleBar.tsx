import { roles, categories, type Category } from '../data/salaries';

/* Rules applied:
   #3: Bold title + descriptive subtitle
   #6: Max 4 colors (one per category)
   #7: Grey out non-essential, color only the story
   #15: Horizontal gridlines only
   #16: Direct labeling on bars
   #20: Title + subtitle + source
*/

// Sort by senior salary descending
const sorted = [...roles].sort((a, b) => b.sr - a.sr);
const maxSr = sorted[0].sr;

export default function RoleBar() {
  return (
    <section className="max-w-[960px] mx-auto px-6 section" data-section="roles">
      <h2 className="text-2xl font-bold text-text tracking-tight mb-1">
        CTO ve Architect en yüksek maaşı alıyor
      </h2>
      <p className="text-sm text-text-secondary mb-6">
        Senior medyan aylık net TRY — pozisyon bazında sıralama
      </p>

      <div className="bg-bg-white rounded-xl shadow-sm p-6">
        <div className="space-y-2">
          {sorted.map((role, i) => {
            const catInfo = categories[role.cat as Category];
            const pct = (role.sr / maxSr) * 100;
            return (
              <div key={role.name} className="group flex items-center gap-3">
                {/* Rank */}
                <span className="font-mono text-xs text-text-dim w-5 text-right">
                  {i + 1}
                </span>

                {/* Role name */}
                <span className="text-sm font-medium text-text-body w-[200px] shrink-0 truncate">
                  {role.name}
                </span>

                {/* Bar — Rule #7: color only for the data */}
                <div className="flex-1 h-7 bg-bg-chart rounded relative overflow-hidden">
                  <div
                    className="h-full rounded transition-all duration-500 ease-out flex items-center"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: catInfo.color,
                      opacity: 0.75,
                    }}
                  />
                  {/* Direct label — Rule #16 */}
                  <span
                    className="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-xs font-semibold"
                    style={{ color: catInfo.color }}
                  >
                    ₺{role.sr}K
                  </span>
                </div>

                {/* Participant count */}
                <span className="font-mono text-xs text-text-muted w-16 text-right">
                  {role.n.toLocaleString('tr-TR')}
                </span>
              </div>
            );
          })}
        </div>

        {/* Legend — minimal */}
        <div className="flex gap-4 mt-4 pt-3 border-t border-border">
          {Object.entries(categories).map(([key, cat]) => (
            <div key={key} className="flex items-center gap-1.5">
              <span
                className="w-2.5 h-2.5 rounded-sm"
                style={{ backgroundColor: cat.color }}
              />
              <span className="text-xs text-text-muted">{cat.label}</span>
            </div>
          ))}
        </div>

        <p className="source-text mt-3">
          Kaynak: önceki yazılımcı 2026 · Senior medyan, aylık net TRY (bin)
        </p>
      </div>
    </section>
  );
}
