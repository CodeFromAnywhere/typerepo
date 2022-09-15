import { DbModels, modelQueryConfig } from "sdk-db";
import { createDb, CustomQueryConfig, DbConfig, mergeConfigs } from "fs-orm";

export const dbConfig = {
  modelQueryConfig,
  defaultQueryConfig: undefined,
} as DbConfig<DbModels>;

export const getMergedQueryConfig = (
  modelName: keyof DbModels,
  customQueryConfig?: CustomQueryConfig
) => mergeConfigs<DbModels>(modelName, dbConfig, customQueryConfig);

export const db = createDb<DbModels>(dbConfig);
