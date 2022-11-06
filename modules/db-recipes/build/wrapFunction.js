"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.wrapFunction=void 0;var wrapFunction=function(n){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];
/**
    do other stuff, both with await and without awaiting
    
    - logging io + cache lookup (@pure tag)
    - logging performance
    - logging errors
    - input validation
    - output validation
    - tracking usage quantity, checking if there is still permission for execution based on credit balance
    */return console.log("I'm wrapping this function",n.name),n.apply(void 0,t)}};exports.wrapFunction=wrapFunction;var testFn=function(n){return"".concat(n).concat(n)},testFnWrapped=(0,exports.wrapFunction)(testFn);
// console.log(testFnWrapped("a"));
//# sourceMappingURL=wrapFunction.js.map