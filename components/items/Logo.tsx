import styles from "@/styles/items/Logo.module.css";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href='/' className={styles.Logo}>
      <div className={styles.clipBar}></div>
      <div className={styles.barBox}>
        <div className={`${styles.bar} ${styles.top}`}></div>
        <div className={`${styles.bar} ${styles.mid}`}></div>
        <div className={`${styles.bar} ${styles.low}`}></div>
      </div>
      <p>D</p>
    </Link>
  );
}
