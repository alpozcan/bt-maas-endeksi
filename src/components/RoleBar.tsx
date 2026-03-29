import { roles, categories, type Category } from '../data/salaries';
import { useHighlight } from './HighlightContext';

const sorted = [...roles].sort((a, b) => b.sr - a.sr);
const maxSr = sorted[0].sr;

export default function RoleBar() {
  const { isFiltered, isHighlighted, setActiveCategory } = useHighlight();

  const visible = sorted.filter(r => isFiltered(r.cat as Category));

  return (
    <section className="max-w-[960px] mx-auto px-6 section" data-section="roles">
      <h2 className="text-2xl font-bold text-text tracking-tight mb-1">
        CTO ve Architect en yüksek maaşı alıyor
      </h2>
      <p className="text-sm text-text-secondary mb-6">
        Senior medyan aylık net TRY — pozisyon bazında sıralama
      </p>

      <div className="bg-bg-white rounded-xl shadow-sm p-5">
        <div className="space-y-2">
          {visible.map((role, i) => {
            const catInfo = categories[role.cat as Category];
            const pct = (role.sr / maxSr) * 100;
            const highlighted = isHighlighted(role.cat as Category);
            return (
              <div
                key={role.name}
                className="group flex items-center gap-3 transition-opacity duration-200 cursor-pointer"
                style={{ opacity: highlighted ? 1 : 0.2 }}
                onMouseEnter={() => setActiveCategory(role.cat as Category)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <span className="font-mono text-xs text-text-dim w-5 text-right">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-text-body w-[200px] shrink-0 truncate">
                  {role.name}
                </span>
                <div className="flex-1 h-7 bg-bg-chart rounded relative overflow-hidden">
                  <div
                    className="h-full rounded transition-all duration-500 ease-out"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: catInfo.color,
                      opacity: highlighted ? 0.8 : 0.25,
                    }}
                  />
                  {/* Direct label on bar */}
                  <span
                    className="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-xs font-semibold"
                    style={{ color: catInfo.color }}
                  >
                    ₺{role.sr}K
                  </span>
                </div>
                <span className="font-mono text-xs text-text-muted w-16 text-right">
                  {role.n.toLocaleString('tr-TR')}
                </span>
              </div>
            );
          })}
        </div>

        <p className="source-text mt-3">
          Kaynak: önceki yazılımcı 2026 · Senior medyan, aylık net TRY (bin)
        </p>
      </div>
    </section>
  );
}
