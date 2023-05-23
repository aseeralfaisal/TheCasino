import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Header from './Header';
import HeaderContext from '../../contexts/Header.context';

describe('Header', () => {
  it('should set active header when clicked', () => {
    const setActiveHeader = jest.fn();
    const activeHeader = 'top';

    render(
      <HeaderContext.Provider value={{ activeHeader, setActiveHeader }}>
        <Header />
      </HeaderContext.Provider>
    );

    fireEvent.click(screen.getByText('new games'));

    expect(setActiveHeader).toHaveBeenCalledWith('new');
  });

  it('should not apply "active" class to inactive headers', () => {
    const setActiveHeader = jest.fn();
    const activeHeader = 'top';

    render(
      <HeaderContext.Provider value={{ activeHeader, setActiveHeader }}>
        <Header />
      </HeaderContext.Provider>
    );

    const inactiveHeaderElement = screen.getByText('slots');
    expect(inactiveHeaderElement.classList.contains('active')).toBe(false);
  });
});
