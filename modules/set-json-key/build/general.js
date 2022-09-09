#!/usr/bin/env node
"use strict";var __awaiter=this&&this.__awaiter||function(e,t,o,s){return new(o||(o=Promise))((function(n,i){function r(e){try{c(s.next(e))}catch(e){i(e)}}function l(e){try{c(s.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,l)}c((s=s.apply(e,t||[])).next())}))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.setJsonKey=void 0;const fs_util_1=require("fs-util");

function set(e,t,o){for(var s=o,n=e.split("."),i=n.length,r=0// a moving reference to internal objects within obj
;r<i-1;r++){var l=n[r];s[l]||(s[l]={}),s=s[l]}s[n[i-1]]=t}
/*
npx setjsonkey [json-path] key1.key2.[index/latest/push].key3 "value"


 collect arguments 1 2 and 3
 find file (arg1) in path, import json (or start with empty object in a new file)
 reduce keys (arg2) to go deeper into the object and create keys as they don't exist
 make sure it works with arrays too
 convert value string (arg3) to number, boolean if they seem to be like that

*/const setJsonKey=({jsonPath:e,keyLocation:t,value:o,debug:s})=>__awaiter(void 0,void 0,void 0,(function*(){
// VALIDATION
t&&0!==t.length||(console.log('usage: npx setjsonkey [json-file-path] key1.key2.[index/latest/push].key3 "value" (Check https://github.com/Code-From-Anywhere/setjsonkey for more info)'),process.exit(0));const n=e.endsWith(".json")?e:e+".json",i=fs_util_1.path.resolve(n),r=fs_util_1.fs.existsSync(i);if(!r){const e=(0,fs_util_1.getFolder)(i);console.log("creating folder because it didn't exist yet",e),fs_util_1.fs.mkdir(e,{recursive:!0})}let l={};if(r)try{l=JSON.parse(yield fs_util_1.fs.readFile(i,"utf8"))}catch(e){console.log("No JSON found here, so we're overwriting it with our new JSON")}"object"!=typeof l&&(l={});const c="true"===o||"false"===o?Boolean(o):isNaN(Number(o))?o:Number(o);
// UPDATE/SET JSON key
set(t,c,l);const u=JSON.stringify(l);yield fs_util_1.fs.writeFile(i,u,{encoding:"utf8"}),s&&(console.log({absolutePath:i,fileExists:r,object:l,newObject:u}),console.log("succesfully changed your json!"))}));exports.setJsonKey=setJsonKey;
//# sourceMappingURL=general.js.map