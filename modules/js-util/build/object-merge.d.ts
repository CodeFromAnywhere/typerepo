/**
 * merges two objects: a config object and a defaults object. If the config object has something missing, a default will be used from the defaults object.
 *
 * In short: merges two objects, for every parameter, use the default as a fallback
 *
 * DEPRECATED: in favor of mergeObjects
 */
export declare const mergeObjectParameters: <T>(config: T | undefined, defaults: T | undefined) => Partial<T>;
/**
 * merges multiple objects, overwriting the previous one with the next. Can be useful for configs where there are multiple layers of configs that overwrite each other.
 *
 * Please note though, that only the root keys of the object are overwriting each other, so if there is nested datastructures, the last one with a specific key overwrites the previous ones copletely
 */
export declare const mergeObjects: <T extends {
    [key: string]: any;
}>(...objects: (T | undefined)[]) => T | undefined;
//# sourceMappingURL=object-merge.d.ts.map