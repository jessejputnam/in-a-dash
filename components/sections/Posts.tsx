import { useState, useEffect } from "react";

import Loading from "../items/Loading/Loading";
import ContentCard from "../items/ContentCard/ContentCard";
import { CardType } from "@/lib/types";

import Results from "./Results";

export default function Posts() {
  const [data, setData] = useState<CardType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dataError, setDataError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    async function fetchPosts() {
      const response = await fetch("/api/getPosts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        const err = await response.json();
        setDataError(err.error);
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      setData(data);
      setIsLoading(false);
    }

    fetchPosts();
  }, []);

  if (isLoading) return <Loading />;
  if (dataError && !data) return <p>{dataError}</p>;
  if (!data) return <p>No posts found</p>;

  return (
    <Results>
      {data.map((post) => (
        <div key={post.title + Math.random()}>
          <ContentCard {...post} />
        </div>
      ))}
    </Results>
  );
}
