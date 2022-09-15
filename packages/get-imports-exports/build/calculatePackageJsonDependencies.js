"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.calculatePackageJsonDependencies=exports.isImportFromOptionalFile=exports.isAbsoluteImportBuiltin=exports.getPackageNameFromAbsoluteImport=void 0;var js_util_1=require("js-util"),module_1=require("module"),get_path_1=require("get-path"),filename_conventions_1=require("filename-conventions"),getPackageNameFromAbsoluteImport=function(e){var t=e.split("/"),o=t[0];if(o&&0!==o.length)return(o.startsWith("@")?t.slice(0,2).join("/"):o).split(":").pop();
// NB: scoped packages look like `@company/package` and should be parsed correctly as well
};exports.getPackageNameFromAbsoluteImport=getPackageNameFromAbsoluteImport;
/**
 * returns true if the absolute import is built in into node
 */
var isAbsoluteImportBuiltin=function(e){var t=(0,exports.getPackageNameFromAbsoluteImport)(e);return!!t&&module_1.builtinModules.includes(t)};exports.isAbsoluteImportBuiltin=isAbsoluteImportBuiltin;
/**
 * returns true if the import was found in an optional file, e.g. this import is not always included in the bundle, so should not be a dependency
 */
var isImportFromOptionalFile=function(e){var t=(0,get_path_1.getSrcRelativeFileId)(e.operationRelativeTypescriptFilePath);return(0,filename_conventions_1.hasSubExtension)(t,filename_conventions_1.frontendOptionalFileSubExtensions)};exports.isImportFromOptionalFile=isImportFromOptionalFile;
/**
 * Calculates new packageJson dependencies object based on imports found in the whole operation.
 *
 * For monorepo modules, uses the version inside its packagejson (Uses the database to obtain the package.json)
 *
 * Generated packages are not added to dependencies. Instead a sensible config prop is added to state that this operation only works within a monorepo since it has generated operation deps that are not on the npm registry
 *
 * For external modules, uses the version that was already present in dependencies, or uses "*"
 *
 * Also keeps the dependencies that were already there, nothing is removed.
 *
 *
 */
var calculatePackageJsonDependencies=function(
/**
 * Current dependencies object in your operation
 */
e,
/**
 * All imports found in your operation
 */
t,
/**
 * All package-json's in your monorepo
 */
o){var n=t.filter((function(e){return"value"===e.type})).filter((function(e){return e.isAbsolute})).filter((function(e){return!(0,exports.isAbsoluteImportBuiltin)(e.module)})).filter((function(e){return!(0,exports.isImportFromOptionalFile)(e)})).filter((0,js_util_1.onlyUnique2)((function(e,t){return e.module===t.module}))),r=n.filter((function(e){return e.operationName&&e.isModuleFromMonorepo&&!(0,filename_conventions_1.isGeneratedOperationName)(e.operationName)})),i=n.filter((function(e){return e.operationName&&e.isModuleFromMonorepo&&(0,filename_conventions_1.isGeneratedOperationName)(e.operationName)})).length>0,a=n.filter((function(e){return!e.isModuleFromMonorepo})),s=(0,js_util_1.mergeObjectsArray)(a.map((function(t){var o,n=(0,exports.getPackageNameFromAbsoluteImport)(t.module);if(n){var r=null==e?void 0:e[n];
/**
         * TODO: fetch this from monorepo
         */return(o={})[n]="*"!==r&&void 0!==r?r:"*",o}})).filter(js_util_1.notEmpty)),l=(0,js_util_1.mergeObjectsArray)(r.map((function(e){var t,n=(0,exports.getPackageNameFromAbsoluteImport)(e.module);if(n){var r=o.find((function(e){return e.name===n}));if(r){var i=r.version;if(i)return(t={})[n]=i,t}}})).filter(js_util_1.notEmpty));return{newDependencies:__assign(__assign(__assign({},e),l),s),hasGeneratedDependencies:i}};exports.calculatePackageJsonDependencies=calculatePackageJsonDependencies;
//# sourceMappingURL=calculatePackageJsonDependencies.js.map