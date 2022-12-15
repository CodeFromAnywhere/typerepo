"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBase64 = void 0;
var toBase64 = function (str) {
    return typeof window === "undefined"
        ? Buffer.from(str).toString("base64")
        : window.btoa(str);
};
exports.toBase64 = toBase64;
//# sourceMappingURL=toBase64.js.map