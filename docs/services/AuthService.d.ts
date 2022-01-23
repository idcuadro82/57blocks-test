import { LoginData } from 'src/models';
declare class AuthService {
    private static instance;
    static getInstance(): AuthService;
    isLoggedIn: () => boolean;
    getUserData: () => LoginData;
    login: (loginData: LoginData) => Promise<boolean>;
    logout: () => Promise<boolean>;
}
declare const _default: AuthService;
export default _default;
