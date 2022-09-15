import { DbStorageMethod, markdownParseToMarkdownModelType } from "code-types";
import {
  KeyValueMarkdownModelType,
  KeyValueMarkdownParse,
  MarkdownModelType,
  AugmentedAnyModelType,
  markdownModelTypeToMarkdownString,
  Storing,
  DbFileLocation,
} from "model-types";
import { csvItemArrayToCsvString, CsvItemType } from "csv-util";
import { canWriteSync, fs, writeJsonToFile, writeStringToFile } from "fs-util";
import { kvmdParseToMarkdownString } from "key-value-markdown-js";
import { log } from "log";
import { readCsvFile } from "read-csv-file";
import { readJsonFile } from "read-json-file";
import { readKvmdFile } from "read-kvmd-file";
import { readMarkdownFile } from "read-markdown-file";
import { AnyModelObject, DbQueryResult } from "../types";
import { removeKeyValueMarkdown } from "./removeKeyValueMarkdown";
import { upsert } from "./upsert";
import { upsertKeyValueMarkdown } from "./upsertKeyValueMarkdown";
import { makeArray } from "js-util";
import { makeStoringItem } from "../convention/storing-items";
import { getAugmentedData } from "../util/getAugmentedData";

/**
 * upsert an item into storage in any storage method
 */
export const upsertItems = async <
  TModels extends AnyModelObject = any,
  TModelName extends string = any
>(
  dbStorageMethod: DbStorageMethod,
  dbFileLocation: DbFileLocation,
  storingItems: Storing<TModels[TModelName]> | Storing<TModels[TModelName]>[]
): Promise<DbQueryResult> => {
  const storingItemsArray = makeArray(storingItems);

  // Special case!
  // TODO: we don't support multiple items for this case
  if (dbStorageMethod === "keyValueMarkdown") {
    const storingItem = storingItemsArray[0];

    const parentKey = Object.keys(storingItem).find(
      (x) => x.startsWith("parent_") && x.endsWith("Slug")
    );
    const parentSlug = parentKey ? storingItem[parentKey] : undefined;

    return alterKeyValueMarkdown(dbFileLocation, (storedData) => {
      // NB: CategoryStack is overwritten! We are first making sure that categoryStackCalculated is a real existing categoryStackCalculated based on the parent_xxxSlug.
      const realStoredData = storedData as Storing<KeyValueMarkdownModelType>[];
      const parent = parentSlug
        ? realStoredData.find((x) => x.slug === parentSlug)
        : undefined;

      // NB: we overwrite categoryStackCalculated, unless the parentKey wasn't found in the storingItem.
      const categoryStackCalculated: string[] = !parentKey
        ? storingItem.categoryStackCalculated || []
        : parent
        ? parent.categoryStackCalculated.concat(parent.slug)
        : [];

      // console.log({ parentKey, parentSlug, parent, categoryStackCalculated });

      const realStoringItem = {
        ...storingItem,
        categoryStackCalculated,
        isHeaderCalculated:
          storingItem.isHeaderCalculated !== undefined
            ? storingItem.isHeaderCalculated
            : false,
        comment: storingItem.comment === undefined ? null : storingItem.comment,
        // convert to unknown first because not every TModels[TModelName] is of type KeyValueMarkdownModelType
      } as unknown as Storing<KeyValueMarkdownModelType>;

      return upsertKeyValueMarkdown(realStoredData, realStoringItem);
    });
  }

  return alterAny(dbStorageMethod, dbFileLocation, (storedData) =>
    upsert(storedData, storingItemsArray)
  );
};

/**
 * Function that lets you remove items from one specific file, for any storage method
 */
export const removeMultiple = async (
  dbStorageMethod: DbStorageMethod,
  dbFileLocation: DbFileLocation,
  removeWhere: (content: AugmentedAnyModelType) => boolean
): Promise<DbQueryResult> => {
  const { absolutePath, modelName, ...modelLocation } = dbFileLocation;
  const isSingleItemStorageMethod =
    dbStorageMethod === "jsonSingle" || dbStorageMethod === "markdown";

  // NB: for single item storage methods, we can simply remove the file
  if (isSingleItemStorageMethod) {
    const content = await getAugmentedData<AugmentedAnyModelType>(
      dbFileLocation,
      dbStorageMethod
    );
    const item = content ? content[0] : null;
    if (
      fs.existsSync(dbFileLocation.absolutePath) &&
      canWriteSync(dbFileLocation.absolutePath) &&
      item &&
      removeWhere(item)
    ) {
      const res = await fs.rm(dbFileLocation.absolutePath);
      return { amountRemoved: 1 };
    }

    return { amountRemoved: 0 };
  }

  if (dbStorageMethod === "keyValueMarkdown") {
    return alterKeyValueMarkdown(dbFileLocation, (storedData) => {
      const realStoredData = storedData as Storing<KeyValueMarkdownModelType>[];

      const finalStoredData = realStoredData.reduce((storedDataNow, item) => {
        const completeItem: KeyValueMarkdownModelType = {
          ...item,
          ...modelLocation,
        };

        if (removeWhere(completeItem)) {
          // If remove, remove it with all its children
          const { newStoredData } = removeKeyValueMarkdown(
            storedDataNow,
            completeItem.slug
          );
          return newStoredData;
        }

        // Otherwise it stays the same
        return storedDataNow;
      }, [] as Storing<KeyValueMarkdownModelType>[]);

      return {
        newStoredData: finalStoredData,
        isSuccesful: true,
        amountRemoved: getLength(finalStoredData) - getLength(storedData),
      };
    });
  }

  // otherwise, we'll remove the item from the array
  return alterAny(dbStorageMethod, dbFileLocation, (storedData) => {
    const fullData = storedData.map((item) => ({
      ...item,
      ...modelLocation,
    })) as AugmentedAnyModelType[];

    const newFullData = fullData.filter((item) => {
      return !removeWhere(item);
    });
    const newStoredData = newFullData.map((item) => makeStoringItem(item));
    const amountRemoved = getLength(newFullData) - getLength(storedData);
    return { amountRemoved, newStoredData, isSuccesful: true };
  });
};

