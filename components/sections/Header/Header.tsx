import { useState } from "react";
import { signIn } from "next-auth/react";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { Status, Theme } from "@/lib/types";
import { Session } from "next-auth/core/types";

import Logo from "@/components/items/Logo/Logo";
import Menu from "../../items/Menu/Menu";
import Burger from "../../items/Burger/Burger";

import Nav from "../../items/Nav/Nav";
import BurgerNav from "../../items/BurgerNav/BurgerNav";

import Container from "./Container";
import Wrapper from "./Wrapper";
import Icon from "./Icon";
import Avatar from "./Avatar";

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
