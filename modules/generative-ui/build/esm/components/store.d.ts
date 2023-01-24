/// <reference types="react" />
export declare const generativeWebInitialValues: {
    "generativeWeb.defaultVariant": string | null;
    "generativeWeb.isEditing": boolean;
    "generativeWeb.config": {
        disableAdmin?: boolean;
        /**
         * Custom basepath array
         */
        customAbsoluteBasePaths?: string[];
        activeCustomBasePath?: string;
    };
};
export declare const StoreProvider: ({ children }: {
    children: any;
}) => JSX.Element, useStore: <K_1 extends "generativeWeb.config" | "tabs.currentTab" | "generativeWeb.defaultVariant" | "generativeWeb.isEditing" | "db-crud.datasetConfig" | "db-crud.search" | "unsavedFiles" | "openPages" | "writerView" | "subtextConfig" | "subwordConfig" | "menu.expanded" | "menu.showMenu" | "menu.isMobileMenuEnabled" | "api.authToken" | "api.customUrl" | "api.timeoutAt">(key: K_1) => import("react-with-native-store").UseStoreResult<{
    "tabs.currentTab": number;
    "generativeWeb.defaultVariant": string | null;
    "generativeWeb.isEditing": boolean;
    "generativeWeb.config": {
        disableAdmin?: boolean;
        /**
         * Custom basepath array
         */
        customAbsoluteBasePaths?: string[];
        activeCustomBasePath?: string;
    };
    "db-crud.datasetConfig": (import("code-types").DatasetConfig & {
        id?: string | undefined;
        key?: string | undefined;
    }) | null;
    "db-crud.search": string;
    unsavedFiles: {
        [projectRelativePath: string]: string | undefined;
    };
    openPages: import("file-tabs").OpenPage<string>[];
    writerView: import("writer-types").WriterViewEnum;
    subtextConfig: import("writer-types").SubtextConfig;
    subwordConfig: import("writer-types").SubwordConfig;
    "menu.expanded": import("nested-menu").ExpandedObject;
    "menu.showMenu": boolean;
    "menu.isMobileMenuEnabled": boolean;
    "api.authToken": string;
    "api.customUrl": string | null;
    "api.timeoutAt": number | null;
}[K_1]>;
//# sourceMappingURL=store.d.ts.map