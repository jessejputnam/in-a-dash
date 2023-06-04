import styled from "styled-components";

const Menu = styled.ul`
  position: absolute;
  left: 80px;
  display: flex;
  gap: 25px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export default Menu;
