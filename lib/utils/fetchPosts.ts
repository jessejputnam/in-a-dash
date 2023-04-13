import { PostData, TopicString } from "../types";
import formatPost from "./formatPost";

const subreddit = {
  business: "businessnews",
  entertainment: "entertainment",
  general: "qualitynews",
  health: "medical_news",
  science: "science",
  sports: "sports",
  technology: "technology"
};

export default async function fetchPosts(
  topic: TopicString | null,
  limit: number
) {
  const sub = topic ? subreddit[topic] : "popular";

  const response = await fetch(
    `https://www.reddit.com/r/${sub}.json?limit=${limit}`
  );

  const data = await response.json();
  const posts = data.data.children;

  const formattedData = posts.map((post: PostData) => formatPost(post));

  return formattedData;
}
