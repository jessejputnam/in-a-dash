import styled from "styled-components";

import Bar from "./Bar";

const delay = "0.2s";

const BarX = styled(Bar)<{ $open: boolean }>`
  top: 45%;
  transition: transform ${delay};
  transition-delay: ${(props) => (props.$open ? delay : "0s")};
`;

export const X1 = styled(BarX)<{ $open: boolean }>`
  transform: ${(props) => (props.$open ? "rotateZ(45deg)" : "rotateZ(0deg)")};
`;

export const X2 = styled(BarX)<{ $open: boolean }>`
  transform: ${(props) => (props.$open ? "rotateZ(-45deg)" : "rotateZ(0deg)")};
`;
