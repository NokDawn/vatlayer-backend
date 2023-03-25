import { Request, Response } from 'express';
import validateVat, { ViesValidationResponse } from 'validate-vat-ts';
import { CountryCodes } from '../interfaces/validate-vat.interface';

export class ValidateVatController {
  public async read(req: Request, res: Response): Promise<void> {
    const { vatNumber } = req.body;
    console.log({ vatNumber });

    const response: ViesValidationResponse = await validateVat(
      CountryCodes.Poland,
      vatNumber
    );
    console.log({ response });
    res.end();
  }
}
