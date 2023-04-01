import Link from "next/link";
import { signOut } from "next-auth/react";

import styles from "@/styles/items/Menu.module.css";

export function Menu({ select }: any) {
  return (
    <ul className={styles.Menu}>
      <li>
        <Link
          onClick={() => select()}
          className={styles.hover}
          href='/profile'
          style={{ fontSize: "1.3rem" }}
        >
          Profile
        </Link>
      </li>
      <hr />
      <li>
        <Link
          onClick={() => select()}
          className={styles.hover}
          href='/boards'
          style={{ fontSize: "1.3rem" }}
        >
          Boards
        </Link>
      </li>
      <hr />
      <li>
        <Link
          onClick={() => select()}
          className={styles.hover}
          href='#'
          style={{ fontSize: "1.3rem" }}
        >
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
          style={{ fontSize: "1.3rem" }}
        >
          Log Out
        </p>
      </li>
    </ul>
  );
}
