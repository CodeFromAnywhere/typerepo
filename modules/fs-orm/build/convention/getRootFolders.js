"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(n,a){function i(e){try{s(o.next(e))}catch(e){a(e)}}function l(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}s((o=o.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,o,n,a,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,o&&(n=2&a[0]?o.return:a[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;switch(o=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(n=i.trys,(n=n.length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){i.label=a[1];break}if(6===a[0]&&i.label<n[1]){i.label=n[1],n=a;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(a);break}n[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var o,n=0,a=t.length;n<a;n++)!o&&n in t||(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getRootFolders=void 0;
// monorepo
var fs_util_1=require("fs-util"),js_util_1=require("js-util"),sdk_operations_1=require("sdk-operations"),calculateOperationsObject_1=require("./calculateOperationsObject"),getRootFolders=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r,o,n,a,i,l,s,u,c;return __generator(this,(function(p){switch(p.label){case 0:return t=e.mergedConfig,r=e.operationPath,o=e.projectRoot,n=e.manualProjectRoot,a="*"===t.operationName,i=void 0===t.operationName||null===t.operationName||"*"!==t.operationName,l=i?{operationName:null,basePath:o}:void 0,a?n?[4/*yield*/,(0,calculateOperationsObject_1.calculateOperationsObject)(n)]:[3/*break*/,2]:[2/*return*/,i&&l?[l]:[]];case 1:return u=p.sent(),[3/*break*/,3];case 2:u=sdk_operations_1.operations,p.label=3;case 3:return s=u,c=a?t.operationName&&r?[{basePath:r,operationName:t.operationName}]:Object.keys(s).map((function(e){return{basePath:fs_util_1.path.join(o,s[e]),operationName:e}})):[],[2/*return*/,__spreadArray([l],c,!0).filter(js_util_1.notEmpty)]}}))}))};exports.getRootFolders=getRootFolders;
//# sourceMappingURL=getRootFolders.js.map