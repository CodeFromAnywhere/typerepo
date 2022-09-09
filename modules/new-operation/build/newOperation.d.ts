#!/usr/bin/env node
declare type NewOperationConfig = {
    description?: string;
    /**
     * destinationPath without the operation folder itself
     *
     *
     * If not provided, uses the working directory from where the process was executed + an inferred foldername
     */
    destinationPath?: string;
    /**
     * folder path (including if given, uses this project root instead of the project root of the executed process
     */
    manualProjectRoot?: string;
};
/**
 * This cli creates the correct tsconfig.json, package.json, .gitignore, folder setup, so you can get started immedeately.
 *
 * Returns either the `operationBasePath` of the created operation, or undefined if something went wrong
 */
export declare const newOperation: (name?: string, config?: NewOperationConfig) => Promise<string | undefined>;
export {};
//# sourceMappingURL=newOperation.d.ts.map