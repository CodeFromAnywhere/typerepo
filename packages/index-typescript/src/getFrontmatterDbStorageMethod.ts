import { dbStorageMethods, DbStorageMethod } from "code-types";
import { Frontmatter } from "matter-types";

/**
 * if isDbModel is specifically set to false, this will return null (which means this should overwrite other things)
 */
export const getFrontmatterDbStorageMethod = (
  parameters: null | Frontmatter
): DbStorageMethod | null | undefined => {
  if (!parameters) return;

  const dbStorageMethod =
    parameters.dbStorageMethod &&
    typeof parameters.dbStorageMethod === "string" &&
    dbStorageMethods.includes(parameters.dbStorageMethod)
      ? (parameters.dbStorageMethod as DbStorageMethod)
      : undefined;

  if (dbStorageMethod) return dbStorageMethod;

  const isDbModel = parameters.isDbModel;

  if (isDbModel === true) return "jsonMultiple";

  if (isDbModel === false) return null;
};
