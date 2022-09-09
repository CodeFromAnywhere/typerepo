"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.calculatePackageJsonDependencies=exports.isImportFromOptionalFile=exports.isAbsoluteImportBuiltin=exports.getPackageNameFromAbsoluteImport=void 0;var js_util_1=require("js-util"),module_1=require("module"),get_path_1=require("get-path"),filename_conventions_1=require("filename-conventions"),getPackageNameFromAbsoluteImport=function(e){var t=e.split("/"),r=t[0];if(r&&0!==r.length)return(r.startsWith("@")?t.slice(0,2).join("/"):r).split(":").pop();
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
 * For external modules, uses the version that was already present in dependencies, or uses "*"
 *
 * Also keeps the dependencies that were already there, nothing is removed.
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
r){var o=t.filter((function(e){return"value"===e.type})).filter((function(e){return e.isAbsolute})).filter((function(e){return!(0,exports.isAbsoluteImportBuiltin)(e.module)})).filter((function(e){return!(0,exports.isImportFromOptionalFile)(e)})).filter((0,js_util_1.onlyUnique2)((function(e,t){return e.module===t.module}))),i=o.filter((function(e){return e.isModuleFromMonorepo})),n=o.filter((function(e){return!e.isModuleFromMonorepo})),s=(0,js_util_1.mergeObjectsArray)(n.map((function(t){var r,o=(0,exports.getPackageNameFromAbsoluteImport)(t.module);if(o){var i=null==e?void 0:e[o];
/**
         * TODO: fetch this from monorepo
         */return(r={})[o]="*"!==i&&void 0!==i?i:"*",r}})).filter(js_util_1.notEmpty)),a=(0,js_util_1.mergeObjectsArray)(i.map((function(e){var t,o=(0,exports.getPackageNameFromAbsoluteImport)(e.module);if(o){var i=r.find((function(e){return e.name===o}));if(i){var n=i.version;if(n)return(t={})[o]=n,t}}})).filter(js_util_1.notEmpty));return __assign(__assign(__assign({},e),a),s)};exports.calculatePackageJsonDependencies=calculatePackageJsonDependencies;
//# sourceMappingURL=calculatePackageJsonDependencies.js.map