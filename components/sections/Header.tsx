import { useState } from "react";
import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { Status, Theme } from "@/lib/types";
import { Session } from "next-auth/core/types";

import Logo from "@/components/items/Logo/Logo";
import Menu from "../items/Menu/Menu";
import Burger from "../items/Burger/Burger";

import Nav from "../items/Nav/Nav";
import BurgerNav from "../items/BurgerNav/BurgerNav";
import styled from "styled-components";

const Container = styled.header`
  box-shadow: 0 1px 2px 0px var(--light-box-shadow);
  height: 60px;
  width: 100%;
  position: relative;
`;

const Wrapper = styled.div<{ $session: boolean; $loading: boolean }>`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0px;
  opacity: ${(props) => (props.$session && props.$loading ? "0" : "1")};
  overflow: hidden;
  transform: rotateX(
    ${(props) => (props.$session && props.$loading ? "180deg" : "0deg")}
  );
  transition: opacity 0.4s ease-in, transform 0.6s ease-in-out;
`;

const Icon = styled(FontAwesomeIcon)<{ $menu: boolean }>`
  height: 35px;
  color: ${(props) =>
    props.$menu ? "rgba(101, 101, 101, 0.67)" : "var(--profile-image);"};
`;

const Avatar = styled.div<{ $menu: boolean }>`
  margin-right: 15px;
  border-radius: 50%;
  background: ${(props) =>
    props.$menu ? "var(--secondary-glow-darker)" : "var(--secondary-glow)"};
  box-shadow: 0 0 2px 0 var(--dark-box-shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 55px;
  cursor: pointer;
  :hover {
    background: var(--profile-image);

    ${Icon} {
      color: white;
    }
  }
`;

export default function Header({
  session,
  status,
  theme
}: {
  session: Session | null;
  status: Status;
  theme: Theme;
}) {
  const [menu, setMenu] = useState(false);
  const [nav, setNav] = useState(false);

  const loading = status === "loading";

  const toggleMenu = () => {
    if (nav) setNav(!nav);
    setMenu(!menu);
  };

  const toggleNav = () => {
    if (menu) setMenu(!menu);
    setNav(!nav);
  };

  return (
    <Container>
      <Wrapper $session={!session} $loading={loading}>
        <Logo />
        <Nav />
        <Burger toggle={toggleNav} open={nav} />

        {!session ? (
          <div>
            <button className='btn btn-primary' onClick={() => signIn()}>
              Log In
            </button>
          </div>
        ) : (
          <Avatar $menu={menu} onClick={toggleMenu}>
            <Icon $menu={menu} icon={faUser} />
          </Avatar>
        )}
      </Wrapper>
      {menu ? <Menu select={toggleMenu} /> : null}
      {nav ? <BurgerNav select={toggleNav} /> : null}
    </Container>
  );
}
