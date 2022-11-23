import { OpenPage } from "./types";
export declare type FileTabsStoreType = {
    unsavedFiles: {
        [projectRelativePath: string]: string | undefined;
    };
    openPages: OpenPage<string>[];
};
export declare const fileTabsInitialValues: FileTabsStoreType;
/**
 * NB: this is a `useStore` without a `StoreProvider`, because I think I won't ever need the provider since I won't ever need this as the sole storage in any component/app. If I do, I should make a provider, but it's usually better to create the `useStore` and `StoreProvider` in the component itself because it often comprises more than just this one.
 */
export declare const useStore: <K extends keyof FileTabsStoreType>(key: K) => import("react-with-native-store").UseStoreResult<FileTabsStoreType[K]>;
//# sourceMappingURL=store.d.ts.map