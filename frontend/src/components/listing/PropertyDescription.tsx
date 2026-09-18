import React, { useState } from 'react';
import styles from './PropertyDescription.module.css';
import { ChevronRightIcon } from '../common/Icons';

interface PropertyDescriptionProps {
  description: string;
  spaceDescription: string;
  guestAccess: string;
}

export const PropertyDescription: React.FC<PropertyDescriptionProps> = ({
  description,
  spaceDescription,
  guestAccess
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className={styles.descriptionSection} aria-label="About this space">
      <div className={styles.textBlock}>
        <p>{description}</p>

        {isExpanded && (
          <>
            <div className={styles.spaceSubtitle}>The space</div>
            <p>{spaceDescription}</p>

            <div className={styles.spaceSubtitle}>Guest access</div>
            <p>{guestAccess}</p>
          </>
        )}
      </div>

      <button
        type="button"
        className={styles.showMoreBtn}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <span>{isExpanded ? 'Show less' : 'Show more'}</span>
        <ChevronRightIcon size={12} />
      </button>
    </section>
  );
};
