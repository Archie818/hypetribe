// pages/api/verify.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const proof = req.body;

      const response = await fetch(
        "https://developer.worldcoin.org/api/v1/verify/app_staging_ad9e62a7517f041dc62751f4abb1c38c",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...proof, action: "login" }),
        }
      );

      if (response.ok) {
        const { verified } = await response.json();
        res.status(200).json({ verified });
      } else {
        const { code, detail } = await response.json();
        res
          .status(response.status)
          .json({ error: `Error Code ${code}: ${detail}` });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
