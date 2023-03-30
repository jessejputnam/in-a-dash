import { Article } from "@/lib/types";
import { ReactNode } from "react";

export default function Preview(article: Article) {
  return (
    <div>
      <p>{article.title}</p>
    </div>
  );
}
