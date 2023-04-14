import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

import prisma from "@/prisma/prisma";
import { TopicString } from "@/lib/types";
import fetchArticles from "@/lib/utils/fetchArticles";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") throw new Error("Method not allowed");

    const session = await getServerSession(req, res, authOptions);

    // If no session present
    if (!session) {
      const fetchedData = await fetchArticles(null, 24);
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
      const fetchedData = await fetchArticles(null, 24);
      return res.status(200).json(fetchedData);
    }

    // Topic preferences
    const topics = user.topics;

    if (topics.length === 1) {
      const topic = topics[0].keyword as TopicString;
      const fetchedData = await fetchArticles(topic, 24);
      return res.status(200).json(fetchedData);
    }

    if (topics.length === 2) {
      const topicA = topics[0].keyword as TopicString;
      const topicB = topics[1].keyword as TopicString;
      const fetchedDataAPromise = fetchArticles(topicA, 12);
      const fetchedDataBPromise = fetchArticles(topicB, 12);

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
      const fetchedDataAPromise = fetchArticles(topicA, 8);
      const fetchedDataBPromise = fetchArticles(topicB, 8);
      const fetchedDataCPromise = fetchArticles(topicC, 8);

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
    res.status(500).json({ error: "Could not load articles" });
  }
}
