import { Request, Response } from 'express';
import { joiValidation } from '../../../shared/globals/decorators/joi-validation.decorator';
import { InternalServerError } from '../../../shared/globals/helpers/error-handler';
import validateVat, { ViesValidationResponse } from 'validate-vat-ts';
import { CountryCodes } from '../interfaces/validate-vat.interface';
import { validateVatSchema } from '../schemes/validate-vat.schema';
import NodeCache from 'node-cache';
import HTTP_STATUS from 'http-status-codes';

const validationVatCache = new NodeCache();

export class ValidateVatController {
  @joiValidation(validateVatSchema)
  public async read(req: Request, res: Response): Promise<void> {
    const { vatNumber } = req.body;

    const cachedResponse = validationVatCache.get(vatNumber);

    if (cachedResponse) {
      res.status(HTTP_STATUS.OK).json({
        status: 'ok',
        data: cachedResponse,
      });
      return;
    }

    const response: ViesValidationResponse = await validateVat(
      CountryCodes.Poland,
      vatNumber
    );

    if (!response) {
      throw new InternalServerError('Something went wrong');
    }

    validationVatCache.set(vatNumber, response);

    res.status(HTTP_STATUS.OK).json({
      status: 'ok',
      data: response,
    });
  }
}
