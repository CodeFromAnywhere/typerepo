"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,r,a){return new(r||(r=Promise))((function(n,i){function s(e){try{u(a.next(e))}catch(e){i(e)}}function o(e){try{u(a.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,o)}u((a=a.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,a,n,i,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,a&&(n=2&i[0]?a.return:i[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,i[1])).done)return n;switch(a=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,a=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(n=s.trys,(n=n.length>0&&n[n.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){s.label=i[1];break}if(6===i[0]&&s.label<n[1]){s.label=n[1],n=i;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(i);break}n[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],a=0}finally{r=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.calculatePathMetaData=exports.getPathMainComment=void 0;var markdown_parse_js_1=require("markdown-parse-js"),fs_util_1=require("fs-util"),index_typescript_1=require("index-typescript"),get_path_1=require("get-path"),categorizeFiles_1=require("./categorizeFiles"),k_explore_1=require("k-explore"),getFolderSummary_1=require("./getFolderSummary"),getPathMainComment=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r,a,n,i,s,o,u,l,c;return __generator(this,(function(_){switch(_.label){case 0:return[4/*yield*/,(0,index_typescript_1.getIndexId)(e,(0,fs_util_1.getLastFolder)(e))];case 1:return(t=_.sent())?(r=(0,fs_util_1.getFolder)(e),[4/*yield*/,fs_util_1.fs.readdir(r,"utf8")]):[2/*return*/];case 2:return a=_.sent(),n=a.find((function(e){return"readme"===fs_util_1.path.parse(e).name.toLowerCase()})),!!n?[4/*yield*/,fs_util_1.fs.readFile(n,"utf8")]:[3/*break*/,4];case 3:return s=_.sent(),[3/*break*/,5];case 4:s="",_.label=5;case 5:return i=s,o=(0,markdown_parse_js_1.parseFrontmatterMarkdownString)(i),u=o.raw,l=o.parameters,c=(0,index_typescript_1.findCommentTypes)(u),[2/*return*/,__assign(__assign({rawStatement:void 0,statementName:void 0},t),{comment:u,parameters:l,types:c,firstLine:0,lastLine:(0,index_typescript_1.getNumberOfLines)(i)})]}}))}))};exports.getPathMainComment=getPathMainComment;
/**
 * for folders: finds all files used for calculation and uses sumPathMetaData to create a new PathMetaData.
 * for files: just calculates the path metadata
 */
var calculatePathMetaData=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r,a,n,i,s,o,u,l;return __generator(this,(function(c){switch(c.label){case 0:return fs_util_1.fs.existsSync(e)&&(t=(0,get_path_1.getPathParse)(e))?[4/*yield*/,fs_util_1.fs.stat(e)]:[2/*return*/];case 1:return r=c.sent(),a=r.isDirectory(),n=a?void 0:fs_util_1.path.parse(e).base,i=a?null:(0,k_explore_1.determineFileType)(e),a?[4/*yield*/,(0,categorizeFiles_1.categorizeFiles)({basePath:e})]:[3/*break*/,3];case 2:return o=c.sent(),[3/*break*/,4];case 3:o={code:"code"===i?[e]:[],data:"data"===i?[e]:[],text:"text"===i?[e]:[]},c.label=4;case 4:return s=o,[4/*yield*/,(0,getFolderSummary_1.getFolderSummary)(s)];case 5:return u=c.sent(),[4/*yield*/,(0,exports.getPathMainComment)(e)];case 6:return l=c.sent(),[2/*return*/,__assign(__assign({mainComment:l,isFolder:a,fullFileName:n,createdAt:r.ctimeMs,updatedAt:r.mtimeMs},t),{sizes:u})]}}))}))};exports.calculatePathMetaData=calculatePathMetaData;
//# sourceMappingURL=calculatePathMetaData.js.map