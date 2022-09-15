import { makeArray } from "js-util";
import { path } from "fs-util";
import { readJsonFile } from "read-json-file";
import { readCsvFile } from "read-csv-file";
import { readMarkdownFile } from "read-markdown-file";
import { markdownStringToKvmdParse } from "key-value-markdown-js";
import { DbFileLocation } from "model-types";
import { DbStorageMethod } from "code-types";

/**
 * Gets the stored data from any file with any storage method, and augments the modelLocation onto it...
 */
export const getAugmentedData = async <T>(
  dbFileLocation: DbFileLocation,
  dbStorageMethod: DbStorageMethod
): Promise<T[] | null> => {
  const { absolutePath, modelName, ...modelLocation } = dbFileLocation;

  const ext = path.parse(absolutePath).ext;

  if (ext === ".json") {
    const jsonContent = await readJsonFile<any>(absolutePath);
    const jsonContentArray = jsonContent ? makeArray(jsonContent) : null;
    const augmented: T[] | null = jsonContentArray
      ? (jsonContentArray.map((x) => ({
          ...x,
          ...modelLocation,
        })) as T[])
      : null;

    return augmented;
  }

  if (ext === ".csv") {
    const csvContent = await readCsvFile<any>(absolutePath);

    if (!csvContent) return null;

    const augmented: T[] = csvContent.map((x) => ({
      ...x,
      ...modelLocation,
    }));
    return augmented;
  }

  if (ext === ".md") {
    const mdParse = await readMarkdownFile(absolutePath);

    if (!mdParse) return null;
    const frontmatter = mdParse?.parameters;
    if (dbStorageMethod === "markdown") {
      const markdownContent = {
        ...frontmatter,

        markdown: mdParse.raw,
        ...modelLocation,
        // NB: have to convert to unknown here first because of the specified markdown prop
      } as unknown as T;

      return [markdownContent];
    }

    const keyValueMarkdownParse = markdownStringToKvmdParse(
      mdParse.raw,
      dbFileLocation
    );

    // NB: typing as unknown is required because it will only work for keyValueMarkdown models
    const keyValueMarkdown = keyValueMarkdownParse.data as unknown as T[];

    return keyValueMarkdown;
  }

  return null;
};
