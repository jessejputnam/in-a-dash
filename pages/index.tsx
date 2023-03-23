import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <main>
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
