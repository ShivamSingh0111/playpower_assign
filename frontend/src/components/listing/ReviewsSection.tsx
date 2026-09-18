import React from 'react';
import styles from './ReviewsSection.module.css';
import { Review, ReviewScore } from '../../types/listing';

interface ReviewsSectionProps {
  overallRating: number;
  reviewCount: number;
  scores: ReviewScore;
  reviews: Review[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  overallRating,
  reviewCount,
  scores,
  reviews
}) => {
  return (
    <section className={styles.reviewsContainer} aria-label="Guest reviews and ratings">
      <div className={styles.heroRatingArea}>
        <div className={styles.wreathRatingRow}>
          {/* Left Laurel Branch */}
          <svg className={styles.laurelBranch} width="64" height="96" viewBox="0 0 50 80" fill="none" stroke="#222222" strokeWidth="2.5">
            <path d="M40 75C28 65 15 50 12 35C10 20 18 8 25 3" strokeLinecap="round" />
            <path d="M38 70C30 68 20 62 16 52" strokeLinecap="round" />
            <path d="M30 55C22 52 14 44 12 35" strokeLinecap="round" />
            <path d="M25 40C18 36 12 28 14 18" strokeLinecap="round" />
            <path d="M20 25C15 20 12 12 18 5" strokeLinecap="round" />
            <path d="M42 60C36 58 28 50 25 40" strokeLinecap="round" />
            <path d="M35 45C30 42 22 35 22 25" strokeLinecap="round" />
            <path d="M28 30C25 25 20 18 24 10" strokeLinecap="round" />
          </svg>

          <span className={styles.hugeRating}>{overallRating.toFixed(2)}</span>

          {/* Right Laurel Branch */}
          <svg className={styles.laurelBranch} width="64" height="96" viewBox="0 0 50 80" fill="none" stroke="#222222" strokeWidth="2.5" style={{ transform: 'scaleX(-1)' }}>
            <path d="M40 75C28 65 15 50 12 35C10 20 18 8 25 3" strokeLinecap="round" />
            <path d="M38 70C30 68 20 62 16 52" strokeLinecap="round" />
            <path d="M30 55C22 52 14 44 12 35" strokeLinecap="round" />
            <path d="M25 40C18 36 12 28 14 18" strokeLinecap="round" />
            <path d="M20 25C15 20 12 12 18 5" strokeLinecap="round" />
            <path d="M42 60C36 58 28 50 25 40" strokeLinecap="round" />
            <path d="M35 45C30 42 22 35 22 25" strokeLinecap="round" />
            <path d="M28 30C25 25 20 18 24 10" strokeLinecap="round" />
          </svg>
        </div>

        <h2 className={styles.guestFavouriteTitle}>Guest favourite</h2>
        <p className={styles.guestFavouriteSub}>
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button type="button" className={styles.howReviewsWorkLink}>
          How reviews work
        </button>
      </div>

      <div className={styles.categoriesRow}>
        {/* Overall Rating Histogram */}
        <div className={styles.categoryCol}>
          <span className={styles.catLabel}>Overall rating</span>
          <div className={styles.starsDistribution}>
            <div className={styles.histRow}>
              <span>5</span>
              <div className={styles.histTrack}>
                <div className={styles.histFill} style={{ width: '95%' }} />
              </div>
            </div>
            <div className={styles.histRow}>
              <span>4</span>
              <div className={styles.histTrack}>
                <div className={styles.histFill} style={{ width: '5%' }} />
              </div>
            </div>
            <div className={styles.histRow}>
              <span>3</span>
              <div className={styles.histTrack}>
                <div className={styles.histFill} style={{ width: '0%' }} />
              </div>
            </div>
            <div className={styles.histRow}>
              <span>2</span>
              <div className={styles.histTrack}>
                <div className={styles.histFill} style={{ width: '0%' }} />
              </div>
            </div>
            <div className={styles.histRow}>
              <span>1</span>
              <div className={styles.histTrack}>
                <div className={styles.histFill} style={{ width: '0%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.catDivider} />

        {/* Cleanliness */}
        <div className={styles.categoryCol}>
          <span className={styles.catLabel}>Cleanliness</span>
          <span className={styles.catScore}>{scores.cleanliness.toFixed(1)}</span>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.8">
            <path d="m12 3-1.9 4.3L5.5 8l3.6 3.5-1 5.3 4.4-2.5 4.4 2.5-1-5.3 3.6-3.5-4.6-.7z" />
          </svg>
        </div>

        <div className={styles.catDivider} />

        {/* Accuracy */}
        <div className={styles.categoryCol}>
          <span className={styles.catLabel}>Accuracy</span>
          <span className={styles.catScore}>{scores.accuracy.toFixed(1)}</span>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>

        <div className={styles.catDivider} />

        {/* Check-in */}
        <div className={styles.categoryCol}>
          <span className={styles.catLabel}>Check-in</span>
          <span className={styles.catScore}>{scores.checkIn.toFixed(1)}</span>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.8">
            <path d="m21 2-2 2m-1.5 1.5L14 9M3 21l9-9M9 3a6 6 0 1 0 8.5 8.5L21 8l-3-3-2.5 2.5" />
          </svg>
        </div>

        <div className={styles.catDivider} />

        {/* Communication */}
        <div className={styles.categoryCol}>
          <span className={styles.catLabel}>Communication</span>
          <span className={styles.catScore}>{scores.communication.toFixed(1)}</span>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.8">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>

        <div className={styles.catDivider} />

        {/* Location */}
        <div className={styles.categoryCol}>
          <span className={styles.catLabel}>Location</span>
          <span className={styles.catScore}>{scores.location.toFixed(1)}</span>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.8">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
          </svg>
        </div>

        <div className={styles.catDivider} />

        {/* Value */}
        <div className={styles.categoryCol}>
          <span className={styles.catLabel}>Value</span>
          <span className={styles.catScore}>{scores.value.toFixed(1)}</span>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.8">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
            <line x1="7" y1="7" x2="7.01" y2="7" />
          </svg>
        </div>
      </div>

      {/* Guest Reviews Grid */}
      <div className={styles.reviewsGrid}>
        {reviews.slice(0, 6).map((rev) => (
          <article key={rev.id} className={styles.reviewCard}>
            <div className={styles.reviewerMeta}>
              <img
                src={rev.authorAvatar}
                alt={rev.authorName}
                className={styles.avatar}
                loading="lazy"
              />
              <div>
                <div className={styles.reviewerName}>{rev.authorName}</div>
                <div className={styles.reviewerLocation}>
                  {rev.authorLocation || rev.yearsOnAirbnb}
                </div>
              </div>
            </div>
            <div className={styles.reviewDate}>
              <span className={styles.starsText}>★★★★★</span> · <span className={styles.dateText}>{rev.date}</span>
            </div>
            <p className={styles.comment}>{rev.comment}</p>
          </article>
        ))}
      </div>

      <button type="button" className={styles.showAllReviewsBtn}>
        Show all {reviewCount} reviews
      </button>
    </section>
  );
};
