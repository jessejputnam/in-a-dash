import styles from "@/styles/items/Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.Logo}>
      <div className={styles.clipBar}></div>
      <div className={styles.barBox}>
        <div className={`${styles.bar} ${styles.top}`}></div>
        <div className={`${styles.bar} ${styles.mid}`}></div>
        <div className={`${styles.bar} ${styles.low}`}></div>
      </div>
      <p>D</p>
    </div>
  );
}
