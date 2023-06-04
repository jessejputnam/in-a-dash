import styled from "styled-components";
import Bar from "./Bar";

const delay = "0.2s";

const Bun = styled(Bar)<{ $open: boolean }>`
  opacity: ${(props) => (props.$open ? "0" : "1")};
  transition: top ${delay}, opacity 0s;
  transition-delay: ${(props) => (props.$open ? "0s" : delay)}, ${delay};
  transition-timing-function: ease-in-out, linear;
`;

export const TopBun = styled(Bun)<{ $open: boolean }>`
  top: ${(props) => (props.$open ? "45%" : "15%")};
`;

export const MidBun = styled(Bun)`
  top: 45%;
`;

export const LowBun = styled(Bun)<{ $open: boolean }>`
  top: ${(props) => (props.$open ? "45%" : "75%")};
`;
