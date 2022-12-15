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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.alterAny = exports.alterMarkdown = exports.alterKeyValueMarkdown = exports.alterJsonMultiple = exports.getLength = exports.alterJsonSingle = exports.alterCsv = exports.removeMultiple = exports.upsertItems = void 0;
var model_types_1 = require("model-types");
var csv_util_1 = require("csv-util");
var fs_util_1 = require("fs-util");
var key_value_markdown_js_1 = require("key-value-markdown-js");
var log_1 = require("log");
var read_csv_file_1 = require("read-csv-file");
var read_json_file_1 = require("read-json-file");
var read_kvmd_file_1 = require("read-kvmd-file");
var read_markdown_file_1 = require("read-markdown-file");
var removeKeyValueMarkdown_1 = require("./removeKeyValueMarkdown");
var upsert_1 = require("./upsert");
var upsertKeyValueMarkdown_1 = require("./upsertKeyValueMarkdown");
var js_util_1 = require("js-util");
var storing_items_1 = require("../convention/storing-items");
var getAugmentedData_1 = require("../util/getAugmentedData");
var markdown_types_1 = require("markdown-types");
/**
 * upsert an item into storage in any storage method
 */
var upsertItems = function (dbStorageMethod, dbFileLocation, storingItems, onlyInsert) { return __awaiter(void 0, void 0, void 0, function () {
    var storingItemsArray, storingItem_1, parentKey_1, parentSlug_1;
    return __generator(this, function (_a) {
        storingItemsArray = (0, js_util_1.makeArray)(storingItems);
        // Special case!
        // TODO: we don't support multiple items for this case
        if (dbStorageMethod === "keyValueMarkdown") {
            storingItem_1 = storingItemsArray[0];
            parentKey_1 = Object.keys(storingItem_1).find(function (x) { return x.startsWith("parent_") && x.endsWith("Slug"); });
            parentSlug_1 = parentKey_1 ? storingItem_1[parentKey_1] : undefined;
            return [2 /*return*/, (0, exports.alterKeyValueMarkdown)(dbFileLocation, function (storedData) {
                    // NB: CategoryStack is overwritten! We are first making sure that categoryStackCalculated is a real existing categoryStackCalculated based on the parent_xxxSlug.
                    var realStoredData = storedData;
                    var parent = parentSlug_1
                        ? realStoredData.find(function (x) { return x.slug === parentSlug_1; })
                        : undefined;
                    // NB: we overwrite categoryStackCalculated, unless the parentKey wasn't found in the storingItem.
                    var categoryStackCalculated = !parentKey_1
                        ? storingItem_1.categoryStackCalculated || []
                        : parent
                            ? parent.categoryStackCalculated.concat(parent.slug)
                            : [];
                    // console.log({ parentKey, parentSlug, parent, categoryStackCalculated });
                    var realStoringItem = __assign(__assign({}, storingItem_1), { categoryStackCalculated: categoryStackCalculated, isHeaderCalculated: storingItem_1.isHeaderCalculated !== undefined
                            ? storingItem_1.isHeaderCalculated
                            : false, comment: storingItem_1.comment === undefined ? null : storingItem_1.comment });
                    return (0, upsertKeyValueMarkdown_1.upsertKeyValueMarkdown)(realStoredData, realStoringItem);
                })];
        }
        return [2 /*return*/, (0, exports.alterAny)(dbStorageMethod, dbFileLocation, function (storedData) {
                return (0, upsert_1.upsert)(storedData, storingItemsArray, onlyInsert);
            })];
    });
}); };
exports.upsertItems = upsertItems;
/**
 * Function that lets you remove items from one specific file, for any storage method
 */
