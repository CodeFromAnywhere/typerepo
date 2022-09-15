import { KeyValueMarkdownModelType, Storing } from "model-types";

/**
 * get a parent slug without the parent_xxxSlug reference (uses the categoryStackCalculated)
 *
 * can be undefined if the item has no parent
 */
export const getParentSlug = (
  item: Storing<KeyValueMarkdownModelType>
): string | undefined => {
  const parentSlug: string | undefined =
    item.categoryStackCalculated[item.categoryStackCalculated.length - 1];
  return parentSlug;
};
