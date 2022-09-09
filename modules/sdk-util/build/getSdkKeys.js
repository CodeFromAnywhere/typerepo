"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdkKeys = void 0;
var sdk_1 = require("sdk");
var getSdkKeys = function () {
    return { success: true, response: Object.keys(sdk_1.sdk) };
};
exports.getSdkKeys = getSdkKeys;
//# sourceMappingURL=getSdkKeys.js.map