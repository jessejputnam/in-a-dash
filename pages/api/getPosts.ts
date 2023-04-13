import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

import prisma from "@/prisma/prisma";
import fetchPosts from "@/lib/utils/fetchPosts";
import { TopicString } from "@/lib/types";

const noImage =
  "https://1000logos.net/wp-content/uploads/2017/05/Reddit-Logo-2005.png";

const nsfw =
  "https://www.online-tech-tips.com/wp-content/uploads/2020/09/NSFW.jpg";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let response, data, formattedData;

  try {
    if (req.method !== "GET") throw new Error("Method not allowed");

    const session = await getServerSession(req, res, authOptions);

    // If no session present
    if (!session) {
      const fetchedData = await fetchPosts(null, 24);
      return res.status(200).json(fetchedData);
    }

    // Get user preferences
    const user = await prisma.user.findUnique({
      include: { topics: true },
      where: {
        email: session.user?.email as string
      }
    });

    // If no user || User has not selected topic preferences
    if (!user || !user.topics.length) {
      const fetchedData = await fetchPosts(null, 24);
      return res.status(200).json(fetchedData);
    }

    // Topic preferences
    const topics = user.topics;

    if (topics.length === 1) {
      const topic = topics[0].keyword as TopicString;
      const fetchedData = await fetchPosts(topic, 24);
      return res.status(200).json(fetchedData);
    }

    if (topics.length === 2) {
      const topicA = topics[0].keyword as TopicString;
      const topicB = topics[1].keyword as TopicString;
      const fetchedDataAPromise = fetchPosts(topicA, 12);
      const fetchedDataBPromise = fetchPosts(topicB, 12);

      const allData = await Promise.all([
        fetchedDataAPromise,
        fetchedDataBPromise
      ]);

      const fetchedData = [...allData[0], ...allData[1]];
      fetchedData.sort(() => Math.random() - 0.5);
      return res.status(200).json(fetchedData);
    }

    if (topics.length === 3) {
      const topicA = topics[0].keyword as TopicString;
      const topicB = topics[1].keyword as TopicString;
      const topicC = topics[2].keyword as TopicString;
      const fetchedDataAPromise = fetchPosts(topicA, 8);
      const fetchedDataBPromise = fetchPosts(topicB, 8);
      const fetchedDataCPromise = fetchPosts(topicC, 8);

      const allData = await Promise.all([
        fetchedDataAPromise,
        fetchedDataBPromise,
        fetchedDataCPromise
      ]);

      const fetchedData = [...allData[0], ...allData[1], ...allData[2]];
      fetchedData.sort(() => Math.random() - 0.5);
      return res.status(200).json(fetchedData);
    }
  } catch (err) {
    res.status(500).json({ error: "Could not load posts" });
  }
}
