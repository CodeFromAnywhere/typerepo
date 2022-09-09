#!/usr/bin/env node
/**
 * takes an operation base path and finds all imports and exports in all the files, and writes it to the ts-imports/ts-exports indexes
 *
 * NB: has a side effect: it also updates the package.json to include all needed dependencies.
 */
export declare const findAndWriteImportsExports: ({ operationBasePath, debug, manualProjectRoot, }: {
    operationBasePath: string;
    debug?: boolean | undefined;
    manualProjectRoot?: string | undefined;
}) => Promise<{
    success: boolean;
    message: string;
}>;
//# sourceMappingURL=findAndWriteImportsExports.d.ts.map