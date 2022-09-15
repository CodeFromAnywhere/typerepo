import { mapMany } from "js-util";
import { getReferenceParameterInfo } from "schema-util";
import { fs } from "fs-util";
import { Creation } from "model-types";
import { log } from "log";
import { makeArray, mergeObjectsArray, notEmpty, sum } from "js-util";

//relative
import {
  Db,
  DbRemove,
  DbSet,
  DbUpdate,
  Keys,
  DbConfig,
  AnyModelObject,
  DbQueryResult,
  CustomQueryConfig,
  DbUpsert,
  UpsertQueryConfig,
  DbGet,
  GetQueryConfig,
  Include,
  IncludeDataObject,
} from "./types";
import { mergeConfigs } from "./convention/mergeConfigs";
import { removeMultiple, upsertItems } from "./alter/alter-functions";
import { getDatabaseFiles } from "./convention/getDatabaseFiles";
import { getAugmentedData } from "./util/getAugmentedData";
import { groupByFile } from "./util/groupByFile";
import { augmentItemWithReferencedDataRecursively } from "./util/augmentItemWithReferencedDataRecursively";

const maxConcurrency = 1024;
/**
Create your database by passing your models as a generic and some optional configuration
 */
export const createDb = <TModels extends AnyModelObject>(
  dbConfig?: DbConfig<TModels>
): Db<TModels> => {
  const getByFile = async <TModelName extends Keys<TModels>>(
    modelName: TModelName,
    config?: GetQueryConfig<TModels[TModelName]>
  ) => {
    const mergedQueryConfig = mergeConfigs(modelName, dbConfig, config);
    const dbFiles = await getDatabaseFiles(modelName, mergedQueryConfig);
    // console.log("getByFile", {
    //   modelName,
    //   mergedQueryConfig,
    //   dbFiles: dbFiles.length,
    // });

    /**
     * An object used for attaching all referenced data onto the model, recursively
     */
    let includeData: IncludeDataObject = {};

    /**
     * A recursive function that takes an Include and adds data to includeData, if it's not already there
     */
    const processInclude = async (includeConfig: Include) => {
      if (!includeConfig.referenceKey) return;

      const parameterInfo = getReferenceParameterInfo(
        includeConfig.referenceKey
      );

      if (!parameterInfo.isReferenceParameter || !parameterInfo.interfaceName)
        return;

      if (!includeData[parameterInfo.interfaceName]) {
        const includeThisData = await get(
          parameterInfo.interfaceName as Keys<TModels>,
          { manualProjectRoot: mergedQueryConfig.manualProjectRoot }
        );
        includeData[parameterInfo.interfaceName] = includeThisData;
      }

      if (includeConfig.include) {
        // Recursively process all includes as well
        const includeArray = makeArray(includeConfig.include);
        await Promise.all(includeArray.map(processInclude));
      }
    };

    // NB: for auto we need to do it per file because we don't know exactly which keys exist on the model yet
    const isAuto: boolean =
      config?.include && !Array.isArray(config.include)
        ? config.include.auto === true
          ? true
          : false
        : false;

    // NB: Create an includeArray or fill the includeData object
    const includeArray: Include[] =
      isAuto || !config?.include ? [] : makeArray(config?.include);
    await Promise.all(includeArray.map(processInclude));

    const dbContentPromises = dbFiles.map(async (dbFileLocation) => {
      const items = await getAugmentedData<TModels[TModelName]>(
        dbFileLocation,
        mergedQueryConfig.dbStorageMethod
      );
      if (!items) return;

      const filteredItems = config?.filter
        ? items.filter(config.filter)
        : items;

      let augmentedItems: TModels[TModelName][] = includeArray
        ? filteredItems.map(
            (item) =>
              augmentItemWithReferencedDataRecursively(
                item,
                includeArray,
                includeData
              ) as TModels[TModelName]
          )
        : filteredItems;

      if (isAuto) {
        /**
        TODO: 

        Go over all keys in the first item of augmentedItems, and see if it contains reference keys.

        For every reference key, create an `Include`. call `includes.map(processInclude)`
        
        Call augmentItemRecursively with the includes.

        */
        augmentedItems = augmentedItems;
      }

      return { [dbFileLocation.absolutePath]: augmentedItems };
    });

    const dbContent = (await Promise.all(dbContentPromises)).filter(notEmpty);
    const dbContentObject = mergeObjectsArray(dbContent);

    //console.log({ dbContentObject });
    return dbContentObject;
  };

  const get: DbGet<TModels> = async <TModelName extends Keys<TModels>>(
    modelName: TModelName,
    config?: GetQueryConfig<TModels[TModelName]>
  ) => {
    const items = (
      Object.values(
        await getByFile(modelName, config)
      ) as TModels[TModelName][][]
    ).flat();
    return items;
  };

  /**
   *
   */
  const clear = async <TModelName extends Keys<TModels>>(
    modelName: TModelName,
    config?: CustomQueryConfig
  ) => {
    const mergedConfig = mergeConfigs(modelName, dbConfig, config);
    const locations = await getDatabaseFiles(modelName, mergedConfig);

    await mapMany(
      locations,
      async (loc) => fs.existsSync(loc.absolutePath) && fs.rm(loc.absolutePath),
      maxConcurrency
    );

    return {
      amountRemoved: locations.length,
      isSuccesful: true,
      message: `${locations.length} files removed`,
    };
  };

  const set: DbSet<TModels> = async <TModelName extends Keys<TModels>>(
    modelName: TModelName,
    data: Creation<TModels[TModelName]>[],
    config?: CustomQueryConfig
  ) => {
    const mergedConfig = mergeConfigs(modelName, dbConfig, config);
    const { dbStorageMethod } = mergedConfig;
    const itemsPerFile = await groupByFile(data, mergedConfig, modelName);
    const locations = await getDatabaseFiles(modelName, mergedConfig);

    const upsertResults = // NB: ensure not to open too many files at once
      (
        await mapMany(
          locations,
          async (dbFileLocation) => {
            // First remove the file
            if (fs.existsSync(dbFileLocation.absolutePath)) {
              log(`Removing ${dbFileLocation.absolutePath}`, { type: "debug" });
              await fs.rm(dbFileLocation.absolutePath);
            }

            // Then, if there are new items for that file location, also set that file to contain the new items
            const itemsObject = itemsPerFile[dbFileLocation.absolutePath];
            if (itemsObject) {
              log(`set new values to there: ${itemsObject.items.length}`, {
                type: "debug",
              });

              const result = await upsertItems<TModels, TModelName>(
                dbStorageMethod,
                dbFileLocation,
                itemsObject.items
              );
              return result;
            }
          },
          maxConcurrency
        )
      ).filter(notEmpty);

    const amountInserted = sum(upsertResults.map((x) => x.amountInserted || 0));

    return {
      isSuccesful: true,
      amountInserted,
    };
  };

  const upsert: DbUpsert<TModels> = async <TModelName extends Keys<TModels>>(
    modelName: TModelName,
    data: Creation<TModels[TModelName]> | Creation<TModels[TModelName]>[],
    config?: UpsertQueryConfig
  ) => {
    const mergedConfig = mergeConfigs(modelName, dbConfig, config);
    const { dbStorageMethod } = mergedConfig;
    const creationItems = makeArray(data);

    //  splits the items into the needed files
    const dataPerStorageFile = await groupByFile(
      creationItems,
      mergedConfig,
      modelName
    );

    // console.log({ creationItems, dataPerStorageFile });

    //  upserts items for every file, grouped, efficiently.
    const result = await mapMany(
      Object.keys(dataPerStorageFile),
      async (absolutePath) => {
        const itemsObject = dataPerStorageFile[absolutePath];
        const { dbFileLocation, items } = itemsObject;
        if (config?.removeUntouched && fs.existsSync(absolutePath)) {
          await fs.rm(absolutePath);
        }

        // console.log(
        //   `upserting ${dbStorageMethod} ${modelName}`,
        //   dbFileLocation,
        //   items
        // );
        const result = await upsertItems<TModels, TModelName>(
          dbStorageMethod,
          dbFileLocation,
          items
        );

        return result;
      },
      maxConcurrency
    );

    return {
      isSuccesful: true,
      message: `Upserted into ${result.length} files`,
    };
  };

  const remove: DbRemove<TModels> = async <TModelName extends Keys<TModels>>(
    modelName: TModelName,
    removeWhere: (content: TModels[TModelName]) => boolean,
    config?: CustomQueryConfig
  ) => {
    const mergedQueryConfig = mergeConfigs(modelName, dbConfig, config);
    const dbFiles = await getDatabaseFiles(modelName, mergedQueryConfig);

    const amountRemovedArray = await mapMany(
      dbFiles,
      async (dbFileLocation) => {
        const { amountRemoved } = await removeMultiple(
          mergedQueryConfig.dbStorageMethod,
          dbFileLocation,
          (content) => removeWhere(content as TModels[TModelName])
        );

        return amountRemoved || 0;
      },
      maxConcurrency
    );

    const amountRemoved = sum(amountRemovedArray);

    if (amountRemoved === 0) {
      return { isSuccesful: false, message: "Nothing removed", amountRemoved };
    }

    return {
      amountRemoved,
      isSuccesful: true,
      message: "Items removed",
    };
  };

  const update: DbUpdate<TModels> = async <TModelName extends Keys<TModels>>(
    modelName: TModelName,
    updateWhere: undefined | ((content: TModels[TModelName]) => boolean),
    map: (oldValue: TModels[TModelName]) => TModels[TModelName],
    config?: CustomQueryConfig
  ) => {
    // `get` -> `update` -> `groupByFile(newItems)` -> set (overwrite those files, remove leftover files)

    const data = await get(modelName, config);

    let amountUpdated = 0;

    const newData: Creation<TModels[TModelName]>[] = data.map((item) => {
      const needsUpdate = updateWhere ? updateWhere(item) : true;
      if (needsUpdate) {
        amountUpdated++;
      }
      return needsUpdate ? map(item) : item;
    });

    const { isSuccesful, message } = await set(modelName, newData, config);

    const result: DbQueryResult = {
      amountUpdated,
      message,
      isSuccesful,
    };

    return result;
  };

  return {
    get,
    getByFile,
    clear,
    upsert,
    set,
    remove,
    update,
  };
};
