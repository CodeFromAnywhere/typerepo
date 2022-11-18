"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSdkFunctionsPerClassification=void 0;var database_1=require("database"),fs_util_1=require("fs-util"),get_package_json_1=require("get-package-json"),log_1=require("log"),get_path_1=require("get-path"),code_types_1=require("code-types"),find_all_dependency_operations_1=require("find-all-dependency-operations"),get_path_2=require("get-path"),js_util_1=require("js-util"),k_explore_1=require("k-explore"),tsFunctionIsIndexable_1=require("./tsFunctionIsIndexable"),tsFunctionIsSdkable_1=require("./tsFunctionIsSdkable"),getSdkFunctionsPerClassification=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,n,r,o,i,a,s,u,l;return __generator(this,(function(c){switch(c.label){case 0:return t=null==e?void 0:e.manualProjectRoot,t||(0,get_path_1.getProjectRoot)()?[4/*yield*/,(0,find_all_dependency_operations_1.findDependantsRecursively)("sdk")]:[2/*return*/];case 1:return n=c.sent(),[4/*yield*/,database_1.db.get("TsFunction",{manualProjectRoot:t})];case 2:return r=c.sent(),console.log({tsFunctions:r.length,manualProjectRoot:t}),o=r.filter((function(e){return e.isExported})).filter(tsFunctionIsIndexable_1.tsFunctionIsIndexable).filter((function(e){return e.operationName&&!n.includes(e.operationName)})).filter((0,js_util_1.onlyUnique2)((function(e,t){return e.name===t.name}))),console.log({exportedFunctions:o.length}),[4/*yield*/,(0,k_explore_1.exploreOperationFolders)({})];case 3:return i=c.sent(),[4/*yield*/,(0,get_path_2.getOperationClassificationObject)()];case 4:return a=c.sent(),u=js_util_1.mergeObjectsArray,[4/*yield*/,Promise.all(i.map((function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,n,r,o,i;return __generator(this,(function(a){switch(a.label){case 0:return[4/*yield*/,(0,get_package_json_1.getPackageJson)({operationFolderPath:e})];case 1:return t=a.sent(),n=!(null===(i=null==t?void 0:t.operation)||void 0===i?void 0:i.isNotSdkable),r=(0,fs_util_1.getLastFolder)(e),[2/*return*/,(o={},o[r]=n,o)]}}))}))})))];case 5:return s=u.apply(void 0,[c.sent()]),l=(0,js_util_1.mergeObjectsArray)(code_types_1.operationClassificationConst.map((function(e){var t,n=o.filter((function(e){return!!e.operationName&&s[e.operationName]})).filter((function(t){return(0,tsFunctionIsSdkable_1.tsFunctionIsSdkable)(t,a,e)})).filter((0,js_util_1.onlyUnique2)((function(e,t){return e.name===t.name})));return(0,log_1.log)("for ".concat(e," we found ").concat(n.length," functions"),{type:"debug"}),0===n.length&&(0,log_1.log)("Warning: 0 functions found for ".concat(e," operations"),{type:"warning"}),(t={})[e]=n,t}))),[2/*return*/,l]}}))}))};exports.getSdkFunctionsPerClassification=getSdkFunctionsPerClassification;
//# sourceMappingURL=getSdkFunctionsPerClassification.js.map