#!/usr/bin/env node
"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{a(r.next(e))}catch(e){s(e)}}function c(e){try{a(r.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}a((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function c(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getExtension=exports.withoutExtension=exports.getFileName=exports.getFolder=exports.getLastFolder=exports.getSubExtension=exports.removeTrailingSlash=exports.writeStringToFile=exports.writeJsonToFile=exports.getPathCombinations=exports.canExecuteSync=exports.canWriteSync=exports.canReadSync=exports.canSeeSync=exports.canExecute=exports.canWrite=exports.canRead=exports.canSee=exports.canAccessSync=exports.canAccess=exports.writeToFiles=void 0;var log_1=require("log"),path_1=require("./path"),fs_1=require("./fs"),js_util_1=require("js-util"),writeToFiles=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t;return __generator(this,(function(n){switch(n.label){case 0:return 0,0,t=Object.keys(e).map((function(t){return __awaiter(void 0,void 0,void 0,(function(){var n,r;return __generator(this,(function(o){switch(o.label){case 0:return n=e[t],[4/*yield*/,(0,exports.writeJsonToFile)(t,n)];case 1:return(r=o.sent())&&0,r||0,[2/*return*/,r]}}))}))})),[4/*yield*/,Promise.all(t)];case 1:return n.sent(),[2/*return*/]}}))}))};exports.writeToFiles=writeToFiles;
/**
 * uses fs.access to determine if something can be accessed
 *
 * Check File access constants for possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. fs.constants.W_OK | fs.constants.R_OK).
 */
var canAccess=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4/*yield*/,fs_1.fs.access(e,t)];case 1:return n.sent(),[2/*return*/,!0];case 2:return n.sent(),[2/*return*/,!1];case 3:return[2/*return*/]}}))}))};exports.canAccess=canAccess;
/**
 * uses fs.access to determine if something can be accessed
 *
 * Check File access constants for possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. fs.constants.W_OK | fs.constants.R_OK).
 */
var canAccessSync=function(e,t){try{return fs_1.fs.accessSync(e,t),!0}catch(e){return!1}};exports.canAccessSync=canAccessSync;
/**
 * File is visible to the calling process
 */
var canSee=function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(t){return[2/*return*/,(0,exports.canAccess)(e,fs_1.fs.constants.F_OK)]}))}))};exports.canSee=canSee;
/**
 * File is readable to the calling process
 */
var canRead=function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(t){return[2/*return*/,(0,exports.canAccess)(e,fs_1.fs.constants.R_OK)]}))}))};exports.canRead=canRead;
/**
 * File is writable to the calling process
 */
var canWrite=function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(t){return[2/*return*/,(0,exports.canAccess)(e,fs_1.fs.constants.W_OK)]}))}))};exports.canWrite=canWrite;
/**
 * File is executable to the calling process
 */
var canExecute=function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(t){return[2/*return*/,(0,exports.canAccess)(e,fs_1.fs.constants.X_OK)]}))}))};exports.canExecute=canExecute;
/**
 * File is visible to the calling process
 */
var canSeeSync=function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(t){return[2/*return*/,(0,exports.canAccessSync)(e,fs_1.fs.constants.F_OK)]}))}))};exports.canSeeSync=canSeeSync;
/**
 * File is readable to the calling process
 */
var canReadSync=function(e){return(0,exports.canAccessSync)(e,fs_1.fs.constants.R_OK)};exports.canReadSync=canReadSync;
/**
 * File is writable to the calling process
 */
var canWriteSync=function(e){return(0,exports.canAccessSync)(e,fs_1.fs.constants.W_OK)};exports.canWriteSync=canWriteSync;
/**
 * File is executable to the calling process
 */
var canExecuteSync=function(e){return(0,exports.canAccessSync)(e,fs_1.fs.constants.X_OK)};exports.canExecuteSync=canExecuteSync;
/**
 gets combinations for paths

 input: [["operation1","operation2"], "db/value-export", ["index.ts","test.ts","cli.ts"]]
 output: ["operation1/db/value-export/index.ts","operation2/db/value-export/index.ts","operation1/db/value-export/test.ts","operation2/db/value-export/test.ts","operation1/db/value-export/cli.ts","operation2/db/value-export/cli.ts"]
 */
