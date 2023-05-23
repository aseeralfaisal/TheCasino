import React from 'react';
import { render, screen } from '@testing-library/react';
import GameGrid, { RenderGridItems } from './GameGrid';

jest.mock('../../service/Api.service', () => ({
  get: jest.fn(() => Promise.resolve({ data: [] })),
}));

describe('GameGrid', () => {
  it('renders loading message while fetching data', () => {
    render(<GameGrid />);
    expect(screen.getByLabelText('Loading...')).toBeInTheDocument();
  });

  it('renders game grid items', () => {
    const gamesData = [
      { id: 1, name: 'Game 1', categories: ['top'] },
      { id: 2, name: 'Game 2', categories: ['new'] },
    ];
    const jackpotsData = [
      { game: 1, amount: 100 },
      { game: 2, amount: 200 },
    ];

    render(
      <RenderGridItems
        activeHeader="top"
        gamesData={gamesData}
        jackpotsData={jackpotsData}
      />
    );

  });

});
