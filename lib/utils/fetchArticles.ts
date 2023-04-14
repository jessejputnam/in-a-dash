import { TopicString } from "../types";

const news_api = process.env.NEXT_PUBLIC_NEWS_API;

export default async function fetchArticles(
  topic: TopicString | null,
  limit: number
) {
  const url = topic
    ? `https://newsapi.org/v2/top-headlines?country=us&category=${topic}&pageSize=${limit}&apiKey=${news_api}`
    : `https://newsapi.org/v2/top-headlines?country=us&pageSize=${limit}&apiKey=${news_api}`;

  const response = await fetch(url);
  const data = await response.json();
  const articles = data.articles;

  return articles;
}
