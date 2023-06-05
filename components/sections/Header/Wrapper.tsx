import styled from "styled-components";

const Wrapper = styled.div<{ $session: boolean; $loading: boolean }>`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0px;
  opacity: ${(props) => (props.$session && props.$loading ? "0" : "1")};
  overflow: hidden;
  transform: rotateX(
    ${(props) => (props.$session && props.$loading ? "180deg" : "0deg")}
  );
  transition: opacity 0.4s ease-in, transform 0.6s ease-in-out;
`;

export default Wrapper;
