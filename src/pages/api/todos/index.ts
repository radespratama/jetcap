import type { NextApiRequest, NextApiResponse } from "next";

export default function getAllDataTodos(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
    id: 1,
    title: "Playing with TypeScript",
    completed: true,
  });
}
