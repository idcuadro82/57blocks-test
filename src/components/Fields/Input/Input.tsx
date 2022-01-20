import React, { FC } from 'react';
import clsx from 'clsx';
import { Field } from 'formik';
import { InputFieldProps } from './Input.props';

const InputField: FC<InputFieldProps> = ({ error, errorMessage, label, touched, ...fieldProps }) => {
  return (
    <div className="form-field">
      {label && (
        <label className={clsx('form-field-label')} htmlFor={fieldProps.name}>
          {label} <span className="form-field-error">*</span>
        </label>
      )}
      <Field className={clsx('form-field-control', { 'form-field-control-error': touched && error })} {...fieldProps} />
      {touched && errorMessage && (
        <span className={clsx('form-field-message', { 'form-field-error': error })}>{errorMessage}</span>
      )}
    </div>
  );
};

export default InputField;
