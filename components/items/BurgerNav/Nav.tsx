import styled from "styled-components";

const Nav = styled.ul`
  position: absolute;
  right: 0;
  top: 61px;
  width: 100%;
  height: 300px;
  background-color: var(--gray);
  box-shadow: -1px 2px 3px 0 var(--dark-box-shadow);
  z-index: 1000;

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

export default Nav;
