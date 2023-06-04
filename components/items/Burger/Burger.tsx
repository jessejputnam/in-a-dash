import Box from "./Box";
import { TopBun, MidBun, LowBun } from "./Buns";
import { X1, X2 } from "./X";

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
