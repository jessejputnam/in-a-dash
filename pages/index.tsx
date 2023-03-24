import NoAuthHome from "@/components/home/NoAuthHome";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      {!session ? (
        <NoAuthHome />
      ) : (
        <div>
          <h1>In a Dash</h1>
          <p>Dashboard service for personalized news, video, and posts</p>
        </div>
      )}
    </main>
  );
}
