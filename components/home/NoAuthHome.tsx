import styles from "@/styles/home/NoAuthHome.module.css";
import { signIn } from "next-auth/react";

export default function NoAuthHome() {
  return (
    <div className={styles.NoAuthHome}>
      <div className={styles.titleContainer}>
        <h1>In a Dash</h1>
        <p>Get quick updates on the world</p>
        <p>
          Save and share them <i>in a dash</i>
        </p>
      </div>

      <div className={styles.btnContainer}>
        <button className='btn btn-primary' onClick={() => signIn()}>
          Sign Up
        </button>
      </div>

      <p>
        A personal dashboard for all your interests. Choose preferences in
        topics and you will gain access to news, blogs, posts, videos, etc
        personalized to your own taste.
      </p>
      <p>
        When you find anything that interests you, you can save it to personal
        boards for later access. You can also share and comment saved boards or
        saved items with friends.
      </p>
    </div>
  );
}
