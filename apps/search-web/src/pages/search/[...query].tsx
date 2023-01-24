import { AuthenticationLayout } from "layout";
import { GetStaticPaths, GetStaticProps } from "next";
import { SearchResultPage } from "../../components/SearchResultPage";
import { searchGetStaticProps } from "../../util/searchGetStaticProps";
import { QueryPageProps } from "../../util/types";

export default (props: QueryPageProps) => {
  return <AuthenticationLayout nextPage={SearchResultPage} pageProps={props} />;
};

export const getStaticProps = searchGetStaticProps;
export const getStaticPaths: GetStaticPaths = () => {
  return { fallback: "blocking", paths: [] };
};
