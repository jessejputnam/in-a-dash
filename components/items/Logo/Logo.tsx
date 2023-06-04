import Link from "next/link";

import P from "./P";
import Clip from "./Clip";
import Div from "./Div";
import { Top, Mid, Low } from "./Bar";

export default function Logo() {
  return (
    <Link href='/'>
      <Div>
        <Clip></Clip>
        <Top></Top>
        <Mid></Mid>
        <Low></Low>
        <P>D</P>
      </Div>
    </Link>
  );
}
