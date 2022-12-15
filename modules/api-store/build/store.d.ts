/// <reference types="react" />
export declare type ApiStoreType = {
    "api.authToken": string;
    "api.customUrl": null | string;
};
export declare const apiStoreInitialValues: ApiStoreType;
/**
 * This is only needed if api storage is ALL you need.
 */
export declare const StoreProvider: ({ children }: {
    children: any;
}) => JSX.Element, useStore: <K_1 extends keyof ApiStoreType>(key: K_1) => import("react-with-native-store").UseStoreResult<ApiStoreType[K_1]>;
//# sourceMappingURL=store.d.ts.map