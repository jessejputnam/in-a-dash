import { useState, useEffect } from "react";

import Link from "next/link";

import styles from "@/styles/home/AuthHome.module.css";

export default function AuthHome() {
  return (
    <div className={styles.AuthHome}>
      <h1>In a Dash</h1>
      <p>Dashboard service for personalized news, video, and posts</p>

      <div>
        <p>
          <Link href='/articles'>Articles</Link>
        </p>
        <p>
          <Link href='/videos'>Videos</Link>
        </p>
        <p>
          <Link href='/posts'>Posts</Link>
        </p>
      </div>
    </div>
  );
}
