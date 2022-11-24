"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(a,i){function o(t){try{c(n.next(t))}catch(t){i(t)}}function s(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,s)}c((n=n.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var r,n,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=e.call(t,o)}catch(t){i=[6,t],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.copyReaderStaticAssets=void 0;var fs_util_1=require("fs-util"),get_path_1=require("get-path"),copyCopyPairs_1=require("./copyCopyPairs"),findReaderStaticAssets_1=require("./findReaderStaticAssets"),copyReaderStaticAssets=function(t,
/**
 * non-reader webPages will be filtered out by checking if the projectRelativeFilePath exists on pageData and has the extension .md
 */
e){return __awaiter(void 0,void 0,void 0,(function(){var r,n,a,i,o;return __generator(this,(function(s){switch(s.label){case 0:return(r=(0,get_path_1.getProjectRoot)())?(n=fs_util_1.path.join(t,"public","markdown-assets"),fs_util_1.fs.existsSync(n)?[4/*yield*/,fs_util_1.fs.rm(n,{recursive:!0})]:[3/*break*/,2]):[2/*return*/];case 1:
//first clean up if it was generated before
s.sent(),s.label=2;case 2:return a=e.map((function(t){return __assign(__assign({},t),{pageData:t.pageData})})).filter((function(t){var e,r;return null===(r=null===(e=t.pageData)||void 0===e?void 0:e.projectRelativeFilePath)||void 0===r?void 0:r.endsWith(".md")})).map((function(t){return t})),[4/*yield*/,(0,findReaderStaticAssets_1.findReaderStaticAssets)(a)];case 3:return i=s.sent()||[],o=i.map((function(t){var e=(0,get_path_1.makeRelative)(t,r);return{absoluteSourcePath:t,absoluteDestinationPath:fs_util_1.path.join(n,e)}})),[4/*yield*/,(0,copyCopyPairs_1.copyCopyPairs)(o)];case 4:return s.sent(),console.log("Copied ".concat(o.length," files into your public folder")),[2/*return*/]}}))}))};exports.copyReaderStaticAssets=copyReaderStaticAssets;
//# sourceMappingURL=copyReaderStaticAssets.js.map