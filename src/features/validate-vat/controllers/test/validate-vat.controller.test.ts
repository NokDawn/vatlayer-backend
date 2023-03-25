import { Request, Response } from 'express';
import { CustomError } from '../../../../shared/globals/helpers/error-handler';
import { validationVatController } from '../validate-vat.controller';
import {
  validateVatMockRequest,
  validateVatMockResponse,
} from './validate-vat.controller.mock';

describe('Validate-vat', () => {
  it('should throw an error if vatNumber is not defined', () => {
    const req = validateVatMockRequest({}) as Request;
    const res: Response = validateVatMockResponse();
    validationVatController.read(req, res).catch((error: CustomError) => {
      expect(error.message).toBe('VAT number is required');
    });
  });

  it('should throw an error if vatNumber is less than 10 digits', () => {
    const req = validateVatMockRequest({
      vatNumber: '123456789',
    }) as Request;
    const res: Response = validateVatMockResponse();
    validationVatController.read(req, res).catch((error: CustomError) => {
      expect(error.message).toBe('VAT number must be 10 digits');
    });
  });

  it('should throw an error if vatNumber is more than 10 digits', () => {
    const req = validateVatMockRequest({
      vatNumber: '12345678901',
    }) as Request;
    const res: Response = validateVatMockResponse();
    validationVatController.read(req, res).catch((error: CustomError) => {
      expect(error.message).toBe('VAT number must be 10 digits');
    });
  });

  it('should throw an error if vatNumber is not a number', () => {
    const req = validateVatMockRequest({
      vatNumber: 'abcdefghij',
    }) as Request;
    const res: Response = validateVatMockResponse();
    validationVatController.read(req, res).catch((error: CustomError) => {
      expect(error.message).toBe('VAT number must be a number');
    });
  });

  it('should send data if vatNumber is ok', () => {
    const req = validateVatMockRequest({
      vatNumber: '1234567890',
    }) as Request;
    const res: Response = validateVatMockResponse();
    validationVatController.read(req, res).then(() => {
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        status: 'ok',
      });
    });
  });
});
