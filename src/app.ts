import express from 'express';
import { DB } from './db/db';
import { IController } from './types/controller.interface';


import path from 'path';
import exphbs from 'express-handlebars';
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
  public controllers: IController[];
  public port: number;
}
class App {
  private _db: DB;
  public exp: express.Application;
  public port: number;

  constructor(construct: AppConstruct) {
    this.exp = express();
    this.port = construct.port;
    this._db = new DB({
      port: this.port
    });
    this._initControllers(construct.controllers);
  }

  private _initControllers(controllers: IController[]): void {
    controllers.forEach(c => {
      c.init({
        exp: this.exp,
        db: this._db
      });
    });
  }

  private _initMiddleware(): void {}


  public listen(): void {
    this.exp.listen(this.port);
  }
}

export {
  App
};
