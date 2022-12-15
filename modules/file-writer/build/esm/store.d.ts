/// <reference types="react" />
/**
 * Combining two store types to create an aggregated store
 */
export declare const useStore: <K_1 extends "unsavedFiles" | "openPages" | "writerView" | "subtextConfig" | "subwordConfig">(key: K_1) => import("react-with-native-store").UseStoreResult<{
    unsavedFiles: {
        [projectRelativePath: string]: string | undefined;
    };
    openPages: import("file-tabs").OpenPage<string>[];
    writerView: import("writer-types").WriterViewEnum;
    subtextConfig: import("writer-types").SubtextConfig;
    subwordConfig: import("writer-types").SubwordConfig;
}[K_1]>, StoreProvider: ({ children }: {
    children: any;
}) => JSX.Element;
//# sourceMappingURL=store.d.ts.map