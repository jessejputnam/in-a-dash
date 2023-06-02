import Link from "next/link";

import styles from "@/styles/items/Burger.module.css";

function Burger({ toggle, open }: { open: boolean; toggle: () => void }) {
  return (
    <div className={styles.Burger} onClick={() => toggle()}>
      <div
        className={`${styles.bar} ${styles.top} ${open ? styles.open : ""}`}
      ></div>
      <div
        className={`${styles.bar} ${styles.mid} ${open ? styles.open : ""}`}
      ></div>
      <div
        className={`${styles.bar} ${styles.low} ${open ? styles.open : ""}`}
      ></div>
      <div
        className={`${styles.bar} ${styles.x} ${styles.x1} ${
          open ? styles.open : ""
        }`}
      ></div>
      <div
        className={`${styles.bar} ${styles.x} ${styles.x2} ${
          open ? styles.open : ""
        }`}
      ></div>
    </div>
  );
}

export default Burger;
