import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App component verification', () => {
  it('should be rendered', () => {
    const view = render(<App />);
    expect(view).toBeTruthy();
  });
});
