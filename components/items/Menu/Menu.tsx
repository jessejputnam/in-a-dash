import Link from "next/link";
import { signOut } from "next-auth/react";

import Container from "./Container";
import Li from "./Li";

function Menu({ select }: { select: () => void }) {
  return (
    <Container>
      <Li>
        <Link onClick={() => select()} href='/profile'>
          Profile
        </Link>
      </Li>
      <hr />
      <Li>
        <Link onClick={() => select()} href='/boards'>
          My Boards
        </Link>
      </Li>
      <hr />
      <Li>
        <Link onClick={() => select()} href='#'>
          Dark Mode
        </Link>
      </Li>
      <hr />
      <Li>
        <p
          onClick={() => {
            signOut();
            select();
          }}
        >
          Log Out
        </p>
      </Li>
    </Container>
  );
}

export default Menu;
