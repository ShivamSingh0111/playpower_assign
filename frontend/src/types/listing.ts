export interface Photo {
  id: string;
  url: string;
  title: string;
  category: string;
  caption?: string;
  width?: number;
  height?: number;
  isHero?: boolean;
  heroOrder?: number;
}

export interface PhotoCategory {
  id: string;
  name: string;
  photoCount: number;
  coverUrl: string;
}

export interface Amenity {
  id: string;
  name: string;
  category: string;
  icon: string;
  available: boolean;
  description?: string;
}

export interface ReviewScore {
  cleanliness: number;
  accuracy: number;
  communication: number;
  location: number;
  checkIn: number;
  value: number;
}

export interface Review {
  id: string;
  authorName: string;
  authorAvatar: string;
  authorLocation?: string;
  yearsOnAirbnb?: string;
  date: string;
  rating: number;
  comment: string;
}

export interface Host {
  name: string;
  avatar: string;
  isSuperhost: boolean;
  yearsHosting: number;
  badgeText: string;
  responseRate: string;
  responseTime: string;
  coHosts?: string[];
  bio: string;
}

export interface Listing {
  id: string;
  title: string;
  propertyType: string;
  location: {
    city: string;
    region: string;
    country: string;
    neighborhoodDescription: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  stats: {
    guests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
  };
  rating: {
    overall: number;
    reviewCount: number;
    isGuestFavorite: boolean;
    scores: ReviewScore;
  };
  pricing: {
    basePricePerNight: number;
    currencySymbol: string;
    currencyCode: string;
    cleaningFee: number;
    serviceFee: number;
    discountPercentage?: number;
  };
  host: Host;
  highlights: {
    icon: string;
    title: string;
    description: string;
  }[];
  description: string;
  spaceDescription: string;
  guestAccess: string;
  sleepingArrangements: {
    room: string;
    bedType: string;
    icon: string;
  }[];
  amenities: Amenity[];
  rules: {
    checkIn: string;
    checkout: string;
    rulesList: string[];
    safetyList: string[];
    cancellationPolicy: string;
  };
  photos: Photo[];
  categories: PhotoCategory[];
}
