import Link from "next/link";
import { signOut } from "next-auth/react";

import styles from "@/styles/items/Menu.module.css";

function Menu({ select }: { select: () => void }) {
  return (
    <ul className={styles.Menu}>
      <li>
        <Link onClick={() => select()} className={styles.hover} href='/profile'>
          Profile
        </Link>
      </li>
      <hr />
      <li>
        <Link onClick={() => select()} className={styles.hover} href='/boards'>
          My Boards
        </Link>
      </li>
      <hr />
      <li>
        <Link onClick={() => select()} className={styles.hover} href='#'>
          Dark Mode
        </Link>
      </li>
      <hr />
      <li>
        <p
          className={styles.hover}
          onClick={() => {
            signOut();
            select();
          }}
        >
          Log Out
        </p>
      </li>
    </ul>
  );
}

export default Menu;
