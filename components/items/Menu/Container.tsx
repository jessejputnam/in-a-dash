import styled from "styled-components";

const Container = styled.ul`
  position: absolute;
  right: 0;
  top: 61px;
  height: 245px;
  background-color: var(--gray);
  width: 170px;
  box-shadow: -1px 2px 3px 0 var(--dark-box-shadow);
  z-index: 1000;

  && * {
    color: var(--dark-gray);
    font-weight: 300;
    text-align: right;
    :hover {
      color: black;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 300px;
  }
`;

export default Container;
