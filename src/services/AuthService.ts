import { LoginData } from 'src/models';

const SESSION_DATA_KEY = 'sessionData';

class AuthService {
  private static instance: AuthService;

  public static getInstance(): AuthService {
    this.instance = AuthService.instance || new AuthService();
    return this.instance;
  }

  public isLoggedIn = (): boolean => !!this.getUserData();

  public getUserData = (): LoginData => {
    const sessionData = localStorage.getItem(SESSION_DATA_KEY);
    return sessionData ? JSON.parse(sessionData) : null;
  };

  public login = async (loginData: LoginData): Promise<boolean> => {
    return new Promise((resolve) => {
      localStorage.setItem(SESSION_DATA_KEY, JSON.stringify(loginData));
      resolve(true);
    });
  };

  public logout = async (): Promise<boolean> => {
    return new Promise((resolve) => {
      localStorage.clear();
      resolve(false);
    });
  };
}

export default AuthService.getInstance();
