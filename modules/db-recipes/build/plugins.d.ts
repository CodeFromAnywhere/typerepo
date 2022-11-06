/**
 TODO:
 
 * NB: These are plugins. The difference between plugins and wrappers is that plugins just run before or after the function, while wrappers wrap the function and all its inputs. Wrappers should be avoided cuz composition over inheritance.
 


OLD TODO about this topic:


## operation input output

`InputOutput { id, input, output, errorMessage, stackTrace, executionTimeMs, isFavorite, isTest, isCacheInvalid, isInputInterfaceInvalid, isSourceAltered, name, description }`

Wrap every operation:

Store every input/ouptut-combo in `db/inputs/{id}.json` and `db/outputs/{id}.json`

Use validation (I also tried in `sensible-server`) to validate all functions and enforce **complete runtime type safety**

Every function should have their crashes be reported in the `/db/errors` folder
 */
import { TsFunction } from "code-types";
/**
 * wrapper function that requires authentication in order to execute any function. for admin this can be a simple `.env` key, for now
 *
 */
export declare const functionAuthPlugin: (functionName: string, providedAuthToken: string | undefined) => boolean;
declare type ValidationResult = {
    isValid: boolean;
    errors?: {
        fieldStack: string[];
        error: string;
    }[];
};
/** wrapper function that takes that data but also the interface of the function and validates the parameters before it executes the function.*/
export declare const functionInputValidationPlugin: (functionName: string, parameters: undefined | any[], tsFunction: TsFunction) => ValidationResult;
declare type CacheLookupResult = {
    hasValidCache: boolean;
    result?: any;
};
/**
 * wrapper function to cache any function and invalidate it, in some way
 *
 * caching
 * automatic cache invalidation if data sources are updated
 * optimistic caching after cache invalidation

 */
export declare const functionCacheLookupPlugin: (functionName: string, parameters: undefined | any[]) => CacheLookupResult;
/** plugin function that stores input/output in an object with a `FunctionCache extends DefaultModelType` data-structure. Store this using `db.push` if it adds value.
 */
export declare const functionStoreCachePlugin: (functionName: string, parameters: undefined | any[], result: any) => void;
export declare type PerformanceItem = {
    label: string;
    durationMs: number;
};
/** wrapper function that stores execution-speed in an object with `FunctionPerformance` data-structure. Store this using `db.push` if it adds value.*/
export declare const functionStorePerformancePlugin: (functionName: string, performance: PerformanceItem[]) => void;
export {};
//# sourceMappingURL=plugins.d.ts.map