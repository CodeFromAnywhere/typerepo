import { getDocsMarkdownReaderPages } from "bundle-util";
import { path } from "fs-util";
import { MainPageProps, getQueryPath } from "markdown-reader-ui";
import { GetStaticPropsContext } from "next";
import { readMarkdownFileToModel } from "read-markdown-file";
import { getProjectRoot } from "get-path";

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
  if (!realPage) {
    return { props: { pages } };
  }

  const absoluteMarkdownPath = realPage.filePath
    ? path.join(projectRoot, realPage.filePath)
    : undefined;

  const title = realPage.internalLinkWord || null;
  const markdownFile = absoluteMarkdownPath
    ? await readMarkdownFileToModel(absoluteMarkdownPath)
    : undefined;

  return {
    // Passed to the page component as props
    props: { pages, markdownFile, title },
  };
};
