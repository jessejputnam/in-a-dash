import { ReactNode, useState } from "react";
import { useSession } from "next-auth/react";

// import { useThemeContext } from "@/context/theme";

import Header from "./sections/Header";

export default function Layout({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  // const { theme } = useTheme();
  const theme = "light";
  return (
    <>
      <Header session={session} status={status} theme={theme} />
      <main>{children}</main>
    </>
  );
}
