"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{u(n.next(e))}catch(e){a(e)}}function s(e){try{u(n.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}u((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.markdownReaderGetStaticPropsFromPages=void 0;var get_path_1=require("get-path"),read_json_file_1=require("read-json-file"),database_1=require("database"),markdown_reader_functions_js_1=require("markdown-reader-functions-js"),getFolderExplorationInfo_1=require("./getFolderExplorationInfo"),getMarkdownPageInfo_1=require("./getMarkdownPageInfo"),augmented_word_node_1=require("augmented-word-node"),fs_util_1=require("fs-util"),recursive_util_1=require("recursive-util"),markdownReaderGetStaticPropsFromPages=function(e,t,r){return __awaiter(void 0,void 0,void 0,(function(){var n,o,a,i,s,u,c,l,d,_,p,f,g,h;return __generator(this,(function(w){switch(w.label){case 0:return n=(0,recursive_util_1.getMenuPagesObject)(t),(o=(0,get_path_1.getProjectRoot)())?[4/*yield*/,(0,read_json_file_1.readJsonFile)(fs_util_1.path.join(o,"public-bundle-config.json"))]:[2/*return*/,{props:{menu:n}}];case 1:return a=w.sent(),i=(0,markdown_reader_functions_js_1.getQueryPath)(e.params),(s=t.find((function(e){return e.queryPath===i})))?[3/*break*/,3]:[4/*yield*/,(0,getFolderExplorationInfo_1.getFolderExplorationInfo)(t,i,o)];case 2:return u=w.sent(),c=u.children,l=u.title,d=u.description,_=u.descriptionProjectRelativeMarkdownPath,[2/*return*/,{props:{publicBundleConfig:a,menu:n,content:{children:c,title:l,description:d,projectRelativeMarkdownPath:_}}}];case 3:return[4/*yield*/,database_1.db.get("MarkdownCallToAction")];case 4:return p=w.sent(),f=p.filter((function(e){return!(e.hostname===(null==a?void 0:a.deploymentHostname)||e.path&&""!==e.path)||e.hostname===(null==a?void 0:a.deploymentHostname)&&e.path&&""!==e.path})),[4/*yield*/,(0,getMarkdownPageInfo_1.getMarkdownPageInfo)({projectRoot:o,webPages:t,queryPath:i,contentPage:s,webOperationName:r,markdownCallToActions:f})];case 5:return g=w.sent(),[4/*yield*/,(0,augmented_word_node_1.getAugmentedWordObject)(o)];case 6:return h=w.sent(),[2/*return*/,{
// Passed to the page component as props
props:{content:__assign(__assign({},g),{augmentedWordObject:h}),publicBundleConfig:a,menu:n}}]}}))}))};exports.markdownReaderGetStaticPropsFromPages=markdownReaderGetStaticPropsFromPages;
//# sourceMappingURL=markdownReaderGetStaticPropsFromPages.js.map