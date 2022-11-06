"use strict";
/**
 * NB: These are plugins. The difference between plugins and wrappers is that plugins just run before or after the function, while wrappers wrap the function and all its inputs. Wrappers should be avoided cuz composition over inheritance.
 


OLD TODO about this topic:


## operation input output

`InputOutput { id, input, output, errorMessage, stackTrace, executionTimeMs, isFavorite, isTest, isCacheInvalid, isInputInterfaceInvalid, isSourceAltered, name, description }`

Wrap every operation:

Store every input/ouptut-combo in `index/inputs/{id}.json` and `index/outputs/{id}.json`

Use validation (I also tried in `sensible-server`) to validate all functions and enforce **complete runtime type safety**

Every function should have their crashes be reported in the `/index/errors` folder
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionStorePerformancePlugin = exports.functionStoreCachePlugin = exports.functionCacheLookupPlugin = exports.functionInputValidationPlugin = exports.functionAuthPlugin = void 0;
/**
 * wrapper function that requires authentication in order to execute any function. for admin this can be a simple `.env` key, for now
 *
 */
var functionAuthPlugin = function (functionName, authToken) {
    // TODO: some functionNames don't require auth. Besides that, there are more auth possibilities, it's quite complex. I don't know if I should try to encapsulate it all in one plugin function because it can be very endpoint and model specific... Probably I shouldn't try to do too much outside of the scope of admin, and let others do that. This is not the skeleton
    return (authToken === "w3H4v3L0tsOfP4ss10n4ndFru1t" || authToken === "hoihoi33");
};
exports.functionAuthPlugin = functionAuthPlugin;
/** wrapper function that takes that data but also the interface of the function and validates the parameters before it executes the function.*/
var functionInputValidationPlugin = function (functionName, parameters, tsFunction) {
    // TODO: make this validation function! It may be possible to do it with SimplifiedJson, otherwise just use JSONSchema7
    return { isValid: true };
};
exports.functionInputValidationPlugin = functionInputValidationPlugin;
/**
 * wrapper function to cache any function and invalidate it, in some way
 *
 * caching
 * automatic cache invalidation if data sources are updated
 * optimistic caching after cache invalidation

 */
var functionCacheLookupPlugin = function (functionName, parameters) {
    // TODO: think of a smart way to look in cache and make sure it works with as many functions as possible with a smart cache invalidation + cleanup strategy
    return { hasValidCache: false };
};
exports.functionCacheLookupPlugin = functionCacheLookupPlugin;
/** plugin function that stores input/output in an object with a `FunctionCache extends DefaultModelType` data-structure. Store this using `db.push` if it adds value.
 */
var functionStoreCachePlugin = function (functionName, parameters, result) {
    // TODO: store using db (if useful)
    return;
};
exports.functionStoreCachePlugin = functionStoreCachePlugin;
/** wrapper function that stores execution-speed in an object with `FunctionPerformance` data-structure. Store this using `db.push` if it adds value.*/
var functionStorePerformancePlugin = function (functionName, performance) {
    // TODO: store using db (if useful)
    return;
};
exports.functionStorePerformancePlugin = functionStorePerformancePlugin;
//# sourceMappingURL=plugins.js.map