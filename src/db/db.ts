import pg from 'pg';
import { Environment } from '../../env/env';

class DBConstruct {
  public port: number;
}
class DB extends DBConstruct {
  public pool: pg.Pool;
  constructor(construct: DBConstruct) {
    super();
    Object.keys(construct)
      .forEach(k => {
        this[k] = construct[k];
      });

    this._initPool();
  }

  private _initPool(): void {
    this.pool = new pg.Pool({
      user: Environment.env.db.user,
      host: Environment.env.db.host,
      database: Environment.env.db.database,
      password: Environment.env.db.password,
      port: Environment.env.db.port,
    })
  }
}

export {
  DB
};
