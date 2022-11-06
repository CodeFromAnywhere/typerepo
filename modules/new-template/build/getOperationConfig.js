"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function u(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}l((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getOperationConfig=void 0;var model_types_1=require("model-types"),database_1=require("database"),getOperationConfig=function(e,
/**
 * If you want to create one, set a description here.
 */
t){return __awaiter(void 0,void 0,void 0,(function(){var n,r;return __generator(this,(function(a){switch(a.label){case 0:return[4/*yield*/,database_1.db.get("OperationConfig",{operationName:e})];case 1:return(n=a.sent()[0])?[2/*return*/,n]:(r=Date.now(),[2/*return*/,{categoryStackCalculated:[],id:(0,model_types_1.generateId)(),createdAt:r,updatedAt:r,deletedAt:0,createdFirstAt:r,markdown:t||"Default description",operationName:e,slug:e,name:e,
// TODO: NB: we need a better way for this because this is unknown yet it needs to be defined.
projectRelativePath:"",operationRelativePath:""}])}}))}))};exports.getOperationConfig=getOperationConfig;
//# sourceMappingURL=getOperationConfig.js.map