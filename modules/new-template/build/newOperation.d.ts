#!/usr/bin/env node
import { OperationClassification, OperationConfig } from "code-types";
declare type NewOperationConfig = {
    type?: OperationClassification;
    /**
     * If given, will put this in OPERAITON.md
     */
    operationConfig?: OperationConfig;
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
 * # How to create a package/operation?
 *
 * This cli creates the correct tsconfig.json, package.json, .gitignore, folder setup, so you can get started immedeately.
 *
 * Returns either the `operationBasePath` of the created operation, or undefined if something went wrong
 *
 *
 */
export declare const newOperation: (name?: string, config?: NewOperationConfig) => Promise<string | undefined>;
export {};
//# sourceMappingURL=newOperation.d.ts.map