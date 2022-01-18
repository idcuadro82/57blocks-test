import React, { FC } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context';
import { LoginPage } from './pages';
import { ProtectedRoute, PublicRoute, ROUTES } from './routes';

import './App.scss';

const App: FC = () => {
  return (
    <AuthProvider>
      <div className="app-container">
        <Router>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <div>Home!!</div>
                </ProtectedRoute>
              }
              path={ROUTES.home}
            />
            <Route
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
              path={ROUTES.login}
            />
            <Route element={<Navigate to={ROUTES.home} />} path="*" />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
};

export default App;
