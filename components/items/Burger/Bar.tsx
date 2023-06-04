import styled from "styled-components";

const boxSize = "60px";
const barSize = "5px";
const barColor = "black";

const Bar = styled.div<{ $open: boolean }>`
  width: ${boxSize};
  height: ${barSize};
  background-color: ${barColor};
  border-radius: 5px;
  position: absolute;
`;

export default Bar;
