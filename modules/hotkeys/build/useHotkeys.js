"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useHotkeys=void 0;var react_1=require("react"),useHotkeys=function(
/**
 * when the callback needs to be reloaded
 */
e,
/**
 * callback that needs to launch on any keyboard event
 */
t){return(0,react_1.useEffect)((function(){if("undefined"!=typeof window)return window.addEventListener("keydown",t),function(){return window.removeEventListener("keydown",t)}}),e)};
/**
 * hook that creates an eventlistener for keydown and cleans it up when needed
 */exports.useHotkeys=useHotkeys;
//# sourceMappingURL=useHotkeys.js.map