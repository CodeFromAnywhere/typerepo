"use strict";var __awaiter=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,a){function i(t){try{s(n.next(t))}catch(t){a(t)}}function u(t){try{s(n.throw(t))}catch(t){a(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(i,u)}s((n=n.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};Object.defineProperty(exports,"__esModule",{value:!0});var get_path_1=require("get-path"),findAndWriteImportsExports_1=require("./findAndWriteImportsExports"),test=function(){return __awaiter(void 0,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:return[4/*yield*/,(0,get_path_1.getOperationPath)("rebuild-operation")];case 1:return(t=e.sent())?[4/*yield*/,(0,findAndWriteImportsExports_1.findAndWriteImportsExports)({operationBasePath:t,debug:!0})]:(console.log("Couldn't find that path"),[2/*return*/]);case 2:return e.sent(),console.log("DONE"),[2/*return*/]}}))}))};test();
//# sourceMappingURL=findAndWriteImportsExports.test.js.map