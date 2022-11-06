"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.isPortUsed=void 0;var net_1=__importDefault(require("net")),isPortUsed=function(e){return new Promise((function(t,r){var o=net_1.default.createServer();o.once("error",(function(e){"EADDRINUSE"===e.code&&t(!0)})),o.once("listening",(function(){
// close the server if listening doesn't fail
o.close(),t(!1)})),o.listen(e)}))};
/**
 * Checks if a port is used or not
 */exports.isPortUsed=isPortUsed;
//# sourceMappingURL=isPortUsed.js.map