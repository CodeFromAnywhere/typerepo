"use strict";var __awaiter=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{u(i.next(t))}catch(t){r(t)}}function s(t){try{u(i.throw(t))}catch(t){r(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}u((i=i.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var n,i,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){a.label=r[1];break}if(6===r[0]&&a.label<o[1]){a.label=o[1],o=r;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(r);break}o[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.signupWithPasswordWithContext=void 0;var addDeviceAuthenticationMethodWithContext_1=require("./addDeviceAuthenticationMethodWithContext"),signupWithContext_1=require("./signupWithContext"),convert_case_1=require("convert-case"),signupWithPasswordWithContext=function(t,e,n,i,o){return __awaiter(void 0,void 0,void 0,(function(){var r,a,s,u;return __generator(this,(function(c){switch(c.label){case 0:return"usernamePassword",i!==o?[2/*return*/,{isSuccessful:!1,message:"Those passwords don't match"}]:[4/*yield*/,(0,addDeviceAuthenticationMethodWithContext_1.addDeviceAuthenticationMethodWithContext)(t,"usernamePassword",n,i)];case 1:return r=c.sent(),a=r.functionContext,s=r.authenticationMethod,r.isSuccessful,u=r.message,(null==s?void 0:s.isAuthenticated)&&a?[4/*yield*/,(0,signupWithContext_1.signupWithContext)(a,{name:e,slug:(0,convert_case_1.slugify)(e)})]:(console.log("NOT AUTHENTICATED AFTER ADDING DEVICE",{authenticationMethod:s,newFunctionContext:a}),[2/*return*/,{isSuccessful:!1,message:u||"Strange"}]);case 2:return[2/*return*/,c.sent()]}}))}))};exports.signupWithPasswordWithContext=signupWithPasswordWithContext;
//# sourceMappingURL=signupWithPasswordWithContext.js.map