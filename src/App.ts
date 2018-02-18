import * as express from 'express';
import todo from './routes/todo';


export default class App {
  app: express.Application;

  constructor() {
    this.app = express();

    this.app.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.send('hello world');
    });
    this.app.use('/todo', todo);

    this.app.use('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
      return res.status(404).json({
        message: `${req.url} is not found.`
      });
    });
    this.app.use((err, req: express.Request, res: express.Response, next: express.NextFunction) => {
      return res.status(500).json({
        message: `Internal server error.`
      });
    });
  }
}

