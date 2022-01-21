import React, { createContext, FC, useContext, useState } from 'react';
import { LoginData } from 'src/models';
import { AuthService } from 'src/services';
import { AuthProviderValues, AUTH_CONTEXT_DEFAULT_VALUES } from './AuthProvider.props';

export const AuthContext = createContext<AuthProviderValues>(AUTH_CONTEXT_DEFAULT_VALUES);

const AuthProvider: FC = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(AuthService.isLoggedIn());

  const login = async (loginData: LoginData) => {
    const loggedIn = await AuthService.login(loginData);
    setIsLoggedIn(loggedIn);
  };

  const logout = async () => {
    const loggedOut = await AuthService.logout();
    setIsLoggedIn(loggedOut);
  };

  return <AuthContext.Provider value={{ isLoggedIn, login, logout }} {...props} />;
};

export const useAuth = (): AuthProviderValues => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be inside AuthProvider');
  }
  return context;
};

export default AuthProvider;
