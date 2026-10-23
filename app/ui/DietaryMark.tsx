import type { DietaryType } from '../../lib/menu';
import styles from './DietaryMark.module.css';

const labels: Record<DietaryType, string> = {
  vegetarian: 'Vegetarian',
  eggetarian: 'Eggetarian — contains egg, no meat',
  'non-vegetarian': 'Non-vegetarian',
};

const dietStyles: Record<DietaryType, string> = {
  vegetarian: styles.vegetarian,
  eggetarian: styles.eggetarian,
  'non-vegetarian': styles.nonVegetarian,
};

export default function DietaryMark({ diet }: { diet: DietaryType }) {
  return (
    <span
      className={`${styles.mark} ${dietStyles[diet]}`}
      role="img"
      aria-label={labels[diet]}
      title={labels[diet]}
    >
      <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true">
        <rect x="1" y="1" width="18" height="18" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {diet === 'non-vegetarian'
          ? <path d="M10 4.5 16 15H4Z" fill="currentColor" />
          : <circle cx="10" cy="10" r="5" fill="currentColor" />}
      </svg>
    </span>
  );
}
