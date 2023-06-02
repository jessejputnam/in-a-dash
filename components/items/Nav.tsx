import Link from "next/link";

import styles from "@/styles/items/Nav.module.css";

function Nav() {
  return (
    <ul className={styles.Nav}>
      <li>
        <Link className={styles.link} href='/articles'>
          Articles
        </Link>
      </li>
      <hr />
      <li>
        <Link className={styles.link} href='/videos'>
          Videos
        </Link>
      </li>
      <hr />
      <li>
        <Link className={styles.link} href='/posts'>
          Posts
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
