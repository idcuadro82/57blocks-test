import { FieldValidator } from 'formik';

export enum FormValidationOptions {
  REQUIRED = 'REQUIRED',
}

type Validator = {
  errorMessage: (fieldName: string) => string;
  validator: (value: unknown) => boolean;
};

type ValidatorObject = {
  [key in FormValidationOptions]: Validator;
};

export const formValidations = (fieldName: string, validations: FormValidationOptions[]): FieldValidator => {
  return (value) => {
    const validation = validations.find((validation) => validatorObject[validation]);
    const validatorObj = validation ? (validatorObject[validation] as Validator) : null;
    return validatorObj && !validatorObj.validator(value) ? validatorObj.errorMessage(fieldName) : '';
  };
};

const validatorObject: ValidatorObject = {
  [FormValidationOptions.REQUIRED]: {
    errorMessage: (fieldName: string) => `${fieldName} is required`,
    validator: (value: unknown) => !!value,
  },
};
