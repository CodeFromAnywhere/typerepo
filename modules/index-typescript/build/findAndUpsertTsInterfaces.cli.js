"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}u((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(exports,"__esModule",{value:!0});var fs_util_1=require("fs-util"),get_path_1=require("get-path"),findAndUpsertTsInterfaces_1=require("./findAndUpsertTsInterfaces"),cli=function(){return __awaiter(void 0,void 0,void 0,(function(){var e,t,n;return __generator(this,(function(r){switch(r.label){case 0:return e=process.argv.slice(2)[0],(t=(0,get_path_1.findOperationBasePath)(e))?(n=(0,fs_util_1.getLastFolder)(t),[4/*yield*/,(0,findAndUpsertTsInterfaces_1.findAndUpsertTsInterfaces)({filePath:e,operationName:n})]):(console.log("Please provide a filePath that is part of an operation"),[2/*return*/]);case 1:
// NB: last argument has been removed, which should be the manualProjectRoot
return r.sent(),[2/*return*/]}}))}))};cli();
//# sourceMappingURL=findAndUpsertTsInterfaces.cli.js.map