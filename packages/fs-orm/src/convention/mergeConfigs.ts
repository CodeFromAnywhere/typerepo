import { getProjectRoot } from "get-path";
import { mergeObjects } from "js-util";
import {
  DbConfig,
  Keys,
  QueryConfig,
  MergedQueryConfig,
  AnyModelObject,
  CustomQueryConfig,
  GetQueryConfig,
} from "../types";

export const mergeConfigs = <TModels extends AnyModelObject>(
  modelName: Keys<TModels>,
  dbConfig?: DbConfig<TModels>,
  config?: CustomQueryConfig | GetQueryConfig<TModels[keyof TModels]>
) => {
  const hardcodedDefaultQueryConfig: QueryConfig = {
    dbStorageMethod: "jsonMultiple",
    manualProjectRoot: getProjectRoot(),
  };

  const modelConfig = dbConfig?.modelQueryConfig?.[modelName];

  const mergedQueryConfig = mergeObjects<QueryConfig>(
    hardcodedDefaultQueryConfig,
    dbConfig?.defaultQueryConfig,
    modelConfig,
    config
  )!;

  // NB: dbStorageMethod is now always set
  const merged = mergedQueryConfig as MergedQueryConfig;
  return merged;
};
