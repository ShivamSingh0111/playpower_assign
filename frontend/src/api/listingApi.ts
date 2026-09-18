import { Listing, Photo, Review, PhotoCategory } from '../types/listing';
import { fallbackListing, fallbackPhotos, fallbackReviews, fallbackCategories } from './fallbackData';

export async function fetchListing(): Promise<Listing> {
  try {
    const res = await fetch('/api/listing');
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.warn('Backend API unavailable, using resilient local fallback data for listing:', err);
    return fallbackListing;
  }
}

export async function fetchPhotos(category?: string): Promise<{ photos: Photo[]; categories: PhotoCategory[] }> {
  try {
    const url = category ? `/api/listing/photos?category=${encodeURIComponent(category)}` : '/api/listing/photos';
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.warn('Backend API unavailable, using fallback photos:', err);
    let photos = fallbackPhotos;
    if (category && category !== 'all') {
      photos = fallbackPhotos.filter((p) => p.category.toLowerCase().includes(category.toLowerCase()));
    }
    return {
      photos,
      categories: fallbackCategories
    };
  }
}

export async function fetchReviews(): Promise<{ reviews: Review[]; overall: number; count: number }> {
  try {
    const res = await fetch('/api/listing/reviews');
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.warn('Backend API unavailable, using fallback reviews:', err);
    return {
      reviews: fallbackReviews,
      overall: fallbackListing.rating.overall,
      count: fallbackListing.rating.reviewCount
    };
  }
}
