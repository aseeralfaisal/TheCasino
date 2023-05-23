import React from 'react';
import { render, screen } from '@testing-library/react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

jest.mock('./pages/Home', () => jest.fn(() => <div>Home Page</div>));

describe('App', () => {
  it('renders Home component for the root path', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });
});
