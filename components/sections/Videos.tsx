import { Video } from "@/lib/types";
import { useState, useEffect } from "react";

import VideoPreview from "../items/VideoPreview";
import Loading from "../Loading";

import styles from "@/styles/pages/Videos.module.css";

const youtube_api = process.env.NEXT_PUBLIC_YOUTUBE_API;

export default function Videos() {
  const [data, setData] = useState<Video[] | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${youtube_api}`
    )
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.items.map((item: any) => {
          return {
            title: item.snippet.title,
            channel: item.snippet.channelTitle,
            description: item.snippet.description.slice(0, 200),
            thumbnail: item.snippet.thumbnails.standard.url,
            viewCount: item.statistics.viewCount,
            url: `https://www.youtube.com/watch?v=${item.id}`
          };
        });
        console.log(formattedData);

        setData(formattedData);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;
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
