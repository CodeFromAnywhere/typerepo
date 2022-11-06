"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.functionStorePerformancePlugin=exports.functionStoreCachePlugin=exports.functionCacheLookupPlugin=exports.functionInputValidationPlugin=exports.functionAuthPlugin=void 0;var sdk_env_private_1=require("sdk-env-private"),authToken=sdk_env_private_1.privateLocalEnvironmentVariables.authToken||sdk_env_private_1.privateEnvironmentVariables.authToken,functionAuthPlugin=function(n,t){return authToken===t};exports.functionAuthPlugin=functionAuthPlugin;
/** wrapper function that takes that data but also the interface of the function and validates the parameters before it executes the function.*/
var functionInputValidationPlugin=function(n,t,i){
// TODO: make this validation function! It may be possible to do it with SimplifiedJson, otherwise just use JSONSchema7
return{isValid:!0}};exports.functionInputValidationPlugin=functionInputValidationPlugin;
/**
 * wrapper function to cache any function and invalidate it, in some way
 *
 * caching
 * automatic cache invalidation if data sources are updated
 * optimistic caching after cache invalidation

 */
var functionCacheLookupPlugin=function(n,t){
// TODO: think of a smart way to look in cache and make sure it works with as many functions as possible with a smart cache invalidation + cleanup strategy
return{hasValidCache:!1}};exports.functionCacheLookupPlugin=functionCacheLookupPlugin;
/** plugin function that stores input/output in an object with a `FunctionCache extends DefaultModelType` data-structure. Store this using `db.push` if it adds value.
 */
var functionStoreCachePlugin=function(n,t,i){};exports.functionStoreCachePlugin=functionStoreCachePlugin;
/** wrapper function that stores execution-speed in an object with `FunctionPerformance` data-structure. Store this using `db.push` if it adds value.*/
var functionStorePerformancePlugin=function(n,t){};exports.functionStorePerformancePlugin=functionStorePerformancePlugin;
//# sourceMappingURL=plugins.js.map