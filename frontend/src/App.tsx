import React, { useEffect, useRef, useState } from 'react';
import styles from './App.module.css';
import { fetchListing, fetchPhotos, fetchReviews } from './api/listingApi';
import { BookingCard } from './components/booking/BookingCard';
import { ShareModal } from './components/common/ShareModal';
import { Header } from './components/header/Header';
import { AmenitiesSection } from './components/listing/AmenitiesSection';
import { CalendarSection } from './components/listing/CalendarSection';
import { Footer } from './components/listing/Footer';
import { HeroGallery } from './components/listing/HeroGallery';
import { HostSection } from './components/listing/HostSection';
import { HouseRules } from './components/listing/HouseRules';
import { ListingHeader } from './components/listing/ListingHeader';
import { ListingSummary } from './components/listing/ListingSummary';
import { LocationSection } from './components/listing/LocationSection';
import { MoreStaysNearby } from './components/listing/MoreStaysNearby';
import { PropertyDescription } from './components/listing/PropertyDescription';
import { PropertyHighlights } from './components/listing/PropertyHighlights';
import { ReviewsSection } from './components/listing/ReviewsSection';
import { SleepingArrangements } from './components/listing/SleepingArrangements';
import { StickyNav } from './components/listing/StickyNav';
import { Lightbox } from './components/lightbox/Lightbox';
import { PhotoTour } from './components/phototour/PhotoTour';
import { Listing, Photo, PhotoCategory, Review } from './types/listing';

export const App: React.FC = () => {
  const [listing, setListing] = useState<Listing | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [categories, setCategories] = useState<PhotoCategory[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // currentPath drives the /photos overlay; keeps URL and state in sync
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);

  // Sync route with browser history
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const isPhotoTourOpen = currentPath === '/photos' || currentPath.startsWith('/photos');

  // Ref to hero gallery for StickyNav scroll detection
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const [listingData, photosData, reviewsData] = await Promise.all([
          fetchListing(),
          fetchPhotos(),
          fetchReviews()
        ]);

        setListing(listingData);
        setPhotos(photosData.photos);
        setCategories(photosData.categories);
        setReviews(reviewsData.reviews);
      } catch (err) {
        console.error('Error initializing listing data:', err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading || !listing) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner} />
        <div>Loading listing details...</div>
      </div>
    );
  }

  const handleHeroPhotoClick = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const handlePhotoTourOpen = () => {
    if (window.location.pathname !== '/photos') {
      window.history.pushState({}, '', '/photos');
      setCurrentPath('/photos');
    }
  };

  const handlePhotoTourClose = () => {
    if (window.location.pathname === '/photos' || window.location.pathname.startsWith('/photos')) {
      window.history.pushState({}, '', '/');
      setCurrentPath('/');
    }
  };

  const handleOpenLightboxFromTour = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div>
      <StickyNav
        heroRef={heroRef}
        basePrice={listing.pricing.basePricePerNight}
        currencySymbol={listing.pricing.currencySymbol}
        nights={5}
        rating={listing.rating.overall}
        reviewCount={listing.rating.reviewCount}
        onReserveClick={() => {
          // Smooth-scroll to booking card
          document.getElementById('booking-card')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }}
      />

      <Header onLogoClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

      <main className={styles.mainLayout}>
        {/* Listing Title & Metadata */}
        <ListingHeader
          title={listing.title}
          rating={listing.rating.overall}
          reviewCount={listing.rating.reviewCount}
          isSuperhost={listing.host.isSuperhost}
          city={listing.location.city}
          region={listing.location.region}
          country={listing.location.country}
          onShareClick={() => setIsShareModalOpen(true)}
        />

        {/* 5-Photo Hero Gallery — anchored as "Photos" section */}
        <section id="section-photos" ref={heroRef as React.RefObject<HTMLElement>}>
          <HeroGallery
            photos={photos}
            totalPhotosCount={photos.length}
            onOpenPhotoTour={handlePhotoTourOpen}
            onPhotoClick={handleHeroPhotoClick}
          />
        </section>

        {/* Main 2-Column Content Grid (Details + Sticky Reservation Card) */}
        <div className={styles.twoColumnGrid}>
          {/* ── Left Details Column ── */}
          <div className={styles.leftColumn}>
            <ListingSummary
              propertyType={listing.propertyType}
              stats={listing.stats}
              host={listing.host}
              overallRating={listing.rating.overall}
              reviewCount={listing.rating.reviewCount}
              isGuestFavorite={listing.rating.isGuestFavorite}
              scores={listing.rating.scores}
            />

            <PropertyHighlights highlights={listing.highlights} />

            <PropertyDescription
              description={listing.description}
              spaceDescription={listing.spaceDescription}
              guestAccess={listing.guestAccess}
            />

            <SleepingArrangements arrangements={listing.sleepingArrangements} />

            {/* Amenities section anchor */}
            <div id="section-amenities">
              <AmenitiesSection amenities={listing.amenities} />
            </div>

            {/* Calendar Section (Intermediate state before reviews) */}
            <CalendarSection />
          </div>

          {/* Right column — sticky booking card */}
          <div className={styles.rightColumn}>
            <div id="booking-card" className={styles.stickyReservationWrapper}>
              <BookingCard
                basePrice={listing.pricing.basePricePerNight}
                currencySymbol={listing.pricing.currencySymbol}
                cleaningFee={listing.pricing.cleaningFee}
                serviceFee={listing.pricing.serviceFee}
                rating={listing.rating.overall}
                reviewCount={listing.rating.reviewCount}
              />
            </div>
          </div>
        </div>

        {/* Full-width sections below the two-column grid */}
        <div className={styles.fullWidthSections}>
          {/* Reviews section anchor */}
          <div id="section-reviews">
            <ReviewsSection
              overallRating={listing.rating.overall}
              reviewCount={listing.rating.reviewCount}
              scores={listing.rating.scores}
              reviews={reviews}
            />
          </div>

          {/* Location section anchor */}
          <div id="section-location">
            <LocationSection
              city={listing.location.city}
              region={listing.location.region}
              country={listing.location.country}
              neighborhoodDescription={listing.location.neighborhoodDescription}
            />
          </div>

          <HostSection host={listing.host} />

          <HouseRules rules={listing.rules} />

          <MoreStaysNearby />
        </div>
      </main>

      <Footer />

      {/* Photo Tour full-screen overlay */}
      <PhotoTour
        isOpen={isPhotoTourOpen}
        onClose={handlePhotoTourClose}
        photos={photos}
        categories={categories}
        onOpenLightbox={handleOpenLightboxFromTour}
        onShareClick={() => setIsShareModalOpen(true)}
      />

      {/* Lightbox single-photo viewer */}
      <Lightbox
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        photos={photos}
        currentIndex={lightboxIndex}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
        onShareClick={() => setIsShareModalOpen(true)}
      />

      {/* Share modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        title={listing.title}
      />
    </div>
  );
};

export default App;
