/**
 *
 * not using this anymore!
 */
import watchman from "fb-watchman";
import { PackageJson } from "code-types";
import { OnChangeDetected } from "./types";
import { FileType } from "make-file-type";
/**
 * type from watchman
 */
export declare type SubscriptionResponse = {
    subscription: string;
    root: string;
    files: FileType[];
};
export declare type WatchSource = {
    packageInfo: PackageJson;
    folderPath: string;
    dependencyName: string;
};
export declare function makeSubscription(client: watchman.Client, watchBaseFolder: string, watchRelativePath: string, debug: boolean): string;
export declare const initiateWatch: ({ client, debug, folderPath, }: {
    client: watchman.Client;
    debug: boolean;
    folderPath: string;
}) => void;
/**
 * watches folder paths and executes a callback when something changes in one of them
 *
 * TODO: check fs/promises.watch, that seems like a simple alternative of this! Could it be? Could it remove the need for watchman?
 */
export declare const watchFolders: ({ debug, folders, onChange, }: {
    debug?: boolean | undefined;
    folders: string[];
    onChange: OnChangeDetected;
}) => Promise<void>;
//# sourceMappingURL=watchman.d.ts.map