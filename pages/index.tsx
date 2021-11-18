import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>0L-SCAN</title>
        <meta name="description" content="0L blockchain explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
};

export default Home;
