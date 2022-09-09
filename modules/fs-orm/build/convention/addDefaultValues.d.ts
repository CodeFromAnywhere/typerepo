import { Creation } from "model-types";
import { AugmentedAnyModelType } from "../types";
/**
 * Adds timestamps, id, and a slug IF these things are not already present
 *
 * NB: for kvmd storage, id will be set to a kebab-case of the name
 *
 * NB: does not add the ModelLocation parameters
 */
export declare const addDefaultValues: (bareItem: Creation<AugmentedAnyModelType>, isKvmdStorage?: boolean) => AugmentedAnyModelType;
//# sourceMappingURL=addDefaultValues.d.ts.map