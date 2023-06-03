import { useSession } from "next-auth/react";
import Header from "./sections/Header";

import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  // const []
  return (
    <>
      <Header session={session} status={status} />
      <main>{children}</main>
    </>
  );
}
