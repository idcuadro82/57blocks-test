import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'src/context';
import { ROUTES } from './routes';

const PublicRoute: FC = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={ROUTES.home} /> : <>{children}</>;
};

export default PublicRoute;
