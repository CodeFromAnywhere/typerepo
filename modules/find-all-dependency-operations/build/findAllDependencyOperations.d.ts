#!/usr/bin/env node
/**
 * finds all dependencies of an operation name
 */
export declare const findMonorepoModules: (operationName: string) => Promise<string[]>;
/**
 * finds all dependencies of an operation name
 */
export declare const findDependenciesRecursively: (operationName: string, already: string[], ignore?: string[]) => Promise<string[]>;
/**
 * to be used when you need to know all dependencies for multiple operation names at once
 *
 * TODO: NB: this breaks with circular dependencies
 */
export declare const findAllDependencyOperations: ({ operationNames, ignoreOperationNames, }: {
    operationNames: string[];
    ignoreOperationNames?: string[] | undefined;
}) => Promise<string[]>;
export declare const getDependencyObject: () => Promise<{
    [x: string]: string[];
}>;
export declare type DependencyTree = {
    [dependencyName: string]: DependencyTree | null;
};
export declare const getDependencyTree: (operationNames: string[], stack: string[]) => Promise<DependencyTree | null>;
/**
 * finds all dependants of an operation or a specific import from that operation
 *
 * normally returns the files where the operation or function is used, unless you specify to return the operationNames only.
 */
export declare const findDependants: ({ operationName, importName, returnOperationName, }: {
    operationName: string;
    /**
     * Optionally specify a specific import from an operation that you want to find the dependants for
     */
    importName?: string | undefined;
    returnOperationName?: boolean | undefined;
}) => Promise<string[]>;
export declare const findDependantsRecursively: (operationName: string, already?: string[]) => Promise<string[]>;
//# sourceMappingURL=findAllDependencyOperations.d.ts.map