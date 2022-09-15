import { Creation, DbFileLocation, Storing } from "model-types";
import { notEmpty } from "js-util";
//relative
import { MergedQueryConfig } from "../types";
import { getDbFileLocation } from "../convention/getDbFileLocation";
import { addDefaultValues } from "../convention/addDefaultValues";
import {
  getItemModelLocation,
  makeStoringItem,
} from "../convention/storing-items";

export type ItemPerFileObject<T extends { [key: string]: any }> = {
  [absolutePath: string]: {
    dbFileLocation: DbFileLocation;
    items: Storing<T>[];
  };
};

export const groupByFile = async <T extends { [key: string]: any }>(
  creationItems: Creation<T>[],
  mergedConfig: MergedQueryConfig,
  modelName: string
) => {
  const dataWithLocations = (
    await Promise.all(
      creationItems.map(async (item) => {
        if (!item) {
          console.log("WARN");
          return;
        }

        const fullItem = addDefaultValues(item);
        const storingItem = makeStoringItem(fullItem) as Storing<T>;

        const itemModelLocation = getItemModelLocation(fullItem);

        const dbFileLocation = await getDbFileLocation(
          storingItem,
          itemModelLocation,
          mergedConfig,
          modelName
        );

        if (!dbFileLocation) return;

        return { storingItem, dbFileLocation };
      })
    )
  ).filter(notEmpty);

  const dataPerStorageFile = dataWithLocations.reduce(
    (fileObject, itemWithLocation) => {
      const { absolutePath } = itemWithLocation.dbFileLocation;

      const newItems = fileObject[absolutePath]
        ? fileObject[absolutePath].items.concat(itemWithLocation.storingItem)
        : [itemWithLocation.storingItem];

      fileObject[absolutePath] = {
        items: newItems,
        dbFileLocation: itemWithLocation.dbFileLocation,
      };

      return fileObject;
    },
    {} as ItemPerFileObject<T>
  );

  return dataPerStorageFile;
};
