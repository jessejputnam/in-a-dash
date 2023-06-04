import Link from "next/link";
import styled from "styled-components";

const Nav = styled.ul`
  position: absolute;
  right: 0;
  top: 61px;
  width: 100%;
  height: 300px;
  background-color: var(--gray);
  box-shadow: -1px 2px 3px 0 var(--dark-box-shadow);
  z-index: 1000;

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dark-gray);
  font-weight: 300;
  font-size: 2rem;
  padding: 31px 25px;

  & :hover {
    color: var(--red);
  }
`;

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
