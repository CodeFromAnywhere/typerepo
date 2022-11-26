import type { GetStaticPaths, GetStaticPathsContext } from "next-types";
import { codestoriesGetPages } from "./codestoriesGetPages";

/**

Function that tells Next.js what the pages are that need to be statically generated
 */
export const codestoriesGetStaticPaths: GetStaticPaths = async (
  context: GetStaticPathsContext
) => {
  const queryPaths = ((await codestoriesGetPages()) || []).map(
    (x) => x.queryPath
  );

  // console.log({ paths });
  if (!queryPaths) {
    return { paths: [], fallback: "blocking" };
  }

  const staticPaths = queryPaths
    .filter((x) => x !== "")
    .map((p) => ({ params: { paths: p.split("/") } }));

  return {
    paths: staticPaths,
    fallback: "blocking",
  };
};
