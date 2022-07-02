import type { NextApiRequest, NextApiResponse } from "next";

export default function getTodoById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
    id: req.query.id,
    title: "Playing with TypeScript",
    completed: true,
  });
}
