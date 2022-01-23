import React, { FC } from 'react';
import { BrowserRouter as Router, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { AuthProvider, LoadingProvider, PokemonProvider } from './context';
import { DetailsPage, LoginPage, PokedexPage, PokemonPage } from './pages';
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
                  <ProtectedRoute>
                    <DetailsPage />
                  </ProtectedRoute>
                }
                path={ROUTES.details}
              />
              <Route
                element={
                  <PokemonProvider>
                    <ProtectedRoute>
                      <Outlet />
                    </ProtectedRoute>
                  </PokemonProvider>
                }
                path={ROUTES.home}
              >
                <Route element={<PokedexPage />} path="" />
                <Route element={<PokemonPage />} path=":pokemonID" />
              </Route>
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
