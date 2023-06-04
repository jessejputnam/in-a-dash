import styled from "styled-components";

const mobile = "601px";
const boxSize = "60px";

const Box = styled.div`
  position: relative;
  width: ${boxSize};
  height: ${boxSize};
  @media only screen and (min-width: ${mobile}) {
    display: none;
  }
`;

export default Box;
