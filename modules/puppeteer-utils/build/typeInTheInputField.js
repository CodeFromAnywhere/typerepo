"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function u(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.typeInTheInputField=void 0;
/**
 * Help to type in the field in given selector by setting value
 */
var typeInTheInputField=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,n,r;return __generator(this,(function(o){switch(o.label){case 0:
// wait for selector
return t=e.page,n=e.selector,r=e.value,[4/*yield*/,t.waitForSelector(n,{timeout:3e4})];case 1:
// click, focus and enter the value
// wait for selector
return o.sent(),[4/*yield*/,t.click(n)];case 2:
// click, focus and enter the value
return o.sent(),[4/*yield*/,t.focus(n)];case 3:
// throw 'test message';
return o.sent(),[4/*yield*/,t.keyboard.type(r)];case 4:
// throw 'test message';
return o.sent(),[2/*return*/]}}))}))};exports.typeInTheInputField=typeInTheInputField;
//# sourceMappingURL=typeInTheInputField.js.map