import { humanCase } from "convert-case";
import { db } from "database";
import { generatedFolders } from "filename-conventions";
import { getProjectRoot } from "get-path";
import { sdkFunctionPaths } from "sdk-function-paths";
import { dbModelKeys } from "sdk-db";
import { explore } from "k-explore";
import { SearchResult } from "./types";
import { makeRelative } from "fs-util-js";
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
export const getAllSearchResults = async (
  query: string | null
): Promise<SearchResult[]> => {
  const projectRoot = getProjectRoot();

  if (!query || !projectRoot) return [];
  //  Alter search function to return all results from functions, files and db, and links to there.
  const functions = Object.keys(sdkFunctionPaths)
    .map((name) => {
      const path = sdkFunctionPaths[name as keyof typeof sdkFunctionPaths];

      return { name, path };
    })
    .filter((x) => {
      const names = `${x.name.toLowerCase()} ${humanCase(
        x.name
      ).toLowerCase()}`;
      return names.includes(query.toLowerCase());
    })
    .map((x) => {
      const result: SearchResult = {
        title: `⚡️ ${x.name}`,
        description: x.path,
        url: `/function/${x.name}`,
      };

      return result;
    });
  const files = (
    await explore({
      basePath: projectRoot,
      ignore: [
        ...generatedFolders,
        "db",
        "cloned",
        "backups",
        "bundled",
        "buntest",
      ],
      readmeOnTop: true,
      search: query || undefined,
      extension: ["md", "ts", "tsx"],
    })
  ).map((x) => {
    const relativePath = makeRelative(x.path, projectRoot);
    const result: SearchResult = {
      title: `${x.isFolder ? "📁" : "📄"} ${relativePath}`,
      url: `/files/${relativePath}`,
    };

    return result;
  });

  const dbModels = dbModelKeys
    .filter((x) =>
      `${x.toLowerCase()} ${humanCase(x).toLowerCase()}`.includes(
        query.toLowerCase()
      )
    )
    .map((x) => {
      const result: SearchResult = {
        title: `🗄 ${x}`,
        url: `/db/${x}`,
      };
      return result;
    });

  return [...dbModels, ...functions, ...files];
};
