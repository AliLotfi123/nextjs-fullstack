import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host: "localhost",
    database: "blog",
    user: "development",
    password: "developer",
  },
});

export const getAllPosts = async () => {
  const posts = await db.query<Post[]>("SELECT * FROM post ORDER BY id DESC");
  await db.end();
  return posts.map(({ id, title, content }) => ({ id, title, content }));
};

export const getPostById = async (id: number) => {
  const posts = await db.query<Post[]>("SELECT * FROM post WHERE id = ?", [id]);
  await db.end();
  return posts.length
    ? { id: posts[0].id, title: posts[0].title, content: posts[0].content }
    : undefined;
};

export default db;
