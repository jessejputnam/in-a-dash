import styles from "@/styles/items/UpdateBanner.module.css";

interface UpdateBannerProps {
  msg: string;
  hidden: boolean;
}

export default function UpdateBanner({ msg, hidden }: UpdateBannerProps) {
  return (
    <div className={hidden ? styles.UpdateBanner : styles.UpdateBannerVisible}>
      <p>{msg}</p>
    </div>
  );
}
