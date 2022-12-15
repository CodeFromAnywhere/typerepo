import { fs, path } from "fs-util";
import { getProjectRoot } from "get-path";
import { ReaderWebPage, WebPage } from "webpage-types";
import { copyCopyPairs } from "./copyCopyPairs";
import { findReaderStaticAssets } from "./findReaderStaticAssets";
import { makeRelative } from "fs-util-js";

export const copyReaderStaticAssets = async (
  operationBasePath: string,
  /**
   * non-reader webPages will be filtered out by checking if the projectRelativeFilePath exists on pageData and has the extension .md
   */
  allWebPages: WebPage<unknown>[]
) => {
  const projectRoot = getProjectRoot();
  if (!projectRoot) return;

  const baseDestinationPath = path.join(
    operationBasePath,
    "public",
    "markdown-assets"
  );

  if (fs.existsSync(baseDestinationPath)) {
    //first clean up if it was generated before
    await fs.rm(baseDestinationPath, { recursive: true });
  }

  const readerWebPages = allWebPages
    .map((x) => ({
      ...x,
      pageData: x.pageData as null | { [key: string]: any },
    }))
    // filter out the WebPages that don't have a filePath ending on .md
    .filter((x) => x.pageData?.projectRelativeFilePath?.endsWith(".md"))
    .filter((x) =>
      fs.existsSync(path.join(projectRoot, x.pageData?.projectRelativeFilePath))
    )
    .map((x) => x as ReaderWebPage);

  console.log({ readerPagesThatExist: readerWebPages.length });
  const absoluteAssetPaths =
    (await findReaderStaticAssets(readerWebPages)) || [];

  console.log({ foundAssetsThatExist: absoluteAssetPaths.length });
  const copyPairs = absoluteAssetPaths.map((absoluteAssetPath) => {
    const projectRelativeAssetPath = makeRelative(
      absoluteAssetPath,
      projectRoot
    );

    const absoluteDestinationPath = path.join(
      baseDestinationPath,
      projectRelativeAssetPath
    );

    return { absoluteSourcePath: absoluteAssetPath, absoluteDestinationPath };
  });

  await copyCopyPairs(copyPairs);

  console.log(`Copied ${copyPairs.length} files into your public folder`);

  // console.log({ copyPairs });
};
