import { useSession, signIn, signOut } from "next-auth/react";

import Logo from "@/components/Logo";

import styles from "@/styles/Header.module.css";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className={styles.Header}>
      <Logo />

      <div>
        <button className='btn' onClick={() => signIn()}>
          Log In
        </button>
      </div>
    </header>
  );
}
