import { FieldAttributes } from 'formik';
export declare type CustomInput = {
    error?: boolean;
    errorMessage?: string;
    label?: string;
    touched?: boolean;
};
export declare type InputFieldProps = FieldAttributes<CustomInput>;
