import { AppProps } from "next/app";

import Head from "next/head";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { Layout, StoreProvider } from "db-ui";
import { pagesObject, pages, getPageTitle } from "db-ui";
import { AlertProvider } from "react-with-native-alert";
import { ModalProvider } from "react-with-native-modal";
import { useRouter } from "react-with-native-router";

import getConfig from "next/config";

import "../globals.css";
import "react-toastify/dist/ReactToastify.css";
import "react-datetime/css/react-datetime.css";
import "rc-time-picker/assets/index.css";
import "react-datepicker/dist/react-datepicker.css";

///rwn
import "db-ui/css.css";
import "simplified-schema-form/css.css";

import "react-with-native/css.css";
import "react-with-native-modal/css.css";
import "react-with-native-alert/css.css";
import "react-with-native-form/css.css";
import "react-with-native-form-inputs/css.css";
// import "react-with-native-notification/css.css";
import "react-with-native-router/css.css";
import "react-with-native-select/css.css";
import "react-with-native-store/css.css";
import "react-with-native-ui/css.css";
import "react-with-native-table/css.css";
import "big-button/css.css";
import "fancy-loader/css.css";
import "asset-input/css.css";

const progress = new ProgressBar();

//Binding events.
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const queryClient = new QueryClient();

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { publicRuntimeConfig } = getConfig();

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const path = router.route.slice(1);
  const pageKey = (path === "" ? "index" : path) as keyof typeof pagesObject;
  const page = pages.find((x) => x.key === pageKey);
  const title = page ? `${getPageTitle(page)} - Admin` : "Admin";

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>{title}</title>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/default.min.css"
        />
      </Head>
      {/* <ToastContainer /> */}
      <AlertProvider>
        <ModalProvider>
          <StoreProvider>
            <Layout Component={Component} pageProps={pageProps} />
          </StoreProvider>
        </ModalProvider>
      </AlertProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
