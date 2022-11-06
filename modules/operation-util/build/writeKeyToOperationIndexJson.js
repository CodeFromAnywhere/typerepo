"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.writeKeyToOperationIndexJson=void 0;var get_path_1=require("get-path"),set_json_key_1=require("set-json-key"),fs_util_1=require("fs-util"),filename_conventions_1=require("filename-conventions"),writeKeyToOperationIndexJson=function(
/**
 * can be a path to any file in the operation
 */
e,t,n){return __awaiter(void 0,void 0,void 0,(function(){var r,i,o;return __generator(this,(function(a){switch(a.label){case 0:return(r=(0,get_path_1.findOperationBasePath)(e))?(i=fs_util_1.path.join(r,filename_conventions_1.databaseFolderName,"operation-index.json"),fs_util_1.fs.existsSync(i)?[3/*break*/,4]:(o=fs_util_1.path.parse(i).dir,fs_util_1.fs.existsSync(o)?[3/*break*/,2]:[4/*yield*/,fs_util_1.fs.mkdir(o,{recursive:!0})])):[2/*return*/];case 1:a.sent(),a.label=2;case 2:return[4/*yield*/,fs_util_1.fs.writeFile(i,"{}","utf8")];case 3:a.sent(),a.label=4;case 4:return(0,set_json_key_1.setJsonKey)({jsonPath:i,keyLocation:t,value:JSON.stringify(n)}),[2/*return*/]}}))}))};exports.writeKeyToOperationIndexJson=writeKeyToOperationIndexJson;
//# sourceMappingURL=writeKeyToOperationIndexJson.js.map