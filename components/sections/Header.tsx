import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import Logo from "@/components/items/Logo";
import { Menu } from "../items/Menu";

import styles from "@/styles/sections/Header.module.css";

export default function Header() {
  const { data: session, status } = useSession();
  const [menu, setMenu] = useState(false);

  const loading = status === "loading";

  const handleSelect = () => setMenu(false);

  return (
    <header className={styles.Header}>
      <div className={!session && loading ? styles.loading : styles.loaded}>
        <Logo />
        <div className={styles.links}>
          <Link className={styles.link} href='/articles'>
            Articles
          </Link>
          <Link className={styles.link} href='/videos'>
            Videos
          </Link>
          <Link className={styles.link} href='/posts'>
            Posts
          </Link>
        </div>

        {!session ? (
          <div>
            <button className='btn btn-primary' onClick={() => signIn()}>
              Log In
            </button>
          </div>
        ) : (
          <div
            className={`${styles.profileBackground} ${menu ? styles.open : ""}`}
            onClick={() => setMenu(!menu)}
          >
            <FontAwesomeIcon
              className={`${styles.profile} ${menu ? styles.open : ""}`}
              icon={faUser}
            />
          </div>
        )}
      </div>
      {menu ? <Menu select={handleSelect} /> : null}
    </header>
  );
}
