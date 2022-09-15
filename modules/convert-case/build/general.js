#!/usr/bin/env node
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.slugify=exports.test=exports.lowerCaseArray=exports.humanCase=exports.capitalCase=exports.kebabCase=exports.snakeCase=exports.pascalCase=exports.camelCase=exports.convertCase=exports.capitaliseFirstLetter=exports.getDelimiter=void 0;var make_test_1=require("make-test"),splitCasingDelimiters=function(e){return e.split("").reduce((function(e,a){
//get the last word, we know it's always defined because of the initial value of the reduce
var r=e.pop(),t=r.substring(-1),s=t.toUpperCase()!==t,n=a.toUpperCase()===a,i=s&&n?[r,a]:["".concat(r).concat(a)];
//let's also get the last letter
return e.concat(i)}),[""]);
// if it was lowercase but it became upper, it's a new word
},nonCasingDelimiters=/[\s,._-]+/,getDelimiter=function(e){return"capital"===e?"_":"human"===e?" ":"kebab"===e?"-":"snake"===e?"_":""};exports.getDelimiter=getDelimiter;var capitaliseFirstLetter=function(e){return e.charAt(0).toUpperCase().concat(e.substring(1))};exports.capitaliseFirstLetter=capitaliseFirstLetter;var convertToTargetCasing=function(e,a,r){return"capital"===r?e.toUpperCase():"kebab"===r||"snake"===r?e.toLowerCase():"pascal"===r?(0,exports.capitaliseFirstLetter)(e):"camel"===r?0===a?e.toLowerCase():(0,exports.capitaliseFirstLetter)(e):0===a?(0,exports.capitaliseFirstLetter)(e):e.toLowerCase()},convertCase=function(
/**
 * NB: texts of more than a sentence are not supported
 */
e,a){return e.split(nonCasingDelimiters).reduce((function(e,a){return e.concat(splitCasingDelimiters(a))}),[]).map((function(e,r){return convertToTargetCasing(e,r,a)})).join((0,exports.getDelimiter)(a))};
/**
 *
 */exports.convertCase=convertCase;var camelCase=function(e){return(0,exports.convertCase)(e,"camel")};exports.camelCase=camelCase;var pascalCase=function(e){return(0,exports.convertCase)(e,"pascal")};exports.pascalCase=pascalCase;var snakeCase=function(e){return(0,exports.convertCase)(e,"snake")};exports.snakeCase=snakeCase;var kebabCase=function(e){return(0,exports.convertCase)(e,"kebab")};exports.kebabCase=kebabCase;var capitalCase=function(e){return(0,exports.convertCase)(e,"capital")};exports.capitalCase=capitalCase;var humanCase=function(e){return(0,exports.convertCase)(e,"human")};exports.humanCase=humanCase;
/**
 * converts any string to an array of lowercase words
 *
 * format ["word1","word2","word3"] from a string of any casing.
 */
var lowerCaseArray=function(e){return(0,exports.kebabCase)(e).split("-")};
/**
 * this function does the same as kebabCase but it also does some more transformation on top
 *
 * TODO: make the tranformations that are done here into smaller util functions and make a clean function that can be ran before running every casing conversion (maybe in a config)
 */
function slugify(e){var a="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",r=new RegExp(a.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(r,(function(e){return"aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(a.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");// Trim - from end of text
}exports.lowerCaseArray=lowerCaseArray,exports.test=(0,make_test_1.makeTest)((function(){return["Handige harry","handigeHarry","HandigeHarry","handige-harry","handige_harry","HANDIGE_HARRY"].map((function(e){return{word:e,camel:(0,exports.camelCase)(e),snake:(0,exports.snakeCase)(e),kebab:(0,exports.kebabCase)(e),pascal:(0,exports.pascalCase)(e),capital:(0,exports.capitalCase)(e),human:(0,exports.humanCase)(e)}}))}),(function(e){return JSON.stringify(e)===JSON.stringify([{word:"Handige harry",camel:"handigeHarry",snake:"handige_harry",kebab:"handige-harry",pascal:"HandigeHarry",capital:"HANDIGE_HARRY",human:"Handige harry"},{word:"handigeHarry",camel:"handigeHarry",snake:"handige_harry",kebab:"handige-harry",pascal:"HandigeHarry",capital:"HANDIGE_HARRY",human:"Handige harry"},{word:"HandigeHarry",camel:"handigeHarry",snake:"handige_harry",kebab:"handige-harry",pascal:"HandigeHarry",capital:"HANDIGE_HARRY",human:"Handige harry"},{word:"handige-harry",camel:"handigeHarry",snake:"handige_harry",kebab:"handige-harry",pascal:"HandigeHarry",capital:"HANDIGE_HARRY",human:"Handige harry"},{word:"handige_harry",camel:"handigeHarry",snake:"handige_harry",kebab:"handige-harry",pascal:"HandigeHarry",capital:"HANDIGE_HARRY",human:"Handige harry"},{word:"HANDIGE_HARRY",camel:"handigeHARRY",snake:"handige_harry",kebab:"handige-harry",pascal:"HANDIGEHARRY",capital:"HANDIGE_HARRY",human:"HANDIGE harry"}])})),exports.slugify=slugify;
//# sourceMappingURL=general.js.map