#!/usr/bin/env node
"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,i){function o(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}l((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.newTemplate=void 0;var fs_util_1=require("fs-util"),rename_template_files_1=require("rename-template-files"),log_1=require("log"),get_path_1=require("get-path"),newTemplate=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var r,n;return __generator(this,(function(a){switch(a.label){case 0:return(0,get_path_1.getProjectRoot)(t),r=fs_util_1.path.resolve(__dirname,"..","assets","templates",e),fs_util_1.fs.existsSync(r)?(n=t||fs_util_1.path.join(process.cwd(),e),[4/*yield*/,fs_util_1.fs.mkdir(n,{recursive:!0})]):((0,log_1.log)("".concat(e," cannot be generated yet. Create a template in assets/templates/").concat(e)),[2/*return*/]);case 1:
// Copy the template inthere
// const availableFolderName = await getAvailableOperationName(
//   rootFolderPath,
//   type,
//   manualProjectRoot
// );
// const basePath = path.join(rootFolderPath, availableFolderName);
// if (fs.existsSync(basePath)) {
//   log(`${basePath} already exists`);
//   return;
// }
// Make the non-existing folder
return a.sent(),[4/*yield*/,fs_util_1.fs.cpAsync(r,n,{recursive:!0})];case 2:
// Rename templatefiles if needed
// Copy the template inthere
return a.sent(),[4/*yield*/,(0,rename_template_files_1.renameTemplateFiles)({appDir:n})];case 3:
// Rename templatefiles if needed
return a.sent(),[2/*return*/,n]}}))}))};exports.newTemplate=newTemplate;
//# sourceMappingURL=newTemplate.js.map