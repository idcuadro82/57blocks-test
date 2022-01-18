import { LoginData } from 'src/models';

class AuthService {
  private static instance: AuthService;

  public static getInstance(): AuthService {
    this.instance = AuthService.instance || new AuthService();
    return this.instance;
  }

  public login = async (loginData: LoginData): Promise<boolean> => {
    return new Promise((resolve) => {
      resolve(true);
    });
  };

  public logout = async (): Promise<boolean> => {
    return new Promise((resolve) => {
      resolve(false);
    });
  };
}

export default AuthService.getInstance();
