import Link from 'next/link';
import styles from './Logo.module.css';

type LogoProps = {
  compact?: boolean;
  variant?: 'wordmark' | 'emblem';
  showEmblem?: boolean;
};

export default function Logo({ compact = false, variant = 'wordmark', showEmblem = false }: LogoProps) {
  const isEmblem = variant === 'emblem';
  const withEmblem = showEmblem && !isEmblem;
  const className = [
    styles.logo,
    compact && styles.compact,
    isEmblem && styles.emblem,
    withEmblem && styles.withEmblem,
  ].filter(Boolean).join(' ');

  return (
    <Link href="/" className={className} aria-label="La Café home">
      {withEmblem && (
        <img className={styles.badge} src="/la-cafe-logo.webp" width="1254" height="1254" alt="" />
      )}
      <img
        className={isEmblem ? undefined : styles.wordmark}
        src={isEmblem ? '/la-cafe-logo.webp' : '/la-cafe-wordmark-horizontal.webp'}
        width={isEmblem ? 1254 : 2172}
        height={isEmblem ? 1254 : 724}
        alt=""
      />
    </Link>
  );
}
