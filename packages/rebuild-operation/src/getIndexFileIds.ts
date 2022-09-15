import { databaseFolderName } from "filename-conventions";
import { getFileIds } from "./getFileIds";

/**
 * gets identifiers of ts and tsx files, which are the relative path to a file without the extension
 */
export const getIndexFileIds = async (operationFolderPath: string) =>
  getFileIds({
    operationFolderPath,
    // NB: we take index/variables here because we need the file ids of any index as they would be the same in any index
    pathSuffix: `${databaseFolderName}/ts-variables`,
    extension: "json",
  });
