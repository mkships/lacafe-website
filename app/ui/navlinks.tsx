'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navlinks.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
];

export default function NavLinks() {
  const pathname = usePathname();
  const currentPath = pathname.replace(/\/+$/, '') || '/';

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={styles.link}
          aria-current={currentPath === link.href ? 'page' : undefined}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
