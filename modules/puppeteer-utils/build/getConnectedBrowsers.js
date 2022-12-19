"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getConnectedBrowsers=void 0;var getConnectedBrowsers=function(){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(e){
// for await (let browser of allBrowsers) {
//   await puppeteer
//     .connect({
//       browserWSEndpoint: browser.browserSessionId,
//     })
//     .then((cb) => {
//       connectedBrowser.push(browser);
//     })
//     .catch((e) => {
//       console.error("Error in connecting browser", e);
//       db.remove("BrowserSession", (b) => b.id !== browser.id);
//     });
// }
// console.log({ connectedBrowser });
return[2/*return*/,[]]}))}))};exports.getConnectedBrowsers=getConnectedBrowsers;
//# sourceMappingURL=getConnectedBrowsers.js.map