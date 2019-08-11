import express from 'express';
import { DB } from '../db/db';
import { IDAO } from './dao.interface';

interface IController {
  dao?: IDAO;
  db?: DB;
  path: string;
  router: express.Router;
  init(params: {
    db: DB;
    exp: express.Application;
  }): void;
  initDAOs(): void;
  initRoutes(): void;
}

export {
  IController
};
