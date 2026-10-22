import Logo from './Logo';
import NavLinks from './navlinks';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo showEmblem />
      <NavLinks />
    </header>
  );
}
