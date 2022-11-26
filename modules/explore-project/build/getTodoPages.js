"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{s(n.next(e))}catch(e){a(e)}}function u(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,u)}s((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTodoPages=void 0;var convert_case_1=require("convert-case"),database_1=require("database"),fs_util_1=require("fs-util"),fs_util_js_1=require("fs-util-js"),get_path_1=require("get-path"),recursive_util_1=require("recursive-util"),getTodoPaths_1=require("./getTodoPaths"),getTodoPages=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r,n,o;return __generator(this,(function(a){switch(a.label){case 0:return(0,get_path_1.getProjectRoot)()?[4/*yield*/,database_1.db.get("TodoOffer")]:[2/*return*/,{nested:[],flat:[]}];case 1:return t=a.sent(),[4/*yield*/,(0,getTodoPaths_1.getTodoPaths)(e)];case 2:
// nestifyQueryPathObjectRecursive(flatWithoutPageData);
return r=a.sent(),n=(null==r?void 0:r.map((function(e){var r=e.split("/todo/"),n=r[0],o=r[1],a=(0,fs_util_1.getLastFolder)(n),i=(0,fs_util_js_1.withoutExtension)(o),u=(0,fs_util_1.getLastFolder)(i),s=(0,convert_case_1.humanCase)(u),l=!!t.find((function(t){return t.todoFileId===e}))?"🔥":void 0;return{pageData:{projectRelativeFilePath:e},queryPath:"".concat(a,"/").concat(i),menuTitle:s,menuTitleAugmentation:l,menuTitleTooltip:"Tooltip example\n\nShould render markdown\n\n**Say,this is great, no?**",isMenuHidden:!1}})))||[],o=[{queryPath:"stats",menuTitle:"Statistics",menuTitleTooltip:"Some stats about cool stuff",pageData:void 0},{queryPath:"SelfSprintReview",menuTitle:"Sprint review",menuTitleTooltip:"Let's do this every friday, 3PM CET",pageData:void 0},{queryPath:"TodoOffer",isMenuHidden:!0,pageData:void 0},{queryPath:"upsert/TodoOffer",isMenuHidden:!0,pageData:void 0},{queryPath:"upsert/SelfSprintReview",isMenuHidden:!0,pageData:void 0}].concat(n),[2/*return*/,(0,recursive_util_1.getMenuPagesObject)(o)]}}))}))};exports.getTodoPages=getTodoPages;
//# sourceMappingURL=getTodoPages.js.map