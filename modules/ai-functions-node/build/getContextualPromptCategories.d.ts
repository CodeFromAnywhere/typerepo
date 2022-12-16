import { ChildObject } from "recursive-types";
export declare type StackCount = {
    [stack: string]: number;
};
export declare type CategoryChildObject = ChildObject<{
    category: string;
    count: number;
}>;
export declare const getObjectForkKeyRecursively: (stackCount: StackCount, key: string) => CategoryChildObject | undefined;
export declare const getContextualPromptCategories: () => Promise<CategoryChildObject>;
//# sourceMappingURL=getContextualPromptCategories.d.ts.map