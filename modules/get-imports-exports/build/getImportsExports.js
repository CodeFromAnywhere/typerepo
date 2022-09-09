#!/usr/bin/env node
"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{p(n.next(e))}catch(e){o(e)}}function s(e){try{p(n.throw(e))}catch(e){o(e)}}function p(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}p((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getImportsExports=void 0;var convert_case_1=require("convert-case"),k_explore_1=require("k-explore"),log_1=require("log"),read_json_file_1=require("read-json-file"),fs_util_1=require("fs-util"),get_path_1=require("get-path"),typescript_1=require("typescript"),js_util_1=require("js-util"),ts_morph_util_1=require("ts-morph-util"),getSymbolTypeDeclarations=function(e){return __spreadArray(__spreadArray([],getSymbolDeclarationsOfKind(e,typescript_1.SyntaxKind.TypeAliasDeclaration),!0),getSymbolDeclarationsOfKind(e,typescript_1.SyntaxKind.InterfaceDeclaration),!0)},getExportSpecifierNames=function(e){var t;return(null===(t=null==e?void 0:e.getDeclarations())||void 0===t?void 0:t.filter((function(e){return e.isKind(typescript_1.SyntaxKind.ExportSpecifier)})).map((function(e){return e.asKind(typescript_1.SyntaxKind.ExportSpecifier)})).filter(js_util_1.notEmpty).map((function(e){return e.getName()})))||[]},getImportSpecifiersWithNames=function(e,t){return e.getImportDeclarations().map((function(e){return e.getNamedImports()})).flat().filter((function(e){return t.includes(e.getName())}))},getDefaultSymbolType=function(e,t){t&&console.log({kinds:e.getDeclarations().map((function(e){return{kind:e.getKindName(),name:e.getText()}}))});var r=getSymbolTypeDeclarations(e),n=r.length>0?"type":"value";return{type:n,hasGeneric:"type"===n?!!r.find((
// NB: type parameters gets the generics
function(e){return(0,ts_morph_util_1.getHasGeneric)(e)})):void 0}},getExportSymbolType=function(e,t,r){var n=getExportSpecifierNames(e);if(r&&console.log(n),n.length>0){
// get the ImportSpecifier of this ExportSpecifier, and if one exists, recurse this function on it.
var i=getImportSpecifiersWithNames(t,n);if(i.length>1&&
// NB: warn if there is more than one as that would be strange
(0,log_1.log)("More than one importsSpecifiers with that name: ".concat(n.join(",")," (imports: ").concat(i.map((function(e){return e.getName()})).join(","),")... file: ").concat(t.getFilePath()),{type:"warning"}),i.length>0)return getTypeFromImportSpecifier(i[0],r);
/* REmoved this.... seems that this will make it never do the default one
        else {
          if (debug) {
            console.log(
              "Weird, we couldn't find the importspecifier for exportSpecifiers"
            );
          }
          return { type: undefined };
        }
        */}return getDefaultSymbolType(e,r)},getTypeFromImportSpecifier=function(e,t){
// NB: find the file where the import is defined
var r=e.getImportDeclaration().getModuleSpecifierSourceFile();
// NB: without the module source we can't know the type of this importspecifier
if(!r)return{type:void 0};
// NB: in the source, find all exported stuff
var n=r.getExportSymbols().find((function(t){return t.getName()===e.getName()}));
// NB: find the export with the same name as the import
// NB: if the source doesn't contain any export with that name, we can't know its type
if(!n)return{type:void 0};
/**
     * NB: all ExportSpecifiers don't have a more specific SyntaxKind because they are imported.
     * If there are any ExportSpecifiers with a matching ImportSpecifier, recurse on that!
     */var i=getExportSpecifierNames(n);if(i.length>0){var o=getImportSpecifiersWithNames(r,i);return o.length>1&&
// NB: warn if there is more than one as that would be strange
(0,log_1.log)("More than one importsSpecifiers with that name",{type:"warning"}),o.length>0?getTypeFromImportSpecifier(o[0],t):(t&&console.log("Weird, no importspecifiers found for exportSpecifier!!"),{type:void 0})}
// console.log({
//   fileOfExport: fileOfExport?.getFilePath(),
//   exportSymbols: exportSymbols?.map((x) => x.getName()),
//   importSpecifier: importSpecifier.getName(),
//   importedSymbol: importedSymbol?.getName(),
//   name: importSpecifier.getName(),
// });
return getDefaultSymbolType(n,t)},isAbsoluteImport=function(e){return!!e&&!e.startsWith(".")},getSymbolDeclarationsOfKind=function(e,t){return e.getDeclarations().filter((function(e){return e.getKind()===t})).map((function(e){return e.asKind(t)})).filter(js_util_1.notEmpty)},getImportsExports=function(e){var t=e.sourceFiles,r=e.debug,n=e.manualProjectRoot;return __awaiter(void 0,void 0,void 0,(function(){var e,i,o,a,s;return __generator(this,(function(p){switch(p.label){case 0:return 0===t.length?((0,log_1.log)("No source files provided",{type:"warning"}),[2/*return*/]):[4/*yield*/,(0,k_explore_1.exploreOperationFolders)({basePath:n})];case 1:return e=p.sent(),i=e.map(fs_util_1.getLastFolder),(o=t[0].getFilePath())?(a=(0,get_path_1.findOperationBasePath)(o))?[4/*yield*/,(0,read_json_file_1.readJsonFile)(fs_util_1.path.join(a,"package.json"))]:[2/*return*/]:[2/*return*/];case 2:return p.sent()?(s=t.reduce((function(e,t){var n=t.getExportSymbols().map((function(e){var n=e.getName(),i=getExportSymbolType(e,t,r),o=i.type,a=i.hasGeneric,s=t.getFilePath();if(s){var p=(0,get_path_1.getOperationPathParse)(s);if(p)return{name:n,slug:(0,convert_case_1.kebabCase)(n),operationRelativeTypescriptFilePath:p.operationRelativeTypescriptFilePath,
// TODO:
comments:[],type:o,hasGeneric:a}}})).filter(js_util_1.notEmpty),o=[];return t.getImportDeclarations().forEach((function(e){var n=String(e.getModuleSpecifier().getLiteralText()),a=e.getNamedImports().map((function(e){var t=e.getName();return __assign({name:t,slug:(0,convert_case_1.kebabCase)(t)},getTypeFromImportSpecifier(e,r))})).map((function(r){var o=t.getFilePath(),a=(0,get_path_1.getOperationPathParse)(o);if(a){var s=["fs","path"].includes(n)?"node":["react","react-dom","react-native","expo"].includes(n)?"react":i.includes(n)?"operation":isAbsoluteImport(n)?"package":"internal";return __assign(__assign({},r),{module:n,
// TODO
comments:[],operationRelativeTypescriptFilePath:a.operationRelativeTypescriptFilePath,classification:s,isAbsolute:isAbsoluteImport(n),isModuleFromMonorepo:i.includes(n),
// NB: will not be resolved if build folder doesn't exist or if entry file doesn't exist
isModuleResolved:!!e.getModuleSpecifierSourceFile()})}})).filter(js_util_1.notEmpty);o=o.concat(a)})),{imports:e.imports.concat(o),exports:e.exports.concat(n)}}),{imports:[],exports:[]}),[2/*return*/,s]):((0,log_1.log)("PackageJson could not be found",{type:"error"}),[2/*return*/])}}))}))};exports.getImportsExports=getImportsExports;
//# sourceMappingURL=getImportsExports.js.map