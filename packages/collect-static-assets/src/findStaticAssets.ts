import { findEmbeds, findLinks } from "marked-util";
import { fs, path } from "fs-util";
import { getFolderJs, isPathRelative } from "fs-util-js";
/**
 * Returns the absolute paths of all static assets (embeds and links) in a markdown file of which the path is provided.
 */
export const findStaticAssets = async (
  absoluteMarkdownFilePath: string
): Promise<string[]> => {
  if (!fs.existsSync(absoluteMarkdownFilePath)) return [];
  const content: string = await fs.readFile(absoluteMarkdownFilePath, "utf8");

  const relativeEmbeds = findEmbeds(content)
    .filter((x) => isPathRelative(x.src))
    .map((x) => x.src);

  const relativeLinks = findLinks(content)
    .filter(
      (x) => isPathRelative(x.href)
      // NB: bit shitty that we can't link to typescript files or pdfs this way, but it's ok, we can embed them. Once needed, this must be improved, not now.
    )
    .filter((x) => x.type !== "text" && x.type !== "other")
    .map((x) => x.href);

  const absoluteMarkdownFolderPath = getFolderJs(absoluteMarkdownFilePath);
  const absoluteAssetPaths = [relativeLinks, relativeEmbeds]
    .flat()
    .map((relativePath) => path.join(absoluteMarkdownFolderPath, relativePath));

  return absoluteAssetPaths;
};
