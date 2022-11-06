#!/usr/bin/env node
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.test=void 0;var make_test_1=require("make-test"),sum=function(e,t){return e+t};
// NB: Tried, but doesn't work, probably because it only invalidates cache for one file, not all the files that are required by that file... we need a separate process
// const requireWithoutCache = (filePath: string) => {
//   delete require.cache[path.resolve(filePath)];
//   return require(filePath);
// };
/**
 * example function that can be tested
 */
/**
 * test for example function
 */
exports.test=[(0,make_test_1.makeTest)((function(){return sum(1,2)}),(function(e){return 3===e})),(0,make_test_1.makeTest)((function(){return sum(0,0)}),(function(e){return 0===e})),(0,make_test_1.makeTest)((function(){return sum(5,5)}),(function(e){return 10===e}))];
//# sourceMappingURL=general.js.map