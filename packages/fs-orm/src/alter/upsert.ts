import { AugmentedAnyModelType } from "model-types";
import { makeArray, notEmpty } from "js-util";
import { log } from "log";
import { Storing } from "model-types";
import { DbQueryResult } from "../types";

/**
 * Takes stored data and an item
 *
 * - updates the data and sets some rows to "item" if the item is found (through the id or slug)
 * - otherwise inserts
 *
 * NB: this function works for any storage method except for key value markdown
 */
export const upsert = (
  /**
   * The items that were already there
   */
  storedData: Storing<AugmentedAnyModelType>[],
  /**
   * The items that need to be overwritten or inserted
   */
  storingItems:
    | Storing<AugmentedAnyModelType>
    | Storing<AugmentedAnyModelType>[]
): DbQueryResult & {
  newStoredData: Storing<AugmentedAnyModelType>[];
} => {
  const storingItemsArray = makeArray(storingItems);
  let amountUpdated = 0;

  const newStoredData = storedData
    .map((i) => {
      if (!i) return;
      // NB: for every item in the stored data, try to find one that matches
      const storingIndex = storingItemsArray.findIndex((x) => {
        if (!x) {
          log("weird item found in your data, replacing", { type: "debug" });
          return true;
        }

        const matchId = x.id === i.id;
        // NB: sometimes slug can be undefined for some models.
        const matchSlug = x.slug !== undefined && x.slug === i.slug;

        return matchId || matchSlug;
      });

      if (storingIndex !== -1) {
        // NB: it needs to be updated, so simply remove it because the new item is going to be concatenated
        amountUpdated++;
        return;
      }

      return i;
    })
    .filter(notEmpty)
    .concat(storingItems);

  return {
    amountUpdated,
    amountInserted: amountUpdated === 0 ? 1 : 0,
    newStoredData,
  };
};
