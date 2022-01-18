import React, { FC } from 'react';
import { Form, Formik, FormikConfig } from 'formik';
import { InputField } from 'src/components';
import { LoginData } from 'src/models';
import { FormValidationOptions, formValidations } from 'src/utils';

import './LoginForm.scss';

const LoginForm: FC<FormikConfig<LoginData>> = (props) => {
  return (
    <Formik {...props}>
      {({ errors }) => {
        return (
          <Form noValidate className="login-form">
            <div className="login-form-fields">
              <InputField
                required
                error={!!errors?.username}
                id="username"
                label="Username"
                message={errors?.username}
                name="username"
                placeholder="Enter your username"
                validate={usernameValidator()}
              />
              <InputField
                required
                error={!!errors?.password}
                id="password"
                label="Password"
                message={errors?.password}
                name="password"
                placeholder="Enter your password"
                type="password"
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
  return formValidations('Username', [FormValidationOptions.REQUIRED]);
};

const passwordValidator = () => {
  return formValidations('Password', [FormValidationOptions.REQUIRED]);
};

export default LoginForm;
