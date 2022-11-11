"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{l(r.next(e))}catch(e){a(e)}}function s(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}l((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateJsonSchemas=void 0;var convert_case_1=require("convert-case"),pluralize_1=require("pluralize"),read_json_file_1=require("read-json-file"),database_1=require("database"),fs_orm_1=require("fs-orm"),js_util_1=require("js-util"),fs_util_1=require("fs-util"),get_path_1=require("get-path"),getAllDbModels_1=require("./getAllDbModels"),generateJsonSchemas=function(e,
/**
 * If given, does it just for a single operation
 */
t){return __awaiter(void 0,void 0,void 0,(function(){var n,r,i,a,o,s,l,u,c,_,f;return __generator(this,(function(p){switch(p.label){case 0:return(n=e||(0,get_path_1.getProjectRoot)())?[4/*yield*/,(0,getAllDbModels_1.getAllDbModels)(e,t)]:[2/*return*/];case 1:return r=p.sent(),i=r.filter((function(e){return e.dbStorageMethod&&["jsonMultiple","jsonSingle"].includes(e.dbStorageMethod)})),[4/*yield*/,Promise.all(i.map((function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,n,r,i;return __generator(this,(function(a){switch(a.label){case 0:return e.dbStorageMethod&&(t=(0,fs_orm_1.getDefaultLocationPattern)(e.dbStorageMethod,e.name))?[4/*yield*/,database_1.db.get("TsInterface",{})]:[2/*return*/];case 1:return n=a.sent(),r=e.type.typeDefinition,i=(0,js_util_1.mergeObjectsArray)(n.filter((function(t){return t.name!==e.name})).map((function(e){var t;if(e.type.typeDefinition)return(t={})[e.name.replace(">","%3E").replace("<","%3C")]=e.type.typeDefinition,t})).filter(js_util_1.notEmpty)),[2/*return*/,{schema:__assign(__assign({},r),{$schema:"http://json-schema.org/draft-07/schema#",title:e.name,additionalProperties:!1,description:e.description,definitions:i}),fileMatch:["/".concat(t)],url:"./schemas/".concat((0,pluralize_1.pluralize)((0,convert_case_1.kebabCase)(e.name)),".schema.json")}]}}))}))})))];case 2:return a=p.sent().filter(js_util_1.notEmpty),[4/*yield*/,Promise.all(a.map((function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r;return __generator(this,(function(i){switch(i.label){case 0:return[4/*yield*/,(0,fs_util_1.writeJsonToFile)(fs_util_1.path.join(n,e.url),e.schema)];case 1:return i.sent()?(t=e.fileMatch,r=e.url,[2/*return*/,{fileMatch:t,url:r}]):(console.log("WRITE WERNT WRONG"),[2/*return*/])}}))}))})))];case 3:return o=p.sent().filter(js_util_1.notEmpty),s=fs_util_1.path.join(n,"project-root.code-workspace"),[4/*yield*/,(0,read_json_file_1.readJsonFile)(s)];case 4:return l=p.sent()||{},u=(null===(f=l.settings)||void 0===f?void 0:f["json.schemas"])||[],c=__assign(__assign({},l),{settings:__assign(__assign({},l.settings),{"json.schemas":o.concat(u).filter((0,js_util_1.onlyUnique2)((function(e,t){return e.url===t.url})))})}),[4/*yield*/,(0,fs_util_1.writeJsonToFile)(s,c)];case 5:return _=p.sent(),console.log({isNewWorkspaceWritten:_,workspacePath:s}),[2/*return*/]}}))}))};exports.generateJsonSchemas=generateJsonSchemas;
//# sourceMappingURL=generateJsonSchemas.js.map