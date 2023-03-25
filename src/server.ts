import {
  Application,
  json,
  urlencoded,
  Response,
  Request,
  NextFunction,
} from 'express';
import http from 'http';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import cookieSession from 'cookie-session';
import compression from 'compression';
import HTTP_STATUS from 'http-status-codes';
import 'express-async-errors';

export class VatLayerServer {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  public start(): void {
    this.securityMiddleware(this.app);
    this.standardMiddleware(this.app);
    this.routeMiddleware(this.app);
    this.globalErrorHandler(this.app);
    this.startServer(this.app);
  }

  private securityMiddleware(app: Application): void {
    app.use(
      cookieSession({
        name: 'session',
        keys: ['test1', 'test2'],
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
        secure: false, // change to true if https
      })
    );
    app.use(hpp());
    app.use(helmet());
    app.use(
      cors({
        origin: '*', // change to url after deploy
        credentials: true,
        optionsSuccessStatus: 200,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      })
    );
  }

  private standardMiddleware(app: Application): void {
    app.use(compression());
    app.use(json({ limit: '50mb' }));
    app.use(urlencoded({ extended: true, limit: '50mb' }));
  }

  private routeMiddleware(app: Application): void {}

  private globalErrorHandler(app: Application): void {}

  private startServer(app: Application): void {}
  private startHttpServer(httpServer: http.Server): void {}
}
