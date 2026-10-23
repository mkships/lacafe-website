'use client';

import { useRef } from 'react';
import { categories, menu, type CategoryId } from '../../lib/menu';
import Icon from './icons';

type MenuFilterProps = {
  category: CategoryId | 'all';
  search: string;
  highProtein: boolean;
  chefsSpecial: boolean;
  onCategoryChange: (category: CategoryId | 'all') => void;
  onSearchChange: (search: string) => void;
  onHighProteinChange: (highProtein: boolean) => void;
  onChefsSpecialChange: (chefsSpecial: boolean) => void;
};

export default function MenuFilter({
  category,
  search,
  highProtein,
  chefsSpecial,
  onCategoryChange,
  onSearchChange,
  onHighProteinChange,
  onChefsSpecialChange,
}: MenuFilterProps) {
  const searchRef = useRef<HTMLInputElement>(null);

  const clearSearch = () => {
    onSearchChange('');
    searchRef.current?.focus();
  };

  return (
    <div className="menu-filters">
      <div className="search-box">
        <Icon name="search" size={20} />
        <input
          ref={searchRef}
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search the menu…"
          aria-label="Search menu"
        />
        {search && (
          <button
            type="button"
            onClick={clearSearch}
            aria-label="Clear search"
          >
            <Icon name="close" size={18} />
          </button>
        )}
      </div>

      <div className="category-nav" role="group" aria-label="Menu categories">
        <button
          type="button"
          className={category === 'all' ? 'category active' : 'category'}
          aria-pressed={category === 'all'}
          onClick={() => onCategoryChange('all')}
        >
          <span>Everything</span>
          <span className="category-count">{menu.length}</span>
        </button>

        {categories.map((item) => (
          <button
            key={item.id}
            type="button"
            className={category === item.id ? 'category active' : 'category'}
            aria-pressed={category === item.id}
            onClick={() => onCategoryChange(item.id)}
          >
            <span>{item.name}</span>
            <span className="category-count">
              {menu.filter((dish) => dish.category === item.id).length}
            </span>
          </button>
        ))}
      </div>

      <div className="tag-filters" role="group" aria-label="Menu highlights">
        <label className="tag-filter tag-filter-protein">
          <input
            type="checkbox"
            checked={highProtein}
            onChange={(event) => onHighProteinChange(event.target.checked)}
          />
          <span>High protein</span>
        </label>
        <label className="tag-filter">
          <input
            type="checkbox"
            checked={chefsSpecial}
            onChange={(event) => onChefsSpecialChange(event.target.checked)}
          />
          <span>Chef’s special</span>
        </label>
      </div>
    </div>
  );
}
