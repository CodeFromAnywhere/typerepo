"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFunctionQueryPaths = void 0;
var sdk_operations_1 = require("sdk-operations");
var database_1 = require("database");
var js_util_1 = require("js-util");
var recursive_util_1 = require("recursive-util");
var getSrcRelativeFolderPath_1 = require("./getSrcRelativeFolderPath");
/**

Calculate all required query paths for the function UI menu...

- bundles + main project as root folders (`["main project", ...bundleNames]`)
- per folder all operations it contains, nested, in the project relative folder where it should be ending up
- per operation all functions it contains, nested, relative to the src folder. not file, only folders should become menu

Example:

- main
  - modules
  - packages
    - db-ui
      - components
        - `<IndexInstanceContainer>`
        - `<Layout>`
        - `<UpsertForm>`
      - hooks
        - `useGetDbModelQuery`
        - `useReferencableModelDataQuery`
      - pages
        - Page
        - Page
        - Page
      - getPageTitle
    - generated
    - himalayajeep-functions
  - apps
- bundle A
- bundle B

NB: if possible, rename the menu items if the items in a folder are not unique (use file-name to replace item name if this happens)

 */
var getFunctionQueryPaths = function (tsFunctions) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, bundles, functionQueryPaths, flat, menuObject;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = tsFunctions;
                if (_a) return [3 /*break*/, 2];
                return [4 /*yield*/, database_1.db.get("TsFunction")];
            case 1:
                _a = (_b.sent()).filter(function (x) { return x.isExported; });
                _b.label = 2;
            case 2:
                // if you don't provide it, overwrite it from the db
                tsFunctions = _a;
                return [4 /*yield*/, database_1.db.get("BundleConfig")];
            case 3:
                bundles = _b.sent();
                functionQueryPaths = tsFunctions
                    .map(function (tsFunction) {
                    if (!tsFunction.operationName) {
                        console.log("no name");
                        return;
                    }
                    // part 1: relative path from project root until operation name
                    var operationPath = sdk_operations_1.operations[tsFunction.operationName];
                    if (!operationPath)
                        return;
                    // part 2: src relative folder path (without file)
                    var srcRelativeFolderPath = (0, getSrcRelativeFolderPath_1.getSrcRelativeFolderPath)(tsFunction.operationRelativeTypescriptFilePath);
                    // part 3: name of the function
                    var name = tsFunction.name;
                    var queryPath = srcRelativeFolderPath
                        ? "".concat(operationPath, "/").concat(srcRelativeFolderPath, "/").concat(name)
                        : "".concat(operationPath, "/").concat(name);
                    return queryPath;
                })
                    .filter(js_util_1.notEmpty)
                    .sort(function (a, b) {
                    if (a < b)
                        return -1;
                    return 1;
                });
                flat = functionQueryPaths.map(function (queryPath) {
                    var webPage = {
                        queryPath: queryPath,
                        pageData: null,
                    };
                    return webPage;
                });
                menuObject = (0, recursive_util_1.getMenuPagesObject)(flat);
                return [2 /*return*/, menuObject];
        }
    });
}); };
exports.getFunctionQueryPaths = getFunctionQueryPaths;
//# sourceMappingURL=getFunctionQueryPaths.js.map