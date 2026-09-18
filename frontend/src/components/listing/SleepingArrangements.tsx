import React from 'react';
import styles from './SleepingArrangements.module.css';

interface Arrangement {
  room: string;
  bedType: string;
  icon: string;
}

interface SleepingArrangementsProps {
  arrangements: Arrangement[];
}

export const SleepingArrangements: React.FC<SleepingArrangementsProps> = ({ arrangements }) => {
  return (
    <section className={styles.section} aria-label="Where you will sleep">
      <h3 className={styles.heading}>Where you'll sleep</h3>
      <div className={styles.cardsGrid}>
        {arrangements.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.8">
                <path d="M2 19h20M4 19v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M4 11V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
              </svg>
            </div>
            <div className={styles.roomTitle}>{item.room}</div>
            <div className={styles.bedType}>{item.bedType}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
