import { DbStorageMethod } from "code-types";
import { kebabCase } from "convert-case";
import { pluralize } from "pluralize";
import { MergedQueryConfig } from "../types";

/**
 * Returns the pattern or an exact relative path that the file(s) should be stored at. A star can be replaced with anything.
 *
 * Returning relative path has no preceding slash
 */
export const getLocationPattern = (
  dbStorageMethod: DbStorageMethod,
  modelName: string,
  mergedConfig: MergedQueryConfig
): string | undefined => {
  const { operationRelativePath, projectRelativePath } = mergedConfig;

  if (operationRelativePath) return operationRelativePath;
  if (projectRelativePath) return projectRelativePath;

  const fileOrFolderName = pluralize(kebabCase(modelName));
  if (dbStorageMethod === "jsonMultiple") return `db/${fileOrFolderName}.json`;
  if (dbStorageMethod === "keyValueMarkdown")
    return `db/${fileOrFolderName}.md`;
  if (dbStorageMethod === "csv") return `db/${fileOrFolderName}.csv`;

  if (dbStorageMethod === "jsonSingle") return `db/${fileOrFolderName}/*.json`;
  if (dbStorageMethod === "markdown") return `db/${fileOrFolderName}/*.md`;
};
