"use strict";var __awaiter=this&&this.__awaiter||function(e,n,o,t){return new(o||(o=Promise))((function(r,a){function i(e){try{s(t.next(e))}catch(e){a(e)}}function c(e){try{s(t.throw(e))}catch(e){a(e)}}function s(e){var n;e.done?r(e.value):(n=e.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,c)}s((t=t.apply(e,n||[])).next())}))},__generator=this&&this.__generator||function(e,n){var o,t,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,t&&(r=2&a[0]?t.return:a[0]?t.throw||((r=t.return)&&r.call(t),0):t.next)&&!(r=r.call(t,a[1])).done)return r;switch(t=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,t=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],t=0}finally{o=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},__spreadArray=this&&this.__spreadArray||function(e,n,o){if(o||2===arguments.length)for(var t,r=0,a=n.length;r<a;r++)!t&&r in n||(t||(t=Array.prototype.slice.call(n,0,r)),t[r]=n[r]);return e.concat(t||Array.prototype.slice.call(n))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.projectToMd=exports.bundleToMd=exports.bundleToBookMd=exports.operationToMarkdown=exports.bundleFolderWithMarkdown=exports.tsInterfaceToMarkdownString=exports.tsFunctionToMarkdownString=exports.simplifiedSchemaToMarkdownString=exports.propertyToTableRow=void 0;var get_path_1=require("get-path"),log_1=require("log"),database_1=require("database"),bundle_util_1=require("bundle-util"),js_util_1=require("js-util"),filename_conventions_1=require("filename-conventions"),markdown_parse_js_1=require("markdown-parse-js"),fs_util_1=require("fs-util"),merge_1=require("./parsing/merge"),k_explore_1=require("k-explore"),read_markdown_file_1=require("read-markdown-file"),convert_case_1=require("convert-case"),get_package_json_1=require("get-package-json"),read_json_file_1=require("read-json-file"),propertyToTableRow=function(e){var n,o=e.required?"":"(optional)",t=(null===(n=e.schema.description)||void 0===n?void 0:n.replaceAll("\n","<br />"))||"";
// TODO: stack deeper objects and make sure to also print tables for those
return"| ".concat(e.name," ").concat(o," | ").concat(e.schema.type," | ").concat(t," |")};exports.propertyToTableRow=propertyToTableRow;
/**
 * Should render a string with one or more markdown tables to represent the simplifiedSchema
 *
 */
var simplifiedSchemaToMarkdownString=function(e,n,o,
/** the headers level, defaults to 1 */t){if(!e)return"";var r=e.circularRefName?"[".concat(e.circularRefName,"](#").concat((0,convert_case_1.kebabCase)(e.circularRefName),")"):"",a=e.enum?"(Enum: ".concat(e.enum.map(String).join(" | "),") "):"",i="".concat(o?"":" (optional)"),c=n.replaceAll("\n",""),s="".concat(e.type).concat(a).concat(r);return["".concat("#".repeat(t||1)," ").concat(c).concat(i,": ").concat(s),e.items?e.items.map((function(e){return"- ".concat(e.name,": ").concat(e.schema.type)})).join("\n"):"",e.description?"```md\n".concat(e.description,"\n```\n"):"",e.properties?"Properties: \n\n | Name | Type | Description |\n|---|---|---|\n".concat(e.properties.map(exports.propertyToTableRow).join("\n"),"\n"):""].join("\n\n")};exports.simplifiedSchemaToMarkdownString=simplifiedSchemaToMarkdownString;
/**
  TsFunction:
  - name and operation
  - size
  - description (doc-comment)
  - input, output
  */
var tsFunctionToMarkdownString=function(e){var n,o,t,r="## ".concat(e.name),a=("".concat((null===(n=e.codeSize)||void 0===n?void 0:n.lines)?"".concat(e.codeSize.lines," LOC, "):"","Max. indexation depth: ").concat(e.maxIndentationDepth,", ").concat((null===(o=e.cumulativeCodeSize)||void 0===o?void 0:o.lines)?"".concat(null===(t=e.cumulativeCodeSize)||void 0===t?void 0:t.lines," Cumulative LOC"):""),e.returnType.simplifiedSchema?(0,exports.simplifiedSchemaToMarkdownString)(e.returnType.simplifiedSchema,"Returns",!0,3):"## Returns: unknown"),i=e.parameters&&e.parameters.length>0?"### Arguments\n\n".concat(e.parameters.map((function(e){return(0,exports.simplifiedSchemaToMarkdownString)(e.simplifiedSchema,e.name,e.required,4)})).join("\n\n")):void 0;return[r,
// infoString, // TODO: Maybe make it optional.
e.description,a,i].filter(js_util_1.notEmpty).join("\n\n")};exports.tsFunctionToMarkdownString=tsFunctionToMarkdownString;
/**
 * properties, their type, and their description
 *
 * use simplifiedJsonSchema, but split up nested things into multiple tables (ive written a thing for splitting up nested objects before, use that)
 */
var tsInterfaceToMarkdownString=function(e){var n="## ".concat(e.name),o=e.dbStorageMethod?"".concat(e.dbStorageMethod," model\n\n"):void 0,t=e.operationName?"(from: `".concat(e.operationName,"`)"):void 0,r=(0,exports.simplifiedSchemaToMarkdownString)(e.type.simplifiedSchema,e.name,!0,2);return[n,t,o,e.description,r].filter(js_util_1.notEmpty).join("\n\n")};exports.tsInterfaceToMarkdownString=tsInterfaceToMarkdownString;
/**
 * finds all md files in a folder and creates a single MarkdownParse
 *
 * handy for creating a single documentation file or other things that have to include multiple markdown files in a structured way
 *
 * NB: it recursively structures the files and folders with headings
 */
var bundleFolderWithMarkdown=function(e,
/**
 * filename to include in the final MarkdownParse
 */
n){return __awaiter(void 0,void 0,void 0,(function(){var o,t,r,a,i;return __generator(this,(function(c){switch(c.label){case 0:return[4/*yield*/,(0,k_explore_1.explore)({basePath:e,extension:"md"})];case 1:return o=c.sent().map((function(e){return e.path})),[4/*yield*/,Promise.all(o.map((function(e){return(0,read_markdown_file_1.readMarkdownFile)(e)})))];case 2:return t=c.sent().filter(js_util_1.notEmpty),r=(0,merge_1.mergeMarkdownParse)(t,n),a=t.map((function(e){return e.fileName})).filter(js_util_1.notEmpty),i=a.length>0?"## Docs\n\n".concat(a.map((function(e){return"- [".concat((0,convert_case_1.humanCase)(e),"](#").concat(e,")")})).join("\n"),"\n\n"):"",[2/*return*/,{markdownParse:r,outline:i}]}}))}))};exports.bundleFolderWithMarkdown=bundleFolderWithMarkdown;
/**
 * converts an operation and all its contents into a flat markdown file that contains the needed information. configurable.
 *
 * markdown for reading (so there are no links)
 */
var operationToMarkdown=function(e){return __awaiter(void 0,void 0,void 0,(function(){var n,o,t,r,a,i,c,s,l,d,u,p,m,_,f,v,g,h,w,k,b,T,M,j,y,S,x,P,F,q,R,D,z,N,I,A,C;return __generator(this,(function(E){switch(E.label){case 0:return e.isSummary,n=e.manualProjectRoot,o=e.operationName,e.mergeDocsInline,t=e.returnType,(r=n||(0,get_path_1.getProjectRoot)())?[4/*yield*/,(0,get_path_1.getOperationPath)(o,{manualProjectRoot:r})]:((0,log_1.log)("Projectroot not found",{type:"error"}),[2/*return*/]);case 1:return(a=E.sent())?[4/*yield*/,(0,get_package_json_1.getPackageJson)({operationFolderPath:a})]:((0,log_1.log)("Operation not found",{type:"error"}),[2/*return*/]);case 2:return i=E.sent(),c=null==i?void 0:i.description,s=fs_util_1.path.join(a,filename_conventions_1.databaseFolderName,"operation-index.json"),[4/*yield*/,(0,read_json_file_1.readJsonFile)(s)];case 3:return l=E.sent(),"Size: ".concat(null===(F=null===(P=null==l?void 0:l.size)||void 0===P?void 0:P.codeSize)||void 0===F?void 0:F.lines," LOC, ").concat(void 0!==(null===(R=null===(q=null==l?void 0:l.size)||void 0===q?void 0:q.dataSize)||void 0===R?void 0:R.characters)?"".concat(null===(z=null===(D=null==l?void 0:l.size)||void 0===D?void 0:D.dataSize)||void 0===z?void 0:z.characters," data characters, "):"").concat(void 0!==(null===(I=null===(N=null==l?void 0:l.size)||void 0===N?void 0:N.textSize)||void 0===I?void 0:I.characters)?"".concat(null===(C=null===(A=null==l?void 0:l.size)||void 0===A?void 0:A.textSize)||void 0===C?void 0:C.characters," text characters, "):""),l&&l.coreDependencies&&l.coreDependencies.length>0?l.coreDependencies.join(", "):"none",l&&l.operationDependencies&&l.operationDependencies.length>0?l.operationDependencies.join(", "):"none",l&&l.packageDependencies&&l.packageDependencies.length>0?l.packageDependencies.join(", "):"none",d="".concat(o," (").concat(null==l?void 0:l.classification," operation)\n\n").concat(c?"".concat(c,"\n\n"):""),u=(0,markdown_parse_js_1.mdToJsonParse)(d,o),p=fs_util_1.path.join(a,"docs"),fs_util_1.fs.existsSync(p)?[4/*yield*/,(0,exports.bundleFolderWithMarkdown)(p,"docs")]:[3/*break*/,5];case 4:return _=E.sent(),[3/*break*/,6];case 5:_=void 0,E.label=6;case 6:return f=null==(m=_)?void 0:m.markdownParse,v=(null==m?void 0:m.outline)||"",[4/*yield*/,database_1.db.get("TsFunction",{operationName:o})];case 7:return g=E.sent().filter((0,js_util_1.onlyUnique2)((function(e,n){return e.name===n.name}))),h=g.length>0?g.map(exports.tsFunctionToMarkdownString).join("\n\n"):void 0,w=h?(0,markdown_parse_js_1.mdToJsonParse)(h,"functions"):void 0,k=g.length>0?"## Functions\n\n".concat(g.map((function(e){return"- [".concat(e.name,"](#").concat(e.name,")")})).join("\n"),"\n\n"):"",[4/*yield*/,database_1.db.get("TsInterface",{operationName:o})];case 8:return b=E.sent().filter((function(e){return e.isDbModel})),T=b.length>0?b.map(exports.tsInterfaceToMarkdownString).join("\n\n"):void 0,M=T?(0,markdown_parse_js_1.mdToJsonParse)(T,"models"):void 0,j=b.length>0?"## Models:\n\n".concat(b.map((function(e){return"- [".concat(e.name,"](#").concat(e.name,")")})).join("\n"),"\n\n"):"",y=(0,markdown_parse_js_1.mdToJsonParse)("".concat(v).concat(k).concat(j),"outline"),S=(0,merge_1.mergeMarkdownParse)([u,y,f,w,M].filter(js_util_1.notEmpty)),x=void 0,"parse"!==t&&(x=(0,markdown_parse_js_1.markdownParseToMarkdownString)(S)),("save"===t||!t)&&x?[4/*yield*/,fs_util_1.fs.writeFile(fs_util_1.path.join(a,"README.md"),x,"utf8")]:[3/*break*/,10];case 9:E.sent(),E.label=10;case 10:return[2/*return*/,"parse"===t?S:"string"===t?x:void 0]}}))}))};exports.operationToMarkdown=operationToMarkdown;
/**

Input: BundleConfig (one or more folder(s), readme, operations with a docs folder)

Output should be all md files concatenated in the right order with the right titles

 */
var bundleToBookMd=function(e){return __awaiter(void 0,void 0,void 0,(function(){var n,o,t,r,a,i,c;return __generator(this,(function(s){switch(s.label){case 0:return n=e.bundleConfig,e.coverImagePath,e.title,o=e.isModulesIncluded,t=e.manualProjectRoot,r=(0,bundle_util_1.getBundleSummary)(n),n.docsRelativeFolderPath,a=o?[]:r.moduleNames,i=__spreadArray(__spreadArray(__spreadArray([],r.appNames,!0),r.packageNames,!0),a,!0),[4/*yield*/,Promise.all(i.map((function(e){return __awaiter(void 0,void 0,void 0,(function(){var n;return __generator(this,(function(o){switch(o.label){case 0:return[4/*yield*/,(0,exports.operationToMarkdown)({operationName:e,manualProjectRoot:t,mergeDocsInline:!0,returnType:"parse"})];case 1:return(n=o.sent())?[2/*return*/,n]:[2/*return*/]}}))}))})))];case 1:return c=s.sent().filter(js_util_1.notEmpty),(0,merge_1.mergeMarkdownParse)(c),[2/*return*/]}}))}))};exports.bundleToBookMd=bundleToBookMd;
/**
 *
 * creates a summary for a whole bundle
 *
 * NB: Related to `bundleToBookMd`
 */
var bundleToMd=function(e){e.bundleConfigId,e.includeModules
/**
       - explain operation config itself, e.g. which apps there are and an outline of the packages and modules
    
       - extract all needed operations from bundle config (with or without modules) and use operationToMd for those
      
       - extract docs and readmes from bundle config and bundle those
      */;return""};exports.bundleToMd=bundleToMd;
/**
 * summarizes the whole OS project into a markdown string
 */
var projectToMd=function(e){e.includeTodo;
/**
    
     - the folder structure should be the outline
     - hierarchically delve into folders with all its content (md and operations)
  
     */return""};exports.projectToMd=projectToMd;
//# sourceMappingURL=bundlings.js.map