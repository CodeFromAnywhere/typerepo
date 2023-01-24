export declare type DependencyTree = {
    [dependencyName: string]: DependencyTree | null;
};
export declare const getDependencyTree: (operationNames: string[], stack: string[]) => Promise<DependencyTree | null>;
//# sourceMappingURL=getOldDependencyTree.test.d.ts.map