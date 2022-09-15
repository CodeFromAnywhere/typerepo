"use strict";var __awaiter=this&&this.__awaiter||function(e,r,t,a){return new(t||(t=Promise))((function(n,o){function i(e){try{u(a.next(e))}catch(e){o(e)}}function s(e){try{u(a.throw(e))}catch(e){o(e)}}function u(e){var r;e.done?n(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,s)}u((a=a.apply(e,r||[])).next())}))},__generator=this&&this.__generator||function(e,r){var t,a,n,o,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(n=i.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){i.label=o[1];break}if(6===o[0]&&i.label<n[1]){i.label=n[1],n=o;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(o);break}n[2]&&i.ops.pop(),i.trys.pop();continue}o=r.call(e,i)}catch(e){o=[6,e],a=0}finally{t=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},__spreadArray=this&&this.__spreadArray||function(e,r,t){if(t||2===arguments.length)for(var a,n=0,o=r.length;n<o;n++)!a&&n in r||(a||(a=Array.prototype.slice.call(r,0,n)),a[n]=r[n]);return e.concat(a||Array.prototype.slice.call(r))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getMarkdownReaderPages=exports.getMarkdownReaderQueryPaths=exports.removeExtensionsFromPath=exports.availableExtensions=exports.removeNumberPrefix=void 0;var fs_util_1=require("fs-util"),get_path_1=require("get-path"),js_util_1=require("js-util"),k_explore_1=require("k-explore"),removeNumberPrefix=function(e){return e.split(".").reduce((function(e,r,t,a){if(isNaN(Number(r)))return a.slice(t).join(".")}),void 0)||"untitled"};exports.removeNumberPrefix=removeNumberPrefix,exports.availableExtensions=["md"];
/**
 * - Removes numbers from file or foldernames in a path.
 * - Removes extension of files
 * - Returns the new path without numbers and without extension
 *
 * Works for files and folders
 */
var removeExtensionsFromPath=function(e){var r=e.split("/").map(exports.removeNumberPrefix),t=r[r.length-1].split("."),a=t[t.length-1];return exports.availableExtensions.includes(a)&&(
// remove extension
t.pop(),r[r.length-1]=t.join(".")),r.join("/")};exports.removeExtensionsFromPath=removeExtensionsFromPath;
/**
Gets all query paths of a bundle based on the fs
 
README should always be on top in a folder.

Menu should not show numbers, although sorted on it. Numbers should also not appear in paths

Hide `draft` markdown files (also do not make them accessible)

Also make this thing work for todos! Make a function that aggregates all todos from all operations and build a frontend for it (it's `writer-ui` but different content)

Apply MarkdownFileConfig, ensure `isDraft: true` and `privacy: private` get filtered out

If the docs doesn't have a readme, the /docs path should show the root readme.

## words, statements, internal linking

Make the word + statement database models work, ensure they are connected

Make the reader-ui fetch all words at build-time and match the md file for every page against words, statements, functions, interfaces, variables, operations. This will generate an array of extra information: a `description` and possibly a URL. I think there should be a `/definition/*` page for every word/statement inside of every reader-ui (the glossary)

Link to definitions/statements/functions/interfaces/operations.
 */
var getMarkdownReaderQueryPaths=function(e){return __awaiter(void 0,void 0,void 0,(function(){var r;return __generator(this,(function(t){switch(t.label){case 0:return[4/*yield*/,(0,exports.getMarkdownReaderPages)(e)];case 1:return r=t.sent(),[2/*return*/,null==r?void 0:r.map((function(e){return e.queryPath}))]}}))}))};exports.getMarkdownReaderQueryPaths=getMarkdownReaderQueryPaths;var getMarkdownReaderPages=function(e){return __awaiter(void 0,void 0,void 0,(function(){var r,t,a,n,o,i,s;return __generator(this,(function(u){switch(u.label){case 0:return(r=(null==e?void 0:e.manualProjectRoot)||(0,get_path_1.getProjectRoot)())?(t=fs_util_1.path.join(r,"docs"),[4/*yield*/,(0,k_explore_1.explore)({basePath:t,extension:"md",readmeOnTop:!0})]):[2/*return*/];case 1:return a=u.sent().map((function(e){var t=fs_util_1.path.parse(e.path),a=(0,get_path_1.makeRelative)(e.path,r),n=(0,exports.removeExtensionsFromPath)(a);if(".md"!==t.ext)
// is a folder...
return{queryPath:n};
// without extension
var o=fs_util_1.path.join(t.dir,t.name);return{queryPath:n,filePath:(0,get_path_1.makeRelative)(o,r)}})),n=(0,get_path_1.getPathsWithOperations)({manualProjectRoot:r}),i=js_util_1.mergeObjectsArray,[4/*yield*/,Promise.all(n.map((function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,a,n,o;return __generator(this,(function(i){switch(i.label){case 0:return t=(0,get_path_1.makeRelative)(e,r),[4/*yield*/,(0,k_explore_1.exploreOperationFolders)({basePath:e})];case 1:return a=i.sent().map((function(e){return(0,get_path_1.makeRelative)(e,r)})),n=a.map((function(e){return{queryPath:e,
// operation filePath is README.md
filePath:fs_util_1.path.join(e,"README.md")}})),[2/*return*/,(o={},o[t]=n,o)]}}))}))})))];case 2:return o=i.apply(void 0,[u.sent()]),s=(0,get_path_1.isSensibleProject)(r)?__spreadArray(__spreadArray(__spreadArray([],o.packages,!0),o.apps,!0),o.modules,!0):__spreadArray(__spreadArray([],o["operations/tools"],!0),o["operations/bundles"],!0),[2/*return*/,__spreadArray(__spreadArray([{queryPath:"/",filePath:"README.md"}],a,!0),s,!0)]}}))}))};exports.getMarkdownReaderPages=getMarkdownReaderPages;
//# sourceMappingURL=getBundlePaths.js.map