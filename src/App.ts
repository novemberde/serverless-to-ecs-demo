import * as express from 'express'


export default class App {
  app: express.Application;

  constructor() {
    this.app = express();

    this.app.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.send('hello world');
    });

    this.app.get('/test', (req: express.Request, res: express.Response, next: express.NextFunction) => {
      // throw new Error('hi');
      res.send('TEST');
    });
  }
}

