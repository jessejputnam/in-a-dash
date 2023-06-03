import { Post } from "@/lib/types";
import Image from "next/image";

import styles from "@/styles/items/PostPreview.module.css";

export default function PostPreview(post: Post) {
  const src =
    post.thumbnail ||
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png";

  return (
    <div className={styles.PostPreview}>
      <a className={styles.imgLink} href={post.url} target='_blank'>
        <Image
          className={styles.img}
          loader={() => src}
          unoptimized
          src={src}
          alt='Post thumbnail'
          style={{ objectFit: "cover" }}
          fill
        />
      </a>
      <div className={styles.info}>
        <a className={styles.titleLink} href={post.url} target='_blank'>
          <h3>{post.title}</h3>
        </a>
        <p>{post.subreddit}</p>
        <p>{post.author}</p>
      </div>
    </div>
  );
}
