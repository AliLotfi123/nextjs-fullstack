import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import Layout from "../../../../components/Layout";
import { getPostById } from "../../../../lib/db";

export const SinglePost = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{ post: Post }> = async (
  context
) => {
  const id =
    typeof context.params?.id === "string"
      ? parseInt(context.params.id, 10)
      : undefined;
  const post = id ? await getPostById(id) : undefined;
  if (!post) {
    throw new Error(`Post ${id} was not found`);
  }
  return { props: { post } };
};
