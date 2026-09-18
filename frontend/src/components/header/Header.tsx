import React, { useState } from 'react';
import styles from './Header.module.css';
import { SearchIcon, GlobeIcon, MenuIcon } from '../common/Icons';

interface HeaderProps {
  onLogoClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.headerContainer} role="banner">
      <div className={styles.headerInner}>
        {/* Logo */}
        <div
          className={styles.logoArea}
          onClick={onLogoClick}
          role="button"
          tabIndex={0}
          aria-label="Airbnb Home"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onLogoClick?.();
          }}
        >
          <img
            src="/airbnb-logo.png"
            alt="Airbnb Logo"
            className={styles.logoImg}
          />
          <span className={styles.logoText}>airbnb</span>
        </div>

        {/* Search Pill */}
        <div className={styles.searchPill} role="search" tabIndex={0} aria-label="Search destinations, dates, and guests">
          <div className={styles.cabinIconWrapper}>
            <img
              src="/cabin-icon.png"
              alt="Cabin"
              className={styles.cabinIconImg}
            />
          </div>
          <span className={styles.searchItem}>Anywhere</span>
          <span className={styles.searchDivider} />
          <span className={styles.searchItem}>Anytime</span>
          <span className={styles.searchDivider} />
          <span className={styles.searchItemFaint}>Add guests</span>
          <button className={styles.searchButton} aria-label="Search" type="button">
            <SearchIcon size={12} color="#FFFFFF" />
          </button>
        </div>

        {/* Right Navigation */}
        <div className={styles.rightArea}>
          <button className={styles.hostLink} type="button">
            Become a host
          </button>
          <button className={styles.globeButton} type="button" aria-label="Choose language and currency">
            <GlobeIcon size={18} color="#222222" />
          </button>
          <button
            className={styles.menuButton}
            type="button"
            aria-label="Navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon size={16} color="#222222" />
          </button>
        </div>
      </div>
    </header>
  );
};

