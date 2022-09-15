#!/usr/bin/env node
"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(s,a){function o(e){try{c(n.next(e))}catch(e){a(e)}}function i(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,i)}c((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,s,a,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(s=2&a[0]?n.return:a[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,a[1])).done)return s;switch(n=0,s&&(a=[2&a[0],s.value]),a[0]){case 0:case 1:s=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(s=o.trys,(s=s.length>0&&s[s.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!s||a[1]>s[0]&&a[1]<s[3])){o.label=a[1];break}if(6===a[0]&&o.label<s[1]){o.label=s[1],s=a;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(a);break}s[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],n=0}finally{r=s=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.findAndWriteImportsExports=void 0;var log_1=require("log"),database_1=require("database"),ts_morph_util_1=require("ts-morph-util"),fs_util_1=require("fs-util"),getImportsExports_1=require("./getImportsExports"),calculatePackageJsonDependencies_1=require("./calculatePackageJsonDependencies"),writeResult_1=require("./writeResult"),findAndWriteImportsExports=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var r,n,s,a,o,i,c;return __generator(this,(function(u){switch(u.label){case 0:return r=(0,fs_util_1.getLastFolder)(e),[4/*yield*/,(0,ts_morph_util_1.getAllTsMorphSourceFiles)(e)];case 1:return(n=u.sent())&&0!==n.length?[3/*break*/,3]:(a="couldn't load any SourceFiles for ".concat(e," (sourceFiles=").concat(n,")"),(0,log_1.log)(a,{type:"error"}),[4/*yield*/,(0,writeResult_1.writeResult)({success:!1,message:a,operationName:r})]);case 2:case 5:case 13:return u.sent(),[2/*return*/];case 3:return[4/*yield*/,(0,getImportsExports_1.getImportsExports)({sourceFiles:n,manualProjectRoot:t})];case 4:return(s=u.sent())?[3/*break*/,6]:(a="Something went wrong creating imports/exports",(0,log_1.log)(a,{type:"error"}),[4/*yield*/,(0,writeResult_1.writeResult)({success:!1,message:a,operationName:r})]);case 6:return o=s.exports,i=s.imports,[4/*yield*/,database_1.db.get("PackageJson")];case 7:return c=u.sent(),[4/*yield*/,database_1.db.update("PackageJson",(
// NB: this should always be true, but this extra check will make sure it doesn't update too much...
function(e){return e.name===r}),(function(e){var t=(0,calculatePackageJsonDependencies_1.calculatePackageJsonDependencies)(e.dependencies,i,c),r=t.newDependencies,n=t.hasGeneratedDependencies,s=e.sensible?__assign(__assign({},e.sensible),{hasGeneratedDependencies:n}):{hasGeneratedDependencies:n};return __assign(__assign({},e),{sensible:s,dependencies:r})}),{operationName:r})];case 8:return u.sent(),[4/*yield*/,database_1.db.clear("TsImport",{operationName:r})];case 9:return u.sent(),[4/*yield*/,database_1.db.clear("TsExport",{operationName:r})];case 10:
// @ts-ignore
return u.sent(),[4/*yield*/,database_1.db.upsert("TsImport",i,{operationName:r})];case 11:
// @ts-ignore
// @ts-ignore
return u.sent(),[4/*yield*/,database_1.db.upsert("TsExport",o,{operationName:r})];case 12:
// @ts-ignore
return u.sent(),[4/*yield*/,(0,writeResult_1.writeResult)({success:!0,message:"Succesfully created imports and exports",operationName:r})]}}))}))};exports.findAndWriteImportsExports=findAndWriteImportsExports;
//# sourceMappingURL=findAndWriteImportsExports.js.map