import { renderMarkdownContent } from "markdown";
import { ALink } from "next-a-link";
import { Div } from "react-with-native";
import { Tooltip } from "tooltip";
import { SearchResult } from "../util/types";

/**
 * If you click on a site that up and running, it should startup via pm2 before being redirected there
 */
export const SearchResultComponent = (props: {
  searchResult: SearchResult;
  index: number;
}) => {
  const { index, searchResult } = props;
  return (
    <Div key={`index${index}`}>
      <ALink href={searchResult.url}>{searchResult.title}</ALink>

      {searchResult.description ? (
        <Div>{renderMarkdownContent(searchResult.description, {})}</Div>
      ) : null}
    </Div>
  );
};
