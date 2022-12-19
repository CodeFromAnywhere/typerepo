"use strict";var __awaiter=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function u(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,u)}c((n=n.apply(e,r||[])).next())}))},__generator=this&&this.__generator||function(e,r){var t,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=r.call(e,a)}catch(e){i=[6,e],n=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.twitterLogin=void 0;var typeInTheInputField_1=require("./typeInTheInputField"),twitterLogin=function(e){return __awaiter(void 0,void 0,void 0,(function(){var r,t,n;return __generator(this,(function(o){switch(o.label){case 0:return r=e.page,e.email,t=e.phoneNo,n=e.password,[4/*yield*/,r.goto("https://twitter.com/login")];case 1:
// wait for username input field to appear
return o.sent(),
// Adding listener for console
r.on("console",(function(e){return console.log("".concat(e.text()))})),[4/*yield*/,(0,typeInTheInputField_1.typeInTheInputField)({page:r,selector:'input[autocomplete="username"]',value:t})];case 2:
// clicking next button
// wait for username input field to appear
return o.sent(),[4/*yield*/,r.click('div[class="css-18t94o4 css-1dbjc4n r-sdzlij r-1phboty r-rs99b7 r-ywje51 r-usiww2 r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr r-13qz1uu"]')];case 3:
// wait for the password field to appear
// clicking next button
return o.sent(),[4/*yield*/,(0,typeInTheInputField_1.typeInTheInputField)({page:r,selector:'input[autocomplete="current-password"]',value:n})];case 4:
// waiting and clicking on the login button
// wait for the password field to appear
return o.sent(),[4/*yield*/,r.waitForSelector('div[class="css-901oao r-1awozwy r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"]')];case 5:
// waiting and clicking on the login button
return o.sent(),[4/*yield*/,r.click('div[class="css-901oao r-1awozwy r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"]')];case 6:return o.sent(),[2/*return*/]}}))}))};
/**
 * Method that help to login into twitter
 */exports.twitterLogin=twitterLogin;
//# sourceMappingURL=twitterLogin.js.map