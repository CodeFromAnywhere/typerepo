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
exports.makeCodespanMappedObject = void 0;
var database_1 = require("database");
var js_util_1 = require("js-util");
var write_to_assets_1 = require("write-to-assets");
var addModelName_1 = require("./addModelName");
var makeCodespanMappedObject = function () { return __awaiter(void 0, void 0, void 0, function () {
    var tsVariables, tsInterfaces, tsFunctions, operations, bundleConfigs, modelItemsArrays, mappedObject, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1.db.get("TsVariable")];
            case 1:
                tsVariables = _a.sent();
                return [4 /*yield*/, database_1.db.get("TsInterface")];
            case 2:
                tsInterfaces = _a.sent();
                return [4 /*yield*/, database_1.db.get("TsFunction")];
            case 3:
                tsFunctions = _a.sent();
                return [4 /*yield*/, database_1.db.get("Operation")];
            case 4:
                operations = _a.sent();
                return [4 /*yield*/, database_1.db.get("BundleConfig")];
            case 5:
                bundleConfigs = _a.sent();
                modelItemsArrays = [
                    tsVariables.map(function (x) { return (0, addModelName_1.addModelName)(x, "TsVariable"); }),
                    tsInterfaces.map(function (x) { return (0, addModelName_1.addModelName)(x, "TsInterface"); }),
                    tsFunctions.map(function (x) { return (0, addModelName_1.addModelName)(x, "TsFunction"); }),
                    operations.map(function (x) { return (0, addModelName_1.addModelName)(x, "Operation"); }),
                    bundleConfigs.map(function (x) { return (0, addModelName_1.addModelName)(x, "BundleConfig"); }),
                ];
                mappedObject = (0, js_util_1.mergeObjectsArray)(modelItemsArrays.flat().map(function (item) {
                    var _a;
                    return _a = {},
                        _a[item.name] = (0, js_util_1.getSubsetFromObject)(item, [
                            "name",
                            "slug",
                            "id",
                            "description",
                            "operationName",
                            "rawText",
                            "gitRepoUrl",
                        ]),
                        _a;
                }));
                return [4 /*yield*/, (0, write_to_assets_1.writeToAssets)(__filename, mappedObject, "codespan-mapped-object-small.json", true)];
            case 6:
                result = _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.makeCodespanMappedObject = makeCodespanMappedObject;
//# sourceMappingURL=makeCodespanMappedObject.js.map