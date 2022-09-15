"use strict";var __awaiter=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(r,o){function l(e){try{a(i.next(e))}catch(e){o(e)}}function u(e){try{a(i.throw(e))}catch(e){o(e)}}function a(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(l,u)}a((i=i.apply(e,n||[])).next())}))},__generator=this&&this.__generator||function(e,n){var t,i,r,o,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,i=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(r=l.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){l.label=o[1];break}if(6===o[0]&&l.label<r[1]){l.label=r[1],r=o;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(o);break}r[2]&&l.ops.pop(),l.trys.pop();continue}o=n.call(e,l)}catch(e){o=[6,e],i=0}finally{t=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.yarnBuild=void 0;var child_process_1=require("child_process"),filename_conventions_1=require("filename-conventions"),fs_util_1=require("fs-util"),log_1=require("log"),minify_build_1=require("minify-build"),executeCommandQuietUnlessFail_1=require("./executeCommandQuietUnlessFail"),yarnBuild=function(e,n){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return(null==n?void 0:n.rmFirst)&&(0,child_process_1.spawnSync)("rm -rf build",{cwd:e,encoding:"utf8",stdio:"inherit",shell:!0}),(0,executeCommandQuietUnlessFail_1.executeCommandQuietUnlessFail)({command:"yarn build",cwd:e,description:"Compiling source"})?[4/*yield*/,(0,minify_build_1.minifyBuild)({buildFolderPath:fs_util_1.path.join(e,filename_conventions_1.buildFolderName)})]:((0,log_1.log)("Build failed for ".concat((0,fs_util_1.getLastFolder)(e)),{type:"error"}),[2/*return*/,!1]);case 1:return[2/*return*/,t.sent()||!1]}}))}))};exports.yarnBuild=yarnBuild;
//# sourceMappingURL=yarnBuild.js.map