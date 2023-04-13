import { PostData } from "../types";

const noImage =
  "https://1000logos.net/wp-content/uploads/2017/05/Reddit-Logo-2005.png";

const nsfw =
  "https://www.online-tech-tips.com/wp-content/uploads/2020/09/NSFW.jpg";

export default function formatPost(post: PostData) {
  return {
    title: post.data.title,
    subreddit: post.data.subreddit_name_prefixed,
    author: `u/${post.data.author}`,
    thumbnail:
      post.data.thumbnail === "self" ||
      post.data.thumbnail === "default" ||
      post.data.thumbnail.includes("external-preview")
        ? noImage
        : post.data.thumbnail === "nsfw"
        ? nsfw
        : post.data.thumbnail,
    url: post.data.url
  };
}
