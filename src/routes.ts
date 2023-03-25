import { validateVatRoutes } from './features/validate-vat/routes/validate-vat.routes';
import { Application } from 'express';

const BASE_PATH = '/api/v1';

export default (app: Application) => {
  const routes = () => {
    app.use(BASE_PATH, validateVatRoutes.routes());
  };
  routes();
};
