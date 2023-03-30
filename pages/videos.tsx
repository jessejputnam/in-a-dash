import Layout from "@/components/Layout";
import Videos from "@/components/sections/Videos";

import styles from "@/styles/";

export default function VideosPage() {
  return (
    <Layout>
      <div className={"VideosPage"}>
        <h1>Videos</h1>
        <p>Discover the latest on YouTube</p>
        <Videos />
      </div>
    </Layout>
  );
}
