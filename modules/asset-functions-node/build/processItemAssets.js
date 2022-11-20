"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,r,s){return new(r||(r=Promise))((function(n,a){function i(e){try{c(s.next(e))}catch(e){a(e)}}function o(e){try{c(s.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,o)}c((s=s.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,s,n,a,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,s&&(n=2&a[0]?s.return:a[0]?s.throw||((n=s.return)&&n.call(s),0):s.next)&&!(n=n.call(s,a[1])).done)return n;switch(s=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,s=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(n=i.trys,(n=n.length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){i.label=a[1];break}if(6===a[0]&&i.label<n[1]){i.label=n[1],n=a;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(a);break}n[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],s=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var s,n=0,a=t.length;n<a;n++)!s&&n in t||(s||(s=Array.prototype.slice.call(t,0,n)),s[n]=t[n]);return e.concat(s||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.processItemAssets=void 0;var database_1=require("database"),set_json_key_1=require("set-json-key"),js_util_1=require("js-util"),processAsset_1=require("./processAsset"),findAssetParametersRecursively_1=require("./findAssetParametersRecursively"),js_util_2=require("js-util"),get_path_1=require("get-path"),processItemAssets=function(e,t,r,s){return __awaiter(void 0,void 0,void 0,(function(){var n,a,i,o;return __generator(this,(function(c){switch(c.label){case 0:return(n=(0,get_path_1.getProjectRoot)())?[4/*yield*/,database_1.db.getDbFileLocationPath(e,r,t,s)]:[2/*return*/];case 1:return(a=c.sent())?(i=(0,get_path_1.makeRelative)(a,n),o=(0,findAssetParametersRecursively_1.findAssetParametersRecursively)(e),[4/*yield*/,Promise.all(o.map((function(r){return __awaiter(void 0,void 0,void 0,(function(){var s,n,a,o;return __generator(this,(function(c){switch(c.label){case 0:return s=__spreadArray(__spreadArray([],r.stack||[],!0),[r.parameterName],!1),n=(0,js_util_2.getParameterAtLocation)(e,s),Array.isArray(n)?[4/*yield*/,Promise.all(n.map((function(e){return(0,processAsset_1.processAsset)(__assign(__assign({},e),{projectRelativeReferencingFilePath:i,modelName:t}))})))]:[3/*break*/,2];case 1:return a=c.sent().filter(js_util_1.notEmpty),[3/*break*/,6];case 2:return n?[4/*yield*/,(0,processAsset_1.processAsset)(__assign(__assign({},n),{projectRelativeReferencingFilePath:i,modelName:t}))]:[3/*break*/,4];case 3:return o=c.sent(),[3/*break*/,5];case 4:o=void 0,c.label=5;case 5:a=o,c.label=6;case 6:return[2/*return*/,{backendAssetToStore:a,location:s}]}}))}))})))]):[2/*return*/,e];case 2:
// console.dir(
//   { assetParameters, assetsToPutOnObject, finalItem: item },
//   { depth: 999 }
// );
return c.sent().forEach((function(t){(0,set_json_key_1.setKeyAtLocation)(t.location.join("."),t.backendAssetToStore,e)})),[2/*return*/,e]}}))}))};exports.processItemAssets=processItemAssets;
//# sourceMappingURL=processItemAssets.js.map