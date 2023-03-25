import { Router } from 'express';
import { ValidateVatController } from '../controllers/validate-vat.controller';

class ValidateVatRoutes {
  private router: Router;

  constructor() {
    this.router = Router();
  }

  public routes(): Router {
    this.router.post('/validate-vat', ValidateVatController.prototype.read);

    return this.router;
  }
}

export const validateVatRoutes = new ValidateVatRoutes();