var removeMultiple = function (dbStorageMethod, dbFileLocation, removeWhere) { return __awaiter(void 0, void 0, void 0, function () {
    var absolutePath, modelName, modelLocation, isSingleItemStorageMethod, content, item, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                absolutePath = dbFileLocation.absolutePath, modelName = dbFileLocation.modelName, modelLocation = __rest(dbFileLocation, ["absolutePath", "modelName"]);
                isSingleItemStorageMethod = dbStorageMethod === "jsonSingle" || dbStorageMethod === "markdown";
                if (!isSingleItemStorageMethod) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, getAugmentedData_1.getAugmentedData)(dbFileLocation, dbStorageMethod)];
            case 1:
                content = _a.sent();
                item = content ? content[0] : null;
                if (!(fs_util_1.fs.existsSync(dbFileLocation.absolutePath) &&
                    (0, fs_util_1.canWriteSync)(dbFileLocation.absolutePath) &&
                    item &&
                    removeWhere(item))) return [3 /*break*/, 3];
                return [4 /*yield*/, fs_util_1.fs.rm(dbFileLocation.absolutePath)];
            case 2:
                res = _a.sent();
                return [2 /*return*/, { amountRemoved: 1 }];
            case 3: return [2 /*return*/, { amountRemoved: 0 }];
            case 4:
                if (dbStorageMethod === "keyValueMarkdown") {
                    return [2 /*return*/, (0, exports.alterKeyValueMarkdown)(dbFileLocation, function (storedData) {
                            var realStoredData = storedData;
                            var finalStoredData = realStoredData.reduce(function (storedDataNow, item) {
                                var completeItem = __assign(__assign({}, item), modelLocation);
                                if (removeWhere(completeItem)) {
                                    // If remove, remove it with all its children
                                    var newStoredData = (0, removeKeyValueMarkdown_1.removeKeyValueMarkdown)(storedDataNow, completeItem.slug).newStoredData;
                                    return newStoredData;
                                }
                                // Otherwise it stays the same
                                return storedDataNow;
                            }, realStoredData);
                            return {
                                newStoredData: finalStoredData,
                                isSuccesful: true,
                                amountRemoved: (0, exports.getLength)(storedData) - (0, exports.getLength)(finalStoredData),
                            };
                        })];
                }
                // otherwise, we'll remove the item from the array
                return [2 /*return*/, (0, exports.alterAny)(dbStorageMethod, dbFileLocation, function (storedData) {
                        var fullData = storedData.map(function (item) { return (__assign(__assign({}, item), modelLocation)); });
                        var newFullData = fullData.filter(function (item) {
                            return !removeWhere(item);
                        });
                        var newStoredData = newFullData.map(function (item) { return (0, storing_items_1.makeStoringItem)(item); });
                        var amountRemoved = (0, exports.getLength)(storedData) - (0, exports.getLength)(newFullData);
                        return {
                            amountRemoved: amountRemoved,
                            allRemoved: (0, exports.getLength)(newFullData) === 0,
                            newStoredData: newStoredData,
                            isSuccesful: true,
                        };
                    })];
        }
    });
}); };
exports.removeMultiple = removeMultiple;
/**
 * Alters a csv
 */
var alterCsv = function (dbFileLocation, alterFn) { return __awaiter(void 0, void 0, void 0, function () {
    var absolutePath, bareData, isNewFile, _a, newStoredData, queryResult, newDataString, isSuccesful;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                absolutePath = dbFileLocation.absolutePath;
                return [4 /*yield*/, (0, read_csv_file_1.readCsvFile)(absolutePath)];
            case 1:
                bareData = (_b.sent()) || [];
                isNewFile = !bareData;
                _a = alterFn(bareData), newStoredData = _a.newStoredData, queryResult = __rest(_a, ["newStoredData"]);
                if (!(newStoredData.length === 0 && !!bareData)) return [3 /*break*/, 3];
                // NB: if new array is empty, just remove the file
                return [4 /*yield*/, fs_util_1.fs.rm(absolutePath)];
            case 2:
                // NB: if new array is empty, just remove the file
                _b.sent();
                return [2 /*return*/, queryResult];
            case 3:
                newDataString = (0, csv_util_1.csvItemArrayToCsvString)(newStoredData);
                return [4 /*yield*/, (0, fs_util_1.writeStringToFile)(absolutePath, newDataString)];
            case 4:
                isSuccesful = _b.sent();
                if (!isSuccesful)
                    return [2 /*return*/, { isSuccesful: isSuccesful, message: "Could not write to file" }];
                return [2 /*return*/, __assign({ isNewFile: isNewFile, isSuccesful: isSuccesful }, queryResult)];
        }
    });
}); };
exports.alterCsv = alterCsv;
/**
 * Alters a json single file
 */
