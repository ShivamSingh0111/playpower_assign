import { Listing, Photo, Review } from '../types/listing';

export const fallbackPhotos: Photo[] = [
  {
    id: 'photo-1',
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85',
    title: 'Living room with private indoor jacuzzi',
    category: 'Living room',
    caption: 'Sunlit living area with ambient mood lighting, plush lounge seating, and private heated jacuzzi.',
    width: 1600,
    height: 1067,
    isHero: true,
    heroOrder: 0
  },
  {
    id: 'photo-2',
    url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
    title: 'Master Bedroom suite with King bed',
    category: 'Bedroom',
    caption: 'Air-conditioned master bedroom with orthopedic king mattress, custom wood accents, and warm bedside lamps.',
    width: 1200,
    height: 800,
    isHero: true,
    heroOrder: 1
  },
  {
    id: 'photo-3',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85',
    title: 'Romantic private Jacuzzi detail',
    category: 'Jacuzzi & Spa',
    caption: 'Private hydrotherapy jacuzzi tub surrounded by lush tropical indoor greenery.',
    width: 1200,
    height: 800,
    isHero: true,
    heroOrder: 2
  },
  {
    id: 'photo-4',
    url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    title: 'Living room lounge & Smart TV setup',
    category: 'Living room',
    caption: '55" 4K Smart TV with high-speed 100Mbps fiber Wi-Fi and bohemian decor.',
    width: 1200,
    height: 800,
    isHero: true,
    heroOrder: 3
  },
  {
    id: 'photo-5',
    url: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=85',
    title: 'Community swimming pool & palm garden',
    category: 'Outdoor & Pool',
    caption: 'Sparkling swimming pool situated right in the gated enclave surrounded by Goan flora.',
    width: 1200,
    height: 800,
    isHero: true,
    heroOrder: 4
  },
  {
    id: 'photo-6',
    url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=85',
    title: 'Cozy living room corner with reading chair',
    category: 'Living room',
    caption: 'Comfortable reading nook with natural daylight and handcrafted cane fixtures.',
    width: 1200,
    height: 800
  },
  {
    id: 'photo-7',
    url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
    title: 'Bedroom reading lights & storage',
    category: 'Bedroom',
    caption: 'Full-length wardrobe, luggage rack, and dedicated bedside charging stations.',
    width: 1200,
    height: 800
  },
  {
    id: 'photo-8',
    url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=85',
    title: 'Bedroom vanity and dressing area',
    category: 'Bedroom',
    caption: 'Well-lit mirror vanity and styling station.',
    width: 1200,
    height: 800
  },
  {
    id: 'photo-9',
    url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85',
    title: 'Relaxing jacuzzi jets at dusk',
    category: 'Jacuzzi & Spa',
    caption: 'Chromotherapy and bubble massage jets for ultimate couple relaxation.',
    width: 1200,
    height: 800
  },
  {
    id: 'photo-10',
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
    title: 'Fully equipped modern kitchenette',
    category: 'Kitchenette & Dining',
    caption: 'Induction cooktop, microwave oven, mini-fridge, electric kettle, and cookware.',
    width: 1200,
    height: 800
  },
  {
    id: 'photo-11',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
    title: 'Dining table set for two',
    category: 'Kitchenette & Dining',
    caption: 'Intimate breakfast nook with complete cutlery, wine glasses, and ceramic dinnerware.',
    width: 1200,
    height: 800
  },
  {
    id: 'photo-12',
    url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=85',
    title: 'Ensuite modern bathroom',
    category: 'Bathroom',
    caption: 'Rain shower, continuous hot water system, organic body wash, and fresh cotton towels.',
    width: 1200,
    height: 800
  },
  {
    id: 'photo-13',
    url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=85',
    title: 'Designer bathroom fixtures and vanity',
    category: 'Bathroom',
    caption: 'Clean, polished vanity with premium bath amenities and hairdryer.',
    width: 1200,
    height: 800
  },
  {
    id: 'photo-14',
    url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=85',
    title: 'Sun loungers by the community pool',
    category: 'Outdoor & Pool',
    caption: 'Enjoy warm Goa afternoons lounging beside the refreshing pool.',
    width: 1200,
    height: 800
  },
  {
    id: 'photo-15',
    url: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=85',
    title: 'Private balcony overlooking green foliage',
    category: 'Outdoor & Pool',
    caption: 'Charming balcony with morning coffee chairs overlooking peaceful coastal greenery.',
    width: 1200,
    height: 800
  }
];

