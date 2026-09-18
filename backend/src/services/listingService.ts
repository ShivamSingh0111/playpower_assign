import { propertyListing, listingPhotos, listingReviews, photoCategories } from '../data/listingData.js';
import { Listing, Photo, Review, PhotoCategory } from '../types/listing.js';

export class ListingService {
  public static getListing(): Listing {
    return propertyListing;
  }

  public static getPhotos(category?: string): Photo[] {
    if (!category || category.toLowerCase() === 'all') {
      return listingPhotos;
    }
    return listingPhotos.filter(
      (photo) => photo.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  public static getHeroPhotos(): Photo[] {
    return listingPhotos.filter((p) => p.isHero).sort((a, b) => (a.heroOrder ?? 0) - (b.heroOrder ?? 0));
  }

  public static getCategories(): PhotoCategory[] {
    return photoCategories;
  }

  public static getReviews(): { reviews: Review[]; scores: typeof propertyListing.rating.scores; overall: number; count: number } {
    return {
      reviews: listingReviews,
      scores: propertyListing.rating.scores,
      overall: propertyListing.rating.overall,
      count: propertyListing.rating.reviewCount
    };
  }
}
