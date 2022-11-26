import { getProjectRoot } from "get-path";
import { path } from "fs-util";
import {
  getFrontmattersMappedObject,
  getProjectRelativePaths,
} from "explore-project";

/**
 * Finds all mdfiles (absolute paths) in /text or /operations that have a frontmatterprop `.isCodestory: true`
 */
export const findCodestories = async (): Promise<string[]> => {
  // open the file
  const projectRoot = getProjectRoot();
  if (!projectRoot) return [];

  const allMarkdownPaths = await getProjectRelativePaths();

  const frontmatterObject = await getFrontmattersMappedObject(
    projectRoot,
    allMarkdownPaths
  );

  const stories =
    allMarkdownPaths?.filter((x) => {
      const frontmatter = frontmatterObject[x];
      if (!frontmatter) return false;

      const isCodestory = frontmatter.isCodestory === "true";
      return isCodestory;
    }) || [];

  const files = stories
    .filter((x) => !x.endsWith(".codestory.md"))
    .map((x) => x);

  return files.map((x) => path.join(projectRoot, x));
};
