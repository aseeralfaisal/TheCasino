import styled from 'styled-components';
import colors from '../../styles/colors.styles';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${colors.gray};
  
  @media (max-width: 927px) {
    flex-direction: column;
    align-items: center;
    padding: 16px; 
  };
  `;

const MenuBar = styled.div`
  font-size: 24px;
  color: ${colors.white};
  padding: 16px;
  cursor: pointer;
  display: none;

  @media (max-width: 927px) {
    display: block;
    position: absolute;
    left: 0;
  }
`;

const HeaderTitle = styled.label`
  color: ${colors.white};
  font-size: 24px;
  padding: 16px;
  text-transform: capitalize;
  background-color: ${colors.gray};

  ${(props) =>
    props.active &&
    `
    background-color: ${colors.lime};
  `}

  &:hover {
    background-color: ${colors.lime};
  }

  @media (max-width: 1400px) {
    font-size: 18px;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px;
    margin-top: 8px;
  }
`;

export { Container, HeaderTitle, MenuBar };
