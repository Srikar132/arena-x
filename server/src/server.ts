import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import config from './config/index';
import { AuthController } from './controllers/auth-controllers';
import { NotFoundError } from './errors/app-error';
import { errorHandler } from './middlewares/error-handler';

class AppServer extends Server {
  private readonly logger = new Logger();

  constructor() {
    super(config.env === 'development');
    this.setupServer();
    this.setupControllers();
    this.setupErrorHandling();
  }

  private setupServer(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private setupControllers(): void {
    const authController = new AuthController();
    super.addControllers([authController]);
  }

  private setupErrorHandling(): void {
    this.app.all('*', (req, _res, next) => {
      next(new NotFoundError(`Route ${req.originalUrl} not found`));
    });

    // @ts-ignore
    this.app.use(errorHandler);
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      this.logger.info(`Server listening on port : ${port}`);
    });
  }
}

const server = new AppServer();
const port = Number(config.port);
server.start(port);
