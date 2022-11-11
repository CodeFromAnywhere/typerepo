"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function u(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}l((o=o.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,o,n,i,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,o&&(n=2&i[0]?o.return:i[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,i[1])).done)return n;switch(o=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(n=a.trys,(n=n.length>0&&n[n.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){a.label=i[1];break}if(6===i[0]&&a.label<n[1]){a.label=n[1],n=i;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(i);break}n[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{r=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.indexTypescript=void 0;
// external
var fs_1=__importDefault(require("fs")),graceful_fs_1=__importDefault(require("graceful-fs")),fs_util_1=require("fs-util"),ts_morph_util_1=require("ts-morph-util"),js_util_1=require("js-util"),get_path_1=require("get-path"),log_1=require("log"),read_json_file_1=require("read-json-file"),operation_util_1=require("operation-util"),getValidatedOperationPathParse_1=require("./getValidatedOperationPathParse"),indexTypescriptFile_1=require("./indexTypescriptFile"),one_by_one_1=require("one-by-one"),indexTypescript=function(e){var t=e.filePaths,r=e.manualProjectRoot;return __awaiter(void 0,void 0,void 0,(function(){var e,o,n,i,a,u,l,s;return __generator(this,(function(_){switch(_.label){case 0:
// NB: fix to globally alter real fs in order to fix EMFile error that happens in TSMorph (see https://github.com/isaacs/node-graceful-fs)
return graceful_fs_1.default.gracefulify(fs_1.default),(e=t[0])||(0,log_1.log)("Please provide some file paths"),(o=(0,get_path_1.findOperationBasePath)(e))?(n=r||(0,get_path_1.getProjectRoot)(e))?[4/*yield*/,(0,read_json_file_1.readJsonFile)(fs_util_1.path.join(o,"package.json"))]:((0,log_1.log)("No project root found",{type:"error"}),[2/*return*/]):((0,log_1.log)("Operation must have a basepath to be indexed",{type:"error"}),[2/*return*/]);case 1:return(i=_.sent())?i.name?(a=[],(u=(0,ts_morph_util_1.getTsMorphProject)(o))?[3/*break*/,3]:(l="couldn't load project",a.push(l),[4/*yield*/,(0,operation_util_1.writeKeyToOperationIndexJson)(t[0],"indexErrors",a)])):((0,log_1.log)("Operation must have a name to be indexed",{type:"error"}),[2/*return*/]):((0,log_1.log)("Operation must have a package.json to be indexed",{type:"error"}),[2/*return*/]);case 2:return _.sent(),(0,log_1.log)(l,{type:"error"}),[2/*return*/];case 3:
// NB: one by one because if you do multiple at once, writing commets goes corrupt because concurrent writing.
return s=t.map(getValidatedOperationPathParse_1.getValidatedOperationPathParse).filter(js_util_1.notEmpty),[4/*yield*/,(0,one_by_one_1.oneByOne)(s,(function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var r;return __generator(this,(function(o){switch(o.label){case 0:return process.stdout.write("".concat(t+1,") ").concat(e.srcFileId," ")),[4/*yield*/,(0,indexTypescriptFile_1.indexTypescriptFile)(u,e,n)];case 1:return r=o.sent(),console.log("✅"),[2/*return*/,r]}}))}))}))];case 4:
// NB: one by one because if you do multiple at once, writing commets goes corrupt because concurrent writing.
return _.sent(),[2/*return*/]}}))}))};exports.indexTypescript=indexTypescript;
//# sourceMappingURL=indexTypescript.js.map