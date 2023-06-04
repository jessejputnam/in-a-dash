import Link from "next/link";
import styled from "styled-components";

import Nav from "./Nav";
import Li from "./Li";

function BurgerNav({ select }: { select: () => void }) {
  return (
    <Nav>
      <Li onClick={() => select()}>
        <Link href='/articles'>Articles</Link>
      </Li>

      <hr />

      <Li onClick={() => select()}>
        <Link href='/videos'>Videos</Link>
      </Li>

      <hr />

      <Li onClick={() => select()}>
        <Link href='/posts'>Posts</Link>
      </Li>
    </Nav>
  );
}

export default BurgerNav;
