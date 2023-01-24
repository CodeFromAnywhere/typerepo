import * as React from "react";
import { AuthenticationLayout } from "layout";

import {
  readerPageGetStaticPaths,
  readerPageGetStaticProps,
} from "generative-functions-node";
import { ReaderProps } from "ai-types";

import { ReaderPageNext } from "generative-ui";
import { Div } from "react-with-native";

export const getStaticProps = readerPageGetStaticProps;
export const getStaticPaths = readerPageGetStaticPaths;

const ReaderPageLayout = (props: ReaderProps) => {
  return (
    <AuthenticationLayout
      overwriteDefaultPages={["signup"]}
      nextPage={() => <Div>READERPAGE</Div>}
      pageProps={props}
    />
  );
};

export default ReaderPageLayout;
