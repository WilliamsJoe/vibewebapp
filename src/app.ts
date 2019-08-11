import express from 'express';
import { DB } from './db/db';
import path from 'path';
import exphbs from 'express-handlebars';
import { TourController } from './tour/tour.controller';
import { TourDAO } from './tour/tour.dao';
import { RouteHandler } from './route.handler';
// import { IndexController } from './controllers';
// const app = express();

// app.set('views', path.join(__dirname, '../src/views'));
// app.engine('hbs', exphbs({
//   extname: 'hbs',
//   layoutsDir: path.join(__dirname, '../src/views/layouts'),
//   defaultLayout: 'main.hbs',
//   partialsDir: 'partials'
// }));
// app.set('view engine', 'hbs');

// app.listen(8082, (): void => {
//   console.log('Example App');
// });


// // Initialize Middleware

// // Initialize Controllers
// app.use('/', new IndexController().router);
// // Initialize Database

class AppConstruct {
  public port: number;
}
class App {
  private _db: DB;
  public app: express.Application;
  public port: number;

  constructor(construct: AppConstruct) {
    this.app = express();
    this.port = construct.port;
    this._db = new DB({
      port: this.port
    });

    this._initViews();
    this._initControllers();
    this._initDAOs();
    this._initMiddleware();
    this._initRouter();
  }


  private _initViews(): void {
    this.app.set('views', path.join(__dirname, '../src/views'));
    this.app.engine('hbs', exphbs({
      extname: 'hbs',
      layoutsDir: path.join(__dirname, '../src/views/layouts'),
      defaultLayout: 'main.hbs',
      partialsDir: 'partials'
    }));
    this.app.set('view engine', 'hbs');
  }

  private _initControllers(): void {
    TourController.init({
      app: this.app
    });
  }

  private _initDAOs(): void {
    TourDAO.init({
      db: this._db
    })
  }

  private _initMiddleware(): void {}

  private _initRouter(): void {
    RouteHandler.init({app: this.app});
    RouteHandler.initRoutes();
  }

  public start(): void {
    this.app.listen(this.port, (): void => {
      console.log('Example App');
    });
  }
}

export {
  App
};
