import React from 'react';
import styles from './HostSection.module.css';
import { Host } from '../../types/listing';

interface HostSectionProps {
  host: Host;
}

export const HostSection: React.FC<HostSectionProps> = ({ host }) => {
  return (
    <section className={styles.hostSection} aria-label="Host profile and contact">
      <div className={styles.hostHeader}>
        <img src={host.avatar} alt={host.name} className={styles.avatar} />
        <div className={styles.hostTitleGroup}>
          <h3 className={styles.hostName}>Hosted by {host.name}</h3>
          <div className={styles.hostMeta}>{host.badgeText}</div>
        </div>
      </div>

      <div className={styles.hostStatsRow}>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Response rate</span>
          <span className={styles.statValue}>{host.responseRate}</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Responds</span>
          <span className={styles.statValue}>{host.responseTime}</span>
        </div>
        {host.coHosts && host.coHosts.length > 0 && (
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Co-hosts</span>
            <span className={styles.statValue}>{host.coHosts.join(', ')}</span>
          </div>
        )}
      </div>

      <p className={styles.bio}>{host.bio}</p>

      <button type="button" className={styles.contactBtn}>
        Contact Host
      </button>
    </section>
  );
};
