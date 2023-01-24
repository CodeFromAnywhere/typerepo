import { Div } from "react-with-native";
import { SearchResultComponent } from "./SearchResultComponent";
import { QueryPageProps } from "../util/types";
import { SearchBar } from "./SearchBar";
import { useRouter } from "react-with-native-router";
import { useEffect } from "react";
import { MarkdownContent } from "markdown";
import { makeArray } from "js-util";

export const SearchResultPage = (props: QueryPageProps) => {
  const { searchResults } = props;
  const router = useRouter();

  const query = router.query?.query
    ? makeArray(router.query.query).join("/")
    : undefined;
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
      {/* 
      <p>
        <MarkdownContent
          content={`
Search not implemented yet. Soon though! Until then, check out these cool tools:

- **[copy.ai](https://copy.ai)**: writes articles and social media posts for you

- **[perplexity.ai](https://perplexity.ai)**: explains exactly what you want to know by coupling bing search with AI

- **[presentations.ai](https://presentations.ai)**: make slides about any topic without making slides

- **[otter.ai](https://otter.ai)**: record your meeting, transcribe it, and automatically summarise it

- **[clipsai.com](https://clipsai.com)**: long-form content to social media posts

- **[podly.ai](https://podly.ai)**: perfect podcast annotation

- **[ChatGPT](https://chat.openai.com/)**: answers any question

Sign up for [our workshop](https://workshop.gptideas.com/) to learn how to automate your job asap!
`}
          config={{}}
        />
      </p> */}
      {searchResults?.map((searchResult, index) => {
        return (
          <SearchResultComponent
            key={`s${index}`}
            index={index}
            searchResult={searchResult}
          />
        );
      })}
      <h1>Or try these:</h1>
      <div className="flex flex-row w-full h-40">
        <a
          className="bg-orange-700 hover flex flex-1 justify-center items-center hover:bg-orange-500"
          href={`https://search.brave.com/search?q=${query}`}
        >
          🦁 Brave
        </a>
        <a
          className="bg-gray-700 hover flex flex-1 justify-center items-center hover:bg-gray-500"
          href={`https://www.google.com/search?igu=1&q=${query}`}
        >
          🤖 Google
        </a>
      </div>
    </Div>
  );
};
