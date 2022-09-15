import { getMarkdownReaderQueryPaths } from "bundle-util";
import { onlyUnique2 } from "js-util";
import { GetStaticPaths, GetStaticPathsContext } from "next";
/**

Function that tells Next.js what the pages are that need to be statically generated
 */
export const pathsGetStaticPaths: GetStaticPaths = async (
  context: GetStaticPathsContext
) => {
  const paths = await getMarkdownReaderQueryPaths();

  // console.log({ paths });
  if (!paths) {
    return { paths: [], fallback: false };
  }

  const staticPaths = paths
    .filter((x) => x !== "")
    .map((p) => ({ params: { paths: p.split("/") } }));

  return {
    paths: staticPaths,
    fallback: false, // can also be true or 'blocking'
  };
};
