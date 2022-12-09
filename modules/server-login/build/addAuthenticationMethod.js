"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(a,i){function r(e){try{u(s.next(e))}catch(e){i(e)}}function o(e){try{u(s.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}u((s=s.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,s,a,i,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,s&&(a=2&i[0]?s.return:i[0]?s.throw||((a=s.return)&&a.call(s),0):s.next)&&!(a=a.call(s,i[1])).done)return a;switch(s=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,s=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(!(a=r.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){r=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){r.label=i[1];break}if(6===i[0]&&r.label<a[1]){r.label=a[1],a=i;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(i);break}a[2]&&r.ops.pop(),r.trys.pop();continue}i=t.call(e,r)}catch(e){i=[6,e],s=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.addAuthenticationMethod=void 0;var model_types_1=require("model-types"),sms_1=require("sms"),mail_1=require("mail"),encrypt_password_1=require("encrypt-password"),isPhoneNumber_1=require("./validation/isPhoneNumber"),isValidPassword_1=require("./validation/isValidPassword"),findAuthenticatedPersonWithHandle_1=require("./findAuthenticatedPersonWithHandle"),addAuthenticationMethod=function(e,t,
/**
 * TODO: check if it's unique before sending an email.
 * This is needed in case you are a person trying to add a method, because then there might be another person with the same handle.
 */
n,s){return __awaiter(void 0,void 0,void 0,(function(){var a,i,r,o,u,c,l;return __generator(this,(function(d){switch(d.label){case 0:return"email"!==e?[3/*break*/,4]:
// send email to `handle`
(0,model_types_1.isEmail)(t)?n?[4/*yield*/,(0,findAuthenticatedPersonWithHandle_1.findAuthenticatedPersonWithHandle)(e,t)]:[3/*break*/,2]:[2/*return*/,{isSuccessful:!1,message:"Please provide a correct email"}];case 1:if(a=d.sent())return console.log({isAuthenticationMethodUnavaiable:a}),[2/*return*/,{isSuccessful:!1,message:"That email is already taken"}];d.label=2;case 2:return o=Math.round(1e5+9e5*Math.random()),i="Please verify your email with this code: ".concat(o,". You have 10 minutes."),l={method:"email",handle:t,isAuthenticated:!1,otp:o},[4/*yield*/,(0,mail_1.sendMail)({to:t,subject:"Verify your email",text:i})];case 3:return d.sent()?[2/*return*/,{isSuccessful:!0,message:"Code sent, please verify.",authenticationMethod:l}]:[2/*return*/,{isSuccessful:!1,message:"Couldn't send email"}];case 4:return"phoneNumber"!==e?[3/*break*/,8]:
// send sms to `handle`
(0,isPhoneNumber_1.isPhoneNumber)(t)?n?[4/*yield*/,(0,findAuthenticatedPersonWithHandle_1.findAuthenticatedPersonWithHandle)(e,t)]:[3/*break*/,6]:[2/*return*/,{isSuccessful:!1,message:"Please provide a correct phone number"}];case 5:if(r=d.sent())return console.log({isAuthenticationMethodUnavaiablePerson:r}),[2/*return*/,{isSuccessful:!1,message:"That phone number is already taken"}];d.label=6;case 6:return o=Math.round(1e5+9e5*Math.random()),u="Please verify your phone number with this code: ".concat(o,". You have 10 minutes."),l={method:"phoneNumber",handle:t,isAuthenticated:!1,otp:o},[4/*yield*/,(0,sms_1.sendSms)({to:t,body:u})];case 7:return d.sent()?[2/*return*/,{isSuccessful:!0,message:"Code sent, please verify.",authenticationMethod:l}]:[2/*return*/,{isSuccessful:!1,message:"Couldn't send sms"}];case 8:return"usernamePassword"===e?
// add username and password to the authenticated methods
s&&(0,isValidPassword_1.isValidPassword)(s)?(c=(0,encrypt_password_1.encryptPassword)(s),[2/*return*/,{isSuccessful:!0,message:"Username/password has been set.",authenticationMethod:l={method:"usernamePassword",handle:t,encryptedCredential:c,credential:s,isAuthenticated:!0}}]):[2/*return*/,{isSuccessful:!1,message:"Please provide a valid password"}]:[2/*return*/,{isSuccessful:!1,message:"method not implemented yet"}]}}))}))};exports.addAuthenticationMethod=addAuthenticationMethod;
//# sourceMappingURL=addAuthenticationMethod.js.map