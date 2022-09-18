export declare const pickWatcher: () => ({ debug, folders, onChange, takeLatest, }: {
    debug?: boolean | undefined;
    folders: string[];
    takeLatest?: boolean | undefined;
    onChange: (event: {
        eventType: "rename" | "change";
        filePaths: string[];
        operationBasePath: string;
    }) => Promise<void>;
}) => Promise<void>;
//# sourceMappingURL=pickWatcher.d.ts.map