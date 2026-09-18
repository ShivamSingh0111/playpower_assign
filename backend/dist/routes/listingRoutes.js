"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listingRouter = void 0;
const express_1 = require("express");
const listingController_js_1 = require("../controllers/listingController.js");
exports.listingRouter = (0, express_1.Router)();
exports.listingRouter.get('/listing', listingController_js_1.ListingController.getListing);
exports.listingRouter.get('/listing/photos', listingController_js_1.ListingController.getPhotos);
exports.listingRouter.get('/listing/reviews', listingController_js_1.ListingController.getReviews);
