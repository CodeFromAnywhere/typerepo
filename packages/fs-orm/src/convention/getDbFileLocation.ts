import { makeRelative } from "get-path";
import { path } from "fs-util";

//relative
import { MergedQueryConfig } from "../types";
import { getLocationPattern } from "./getLocationPattern";
import {
  Storing,
  DbFileLocation,
  ModelLocation,
  AugmentedAnyModelType,
} from "model-types";
import { log } from "log";
import { getDatabaseRootFolder } from "./getDatabaseRootFolder";

/**
 * Applies the convention to get the db-file-location of an item
 *
 * Based on the merged config:
 *
 * - if `operationRelativePath` is specified, gets a filePath in the operation
 * - if `projectRelativePath` is specified, gets a filepath in the project
 * - otherwise gets the pattern and replaces "*" with the slug (or id if slug is not available)
 *
 * Besides the absolute path, the operationName, projectRelativePath and operationRelativePath are also supplied.
 *
 * NB: currently, the item's `operationName`, `operationRelativePath` or `projectRelativePath` is not taken into account. It will simply look at the convention to see where it should be saved, and apply the MergedQueryConfig...
 */
export const getDbFileLocation = async (
  /**
   * The ModelLocation properties in the item are completely ignored. Only the ID or slug are used to determine the exact file the item should be stored in.
   */
  storedItem: Storing<AugmentedAnyModelType>,
  /**
   * Should be the modellocation of the actual item. If the operationName is present there, this will take priority over the merged query config.
   */
  itemModelLocation: ModelLocation,
  mergedConfig: MergedQueryConfig,
  modelName: string
): Promise<DbFileLocation | undefined> => {
  if (!mergedConfig.manualProjectRoot) {
    log("No project root", { type: "error" });
    return;
  }
  const operationName =
    itemModelLocation.operationName || mergedConfig.operationName;

  const rootFolder = await getDatabaseRootFolder(
    operationName,
    mergedConfig.manualProjectRoot
  );

  if (!rootFolder) return;

  const slugOrId: string = storedItem.slug || storedItem.id;

  const pattern = getLocationPattern(
    mergedConfig.dbStorageMethod,
    modelName,
    mergedConfig
  );
  if (!pattern) return;

  const absolutePath = path.join(rootFolder, pattern.replace("*", slugOrId));
  if (!absolutePath) return;

  const operationRelativePath = makeRelative(absolutePath, rootFolder);
  const projectRelativePath = makeRelative(
    absolutePath,
    mergedConfig.manualProjectRoot
  );

  const dbFileLocation: DbFileLocation = {
    modelName,
    absolutePath,
    operationName: operationName || null,
    projectRelativePath,
    operationRelativePath,
  };

  return dbFileLocation;
};
