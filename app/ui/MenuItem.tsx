import type { MenuItem as MenuItemData } from '../../lib/menu';
import SparklesIcon from './SparklesIcon';
import DietaryMark from './DietaryMark';
import styles from './MenuItem.module.css';

type MenuItemProps = {
  item: MenuItemData;
};

export default function MenuItem({ item }: MenuItemProps) {
  const titleId = `menu-item-${item.id}`;
  const tag = item.tag?.toLowerCase().replace('’', "'");
  const badge = tag === 'high protein'
    ? 'High Protein'
    : tag === "chef's special"
      ? "Chef’s Special"
      : null;
  const serving = item.portion.match(/serves\s+\d+/i)?.[0]
    .replace(/^serves/i, 'Serves') ?? item.portion.split(' · ')[0];

  return (
    <article className={styles.card} aria-labelledby={titleId}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h3 id={titleId} className={styles.name}>
            <span className={styles.titleDiet}><DietaryMark diet={item.diet} /></span>
            <span>{item.name}</span>
          </h3>
          {badge && (
            <span className={`${styles.badge} ${tag === 'high protein' ? styles.protein : ''}`}>
              <SparklesIcon />
              {badge}
            </span>
          )}
        </div>

        <p className={styles.description}>{item.description}</p>
        <p className={styles.price}>₹{item.price}</p>

        <div className={styles.details}>
          <span className={styles.detailPill}>Est. {item.calories} kcal</span>
          <span className={styles.detailPill} title={item.portion}>{serving}</span>
        </div>
      </div>

      {item.image ? (
        <img
          className={styles.photo}
          src={item.image}
          alt={item.name}
          width="480"
          height="480"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div
          className={styles.imagePlaceholder}
          role="img"
          aria-label={`Image placeholder for ${item.name}`}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 16-5-5-7 7-3-3-3 3" />
          </svg>
          <span>Dish photo</span>
        </div>
      )}
    </article>
  );
}
