#!/usr/bin/env node
"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function c(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((o=o.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.nodemon=void 0;var child_process_1=require("child_process"),fs_util_1=require("fs-util"),get_path_1=require("get-path"),log_1=require("log"),nodemon=function(e,
/**
 * name of the function that you want to run the cli from
 *
 * by convention, we are going to execute the `build/cli/[fnName].cli.js` file
 */
t,
/**
 * vars that need to be passed to the cli
 */
n,
/**
 * manual project root for the operation to run
 */
o){return __awaiter(void 0,void 0,void 0,(function(){var r,a,i,c;return __generator(this,(function(l){switch(l.label){case 0:return[4/*yield*/,(0,get_path_1.getOperationPath)(e,{manualProjectRoot:o})];case 1:return(r=l.sent())?(a="build/cli/".concat(t,".cli.js"),i=fs_util_1.path.join(r,a),fs_util_1.fs.existsSync(i)?(c="node ".concat(a," ").concat(n?" ".concat(n.join(" ")):""),
(0,child_process_1.spawn)(c,{cwd:r,shell:!0,stdio:"inherit"}).on("exit",(function(r){(0,log_1.log)("Process ".concat(t," has ended with code ").concat(r,", restarting..."),{type:"important"}),(0,exports.nodemon)(e,t,n,o)})).on("data",(function(e){(0,log_1.log)(e)})).on("error",(function(e){(0,log_1.log)("".concat(e.name," Error: ").concat(e.message),{type:"error"})})),[2/*return*/]):((0,log_1.log)("".concat(i," not found (nodemon)"),{type:"error"}),[2/*return*/])):(console.log("".concat(e," not found")),[2/*return*/])}}))}))};exports.nodemon=nodemon;
//# sourceMappingURL=nodemon.js.map