import { cafeLinks } from '../../lib/contact';
import styles from './OrderButton.module.css';

type OrderButtonProps = {
  brand: keyof typeof cafeLinks;
  className?: string;
};

const labels = {
  swiggy: 'Order on Swiggy',
  zomato: 'Order on Zomato',
  whatsapp: 'Order on WhatsApp',
};

const logos = {
  swiggy: { src: '/brands/swiggy-logo.svg', width: 78, height: 24 },
  zomato: { src: '/brands/zomato.svg', width: 56, height: 14 },
  whatsapp: { src: '/brands/whatsapp-logo.svg', width: 103, height: 24 },
};

export default function OrderButton({ brand, className = '' }: OrderButtonProps) {
  const href = cafeLinks[brand];
  const label = labels[brand];
  const buttonClass = `${styles.button} ${className}`;
  const content = (
    <>
      <span>Order on</span>
      <img className={styles.brandLogo} {...logos[brand]} alt="" />
    </>
  );

  return href ? (
    <a className={buttonClass} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {content}
    </a>
  ) : (
    <button className={buttonClass} type="button" disabled aria-label={label}>
      {content}
    </button>
  );
}
