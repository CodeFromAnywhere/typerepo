"use strict";var __awaiter=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,u)}c((r=r.apply(e,n||[])).next())}))},__generator=this&&this.__generator||function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkAuthToken=void 0;var api_1=require("api"),server_api_url_1=require("server-api-url"),checkAuthToken=function(e){return __awaiter(void 0,void 0,void 0,(function(){var n,t;return __generator(this,(function(r){switch(r.label){case 0:return[4/*yield*/,api_1.apiWithConfig.ping({authToken:e})];case 1:return!(n=r.sent()).isSuccessful||n.isUnauthorized?[2/*return*/,{isSuccessful:!1,message:n.isNotConnected?"Could not reach server. Ensure you have an internet connection and/or the server is running":n.isUnauthorized?"Incorrect credientials":n.message||"Something went wrong",authToken:e}]:[4/*yield*/,fetch("".concat(server_api_url_1.apiUrl,"/login"),{
// To set a cookie with CORS you'll need to set the withCredentials flag when making the request.
// credentials: "include",
method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({authToken:e})}).then((function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(n){return[2/*return*/,e.json()]}))}))})).catch((function(e){return{isSuccessful:!1,message:"fetch failed"}}))];case 2:return[2/*return*/,{isSuccessful:(t=r.sent()).isSuccessful,message:t.message||"Something went wrong",authToken:e}]}}))}))};exports.checkAuthToken=checkAuthToken;
//# sourceMappingURL=checkAuthToken.js.map