var getPathCombinations=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.map((function(e){return(0,js_util_1.makeArray)(e)})).map((function(e){return e.filter(js_util_1.notEmpty)})).reduce((function(e,t){
// first chunk is the combination of itself
return 0===e.length?t:e.reduce((function(e,n){
// for every segment add all the chunks to that segment
var r=t.map((function(e){return path_1.path.join(n,e)}));
//add them to all new cumSegments
return e.concat(r)}),[]);
// all next chunks use the accummualted segments and reduce them
}),[])};exports.getPathCombinations=getPathCombinations;
/**
 * write json to a file
 *
 * makes the dir and file if they don't exist
 */
var writeJsonToFile=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var n,r;return __generator(this,(function(o){switch(o.label){case 0:return t?(n=JSON.stringify(t,null,2),r=(0,exports.getFolder)(e),fs_1.fs.existsSync(r)?[3/*break*/,2]:[4/*yield*/,fs_1.fs.mkdir(r,{recursive:!0})]):(console.log({p:e,data:t}),[2/*return*/,!1]);case 1:
//first, make sure the folder exists
o.sent(),o.label=2;case 2:
//then write it
return[4/*yield*/,fs_1.fs.writeFile(e,n,"utf8")];case 3:
//then write it
return o.sent(),[2/*return*/,!0]}}))}))};exports.writeJsonToFile=writeJsonToFile;
/**
 * write string to a file
 *
 * makes the dir and file if they don't exist
 */
var writeStringToFile=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var n;return __generator(this,(function(r){switch(r.label){case 0:return null==t||"string"!=typeof t?((0,log_1.log)("Incorrect data provided",t),[2/*return*/,!1]):(n=(0,exports.getFolder)(e),fs_1.fs.existsSync(n)?[3/*break*/,2]:[4/*yield*/,fs_1.fs.mkdir(n,{recursive:!0})]);case 1:
//first, make sure the folder exists
r.sent(),r.label=2;case 2:
//then write it
return[4/*yield*/,fs_1.fs.writeFile(e,t,"utf8")];case 3:
//then write it
return r.sent(),[2/*return*/,!0]}}))}))};exports.writeStringToFile=writeStringToFile;var removeTrailingSlash=function(e){return"/"===e.charAt(0)?e.slice(1):e};exports.removeTrailingSlash=removeTrailingSlash;var getSubExtension=function(e){var t=e.split(".");
//removes extension
return t.pop(),t.pop()};exports.getSubExtension=getSubExtension;
/**
 * removes everything after the last slash to get folder path
 *
 * input: /Users/king/Documents/some/folder/xyz
 * output: xyz
 *
 * input: /Users/king/Documents/some/folder/xyz.txt
 * output: folder
 */
var getLastFolder=function(e){
// console.log({ pathString, lastFolder });
return(0,exports.getFolder)(e).split("/").pop()};exports.getLastFolder=getLastFolder;
/**
 if the path exists:
    - if the pathString is a folder, that is returned.
    - if the pathstring is not a folder, returns the pathstring without the file suffix
    
if the path doesn't exist: returns pathString witout last chunk (this would only work for file paths)
 */
var getFolder=function(e){if(path_1.path.parse(e).ext.length>0){
// NB: assume it's a file, let's avoid folders with dots!
var t=e.split("/");//remove the filename
return t.pop(),t.join("/")}
// NB: it's already a folder!
return e};exports.getFolder=getFolder;
/**
 * removes everything before the last slash to get folder path
 */
var getFileName=function(e){return path_1.path.basename(e)};exports.getFileName=getFileName;
/**
 * removes extension from the filename
 *
 */
var withoutExtension=function(e){var t=e.split(".");return t.pop(),t.join(".")};exports.withoutExtension=withoutExtension;
/**
 * returns the extension of the filename or path
 *
 * NB: not sure, but could be nice to replace this with path.extname(pathString)
 */
var getExtension=function(e){return e.split(".").pop()};exports.getExtension=getExtension;
//# sourceMappingURL=files.js.map