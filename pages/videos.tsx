import Layout from "@/components/Layout";
import Videos from "@/components/sections/Videos";

import styles from "@/styles/pages/Videos.module.css";

export default function VideosPage() {
  return (
    <Layout>
      <div className={styles.VideosPage}>
        <h1>Videos</h1>
        <p>Discover the latest on YouTube</p>
        <Videos />
      </div>
    </Layout>
  );
}
