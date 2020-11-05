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

export default db;
