"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,a){function o(e){try{u(n.next(e))}catch(e){a(e)}}function s(e){try{u(n.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}u((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTsStatements=exports.getFrontmatterFunctionParameters=void 0;var ts_morph_1=require("ts-morph"),js_util_1=require("js-util"),convert_case_1=require("convert-case"),code_types_1=require("code-types"),auth_types_1=require("auth-types"),log_1=require("log"),comment_util_1=require("comment-util"),getParametersFromInterface_1=require("./getParametersFromInterface"),getTypeInfo_1=require("./getTypeInfo"),getMaxIndexationDepth_1=require("./getMaxIndexationDepth"),getSizeSummary_1=require("./getSizeSummary"),markdown_parse_js_1=require("markdown-parse-js"),getFrontmatterFunctionParameters=function(e){var t=!0===e.isApiExposed,r=code_types_1.runEveryPeriodStringArray.includes(String(e.runEveryPeriod))?String(e.runEveryPeriod):void 0,n=Array.isArray(e.publicAuthorization)?e.publicAuthorization.map(String).filter((function(e){return auth_types_1.authorizationLevelStringArray.includes(e)})).map((function(e){return e})):void 0;return{runEveryPeriod:r,publicAuthorization:n||["read","search"],isApiExposed:t}};
//monorepo
exports.getFrontmatterFunctionParameters=getFrontmatterFunctionParameters;
/**
 Gets functions and variables from a tsmorph sourcefile
 */
var getTsStatements=function(e,t,r,n){return __awaiter(void 0,void 0,void 0,(function(){var n,i,a,o,s,u;return __generator(this,(function(p){return n=e.getVariableStatements().map((function(e){var t,n,i,a=e.getDeclarations(),o=a.map((function(e){return e.getInitializer()})).filter(js_util_1.notEmpty),s=null===(t=a[0])||void 0===t?void 0:t.getName(),u=null===(n=o[0])||void 0===n?void 0:n.getText(),p=e.isExported(),c=e.getDeclarationKind().toString().toLowerCase(),m=e.getJsDocs().map((function(e){return e.getText()})).map(comment_util_1.stripComment).join("\n\n"),l=(0,convert_case_1.kebabCase)(s),g=(0,getTypeInfo_1.getTypeInfo)(null===(i=a[0])||void 0===i?void 0:i.getType());return{classification:c,comments:[],isExported:p,name:s,slug:l,operationRelativeTypescriptFilePath:r,type:g,value:u,description:m}})),i=e.getStatements().map((function(e){var t,r=null===(t=e.asKind(ts_morph_1.SyntaxKind.VariableStatement))||void 0===t?void 0:t.getDeclarations();if(r&&0!==r.length)return{isExported:r[0].isExported(),variableDeclarations:r,
// NB: if this is a VariableStatement
kindName:e.getKindName(),
// NB: this is how we can check if it's an arrow function (declaration Initializer Kind Names Includes Arrow Function)
isArrowFunction:r.map((function(e){return e.getInitializer()})).map((function(e){return null==e?void 0:e.getKindName()})).includes("ArrowFunction"),
// NB: if it's a variable, we can get the name like this
names:r.map((function(e){return e.getName()})),comments:e.getLeadingCommentRanges().map((function(e){return e.getText()})).map(comment_util_1.stripComment)}})).filter(js_util_1.notEmpty),a=e.getFunctions(),o=i.filter((function(e){return e.isArrowFunction})),s=o.map((function(e){var n,i,a=e.isExported,o=null===(n=e.variableDeclarations)||void 0===n?void 0:n.map((function(e){var t;return null===(t=e.getInitializer())||void 0===t?void 0:t.asKind(ts_morph_1.SyntaxKind.ArrowFunction)}))[0];if(o){var s=e.comments.join("\n\n"),u=(null===(i=e.names)||void 0===i?void 0:i[0])||"no name",p=(0,getTypeInfo_1.getTypeInfo)(o.getReturnType().getApparentType()),c=o.getFullText(),m=c.concat(s),l=(0,markdown_parse_js_1.parseFrontmatterMarkdownString)(s).parameters,g=(0,exports.getFrontmatterFunctionParameters)(l),_=u.endsWith("PostApi"),d=u.endsWith("GetApi");return __assign(__assign({},g),{isPostApi:_,isGetApi:d,isExported:a,operationRelativeTypescriptFilePath:r,
// TODO:
commentsInside:[],rawText:c,name:u,slug:(0,convert_case_1.kebabCase)(u),parameters:(0,getParametersFromInterface_1.getParametersFromInterfaces)(u,t),description:s,returnType:p,maxIndentationDepth:(0,getMaxIndexationDepth_1.getMaxIndentationDepth)(c),
// TODO: isolate the size calculations...
// size of function including comments
size:(0,getSizeSummary_1.getSizeSummary)(m)})}(0,log_1.log)("Should never get here, arrow function not found",{type:"error"})})).filter(js_util_1.notEmpty),u=a.map((function(e){var n=(0,getTypeInfo_1.getTypeInfo)(e.getReturnType().getApparentType()),i=e.getFullText(),a=e.getJsDocs().map((function(e){return e.getFullText()})).join("\n\n"),o=i.concat(a),s=(0,markdown_parse_js_1.parseFrontmatterMarkdownString)(a).parameters,u=(0,exports.getFrontmatterFunctionParameters)(s),p=e.getName()||"__anonymous__",c=p.endsWith("PostApi"),m=p.endsWith("GetApi");return __assign(__assign({},u),{isPostApi:c,isGetApi:m,name:p,runEveryPeriod:undefined,slug:(0,convert_case_1.kebabCase)(p),isExported:e.isExported(),operationRelativeTypescriptFilePath:r,
// TODO:
commentsInside:[],
// function metadata
// function info
description:a,parameters:(0,getParametersFromInterface_1.getParametersFromInterfaces)(p,t),returnType:n,size:(0,getSizeSummary_1.getSizeSummary)(o),rawText:i,maxIndentationDepth:(0,getMaxIndexationDepth_1.getMaxIndentationDepth)(i)})})),[2/*return*/,{tsFunctions:s.concat(u),tsVariables:n}]}))}))};exports.getTsStatements=getTsStatements;
//# sourceMappingURL=getTsStatements.js.map