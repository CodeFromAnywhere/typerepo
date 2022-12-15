"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeConfigs = void 0;
var get_path_1 = require("get-path");
var js_util_1 = require("js-util");
var mergeConfigs = function (modelName, dbConfig, config) {
    var _a;
    var hardcodedDefaultQueryConfig = {
        dbStorageMethod: "jsonMultiple",
        // NB: this was hardcoded, but this is reducing performance a lot! Not sure why this was needed...
        // manualProjectRoot: getProjectRoot(),
    };
    var modelConfig = (_a = dbConfig === null || dbConfig === void 0 ? void 0 : dbConfig.modelQueryConfig) === null || _a === void 0 ? void 0 : _a[modelName];
    var mergedQueryConfig = (0, js_util_1.mergeObjects)(hardcodedDefaultQueryConfig, dbConfig === null || dbConfig === void 0 ? void 0 : dbConfig.defaultQueryConfig, modelConfig, config);
    // NB: dbStorageMethod is now always set
    var merged = __assign({ projectRoot: (0, get_path_1.getProjectRoot)() }, mergedQueryConfig);
    return merged;
};
exports.mergeConfigs = mergeConfigs;
//# sourceMappingURL=mergeConfigs.js.map