/**
 * Removes lockfile based on the filepath of the file that shoul've been locked
 * NB: don't provide the path to the lockfile but the path to the file that the lock should be removed from
 */
export declare const unlock: (absoluteLockedFilePath: string) => Promise<void> | undefined;
//# sourceMappingURL=unlock.d.ts.map