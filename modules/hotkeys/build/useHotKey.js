"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useHotkey=void 0;var useHotkeys_1=require("./useHotkeys"),useHotkey=function(
/**
 * callback that needs to launch on any keyboard event
 */
e,
/**
 * function to be executed when hotkey occurs
 */
s,
/**
 * when the callback needs to be reloaded
 */
t){return(0,useHotkeys_1.useHotkeys)(t,(function(t){e(t)&&s()}))};
/**
 * hook that creates an eventlistener for keydown and cleans it up when needed
 */exports.useHotkey=useHotkey;
//# sourceMappingURL=useHotkey.js.map