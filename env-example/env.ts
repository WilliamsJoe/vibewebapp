interface IEnv {
  readonly db: {
    readonly user: string;
    readonly host: string;
    readonly database: string;
    readonly password: string;
    readonly port: number;
  };
};

class Environment {
  private static _local: IEnv;
  private static _dev: IEnv;
  private static _prod: IEnv;
  public static env: IEnv;

  public static init(): void {
    this._local = {
      db: {
        user: 'username',
        host: 'host',
        database: 'database',
        password: 'password',
        port: 0,
      }
    };

    this._dev = {
      db: {
        user: 'username',
        host: 'host',
        database: 'database',
        password: 'password',
        port: 0,
      }
    };

    this._prod = {
      db: {
        user: 'username',
        host: 'host',
        database: 'database',
        password: 'password',
        port: 0,
      }
    };

    switch(process.env.NODE_ENV || 'dev') {
      case 'local':
        this.env = this._local;
        break;
      case 'production':
        this.env = this._prod;
        break;
      case 'dev':
      default:
        this.env = this._dev
        break;
    } 
  }
}

export {
  Environment
};
