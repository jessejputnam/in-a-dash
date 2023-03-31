import { useState, useEffect } from "react";

import Loading from "../Loading";
import PostPreview from "../items/PostPreview";
import { Post } from "@/lib/types";

import styles from "@/styles/pages/Posts.module.css";

const noImage =
  "https://1000logos.net/wp-content/uploads/2017/05/Reddit-Logo-2005.png";

const nsfw =
  "https://www.online-tech-tips.com/wp-content/uploads/2020/09/NSFW.jpg";

export default function Posts() {
  const [data, setData] = useState<Post[] | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.reddit.com/r/popular.json?limit=20`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.children);
        const formattedData = data.data.children.map((post: any) => {
          return {
            title: post.data.title,
            subreddit: post.data.subreddit_name_prefixed,
            author: `u/${post.data.author}`,
            thumbnail:
              post.data.thumbnail === "self"
                ? noImage
                : post.data.thumbnail === "nsfw"
                ? nsfw
                : post.data.thumbnail,
            url: post.data.url
          };
        });
        console.log(formattedData);
        setData(formattedData);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;
  if (!data) return <p>No posts found</p>;

  return (
    <div className={styles.results}>
      {data.map((post) => (
        <div key={post.title + post.author}>
          <PostPreview {...post} />
        </div>
      ))}
    </div>
  );
}
