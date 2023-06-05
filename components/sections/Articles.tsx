import { useState, useEffect } from "react";

import Loading from "../items/Loading/Loading";
import ContentCard from "../items/ContentCard/ContentCard";
import { CardType } from "@/lib/types";

import Results from "./Results";

export default function Articles() {
  const [data, setData] = useState<CardType[] | null>(null);
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
    <Results>
      {data.map((article) => (
        <div key={article.title + Math.random()}>
          <ContentCard {...article} />
        </div>
      ))}
    </Results>
  );
}
