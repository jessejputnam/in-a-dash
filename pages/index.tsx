import { useSession } from "next-auth/react";

import Layout from "@/components/Layout";
import NoAuthHome from "@/components/home/NoAuthHome";
import AuthHome from "@/components/home/AuthHome";
import Loading from "@/components/Loading";

export default function Home() {
  const { data: session, status } = useSession();

  return <Layout>{!session ? <NoAuthHome /> : <AuthHome />}</Layout>;
}
