import { Storing } from "model-types";
import { AugmentedAnyModelType, DbQueryResult } from "../types";
/**
 * Takes stored data and an item
 *
 * - updates the data and sets some rows to "item" if the item is found (through the id or slug)
 * - otherwise inserts
 *
 * NB: this function works for any storage method except for key value markdown
 */
export declare const upsert: (storedData: Storing<AugmentedAnyModelType>[], storingItems: Storing<AugmentedAnyModelType> | Storing<AugmentedAnyModelType>[]) => DbQueryResult & {
    newStoredData: Storing<AugmentedAnyModelType>[];
};
//# sourceMappingURL=upsert.d.ts.map