import { categories, type Category } from '../data/salaries';
import { useHighlight } from './HighlightContext';

export default function CategoryFilter() {
  const { filterCategories, toggleFilter, activeCategory, setActiveCategory } = useHighlight();

  return (
    <div>
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs text-text-muted font-medium mr-1">Filtrele:</span>
        {(Object.entries(categories) as [Category, { label: string; color: string }][]).map(([key, cat]) => {
          const active = filterCategories.has(key);
          const highlighted = activeCategory === null || activeCategory === key;
          return (
            <button
              key={key}
              onClick={() => toggleFilter(key)}
              onMouseEnter={() => setActiveCategory(key)}
              onMouseLeave={() => setActiveCategory(null)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer select-none"
              style={{
                backgroundColor: active ? `${cat.color}18` : 'transparent',
                color: active && highlighted ? cat.color : '#999',
                border: `1.5px solid ${active ? cat.color : '#E5E5E5'}`,
                opacity: highlighted ? 1 : 0.35,
                transform: highlighted && activeCategory === key ? 'scale(1.05)' : 'scale(1)',
              }}
              aria-pressed={active}
              aria-label={`${active ? 'Gizle' : 'Göster'}: ${cat.label}`}
            >
              <span
                className="w-2 h-2 rounded-full transition-colors"
                style={{ backgroundColor: active ? cat.color : '#ccc' }}
              />
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
