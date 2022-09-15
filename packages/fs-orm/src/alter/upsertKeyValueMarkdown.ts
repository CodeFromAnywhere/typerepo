import { CategoryStack, KeyValueMarkdownModelType, Storing } from "model-types";
import { log } from "log";
import {
  findLastIndex,
  insertAt,
  makeArray,
  removeIndexFromArray,
} from "js-util";
import { getParentSlug } from "../convention/getParentSlug";
import { DbQueryResult } from "../types";

/**
this location matches any category that equals the categorystack
*/

export const findParent = (
  arrayItem: Storing<KeyValueMarkdownModelType>,
  newCategoryStack: CategoryStack
) => {
  const categoryStackCalculatedWithItself =
    arrayItem.categoryStackCalculated.concat(arrayItem.slug);
  const locationString = categoryStackCalculatedWithItself.join(",");
  const newItemLocationString = newCategoryStack.join(",");
  const isSameLocation = locationString === newItemLocationString;

  return isSameLocation;
};

/**
 *
 * Takes stored data and an item
 *
 * - updates the data and sets some rows to "item" if the item is found (through the slug). this works almost the same as the regular upsert function
 *
 * - otherwise inserts, at the right category, in the right place in the array
 *
 * BEWARE:
 *
 * - the categoryStackCalculated must be existing in the markdownfile.
 * - you cannot insert a header, always insert an item with `isHeaderCalculated:false`
 */

export const upsertKeyValueMarkdown = (
  storedData: Storing<KeyValueMarkdownModelType>[],
  storingItem: Storing<KeyValueMarkdownModelType>
): DbQueryResult & {
  newStoredData: Storing<KeyValueMarkdownModelType>[];
} => {
  // First case: try to update if the slug is the same
  let amountUpdated = 0;
  const updatedData = storedData.map((i) => {
    const needsUpdate = i.slug === storingItem.slug;
    if (needsUpdate) {
      amountUpdated++;
      // NB: you cannot change something to be a header or not, this is a calculated value
      return { ...storingItem, isHeaderCalculated: i.isHeaderCalculated };
    }
    return i;
  });

  if (amountUpdated > 0) {
    return {
      amountUpdated,
      amountInserted: 0,
      newStoredData: updatedData,
    };
  }

  // If no "update", let's insert

  if (storingItem.isHeaderCalculated) {
    // Headers cannot be inserted.
    const errorMessage = `
      This case is not supported.
       
You cannot insert a header because it will not have any items, which is not what we want.

If you create items for a parent-item, the parent-item will convert into a header.
`;
    log(`upsertKeyValueMarkdown: ${errorMessage}`, {
      type: "warning",
    });

    return {
      isSuccesful: false,
      newStoredData: storedData,
      amountInserted: 0,
      amountUpdated: 0,
      message: errorMessage,
    };
  }

  // insert an item

  const parentIndex = storedData.findIndex(
    (x) => x.slug === getParentSlug(storingItem)
  );
  const parent: Storing<KeyValueMarkdownModelType> | undefined =
    storedData[parentIndex];
  // If there is no parent, insert it at the start of the file
  if (!parent) {
    const newStoredData = [storingItem, ...storedData];
    return { isSuccesful: true, amountInserted: 1, newStoredData };
  }

  if (parent.isHeaderCalculated) {
    /*
    the parent is a category. in this case, we simply put the item as the first item below that category
    */

    const newStoredData = insertAt(
      storedData,
      makeArray(storingItem),
      parentIndex + 1
    );

    return {
      amountInserted: 1,
      newStoredData,
      isSuccesful: true,
      message: "Inserted the item in the header parent",
    };
  }

  /**
           
  The parent is an item. in this case:

  1) the parent needs to become a category
  2) the item needs to be placed under it
  3) the parent should be removed
  4) the last item that has the same categoryStackCalculated as the parent should be found
  5) This new category with its sole item needs to be placed as the last item value of its parent (below other items, but above sub categories)

  */

  // 1
  const parentHeader = { ...parent, isHeaderCalculated: true };
  // 2
  const newCategory = [parentHeader, storingItem];

  // WORKS console.log({ newCategory });
  // 3
  const storedDataWithoutParentItem = removeIndexFromArray(
    storedData,
    parentIndex
  );

  // WORKS console.log({ storedDataWithoutItem });

  // 4

  const finalItemIndex =
    findLastIndex(
      storedDataWithoutParentItem,
      (item) =>
        item.categoryStackCalculated.join(",") ===
          parentHeader.categoryStackCalculated.join(",") &&
        !item.isHeaderCalculated
    ) ||
    // NB: not sure if this would fix all edgecases but if the only item in a category is the one that we removed, the finalItemIndex is the parentIndex -1 (but now it's a category)
    parentIndex - 1;

  // if (finalItemIndex === undefined) {
  //   console.log("Unsupported Edgecase... ", { storedData, storingItem });
  //   return {
  //     newStoredData: storedData,
  //     amountRemoved: 0,
  //     amountInserted: 0,
  //     amountUpdated: 0,
  //   };
  // }

  const newStoredData = insertAt(
    storedDataWithoutParentItem,
    newCategory,
    finalItemIndex + 1
  );

  return {
    amountUpdated: 1,
    amountInserted: 1,
    newStoredData,
    message: "Inserted into an item (made that item a category, moved it)",
  };
};
