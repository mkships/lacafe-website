'use client';

import { useMemo, useState } from 'react';
import CategoryIcon from '../ui/CategoryIcon';
import DietaryMark from '../ui/DietaryMark';
import Footer from '../ui/Footer';
import MenuFilter from '../ui/MenuFilter';
import MenuItem from '../ui/MenuItem';
import Icon from '../ui/icons';
import { categories, menu, type CategoryId } from '../../lib/menu';

export default function MenuPage() {
  const [category, setCategory] = useState<CategoryId | 'all'>('all');
  const [search, setSearch] = useState('');
  const [highProtein, setHighProtein] = useState(false);
  const [chefsSpecial, setChefsSpecial] = useState(false);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return menu.filter(item => {
      const matchesCategory = category === 'all' || item.category === category;
      const matchesTag = (!highProtein && !chefsSpecial)
        || (highProtein && item.tag === 'High protein')
        || (chefsSpecial && item.tag === 'Chef’s special');
      const categoryName = categories.find(group => group.id === item.category)?.name;
      const searchableText = `${item.name} ${item.description} ${categoryName}`.toLowerCase();

      return matchesCategory && matchesTag && (!query || searchableText.includes(query));
    });
  }, [category, search, highProtein, chefsSpecial]);

  const groups = categories
    .map(group => ({ ...group, items: filtered.filter(item => item.category === group.id) }))
    .filter(group => group.items.length > 0);

  const reset = () => {
    setCategory('all');
    setSearch('');
    setHighProtein(false);
    setChefsSpecial(false);
  };

  return (
    <>
      <main id="main-content" tabIndex={-1}>
        <section id="menu" className="menu-section" aria-labelledby="menu-title">
          <div className="menu-intro">
            <h1 id="menu-title">The Menu<span>.</span></h1>
            <p>Savoury. Sweet. Simply satisfying.</p>
          </div>

          <div className="menu-layout">
            <MenuFilter
              category={category}
              search={search}
              highProtein={highProtein}
              chefsSpecial={chefsSpecial}
              onCategoryChange={setCategory}
              onSearchChange={setSearch}
              onHighProteinChange={setHighProtein}
              onChefsSpecialChange={setChefsSpecial}
            />

            <div className="menu-main">
              <p className="results-note" role="status">
                {filtered.length} {filtered.length === 1 ? 'item' : 'items'} to savour
                <span>All prices in INR</span>
              </p>

              <div className="diet-legend" role="group" aria-label="Dietary symbols">
                <span><DietaryMark diet="vegetarian" /> Vegetarian</span>
                <span><DietaryMark diet="eggetarian" /> Eggetarian</span>
                <span><DietaryMark diet="non-vegetarian" /> Non-vegetarian</span>
              </div>

              {groups.map(group => (
                <section
                  className="menu-group"
                  key={group.id}
                  aria-labelledby={`heading-${group.id}`}
                >
                  <div className="group-heading">
                    <div className="group-title">
                      <CategoryIcon category={group.id} />
                      <h2 id={`heading-${group.id}`}>{group.name}</h2>
                    </div>
                    <p>{group.subtitle}</p>
                  </div>
                  <div className="dish-grid">
                    {group.items.map(item => <MenuItem key={item.id} item={item} />)}
                  </div>
                </section>
              ))}

              {filtered.length === 0 && (
                <div className="empty-state">
                  <span aria-hidden="true">✧</span>
                  <h2>No bites found.</h2>
                  <p>Try a different search or explore the full menu.</p>
                  <button type="button" onClick={reset}>
                    Show everything <Icon name="arrow" size={17} />
                  </button>
                </div>
              )}

              <div className="menu-bottom-note">
                <Icon name="lightbulb" size={24} />
                <p>
                  A little something for every kind of craving.
                  <span>Serving details and estimated calories are shown on each card.</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
