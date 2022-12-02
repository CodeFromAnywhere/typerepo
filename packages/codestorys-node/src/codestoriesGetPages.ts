import { getProjectRelativePaths, getTodoPaths } from "explore-project";
import { getProjectRoot } from "get-path";
import { notEmpty, onlyUnique2 } from "js-util";
// relative
import { fs, path } from "fs-util";
import { ReaderWebPage } from "webpage-types";
import { readMarkdownFileToModel } from "read-markdown-file";
import { WebMarkdownFile } from "markdown-types";

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
        const markdownCallToActions: any[] = [];
        const webMarkdownFile: WebMarkdownFile | null = fs.existsSync(
          absolutePath
        )
          ? await readMarkdownFileToModel(
              absolutePath,
              "codestorys-web",
              markdownCallToActions
            )
          : null;
        if (!webMarkdownFile) return;

        const readerWebPage: ReaderWebPage = {
          pageData: {
            projectRelativeFilePath,
            imagePath:
              webMarkdownFile.headerImage?.absoluteUrl ||
              webMarkdownFile.headerImage?.relativePath ||
              null,
            shortDescription: webMarkdownFile?.headerSubTitle || null,
            introDescription: webMarkdownFile?.markdown,
          },
          queryPath: projectRelativeFilePath.replaceAll("/", "-"),
          isMenuHidden: false,
          menuTitle:
            webMarkdownFile?.headerTitle ||
            webMarkdownFile?.name ||
            path.parse(projectRelativeFilePath).name,
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
