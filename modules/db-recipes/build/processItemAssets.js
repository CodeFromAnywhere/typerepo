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
exports.processItemAssets = void 0;
var database_1 = require("database");
var js_util_1 = require("js-util");
var asset_functions_1 = require("asset-functions");
/**
 * processes all assets in an item and returns the new item
 */
var processItemAssets = function (item, assetParameters, interfaceName, operationName, customQueryConfig) { return __awaiter(void 0, void 0, void 0, function () {
    var absoluteReferencingFilePath, assetData, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, database_1.db.getDbFileLocationPath(item, operationName, interfaceName, customQueryConfig)];
            case 1:
                absoluteReferencingFilePath = _b.sent();
                if (!absoluteReferencingFilePath)
                    return [2 /*return*/, item];
                _a = js_util_1.mergeObjectsArray;
                return [4 /*yield*/, Promise.all(assetParameters.map(function (assetParameter) { return __awaiter(void 0, void 0, void 0, function () {
                        var backendAsset, backendAssetToStore, _a;
                        var _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    backendAsset = item[assetParameter.parameterName];
                                    if (!backendAsset) return [3 /*break*/, 2];
                                    return [4 /*yield*/, (0, asset_functions_1.processAsset)(backendAsset, absoluteReferencingFilePath, {
                                            modelName: interfaceName,
                                        })];
                                case 1:
                                    _a = _c.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    _a = undefined;
                                    _c.label = 3;
                                case 3:
                                    backendAssetToStore = _a;
                                    return [2 /*return*/, (_b = {}, _b[assetParameter.parameterName] = backendAssetToStore, _b)];
                            }
                        });
                    }); }))];
            case 2:
                assetData = _a.apply(void 0, [_b.sent()]);
                return [2 /*return*/, __assign(__assign({}, item), assetData)];
        }
    });
}); };
exports.processItemAssets = processItemAssets;
//# sourceMappingURL=processItemAssets.js.map