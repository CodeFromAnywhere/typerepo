import { AppProps } from "next/app";
import Head from "next/head";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { StoreProvider } from "../store";
import { AlertProvider } from "react-with-native-alert";
import { ModalProvider } from "react-with-native-modal";
import getConfig from "next/config";
import { ToastContainer } from "react-with-native-notification";
import { DbLayout } from "../DbLayout";

import "react-toastify/dist/ReactToastify.css";
import "../globals.css";
import "db-crud/css.css";
import "authentication/css.css";
import "layout/css.css";
import "menu/css.css";
import "react-toastify/dist/ReactToastify.css";
import "react-datetime/css/react-datetime.css";
import "rc-time-picker/assets/index.css";
import "react-datepicker/dist/react-datepicker.css";

///rwn
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
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Database</title>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/default.min.css"
        />
      </Head>
      <ToastContainer />
      <AlertProvider>
        <ModalProvider>
          <StoreProvider>
            <DbLayout pageProps={pageProps} nextPage={Component} />
          </StoreProvider>
        </ModalProvider>
      </AlertProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
