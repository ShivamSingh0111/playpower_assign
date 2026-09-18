import React from 'react';
import styles from './Footer.module.css';
import { GlobeIcon } from '../common/Icons';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer} role="contentinfo">
      <div className={styles.footerInner}>
        <div className={styles.linksGrid}>
          <div>
            <div className={styles.colHeader}>Support</div>
            <ul className={styles.linkList}>
              <li>Help Centre</li>
              <li>AirCover</li>
              <li>Anti-discrimination</li>
              <li>Disability support</li>
              <li>Cancellation options</li>
            </ul>
          </div>

          <div>
            <div className={styles.colHeader}>Hosting</div>
            <ul className={styles.linkList}>
              <li>Airbnb your home</li>
              <li>AirCover for Hosts</li>
              <li>Hosting resources</li>
              <li>Community forum</li>
              <li>Hosting responsibly</li>
            </ul>
          </div>

          <div>
            <div className={styles.colHeader}>Airbnb</div>
            <ul className={styles.linkList}>
              <li>Newsroom</li>
              <li>New features</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Gift cards</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.legalLinks}>
            <span>© 2026 Airbnb, Inc.</span>
            <span>·</span>
            <span>Privacy</span>
            <span>·</span>
            <span>Terms</span>
            <span>·</span>
            <span>Sitemap</span>
            <span>·</span>
            <span>Company details</span>
          </div>

          <div className={styles.localization}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
              <GlobeIcon size={16} />
              <span>English (IN)</span>
            </div>
            <span style={{ cursor: 'pointer' }}>₹ INR</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
