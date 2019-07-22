import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import Routes from './routes/formRoutes';

class App {
  public app: express.Application = express();
  public routeForm: Routes = new Routes();

  constructor() {
    this.config();
    this.routeForm.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(
      cors({
        origin: true,
        credentials: true
      })
    );
  }
}

export default new App().app;
