"use strict";var __awaiter=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{s(r.next(e))}catch(e){o(e)}}function l(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}s((r=r.apply(e,n||[])).next())}))},__generator=this&&this.__generator||function(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(e,a)}catch(e){o=[6,e],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};Object.defineProperty(exports,"__esModule",{value:!0});var all_1=require("all"),fs_util_1=require("fs-util"),findAllDependencyOperations_1=require("./findAllDependencyOperations"),test=function(){(0,all_1.forAllFolders)({type:"operations",callback:function(e){return __awaiter(void 0,void 0,void 0,(function(){var n,t;return __generator(this,(function(r){switch(r.label){case 0:return n=[(0,fs_util_1.getLastFolder)(e)],[4/*yield*/,(0,findAllDependencyOperations_1.findAllDependencyOperations)({operationNames:n})];case 1:return t=r.sent(),console.log(e,t),[2/*return*/]}}))}))}})},test2=function(){return __awaiter(void 0,void 0,void 0,(function(){var e,n;return __generator(this,(function(t){switch(t.label){case 0:return[4/*yield*/,(0,findAllDependencyOperations_1.findDependenciesRecursively)("k-test",[])];case 1:return e=t.sent(),console.log(e),[4/*yield*/,(0,findAllDependencyOperations_1.findAllDependencyOperations)({operationNames:["make-test","js-util","get-path","fs-util"]})];case 2:return n=t.sent(),console.log(n),[2/*return*/]}}))}))},findDependantsRecursivelyTest=function(){return __awaiter(void 0,void 0,void 0,(function(){var e;return __generator(this,(function(n){switch(n.label){case 0:return[4/*yield*/,(0,findAllDependencyOperations_1.findDependantsRecursively)("sdk")];case 1:return e=n.sent(),console.log({sdkDependants:e}),[2/*return*/]}}))}))};
// findDependantsRecursivelyTest();
//# sourceMappingURL=test.js.map