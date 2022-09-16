import { getDocsMarkdownReaderPages } from "bundle-util";
import { path } from "fs-util";
import { MainPageProps, getQueryPath } from "markdown-reader-ui";
import { GetStaticPropsContext } from "next";
import { readMarkdownFileToModel } from "read-markdown-file";
import { getProjectRoot } from "get-path";
import { queryPathsArrayToNestedPathObject } from "nested-menu";

export const getKeysAtObjectPath = <T extends { [key: string]: any }>(
  object: T,
  objectPath: string
) => {
  const pathParts = objectPath.split("/");
  const objectAtLocation = pathParts.reduce((objectSubset, part) => {
    if (!objectSubset) return;
    const subset = objectSubset[part];
    return subset;
  }, object as T | undefined);

  const children = objectAtLocation ? Object.keys(objectAtLocation) : [];

  return children;
};

export const getOneFolderUpPath = (folderPath: string) => {
  const pathParts = folderPath.split("/");
  pathParts.pop();
  return pathParts.join("/");
};

/**
 */
export const pathGetStaticProps = async (
  context: GetStaticPropsContext
): Promise<{
  props: MainPageProps;
}> => {
  const pages = (await getDocsMarkdownReaderPages()) || [];
  const projectRoot = getProjectRoot();
  if (!projectRoot) {
    return { props: { pages } };
  }

  const queryPath = getQueryPath(context.params);

  // definitions/statements/functions/interfaces/operations

  const realPage = pages.find((x) => x.queryPath === queryPath);
  const nestedPathObject = queryPathsArrayToNestedPathObject(
    pages.filter((x) => x.isMenuItem).map((x) => x.queryPath)
  );

  if (!realPage) {
    const children = getKeysAtObjectPath(nestedPathObject, queryPath);
    const title = queryPath.split("/").pop();
    return { props: { pages, children, title } };
  }

  const oneFolderUp = getOneFolderUpPath(queryPath);
  const siblings = getKeysAtObjectPath(nestedPathObject, oneFolderUp);
  const meIndex = siblings.findIndex(
    (sibling) => queryPath.split("/").pop() === sibling
  );

  const previousFolder = siblings[meIndex - 1];
  const previousQueryPath = previousFolder
    ? `${oneFolderUp}/${previousFolder}`
    : null;
  const nextFolder = siblings[meIndex + 1];
  const nextQueryPath = nextFolder ? `${oneFolderUp}/${nextFolder}` : null;

  const absoluteMarkdownPath = realPage.filePath
    ? path.join(projectRoot, realPage.filePath)
    : undefined;

  const title = realPage.internalLinkWord || null;
  const markdownFile = absoluteMarkdownPath
    ? await readMarkdownFileToModel(absoluteMarkdownPath)
    : undefined;

  return {
    // Passed to the page component as props
    props: { pages, markdownFile, title, nextQueryPath, previousQueryPath },
  };
};
