import React from 'react';
import { cleanup, render } from '@testing-library/react';
import App from '../App';

jest.mock('src/services/Pokemon/PokemonService', () => {
  return {
    getPokemonList: jest.fn().mockImplementation(() => Promise.resolve([])),
    getPokemonListByUrl: jest.fn().mockImplementation(() => Promise.resolve([])),
  };
});

describe('App component verification', () => {
  beforeEach(() => {});

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('should be rendered', () => {
    const view = render(<App />);
    expect(view).toBeTruthy();
  });
});
