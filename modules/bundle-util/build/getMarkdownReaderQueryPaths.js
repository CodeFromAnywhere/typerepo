"use strict";var __awaiter=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))((function(a,o){function u(e){try{c(n.next(e))}catch(e){o(e)}}function i(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(u,i)}c((n=n.apply(e,r||[])).next())}))},__generator=this&&this.__generator||function(e,r){var t,n,a,o,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,n=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(a=u.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){u.label=o[1];break}if(6===o[0]&&u.label<a[1]){u.label=a[1],a=o;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(o);break}a[2]&&u.ops.pop(),u.trys.pop();continue}o=r.call(e,u)}catch(e){o=[6,e],n=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getMarkdownReaderQueryPaths=void 0;var getDocsMarkdownReaderPages_1=require("./getDocsMarkdownReaderPages"),getMarkdownReaderQueryPaths=function(e){return __awaiter(void 0,void 0,void 0,(function(){var r;return __generator(this,(function(t){switch(t.label){case 0:return[4/*yield*/,(0,getDocsMarkdownReaderPages_1.getDocsMarkdownReaderPages)(e)];case 1:return r=t.sent(),[2/*return*/,null==r?void 0:r.map((function(e){return e.queryPath}))]}}))}))};exports.getMarkdownReaderQueryPaths=getMarkdownReaderQueryPaths;
//# sourceMappingURL=getMarkdownReaderQueryPaths.js.map