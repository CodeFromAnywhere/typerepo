"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var indexTypescript_1 = require("./indexTypescript");
/**
 * Executes indexTypescript for some files.
 *
 * NB: Ensure the last argument is the manualProjectRoot or null if there is none
 */
var cli = function () {
    var parameters = process.argv.slice(2);
    var manualProjectRootString = parameters.pop();
    if (!manualProjectRootString)
        return;
    var manualProjectRoot = manualProjectRootString === "null" ? null : manualProjectRootString;
    // NB: last argument has been removed, which should be the manualProjectRoot
    (0, indexTypescript_1.indexTypescript)({ filePaths: parameters, manualProjectRoot: manualProjectRoot });
};
cli();
//# sourceMappingURL=cli.js.map