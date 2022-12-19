"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function u(e){try{l(r.next(e))}catch(e){i(e)}}function o(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,o)}l((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,a,i,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,o[0]&&(u=0)),u;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(a=u.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){u.label=o[1];break}if(6===o[0]&&u.label<a[1]){u.label=a[1],a=o;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(o);break}a[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.gmailLogin=void 0;var setInputValue_1=require("./setInputValue"),clickOnSpanTag_1=require("./clickOnSpanTag"),gmailLogin=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,n,r;return __generator(this,(function(a){switch(a.label){case 0:
// setting email address
return t=e.page,n=e.email,r=e.password,[4/*yield*/,(0,setInputValue_1.setInputValue)({page:t,inputValue:n,selector:"input[type=email]"})];case 1:case 5:
// clicking next button after password entered
// waiting for the password field to load and set the password
return a.sent(),[4/*yield*/,(0,clickOnSpanTag_1.clickOnSpanTag)({page:t,spanText:"Next"})];case 2:
// clicking on the next button after email input
return a.sent(),[4/*yield*/,t.setBypassCSP(!0)];case 3:
// clicking on the next button after password input
return a.sent(),[4/*yield*/,t.waitForFunction('document.querySelector("body").innerText.includes("Next")')];case 4:
// waiting for the password field to load and set the password
// clicking on the next button after password input
return a.sent(),[4/*yield*/,(0,setInputValue_1.setInputValue)({page:t,inputValue:r,selector:"input[type=password]"})];case 6:
// clicking next button after password entered
return a.sent(),[2/*return*/]}}))}))};exports.gmailLogin=gmailLogin;
//# sourceMappingURL=gmailLogin.js.map