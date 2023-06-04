// PROPS
export type LogoProps = "loader" | null;

export type Status = "authenticated" | "loading" | "unauthenticated";

export type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export interface ProfileProps {
  id: string;
  name: string;
  email: string;
  image: string;
  topics: Topic[];
}

// DATABASE OBJECTS
export interface ArticleData {
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

export interface CardType {
  type: string;
  title: string;
  desc: string | null;
  url: string;
  src: string;
}

export interface UpdateBannerProps {
  msg: string;
  hidden: boolean;
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
