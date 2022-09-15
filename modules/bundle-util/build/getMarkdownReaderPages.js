"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,a){return new(r||(r=Promise))((function(n,o){function i(e){try{u(a.next(e))}catch(e){o(e)}}function s(e){try{u(a.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}u((a=a.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,a,n,o,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(n=i.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){i.label=o[1];break}if(6===o[0]&&i.label<n[1]){i.label=n[1],n=o;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(o);break}n[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],a=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var a,n=0,o=t.length;n<o;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getMarkdownReaderPages=void 0;var fs_util_1=require("fs-util"),get_path_1=require("get-path"),js_util_1=require("js-util"),k_explore_1=require("k-explore"),getPublicMarkdownFilePaths_1=require("./getPublicMarkdownFilePaths"),removeExtensionsFromPath_1=require("./removeExtensionsFromPath"),getMarkdownReaderPages=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r,a,n,o,i,s;return __generator(this,(function(u){switch(u.label){case 0:return(t=(null==e?void 0:e.manualProjectRoot)||(0,get_path_1.getProjectRoot)())?(r=fs_util_1.path.join(t,"docs"),[4/*yield*/,(0,getPublicMarkdownFilePaths_1.getPublicMarkdownFilePaths)(r)]):[2/*return*/];case 1:return a=u.sent().map((function(e){var r=(0,get_path_1.makeRelative)(e,t);return{queryPath:(0,removeExtensionsFromPath_1.removeExtensionsFromPath)(r),filePath:r}})),n=(0,get_path_1.getPathsWithOperations)({manualProjectRoot:t}),i=js_util_1.mergeObjectsArray,[4/*yield*/,Promise.all(n.map((function(e){return __awaiter(void 0,void 0,void 0,(function(){var r,a,n,o;return __generator(this,(function(i){switch(i.label){case 0:return r=(0,get_path_1.makeRelative)(e,t),[4/*yield*/,(0,k_explore_1.exploreOperationFolders)({basePath:e})];case 1:return a=i.sent().map((function(e){return(0,get_path_1.makeRelative)(e,t)})),n=a.map((function(e){return{queryPath:e,
// operation filePath is README.md
filePath:fs_util_1.path.join(e,"README.md")}})),[2/*return*/,(o={},o[r]=n,o)]}}))}))})))];case 2:return o=i.apply(void 0,[u.sent()]),s=(0,get_path_1.isSensibleProject)(t)?__spreadArray(__spreadArray(__spreadArray([],o.packages,!0),o.apps,!0),o.modules,!0):__spreadArray(__spreadArray([],o["operations/tools"],!0),o["operations/bundles"],!0),[2/*return*/,__spreadArray(__spreadArray([{queryPath:"/",filePath:"README.md"}],a,!0),s,!0)]}}))}))};exports.getMarkdownReaderPages=getMarkdownReaderPages;
//# sourceMappingURL=getMarkdownReaderPages.js.map