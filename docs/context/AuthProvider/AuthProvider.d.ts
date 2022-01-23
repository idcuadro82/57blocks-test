import React, { FC } from 'react';
import { AuthProviderValues } from './AuthProvider.props';
export declare const AuthContext: React.Context<AuthProviderValues>;
declare const AuthProvider: FC;
export declare const useAuth: () => AuthProviderValues;
export default AuthProvider;
