import { Router } from 'express';
import { validationVatController } from '../controllers/validate-vat.controller';

class ValidateVatRoutes {
  private router: Router;

  constructor() {
    this.router = Router();
  }

  public routes(): Router {
    this.router.post('/validate-vat', validationVatController.read);

    return this.router;
  }
}

export const validateVatRoutes = new ValidateVatRoutes();
