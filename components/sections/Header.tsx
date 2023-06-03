import { useState } from "react";
import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { Status, Theme } from "@/lib/types";
import { Session } from "next-auth/core/types";

import Logo from "@/components/items/Logo";
import Menu from "../items/Menu";
import Burger from "../items/Burger";

import styles from "@/styles/sections/Header.module.css";
import Nav from "../items/Nav";
import BurgerNav from "../items/BurgerNav";

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
    <header
      className={`${styles.Header} ${theme === "light" ? "" : styles.dark}`}
    >
      <div className={!session && loading ? styles.loading : styles.loaded}>
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
          <div
            className={`${styles.profileBackground} ${menu ? styles.open : ""}`}
            onClick={toggleMenu}
          >
            <FontAwesomeIcon
              className={`${styles.profile} ${menu ? styles.open : ""}`}
              icon={faUser}
            />
          </div>
        )}
      </div>
      {menu ? <Menu select={toggleMenu} /> : null}
      {nav ? <BurgerNav select={toggleNav} /> : null}
    </header>
  );
}
