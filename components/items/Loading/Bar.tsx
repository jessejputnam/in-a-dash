import styled, { keyframes } from "styled-components";

const loadingActive = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: -200% -200%;
  }
`;

const Bar = styled.div`
  height: 40px;
  background: var(--loading);
  background-size: 200%;
  animation: 0.7s infinite linear ${loadingActive};
  position: absolute;
`;

export const Top = styled(Bar)`
  width: 100%;
  top: 0;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%);
  -moz-clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%);
  border-top-left-radius: 10px;
`;

export const Mid = styled(Bar)`
  width: 88%;
  top: 50px;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 88% 100%, 0% 100%);
  -moz-clip-path: polygon(0% 0%, 100% 0%, 88% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 88% 100%, 0% 100%);
`;

export const Low = styled(Bar)`
  width: 75%;
  top: 100px;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 86% 100%, 0% 100%);
  -moz-clip-path: polygon(0% 0%, 100% 0%, 86% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 86% 100%, 0% 100%);
  border-bottom-left-radius: 10px;
`;
