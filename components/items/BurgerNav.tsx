import Link from "next/link";

import styles from "@/styles/items/BurgerNav.module.css";

function BurgerNav({ select }: { select: () => void }) {
  return (
    <ul className={styles.BurgerNav}>
      <li onClick={() => select()}>
        <Link className={styles.link} href='/articles'>
          Articles
        </Link>
      </li>
      <hr />
      <li onClick={() => select()}>
        <Link className={styles.link} href='/videos'>
          Videos
        </Link>
      </li>
      <hr />
      <li onClick={() => select()}>
        <Link className={styles.link} href='/posts'>
          Posts
        </Link>
      </li>
    </ul>
  );
}

export default BurgerNav;
