import Head from "next/head";
import { getSession } from "next-auth/react";
import BackendLayout from "../../components/Layout/BackendLayout";
import CardLineChart from "../../components/Cards/CardLineChart";

export default function Dashboard({ session }: { session: any }) {
  if (!session) return <></>;

  return (
    <>
      <Head>
        <title>Strategy Kiln - Dashboard</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div className="flex flex-wrap">
        <div className="w-full mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
      </div>
    </>
  );
}
Dashboard.Layout = BackendLayout;

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: { destination: `/auth/signin` },
    };
  }

  return {
    props: {
      session,
    },
  };
}
