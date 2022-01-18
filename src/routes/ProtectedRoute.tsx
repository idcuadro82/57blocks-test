import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'src/context';
import { ROUTES } from './routes';

const PrivateRoute: FC = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <>{children}</> : <Navigate to={ROUTES.login} />;
};

export default PrivateRoute;
