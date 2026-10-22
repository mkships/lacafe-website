import Link from 'next/link';
import OrderButton from './OrderButton';
import WallOfLove from './WallOfLove';
import styles from './HomeHero.module.css';

export default function HomeHero() {
  return (
    <div className={styles.home}>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heading}>
          <p className={styles.eyebrow}>BOWLS · BITES · BAKES</p>
          <h1 id="hero-title" className={styles.title}>
            Gourmet food.<br />
            <span>Mindfully made.</span>
          </h1>
        </div>

        <div className={styles.art}>
          <img
            src="/la-cafe-logo.webp"
            alt="La Café — Bowls, Bites, Bakes"
            width="1254"
            height="1254"
            fetchPriority="high"
          />
        </div>

        <div className={styles.story}>
          <p className={styles.intro}>
            We believe eating well should be a pleasure. Our cloud kitchen brings
            gourmet flavour to everyday cravings, whether you’re watching your
            calories, on a cut, or simply here for a good meal.
          </p>
          <p className={styles.description}>
            We use seed and olive oils thoughtfully, and air-fry or stir-fry our
            chicken to suit the dish. It’s about keeping the flavour, with
            calories in mind.
          </p>
          <p className={styles.calorieNote}>
            Estimated calories and serving sizes on every menu item help you
            choose what fits your day.
          </p>
          <Link href="/menu" className={styles.menuLink}>
            Explore the menu <span aria-hidden="true">→</span>
          </Link>
        </div>

      </section>

      <WallOfLove />

      <section className={styles.order} aria-labelledby="order-title">
        <div>
          <h2 id="order-title">Good food, delivered.</h2>
          <p>Order on Swiggy or Zomato, or message us on WhatsApp.</p>
        </div>
        <div className={styles.actions} role="group" aria-label="Order from La Café">
          <OrderButton brand="swiggy" />
          <OrderButton brand="zomato" />
          <OrderButton brand="whatsapp" label="Order on WhatsApp" />
        </div>
      </section>
    </div>
  );
}
