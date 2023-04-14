import { useState, useEffect } from "react";

import Loading from "../Loading";
import ArticlePreview from "@/components/items/ArticlePreview";
import { Article } from "@/lib/types";

import styles from "@/styles/pages/Articles.module.css";

export default function Articles() {
  const [data, setData] = useState<Article[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dataError, setDataError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    async function fetchArticles() {
      const response = await fetch("/api/getArticles", {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        }
      });

      if (!response.ok) {
        const err = await response.json();
        setDataError(err.error);
        setIsLoading(false);
      }

      const data = await response.json();
      setData(data);
      setIsLoading(false);
    }

    fetchArticles();
  }, []);

  if (isLoading) return <Loading />;
  if (dataError && !data) return <p>{dataError}</p>;
  if (!data) return <p>No articles found</p>;

  return (
    <div className={styles.results}>
      {data.map((article) => (
        <div key={article.title + Math.random()}>
          <ArticlePreview {...article} />
        </div>
      ))}
    </div>
  );
}
