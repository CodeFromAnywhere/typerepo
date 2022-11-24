import { CodespanItemInfo } from "./CodespanItemInfo";
/**
 * no real reason to do this from text to text, let's do path to path here
 */
export declare const makeCodestory: (absolutePath: string, mappedObject: {
    [key: string]: CodespanItemInfo;
}, isDebug?: boolean) => Promise<undefined | string>;
//# sourceMappingURL=makeCodestory.d.ts.map