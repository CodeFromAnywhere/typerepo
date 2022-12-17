"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChromeExecutablePath = void 0;
var os_1 = require("os");
var getChromeExecutablePath = function () {
    if ((0, os_1.platform)() === "linux") {
        return "/usr/bin/google-chrome-stable";
    }
    else {
        return "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
        // return "/usr/local/bin/chromium";
    }
};
exports.getChromeExecutablePath = getChromeExecutablePath;
//# sourceMappingURL=getChromeExecutablePath.js.map