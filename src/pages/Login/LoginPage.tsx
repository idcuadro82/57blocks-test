import React, { FC } from 'react';
import { useAuth } from 'src/context';
import { DEFAULT_LOGIN_DATA, LoginData } from 'src/models';
import { LoginForm } from './LoginForm';

import './LoginPage.scss';

const LoginPage: FC = () => {
  const { login } = useAuth();

  return (
    <div className="login-container">
      <div className="login-form-container">
        <LoginForm initialValues={{ ...DEFAULT_LOGIN_DATA }} onSubmit={(values: LoginData) => login(values)} />
      </div>
    </div>
  );
};

export default LoginPage;
