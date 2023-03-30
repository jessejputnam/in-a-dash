import styles from "@/styles/pages/Articles.module.css";
import Layout from "@/components/Layout";
import Articles from "@/components/sections/Articles";

export default function ArticlesPage() {
  return (
    <Layout>
      <div className={styles.ArticlesPage}>
        <h1>Articles</h1>
        <p>Catch up with the latest news and articles across the internet</p>
        <Articles />
      </div>
    </Layout>
  );
}
