"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dev=void 0;var nodemon_1=require("nodemon"),dev=function(
/**
 * manual project root for finding the operations
 */
e){var o=e?[e]:void 0;(0,nodemon_1.nodemon)("watch-operations","watchOperations",o)};
/**
 * Running this function will start a watcher that watches all your operations for changes and rebuilds the operation on every change (compiling and indexing the altered file(s))
 */exports.dev=dev;
//# sourceMappingURL=dev.js.map