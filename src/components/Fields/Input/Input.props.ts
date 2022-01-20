import { FieldAttributes } from 'formik';

export type CustomInput = {
  error?: boolean;
  errorMessage?: string;
  label?: string;
  touched?: boolean;
};

export type InputFieldProps = FieldAttributes<CustomInput>;
