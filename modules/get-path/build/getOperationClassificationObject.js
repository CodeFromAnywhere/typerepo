"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{s(n.next(e))}catch(e){o(e)}}function l(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,l)}s((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getOperationClassificationObject=void 0;var fs_util_1=require("fs-util"),js_util_1=require("js-util"),k_explore_1=require("k-explore"),getOperationClassification_1=require("./getOperationClassification"),getOperationClassificationObject=function(){return __awaiter(void 0,void 0,void 0,(function(){var e;return __generator(this,(function(t){switch(t.label){case 0:return[4/*yield*/,(0,k_explore_1.exploreOperationFolders)({})];case 1:return e=t.sent(),[2/*return*/,(0,js_util_1.mergeObjectsArray)(e.map((function(e){var t,r=(0,getOperationClassification_1.getOperationClassification)(e);if(r)return(t={})[(0,fs_util_1.getLastFolder)(e)]=r,t})).filter(js_util_1.notEmpty))]}}))}))};exports.getOperationClassificationObject=getOperationClassificationObject;
//# sourceMappingURL=getOperationClassificationObject.js.map