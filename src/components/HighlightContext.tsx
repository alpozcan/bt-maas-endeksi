import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Category } from '../data/salaries';

interface HighlightState {
  activeCategory: Category | null;
  setActiveCategory: (cat: Category | null) => void;
  filterCategories: Set<Category>;
  toggleFilter: (cat: Category) => void;
  isFiltered: (cat: Category) => boolean;
  isHighlighted: (cat: Category) => boolean;
}

const HighlightContext = createContext<HighlightState>({
  activeCategory: null,
  setActiveCategory: () => {},
  filterCategories: new Set(),
  toggleFilter: () => {},
  isFiltered: () => true,
  isHighlighted: () => true,
});

export function HighlightProvider({ children }: { children: ReactNode }) {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [filterCategories, setFilterCategories] = useState<Set<Category>>(
    new Set(['dev', 'data', 'infra', 'mgmt'])
  );

  const toggleFilter = (cat: Category) => {
    setFilterCategories(prev => {
      const next = new Set(prev);
      if (next.has(cat)) {
        if (next.size > 1) next.delete(cat); // Keep at least one
      } else {
        next.add(cat);
      }
      return next;
    });
  };

  const isFiltered = (cat: Category) => filterCategories.has(cat);

  const isHighlighted = (cat: Category) => {
    if (activeCategory === null) return true;
    return activeCategory === cat;
  };

  return (
    <HighlightContext.Provider value={{
      activeCategory, setActiveCategory,
      filterCategories, toggleFilter,
      isFiltered, isHighlighted,
    }}>
      {children}
    </HighlightContext.Provider>
  );
}

export function useHighlight() {
  return useContext(HighlightContext);
}
