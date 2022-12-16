"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOperationClassification = exports.isUiOperation = exports.tsconfigCompilesEsm = exports.packageCompilesTs = void 0;
var code_types_1 = require("code-types");
var fs_util_1 = require("fs-util");
var read_json_file_1 = require("read-json-file");
var try_parse_json_1 = require("try-parse-json");
var hasDependency_1 = require("./hasDependency");
var isOperation_1 = require("./isOperation");
var packageCompilesTs = function (packageJson) {
    return (!!(packageJson === null || packageJson === void 0 ? void 0 : packageJson.main) &&
        packageJson.main.startsWith("src/") &&
        (packageJson.main.endsWith(".ts") || packageJson.main.endsWith(".tsx")));
};
exports.packageCompilesTs = packageCompilesTs;
var tsconfigCompilesEsm = function (tsconfig) {
    return (!!tsconfig.compilerOptions.module &&
        !!tsconfig.compilerOptions.moduleResolution &&
        tsconfig.compilerOptions.module !== code_types_1.ModuleKind.CommonJS &&
        tsconfig.compilerOptions.moduleResolution !== code_types_1.ModuleResolutionKind.Classic);
};
exports.tsconfigCompilesEsm = tsconfigCompilesEsm;
var isUiOperation = function (tsconfig, packageJson) {
    var _a;
    var isReactPackage = !!packageJson &&
        ((0, hasDependency_1.hasDependency)(packageJson, "react") ||
            (0, hasDependency_1.hasDependency)(packageJson, "react-native") ||
            (0, hasDependency_1.hasDependency)(packageJson, "next") ||
            (0, hasDependency_1.hasDependency)(packageJson, "expo"));
    var usesJsx = !!((_a = tsconfig === null || tsconfig === void 0 ? void 0 : tsconfig.compilerOptions) === null || _a === void 0 ? void 0 : _a.jsx);
    return isReactPackage && usesJsx;
};
exports.isUiOperation = isUiOperation;
/**
 * Returns `OperationClassification` if it's an operation, or undefined if it's not
 *
 * NB: don't confuse this with `ImportClassification`
 */
var getOperationClassification = function (folderPath) {
    var _a;
    if (folderPath === undefined) {
        console.log("Incorrect type at getOperationClassification"
        // getOperationClassification.caller
        );
        process.exit(1);
    }
    if (!(0, isOperation_1.isOperation)(folderPath)) {
        return;
    }
    var packageJsonPath = fs_util_1.path.join(folderPath, "package.json");
    var packageJson = (0, try_parse_json_1.tryParseJson)(fs_util_1.fs.readFileSync(packageJsonPath, "utf8"));
    var tsconfigPath = fs_util_1.path.join(folderPath, "tsconfig.json");
    var tsconfig = (0, read_json_file_1.readJsonFileSync)(tsconfigPath);
    if (!tsconfig)
        return;
    if (!packageJson || packageJson.workspaces) {
        return;
    }
    var nextConfigPath = fs_util_1.path.join(folderPath, "next.config.js");
    var existsNextConfig = fs_util_1.fs.existsSync(nextConfigPath);
    var isNextApp = existsNextConfig;
    if (isNextApp)
        return "ui-web";
    var appJsonPath = fs_util_1.path.join(folderPath, "app.json");
    var existsAppJson = fs_util_1.fs.existsSync(appJsonPath);
    var isReactNativeApp = existsAppJson;
    if (isReactNativeApp)
        return "ui-app";
    var isTs = (0, exports.packageCompilesTs)(packageJson);
    var isEsm = (0, exports.tsconfigCompilesEsm)(tsconfig);
    var isUi = (0, exports.isUiOperation)(tsconfig, packageJson);
    var compileType = isEsm ? "esm" : isTs ? "ts" : "cjs";
    if (isUi) {
        return "ui-".concat(compileType);
    }
    var hasTypesNode = (0, hasDependency_1.hasDependency)(packageJson, "@types/node");
    if (hasTypesNode) {
        if ((_a = packageJson.operation) === null || _a === void 0 ? void 0 : _a.isNodeServer) {
            return "server-cjs";
        }
        return "node-".concat(compileType);
    }
    return compileType;
};
exports.getOperationClassification = getOperationClassification;
//# sourceMappingURL=getOperationClassification.js.map