export const fallbackCategories = [
  { id: 'all', name: 'All photos', photoCount: 15, coverUrl: fallbackPhotos[0].url },
  { id: 'living', name: 'Living room', photoCount: 3, coverUrl: fallbackPhotos[0].url },
  { id: 'bedroom', name: 'Bedroom', photoCount: 3, coverUrl: fallbackPhotos[1].url },
  { id: 'jacuzzi', name: 'Jacuzzi & Spa', photoCount: 2, coverUrl: fallbackPhotos[2].url },
  { id: 'kitchen', name: 'Kitchenette & Dining', photoCount: 2, coverUrl: fallbackPhotos[9].url },
  { id: 'bathroom', name: 'Bathroom', photoCount: 2, coverUrl: fallbackPhotos[11].url },
  { id: 'outdoor', name: 'Outdoor & Pool', photoCount: 3, coverUrl: fallbackPhotos[4].url }
];

export const fallbackReviews: Review[] = [
  {
    id: 'rev-1',
    authorName: 'Aarav Sharma',
    authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    authorLocation: 'Mumbai, India',
    yearsOnAirbnb: '4 years on Airbnb',
    date: 'February 2026',
    rating: 5,
    comment: 'The jacuzzi was unbelievable! Mirashya Homes went above and beyond to make our anniversary stay truly unforgettable. Spotlessly clean, super close to Candolim beach, and the pool was pristine.'
  },
  {
    id: 'rev-2',
    authorName: 'Sarah Jenkins',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    authorLocation: 'London, United Kingdom',
    yearsOnAirbnb: '6 years on Airbnb',
    date: 'January 2026',
    rating: 5,
    comment: 'An absolute oasis in Candolim! The high-speed internet made it so easy to work remotely during the day, and enjoying the private jacuzzi in the evening was bliss. Host was very communicative.'
  },
  {
    id: 'rev-3',
    authorName: 'Rohan Mehta',
    authorAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
    authorLocation: 'Bengaluru, India',
    yearsOnAirbnb: '2 years on Airbnb',
    date: 'December 2025',
    rating: 5,
    comment: 'The pictures represent the place 100% accurately. Check-in was seamless, the AC kept the room cool in Goan heat, and the bed was remarkably comfortable. Will definitely book again!'
  },
  {
    id: 'rev-4',
    authorName: 'Elena Rostova',
    authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    authorLocation: 'Berlin, Germany',
    yearsOnAirbnb: '5 years on Airbnb',
    date: 'November 2025',
    rating: 5,
    comment: 'Loved having our own jacuzzi right inside the apartment. Candolim beach and great restaurants are just an 8-minute walk. Peaceful gated community with 24/7 security.'
  },
  {
    id: 'rev-5',
    authorName: 'Neil Fernandes',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    authorLocation: 'Goa, India',
    yearsOnAirbnb: '3 years on Airbnb',
    date: 'October 2025',
    rating: 5,
    comment: 'Exceptional hospitality. Everything from the jacuzzi temperature controls to the kitchen appliances was thoughtful and modern. Highly recommended for couples.'
  },
  {
    id: 'rev-6',
    authorName: 'Priya Patel',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    authorLocation: 'Ahmedabad, India',
    yearsOnAirbnb: '1 year on Airbnb',
    date: 'September 2025',
    rating: 5,
    comment: 'Super clean, tranquil ambiance and high-speed Wi-Fi. The self check-in was smooth and the building staff was genuinely helpful throughout our stay.'
  }
];

