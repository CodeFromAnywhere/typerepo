"use strict";var __awaiter=this&&this.__awaiter||function(e,t,a,r){return new(a||(a=Promise))((function(n,o){function i(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,s)}u((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var a,r,n,o,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,r&&(n=2&o[0]?r.return:o[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,o[1])).done)return n;switch(r=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(n=i.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){i.label=o[1];break}if(6===o[0]&&i.label<n[1]){i.label=n[1],n=o;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(o);break}n[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{a=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAugmentedWords=void 0;var fs_util_1=require("fs-util"),get_path_1=require("get-path"),database_1=require("database"),js_util_1=require("js-util"),getBundleAugmentedWords_1=require("./getBundleAugmentedWords"),markdown_parse_js_1=require("markdown-parse-js"),getAugmentedWords=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,a,r,n,o,i,s,u,c,l,d,p,_,f,h,m,v,g,w,y;return __generator(this,(function(j){switch(j.label){case 0:return(t=e||(0,get_path_1.getProjectRoot)())?[4/*yield*/,database_1.db.get("Person")]:[2/*return*/,[]];case 1:return a=j.sent(),r=a.map((function(e){var t;return{queryPath:"person/".concat(e.id),spoiler:"# ".concat(e.name,"\n\n## Interests\n\n").concat(null===(t=e.interestSlugs)||void 0===t?void 0:t.join("\n")),type:"person",word:e.slug,isCaseInsensitive:!0,projectRelativeMarkdownSourcePath:""}})),[4/*yield*/,database_1.db.get("OperationIndex")];case 2:return n=j.sent(),[4/*yield*/,database_1.db.get("OperationConfig")];case 3:return o=j.sent(),i=n.map((function(e){var a,r=fs_util_1.path.join(t,e.projectRelativePath),n=(0,get_path_1.findOperationBasePath)(r);if(n){var i=null===(a=o.find((function(t){return t.operationName===e.operationName})))||void 0===a?void 0:a.markdown;return{queryPath:(0,get_path_1.makeRelative)(n,t),spoiler:i,type:"operation",word:e.name,
// NB: OperationConfig is located in operation basePath
projectRelativeMarkdownSourcePath:fs_util_1.path.join(n,"OPERATION.md")}}})).filter(js_util_1.notEmpty),[4/*yield*/,database_1.db.get("TsVariable",{manualProjectRoot:t})];case 4:return s=j.sent(),[4/*yield*/,database_1.db.get("TsFunction",{manualProjectRoot:t})];case 5:return u=j.sent(),[4/*yield*/,database_1.db.get("TsInterface",{manualProjectRoot:t})];case 6:return c=j.sent(),l=c.map((function(e){
// NB: TODO: figure out of this is always correct, this path must exist!
var a=fs_util_1.path.join(t,e.projectRelativePath),r=(0,get_path_1.findOperationBasePath)(a);if(r){var n=(0,get_path_1.makeRelative)(r,t);return{queryPath:"".concat(n,"#").concat((0,markdown_parse_js_1.getImplicitId)(e.name)),spoiler:e.description,type:"type",word:e.name,projectRelativeMarkdownSourcePath:e.projectRelativePath}}})).filter(js_util_1.notEmpty),d=u.map((function(e){
// NB: TODO: figure out of this is always correct, this path must exist!
var a=fs_util_1.path.join(t,e.projectRelativePath),r=(0,get_path_1.findOperationBasePath)(a);if(r){var n=(0,get_path_1.makeRelative)(r,t);return{queryPath:"".concat(n,"#").concat((0,markdown_parse_js_1.getImplicitId)(e.name)),spoiler:e.description,type:"function",word:e.name,projectRelativeMarkdownSourcePath:e.projectRelativePath}}})).filter(js_util_1.notEmpty),p=s.map((function(e){
// NB: TODO: figure out of this is always correct, this path must exist!
var a=fs_util_1.path.join(t,e.projectRelativePath),r=(0,get_path_1.findOperationBasePath)(a);if(r){var n=(0,get_path_1.makeRelative)(r,t);return{queryPath:"".concat(n,"#").concat((0,markdown_parse_js_1.getImplicitId)(e.name)),spoiler:e.description,type:"variable",word:e.name,projectRelativeMarkdownSourcePath:e.projectRelativePath}}})).filter(js_util_1.notEmpty),_=[{referenceKey:"english_wordSlug"},{referenceKey:"root_wordSlug"},{referenceKey:"common_wordSlug"},{referenceKey:"definition_statementId"}],[4/*yield*/,database_1.db.get("Word",{manualProjectRoot:t,include:_})];case 7:return f=j.sent(),[4/*yield*/,database_1.db.get("MarkdownWord")];case 8:return h=j.sent(),[4/*yield*/,database_1.db.get("KvmdWord")];case 9:return m=j.sent(),v=m.map((function(e){return{queryPath:"dictionary?word=".concat(e.name),type:"word",spoiler:e.value?String(e.value):void 0,word:e.name,isCaseInsensitive:!0,projectRelativeMarkdownSourcePath:e.projectRelativePath}})),g=h.map((function(e){return{queryPath:"dictionary?word=".concat(e.name),type:"word",spoiler:e.markdown,word:e.name,isCaseInsensitive:!0,projectRelativeMarkdownSourcePath:e.projectRelativePath}})),w=f.map((function(e){var t;return{queryPath:"dictionary?word=".concat(e.slug),type:"word",spoiler:null===(t=e.definition_statement)||void 0===t?void 0:t.name,word:e.name,isCaseInsensitive:!0,projectRelativeMarkdownSourcePath:e.projectRelativePath}})),(0,get_path_1.isSensibleProject)(t)?(y=void 0,[3/*break*/,12]):[3/*break*/,10];case 10:return[4/*yield*/,(0,getBundleAugmentedWords_1.getBundleAugmentedWords)()];case 11:y=j.sent(),j.label=12;case 12:return[2/*return*/,[y,i,p,d,l,
//words
w,v,g,r].filter(js_util_1.notEmpty).flat()]}}))}))};exports.getAugmentedWords=getAugmentedWords;
//# sourceMappingURL=getAugmentedWords.js.map