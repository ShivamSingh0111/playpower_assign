"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingService = void 0;
const listingData_js_1 = require("../data/listingData.js");
class ListingService {
    static getListing() {
        return listingData_js_1.propertyListing;
    }
    static getPhotos(category) {
        if (!category || category.toLowerCase() === 'all') {
            return listingData_js_1.listingPhotos;
        }
        return listingData_js_1.listingPhotos.filter((photo) => photo.category.toLowerCase().includes(category.toLowerCase()));
    }
    static getHeroPhotos() {
        return listingData_js_1.listingPhotos.filter((p) => p.isHero).sort((a, b) => (a.heroOrder ?? 0) - (b.heroOrder ?? 0));
    }
    static getCategories() {
        return listingData_js_1.photoCategories;
    }
    static getReviews() {
        return {
            reviews: listingData_js_1.listingReviews,
            scores: listingData_js_1.propertyListing.rating.scores,
            overall: listingData_js_1.propertyListing.rating.overall,
            count: listingData_js_1.propertyListing.rating.reviewCount
        };
    }
}
exports.ListingService = ListingService;
