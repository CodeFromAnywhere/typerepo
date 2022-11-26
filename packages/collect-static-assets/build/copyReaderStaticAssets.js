"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(a,i){function s(t){try{u(r.next(t))}catch(t){i(t)}}function o(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,o)}u((r=r.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var n,r,a,i,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(a=s.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){s.label=i[1];break}if(6===i[0]&&s.label<a[1]){s.label=a[1],a=i;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(i);break}a[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.copyReaderStaticAssets=void 0;var fs_util_1=require("fs-util"),get_path_1=require("get-path"),copyCopyPairs_1=require("./copyCopyPairs"),findReaderStaticAssets_1=require("./findReaderStaticAssets"),copyReaderStaticAssets=function(t,
/**
 * non-reader webPages will be filtered out by checking if the projectRelativeFilePath exists on pageData and has the extension .md
 */
e){return __awaiter(void 0,void 0,void 0,(function(){var n,r,a,i,s;return __generator(this,(function(o){switch(o.label){case 0:return(n=(0,get_path_1.getProjectRoot)())?(r=fs_util_1.path.join(t,"public","markdown-assets"),fs_util_1.fs.existsSync(r)?[4/*yield*/,fs_util_1.fs.rm(r,{recursive:!0})]:[3/*break*/,2]):[2/*return*/];case 1:
//first clean up if it was generated before
o.sent(),o.label=2;case 2:return a=e.map((function(t){return __assign(__assign({},t),{pageData:t.pageData})})).filter((function(t){var e,n;return null===(n=null===(e=t.pageData)||void 0===e?void 0:e.projectRelativeFilePath)||void 0===n?void 0:n.endsWith(".md")})).filter((function(t){var e;return fs_util_1.fs.existsSync(fs_util_1.path.join(n,null===(e=t.pageData)||void 0===e?void 0:e.projectRelativeFilePath))})).map((function(t){return t})),console.log({readerPagesThatExist:a.length}),[4/*yield*/,(0,findReaderStaticAssets_1.findReaderStaticAssets)(a)];case 3:return i=o.sent()||[],console.log({foundAssetsThatExist:i.length}),s=i.map((function(t){var e=(0,get_path_1.makeRelative)(t,n);return{absoluteSourcePath:t,absoluteDestinationPath:fs_util_1.path.join(r,e)}})),[4/*yield*/,(0,copyCopyPairs_1.copyCopyPairs)(s)];case 4:return o.sent(),console.log("Copied ".concat(s.length," files into your public folder")),[2/*return*/]}}))}))};exports.copyReaderStaticAssets=copyReaderStaticAssets;
//# sourceMappingURL=copyReaderStaticAssets.js.map