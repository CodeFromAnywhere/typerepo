import { KeyValueMarkdownModelType, Storing } from "model-types";
import { getParentSlug } from "../convention/getParentSlug";
import { DbQueryResult } from "../types";

/**
 * Takes stored data and a slug to remove
 */
export const removeKeyValueMarkdown = (
  storedData: Storing<KeyValueMarkdownModelType>[],
  /** slug to remove */
  slug: string
): DbQueryResult & {
  newStoredData: Storing<KeyValueMarkdownModelType>[];
} => {
  // Base case
  const foundItem = storedData.find((item) => item.slug === slug);

  if (!foundItem) {
    return {
      newStoredData: storedData,
      amountRemoved: 0,
      message: "slug not found",
      isSuccesful: true,
    };
  }

  if (foundItem.isHeaderCalculated) {
    // NB: remove all children (items of which the joined categoryStackCalculated starts with headerLocation)

    const headerLocation = foundItem.categoryStackCalculated
      .concat(foundItem.slug)
      .join(",");

    const newStoredData = storedData.filter((x) => {
      const isHeaderCalculatedToRemove = x.slug === foundItem.slug;
      const isCategoryStackSubset = x.categoryStackCalculated
        .join(",")
        .startsWith(headerLocation);

      return !isHeaderCalculatedToRemove && !isCategoryStackSubset;
    });

    const amountRemoved = storedData.length - newStoredData.length;
    return {
      newStoredData,
      amountRemoved,
      isSuccesful: true,
      message: "removed header and all it's children",
    };
  }

  // It's an item...

  const allItemsInThisCategory = storedData.filter(
    (x) => getParentSlug(x) === getParentSlug(foundItem)
  );

  if (allItemsInThisCategory.length === 0) {
    return {
      isSuccesful: false,
      message: "Tautology",
      newStoredData: storedData,
      amountRemoved: 0,
    };
  }

  // If the item is one of many in a category, we can simply remove it, because the category is still relevant
  if (allItemsInThisCategory.length > 1) {
    const newStoredData = storedData.filter((x) => x.slug !== foundItem.slug);
    const amountRemoved = storedData.length - newStoredData.length;
    return {
      newStoredData,
      isSuccesful: true,
      amountRemoved,
      message: "Removed item where item has more items in its category",
    };
  }

  // the item is the only one in a category (allItemsInThisCategory.length === 1)

  const item = allItemsInThisCategory[0];
  const category = storedData.find((x) => x.slug === getParentSlug(item));
  const newStoredDataWithoutItemAndCategory = storedData.filter(
    (x) => x.slug !== item.slug && x.slug !== getParentSlug(item)
  );

  if (!category) {
    // NB: empty categorystack for the item... this means it is a root item, no worries, we did not remove any category, so we don't need to place it back either
    const amountRemoved =
      storedData.length - newStoredDataWithoutItemAndCategory.length;
    return {
      isSuccesful: true,
      amountRemoved,
      message: "Removed it from the root",
      newStoredData: newStoredDataWithoutItemAndCategory,
    };
  }

  /** 
  we need to make the category the first item of its parent (or the start of the file)
  
  first remove the item and the category, then add it in the right place
  */

  const parentSlug = getParentSlug(category);

  const parentIndex = newStoredDataWithoutItemAndCategory.findIndex(
    (x) => x.slug === parentSlug
  );

  const newItem: Storing<KeyValueMarkdownModelType> = {
    ...category,
    isHeaderCalculated: false,
  };

  if (parentIndex === -1) {
    // parent doesn't exist. This means the category should become an item at the root of the file
    const newStoredData = [newItem, ...newStoredDataWithoutItemAndCategory];
    const amountRemoved = storedData.length - newStoredData.length;
    return { isSuccesful: true, newStoredData, amountRemoved };
  }

  // parent exists, so, like I said before, we need to make the category the first item of its parent (or the start of the file)

  const before = newStoredDataWithoutItemAndCategory.slice(0, parentIndex);
  const after = newStoredDataWithoutItemAndCategory.slice(parentIndex + 1);
  const parent = newStoredDataWithoutItemAndCategory[parentIndex];
  const newStoredData = [...before, parent, newItem, ...after];

  const amountRemoved = storedData.length - newStoredData.length;
  return { newStoredData, isSuccesful: true, amountRemoved };
};
