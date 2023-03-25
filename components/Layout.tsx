import Header from "./sections/Header";

import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
