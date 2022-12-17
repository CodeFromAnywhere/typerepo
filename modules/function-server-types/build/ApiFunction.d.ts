export declare type ApiFunction = {
    (...parameters: any[]): any;
    isPublic?: boolean;
    /**
     * - If true, usage will be counted in UsageReport
     * - If "isSuccessful", usage will be counted only if this function returns `.isSuccessful: true`
     *
     * NB: not sure if the latter is needed
     *
     */
    isPaid?: true | "isSuccessful";
    /**
     * Cost per execution in EUROCENT
     *
     * e.g. 0.05 means that 2000 executions cost 1 euro.
     */
    price?: number;
    allowedRoles?: string[];
};
//# sourceMappingURL=ApiFunction.d.ts.map