var alterJsonSingle = function (dbFileLocation, alterFn) { return __awaiter(void 0, void 0, void 0, function () {
    var absolutePath, storedJson, isNewFile, storedData, _a, newStoredData, queryResult, isSuccesful;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                absolutePath = dbFileLocation.absolutePath;
                return [4 /*yield*/, (0, read_json_file_1.readJsonFile)(dbFileLocation.absolutePath)];
            case 1:
                storedJson = _b.sent();
                isNewFile = !storedJson;
                storedData = storedJson ? [storedJson] : [];
                _a = alterFn(storedData), newStoredData = _a.newStoredData, queryResult = __rest(_a, ["newStoredData"]);
                return [4 /*yield*/, (0, fs_util_1.writeJsonToFile)(absolutePath, newStoredData[0])];
            case 2:
                isSuccesful = _b.sent();
                if (!isSuccesful)
                    return [2 /*return*/, { isSuccesful: isSuccesful, message: "Could not write to file" }];
                return [2 /*return*/, __assign({ isNewFile: isNewFile, isSuccesful: isSuccesful }, queryResult)];
        }
    });
}); };
exports.alterJsonSingle = alterJsonSingle;
/**
 * Safely gets the length of something
 */
var getLength = function (array) {
    if (!Array.isArray(array)) {
        (0, log_1.log)("Array is not array", { type: "error" }, { array: array });
        return 0;
    }
    return array.length;
};
exports.getLength = getLength;
/**
 * Alters a json multiple file
 */
var alterJsonMultiple = function (dbFileLocation, alterFn) { return __awaiter(void 0, void 0, void 0, function () {
    var absolutePath, storedJson, storedData, isNewFile, _a, newStoredData, queryResult, isSuccesful;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                absolutePath = dbFileLocation.absolutePath;
                return [4 /*yield*/, (0, read_json_file_1.readJsonFile)(dbFileLocation.absolutePath)];
            case 1:
                storedJson = _b.sent();
                storedData = storedJson || [];
                isNewFile = !storedJson;
                _a = alterFn(storedData), newStoredData = _a.newStoredData, queryResult = __rest(_a, ["newStoredData"]);
                if (!(newStoredData.length === 0 && !!storedJson)) return [3 /*break*/, 3];
                // NB: if new stored data is an empty array, just remove the file
                return [4 /*yield*/, fs_util_1.fs.rm(absolutePath)];
            case 2:
                // NB: if new stored data is an empty array, just remove the file
                _b.sent();
                return [2 /*return*/, __assign({ isNewFile: false }, queryResult)];
            case 3: return [4 /*yield*/, (0, fs_util_1.writeJsonToFile)(absolutePath, newStoredData)];
            case 4:
                isSuccesful = _b.sent();
                if (!isSuccesful)
                    return [2 /*return*/, { isSuccesful: isSuccesful, message: "Could not write to file" }];
                return [2 /*return*/, __assign({ isNewFile: isNewFile, isSuccesful: isSuccesful }, queryResult)];
        }
    });
}); };
exports.alterJsonMultiple = alterJsonMultiple;
var alterKeyValueMarkdown = function (dbFileLocation, alterFn) { return __awaiter(void 0, void 0, void 0, function () {
    var absolutePath, kvmdParse, isNewFile, storedData, _a, newStoredData, queryResult, newKvmdParse, newDataString, isSuccesful;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                absolutePath = dbFileLocation.absolutePath;
                return [4 /*yield*/, (0, read_kvmd_file_1.readKvmdFile)(absolutePath, dbFileLocation)];
            case 1:
                kvmdParse = _b.sent();
                isNewFile = !kvmdParse;
                storedData = (kvmdParse === null || kvmdParse === void 0 ? void 0 : kvmdParse.data) || [];
                _a = alterFn(storedData), newStoredData = _a.newStoredData, queryResult = __rest(_a, ["newStoredData"]);
                newKvmdParse = {
                    parameters: (kvmdParse === null || kvmdParse === void 0 ? void 0 : kvmdParse.parameters) || {},
                    data: newStoredData,
                };
                newDataString = (0, key_value_markdown_js_1.kvmdParseToMarkdownString)(newKvmdParse);
                return [4 /*yield*/, (0, fs_util_1.writeStringToFile)(absolutePath, newDataString)];
            case 2:
                isSuccesful = _b.sent();
                if (!isSuccesful)
                    return [2 /*return*/, { isSuccesful: isSuccesful, message: "Could not write to file" }];
                return [2 /*return*/, __assign({ isNewFile: isNewFile, isSuccesful: isSuccesful }, queryResult)];
        }
    });
}); };
exports.alterKeyValueMarkdown = alterKeyValueMarkdown;
/**
 * Alters a markdown file
 */
