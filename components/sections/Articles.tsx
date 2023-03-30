import { useState, useEffect } from "react";

import Loading from "../Loading";
import Preview from "@/components/items/Preview";
import { Article } from "@/lib/types";

import styles from "@/styles/pages/Articles.module.css";

const news_api = process.env.NEXT_PUBLIC_NEWS_API;

export default function Articles() {
  const [data, setData] = useState<Article[] | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${news_api}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.articles);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;
  if (!data) return <p>No articles found</p>;

  return (
    <div className={styles.results}>
      {data.map((article) => (
        <div key={article.title}>
          <Preview {...article} />
        </div>
      ))}
    </div>
  );
}
