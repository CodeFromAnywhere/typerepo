"use strict";
/**
 * KISS; fuck grammar
 *
 * If we are going to apply grammar here, it becomes impossible to create typescript rules that can detect and convert plural/singular parameter names.
 *
 * To pluralize any word we simply attach an "s" at the end
 */Object.defineProperty(exports,"__esModule",{value:!0}),exports.singularize=exports.pluralize=void 0;var pluralize=function(e){return e.concat("s")};exports.pluralize=pluralize;
/**
 * Removes the 's' if it is found at the end of the parameter name
 */
var singularize=function(e){return e.endsWith("s")?e.substring(0,e.length-1):e};exports.singularize=singularize;
//# sourceMappingURL=pluralize.js.map