/**
 * Alters a csv
 */
export const alterCsv: AlterFunction = async (dbFileLocation, alterFn) => {
  const { absolutePath } = dbFileLocation;
  const bareData =
    (await readCsvFile<Storing<CsvItemType>>(absolutePath)) || [];
  const isNewFile = !bareData;
  const { newStoredData, ...queryResult } = alterFn(bareData);
  const newDataString = csvItemArrayToCsvString(newStoredData);
  const isSuccesful = await writeStringToFile(absolutePath, newDataString);
  if (!isSuccesful) return { isSuccesful, message: "Could not write to file" };
  return {
    isNewFile,
    isSuccesful,
    ...queryResult,
  };
};

/**
 * Alters a json single file
 */
export const alterJsonSingle: AlterFunction = async (
  dbFileLocation,
  alterFn
) => {
  const { absolutePath } = dbFileLocation;
  const storedJson = await readJsonFile<Storing<AugmentedAnyModelType>>(
    dbFileLocation.absolutePath
  );
  const isNewFile = !storedJson;
  const storedData = storedJson ? [storedJson] : [];
  const { newStoredData, ...queryResult } = alterFn(storedData);
  const isSuccesful = await writeJsonToFile(absolutePath, newStoredData[0]);

  if (!isSuccesful) return { isSuccesful, message: "Could not write to file" };
  return {
    isNewFile,
    isSuccesful,
    ...queryResult,
  };
};

/**
 * Safely gets the length of something
 */
export const getLength = (array: any[]) => {
  if (!Array.isArray(array)) {
    log(`Array is not array`, { type: "error" }, { array });
    return 0;
  }
  return array.length;
};

/**
 * Alters a json single file
 */
export const alterJsonMultiple: AlterFunction = async (
  dbFileLocation,
  alterFn
) => {
  const { absolutePath } = dbFileLocation;
  const storedJson = await readJsonFile<Storing<AugmentedAnyModelType>[]>(
    dbFileLocation.absolutePath
  );

  const storedData = storedJson || [];

  const isNewFile = !storedJson;
  const { newStoredData, ...queryResult } = alterFn(storedData);

  const isSuccesful = await writeJsonToFile(absolutePath, newStoredData);

  if (!isSuccesful) return { isSuccesful, message: "Could not write to file" };
  return {
    isNewFile,
    isSuccesful,
    ...queryResult,
  };
};

type AlterFunction = (...parameters: AlterParameters) => Promise<DbQueryResult>;

type AlterParameters = [
  dbFileLocation: DbFileLocation,
  alterFn: (
    storedData: Storing<AugmentedAnyModelType>[]
  ) => { newStoredData: Storing<AugmentedAnyModelType>[] } & DbQueryResult
];

export const alterKeyValueMarkdown: AlterFunction = async (
  dbFileLocation,
  alterFn
) => {
  const { absolutePath } = dbFileLocation;

  const kvmdParse: KeyValueMarkdownParse | null = await readKvmdFile(
    absolutePath,
    dbFileLocation
  );

  const isNewFile = !kvmdParse;

  const storedData = kvmdParse?.data || [];
  const { newStoredData, ...queryResult } = alterFn(storedData);

  const newKvmdParse: KeyValueMarkdownParse = {
    parameters: kvmdParse?.parameters || {},
    data: newStoredData as KeyValueMarkdownModelType[],
  };

  const newDataString = kvmdParseToMarkdownString(newKvmdParse);
  const isSuccesful = await writeStringToFile(absolutePath, newDataString);

  if (!isSuccesful) return { isSuccesful, message: "Could not write to file" };
  return {
    isNewFile,
    isSuccesful,
    ...queryResult,
  };
};

/**
 * Alters a markdown file
 */
export const alterMarkdown: AlterFunction = async (dbFileLocation, alterFn) => {
  const { absolutePath } = dbFileLocation;
  const markdownParse = await readMarkdownFile(absolutePath);
  const isNewFile = !markdownParse;
  const markdownModelItem = markdownParseToMarkdownModelType(markdownParse);

  const storedData = markdownModelItem ? [markdownModelItem] : [];
  const { newStoredData, ...queryResult } = alterFn(storedData);

  const finalItem: Storing<MarkdownModelType> = newStoredData[0];
  const markdownString = markdownModelTypeToMarkdownString(finalItem);
  const isSuccesful = await writeStringToFile(absolutePath, markdownString);

  if (!isSuccesful) return { isSuccesful, message: "Could not write to file" };
  return {
    isNewFile,
    isSuccesful,
    ...queryResult,
  };
};

/**
 * low level function that alters data from any storage method at a certain location
 *
 * comprises all dbStorageMethods
 */
export const alterAny = async (
  dbStorageMethod: DbStorageMethod,
  ...alterParameters: AlterParameters
): Promise<DbQueryResult> => {
  if (dbStorageMethod === "csv") return alterCsv(...alterParameters);
  if (dbStorageMethod === "jsonSingle")
    return alterJsonSingle(...alterParameters);
  if (dbStorageMethod === "keyValueMarkdown") {
    // this case never happens, this is never the case
    log("Wut??? this case should be prevented by its parent function", {
      type: "warning",
    });
    return alterKeyValueMarkdown(...alterParameters);
  }
  if (dbStorageMethod === "markdown") return alterMarkdown(...alterParameters);
  return alterJsonMultiple(...alterParameters);
};
