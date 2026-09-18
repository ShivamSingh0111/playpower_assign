import React from 'react';
import styles from './HeroGallery.module.css';
import { Photo } from '../../types/listing';
import { GridDotsIcon } from '../common/Icons';

interface HeroGalleryProps {
  photos: Photo[];
  totalPhotosCount: number;
  onOpenPhotoTour: () => void;
  onPhotoClick: (index: number) => void;
}

export const HeroGallery: React.FC<HeroGalleryProps> = ({
  photos,
  totalPhotosCount,
  onOpenPhotoTour,
  onPhotoClick
}) => {
  // Extract up to 5 hero images
  const heroPhotos = photos.slice(0, 5);
  const primary = heroPhotos[0];
  const secondary = heroPhotos.slice(1, 5);

  return (
    <section className={styles.galleryWrapper} aria-label="Listing photo gallery">
      <div className={styles.galleryGrid}>
        {/* Large Primary Image */}
        {primary && (
          <div
            className={styles.primaryHero}
            onClick={() => onPhotoClick(0)}
            role="button"
            tabIndex={0}
            aria-label={`Photo 1 of ${totalPhotosCount}: ${primary.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') onPhotoClick(0);
            }}
          >
            <img
              src={primary.url}
              alt={primary.title}
              className={styles.photoImage}
              loading="eager"
            />
            <div className={styles.photoOverlay} />
          </div>
        )}

        {/* 2x2 Grid of Secondary Photos */}
        <div className={styles.secondaryGrid}>
          {secondary.map((photo, idx) => {
            const photoIndex = idx + 1;
            return (
              <div
                key={photo.id}
                className={styles.secondaryHeroItem}
                onClick={() => onPhotoClick(photoIndex)}
                role="button"
                tabIndex={0}
                aria-label={`Photo ${photoIndex + 1} of ${totalPhotosCount}: ${photo.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') onPhotoClick(photoIndex);
                }}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className={styles.photoImage}
                  loading="eager"
                />
                <div className={styles.photoOverlay} />
              </div>
            );
          })}
        </div>
      </div>

      {/* "Show all photos" Button */}
      <button
        type="button"
        className={styles.showAllButton}
        onClick={onOpenPhotoTour}
        aria-label={`Show all ${totalPhotosCount} photos in full-screen gallery`}
      >
        <GridDotsIcon size={14} color="#222222" />
        <span>Show all photos</span>
      </button>
    </section>
  );
};
