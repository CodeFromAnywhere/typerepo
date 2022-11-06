export declare const searchRecursiveObjectArray: <T extends {
    children?: T[] | undefined;
} & Object>(array: T[], baseMatcher: (item: T) => boolean, afterMapper?: ((item: T, isMatch: boolean, hasChildMatch: boolean) => T) | undefined) => T[];
export declare const test: () => Promise<boolean>;
//# sourceMappingURL=searchRecursiveObject.d.ts.map