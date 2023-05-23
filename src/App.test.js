import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Home page when the path is "/"', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