export const fallbackListing: Listing = {
  id: 'candolim-mirashya-ug10',
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
  propertyType: 'Entire serviced apartment in Candolim, India',
  location: {
    city: 'Candolim',
    region: 'Goa',
    country: 'India',
    neighborhoodDescription: 'Nestled in a tranquil lane off Candolim Main Road, walking distance to the beach, renowned beach shacks, chic cafes, and supermarkets.',
    coordinates: {
      lat: 15.518,
      lng: 73.763
    }
  },
  stats: {
    guests: 3,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1
  },
  rating: {
    overall: 4.95,
    reviewCount: 19,
    isGuestFavorite: true,
    scores: {
      cleanliness: 4.9,
      accuracy: 4.9,
      communication: 4.9,
      location: 4.8,
      checkIn: 4.9,
      value: 4.8
    }
  },
  pricing: {
    basePricePerNight: 5699,
    currencySymbol: '₹',
    currencyCode: 'INR',
    cleaningFee: 0,
    serviceFee: 0,
    discountPercentage: 10
  },
  host: {
    name: 'Mirashya Homes',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=180&q=80',
    isSuperhost: true,
    yearsHosting: 2,
    badgeText: 'Superhost · 2 years hosting',
    responseRate: '100%',
    responseTime: 'within an hour',
    coHosts: ['Ananya', 'Vikram'],
    bio: 'Mirashya Homes curates luxury vacation stays across North Goa. Our mission is to deliver boutique hotel luxury combined with the cozy warmth and privacy of home.'
  },
  highlights: [
    {
      icon: 'fire',
      title: 'Outdoor entertainment',
      description: 'The pool and alfresco dining are great for summer trips.'
    },
    {
      icon: 'fan',
      title: 'Designed for staying cool',
      description: 'Beat the heat with the A/C and ceiling fan.'
    },
    {
      icon: 'door',
      title: 'Self check-in',
      description: 'You can check in with the building staff.'
    }
  ],
  description: 'Welcome to Mirashya UG10, your romantic sanctuary in North Goa! Designed specifically for couples and discerning travelers seeking luxury and serenity, this designer 1BHK serviced apartment features a private heated jacuzzi inside the living suite, contemporary aesthetic furnishings, high-speed fiber internet, and full resort amenities including a sparkling swimming pool.',
  spaceDescription: 'The apartment is fully air-conditioned with inverter power backup. The bedroom features an orthopedic king mattress with 400-thread-count Egyptian cotton linens. The living room includes a comfortable sofa bed, 55-inch 4K Smart TV with OTT streaming, and custom ambient illumination designed for relaxing evenings.',
  guestAccess: 'Guests enjoy exclusive private access to the entire apartment and jacuzzi. You also have full shared access to the gated residential swimming pool, landscaped gardens, and dedicated parking.',
  sleepingArrangements: [
    {
      room: 'Bedroom 1',
      bedType: '1 king bed',
      icon: 'bed'
    },
    {
      room: 'Living room',
      bedType: '1 sofa bed',
      icon: 'couch'
    }
  ],
  amenities: [
    { id: 'amenity-1', name: 'Private hot tub / Jacuzzi', category: 'Bathroom & Spa', icon: 'hot-tub', available: true, description: 'Heated indoor jacuzzi tub with hydro jets' },
    { id: 'amenity-2', name: 'Shared outdoor swimming pool', category: 'Outdoor', icon: 'pool', available: true, description: 'Open year-round, clean water with sun deck' },
    { id: 'amenity-3', name: 'Fast Wi-Fi – 100 Mbps', category: 'Internet & Office', icon: 'wifi', available: true, description: 'Verified speed, perfect for 4K streaming and remote work' },
    { id: 'amenity-4', name: 'Dedicated workspace', category: 'Internet & Office', icon: 'desk', available: true, description: 'Desk and comfortable ergonomic chair' },
    { id: 'amenity-5', name: 'Free parking on premises', category: 'Parking & Facilities', icon: 'parking', available: true, description: 'Assigned safe parking spot inside gated society' },
    { id: 'amenity-6', name: 'Air conditioning', category: 'Climate Control', icon: 'ac', available: true, description: 'Split AC units in bedroom and living room' },
    { id: 'amenity-7', name: 'Kitchenette with induction', category: 'Kitchen', icon: 'kitchen', available: true, description: 'Space where guests can cook their own meals' },
    { id: 'amenity-8', name: '55" 4K Smart TV with Netflix', category: 'Entertainment', icon: 'tv', available: true, description: 'Includes OTT apps and streaming' },
    { id: 'amenity-9', name: 'Washing machine', category: 'Laundry', icon: 'washer', available: true, description: 'In-unit front load automatic washing machine' },
    { id: 'amenity-10', name: 'Private patio or balcony', category: 'Outdoor', icon: 'balcony', available: true, description: 'Open balcony with garden and canopy views' },
    { id: 'amenity-11', name: 'Power backup / Inverter', category: 'Facilities', icon: 'power', available: true, description: 'Uninterrupted electricity during outages' },
    { id: 'amenity-12', name: 'Security cameras on property', category: 'Safety', icon: 'security', available: true, description: '24/7 security guard and common area CCTV' }
  ],
  rules: {
    checkIn: 'After 2:00 PM',
    checkout: 'Before 11:00 AM',
    rulesList: [
      'Self check-in with building staff',
      'Maximum 4 guests',
      'No loud music or parties after 10:00 PM',
      'Smoking permitted only in the open balcony'
    ],
    safetyList: [
      'Carbon monoxide alarm installed',
      'Smoke alarm installed',
      'First aid kit available in kitchen cabinet',
      '24/7 security guard on premises'
    ],
    cancellationPolicy: 'Free cancellation up to 48 hours before check-in. Review the full policy in your reservation.'
  },
  photos: fallbackPhotos,
  categories: fallbackCategories
};
