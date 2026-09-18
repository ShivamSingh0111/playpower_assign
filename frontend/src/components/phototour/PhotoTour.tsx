import React, { useState, useEffect, useRef } from 'react';
import styles from './PhotoTour.module.css';
import { Photo, PhotoCategory } from '../../types/listing';
import { ChevronLeftIcon, ShareIcon, HeartIcon } from '../common/Icons';
import { useScrollLock } from '../../hooks/useScrollLock';
import { useKeyboardNav } from '../../hooks/useKeyboardNav';
import { useFocusTrap } from '../../hooks/useFocusTrap';

interface PhotoTourProps {
  isOpen: boolean;
  onClose: () => void;
  photos: Photo[];
  categories: PhotoCategory[];
  onOpenLightbox: (photoIndex: number) => void;
  onShareClick?: () => void;
}

const categoryAmenities: Record<string, string> = {
  living: 'Sofa, Air conditioning, 55" 4K Smart TV, Ceiling fan, Mood lighting',
  bedroom: 'King bed, Air conditioning, Wardrobe, Bedside lamps, Dressing mirror',
  jacuzzi: 'Private indoor jacuzzi, Hydrotherapy jets, Ambient lighting, Wooden deck',
  kitchen: 'Induction cooktop, Microwave, Mini-fridge, Electric kettle, Dining table',
  bathroom: 'Rain shower, Hot water, Designer vanity, Hairdryer, Cotton towels',
  outdoor: 'Swimming pool, Sun loungers, Palm garden, Amor de Goa complex'
};

