import React, { createContext, FC, useContext, useState } from 'react';
import { LoginData } from 'src/models';
import { AuthService } from 'src/services';
import { Auth, DEFAULT_VALUES as AUTH_CONTEXT_DEFAULT_VALUES } from './AuthProvider.model';

export const AuthContext = createContext<Auth>(AUTH_CONTEXT_DEFAULT_VALUES);

const AuthProvider: FC = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

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

export const useAuth = (): Auth => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be inside AuthProvider');
  }
  return context;
};

export default AuthProvider;
