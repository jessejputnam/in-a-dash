import styled from "styled-components";

const Banner = styled.div<{ $hidden: boolean }>`
  height: ${(props) => (props.$hidden ? "0" : "30px")};
  background-color: var(--red);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100vw;
  position: absolute;
  top: 60px;
  overflow-y: hidden;

  transition: height 0.5s;
  transition-delay: ${(props) => (props.$hidden ? "1s" : "0s")};
`;

export default Banner;
