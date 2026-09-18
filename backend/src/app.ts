import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { listingRouter } from './routes/listingRoutes.js';

export function createApp(): Express {
  const app = express();

  // Standard middleware
  app.use(cors({
    origin: '*',
    methods: ['GET', 'OPTIONS']
  }));
  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Listing routes
  app.use('/api', listingRouter);

  // 404 handler
  app.use((req: Request, res: Response) => {
    res.status(404).json({ success: false, message: 'Resource not found' });
  });

  // Global error handler
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('Unhandled Server Error:', err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  });

  return app;
}
