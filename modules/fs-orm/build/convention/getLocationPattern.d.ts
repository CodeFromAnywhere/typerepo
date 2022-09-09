import { DbStorageMethod } from "code-types";
import { MergedQueryConfig } from "../types";
/**
 * Returns the pattern or an exact relative path that the file(s) should be stored at. A star can be replaced with anything.
 *
 * Returning relative path has no preceding slash
 */
export declare const getLocationPattern: (dbStorageMethod: DbStorageMethod, modelName: string, mergedConfig: MergedQueryConfig) => string | undefined;
//# sourceMappingURL=getLocationPattern.d.ts.map