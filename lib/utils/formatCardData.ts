// import { Article, Post, Video } from "../types";

// const img404 =
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png";

// function formatCardData(type: string, data: Article | Post | Video) {
//   const url = data.url;
//   const title = type === "article" ? data.title.split(" - ")[0] : data.title;
//   const src =
//     (type === "article"
//       ? (data as Article).urlToImage
//       : (data as Post).thumbnail) || img404;
//   const desc =
//     type === "post" ? (data as Post).subreddit : (data as Video).description;

//   return { url, title, src, desc };
// }

// export default formatCardData;
