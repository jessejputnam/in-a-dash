import styles from "@/styles/pages/Articles.module.css";
import Layout from "@/components/Layout";
import Posts from "@/components/sections/Posts";

export default function PostsPage() {
  return (
    <Layout>
      <div className={styles.ArticlesPage}>
        <h1>Posts</h1>
        <p>Catch up with the latest posts from reddit</p>
        <Posts />
      </div>
    </Layout>
  );
}
