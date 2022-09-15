import { DbStorageMethod } from "code-types";

export const getDbStorageMethodExtension = (
  dbStorageMethod: DbStorageMethod
): string => {
  if (dbStorageMethod === "csv") return ".csv";
  if (dbStorageMethod === "jsonMultiple") return ".json";
  if (dbStorageMethod === "jsonSingle") return ".json";
  if (dbStorageMethod === "keyValueMarkdown") return ".md";
  return ".md";
};
