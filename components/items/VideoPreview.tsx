import { Video } from "@/lib/types";
import Image from "next/image";

import styles from "@/styles/items/VideoPreview.module.css";

export default function VideoPreview(video: Video) {
  const src =
    video.thumbnail ||
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png";

  return (
    <div className={styles.VideoPreview}>
      <a className={styles.imgLink} href={video.url} target='_blank'>
        <Image
          className={styles.img}
          loader={() => src}
          unoptimized
          src={src}
          alt='Video thumbnail'
          width={275}
          height={150}
        />
      </a>
      <div className={styles.info}>
        <a className={styles.titleLink} href={video.url} target='_blank'>
          <h3>{video.title}</h3>
        </a>
        <p>{video.description}</p>
      </div>
    </div>
  );
}
