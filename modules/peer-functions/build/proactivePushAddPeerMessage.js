"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{u(n.next(e))}catch(e){o(e)}}function s(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}u((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.proactivePushAddPeerMessage=void 0;var api_1=require("api"),database_1=require("database"),port_conventions_1=require("port-conventions"),addPeerMessage_1=require("./addPeerMessage"),proactivePushAddPeerMessage=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var r;return __generator(this,(function(n){switch(n.label){case 0:return[4/*yield*/,(0,addPeerMessage_1.addPeerMessage)(e,t)];case 1:return n.sent(),[4/*yield*/,database_1.db.get("Person",{include:{referenceKey:"personId"}})];case 2:return r=n.sent(),[4/*yield*/,Promise.all(r.map((function(r){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return[4/*yield*/,api_1.apiWithConfig.addPeerMessage({apiUrl:"http://".concat(r.name,":").concat(port_conventions_1.ports["function-server"]),
//  authToken: peer,
timeout:2e3},e,t)];case 1:return[2/*return*/,n.sent()]}}))}))})))];case 3:return n.sent(),[2/*return*/,!0]}}))}))};exports.proactivePushAddPeerMessage=proactivePushAddPeerMessage;
//# sourceMappingURL=proactivePushAddPeerMessage.js.map