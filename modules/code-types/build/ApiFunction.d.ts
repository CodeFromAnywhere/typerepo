import { FunctionClassification } from "./FunctionClassification";
import { RunEveryPeriodEnum } from "./TsFunction";
/**
 * TODO: rename to `StandardFunction`, it's not just for the API
 */
export declare type ApiFunction = {
    (...parameters: any[]): any;
} & ApiFunctionParameters;
export declare type ApiFunctionParameters = {
    /**
     * Used to determine if there are important changes. Can be added to things that used this function for example, for indexation, for example. This way we know how the index came to be better.
     */
    version?: string;
    /**
     * Provide info for every version. Especially needed if we have a function that produces output that we'll keep using. This way we can trace back the behavior that caused the output
     */
    versionInfo?: {
        [version: string]: string;
    };
    /**
     * Requires lots of ram/cpu/gpu (e.g. local AI models, file conversions, and data manipulation at scale)
     *
     * Will not be started if computer is busy already
     */
    isHeavy?: boolean;
    /**
     * If true, you state that this function requires internet. Will not be executed if there's no internet connection
     */
    isInternetRequired?: boolean;
    /**
     * Puppeteer stuff
     */
    isBrowserRequired?: boolean;
    /**
     * If `true`, this function will be publicly available through the API
     */
    isPublic?: boolean;
    /**
     * for all exported functions in node operations, true by default
     * false for others
     *
     * can be overwritten using frontmatter
     *
     * TODO: remove, should be same as `isPublic`
     */
    isApiExposed?: boolean;
    /**
     * If it's a slug without TLD, the function will be on on a landing page without its own domain
     * If it's a slug with TLD, it can get it's own domain
     * If domain is given, function is wrapped into `sdk-public-tools`, wrapped with:
     *
     * - providing email and other required credentials
     * - adding to queue if server is busy
     *
     * Later I can wrap this even more with monetisation and 'tool-owner', so I can let others do the same with a single click (promote after form is filled is like "learn more about how to earn money with the new AI tech revolution (or so)")
     */
    domain?: string;
    /**
     * - If true, usage will be counted in `UsageReport`
     * - If "isSuccessful", usage will be counted only if this function returns `.isSuccessful: true`
     *
     * NB: not sure if the latter is needed
     *
     */
    isPaid?: true | "isSuccessful";
    /**
     * Cost per execution in EURO CENT
     *
     * e.g. 0.05 means that 2000 executions cost 1 euro.
     */
    price?: number;
    allowedRoles?: string[];
    /**
     * Other keys in frontmatter that are group names, can be added here
     *
     * TODO: maybe replace with `.allowedRoles`
     */
    groupAuthorization?: {
        [groupName: string]: string;
    };
    /**
     * whether or not the function can be cached (relies on cache invalidation)
     */
    canCache?: boolean;
    /**
      You can specify `runEveryPeriod` in your frontmatter of a function. This will set `runEveryPeriod` for the TsFunction. This is used by `function-server`: it will execute CRON-jobs that run these things on those periods.
   
      Will only work if the function takes no arguments.
      */
    runEveryPeriod?: RunEveryPeriodEnum;
    /**
     * Type of function for frontend
     */
    classification?: FunctionClassification;
};
//# sourceMappingURL=ApiFunction.d.ts.map