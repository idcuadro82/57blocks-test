import { LoginData } from 'src/models';

export type AuthProviderValues = {
  isLoggedIn: boolean;
  login: (loginData: LoginData) => void;
  logout: () => void;
};

export const AUTH_CONTEXT_DEFAULT_VALUES: AuthProviderValues = {
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
};
