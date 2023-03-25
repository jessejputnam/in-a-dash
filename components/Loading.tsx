import styles from "@/styles/Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.Loading}>
      <p className={styles.text}>Loading...</p>
      <div className={styles.bars}>
        <div className={`${styles.bar} ${styles.top}`}></div>
        <div className={`${styles.bar} ${styles.mid}`}></div>
        <div className={`${styles.bar} ${styles.low}`}></div>
      </div>
    </div>
  );
}
