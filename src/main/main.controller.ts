import express from 'express';

class MainController {
  public static app: express.Application;

  public static init(params: {
    readonly app: express.Application;
  }): void {
    this.app = params.app;
  }

  public static getIndex(req: express.Request, res: express.Response): void {
    res.render('pages/index');
  }

  public static redirectToIndex(req: express.Request, res: express.Response): void {
    res.redirect('/');
  }

  public get404(req: express.Request, res: express.Response): void {
    res.render('pages/404');
  }
}

export { MainController };
