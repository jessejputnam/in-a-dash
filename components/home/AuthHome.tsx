import { useState, useEffect } from "react";

import Loading from "../Loading";
import Preview from "@/components/items/Preview";
import { Article } from "@/lib/types";

export default function AuthHome() {
  const [data, setData] = useState<Article[] | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=27882eab270a4721bb7308ae11dc6674"
    )
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
    <div>
      <h1>In a Dash</h1>
      <p>Dashboard service for personalized news, video, and posts</p>
      <div>
        {data.map((article) => (
          <div key={article.title}>
            <Preview {...article} />
          </div>
        ))}
      </div>
    </div>
  );
}
