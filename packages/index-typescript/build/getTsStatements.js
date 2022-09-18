"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}u((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},__spreadArray=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTsStatements=void 0;var ts_morph_1=require("ts-morph"),js_util_1=require("js-util"),convert_case_1=require("convert-case"),log_1=require("log"),comment_util_1=require("comment-util"),getParametersFromInterface_1=require("./getParametersFromInterface"),getAllComments_1=require("./getAllComments"),getTypeInfo_1=require("./getTypeInfo"),getMaxIndexationDepth_1=require("./getMaxIndexationDepth"),getSizeSummary_1=require("./getSizeSummary"),getTsStatements=function(e,t,n,r){return __awaiter(void 0,void 0,void 0,(function(){var a,i,o,s,u,l,c;return __generator(this,(function(m){return a=e.getStatements().map((function(e){var t,n=null===(t=e.asKind(ts_morph_1.SyntaxKind.VariableStatement))||void 0===t?void 0:t.getDeclarations();if(n&&0!==n.length)return{isExported:n[0].isExported(),variableDeclarations:n,
// NB: if this is a VariableStatement
kindName:e.getKindName(),
// NB: this is how we can check if it's an arrow function (declaration Initializer Kind Names Includes Arrow Function)
isArrowFunction:n.map((function(e){return e.getInitializer()})).map((function(e){return null==e?void 0:e.getKindName()})).includes("ArrowFunction"),
// NB: if it's a variable, we can get the name like this
names:n.map((function(e){return e.getName()})),comments:e.getLeadingCommentRanges().map((function(e){return e.getText()})).map(comment_util_1.stripComment)}})).filter(js_util_1.notEmpty),i=a.filter((function(e){return!e.isArrowFunction})),o=i.map((function(e){var t,a,i=e.variableDeclarations.map((function(e){return e.getInitializer()})).filter(js_util_1.notEmpty),o=e.names[0]||"__NO_NAME__",s=(0,convert_case_1.kebabCase)(o),u=i.map((function(e){return e.getText()})).filter(js_util_1.notEmpty)[0]||"__NO_VALUE__",l=null===(t=e.variableDeclarations[0].getVariableStatement())||void 0===t?void 0:t.getDeclarationKind().toString().toLowerCase(),c=null===(a=e.variableDeclarations)||void 0===a?void 0:a[0];if(c){var m=(0,getAllComments_1.getAllComments)(c,r,n),p=c.getDescendantStatements().map((function(e){return(0,getAllComments_1.getAllComments)(e,r,n)})).flat(),_=m?__spreadArray(__spreadArray([],m,!0),p,!0):p;return{isExported:e.isExported,operationRelativeTypescriptFilePath:n,comments:_,name:o,slug:s,value:u,
// NB: still using typeToSchema here, is there another way?
type:(0,getTypeInfo_1.getTypeInfo)(c.getType()),classification:l}}})).filter(js_util_1.notEmpty),s=e.getFunctions(),u=a.filter((function(e){return e.isArrowFunction})),l=u.map((function(e){var r,a,i=e.isExported,o=null===(r=e.variableDeclarations)||void 0===r?void 0:r.map((function(e){var t;return null===(t=e.getInitializer())||void 0===t?void 0:t.asKind(ts_morph_1.SyntaxKind.ArrowFunction)}))[0];if(o){var s=e.comments.join("\n\n"),u=(null===(a=e.names)||void 0===a?void 0:a[0])||"no name",l=(0,getTypeInfo_1.getTypeInfo)(o.getReturnType().getApparentType()),c=o.getFullText(),m=c.concat(s);return{apiAuthenticationStrategy:"admin",isApiExposed:!0,isExported:i,operationRelativeTypescriptFilePath:n,
// TODO:
commentsInside:[],rawText:c,name:u,slug:(0,convert_case_1.kebabCase)(u),parameters:(0,getParametersFromInterface_1.getParametersFromInterfaces)(u,t),description:s,returnType:l,maxIndentationDepth:(0,getMaxIndexationDepth_1.getMaxIndentationDepth)(c),
// TODO: isolate the size calculations...
// size of function including comments
size:(0,getSizeSummary_1.getSizeSummary)(m)}}(0,log_1.log)("Should never get here, arrow function not found",{type:"error"})})).filter(js_util_1.notEmpty),c=s.map((function(e){var r=(0,getTypeInfo_1.getTypeInfo)(e.getReturnType().getApparentType()),a=e.getFullText(),i=e.getJsDocs().map((function(e){return e.getFullText()})).join("\n\n"),o=a.concat(i),s=e.getName()||"__anonymous__";return{name:s,slug:(0,convert_case_1.kebabCase)(s),
// TODO: add convention
apiAuthenticationStrategy:"admin",isApiExposed:!0,
isExported:e.isExported(),operationRelativeTypescriptFilePath:n,
// TODO:
commentsInside:[],
// function metadata
// function info
description:i,parameters:(0,getParametersFromInterface_1.getParametersFromInterfaces)(s,t),returnType:r,size:(0,getSizeSummary_1.getSizeSummary)(o),rawText:a,maxIndentationDepth:(0,getMaxIndexationDepth_1.getMaxIndentationDepth)(a)}})),[2/*return*/,{tsFunctions:l.concat(c),tsVariables:o}]}))}))};
//monorepo
exports.getTsStatements=getTsStatements;
//# sourceMappingURL=getTsStatements.js.map