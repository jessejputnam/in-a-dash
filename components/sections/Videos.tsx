import { Video } from "@/lib/types";
import { useState, useEffect } from "react";

import VideoPreview from "../items/VideoPreview";
import Loading from "../Loading";

import styles from "@/styles/pages/Videos.module.css";

const youtube_api = process.env.NEXT_PUBLIC_YOUTUBE_API;

export default function Videos() {
  const [data, setData] = useState<Video[] | null>(null);
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
    <div className={styles.results}>
      {data.map((video) => (
        <div key={video.title + video.viewCount}>
          <VideoPreview {...video} />
        </div>
      ))}
    </div>
  );
}
