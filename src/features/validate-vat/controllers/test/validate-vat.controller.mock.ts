import { Response } from 'express';

export const validateVatMockRequest = (body: IValidateVatMock) => ({
  body,
});

export const validateVatMockResponse = (): Response => {
  const res = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

export interface IValidateVatMock {
  vatNumber?: string;
}
