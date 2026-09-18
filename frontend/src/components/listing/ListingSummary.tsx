import React from 'react';
import styles from './ListingSummary.module.css';
import { Host, ReviewScore } from '../../types/listing';
import { StarIcon, LaurelWreathIcon } from '../common/Icons';

interface ListingSummaryProps {
  propertyType: string;
  stats: {
    guests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
  };
  host: Host;
  overallRating: number;
  reviewCount: number;
  isGuestFavorite: boolean;
  scores: ReviewScore;
}

export const ListingSummary: React.FC<ListingSummaryProps> = ({
  propertyType,
  stats,
  host,
  overallRating,
  reviewCount,
  isGuestFavorite
}) => {
  return (
    <section className={styles.summaryContainer} aria-label="Property summary">
      <div className={styles.propertyHeader}>
        <h2 className={styles.propertyType}>{propertyType}</h2>
        <div className={styles.propertySpecs}>
          <span>{stats.guests} guests</span>
          <span> · </span>
          <span>{stats.bedrooms} bedroom</span>
          <span> · </span>
          <span>{stats.beds} bed</span>
          <span> · </span>
          <span>{stats.bathrooms} bathroom{stats.bathrooms > 1 ? 's' : ''}</span>
        </div>
      </div>

      {/* Guest Favorite Badge Banner */}
      {isGuestFavorite && (
        <div className={styles.guestFavoriteCard}>
          <div className={styles.guestFavoriteLeft}>
            <div className={styles.wreathWrapper}>
              <LaurelWreathIcon size={36} color="#222222" />
            </div>
            <div>
              <div className={styles.favoriteTitle}>Guest favourite</div>
              <div className={styles.favoriteSubtitle}>
                One of the most loved homes on Airbnb, according to guests
              </div>
            </div>
          </div>

          <div className={styles.guestFavoriteRight}>
            <div className={styles.scoreBlock}>
              <div className={styles.scoreNumber}>{overallRating.toFixed(2)}</div>
              <div className={styles.starsRow}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} size={10} filled color="#222222" />
                ))}
              </div>
            </div>

            <div className={styles.badgeDivider} />

            <div className={styles.reviewBlock}>
              <div className={styles.scoreNumber}>{reviewCount}</div>
              <div className={styles.reviewLabel}>Reviews</div>
            </div>
          </div>
        </div>
      )}

      {/* Hosted by Host Info Row */}
      <div className={styles.hostRow}>
        <img 
          src={host.avatar || "/mirashya-logo.svg"} 
          alt={host.name} 
          className={styles.hostAvatarImage}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/mirashya-logo.svg';
          }}
        />
        <div className={styles.hostText}>
          <div className={styles.hostName}>Hosted by {host.name}</div>
          <div className={styles.hostSub}>{host.yearsHosting} years hosting</div>
        </div>
      </div>
    </section>
  );
};
