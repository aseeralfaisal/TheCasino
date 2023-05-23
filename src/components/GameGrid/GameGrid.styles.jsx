import styled from 'styled-components'
import colors from '../../styles/colors.styles';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 40px;
    grid-gap: 40px; 

  @media (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 20px;
    grid-gap: 20px;
  }
`
const BoxContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Box = styled.div`
  position: relative;
`;

const Ribbon = styled.div`
  width: 100px;
  height: 100px;
  z-index: 20;
  overflow: hidden;
  position: absolute;
  filter: drop-shadow(0 0 10px ${colors.lime});
  ${({ position }) =>
    position === 'left' ? `left: -8px; top: -5px;` : `right: -8px; top: -5px;`}
  
  &::before,
  &::after {
    position: absolute;
    z-index: 10;
    content: '';
    display: block;
  }
`;

const RibbonText = styled.span`
  position: absolute;
  display: block;
  width: 160px;
  padding: 10px 0;
  background-color: ${colors.lime};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  color: ${colors.white};
  font: 700 14px/1 'Lato', sans-serif;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  text-align: center;
  ${({ position }) =>
    position === 'left'
      ? `
    top: 12px;
    left: -35px;
    transform: rotate(-45deg);
  `
      : `
    top: 20px;
    left: -18px;
    transform: rotate(45deg);
  `}
`;

const GameThumbnailContainer = styled.div`
  position: relative; 
  width: 240px; 
  height: 180px
`;

const PlayButtonContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  z-index: 5;
  color: ${colors.white};
`;

const HoverLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
`;

const GameThumbnail = styled.img`
    width: 240px;
    height: 180px;
    border-radius: 15px;
    object-fit: fill;
`
const GameLabel = styled.span`
  color: ${colors.white};
  cursor: context-menu;
`
const JackPotAmount = styled.span`
  position: absolute;
  color: ${colors.white};
  font-size: 18px;
  margin-top: 4px;
  font-weight: bold;
`;

const JackPotContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 20;
`;

export {
  GridContainer, GameThumbnail, Box, Ribbon, BoxContainer, GameLabel, JackPotAmount,
  JackPotContainer, GameThumbnailContainer, RibbonText, PlayButtonContainer, HoverLayer
}