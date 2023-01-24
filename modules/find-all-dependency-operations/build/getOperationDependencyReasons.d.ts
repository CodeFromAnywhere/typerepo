/**
 
Problem: It often occurs that there's one function in an entire operation that requires another operation as a dependency because it requires a single other type or function from there. This shouldn't happen.

If I want to structure my code better, I need a hierarchy for all operations and all functions therein, but for every function I need to see which dependencies it relies on.

*/
export declare const getOperationDependencyReasons: () => Promise<{
    cumulativeDependencies: string[];
    operationName: string;
    totalInstancesCount: number;
    totalImportCount: number;
    totalDependencyCount: number;
    importDependencies: string[];
    packageJsonDependencies: string[] | undefined;
    instancesAndTheirImports: {
        name: string;
        fileName: string;
        imports: string[];
    }[];
}[]>;
//# sourceMappingURL=getOperationDependencyReasons.d.ts.map