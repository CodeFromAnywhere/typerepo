/// <reference types="react" />
export declare type ApiStoreType = {
    /**
     * authToken coupled to device, set by browser automatically on first pageload
     *
     * can also be changed by logging in
     */
    "api.authToken": string;
    /**
     * Can set this up in config to connect with different api
     */
    "api.customUrl": string | null;
    /**
     * If the api doesn't response, this will be set to last date.
     * If the api responds, this will be reset
     */
    "api.timeoutAt": null | number;
};
export declare const apiStoreInitialValues: ApiStoreType;
/**
 * This is only needed if api storage is ALL you need.
 */
export declare const StoreProvider: ({ children }: {
    children: any;
}) => JSX.Element, useStore: <K_1 extends keyof ApiStoreType>(key: K_1) => import("react-with-native-store").UseStoreResult<ApiStoreType[K_1]>;
//# sourceMappingURL=store.d.ts.map