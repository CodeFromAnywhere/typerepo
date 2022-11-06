import { AppProps } from "next/app";
import { Div, Span } from "react-with-native";
import { pagesObject } from "../pages";

import {
  publicEnvironmentVariables,
  publicLocalEnvironmentVariables,
} from "sdk-env-public";
import { LoginWrapper } from "login-form";
import useStore from "../store";

const title =
  publicLocalEnvironmentVariables.dbAdminTitle ||
  publicEnvironmentVariables.dbAdminTitle;

export const Layout = ({
  Component,
  pageProps,
}: {
  Component: AppProps["Component"];
  pageProps: AppProps["pageProps"];
}) => {
  const authTokenStore = useStore("api.authToken");

  const menu = (
    <Span className="border-l col-span-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-white border-l-gray-400">
      <pagesObject.menu />
    </Span>
  );
  //
  const mainPage = (
    <Div
      className={`
        col-span-4 overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-white`}
      textClassName="dark:text-white"
    >
      <LoginWrapper
        authTokenStore={authTokenStore}
        title={`${title || "Db Admin"} Login`}
      >
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </LoginWrapper>
    </Div>
  );

  return (
    <Div className="h-screen grid grid-rows-6">
      <Div className="row-span-6 grid grid-cols-5">
        {mainPage}
        {menu}
      </Div>
    </Div>
  );
};
