import { TsExport, TsImport } from "code-types";
import { ChildObject } from "recursive-types";
/**
 * finds all unique imports in an operation name
 */
export declare const findMonorepoImports: (allImports: TsImport[], operationName: string) => {
    module: string;
    name: string;
}[];
export declare type DependencyTree = {
    [dependencyName: string]: DependencyTree | null;
};
/**
 * Gives a clear overview of why an operation requires every dependency
 */
export declare type DependencyTreeChildObject = ChildObject<{
    operationName: string;
    dependencyCount: number;
    usedExports: string[];
    usedExportsCount: number;
    cumulativeExportsCount: number;
    cumulativeUsedExportsCount: number;
    allExportsCount: number;
}>;
export declare const findMonorepoExports: (allExports: TsExport[], operationName: string) => string[];
export declare const getDependencyTree: (allImports: TsImport[], allExports: TsExport[], operationName: string, usedImports: string[], alreadySearched?: string[]) => Promise<DependencyTreeChildObject>;
//# sourceMappingURL=getDependencyTree.d.ts.map