import { getProjectRelativePaths, getTodoPaths } from "explore-project";
import { getProjectRoot } from "get-path";
import { notEmpty, onlyUnique2 } from "js-util";
import { findEmbeds } from "marked-util";
// relative
import { fs, path } from "fs-util";
import { ReaderWebPage } from "webpage-types";
import { readMarkdownFile } from "read-markdown-file";
import { getMarkdownIntro } from "markdown-parse-js";
import { MarkdownEmbed, MarkdownParse } from "markdown-types";

export const codestoriesGetPages = async (config?: {
  manualProjectRoot?: string;
}): Promise<undefined | ReaderWebPage[]> => {
  const projectRoot = config?.manualProjectRoot || getProjectRoot();
  if (!projectRoot) return;

  const projectRelativePaths = await getProjectRelativePaths();

  const codestoriesPaths =
    projectRelativePaths?.filter((x) => x.endsWith(".codestory.md")) || [];

  const pages: ReaderWebPage[] = (
    await Promise.all(
      codestoriesPaths.map(async (projectRelativeFilePath) => {
        const absolutePath = path.join(projectRoot, projectRelativeFilePath);
        const markdownParse: MarkdownParse | null = fs.existsSync(absolutePath)
          ? await readMarkdownFile(absolutePath)
          : null;
        if (!markdownParse) return;
        const readmeInfo = getMarkdownIntro(markdownParse);

        const images: MarkdownEmbed[] = findEmbeds(markdownParse.raw).filter(
          (x) => x.type === "image"
        );

        const firstImage = images.length > 0 ? images[0] : undefined;

        const readerWebPage: ReaderWebPage = {
          pageData: {
            projectRelativeFilePath,
            imagePath: firstImage?.src || null,
            shortDescription: readmeInfo.firstParagraph || null,
          },
          queryPath: projectRelativeFilePath.replaceAll("/", "-"),
          isMenuHidden: false,
          menuTitle:
            readmeInfo.title || path.parse(projectRelativeFilePath).name,
        };
        return readerWebPage;
      })
    )
  ).filter(notEmpty);

  const filteredPages = pages.filter(
    onlyUnique2<ReaderWebPage>((a, b) => a.queryPath === b.queryPath)
  );

  return filteredPages;
};
