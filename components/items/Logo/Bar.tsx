import styled from "styled-components";

export const Bar = styled.div`
  height: 13px;
  background-color: white;
  position: absolute;
`;

export const Top = styled(Bar)`
  width: 43px;
  top: 7.8px;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 75% 100%, 0% 100%);
  -moz-clip-path: polygon(0% 0%, 100% 0%, 75% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 75% 100%, 0% 100%);
`;

export const Mid = styled(Bar)`
  width: 31px;
  top: 22.9px;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 66% 100%, 0% 100%);
  -moz-clip-path: polygon(0% 0%, 100% 0%, 66% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 66% 100%, 0% 100%);
`;

export const Low = styled(Bar)`
  width: 19px;
  top: 37.9px;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 49% 100%, 0% 100%);
  -moz-clip-path: polygon(0% 0%, 100% 0%, 49% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 48% 100%, 0% 100%);
`;
