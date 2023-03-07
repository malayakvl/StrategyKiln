import Head from "next/head";
// import { getSession } from 'next-auth-client'
import React from "react";

export default function Services() {
  return (
    <>
      <Head>
        <title>Strategy Kiln - Services</title>
      </Head>
      Services page here!
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
