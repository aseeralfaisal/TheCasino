import React, { useContext } from 'react';
import HeaderContext from '../../contexts/Header.context';
import { Container, HeaderTitle } from './Header.styles';

const Header = () => {
  const categories = [
    'top games', 'new games', 'slots', 'jackpots',
    'live', 'blackjack', 'roulette', 'table', 'poker', 'other'
  ];

  const { activeHeader, setActiveHeader } = useContext(HeaderContext);
  const isActiveHeader = (category) => category.split(' ')[0] === activeHeader;
  const handleHeaderClick = (category) => setActiveHeader(category.split(' ')[0]);

  return (
    <Container>
      {categories.map((category, index) => (
        <HeaderTitle
          key={index}
          active={isActiveHeader(category) ? 'active' : ''}
          onClick={() => handleHeaderClick(category)}
        >
          {category}
        </HeaderTitle>
      ))}
    </Container>
  );
};

export default Header;
