import express from 'express';
import { TourController } from './tour/tour.controller';

class RouteHandler {
  public static router = express.Router();
  public static app: express.Application;

  public static init(params: {
    app: express.Application
  }) {
    this.app = params.app;
    this.app.use('/', this.router);
  }

  public static initRoutes(): void {
    this.router.get('/tours', TourController.getAllTours);
  }
}

export {
  RouteHandler
};
