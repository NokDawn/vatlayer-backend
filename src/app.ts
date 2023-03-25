import express from 'express';

import { VatLayerServer } from './server';

class App {
  public initialize(): void {
    const app = express();
    const server = new VatLayerServer(app);
    server.start();
  }
}

const app = new App();
app.initialize();
