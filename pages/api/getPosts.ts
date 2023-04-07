import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

import prisma from "@/prisma/prisma";

const noImage =
  "https://1000logos.net/wp-content/uploads/2017/05/Reddit-Logo-2005.png";

const nsfw =
  "https://www.online-tech-tips.com/wp-content/uploads/2020/09/NSFW.jpg";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") throw new Error("Method not allowed");

    // const session = await getServerSession(req, res, authOptions);

    // if (!session) throw new Error("No session found");

    // const user = await prisma.user.findUnique({
    //   include: { topics: true },
    //   where: {
    //     email: session.user?.email as string
    //   }
    // });

    // if (!user) throw new Error("No user could be found");

    const response = await fetch(
      `https://www.reddit.com/r/popular.json?limit=20`
    );

    const data = await response.json();

    const formattedData = data.data.children.map((post: any) => {
      return {
        title: post.data.title,
        subreddit: post.data.subreddit_name_prefixed,
        author: `u/${post.data.author}`,
        thumbnail:
          post.data.thumbnail === "self" ||
          post.data.thumbnail === "default" ||
          post.data.thumbnail.includes("external-preview")
            ? noImage
            : post.data.thumbnail === "nsfw"
            ? nsfw
            : post.data.thumbnail,
        url: post.data.url
      };
    });

    res.status(200).json(formattedData);
  } catch (err) {
    res.status(500).json({ error: "Could not load posts" });
  }
}
