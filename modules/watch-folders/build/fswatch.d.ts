/**
 * watches folder paths and executes a callback when something changes in one of them
 *
 * uses fs.watch
 * */
export declare const watchFoldersFs: ({ debug, folders, onChange, takeLatest, }: {
    debug?: boolean | undefined;
    folders: string[];
    takeLatest?: boolean | undefined;
    onChange: (event: {
        eventType: "rename" | "change";
        filePaths: string[];
        operationBasePath: string;
    }) => Promise<void>;
}) => Promise<void>;
//# sourceMappingURL=fswatch.d.ts.map