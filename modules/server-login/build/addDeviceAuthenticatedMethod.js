"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,s=1,n=arguments.length;s<n;s++)for(var a in t=arguments[s])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(a,r){function i(e){try{u(n.next(e))}catch(e){r(e)}}function o(e){try{u(n.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,o)}u((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var s,n,a,r,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(r){return function(o){return function(r){if(s)throw new TypeError("Generator is already executing.");for(;i;)try{if(s=1,n&&(a=2&r[0]?n.return:r[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,r[1])).done)return a;switch(n=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,n=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==r[0]&&2!==r[0])){i=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){i.label=r[1];break}if(6===r[0]&&i.label<a[1]){i.label=a[1],a=r;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(r);break}a[2]&&i.ops.pop(),i.trys.pop();continue}r=t.call(e,i)}catch(e){r=[6,e],n=0}finally{s=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,o])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.addDeviceAuthenticatedMethod=void 0;var database_1=require("database"),model_types_1=require("model-types"),sms_1=require("sms"),mail_1=require("mail"),encryptPassword_1=require("./encryptPassword"),isPhoneNumber_1=require("./isPhoneNumber"),isValidPassword_1=require("./isValidPassword"),addDeviceAuthenticatedMethod=function(e,t,s,n){return __awaiter(void 0,void 0,void 0,(function(){var a,r,i,o;return __generator(this,(function(u){switch(u.label){case 0:return"email"!==t?[3/*break*/,3]:
// send email to `handle`
(0,model_types_1.isEmail)(s)?(a=Math.round(1e5+9e5*Math.random()),"Please verify your email with this code: ".concat(a,". You have 10 minutes."),[4/*yield*/,database_1.db.update("Device",(function(t){return t.id===e}),(function(e){return __assign(__assign({},e),{authenticationMethods:e.authenticationMethods.concat({method:"email",handle:s,isAuthenticated:!1,otp:a})})}))]):[2/*return*/,{isSuccessful:!1,message:"Please provide a correct email"}];case 1:return u.sent(),[4/*yield*/,(0,mail_1.sendMail)({to:s,subject:"Verify your email"})];case 2:return u.sent()?[2/*return*/,{isSuccessful:!0,message:"Code sent, please verify."}]:[2/*return*/,{isSuccessful:!1,message:"Couldn't send email"}];case 3:return"phoneNumber"!==t?[3/*break*/,6]:
// send sms to `handle`
(0,isPhoneNumber_1.isPhoneNumber)(s)?(r=Math.round(1e5+9e5*Math.random()),i="Please verify your phone number with this code: ".concat(r,". You have 10 minutes."),[4/*yield*/,database_1.db.update("Device",(function(t){return t.id===e}),(function(e){return __assign(__assign({},e),{authenticationMethods:e.authenticationMethods.concat({method:"phoneNumber",handle:s,isAuthenticated:!1,otp:r})})}))]):[2/*return*/,{isSuccessful:!1,message:"Please provide a correct phone number"}];case 4:return u.sent(),[4/*yield*/,(0,sms_1.sendSms)({to:s,body:i})];case 5:return u.sent()?[2/*return*/,{isSuccessful:!0,message:"Code sent, please verify."}]:[2/*return*/,{isSuccessful:!1,message:"Couldn't send sms"}];case 6:return"usernamePassword"!==t?[3/*break*/,9]:
// add username and password to the authenticated methods
n&&(0,isValidPassword_1.isValidPassword)(n)?[4/*yield*/,(0,encryptPassword_1.encryptPassword)(n)]:[2/*return*/,{isSuccessful:!1,message:"Please provide a valid password"}];case 7:return o=u.sent(),[4/*yield*/,database_1.db.update("Device",(function(t){return t.id===e}),(function(e){return __assign(__assign({},e),{authenticationMethods:e.authenticationMethods.concat({method:"usernamePassword",handle:s,encryptedCredential:o,isAuthenticated:!0})})}))];case 8:return u.sent(),[2/*return*/,{isSuccessful:!0,message:"Username/password has been set."}];case 9:return[2/*return*/,{isSuccessful:!1,message:"method not implemented yet"}]}}))}))};exports.addDeviceAuthenticatedMethod=addDeviceAuthenticatedMethod;
//# sourceMappingURL=addDeviceAuthenticatedMethod.js.map