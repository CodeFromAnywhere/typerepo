import { CategoryChildObject, ContextualPrompt } from "ai-types";
export declare type StackCount = {
    [stack: string]: number;
};
export declare const getObjectForkKeyRecursively: (stackCount: StackCount, key: string, originalKey: string, items: ContextualPrompt[]) => CategoryChildObject | undefined;
/**
Pretty cool stuff!

I've shown a way to count all nested categories and make a child object based on that

TODO:

- Currently, only supports unique category names due to not checking the full stack
- needs to be formalised, generalised

Another, possibly more direct way, would be to traverse the filesystem, in the case of `fs-orm`, because we have files for every item in json-single.


*/
export declare const getContextualPromptCategories: () => Promise<CategoryChildObject>;
//# sourceMappingURL=getContextualPromptCategories.d.ts.map