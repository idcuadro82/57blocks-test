import React, { FC } from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthProvider, useAuth } from 'src/context';
import { LoginData } from 'src/models';

const credentialsMock: LoginData = {
  username: 'ivancho',
  password: '123456',
};

jest.mock('src/services/AuthService', () => {
  return {
    isLoggedIn: jest.fn().mockImplementation(() => false),
    login: jest.fn().mockImplementation(() => Promise.resolve(true)),
    logout: jest.fn().mockImplementation(() => Promise.resolve(false)),
  };
});

const TestComponent: FC = () => {
  const { isLoggedIn, login } = useAuth();
  return isLoggedIn ? (
    <div data-testid="logged-in">Logged In!!</div>
  ) : (
    <div data-testid="logged-out">
      Logged Out!!
      <button data-testid="login-button" onClick={() => login(credentialsMock)} />
    </div>
  );
};

describe('Auth provider verification', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('01 - should be initialized with isLogginIn in false', () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
    );
    expect(screen.getByTestId('logged-out')).toBeTruthy();
  });

  it('02 - should to change isLogginIn to true when login callback is fired', async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
    );
    userEvent.click(screen.getByTestId('login-button'));
    await waitFor(() => {
      expect(screen.getByTestId('logged-in')).toBeTruthy();
    });
  });
});
