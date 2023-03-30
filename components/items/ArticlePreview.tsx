import { Article } from "@/lib/types";
import Image from "next/image";

import styles from "@/styles/items/ArticlePreview.module.css";

export default function ArticlePreview(article: Article) {
  const src =
    article.urlToImage ||
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png";

  return (
    <div className={styles.ArticlePreview}>
      <a className={styles.imgLink} href={article.url} target='_blank'>
        <Image
          className={styles.img}
          loader={() => src}
          unoptimized
          src={src}
          alt='Article image'
          width={275}
          height={150}
        />
      </a>
      <div className={styles.info}>
        <a className={styles.titleLink} href={article.url} target='_blank'>
          <h3>{article.title.split(" - ")[0]}</h3>
        </a>
        <p>{article.description}</p>
      </div>
    </div>
  );
}
