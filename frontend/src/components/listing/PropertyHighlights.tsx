import React from 'react';
import styles from './PropertyHighlights.module.css';
import { AmenityIcon } from '../common/Icons';

interface Highlight {
  icon: string;
  title: string;
  description: string;
}

interface PropertyHighlightsProps {
  highlights: Highlight[];
}

export const PropertyHighlights: React.FC<PropertyHighlightsProps> = ({ highlights }) => {
  return (
    <section className={styles.highlightsContainer} aria-label="Key property highlights">
      {highlights.map((item, index) => (
        <div key={index} className={styles.highlightItem}>
          <div className={styles.iconWrapper}>
            <AmenityIcon type={item.icon} size={24} color="#222222" />
          </div>
          <div className={styles.textWrapper}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
