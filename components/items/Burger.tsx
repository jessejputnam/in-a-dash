import styled from "styled-components";
const mobile = "601px";
const boxSize = "60px";
const delay = "0.2s";
const barSize = "5px";
const barColor = "black";

const Box = styled.div`
  position: relative;
  width: ${boxSize};
  height: ${boxSize};
  @media only screen and (min-width: ${mobile}) {
    display: none;
  }
`;

const Bar = styled.div<{ $open: boolean }>`
  width: ${boxSize};
  height: ${barSize};
  background-color: ${barColor};
  border-radius: 5px;
  position: absolute;
`;

const Bun = styled(Bar)<{ $open: boolean }>`
  opacity: ${(props) => (props.$open ? "0" : "1")};
  transition: top ${delay}, opacity 0s;
  transition-delay: ${(props) => (props.$open ? "0s" : delay)}, ${delay};
  transition-timing-function: ease-in-out, linear;
`;

const TopBun = styled(Bun)<{ $open: boolean }>`
  top: ${(props) => (props.$open ? "45%" : "15%")};
`;

const MidBun = styled(Bun)`
  top: 45%;
`;

const LowBun = styled(Bun)<{ $open: boolean }>`
  top: ${(props) => (props.$open ? "45%" : "75%")};
`;

const BarX = styled(Bar)<{ $open: boolean }>`
  top: 45%;
  transition: transform ${delay};
  transition-delay: ${(props) => (props.$open ? delay : "0s")};
`;

const X1 = styled(BarX)<{ $open: boolean }>`
  transform: ${(props) => (props.$open ? "rotateZ(45deg)" : "rotateZ(0deg)")};
`;

const X2 = styled(BarX)<{ $open: boolean }>`
  transform: ${(props) => (props.$open ? "rotateZ(-45deg)" : "rotateZ(0deg)")};
`;

function Burger({ open, toggle }: { open: boolean; toggle: () => void }) {
  return (
    <Box onClick={() => toggle()}>
      <TopBun $open={open} />
      <MidBun $open={open} />
      <LowBun $open={open} />
      <X1 $open={open} />
      <X2 $open={open} />
    </Box>
  );
}

export default Burger;
