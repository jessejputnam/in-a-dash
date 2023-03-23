import { useSession, signIn, signOut } from "next-auth/react";

import styles from "@/styles/Home.module.css";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <main className={styles.main}>
        {!session ? (
          <div>
            <p>Not signed in</p>
            <br />
            <button onClick={() => signIn()}>Sign in</button>
          </div>
        ) : (
          <div>
            <h1>In a Dash</h1>
            <p>Dashboard service for personalized news, video, and posts</p>
          </div>
        )}
      </main>
    </>
  );
}
