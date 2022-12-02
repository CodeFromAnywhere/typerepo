import { AppProps } from "next/app";
import { AuthenticationLayout } from "layout";
import Head from "next/head";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { AlertProvider } from "react-with-native-alert";
import { ModalProvider } from "react-with-native-modal";
import { useRouter } from "react-with-native-router";
import { StoreProvider } from "../util/store";
import { ToastContainer } from "react-with-native-notification";
import { MeAuthenticationInfo } from "authentication";
import "../globals.css";
import "context-menu/css.css";
import "timeline/css.css";
import "markdown/css.css";
import "react-toastify/dist/ReactToastify.css";
import "layout/css.css";
import "authentication/css.css";
import "react-datetime/css/react-datetime.css";
import "rc-time-picker/assets/index.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-with-native/css.css";
import "react-with-native-modal/css.css";
import "react-with-native-alert/css.css";
import "react-with-native-form/css.css";
import "react-with-native-form-inputs/css.css";
import "react-with-native-notification/css.css";
import "react-with-native-router/css.css";
import "react-with-native-select/css.css";
import "react-with-native-store/css.css";
import "react-with-native-ui/css.css";
import "react-with-native-table/css.css";
import "big-button/css.css";
import "fancy-loader/css.css";
import "apps-menu/css.css";
import "tooltip/css.css";
import { Div } from "react-with-native";

const progress = new ProgressBar();

//Binding events.
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />

        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />

        <title>Search</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
          rel="stylesheet"
        />

        {/* NB: for CODE syntax highlighting of "markdown" markdown-parser */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/default.min.css"
        />
      </Head>
      <ToastContainer />
      <AlertProvider>
        <ModalProvider>
          <StoreProvider>
            <AuthenticationLayout
              customHeader={
                <Div className="absolute top-0 right-0 w-40 rounded-full bg-green-400">
                  <MeAuthenticationInfo />
                </Div>
              }
              nextPage={Component}
              pageProps={pageProps}
            />
          </StoreProvider>
        </ModalProvider>
      </AlertProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
