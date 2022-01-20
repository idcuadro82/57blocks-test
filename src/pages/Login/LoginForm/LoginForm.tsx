import React, { FC } from 'react';
import { Form, Formik, FormikConfig, FormikProps } from 'formik';
import { InputField, PasswordField } from 'src/components/Fields';
import { LoginData } from 'src/models';
import { FormValidation, formValidations, FormValidationWithValue } from 'src/utils';

import './LoginForm.scss';

const LoginForm: FC<FormikConfig<LoginData>> = (props) => {
  return (
    <Formik {...props}>
      {({ errors, touched }: FormikProps<LoginData>) => {
        return (
          <Form noValidate className="login-form">
            <div className="login-form-fields">
              <InputField
                required
                error={!!errors?.username}
                errorMessage={errors?.username}
                id="username"
                label="Username"
                name="username"
                placeholder="Enter your username"
                touched={touched.username}
                validate={usernameValidator()}
              />
              <PasswordField
                required
                error={!!errors?.password}
                errorMessage={errors?.password}
                id="password"
                label="Password"
                name="password"
                placeholder="Enter your password"
                touched={touched.password}
                validate={passwordValidator()}
              />
            </div>
            <button className="button-primary" type="submit">
              Sign in
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

const usernameValidator = () => {
  return formValidations('Username', [FormValidation.REQUIRED]);
};

const passwordValidator = () => {
  return formValidations('Password', [
    FormValidation.REQUIRED,
    { validator: FormValidationWithValue.MIN_LENGTH, value: 6 },
  ]);
};

export default LoginForm;
