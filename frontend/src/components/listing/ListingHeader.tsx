import React, { useState } from 'react';
import styles from './ListingHeader.module.css';
import { StarIcon, ShareIcon, HeartIcon } from '../common/Icons';

interface ListingHeaderProps {
  title: string;
  rating: number;
  reviewCount: number;
  isSuperhost: boolean;
  city: string;
  region: string;
  country: string;
  onShareClick?: () => void;
}

export const ListingHeader: React.FC<ListingHeaderProps> = ({
  title,
  rating,
  reviewCount,
  isSuperhost,
  city,
  region,
  country,
  onShareClick
}) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <section className={styles.headerWrapper} aria-label="Listing title and key metadata">
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.metadataRow}>
        <div className={styles.leftMeta}>
          <span className={styles.rating}>
            <StarIcon size={14} filled color="#222222" />
            <span>{rating.toFixed(2)}</span>
          </span>
          <span className={styles.dot}>·</span>
          <span className={styles.reviewCount}>{reviewCount} reviews</span>
          {isSuperhost && (
            <>
              <span className={styles.dot}>·</span>
              <span className={styles.superhostBadge}>Superhost</span>
            </>
          )}
          <span className={styles.dot}>·</span>
          <span className={styles.locationLink}>
            {city}, {region}, {country}
          </span>
        </div>

        <div className={styles.actionsGroup}>
          <button
            type="button"
            className={styles.actionButton}
            onClick={onShareClick}
            aria-label="Share this listing"
          >
            <ShareIcon size={16} />
            <span>Share</span>
          </button>
          <button
            type="button"
            className={styles.actionButton}
            onClick={() => setIsSaved(!isSaved)}
            aria-label={isSaved ? 'Remove from saved' : 'Save this listing'}
          >
            <HeartIcon size={16} filled={isSaved} />
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
