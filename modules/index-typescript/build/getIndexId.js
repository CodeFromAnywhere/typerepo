"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{l(n.next(e))}catch(e){o(e)}}function u(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,u)}l((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getIndexId=void 0;var model_types_1=require("model-types"),convert_case_1=require("convert-case"),get_path_1=require("get-path"),getIndexId=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var r,n,a;return __generator(this,(function(o){return(r=(0,get_path_1.getOperationPathParse)(e))&&(0,get_path_1.findOperationBasePath)(e)?(n=r.operationRelativeTypescriptFilePath,a=r.relativePathFromProjectRoot,[2/*return*/,{operationName:r.operationName||null,operationRelativeTypescriptFilePath:n,
// TODO: FIX
projectRelativePath:a,
// operationName: "",
// operationRelativePath: "",
// projectRelativePath: "",
// operationRelativeTypescriptFilePath: "",
// srcFileId: "",
id:(0,model_types_1.generateId)(),name:t,slug:(0,convert_case_1.kebabCase)(t)}]):[2/*return*/]}))}))};exports.getIndexId=getIndexId;
//# sourceMappingURL=getIndexId.js.map