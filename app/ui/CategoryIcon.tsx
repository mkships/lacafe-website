import type { CategoryId } from '../../lib/menu';
import BreakfastIcon from './BreakfastIcon';

type CategoryIconProps = {
  category: CategoryId;
  size?: number;
};

export default function CategoryIcon({ category, size = 28 }: CategoryIconProps) {
  if (category === 'breakfast') {
    return <BreakfastIcon size={size} />;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {category === 'bites' && (
        <>
          <path d="M19 5c-4-3-9-1-12 2s-5 8-2 12c3 4 9 3 12 0 2-2 1-4 3-6 2-3 2-6-1-8Z" />
          <path d="m19 16 6 6c2-1 4 0 4 2 0 1.5-1 2.5-2.5 2.5 0 1.5-1 2.5-2.5 2.5-2 0-3-2-2-4l-6-6" />
          <path d="M9 10c1-2 3-3 5-3" />
        </>
      )}

      {category === 'mains' && (
        <>
          <path d="M4 15h24c-1 6-6 11-12 11S5 21 4 15Z" />
          <path d="M3 15h26M12 28h8" />
          <path d="M10 5c-2 2 2 3 0 5M16 3c-2 2 2 4 0 6M22 5c-2 2 2 3 0 5" />
        </>
      )}

      {category === 'bakes' && (
        <>
          <path d="M7 17h18l-3 11H10L7 17Z" />
          <path d="M7 17c-3-2-2-7 2-7 0-4 5-6 7-3 3-3 8-1 7 3 4 0 5 5 2 7" />
          <circle cx="16" cy="4" r="2" />
          <path d="m12 20 1 5m7-5-1 5" />
        </>
      )}

      {category === 'drinks' && (
        <>
          <path d="M8 10h17l-2 18H10L8 10Z" />
          <path d="m17 20 4-16h6" />
          <path d="M9 17c4-3 8 3 15 0" />
          <path d="M7 12a4 4 0 1 1 4-4M7 4v4l3 2" />
        </>
      )}
    </svg>
  );
}
