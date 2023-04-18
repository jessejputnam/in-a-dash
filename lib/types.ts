// PROPS
export type LogoProps = "loader" | null;

export interface ProfileProps {
  id: string;
  name: string;
  email: string;
  image: string;
  topics: Topic[];
}

// DATABASE OBJECTS
export interface Article {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
}

export interface Video {
  title: string;
  channel: string;
  description: string;
  thumbnail: string;
  viewCount: string;
  url: string;
}

export interface Post {
  title: string;
  subreddit: string;
  author: string;
  thumbnail: string;
  url: string;
}

export interface Topic {
  id: string;
  keyword: TopicString;
}

export type TopicString =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology";

//
export interface PostData {
  data: {
    title: string;
    subreddit_name_prefixed: string;
    author: string;
    thumbnail: string;
    preview: {
      images: [{ source: { url: string } }];
    };
    url: string;
  };
}

export interface VideoData {
  snippet: {
    title: string;
    channelTitle: string;
    description: string;
    thumbnails: { standard: { url: string } };
  };
  id: string;
}
