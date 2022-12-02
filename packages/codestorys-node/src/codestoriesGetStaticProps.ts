import { MarkdownReaderPageProps } from "markdown-reader-types";
import type { GetStaticPropsContext } from "next-types";
import { codestoriesGetPages } from "./codestoriesGetPages";
import { markdownReaderGetStaticPropsFromPages } from "markdown-reader-functions";
/**
 */
export const codestoriesGetStaticProps = async (
  context: GetStaticPropsContext
): Promise<{
  props: MarkdownReaderPageProps;
}> => {
  const flat = (await codestoriesGetPages()) || [];
  return markdownReaderGetStaticPropsFromPages(
    context,
    flat,
    "codestories-web"
  );
};
