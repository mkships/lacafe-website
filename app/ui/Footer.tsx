import Logo from './Logo';
import OrderButton from './OrderButton';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Logo compact variant="emblem" />

        <div className={styles.orderLinks} role="group" aria-label="Order delivery">
          <OrderButton brand="swiggy" />
          <OrderButton brand="zomato" />
        </div>

        <OrderButton brand="whatsapp" className={styles.contact} />
      </div>
    </footer>
  );
}
