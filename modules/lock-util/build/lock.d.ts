/**
 * either creates the lockfile if it didn't exist or it will update it with new updatedAt and status. If status isn't set, status will be removed
 */
export declare const lock: (aboluteLockableFilePath: string, status?: string) => Promise<void>;
//# sourceMappingURL=lock.d.ts.map