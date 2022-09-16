export declare type ExpandedObject = {
    [queryPath: string]: boolean;
};
declare type StoreType = {
    expanded: ExpandedObject;
};
export declare const initialValues: StoreType;
export declare const MenuStoreProvider: ({ children }: {
    children: any;
}) => JSX.Element;
export declare const useMenuStore: <K extends "expanded">(key: K) => [StoreType[K], (value: StoreType[K]) => Promise<void>, {
    hydrated: boolean;
}];
export {};
//# sourceMappingURL=store.d.ts.map