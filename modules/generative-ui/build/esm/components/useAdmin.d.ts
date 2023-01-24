/**
 * Useful hook to make a static site dynamic for administrator
 */
export declare const useAdmin: () => {
    isAdminActive: boolean;
    isLoading?: boolean | undefined;
    refetch?: (<TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<import("api-types").ApiReturnType<"getReaderPageProps">, unknown>>) | undefined;
};
//# sourceMappingURL=useAdmin.d.ts.map