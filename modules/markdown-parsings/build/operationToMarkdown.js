"use strict";var __awaiter=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))},__generator=this&&this.__generator||function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.operationToMarkdown=void 0;var js_util_1=require("js-util"),markdown_parse_js_1=require("markdown-parse-js"),fs_util_1=require("fs-util"),merge_1=require("./parsing/merge"),statementItemToMarkdown_1=require("./statementItemToMarkdown"),createMinimisedSection_1=require("./createMinimisedSection"),bundleFolderWithMarkdown_1=require("./bundleFolderWithMarkdown"),operationToMarkdown=function(e){return __awaiter(void 0,void 0,void 0,(function(){var n,t,r,o,i,a,c,s,l,d,u,m,p,_,f,w,v,h,k,M,S,b,g,y,T,j,I,x,z,P,F,q,E,C,D,L,O,W;return __generator(this,(function(J){switch(J.label){case 0:return n=e.operationSummary,t=n.classification,r=n.cliItems,o=n.coreDependenciesString,i=n.description,a=n.docs,c=n.externalItems,s=n.internalItems,l=n.operationDependenciesString,d=n.operationName,u=n.packageDependenciesString,m=n.size,p=n.testItems,_=n.operationFolderPath,f=e.returnType,(w=null==a?void 0:a.map((function(e){return(0,createMinimisedSection_1.createMinimizedSectionMarkdown)(e.content,e.relativePath)})))?[4/*yield*/,(0,bundleFolderWithMarkdown_1.bundleFolderWithMarkdown)("Docs",w,"docs")]:[3/*break*/,2];case 1:return h=J.sent(),[3/*break*/,3];case 2:h=void 0,J.label=3;case 3:return v=h,k="Size: ".concat(null===(C=null==m?void 0:m.codeSize)||void 0===C?void 0:C.lines," LOC, ").concat(void 0!==(null===(D=null==m?void 0:m.dataSize)||void 0===D?void 0:D.characters)?"".concat(null===(L=null==m?void 0:m.dataSize)||void 0===L?void 0:L.characters," data characters, "):"").concat(void 0!==(null===(O=null==m?void 0:m.textSize)||void 0===O?void 0:O.characters)?"".concat(null===(W=null==m?void 0:m.textSize)||void 0===W?void 0:W.characters," text characters, "):""),M="".concat(d," (`OperationClassification` ").concat(t,")\n\n").concat(i?"".concat(i,"\n\n"):""),"\n".concat(k,"\n \nImported dependencies:\n\n- From Core Libraries: ").concat(o,"\n- From Packages: ").concat(u,"\n- From Operations: ").concat(l),S=(0,markdown_parse_js_1.mdToJsonParse)(M,d),b=[r,p].map((function(e){return e.map(statementItemToMarkdown_1.statementItemToMarkdown).filter(js_util_1.notEmpty).join("\n\n")})),g=b[0],y=b[1],T=[c,s].map((function(e){return e.map(statementItemToMarkdown_1.statementItemToMarkdown).filter(js_util_1.notEmpty).join("\n\n")})),j=T[0],I=T[1],x=(0,markdown_parse_js_1.mdToJsonParse)(j,"api-reference"),z=(0,createMinimisedSection_1.createMinimizedSection)(I,"internal","Show internal (".concat(s.length,")")),P=(0,createMinimisedSection_1.createMinimizedSection)(y,"tests","Show test information(".concat(p.length,")")),F=(0,createMinimisedSection_1.createMinimizedSection)(g,"CLI","Show CLI information (".concat(r.length,")")),q=(0,merge_1.mergeMarkdownParse)([S,(0,markdown_parse_js_1.mdToJsonParse)((null==v?void 0:v.outlineString)||""),null==v?void 0:v.markdownParse,x,F,P,z].filter(js_util_1.notEmpty)).merged,E=void 0,"parse"!==f&&(E=(0,markdown_parse_js_1.markdownParseToMarkdownString)(q)),("save"===f||!f)&&E?[4/*yield*/,fs_util_1.fs.writeFile(fs_util_1.path.join(_,"README.md"),E,"utf8")]:[3/*break*/,5];case 4:J.sent(),J.label=5;case 5:return[2/*return*/,"parse"===f?q:"string"===f?E:void 0]}}))}))};exports.operationToMarkdown=operationToMarkdown;
//# sourceMappingURL=operationToMarkdown.js.map