"use strict";
/**
TODO: NB: Make sure the same interfaces don't get generated multiple times: when indexing a file, the file should only include interfaces from that file and interfaces from other packages, but not from relative imports. This should be fine because when you're using an operation, those relative imported types are indexed as well. NB: this doesn't really solve it still... there will still be duplication.

When generating a schema, also use ts-morph to get the AST for the interface so we can:

- find the interfaces an interface extends and its doccomment.
- get the raw type/interface text


NB:

unsupported features of ts-json-schema-generator are, among other things, function type interfaces.

More info:

https://github.com/vega/ts-json-schema-generator/issues/98
https://github.com/vega/ts-json-schema-generator/issues/104

Until this is solved, it will be difficult to get types of nested functions (other option would be to try and do it with ts-morph)
*/var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{c(n.next(e))}catch(e){a(e)}}function s(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}c((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateSchema=exports.hasDefinition=exports.tryCreateSchema=void 0;var ts_json_schema_generator_1=require("ts-json-schema-generator"),log_1=require("log"),fs_util_1=require("fs-util"),get_path_1=require("get-path"),operation_util_1=require("operation-util"),js_util_1=require("js-util"),schemaToTsInterface_1=require("./schemaToTsInterface"),tryCreateSchema=function(e){try{return{schema:(0,ts_json_schema_generator_1.createGenerator)(e).createSchema(e.type)}}catch(e){return{error:String(e)}}};function hasDefinition(e){return null!==e.type.typeDefinition}exports.tryCreateSchema=tryCreateSchema,exports.hasDefinition=hasDefinition;
/**
 * If existing schema is not stale, just require it.
 * Otherwise, generate it for a file
 *
 * NB: The `createGenerator` function finds also imported TsInterfaces, which leads to duplicate TsInterfaces. With pushing the interfaces to the slug filename, this is no problem though, there should not be any duplication!

 */
var generateSchema=function(e,t,r){return __awaiter(void 0,void 0,void 0,(function(){var n,o,a,i,s,c,u,l,f;return __generator(this,(function(h){switch(h.label){case 0:return n=[],(o=(0,get_path_1.findOperationBasePath)(e))?"src/index.ts"===(0,get_path_1.makeRelative)(e,o)?(
// should not index index
(0,log_1.log)("This should never happen, operationRelativePath is src/index"),[2/*return*/,[]]):(a=fs_util_1.path.join(o,"tsconfig.json"),fs_util_1.fs.existsSync(a)?[3/*break*/,2]:(l="no tsconfig found for ".concat(e,", not generating schemas"),(0,log_1.log)(l,{type:"error"}),n.push(l),[4/*yield*/,(0,operation_util_1.writeKeyToOperationIndexJson)(e,"indexInteracesErrors",n)])):((0,log_1.log)("No operation base path"),[2/*return*/,[]]);case 1:case 3:return h.sent(),[2/*return*/,[]];case 2:return i={
// skipTypeCheck: true,
path:e,tsconfig:a,type:"*"},s=(0,exports.tryCreateSchema)(i),c=s.schema,u=s.error,c&&c.definitions?[3/*break*/,4]:(l="No schema/definitions found for ".concat(e,". Error: ").concat(u),(0,log_1.log)(l,{type:"warning"}),[4/*yield*/,(0,operation_util_1.writeKeyToOperationIndexJson)(e,"indexInteracesErrors",[l])]);case 4:return f=Object.keys(c.definitions).map((function(n){var o=t.find((function(e){return e.name===n})),a=!!o,i=r.includes(n),s=n.startsWith("NamedParameters");if(a||i||s)return(0,schemaToTsInterface_1.schemaToTsInterface)(e,n,c,o);
// console.log({ definitionNames: Object.keys(schema.definitions) });
(0,log_1.log)("Skipping type ".concat(n),{type:"debug"},{tsMorphFoundTypeAlso:a,isImportedType:i,isNamedParameters:s})})),[4/*yield*/,Promise.all(f)];case 5:return[2/*return*/,h.sent().filter(js_util_1.notEmpty)]}}))}))};exports.generateSchema=generateSchema;
//# sourceMappingURL=generateSchema.js.map