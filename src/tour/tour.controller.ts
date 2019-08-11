import express from 'express';
import { TourDAO } from './tour.dao';

class TourController {
  public static app: express.Application;

  public static init(params: {
    readonly app: express.Application;
  }): void {
    this.app = params.app;
  }

  public static getAllTours(req: express.Request, res: express.Response): void {
    console.log('getAll');
    res.render('tours');
  }

  public static getAllToursByCategory(req: express.Request, res: express.Response): void {
    console.log('getAllToursByCategory');
    res.render('tours');
  }

  public static getTourById(req: express.Request, res: express.Response): void {
    TourDAO.getTourById(req.body.id);
  }

  public static createTour(req: express.Request, res: express.Response): void {}

  public static updateTour(req: express.Request, res: express.Response): void { }

  public static deleteTour(req: express.Request, res: express.Response): void { }
}

export { TourController };
