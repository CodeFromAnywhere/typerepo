"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.nestedPathObjectToNestedMenuRecursive=void 0;
/**
 * Transform a nested path object into a nested menu (MenuType), recursively
 */
var nestedPathObjectToNestedMenuRecursive=function(
/**
 * your nested path object that you want to create a menu for
 */
e,
/**
 * used for recursion to get the final url (defaults to empty array)
 */
t){
// base case
if(void 0===t&&(t=[]),e)return Object.keys(e).map((function(s){var n=t.concat(s),r=n.join("/"),o=(0,exports.nestedPathObjectToNestedMenuRecursive)(e[s],n);return{
// NB: if there is no path, the title  of the page should be "home"
title:0===s.length?"Home":s,href:r,children:o,showChildren:!0}}))};exports.nestedPathObjectToNestedMenuRecursive=nestedPathObjectToNestedMenuRecursive;
//# sourceMappingURL=nestedPathObjectToNestedMenu.js.map