var alterMarkdown = function (dbFileLocation, alterFn) { return __awaiter(void 0, void 0, void 0, function () {
    var absolutePath, markdownParse, isNewFile, markdownModelItem, storedData, _a, newStoredData, queryResult, finalItem, markdownString, isSuccesful;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                absolutePath = dbFileLocation.absolutePath;
                return [4 /*yield*/, (0, read_markdown_file_1.readMarkdownFile)(absolutePath)];
            case 1:
                markdownParse = _b.sent();
                isNewFile = !markdownParse;
                markdownModelItem = (0, markdown_types_1.markdownParseToMarkdownModelType)(markdownParse);
                storedData = markdownModelItem ? [markdownModelItem] : [];
                _a = alterFn(storedData), newStoredData = _a.newStoredData, queryResult = __rest(_a, ["newStoredData"]);
                finalItem = newStoredData[0];
                markdownString = (0, model_types_1.markdownModelTypeToMarkdownString)(finalItem);
                return [4 /*yield*/, (0, fs_util_1.writeStringToFile)(absolutePath, markdownString)];
            case 2:
                isSuccesful = _b.sent();
                if (!isSuccesful)
                    return [2 /*return*/, { isSuccesful: isSuccesful, message: "Could not write to file" }];
                return [2 /*return*/, __assign({ isNewFile: isNewFile, isSuccesful: isSuccesful }, queryResult)];
        }
    });
}); };
exports.alterMarkdown = alterMarkdown;
/**
 * low level function that alters data from any storage method at a certain location
 *
 * comprises all dbStorageMethods
 */
var alterAny = function (dbStorageMethod) {
    var alterParameters = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        alterParameters[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (dbStorageMethod === "csv")
                return [2 /*return*/, exports.alterCsv.apply(void 0, alterParameters)];
            if (dbStorageMethod === "jsonSingle")
                return [2 /*return*/, exports.alterJsonSingle.apply(void 0, alterParameters)];
            if (dbStorageMethod === "keyValueMarkdown") {
                // this case never happens, this is never the case
                (0, log_1.log)("Wut??? this case should be prevented by its parent function", {
                    type: "warning",
                });
                return [2 /*return*/, exports.alterKeyValueMarkdown.apply(void 0, alterParameters)];
            }
            if (dbStorageMethod === "markdown")
                return [2 /*return*/, exports.alterMarkdown.apply(void 0, alterParameters)];
            return [2 /*return*/, exports.alterJsonMultiple.apply(void 0, alterParameters)];
        });
    });
};
exports.alterAny = alterAny;
//# sourceMappingURL=alter-functions.js.map