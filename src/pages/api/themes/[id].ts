import type { NextApiRequest, NextApiResponse } from "next";
import themes from "../../../../themes.json";

export default function themeHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id, name },
  } = req;

  const theme = themes.find((theme) => theme.name === name);

  if (!theme) {
    return res.status(404).json({
      status: 404,
      message: "Not found",
    });
  }

  res.json({ ...themes });
}
