import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function Home3() {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
      const posts: Post[] = await res.json();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to my Homepage</h1>

      <h2>TimeStamp: {Date.now()}</h2>
      <h2>Latest Posts</h2>

      {!posts ? (
        "Loading"
      ) : (
        <ul>
          {" "}
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}{" "}
        </ul>
      )}
    </Layout>
  );
}
