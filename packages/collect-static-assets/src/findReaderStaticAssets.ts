import { fs, path } from "fs-util";
import { onlyUnique2 } from "js-util";
import { getProjectRoot } from "get-path";
import { ReaderWebPage } from "webpage-types";
import { findStaticAssets } from "./findStaticAssets";
/**

markdown-renderer turns a relative link into this: ?mdpath=x&relativePath=y

for static, we need to turn it into something similar, but we need to guarantee no file collisions. simple! 

we can just take the project-relative file path of the asset, and put it in /public/images in next.js. the final url of the asset in public next.js then becomes `images/[path/to/asset.jpg]`


 */
export const findReaderStaticAssets = async (
  /**
   * Your markdown pages
   */
  readerWebPages: ReaderWebPage[]
) => {
  const projectRoot = getProjectRoot();

  if (!projectRoot) return;

  const absoluteAssetPaths = (
    await Promise.all(
      readerWebPages.map(async (page) => {
        const absoluteMarkdownFilePath = path.join(
          projectRoot,
          page.pageData.projectRelativeFilePath
        );

        const assetPaths = await findStaticAssets(absoluteMarkdownFilePath);

        return assetPaths;
      })
    )
  )
    .flat()
    .filter(onlyUnique2())
    .filter(fs.existsSync);

  return absoluteAssetPaths;
};
