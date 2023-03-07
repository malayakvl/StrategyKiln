import "bootstrap/dist/css/bootstrap.css";
import "../styles/bootstrap/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/global.scss";

import type { NextPage } from "next";
import Head from "next/head";
import type { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Provider as ReduxProvider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import store from "../app/store";

import MainLayout from "../components/Layout/MainLayout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = (Component as any).Layout || MainLayout;

  return (
    <ReduxProvider store={store}>
      <SessionProvider session={pageProps.session}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Strategy Kiln Application</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        {/*<ConfirmationModal />*/}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </ReduxProvider>
  );
}
