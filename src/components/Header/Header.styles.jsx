import styled from 'styled-components';
import colors from '../../styles/colors.styles';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${colors.gray};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-top: 16px; /* Add padding to the top */
  }
`;

const HeaderTitle = styled.label`
  color: ${colors.white};
  font-size: 24px;
  padding: 16px;
  text-transform: capitalize;
  background-color: ${(props) => (props.active ? colors.lime : colors.gray)};
  &:hover {
    background-color: ${colors.lime};
  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 12px;
    margin-top: 8px; /* Add margin to the top */
  }
`;

export { Container, HeaderTitle };
