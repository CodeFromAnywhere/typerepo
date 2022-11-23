"use strict";
/**
gets a src relative folder path (so maybe "" for a file `src/util.ts` or "util" for a file `src/util/thing.ts`)
*/Object.defineProperty(exports,"__esModule",{value:!0}),exports.makeSrcRelativeFolder=void 0;var makeSrcRelativeFolder=function(e){var r="src/";if(e.startsWith(r)){var t=e.substring(r.length).split("/");t.pop();var a=t.join("/");if(0!==a.length)return a}};exports.makeSrcRelativeFolder=makeSrcRelativeFolder;
//# sourceMappingURL=makeSrcRelativeFolder.js.map