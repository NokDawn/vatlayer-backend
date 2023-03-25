import Joi, { ObjectSchema } from 'joi';

const validateVatSchema: ObjectSchema = Joi.object().keys({
  vatNumber: Joi.number().required().min(1000000000).max(9999999999).messages({
    'number.base': 'VAT number must be a number',
    'number.min': 'VAT number must be 10 digits',
    'number.max': 'VAT number must be 10 digits',
    'any.required': 'VAT number is required',
  }),
});

export { validateVatSchema };
