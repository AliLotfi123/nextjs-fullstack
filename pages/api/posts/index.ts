import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql";
import db, { getAllPosts } from "../../../lib/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const posts = await getAllPosts();
    res.statusCode = 200;
    res.json(posts);
  } else if (req.method === "POST") {
    const body: { title: string; content: string } = req.body;
    const result = await db.query<mysql.OkPacket>(
      "INSERT INTO post (title, content) VALUES (?, ?)",
      [body.title, body.content]
    );
    await db.end();
    res.statusCode = 200;
    res.json({ id: result.insertId, title: body.title, conten: body.content });
  }
};
