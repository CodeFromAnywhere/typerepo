import { DbFileLocation } from "model-types";
import { DbStorageMethod } from "code-types";
/**
 * Gets the stored data from any file with any storage method, and augments the modelLocation onto it...
 */
export declare const getAugmentedData: <T>(dbFileLocation: DbFileLocation, dbStorageMethod: DbStorageMethod) => Promise<T[] | null>;
//# sourceMappingURL=getAugmentedData.d.ts.map