#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateSdkOperations_1 = require("../generateSdkOperations");
var dryrunString = process.argv.slice(2)[0];
var dryrun = dryrunString ? Boolean(dryrunString) : undefined;
(0, generateSdkOperations_1.generateSdkOperations)(undefined, { dryrun: dryrun, yarnInstallAfter: true });
if (dryrun) {
    console.log("Check new-operation/assets");
}
else {
    console.log("Check generated");
}
//# sourceMappingURL=generateSdkOperations.cli.js.map