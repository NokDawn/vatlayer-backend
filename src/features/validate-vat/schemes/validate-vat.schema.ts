import Joi, { ObjectSchema } from 'joi';

const validateVat: ObjectSchema = Joi.object().keys({
  vatNumber: Joi.number().required().min(10).max(10).messages({
    'number.base': 'VAT number must be a number',
    'number.min': 'VAT number must be 10 digits',
    'number.max': 'VAT number must be 10 digits',
    'any.required': 'VAT number is required',
  }),
});

export { validateVat };
