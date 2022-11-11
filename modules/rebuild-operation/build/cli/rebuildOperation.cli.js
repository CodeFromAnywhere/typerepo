#!/usr/bin/env node
"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function u(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}l((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(exports,"__esModule",{value:!0});var fs_util_1=require("fs-util"),get_path_1=require("get-path"),log_1=require("log"),one_by_one_1=require("one-by-one"),rebuildOperation_1=require("../rebuildOperation"),rebuildOperationCli=function(){return __awaiter(void 0,void 0,void 0,(function(){var e;return __generator(this,(function(t){return(e=process.argv.slice(2)).length>0&&(0,one_by_one_1.oneByOne)(e,(function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r;return __generator(this,(function(n){switch(n.label){case 0:return e.startsWith(".")?(t=fs_util_1.path.join(process.cwd(),e),r=(0,get_path_1.getProjectRoot)(t),[3/*break*/,3]):[3/*break*/,1];case 1:return[4/*yield*/,(0,get_path_1.getOperationPath)(e)];case 2:t=n.sent(),n.label=3;case 3:return t?[4/*yield*/,(0,rebuildOperation_1.rebuildOperation)({operationBasePath:t,operationManualProjectRoot:r,force:!0,debug:!0,noExit:!0})]:((0,log_1.log)("couldn't find that operation"),[2/*return*/]);case 4:return n.sent(),[2/*return*/]}}))}))})),[2/*return*/]}))}))};rebuildOperationCli();
//# sourceMappingURL=rebuildOperation.cli.js.map