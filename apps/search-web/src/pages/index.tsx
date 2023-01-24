import { AuthenticationLayout } from "layout";
import { HomePage } from "../components/HomePage";
import { searchGetStaticProps } from "../util/searchGetStaticProps";
import { QueryPageProps } from "../util/types";
export default (props: QueryPageProps) => {
  return <AuthenticationLayout nextPage={HomePage} pageProps={props} />;
};

export const getStaticProps = searchGetStaticProps;
