import { CardType, ArticleData } from "../types";

const img404 =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png";

export default function formatArticle(article: ArticleData): CardType {
  return {
    type: "Article",
    title: article.title,
    desc: article.description,
    src: article.urlToImage || img404,
    url: article.url
  };
}
