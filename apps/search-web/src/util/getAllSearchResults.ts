import { SearchResult } from "./types";

/**
Searches filepaths, then links to any `ui-web` that has this file available as a page, or VSCode.

For this we need to get the `MarkdownReaderPage` and other pages that are available in ui's and see the files they are linked to.

I want to be able to:

- search functions, interfaces, variables
- search operations
- search markdown files, anywhere
- search db-ui models

But there's more. To make a good serach... 

TODO:
- gather everything i've made before about search

*/
export const getAllSearchResults = (
  query: string | null
): SearchResult[] | undefined => {
  return [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];
};
