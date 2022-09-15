"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var r,t=1,i=arguments.length;t<i;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.simplifySchema=void 0;var log_1=require("log"),schema_util_1=require("./schema-util"),js_util_1=require("js-util"),getReferenceParameterInfo_1=require("./getReferenceParameterInfo"),simplifySchema=function(
/** The name of the type interface, (this could be used as $ref). */
e,
/** The schema that needs to be simplified */
r,
/** The array of other schemas found when crawling file this schema was found in. this also includes all refs to other type interfaces in all schemas in that file */
t,
/**
 * This function is recursive. If we find any reference to another schema, we will add the name of the current schema to the rootStack and explore that schema.
 */
i){Array.isArray(r.type)&&
// let's do this one later
(0,log_1.log)("I don't support this usecase (type is an array of multiple types)... ".concat(r.type.join(",")),{type:"debug"});var n=Array.isArray(r.type)?r.type[0]:r.type,s=e?i.concat(e):i,a=(0,schema_util_1.getRefLink)(r.$ref),u=!!a&&i.includes(a);if(a&&!u){var o=t.find((function(e){return e.name===a}));
// we already encountered this ref before, let's avoid infinite recursion here.
return o||(0,log_1.log)("Strange, ref was not present in the possible refs",{type:"debug"},{possibleRefNames:t.map((function(e){return e.name})),refName:a}),(null==o?void 0:o.schema)?(0,exports.simplifySchema)(a,null==o?void 0:o.schema,t,s):void 0}var _={description:r.description,enum:r.enum,circularRefName:a};if("boolean"===n)return __assign(__assign({},_),{type:"boolean"});if("integer"===n||"number"===n)
// NB: integers are also numbers
return __assign(__assign({},_),{type:"number"});if("null"===n)return __assign(__assign({},_),{type:"null"});if("string"===n)return __assign(__assign({},_),{type:"string"});if("array"===n){var m=(0,schema_util_1.getSchemaItems)(r).map((function(r){var n=(0,schema_util_1.getRefLink)(r.$ref)||null,s=(0,exports.simplifySchema)(n,r,t,e?i.concat(e):i);if(s)return{schema:s,name:n}})).filter(js_util_1.notEmpty);return __assign(__assign({},_),{items:m,type:"array"})}
// NB: type must be an object here, it's the only possibility left...
// in case of objects
var l=(0,schema_util_1.getProperties)(r),c=l.map((function(e){var r=(0,exports.simplifySchema)(e.name,e.schema,t,s);if(r){var i=(0,getReferenceParameterInfo_1.getPossibleReferenceParameterNames)(e.name);
// NB: if the property has a model reference, we just need the model reference, not the whole model. This is only for retreiving, it's not present in the database.
if(!!!l.find((function(e){return i.includes(e.name)})))return{name:e.name,required:e.required,schema:r}}})).filter(js_util_1.notEmpty);return __assign(__assign({},_),{properties:c,type:"object"})};exports.simplifySchema=simplifySchema;
//# sourceMappingURL=simplifySchema.js.map