import { fs, path } from "fs-util";
import { getOperationPath } from "get-path";

/**
 * returns folder name
 *
 * finds the first foldername that is available in this folder but also there is nowhere an operation already with this name
 *
 * there is also getAvailableFolderPath for non-operation folders
 */
export const getAvailableOperationName = async (
  rootFolderPath: string,
  preferredFolderName: string,
  manualProjectRoot?: string
): Promise<string> => {
  //making sure we make a folder that doesn't exist yet:
  let n = 0;
  let availableFolderName = preferredFolderName;

  while (true) {
    const folderAlreadyExists = fs.existsSync(
      path.join(rootFolderPath, availableFolderName)
    );

    const operationAlreadyExists =
      (await getOperationPath(availableFolderName, {
        manualProjectRoot,
        notUseSdk: !!manualProjectRoot,
      })) !== undefined;

    if (!folderAlreadyExists && !operationAlreadyExists) break;

    n++;
    availableFolderName = `${preferredFolderName}${n}`;
  }

  return availableFolderName;
};
