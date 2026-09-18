import React from 'react';
import styles from './Lightbox.module.css';
import { Photo } from '../../types/listing';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon, GridDotsIcon } from '../common/Icons';
import { useScrollLock } from '../../hooks/useScrollLock';
import { useKeyboardNav } from '../../hooks/useKeyboardNav';
import { useFocusTrap } from '../../hooks/useFocusTrap';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  photos: Photo[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
  onShareClick?: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  photos,
  currentIndex,
  onNavigate
}) => {
  useScrollLock(isOpen);

  const handlePrevious = () => {
    if (photos.length === 0) return;
    const newIndex = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(newIndex);
  };

  const handleNext = () => {
    if (photos.length === 0) return;
    const newIndex = (currentIndex + 1) % photos.length;
    onNavigate(newIndex);
  };

  useKeyboardNav({
    onPrevious: handlePrevious,
    onNext: handleNext,
    onEscape: onClose,
    isEnabled: isOpen
  });

  const lightboxRef = useFocusTrap(isOpen);

  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex] || photos[0];

  return (
    <div
      className={styles.lightboxOverlay}
      ref={lightboxRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      tabIndex={-1}
    >
      <div className={styles.topBar}>
        {/* Left: grid icon */}
        <button
          type="button"
          className={styles.gridBtn}
          aria-label="Photo grid view"
          onClick={onClose}
        >
          <GridDotsIcon size={18} color="#222222" />
        </button>

        {/* Center: photo title (absolutely positioned) */}
        <div className={styles.photoTitle} aria-live="polite" aria-atomic="true">
          {currentPhoto.title}
        </div>

        {/* Right: counter + close */}
        <div className={styles.topRight}>
          <span className={styles.photoCounter}>
            {currentIndex + 1} of {photos.length}
          </span>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close photo viewer (Escape)"
          >
            <CloseIcon size={18} color="#222222" />
          </button>
        </div>
      </div>

      <div className={styles.stage}>
        {/* Previous */}
        <button
          type="button"
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={handlePrevious}
          aria-label="Previous photo (ArrowLeft)"
        >
          <ChevronLeftIcon size={16} color="#222222" />
        </button>

        {/* Image */}
        <div className={styles.imageWrapper}>
          <img
            key={currentPhoto.id}
            src={currentPhoto.url}
            alt={currentPhoto.title}
            className={styles.currentImage}
          />
        </div>

        {/* Next */}
        <button
          type="button"
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={handleNext}
          aria-label="Next photo (ArrowRight)"
        >
          <ChevronRightIcon size={16} color="#222222" />
        </button>
      </div>
    </div>
  );
};
