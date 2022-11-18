import { GetStaticPaths, GetStaticProps } from "next";
import { SearchResultPage } from "../components/SearchResultPage";
import { searchGetStaticProps } from "../util/searchGetStaticProps";

export default SearchResultPage;

export const getStaticProps = searchGetStaticProps;
export const getStaticPaths: GetStaticPaths = () => {
  return { fallback: "blocking", paths: [] };
};
