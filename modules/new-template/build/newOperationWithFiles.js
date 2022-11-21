"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.newOperationWithFiles=void 0;var child_process_1=require("child_process"),fs_util_1=require("fs-util"),get_path_1=require("get-path"),js_util_1=require("js-util"),rebuild_operation_1=require("rebuild-operation"),set_json_key_1=require("set-json-key"),filename_conventions_1=require("filename-conventions"),newOperation_1=require("./newOperation"),log_1=require("log"),newOperationWithFiles=function(e,t,
/**
 * NB: relative paths must be relative to OPERATION ROOT, not src root!
 */
n,r){return __awaiter(void 0,void 0,void 0,(function(){var i,o,s,a,l,u,c,_,f,p,h;return __generator(this,(function(d){switch(d.label){case 0:return(i=(null==r?void 0:r.manualProjectRoot)||(0,get_path_1.getProjectRoot)())?(o=(0,get_path_1.isBundle)(i)?fs_util_1.path.join(i,"packages","generated"):fs_util_1.path.join(i,filename_conventions_1.projectRelativeGeneratedOperationsFolder),s=(null==r?void 0:r.destinationPath)||o,a=Object.keys(n).map((function(e){return'export * from "./'.concat((0,get_path_1.getSrcRelativeFileId)(e),'";')})).join("\n"),l=__assign(__assign({},n),{"src/index.ts":a}),(null==r?void 0:r.dryrun)?[4/*yield*/,Promise.all(Object.keys(n).map((function(e){var t=fs_util_1.path.join(__dirname,"..","assets","generated",e);return console.log("written to ".concat(t)),(0,fs_util_1.writeStringToFile)(t,n[e])})))]:[3/*break*/,2]):((0,log_1.log)("Not found projectroot",{type:"error"}),[2/*return*/]);case 1:return d.sent(),[2/*return*/];case 2:return[4/*yield*/,(0,newOperation_1.newOperation)(e,{destinationPath:s,description:t,manualProjectRoot:i})];case 3:return(u=d.sent())?fs_util_1.fs.existsSync(u)?(c=fs_util_1.path.join(s,e),[4/*yield*/,(0,js_util_1.objectMapAsync)(l,(function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var n;return __generator(this,(function(r){switch(r.label){case 0:return n=fs_util_1.path.join(u,e),[4/*yield*/,(0,fs_util_1.writeStringToFile)(n,t)];case 1:return r.sent(),[2/*return*/]}}))}))}))]):((0,log_1.log)("actualBasePath does not exist: ".concat(u),{type:"error"}),[2/*return*/]):((0,log_1.log)("Failed creating new operation",{type:"error"}),[2/*return*/]);case 4:
// 4. write files to src
return d.sent(),_=c!==u&&(null==r?void 0:r.overwriteIfExists)&&fs_util_1.fs.existsSync(c),f=_?c:u,
// 6. yarn build there
(null==r?void 0:r.skipYarnInstall)||
// in case this operation didn't exist before, run `yarn --offline`
// NB: this assumes we already have node_modules and the new operation has no weird new dependencies
(0,child_process_1.spawnSync)("yarn --offline",{cwd:u,encoding:"utf8",stdio:"inherit",shell:!1}),(null==r?void 0:r.skipYarnBuild)?[3/*break*/,6]:[4/*yield*/,(0,rebuild_operation_1.yarnBuild)(u)];case 5:if(!d.sent())return(0,log_1.log)("Building failed",{type:"error"}),[2/*return*/];d.label=6;case 6:return _?(p=fs_util_1.path.join(u,"package.json"),(h=fs_util_1.fs.existsSync(p))?[4/*yield*/,(0,fs_util_1.canRead)(p)]:[3/*break*/,8]):[3/*break*/,13];case 7:h=d.sent(),d.label=8;case 8:return h?[4/*yield*/,(0,set_json_key_1.setJsonKey)({jsonPath:p,keyLocation:"name",value:e})]:[2/*return*/];case 9:return d.sent(),fs_util_1.fs.existsSync(c)?[4/*yield*/,fs_util_1.fs.rm(c,{recursive:!0})]:[3/*break*/,11];
//then remove the original operation
case 10:
//then remove the original operation
d.sent(),d.label=11;case 11:return fs_util_1.fs.existsSync(u)?[4/*yield*/,fs_util_1.fs.rename(u,c)]:[3/*break*/,13];
// then rename the new operation to the original operation path
case 12:
// then rename the new operation to the original operation path
d.sent(),d.label=13;case 13:return[2/*return*/,f]}}))}))};exports.newOperationWithFiles=newOperationWithFiles;
//# sourceMappingURL=newOperationWithFiles.js.map