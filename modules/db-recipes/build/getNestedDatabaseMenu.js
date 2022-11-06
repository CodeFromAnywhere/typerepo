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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNestedDatabaseMenu = void 0;
var bundle_util_1 = require("bundle-util");
var database_1 = require("database");
var js_util_1 = require("js-util");
var tsInterfaceToDbMenu_1 = require("./tsInterfaceToDbMenu");
/**
 It's a very low-hanging fruit to be able to group the database models better... now it's kind of messy!

It would be great if it were a nested menu, just like the one in markdown-reader...

We can have a folder per bundle, and a folder per operation. In the operation we can also sort by folder the type was created in (`operationRelativeTypescriptFilePath`)

In a way you can see it at three levels

bundle -> operation -> srcRelativeFolder

The complete OS can also be represented as a bundle

If we do this, and the menus are collapsible as well as searchible... we'll have a GREAT way to alter models.

====================

 * SUPER COOL
 *
 * let's use this for db-admin..
 *
 * Any bundle will just see itself, but I will see this for every bundle. Also for the master-bundle, which is going to be super useful because then I'll be able to see the db-models for different operations and see the data they contain.
 */
var getNestedDatabaseMenu = function () { return __awaiter(void 0, void 0, void 0, function () {
    var bundles, dbModels, nestedDatabaseMenu;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1.db.get("BundleConfig")];
            case 1:
                bundles = _a.sent();
                return [4 /*yield*/, database_1.db.get("TsInterface")];
            case 2:
                dbModels = (_a.sent()).filter(function (x) { return x.isDbModel; });
                nestedDatabaseMenu = (0, js_util_1.mergeObjectsArray)(bundles.map(function (bundle) {
                    var _a;
                    var summary = (0, bundle_util_1.getBundleSummary)(bundle);
                    var appDbModels = dbModels
                        .filter(function (x) { return x.operationName && summary.appNames.includes(x.operationName); })
                        .map(function (x) { return (0, tsInterfaceToDbMenu_1.tsInterfaceToDbMenu)(x, "apps"); })
                        .filter(js_util_1.notEmpty);
                    var packageDbModels = dbModels
                        .filter(function (x) {
                        return x.operationName && summary.packageNames.includes(x.operationName);
                    })
                        .map(function (x) { return (0, tsInterfaceToDbMenu_1.tsInterfaceToDbMenu)(x, "packages"); })
                        .filter(js_util_1.notEmpty);
                    var moduleDbModels = dbModels
                        .filter(function (x) {
                        return x.operationName && summary.moduleNames.includes(x.operationName);
                    })
                        .map(function (x) { return (0, tsInterfaceToDbMenu_1.tsInterfaceToDbMenu)(x, "modules"); })
                        .filter(js_util_1.notEmpty);
                    var dbMenuModels = __spreadArray(__spreadArray(__spreadArray([], appDbModels, true), packageDbModels, true), moduleDbModels, true);
                    var operationNames = dbMenuModels
                        .map(function (x) { return x.operationName; })
                        .filter((0, js_util_1.onlyUnique2)());
                    var modelsPerOperationObject = (0, js_util_1.mergeObjectsArray)(operationNames.map(function (name) {
                        var _a;
                        var folders = dbMenuModels
                            .filter(function (x) { return x.operationName === name; })
                            .map(function (x) { return x.srcRelativeFolder; })
                            .filter((0, js_util_1.onlyUnique2)());
                        var dbModelsPerFolderObject = (0, js_util_1.mergeObjectsArray)(folders.map(function (folder) {
                            var _a;
                            var folderKey = !folder ? "src" : folder;
                            var dbModelsObject = (0, js_util_1.mergeObjectsArray)(dbMenuModels
                                .filter(function (x) {
                                return x.operationName === name && x.srcRelativeFolder === folder;
                            })
                                .map(function (x) {
                                var _a;
                                return (_a = {}, _a[x.name] = null, _a);
                            }));
                            return _a = {},
                                _a[folderKey] = dbModelsObject,
                                _a;
                        }));
                        return _a = {}, _a[name] = dbModelsPerFolderObject, _a;
                    }));
                    var nestedMenu = (_a = {}, _a[bundle.name] = modelsPerOperationObject, _a);
                    return nestedMenu;
                }));
                return [2 /*return*/, nestedDatabaseMenu];
        }
    });
}); };
exports.getNestedDatabaseMenu = getNestedDatabaseMenu;
//# sourceMappingURL=getNestedDatabaseMenu.js.map