export const PhotoTour: React.FC<PhotoTourProps> = ({
  isOpen,
  onClose,
  photos,
  categories,
  onOpenLightbox,
  onShareClick
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [isSaved, setIsSaved] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useScrollLock(isOpen);
  useKeyboardNav({
    onEscape: onClose,
    isEnabled: isOpen
  });
  const tourRef = useFocusTrap(isOpen);

  // Filter categories to only room categories (excluding 'all')
  const roomCategories = categories.filter((c) => c.id !== 'all');

  // Initialize active category
  useEffect(() => {
    if (roomCategories.length > 0 && !activeCategory) {
      setActiveCategory(roomCategories[0].id);
    }
  }, [roomCategories, activeCategory]);

  // Scroll spy to highlight active category as user scrolls
  useEffect(() => {
    if (!isOpen) return;

    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const scrollPos = container.scrollTop + 140;

      for (const cat of roomCategories) {
        const el = document.getElementById(`room-${cat.id}`);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveCategory(cat.id);
            break;
          }
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [isOpen, roomCategories]);

  if (!isOpen) return null;

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const section = document.getElementById(`room-${categoryId}`);
    if (section && scrollContainerRef.current) {
      const targetY = section.offsetTop - 110;
      scrollContainerRef.current.scrollTo({
        top: Math.max(0, targetY),
        behavior: 'smooth'
      });
    }
  };

  const getGlobalIndex = (photoId: string) => {
    return photos.findIndex((p) => p.id === photoId);
  };

  return (
    <div
      className={styles.tourOverlay}
      ref={(el) => {
        // combine refs
        tourRef.current = el;
        (scrollContainerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Full-screen photo tour"
      tabIndex={-1}
    >
      {/* Sticky Header */}
      <header className={styles.topBar}>
        <button
          type="button"
          className={styles.backBtn}
          onClick={onClose}
          aria-label="Back to listing"
        >
          <ChevronLeftIcon size={18} />
        </button>

        <h1 className={styles.tourTitle}>Photo tour</h1>

        {/* Actions */}
        <div className={styles.actionsGroup}>
          <button
            type="button"
            className={styles.actionBtn}
            onClick={onShareClick}
            aria-label="Share photo tour"
          >
            <ShareIcon size={16} />
            <span className={styles.actionText}>Share</span>
          </button>
          <button
            type="button"
            className={styles.actionBtn}
            onClick={() => setIsSaved(!isSaved)}
            aria-label={isSaved ? 'Saved' : 'Save'}
          >
            <HeartIcon size={16} filled={isSaved} />
            <span className={styles.actionText}>{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </header>

      {/* Sticky Category Tabs Bar */}
      <div className={styles.stickyCategoryNav}>
        <div className={styles.categoryNavInner}>
          {roomCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`${styles.categoryPill} ${activeCategory === cat.id ? styles.categoryPillActive : ''}`}
              onClick={() => scrollToCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tour Content */}
      <main className={styles.tourContent} id="tour-content-top">
        {/* Top Room Thumbnails Gallery Bar */}
        <div className={styles.topThumbGallery} role="navigation" aria-label="Room quick links">
          {roomCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`${styles.topThumbCard} ${activeCategory === cat.id ? styles.topThumbCardActive : ''}`}
              onClick={() => scrollToCategory(cat.id)}
            >
              <div className={styles.topThumbImageWrapper}>
                <img src={cat.coverUrl} alt={cat.name} className={styles.topThumbImg} />
              </div>
              <span className={styles.topThumbLabel}>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Room Sections */}
        {roomCategories.map((cat) => {
          const catPhotos = photos.filter((p) =>
            p.category.toLowerCase().includes(cat.name.toLowerCase()) ||
            (cat.id === 'living' && p.category.toLowerCase().includes('living')) ||
            (cat.id === 'bedroom' && p.category.toLowerCase().includes('bedroom')) ||
            (cat.id === 'jacuzzi' && (p.category.toLowerCase().includes('jacuzzi') || p.category.toLowerCase().includes('spa'))) ||
            (cat.id === 'kitchen' && (p.category.toLowerCase().includes('kitchen') || p.category.toLowerCase().includes('dining'))) ||
            (cat.id === 'bathroom' && p.category.toLowerCase().includes('bathroom')) ||
            (cat.id === 'outdoor' && (p.category.toLowerCase().includes('outdoor') || p.category.toLowerCase().includes('pool') || p.category.toLowerCase().includes('exterior')))
          );

          if (catPhotos.length === 0) return null;

          // Asymmetrical layout:
          // Left: stacked smaller photos
          // Right: showcase wide photos
          let leftPhotos: Photo[] = [];
          let rightPhotos: Photo[] = [];

          if (catPhotos.length === 1) {
            rightPhotos = [catPhotos[0]];
          } else if (catPhotos.length === 2) {
            leftPhotos = [catPhotos[0]];
            rightPhotos = [catPhotos[1]];
          } else {
            catPhotos.forEach((p, idx) => {
              if (idx % 2 === 0) leftPhotos.push(p);
              else rightPhotos.push(p);
            });
          }

          const amenitiesText = categoryAmenities[cat.id] || '';

          return (
            <section
              key={cat.id}
              id={`room-${cat.id}`}
              className={styles.roomSection}
              aria-labelledby={`heading-${cat.id}`}
            >
              {/* Room Header */}
              <div className={styles.roomHeader}>
                <h2 id={`heading-${cat.id}`} className={styles.roomTitle}>
                  {cat.name}
                </h2>
                {amenitiesText && (
                  <p className={styles.roomAmenities}>{amenitiesText}</p>
                )}
              </div>

              {/* Asymmetric 2-Column Photo Grid */}
              <div className={styles.roomPhotoLayout}>
                {/* Left Column */}
                {leftPhotos.length > 0 && (
                  <div className={styles.leftCol}>
                    {leftPhotos.map((photo) => {
                      const gIdx = getGlobalIndex(photo.id);
                      return (
                        <article
                          key={photo.id}
                          className={styles.photoCard}
                          onClick={() => onOpenLightbox(gIdx)}
                          role="button"
                          tabIndex={0}
                          aria-label={`Open photo: ${photo.title}`}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              onOpenLightbox(gIdx);
                            }
                          }}
                        >
                          <div className={styles.leftImageWrapper}>
                            <img
                              src={photo.url}
                              alt={photo.title}
                              className={styles.photoImg}
                              loading="lazy"
                            />
                            <div className={styles.photoOverlay} />
                          </div>
                          <div className={styles.photoInfo}>
                            <h3 className={styles.photoTitle}>{photo.title}</h3>
                            {photo.caption && (
                              <p className={styles.photoCaption}>{photo.caption}</p>
                            )}
                          </div>
                        </article>
                      );
                    })}
                  </div>
                )}

                {/* Right Column */}
                {rightPhotos.length > 0 && (
                  <div className={styles.rightCol}>
                    {rightPhotos.map((photo) => {
                      const gIdx = getGlobalIndex(photo.id);
                      return (
                        <article
                          key={photo.id}
                          className={`${styles.photoCard} ${styles.showcaseCard}`}
                          onClick={() => onOpenLightbox(gIdx)}
                          role="button"
                          tabIndex={0}
                          aria-label={`Open photo: ${photo.title}`}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              onOpenLightbox(gIdx);
                            }
                          }}
                        >
                          <div className={styles.rightImageWrapper}>
                            <img
                              src={photo.url}
                              alt={photo.title}
                              className={styles.photoImg}
                              loading="lazy"
                            />
                            <div className={styles.photoOverlay} />
                          </div>
                          <div className={styles.photoInfo}>
                            <h3 className={styles.photoTitle}>{photo.title}</h3>
                            {photo.caption && (
                              <p className={styles.photoCaption}>{photo.caption}</p>
                            )}
                          </div>
                        </article>
                      );
                    })}
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
};
