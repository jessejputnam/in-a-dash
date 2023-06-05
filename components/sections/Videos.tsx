import { useState, useEffect } from "react";

import ContentCard from "../items/ContentCard/ContentCard";
import Loading from "../items/Loading/Loading";
import { CardType } from "@/lib/types";

import Results from "./Results";

export default function Videos() {
  const [data, setData] = useState<CardType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dataError, setDataError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    async function fetchVideos() {
      const response = await fetch("/api/getVideos", {
        method: "GET",
        headers: {
          "Content-type": "application/json"
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

    fetchVideos();
  }, []);

  if (isLoading) return <Loading />;
  if (dataError && !data) return <p>{dataError}</p>;
  if (!data) return <p>No videos found</p>;

  return (
    <Results>
      {data.map((video) => (
        <div key={video.title}>
          <ContentCard {...video} />
        </div>
      ))}
    </Results>
  );
}
