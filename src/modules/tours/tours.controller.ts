import express, { response } from 'express';
import { DB } from '../db/db';
import { ToursDAO } from './tours.dao';
import { IController } from '../types/controller.interface';

class ToursControllerConstruct {
  public readonly path: string;
}
class ToursController implements IController {
  public path = '/tours';
  public router: express.Router;
  public dao: ToursDAO;
  public db: DB;
  public exp: express.Application;

  constructor(construct: ToursControllerConstruct) {
    this.path = construct.path;
  }

  public init(params: {
    readonly db: DB;
    readonly exp: express.Application;
  }): void {
    this.db = params.db;
    this.exp = params.exp;
  }

  public initDAOs(): void {
    this.dao = new ToursDAO({
      db: this.db
    });
  }

  public initRoutes(): void {
    this.exp.use('/', this.router);
    this.router = express.Router();
    this.router.get(this.path, this._listTours);
    this.router.post(this.path, this._createTour);
  }

  private _getTour(req: express.Request, res: express.Response): void {}

  private _listTours(req: express.Request, res: express.Response): void {
    response.send([]);
  }

  private _createTour(req: express.Request, res: express.Response): void {}
}

export { ToursController };
