import { ChildObject } from "recursive-types";
/**
 * maps a ChildObject and all it's children, recursively
 */
export declare const mapChildObjectRecursive: <T extends {
    [key: string]: any;
}, U extends {
    [key: string]: any;
}>(childObject: ChildObject<T>, mapFunction: (item: ChildObject<T>) => U) => ChildObject<U>;
//# sourceMappingURL=mapChildObjectRecursive.d.ts.map