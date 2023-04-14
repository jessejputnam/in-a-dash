import { useState, useEffect } from "react";

import Loading from "../Loading";
import PostPreview from "../items/PostPreview";
import { Post } from "@/lib/types";

import styles from "@/styles/pages/Posts.module.css";

export default function Posts() {
  const [data, setData] = useState<Post[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dataError, setDataError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    async function fetchPosts() {
      const response = await fetch("/api/getPosts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        const err = await response.json();
        setDataError(err.error);
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      console.log(data);
      setData(data);
      setIsLoading(false);
    }

    fetchPosts();
  }, []);

  if (isLoading) return <Loading />;
  if (dataError && !data) return <p>{dataError}</p>;
  if (!data) return <p>No posts found</p>;

  return (
    <div className={styles.results}>
      {data.map((post) => (
        <div key={post.title + Math.random()}>
          <PostPreview {...post} />
        </div>
      ))}
    </div>
  );
}
