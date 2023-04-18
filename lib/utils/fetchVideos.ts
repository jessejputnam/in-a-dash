import { TopicString, VideoData } from "../types";
import formatVideo from "./formatVideo";

const youtube_api = process.env.NEXT_PUBLIC_YOUTUBE_API;

const categories = {
  business: 0,
  entertainment: 24,
  general: 25,
  health: 22,
  science: 28,
  sports: 17,
  technology: 28
};

export default async function fetchVideos(
  topic: TopicString | null,
  limit: number
) {
  const categoryId = topic ? categories[topic] : 0;

  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=${limit}&videoCategoryId=${categoryId}&regionCode=US&key=${youtube_api}`
  );

  const data = await response.json();
  const videos = data.items;

  const formattedData = videos.map((video: VideoData) => formatVideo(video));

  return formattedData;
}
