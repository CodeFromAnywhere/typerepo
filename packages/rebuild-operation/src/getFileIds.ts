import { path, withoutExtension } from "fs-util";
import { explore, SearchableExtension } from "k-explore";

/**
 * gets all identifiers of files, which are the relative path to a file without the extension
 */
export const getFileIds = async ({
  operationFolderPath,
  pathSuffix,
  extension,
}: {
  operationFolderPath: string;
  extension?: SearchableExtension | SearchableExtension[];
  pathSuffix: string;
}) => {
  const basePath = path.join(operationFolderPath, pathSuffix);

  return (
    await explore({
      basePath,
      extension,
    })
  )
    .map((x) => x.path)
    .map((p) => withoutExtension(p.slice(basePath.length)));
};
