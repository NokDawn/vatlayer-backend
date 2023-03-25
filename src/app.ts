import express from 'express';

import { VatLayerServer } from './server';
import { config } from './config';

class App {
  public initialize(): void {
    this.loadConfig();
    const app = express();
    const server = new VatLayerServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
  }
}

const app = new App();
app.initialize();
