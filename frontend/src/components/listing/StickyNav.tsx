import React, { useEffect, useState, useCallback } from 'react';
import styles from './StickyNav.module.css';
import { StarIcon } from '../common/Icons';

interface StickyNavProps {
  /** Ref to the hero gallery section — nav shows when this scrolls past the header */
  heroRef: React.RefObject<HTMLElement | null>;
  basePrice: number;
  currencySymbol: string;
  nights: number;
  rating: number;
  reviewCount: number;
  onReserveClick: () => void;
}

const SECTIONS = [
  { id: 'section-photos',    label: 'Photos' },
  { id: 'section-amenities', label: 'Amenities' },
  { id: 'section-reviews',   label: 'Reviews' },
  { id: 'section-location',  label: 'Location' },
];

export const StickyNav: React.FC<StickyNavProps> = ({
  heroRef,
  basePrice,
  currencySymbol,
  nights,
  rating,
  reviewCount,
  onReserveClick,
}) => {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('section-photos');

  // Show the sticky nav once the hero gallery scrolls out of view
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      setVisible(heroRef.current.getBoundingClientRect().bottom <= 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heroRef]);

  // Walk sections from bottom to top; first one past the scroll threshold is active
  const updateActiveSection = useCallback(() => {
    const OFFSET = 120;
    for (let i = SECTIONS.length - 1; i >= 0; i--) {
      const el = document.getElementById(SECTIONS[i].id);
      if (el && el.getBoundingClientRect().top <= OFFSET) {
        setActiveSection(SECTIONS[i].id);
        return;
      }
    }
    setActiveSection(SECTIONS[0].id);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, [updateActiveSection]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    // Offset by 84px to account for the sticky nav bar height
    const top = el.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const total = basePrice * nights;

  return (
    <nav
      className={`${styles.stickyNav} ${visible ? styles.visible : ''}`}
      aria-label="Listing section navigation"
    >
      <div className={styles.navInner}>
        <div className={styles.tabs} role="tablist">
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeSection === id}
              className={`${styles.tab} ${activeSection === id ? styles.active : ''}`}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className={styles.rightActions}>
          <div className={styles.compactPrice}>
            <div className={styles.compactPriceMain}>
              {currencySymbol}{total.toLocaleString()}{' '}
              <span className={styles.forNights}>for {nights} nights</span>
            </div>
            <div className={styles.compactRating}>
              <StarIcon size={11} filled color="#222222" />
              <span>{rating.toFixed(2)}</span>
              <span>·</span>
              <span>{reviewCount} reviews</span>
            </div>
          </div>
          <button
            type="button"
            className={styles.compactReserveBtn}
            onClick={onReserveClick}
            aria-label="Reserve this listing"
          >
            Reserve
          </button>
        </div>
      </div>
    </nav>
  );
};
