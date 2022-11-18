import { Div } from "react-with-native";
import { SearchResultComponent } from "./SearchResultComponent";
import { QueryPageProps } from "../util/types";
import { SearchBar } from "./SearchBar";
import { useRouter } from "react-with-native-router";

export const SearchResultPage = (props: QueryPageProps) => {
  const { query, searchResults } = props;
  const router = useRouter();
  return (
    <Div>
      <Div className="flex w-full justify-between">
        <Div
          className="text-3xl p-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          🏠
        </Div>
        <SearchBar initialValue={query || undefined} />
        <Div />
      </Div>
      <a
        className="text-blue-500"
        href={`https://www.google.nl/search?q=${query}`}
      >
        {query}
      </a>
      {searchResults?.map((searchResult, index) => {
        return (
          <SearchResultComponent
            key={`s${index}`}
            index={index}
            searchResult={searchResult}
          />
        );
      })}
    </Div>
  );
};
