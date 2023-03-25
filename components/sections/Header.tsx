import { useSession, signIn, signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import Logo from "@/components/items/Logo";

import styles from "@/styles/sections/Header.module.css";

export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  console.log(session, loading);

  return (
    <header className={styles.Header}>
      <div className={!session && loading ? styles.loading : styles.loaded}>
        <Logo />

        {!session ? (
          <div>
            <button className='btn btn-primary' onClick={() => signIn()}>
              Log In
            </button>
          </div>
        ) : (
          <div style={{ display: "flex" }}>
            <button onClick={() => signOut()}>Log Out</button>
            <div className={styles.profileBackground}>
              <FontAwesomeIcon className={styles.profile} icon={faUser} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}