// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    res.status(200).json({ name: "John Doe" });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}
