import { Div } from "react-with-native";
import { SearchResult } from "../util/types";

/**
 * If you click on a site that up and running, it should startup via pm2 before being redirected there
 */
export const SearchResultComponent = (props: {
  searchResult: SearchResult;
  index: number;
}) => {
  const { index, searchResult } = props;
  return <Div key={`searchhit${index}`}>hit {index}</Div>;
};
