/**
 * This function rebuilds an operation and re-indexes (part of) its files.
 */
export declare const rebuildOperation: ({ operationBasePath, manualProjectRoot, filePaths, force, debug, noExit, stack, noUnresolvedRebuilding, }: {
    /** if given, uses this as project root instead of the calculatable one */
    manualProjectRoot?: string | undefined;
    /** Full path to operation folder or any file therein */
    operationBasePath: string;
    /** If not given, explores all files in src folder of the operation. if given, must be an array of absolute file paths. it is not supported to index index files, as this creates duplicate and incorrect interfaces.  */
    filePaths?: string[] | undefined;
    /** used for stopping recursion */
    noUnresolvedRebuilding?: boolean | undefined;
    /** if true, will not skip if nothing changed */
    force?: boolean | undefined;
    /** show logs */
    debug?: boolean | undefined;
    /** normally, it exits if the operation that was rebuilt was itself or one of its dependencies. Handy for watchOperations in combination with nodemon. If we don't want this behavior, provide noExit  */
    noExit?: boolean | undefined;
    /** stack of recursion of module names */
    stack?: string[] | undefined;
}) => Promise<boolean>;
//# sourceMappingURL=rebuildOperation.d.ts.map