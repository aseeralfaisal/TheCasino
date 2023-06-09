import React, { useContext, useState, useEffect } from 'react';
import HeaderContext from '../../contexts/Header.context';
import { Container, HeaderTitle, MenuBar } from './Header.styles';

const Header = () => {
  const categories = [
    'top games', 'new games', 'slots', 'jackpots',
    'live', 'blackjack', 'roulette', 'table', 'poker', 'other'
  ];
  
  const windowBreakpoint = 927;

  const { activeHeader, setActiveHeader } = useContext(HeaderContext);
  const isActiveHeader = (category) => category.split(' ')[0] === activeHeader;
  const handleHeaderClick = (category) => setActiveHeader(category.split(' ')[0]);

  const [isMenuOpen, setMenuOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    if (windowWidth <= windowBreakpoint) {
      setMenuOpen(!isMenuOpen);
    }
  };

  const categoryItems = categories.map((category, index) => (
    <HeaderTitle
      key={index}
      active={isActiveHeader(category) ? 'active' : ''}
      onClick={() => handleHeaderClick(category)}
    >
      {category}
    </HeaderTitle>
  ));

  return (
    <Container>
      <Container onClick={toggleMenu}>
        <MenuBar>
          {isMenuOpen ? '✕' : '☰'}
        </MenuBar>
      </Container>
      {windowWidth <= windowBreakpoint ? (isMenuOpen && categoryItems) : categoryItems}
    </Container>
  );
};

export default Header;
