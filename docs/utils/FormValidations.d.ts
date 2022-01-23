import { FieldValidator } from 'formik';
export declare enum FormValidation {
    REQUIRED = "REQUIRED"
}
export declare enum FormValidationWithValue {
    MIN_LENGTH = "MIN_LENGTH"
}
declare type FormValidationObject = {
    validator: FormValidationWithValue;
    value: unknown;
};
export declare const formValidations: (fieldName: string, validations: (FormValidation | FormValidationObject)[]) => FieldValidator;
export {};
