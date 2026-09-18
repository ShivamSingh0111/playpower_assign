import React, { useState } from 'react';
import styles from './BookingCard.module.css';

interface BookingCardProps {
  basePrice?: number;
  currencySymbol?: string;
  cleaningFee?: number;
  serviceFee?: number;
  rating?: number;
  reviewCount?: number;
}

export const BookingCard: React.FC<BookingCardProps> = ({
  currencySymbol = '₹'
}) => {
  const [guests, setGuests] = useState(2);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
  const [isReserved, setIsReserved] = useState(false);
  const [isClaimed, setIsClaimed] = useState(false);

  const handleReserve = () => {
    setIsReserved(true);
    setTimeout(() => setIsReserved(false), 2500);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.discountBanner}>
        <div className={styles.discountLeft}>
          <div className={styles.tagIconWrapper}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="#2E7D32">
              <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
            </svg>
          </div>
          <div className={styles.discountInfo}>
            <div className={styles.discountText}>Get 10% off your next stay.</div>
            <span className={styles.termsLink}>Terms apply</span>
          </div>
        </div>
        <button
          type="button"
          className={styles.claimBtn}
          onClick={() => setIsClaimed(true)}
        >
          {isClaimed ? 'Claimed' : 'Claim'}
        </button>
      </div>

      <aside className={styles.cardContainer} aria-label="Booking reservation card">
        <div className={styles.priceHeader}>
          <span className={styles.priceAmount}>{currencySymbol}28,499</span>
          <span className={styles.priceNights}>for 5 nights</span>
        </div>

        {/* Date & Guests Selector Box */}
        <div className={styles.selectorBox}>
          <div className={styles.dateRow}>
            <div
              className={styles.dateField}
              role="button"
              tabIndex={0}
              aria-label="Check-in date"
            >
              <span className={styles.fieldLabel}>CHECK-IN</span>
              <div className={styles.fieldValue}>10/18/2026</div>
            </div>
            <div
              className={styles.dateField}
              role="button"
              tabIndex={0}
              aria-label="Checkout date"
            >
              <span className={styles.fieldLabel}>CHECKOUT</span>
              <div className={styles.fieldValue}>10/23/2026</div>
            </div>
          </div>

          <div
            className={styles.guestsField}
            role="button"
            tabIndex={0}
            aria-expanded={isGuestDropdownOpen}
            aria-label="Select number of guests"
            onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
          >
            <div>
              <span className={styles.fieldLabel}>GUESTS</span>
              <div className={styles.fieldValue}>
                {guests} guest{guests > 1 ? 's' : ''}
              </div>
            </div>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#222222"
              strokeWidth="2.5"
              style={{
                transform: isGuestDropdownOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.15s ease'
              }}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>

          {isGuestDropdownOpen && (
            <div className={styles.guestDropdownMenu}>
              <div>
                <div style={{ fontWeight: 600 }}>Adults</div>
                <div style={{ fontSize: 12, color: '#717171' }}>Age 13+</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <button
                  type="button"
                  className={styles.counterBtn}
                  disabled={guests <= 1}
                  onClick={(e) => {
                    e.stopPropagation();
                    setGuests(Math.max(1, guests - 1));
                  }}
                  aria-label="Decrease guests"
                >
                  -
                </button>
                <span style={{ fontWeight: 600, minWidth: 16, textAlign: 'center' }}>
                  {guests}
                </span>
                <button
                  type="button"
                  className={styles.counterBtn}
                  disabled={guests >= 4}
                  onClick={(e) => {
                    e.stopPropagation();
                    setGuests(Math.min(4, guests + 1));
                  }}
                  aria-label="Increase guests"
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Cancellation Notice */}
        <div className={styles.cancellationPill}>
          Free cancellation before <strong>17 October</strong>
        </div>

        {/* Reserve CTA */}
        <button
          type="button"
          className={styles.reserveButton}
          onClick={handleReserve}
        >
          {isReserved ? '✓ Dates Reserved!' : 'Reserve'}
        </button>

        <div className={styles.noChargeNotice}>You won't be charged yet</div>
      </aside>

      {/* Report Listing */}
      <div className={styles.reportLink}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#717171">
          <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
        </svg>
        <span>Report this listing</span>
      </div>
    </div>
  );
};
