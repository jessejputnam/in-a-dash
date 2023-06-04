import { useState, useEffect } from "react";
import styled from "styled-components";

import ContentCard from "../items/ContentCard";
import Loading from "../Loading";

import { Card } from "@/lib/types";

const Results = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
`;

export default function Videos() {
  const [data, setData] = useState<Card[] | null>(null);
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
