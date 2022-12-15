#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newTemplate_1 = require("../newTemplate");
/**
 * newTemplate can be used as CLI:
 *
 * Arguments:
 * - type (required): a folder from `new-template/assets/templates`
 * - destinationPath (optional): path where the template should be copied to (uses `cwd` by default)
 */
var newTemplateCli = function () {
    var _a = process.argv.slice(2), type = _a[0], destinationPath = _a[1];
    (0, newTemplate_1.newTemplate)(type, destinationPath).then(function (basePath) {
        if (basePath) {
            console.log("Generated template", { type: type });
        }
        else {
            console.log("Something went wrong");
        }
    });
};
newTemplateCli();
//# sourceMappingURL=newTemplate.cli.js.map