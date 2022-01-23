import { LoginData } from 'src/models';
export declare type AuthProviderValues = {
    isLoggedIn: boolean;
    login: (loginData: LoginData) => void;
    logout: () => void;
};
export declare const AUTH_CONTEXT_DEFAULT_VALUES: AuthProviderValues;
