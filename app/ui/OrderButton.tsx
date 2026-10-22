import { cafeLinks } from '../../lib/contact';
import styles from './OrderButton.module.css';

type OrderButtonProps = {
  brand: keyof typeof cafeLinks;
  className?: string;
  label?: string;
};

const labels = {
  swiggy: 'Order on Swiggy',
  zomato: 'Order on Zomato',
  whatsapp: 'Contact us',
};

export default function OrderButton({ brand, className = '', label = labels[brand] }: OrderButtonProps) {
  const href = cafeLinks[brand];
  const buttonClass = `${styles.button} ${className}`;
  const accessibleLabel = brand === 'whatsapp' && label === labels.whatsapp ? 'Contact us on WhatsApp' : label;
  const content = brand === 'zomato' ? (
    <>
      <span>Order on</span>
      <img className={styles.zomato} src="/brands/zomato.svg" alt="" width="56" height="14" />
    </>
  ) : (
    <>
      <img className={styles.brandIcon} src={`/brands/${brand}.svg`} alt="" width="20" height="20" />
      <span>{label}</span>
    </>
  );

  return href ? (
    <a className={buttonClass} href={href} target="_blank" rel="noopener noreferrer" aria-label={accessibleLabel}>
      {content}
    </a>
  ) : (
    <button className={buttonClass} type="button" disabled aria-label={accessibleLabel}>
      {content}
    </button>
  );
}
