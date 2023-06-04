import { CardType, PostData } from "../types";

const img404 =
  "https://1000logos.net/wp-content/uploads/2017/05/Reddit-Logo-2005.png";

const nsfw =
  "https://www.online-tech-tips.com/wp-content/uploads/2020/09/NSFW.jpg";

export default function formatPost(post: PostData): CardType {
  return {
    type: "post",
    title: post.data.title,
    desc: `u/${post.data.author}`,
    src:
      post.data.thumbnail === "self" ||
      post.data.thumbnail === "default" ||
      post.data.thumbnail.includes("external-preview")
        ? img404
        : post.data.thumbnail === "nsfw"
        ? nsfw
        : post.data.preview.images[0].source.url.replaceAll("&amp;", "&"),
    url: post.data.url
  };
}
