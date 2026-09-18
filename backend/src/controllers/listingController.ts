import { Request, Response } from 'express';
import { ListingService } from '../services/listingService.js';

export class ListingController {
  public static getListing(req: Request, res: Response): void {
    try {
      const listing = ListingService.getListing();
      res.status(200).json({
        success: true,
        data: listing
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve listing information'
      });
    }
  }

  public static getPhotos(req: Request, res: Response): void {
    try {
      const category = req.query.category as string | undefined;
      const photos = ListingService.getPhotos(category);
      const categories = ListingService.getCategories();
      res.status(200).json({
        success: true,
        data: {
          photos,
          categories,
          total: photos.length
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve photo gallery'
      });
    }
  }

  public static getReviews(req: Request, res: Response): void {
    try {
      const reviewsData = ListingService.getReviews();
      res.status(200).json({
        success: true,
        data: reviewsData
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve reviews'
      });
    }
  }
}
