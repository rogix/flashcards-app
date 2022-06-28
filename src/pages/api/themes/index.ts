import type { NextApiRequest, NextApiResponse } from "next";
import themes from "../../../../themes.json";

export default function themeHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method === "GET") {
    return res.status(200).json(themes);
  }

  if (method === "POST") {
    const { body } = req;

    themes.push({ ...body, id: new Date() });

    return res.status(200).json(themes);
  }
}
