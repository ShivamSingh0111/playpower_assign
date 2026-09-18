import React from 'react';
import styles from './HouseRules.module.css';

interface HouseRulesProps {
  rules: {
    checkIn: string;
    checkout: string;
    rulesList: string[];
    safetyList: string[];
    cancellationPolicy: string;
  };
}

export const HouseRules: React.FC<HouseRulesProps> = ({ rules }) => {
  return (
    <section className={styles.rulesSection} aria-label="Things to know">
      <h3 className={styles.heading}>Things to know</h3>

      <div className={styles.columnsGrid}>
        {/* House rules */}
        <div className={styles.column}>
          <div className={styles.colTitle}>House rules</div>
          <ul className={styles.ruleList}>
            <li>Check-in: {rules.checkIn}</li>
            <li>Checkout: {rules.checkout}</li>
            {rules.rulesList.map((rule, idx) => (
              <li key={idx}>{rule}</li>
            ))}
          </ul>
        </div>

        {/* Safety & property */}
        <div className={styles.column}>
          <div className={styles.colTitle}>Safety & property</div>
          <ul className={styles.ruleList}>
            {rules.safetyList.map((safety, idx) => (
              <li key={idx}>{safety}</li>
            ))}
          </ul>
        </div>

        {/* Cancellation policy */}
        <div className={styles.column}>
          <div className={styles.colTitle}>Cancellation policy</div>
          <p style={{ fontSize: 15, lineHeight: 1.45 }}>{rules.cancellationPolicy}</p>
          <span className={styles.showMoreLink}>Learn more about cancellation</span>
        </div>
      </div>
    </section>
  );
};
