import { AppProps } from "next/app";

import Head from "next/head";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  publicEnvironmentVariables,
  publicLocalEnvironmentVariables,
} from "sdk-env-public";
import { MenuStoreProvider } from "nested-menu";
import "../globals.css";
import "react-toastify/dist/ReactToastify.css";
import "react-datetime/css/react-datetime.css";
import "react-datepicker/dist/react-datepicker.css";
///rwn
import "markdown-reader-ui/css.css";
import "nested-menu/css.css";
import "markdown-parse-transpile-ui/css.css";

import "react-with-native/css.css";
import "react-with-native-router/css.css";
import { MainPageProps } from "markdown-reader-ui";

const progress = new ProgressBar();

//Binding events.
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const queryClient = new QueryClient();

// Only holds serverRuntimeConfig and publicRuntimeConfig
export type RealAppProps = Omit<AppProps, "pageProps"> & {
  pageProps: MainPageProps;
};

function MyApp({ Component, pageProps }: RealAppProps) {
  const siteName =
    publicLocalEnvironmentVariables.markdownReaderTitle ||
    publicEnvironmentVariables.markdownReaderTitle ||
    "Docs";

  const title = pageProps.title ? `${pageProps.title} - ${siteName}` : siteName;

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>{title}</title>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/default.min.css"
        />
      </Head>
      {/* @ts-ignore */}
      <MenuStoreProvider>
        <Component {...pageProps} />
      </MenuStoreProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
