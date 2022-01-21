import React, { FC, Suspense } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider, LoadingProvider, PokemonProvider } from './context';
import { DetailsPage, HomePage, LoginPage } from './pages';
import { ProtectedRoute, PublicRoute, ROUTES } from './routes';
import { AppNavbar } from './components';

import './App.scss';

const App: FC = () => {
  return (
    <AuthProvider>
      <LoadingProvider>
        <div className="app-container">
          <Router>
            <Routes>
              <Route
                element={
                  <PokemonProvider>
                    <ProtectedRoute>
                      <DetailsPage />
                    </ProtectedRoute>
                  </PokemonProvider>
                }
                path={ROUTES.details}
              />
              <Route
                element={
                  <PokemonProvider>
                    <ProtectedRoute>
                      <HomePage />
                    </ProtectedRoute>
                  </PokemonProvider>
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
            <AppNavbar />
          </Router>
        </div>
      </LoadingProvider>
    </AuthProvider>
  );
};

export default App;
