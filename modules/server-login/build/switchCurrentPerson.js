"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function a(e){try{u(r.next(e))}catch(e){s(e)}}function o(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,o)}u((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,i,s,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.switchCurrentPersonWithContext=void 0;var database_1=require("database"),switchCurrentPersonWithContext=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var n,r,i,s;return __generator(this,(function(a){switch(a.label){case 0:return e.device.currentPersonId===t?[2/*return*/,{isSuccessful:!1,message:"This account is already active"}]:(null===(s=e.device.personIds)||void 0===s?void 0:s.find((function(e){return e===t})))?[4/*yield*/,database_1.db.update("Device",(function(t){return t.id===e.device.id}),(function(e){return __assign(__assign({},e),{currentPersonId:t})}))]:[2/*return*/,{isSuccessful:!1,message:"Can't find that account"}];case 1:return n=a.sent(),r=n.isSuccesful,i=n.message,[2/*return*/,{isSuccessful:r||!1,message:r?"Switched":i||"Something went wrong (no message)"}]}}))}))};exports.switchCurrentPersonWithContext=switchCurrentPersonWithContext;
//# sourceMappingURL=switchCurrentPerson.js.map