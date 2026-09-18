import React, { useState } from 'react';
import styles from './AmenitiesSection.module.css';
import { Amenity } from '../../types/listing';
import { AmenityIcon, CloseIcon } from '../common/Icons';
import { useScrollLock } from '../../hooks/useScrollLock';
import { useFocusTrap } from '../../hooks/useFocusTrap';

interface AmenitiesSectionProps {
  amenities: Amenity[];
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ amenities }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useScrollLock(isModalOpen);
  const modalRef = useFocusTrap(isModalOpen);

  // Show first 10 amenities on the main listing page
  const displayedAmenities = amenities.slice(0, 10);

  return (
    <section className={styles.amenitiesSection} aria-label="What this place offers">
      <h3 className={styles.heading}>What this place offers</h3>
      <div className={styles.grid}>
        {displayedAmenities.map((item) => (
          <div key={item.id} className={styles.amenityItem}>
            <AmenityIcon type={item.icon} size={24} color="#222222" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className={styles.showAllButton}
        onClick={() => setIsModalOpen(true)}
      >
        Show all {amenities.length} amenities
      </button>

      {/* All Amenities Modal */}
      {isModalOpen && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setIsModalOpen(false)}
          role="presentation"
        >
          <div
            className={styles.modalContent}
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="amenities-modal-title"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === 'Escape') setIsModalOpen(false);
            }}
          >
            <div className={styles.modalHeader}>
              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setIsModalOpen(false)}
                aria-label="Close amenities modal"
              >
                <CloseIcon size={16} />
              </button>
              <h2 id="amenities-modal-title" className={styles.modalTitle}>
                What this place offers
              </h2>
              <div style={{ width: 36 }} />
            </div>

            <div className={styles.modalBody}>
              {amenities.map((item) => (
                <div key={item.id} className={styles.modalAmenityRow}>
                  <AmenityIcon type={item.icon} size={28} color="#222222" />
                  <div className={styles.modalAmenityInfo}>
                    <div className={styles.modalAmenityName}>{item.name}</div>
                    {item.description && (
                      <div className={styles.modalAmenityDesc}>{item.description}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
