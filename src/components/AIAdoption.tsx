import { aiTools } from '../data/salaries';

/* A clean, Economist-style stat block for AI adoption */

export default function AIAdoption() {
  const total = 67.8;

  return (
    <section className="max-w-[960px] mx-auto px-6 section" data-section="ai">
      <h2 className="text-2xl font-bold text-text tracking-tight mb-1">
        Yazılımcıların %67.8'i AI araçları kullanıyor
      </h2>
      <p className="text-sm text-text-secondary mb-6">
        Claude açık ara lider - katılımcıların yarısından fazlası kullanıyor
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Big number card */}
        <div className="bg-bg-white rounded-xl shadow-sm p-6">
          <div className="text-6xl font-black text-accent tracking-tight font-mono mb-2">
            %67.8
          </div>
          <p className="text-sm text-text-secondary">
            en az bir AI aracı kullanan yazılımcı oranı
          </p>
        </div>

        {/* Tool breakdown */}
        <div className="bg-bg-white rounded-xl shadow-sm p-6">
          <div className="space-y-3">
            {aiTools.map(tool => (
              <div key={tool.name}>
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-sm font-semibold text-text">{tool.name}</span>
                  <span className="font-mono text-sm text-text-secondary">
                    %{tool.pct}
                    <span className="text-text-muted ml-2">
                      ({tool.count.toLocaleString('tr-TR')})
                    </span>
                  </span>
                </div>
                <div className="h-2 bg-bg-chart rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${(tool.pct / total) * 100}%`,
                      backgroundColor: tool.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="source-text mt-4">
            Kaynak: önceki yazılımcı 2026 · Birden fazla araç seçilebilir
          </p>
        </div>
      </div>
    </section>
  );
}
