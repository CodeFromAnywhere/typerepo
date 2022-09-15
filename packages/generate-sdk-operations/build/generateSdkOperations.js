"use strict";var __awaiter=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(e){a(e)}}function s(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}l((r=r.apply(e,n||[])).next())}))},__generator=this&&this.__generator||function(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateSdkOperations=void 0;
// global
var child_process_1=require("child_process"),get_path_1=require("get-path"),generateEnvSdks_1=require("./generateEnvSdks"),generateDbSdk_1=require("./generateDbSdk"),generateFunctionSdks_1=require("./generateFunctionSdks"),generateOperationsSdk_1=require("./generateOperationsSdk"),generateSdkOperations=function(
/**
 * if not provided, will not generate env-sdks
 */
e,n){return __awaiter(void 0,void 0,void 0,(function(){var t,r,o,a,i;return __generator(this,(function(s){switch(s.label){case 0:return t=null==n?void 0:n.manualProjectRoot,r=t||(0,get_path_1.getProjectRoot)(),o=null==n?void 0:n.yarnInstallAfter,null==n?void 0:n.yarnInstallBefore,a=null==n?void 0:n.dryrun,r?[4/*yield*/,(0,generateOperationsSdk_1.generateOperationsSdk)({manualProjectRoot:t,dryrun:a})]:[2/*return*/,!1];
// NB: install this first, otherwise sdk-operations cannot be found
case 1:
// NB: install this first, otherwise sdk-operations cannot be found
return s.sent(),[4/*yield*/,(0,generateDbSdk_1.generateDbSdk)({manualProjectRoot:t,skipYarnInstall:o,dryrun:a})];case 2:return s.sent(),[4/*yield*/,(0,generateFunctionSdks_1.generateFunctionSdks)({manualProjectRoot:t,skipYarnInstall:o,dryrun:a})];case 3:return s.sent(),e?[4/*yield*/,(0,generateEnvSdks_1.generateEnvSdks)(e,{manualProjectRoot:t,skipYarnInstall:o,dryrun:a})]:[3/*break*/,5];case 4:s.sent(),s.label=5;case 5:if(o){process.stdout.write("Installing repo ");try{return(0,child_process_1.execSync)("yarn --prefer-offline",{cwd:r,encoding:"utf8",stdio:"pipe"}),console.log("✅"),[2/*return*/,!0]}catch(e){return console.log("❌"),i=e,console.log("Could not install:",i),[2/*return*/,!1]}}return[2/*return*/,!0]}}))}))};exports.generateSdkOperations=generateSdkOperations;
//# sourceMappingURL=generateSdkOperations.js.map