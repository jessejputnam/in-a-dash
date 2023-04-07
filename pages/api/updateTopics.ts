// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

import prisma from "@/prisma/prisma";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "PATCH") throw new Error("Method not allowed");

    const session = await getServerSession(req, res, authOptions);

    if (!session) throw new Error("No session found");

    const user = await prisma.user.findUnique({
      include: { topics: true },
      where: {
        email: session.user?.email as string
      }
    });

    if (!user) throw new Error("No user could be found");

    type NewTopic = { id: string };

    const newTopics: NewTopic[] = req.body;
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { topics: { set: newTopics.map((topic) => ({ id: topic.id })) } }
    });

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: "Could not update user topics" });
  } finally {
    await prisma.$disconnect();
  }
}
