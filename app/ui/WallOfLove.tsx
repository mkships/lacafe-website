'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { reviews } from '../../lib/reviews';
import styles from './WallOfLove.module.css';

const ROTATION_MS = 8000;

export default function WallOfLove() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => {
      setReducedMotion(motion.matches);
      if (motion.matches) setPlaying(false);
    };
    const updateVisibility = () => setPageVisible(!document.hidden);
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 },
    );

    updateMotion();
    updateVisibility();
    motion.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      motion.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  const rotating = playing && !hovered && !focused && inView && pageVisible && !reducedMotion;

  useEffect(() => {
    if (!rotating) return;
    const timer = window.setInterval(() => {
      setActive(index => (index + 1) % reviews.length);
    }, ROTATION_MS);
    return () => window.clearInterval(timer);
  }, [rotating]);

  const select = (index: number) => {
    setPlaying(false);
    setActive((index + reviews.length) % reviews.length);
  };

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="love-title"
      aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={event => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
      }}
      onKeyDown={event => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          select(active + (event.key === 'ArrowRight' ? 1 : -1));
        }
      }}
    >
      <div className={styles.heading}>
        <h2 id="love-title">Wall of love <span aria-hidden="true">♡</span></h2>
        <div className={styles.controls} role="group" aria-label="Review controls">
          <button type="button" className={styles.control} onClick={() => select(active - 1)} aria-label="Previous review">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="m14 6-6 6 6 6" /></svg>
          </button>
          <button type="button" className={styles.control} onClick={() => select(active + 1)} aria-label="Next review">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="m10 6 6 6-6 6" /></svg>
          </button>
        </div>
      </div>

      <div
        className={styles.viewport}
        onTouchStart={event => {
          const touch = event.touches[0];
          touchStart.current = { x: touch.clientX, y: touch.clientY };
        }}
        onTouchEnd={event => {
          if (!touchStart.current) return;
          const touch = event.changedTouches[0];
          const dx = touch.clientX - touchStart.current.x;
          const dy = touch.clientY - touchStart.current.y;
          touchStart.current = null;
          if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) select(active + (dx < 0 ? 1 : -1));
        }}
        onTouchCancel={() => { touchStart.current = null; }}
      >
        {reviews.map((review, index) => {
          const position = (index - active + reviews.length) % reviews.length;
          const offset = position > 2 ? position - reviews.length : position;
          const isActive = index === active;

          return (
            <figure
              key={review.name}
              className={`${styles.card} ${isActive ? styles.active : ''} ${offset === 2 ? styles.hidden : ''}`}
              style={{ '--offset': offset } as CSSProperties}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${reviews.length}`}
              aria-hidden={!isActive}
              data-active={isActive}
            >
              <blockquote><p>“{review.quote}”</p></blockquote>
              <figcaption>
                <span className={styles.avatar} aria-hidden="true">{review.name[0]}</span>
                <span>{review.name}</span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className={styles.pagination}>
        <div className={styles.dots} role="group" aria-label="Choose a review">
          {reviews.map((review, index) => (
            <button
              key={review.name}
              type="button"
              className={styles.dot}
              aria-label={`Show ${review.name}’s review`}
              aria-current={index === active ? 'true' : undefined}
              onClick={() => select(index)}
            ><span /></button>
          ))}
        </div>
        <button
          type="button"
          className={styles.control}
          aria-label={playing ? 'Pause review rotation' : 'Play review rotation'}
          disabled={reducedMotion}
          onClick={() => setPlaying(value => !value)}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            {playing ? <><rect x="7" y="5" width="3" height="14" rx="1" /><rect x="14" y="5" width="3" height="14" rx="1" /></> : <path d="m8 5 11 7-11 7Z" />}
          </svg>
        </button>
        <span className={styles.status} aria-live={rotating ? 'off' : 'polite'} aria-atomic="true">
          Review {active + 1} of {reviews.length}, from {reviews[active].name}
        </span>
      </div>
    </section>
  );
}
