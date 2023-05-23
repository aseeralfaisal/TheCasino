import React, { useContext, useState } from 'react';
import HeaderContext from '../../contexts/Header.context';
import { Container, HeaderTitle, MenuBar } from './Header.styles';

const Header = () => {
  const categories = [
    'top games', 'new games', 'slots', 'jackpots',
    'live', 'blackjack', 'roulette', 'table', 'poker', 'other'
  ];

  const { activeHeader, setActiveHeader } = useContext(HeaderContext);
  const isActiveHeader = (category) => category.split(' ')[0] === activeHeader;
  const handleHeaderClick = (category) => setActiveHeader(category.split(' ')[0]);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <Container onClick={toggleMenu}>
        <MenuBar>
          {isMenuOpen ? '✕' : '☰'}
        </MenuBar>
      </Container>
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
