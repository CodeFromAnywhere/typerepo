import { WatchEventType } from "./WatchEventType";
import { ApiFunctionParameters } from "code-types";
/**
 * If you type a function as this interface, it will be included in the watcher of your project.
 *
 * Ensure you specify the filter. The function will only be executed from the watcher if there's a filechange within your project, and the filter is true.
 *
 * NB: specify the return type if you wish to use this function elsewhere besides as a watcher
 */
export declare type ProjectWatcher<TReturnType = any> = {
    /**
     * The actual function that needs to be executed at certain occasion
     */
    (eventName: WatchEventType, absolutePath: string, isStartup: boolean): TReturnType;
    /**
     * Sets the strategy when the server starts up
     *
     * - if **'ignore'** (default), all files that are found and the filter returns true for, are ignored
     * - if **'sync'**, all files that are found and the filter returns true for, are executing the watcher function instantly, synchronously
     * - (not implemented yet) if **'async'**, all files that are found and the filter returns true for, are executing the watcher function one by one, one after the other
     * - (not implemented yet) if **'queue'**, all files that are found and the filter returns true for that are also NOT in the queue yet are added to the `Queue`
     */
    startupStrategy?: "ignore" | "sync" | "async" | "queue";
    /**
     * filter out whether events should be executing the function or not based on the event and the absolute path
     */
    filter: (eventName: WatchEventType, absolutePath: string) => boolean;
    config?: ApiFunctionParameters;
};
//# sourceMappingURL=ProjectWatcher.d.ts.map