import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Strategy Kiln - Home Page</title>
      </Head>
      Contact page here!
    </>
  );
}

export async function getServerSideProps() {
  const locale = "en";

  return {
    props: {
      locale,
    },
  };
}
