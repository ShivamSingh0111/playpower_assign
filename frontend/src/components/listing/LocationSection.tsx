import React, { useState } from 'react';
import styles from './LocationSection.module.css';

interface LocationSectionProps {
  city: string;
  region: string;
  country: string;
  neighborhoodDescription: string;
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  city,
  region,
  country,
  neighborhoodDescription
}) => {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom((prev) => Math.min(Number((prev + 0.15).toFixed(2)), 1.45));
  const handleZoomOut = () => setZoom((prev) => Math.max(Number((prev - 0.15).toFixed(2)), 0.85));
  const handleResetZoom = () => setZoom(1);

  return (
    <section className={styles.locationSection} aria-label="Location information">
      <h3 className={styles.heading}>Where you'll be</h3>
      <div className={styles.subLocation}>
        {city}, {region}, {country}
      </div>

      <div className={styles.mapPreview} role="region" aria-label={`Map of ${city}, ${region}`}>
        {/* Top-Left Search Button */}
        <button
          type="button"
          className={styles.searchButton}
          onClick={handleResetZoom}
          aria-label="Reset map search view"
          title="Reset view"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7.5" />
            <line x1="21" y1="21" x2="16.5" y2="16.5" />
          </svg>
        </button>

        {/* Top-Right Zoom Controls */}
        <div className={styles.zoomControl}>
          <button
            type="button"
            className={styles.zoomBtn}
            onClick={handleZoomIn}
            aria-label="Zoom in"
            title="Zoom in"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <div className={styles.zoomDivider} />
          <button
            type="button"
            className={styles.zoomBtn}
            onClick={handleZoomOut}
            aria-label="Zoom out"
            title="Zoom out"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>

        {/* Scalable Map Graphic Layer */}
        <div
          className={styles.mapGraphic}
          style={{ transform: `scale(${zoom})` }}
        >
          <svg
            viewBox="0 0 1000 440"
            preserveAspectRatio="none"
            className={styles.mapSvg}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="airbnbMapGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(0, 0, 0, 0.048)" strokeWidth="1" />
              </pattern>
            </defs>

            {/* Base Land: Soft pastel greenish beige */}
            <rect width="1000" height="440" fill="#EAF0E5" />

            {/* Ocean / Water on the Left with Angled Coastline */}
            <polygon points="0,0 410,0 215,440 0,440" fill="#A0CBE8" />

            {/* Translucent Green Circle 1: Straddles the coastline */}
            <circle cx="305" cy="168" r="44" fill="#C8DEC1" opacity="0.75" />

            {/* Translucent Green Circle 2: On the land to the right */}
            <circle cx="695" cy="275" r="59" fill="#C8DEC1" opacity="0.75" />

            {/* Faint Grid Overlay across entire map */}
            <rect width="1000" height="440" fill="url(#airbnbMapGrid)" />
          </svg>
        </div>

        {/* Center Airbnb Home Pin */}
        <div className={styles.centerPinContainer}>
          <div className={styles.centerPin}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Roof */}
              <path d="M5.5 15L16 6L26.5 15" />
              {/* Walls & Door */}
              <path d="M9 13.5V23.5H13.5V18C13.5 16.6 14.6 15.5 16 15.5C17.4 15.5 18.5 16.6 18.5 18V23.5H23V13.5" />
              {/* Base line under house */}
              <line x1="5" y1="27" x2="27" y2="27" />
            </svg>
          </div>
        </div>
      </div>

      <p className={styles.neighborhoodText}>{neighborhoodDescription}</p>
    </section>
  );
};
