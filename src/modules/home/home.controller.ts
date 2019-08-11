import express from 'express';
import { DB } from '../db/db';
import { IController } from '../types/controller.interface';
import { IDAO } from '../types/dao.interface';
import { ToursDAO } from '../tours/tours.dao';

class HomeControllerConstruct {
  public readonly path: string;
}
class HomeController implements IController {
  public path: string;
  public router: express.Router;
  public dao: IDAO;
  public db: DB;
  public exp: express.Application;
  private _toursDAO: ToursDAO;

  constructor(construct: HomeControllerConstruct) {
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
    this._toursDAO = new ToursDAO({
      db: this.db
    });
  }

  public initRoutes(): void {
    this.exp.use('/', this.router);
    this.router = express.Router();
    this.router.get(this.path, (req: express.Request, res: express.Response) => {
      console.log('Home Index Route');
    });
  }
}

export {
  HomeController
};
