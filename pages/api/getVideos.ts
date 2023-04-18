import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

import prisma from "@/prisma/prisma";
import fetchVideos from "@/lib/utils/fetchVideos";
import { TopicString } from "@/lib/types";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") throw new Error("Method not allowed");

    const session = await getServerSession(req, res, authOptions);

    // If no session present
    if (!session) {
      const fetchedData = await fetchVideos(null, 24);
      return res.status(200).json(fetchedData);
    }

    const user = await prisma.user.findUnique({
      include: { topics: true },
      where: {
        email: session.user?.email as string
      }
    });

    // If no user || User has not selected topic preferences
    if (!user || !user.topics.length) {
      const fetchedData = await fetchVideos(null, 24);
      return res.status(200).json(fetchedData);
    }

    // Topic preferences
    const topics = user.topics;

    if (topics.length === 1) {
      const topic = topics[0].keyword as TopicString;
      const fetchedData = await fetchVideos(topic, 24);
      return res.status(200).json(fetchedData);
    }

    if (topics.length === 2) {
      const topicA = topics[0].keyword as TopicString;
      const topicB = topics[1].keyword as TopicString;

      // Deal with Youtube API not separating tech & science
      if (
        [topicA, topicB].includes("science") &&
        [topicA, topicB].includes("technology")
      ) {
        const fetchedData = await fetchVideos("technology", 24);
        return res.status(200).json(fetchedData);
      }

      // If not having to deal with that bullshit
      const fetchedDataAPromise = fetchVideos(topicA, 12);
      const fetchedDataBPromise = fetchVideos(topicB, 12);

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

      // Deal with Youtube API not separating tech & science
      const filteredTopics = [topicA, topicB, topicC].filter(
        (topic) => topic !== "science" && topic !== "technology"
      );

      if (filteredTopics.length === 1) {
        const fetchedDataAPromise = fetchVideos("technology", 16);
        const fetchedDataBPromise = fetchVideos(filteredTopics[0], 8);

        const allData = await Promise.all([
          fetchedDataAPromise,
          fetchedDataBPromise
        ]);

        const fetchedData = [...allData[0], ...allData[1]];
        fetchedData.sort(() => Math.random() - 0.5);
        return res.status(200).json(fetchedData);
      }

      // If not having to deal with THAT bullshit
      const fetchedDataAPromise = fetchVideos(topicA, 8);
      const fetchedDataBPromise = fetchVideos(topicB, 8);
      const fetchedDataCPromise = fetchVideos(topicC, 8);

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
    res.status(500).json({ error: "Could not load videos" });
  }
}
