import { FieldValidator } from 'formik';

export enum FormValidation {
  REQUIRED = 'REQUIRED',
}

export enum FormValidationWithValue {
  MIN_LENGTH = 'MIN_LENGTH',
}

type Validator = {
  errorMessage: (fieldName: string) => string;
  validator: (value: unknown, comparativeValue?: unknown) => boolean;
};

type ValidatorObject = {
  [key in FormValidation | FormValidationWithValue]: Validator;
};

type FormValidationObject = {
  validator: FormValidationWithValue;
  value: unknown;
};

export const formValidations = (
  fieldName: string,
  validations: (FormValidation | FormValidationObject)[],
): FieldValidator => {
  return (currentValue) => {
    let errorMessage = '';
    validations.every((validation) => {
      const validationName = isFormValidationObject(validation) ? validation.validator : validation;
      const validatorObj = validatorObject[validationName] as Validator;
      const result = isFormValidationObject(validation)
        ? validatorObj.validator(currentValue, validation.value)
        : validatorObj.validator(currentValue);

      if (!result) errorMessage = validatorObj.errorMessage(fieldName);

      return result;
    });

    return errorMessage;
  };
};

const validatorObject: ValidatorObject = {
  [FormValidation.REQUIRED]: {
    errorMessage: (fieldName: string) => `${fieldName} is required`,
    validator: (value) => !!value,
  },
  [FormValidationWithValue.MIN_LENGTH]: {
    errorMessage: (fieldName: string) => `${fieldName} require 3 characters minimum`,
    validator: (value, comparativeValue) => (value as string).length >= (comparativeValue as number),
  },
};

function isFormValidationObject(validation: FormValidation | FormValidationObject): validation is FormValidationObject {
  return (validation as FormValidationObject).validator !== undefined;
}
