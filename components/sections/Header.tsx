import { useSession, signIn, signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import Logo from "@/components/items/Logo";

import styles from "@/styles/sections/Header.module.css";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className={styles.Header}>
      <Logo />

      <div>
        {!session ? (
          <button className='btn btn-primary' onClick={() => signIn()}>
            Log In
          </button>
        ) : (
          <FontAwesomeIcon className={styles.profile} icon={faUser} />
        )}
      </div>
    </header>
  );
}
