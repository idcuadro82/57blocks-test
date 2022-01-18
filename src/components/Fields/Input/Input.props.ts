import { FieldAttributes } from 'formik';

export type CustomInput = {
  label?: string;
  error?: boolean;
  message?: string;
};

export type InputFieldProps = FieldAttributes<CustomInput>;
