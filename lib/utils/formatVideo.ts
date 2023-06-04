import { CardType, VideoData } from "../types";

const img404 =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png";

export default function formatVideo(video: VideoData): CardType {
  return {
    type: "video",
    title: video.snippet.title,
    desc: video.snippet.description.slice(0, 200),
    src: video.snippet.thumbnails.standard.url || img404,
    url: `https://www.youtube.com/watch?v=${video.id}`
  };
}
