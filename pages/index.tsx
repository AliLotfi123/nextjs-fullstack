import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  console.log(
    process.env.MYSQL_HOST,
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD
  );

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to my Homepage</h1>
    </Layout>
  );
}
