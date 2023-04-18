import { VideoData } from "../types";

export default function formatVideo(video: VideoData) {
  return {
    title: video.snippet.title,
    channel: video.snippet.channelTitle,
    description: video.snippet.description.slice(0, 200),
    thumbnail: video.snippet.thumbnails.standard.url,
    url: `https://www.youtube.com/watch?v=${video.id}`
  };
}
