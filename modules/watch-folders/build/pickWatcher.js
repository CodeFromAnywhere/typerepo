"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.pickWatcher=void 0;var os_1=__importDefault(require("os")),chokidar_1=require("./chokidar"),fswatch_1=require("./fswatch"),pickWatcher=function(){return"linux"===os_1.default.platform()?chokidar_1.watchFoldersChokidar:fswatch_1.watchFoldersFs};exports.pickWatcher=pickWatcher;
//# sourceMappingURL=pickWatcher.js.map