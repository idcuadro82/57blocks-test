import { LoginData } from 'src/models';

export type Auth = {
  isLoggedIn: boolean;
  login: (loginData: LoginData) => void;
  logout: () => void;
};

export const DEFAULT_VALUES: Auth = {
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
};
