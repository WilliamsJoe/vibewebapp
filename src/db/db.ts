import pg from 'pg';

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
      user: 'username',
      host: 'hsot',
      database: 'database',
      password: 'password',
      port: this.port,
    })
  }
}

export {
  DB
};
