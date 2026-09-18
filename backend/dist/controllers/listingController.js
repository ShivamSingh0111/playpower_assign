"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingController = void 0;
const listingService_js_1 = require("../services/listingService.js");
class ListingController {
    static getListing(req, res) {
        try {
            const listing = listingService_js_1.ListingService.getListing();
            res.status(200).json({
                success: true,
                data: listing
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Failed to retrieve listing information'
            });
        }
    }
    static getPhotos(req, res) {
        try {
            const category = req.query.category;
            const photos = listingService_js_1.ListingService.getPhotos(category);
            const categories = listingService_js_1.ListingService.getCategories();
            res.status(200).json({
                success: true,
                data: {
                    photos,
                    categories,
                    total: photos.length
                }
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Failed to retrieve photo gallery'
            });
        }
    }
    static getReviews(req, res) {
        try {
            const reviewsData = listingService_js_1.ListingService.getReviews();
            res.status(200).json({
                success: true,
                data: reviewsData
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Failed to retrieve reviews'
            });
        }
    }
}
exports.ListingController = ListingController;
