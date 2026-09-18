import { Router } from 'express';
import { ListingController } from '../controllers/listingController.js';

export const listingRouter = Router();

listingRouter.get('/listing', ListingController.getListing);
listingRouter.get('/listing/photos', ListingController.getPhotos);
listingRouter.get('/listing/reviews', ListingController.getReviews);
