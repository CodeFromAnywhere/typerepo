import { TsFunction } from "code-types";
/**
 * Uses an array of functions to create an operation that imports all those functions and exports an object where all those functions have been comprised
 */
export declare const newFunctionSdkOperation: (operationName: string, tsFunctions: TsFunction[], config?: {
    manualProjectRoot?: string | undefined;
    skipYarnInstall?: boolean | undefined;
    dryrun?: boolean | undefined;
} | undefined) => Promise<string | undefined>;
//# sourceMappingURL=newFunctionSdkOperation.d.ts.map