"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.simplifiedSchemaToMarkdownString=void 0;var convert_case_1=require("convert-case"),js_util_1=require("js-util"),makePropertiesTable_1=require("./util/makePropertiesTable"),noNewlines_1=require("./util/noNewlines"),simplifiedSchemaToMarkdownString=function(e,
/**
 * if not given, no title is printed
 */
i,n,
/** the headers level, defaults to 1 */
r){if(!e)return"";var t=e.circularRefName?"[".concat(e.circularRefName,"](#").concat((0,convert_case_1.kebabCase)(e.circularRefName),")"):"",c=e.enum?"(Enum: ".concat(e.enum.map(String).join(" | "),") "):"",o="".concat(n?"":" (optional)"),a=i?i.replaceAll("\n",""):void 0,s="".concat(e.type).concat(c).concat(t);return[i?"".concat("#".repeat(r||1)," ").concat(a).concat(o,": ").concat(s):void 0,e.items?e.items.map((function(e){return"- ".concat(e.name,": ").concat(e.schema.type)})).join("\n"):"",e.description?"> ".concat((0,noNewlines_1.noNewlines)(e.description)):"",(0,makePropertiesTable_1.makePropertiesTable)(e.properties)].filter(js_util_1.notEmpty).join("\n\n")};exports.simplifiedSchemaToMarkdownString=simplifiedSchemaToMarkdownString;
//# sourceMappingURL=simplifiedSchemaToMarkdownString.js.map