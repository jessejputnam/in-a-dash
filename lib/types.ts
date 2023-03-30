export type LogoProps = "loader" | null;

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
