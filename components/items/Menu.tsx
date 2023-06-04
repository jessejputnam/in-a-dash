import Link from "next/link";
import { signOut } from "next-auth/react";
import styled from "styled-components";

const UserMenu = styled.ul`
  position: absolute;
  right: 0;
  top: 61px;
  height: 245px;
  background-color: var(--gray);
  width: 170px;
  box-shadow: -1px 2px 3px 0 var(--dark-box-shadow);
  z-index: 1000;

  && * {
    color: var(--dark-gray);
    font-weight: 300;
    text-align: right;
    :hover {
      color: black;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 300px;
  }
`;

const Li = styled.li`
  padding: 18px 25px;
  && * {
    font-size: 1.3rem;
    @media only screen and (max-width: 600px) {
      font-size: 2rem;
    }
  }
  :hover {
    background-color: var(--dim-gray);
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function Menu({ select }: { select: () => void }) {
  return (
    <UserMenu>
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
    </UserMenu>
  );
}

export default Menu;
