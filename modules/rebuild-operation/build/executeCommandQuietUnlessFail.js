"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeCommandQuietUnlessFail = void 0;
var child_process_1 = require("child_process");
/**
 * Executes a command without showing the result, unless the command fails, then it will log the output.,
 */
var executeCommandQuietUnlessFail = function (config) {
    var command = config.command, cwd = config.cwd, description = config.description;
    if (description) {
        process.stdout.write("".concat(description, " "));
    }
    try {
        var result = (0, child_process_1.execSync)(command, {
            cwd: cwd,
            encoding: "utf8",
            stdio: "pipe",
        });
        if (description)
            console.log("✅");
        return true;
    }
    catch (e) {
        if (description)
            console.log("❌");
        var error = e;
        console.log("".concat(command, " went wrong:"), error === null || error === void 0 ? void 0 : error.stdout);
        return false;
    }
};
exports.executeCommandQuietUnlessFail = executeCommandQuietUnlessFail;
//# sourceMappingURL=executeCommandQuietUnlessFail.js.map