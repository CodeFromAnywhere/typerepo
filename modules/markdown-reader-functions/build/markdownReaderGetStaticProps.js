"use strict";var __awaiter=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))((function(a,o){function i(e){try{s(n.next(e))}catch(e){o(e)}}function u(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,u)}s((n=n.apply(e,r||[])).next())}))},__generator=this&&this.__generator||function(e,r){var t,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=r.call(e,i)}catch(e){o=[6,e],n=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.markdownReaderGetStaticProps=void 0;var get_path_1=require("get-path"),read_json_file_1=require("read-json-file"),nested_menu_1=require("nested-menu"),markdown_reader_functions_js_1=require("markdown-reader-functions-js"),getFolderExplorationInfo_1=require("./getFolderExplorationInfo"),getAllMarkdownReaderPages_1=require("./getAllMarkdownReaderPages"),getMarkdownPageInfo_1=require("./getMarkdownPageInfo"),augmented_words_1=require("augmented-words"),fs_util_1=require("fs-util"),markdownReaderGetStaticProps=function(e){return __awaiter(void 0,void 0,void 0,(function(){var r,t,n,a,o,i,u,s,l,d,c,f,p,_,g,h,w,P;return __generator(this,(function(k){switch(k.label){case 0:return[4/*yield*/,(0,getAllMarkdownReaderPages_1.getAllMarkdownReaderPages)()];case 1:return r=k.sent()||[],t=r.filter((function(e){return e.isMenuItem})).map((function(e){return e.queryPath})),n=(0,nested_menu_1.queryPathsArrayToNestedPathObject)(t),(a=(0,get_path_1.getProjectRoot)())?[4/*yield*/,(0,read_json_file_1.readJsonFile)(fs_util_1.path.join(a,"public-bundle-config.json"))]:[2/*return*/,{props:{pages:r}}];case 2:return o=k.sent(),i=(0,markdown_reader_functions_js_1.getQueryPath)(e.params),(u=r.find((function(e){return e.queryPath===i})))?[3/*break*/,4]:[4/*yield*/,(0,getFolderExplorationInfo_1.getFolderExplorationInfo)(n,i,a)];case 3:return s=k.sent(),l=s.children,d=s.title,c=s.description,f=s.descriptionProjectRelativeMarkdownPath,[2/*return*/,{props:{publicBundleConfig:o,pages:r,children:l,title:d,description:c,projectRelativeMarkdownPath:f}}];case 4:return[4/*yield*/,(0,getMarkdownPageInfo_1.getMarkdownPageInfo)(a,n,i,u)];case 5:return p=k.sent(),_=p.markdownFile,g=p.nextQueryPath,h=p.previousQueryPath,w=p.projectRelativeMarkdownPath,[4/*yield*/,(0,augmented_words_1.getAugmentedWordObject)(a)];case 6:return P=k.sent(),[2/*return*/,{
// Passed to the page component as props
props:{publicBundleConfig:o,pages:r,markdownFile:_,nextQueryPath:g,previousQueryPath:h,augmentedWordObject:P,projectRelativeMarkdownPath:w}}]}}))}))};exports.markdownReaderGetStaticProps=markdownReaderGetStaticProps;
//# sourceMappingURL=markdownReaderGetStaticProps.js.map