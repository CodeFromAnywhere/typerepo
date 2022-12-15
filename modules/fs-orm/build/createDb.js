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
exports.createDb = void 0;
var schema_util_1 = require("schema-util");
var fs_util_1 = require("fs-util");
var log_1 = require("log");
var js_util_1 = require("js-util");
var measure_performance_1 = require("measure-performance");
var mergeConfigs_1 = require("./convention/mergeConfigs");
var alter_functions_1 = require("./alter/alter-functions");
var getDatabaseFiles_1 = require("./convention/getDatabaseFiles");
var getAugmentedData_1 = require("./util/getAugmentedData");
var groupByFile_1 = require("./util/groupByFile");
var augmentItemWithReferencedDataRecursively_1 = require("./util/augmentItemWithReferencedDataRecursively");
var getDbFileLocation_1 = require("./convention/getDbFileLocation");
var waitForLockfile_1 = require("./waitForLockfile");
/**
 * Crashes for upsert at 1024 on m2. It would be good to find a way to ensure we never crash here, or at least report where the out of memory bug came from.
 */
var maxConcurrency = 256;
/**
Create your database by passing your models as a generic and some optional configuration
 */
var createDb = function (dbConfig) {
    // need to get
    var getDbFileLocationPath = function (storedItem, operationName, modelName, config) { return __awaiter(void 0, void 0, void 0, function () {
        var mergedQueryConfig, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mergedQueryConfig = (0, mergeConfigs_1.mergeConfigs)(modelName, dbConfig, config);
                    return [4 /*yield*/, (0, getDbFileLocation_1.getDbFileLocation)(storedItem, operationName, mergedQueryConfig, modelName)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result === null || result === void 0 ? void 0 : result.absolutePath];
            }
        });
    }); };
    var getByFile = function (modelName, config) { return __awaiter(void 0, void 0, void 0, function () {
        var executionId, performance, mergedQueryConfig, dbFiles, includeData, processInclude, isAuto, includeArray, dbContentPromises, dbContent, dbContentObject;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    executionId = (0, measure_performance_1.generateUniqueId)();
                    performance = [];
                    (0, measure_performance_1.getNewPerformance)("start", executionId, true);
                    mergedQueryConfig = (0, mergeConfigs_1.mergeConfigs)(modelName, dbConfig, config);
                    performance.push((0, measure_performance_1.getNewPerformance)("mergeConfigs", executionId));
                    return [4 /*yield*/, (0, getDatabaseFiles_1.getDatabaseFiles)(modelName, mergedQueryConfig)];
                case 1:
                    dbFiles = _a.sent();
                    performance.push((0, measure_performance_1.getNewPerformance)("getDatabaseFiles", executionId));
                    includeData = {};
                    processInclude = function (includeConfig) { return __awaiter(void 0, void 0, void 0, function () {
                        var parameterInfo, includeThisData, includeArray_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!includeConfig.referenceKey)
                                        return [2 /*return*/];
                                    parameterInfo = (0, schema_util_1.getReferenceParameterInfo)(includeConfig.referenceKey);
                                    if (!parameterInfo.isReferenceParameter || !parameterInfo.interfaceName)
                                        return [2 /*return*/];
                                    if (!!includeData[parameterInfo.interfaceName]) return [3 /*break*/, 2];
                                    return [4 /*yield*/, get(parameterInfo.interfaceName, { manualProjectRoot: mergedQueryConfig.manualProjectRoot })];
                                case 1:
                                    includeThisData = _a.sent();
                                    includeData[parameterInfo.interfaceName] = includeThisData;
                                    _a.label = 2;
                                case 2:
                                    if (!includeConfig.include) return [3 /*break*/, 4];
                                    includeArray_1 = (0, js_util_1.makeArray)(includeConfig.include);
                                    return [4 /*yield*/, Promise.all(includeArray_1.map(processInclude))];
                                case 3:
                                    _a.sent();
                                    _a.label = 4;
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); };
                    isAuto = (config === null || config === void 0 ? void 0 : config.include) && !Array.isArray(config.include)
                        ? config.include.auto === true
                            ? true
                            : false
                        : false;
                    includeArray = isAuto || !(config === null || config === void 0 ? void 0 : config.include) ? [] : (0, js_util_1.makeArray)(config === null || config === void 0 ? void 0 : config.include);
                    return [4 /*yield*/, Promise.all(includeArray.map(processInclude))];
                case 2:
                    _a.sent();
                    performance.push((0, measure_performance_1.getNewPerformance)("processInclude", executionId));
                    dbContentPromises = dbFiles.map(function (dbFileLocation) { return __awaiter(void 0, void 0, void 0, function () {
                        var items, filteredItems, augmentedItems;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, (0, getAugmentedData_1.getAugmentedData)(dbFileLocation, mergedQueryConfig.dbStorageMethod)];
                                case 1:
                                    items = _b.sent();
                                    if (!items)
                                        return [2 /*return*/];
                                    filteredItems = (config === null || config === void 0 ? void 0 : config.filter)
                                        ? items.filter(config.filter)
                                        : items;
                                    augmentedItems = includeArray
                                        ? filteredItems.map(function (item) {
                                            return (0, augmentItemWithReferencedDataRecursively_1.augmentItemWithReferencedDataRecursively)(item, includeArray, includeData);
                                        })
                                        : filteredItems;
                                    if (isAuto) {
                                        /**
                                        TODO:
                                
                                        Go over all keys in the first item of augmentedItems, and see if it contains reference keys.
                                
                                        For every reference key, create an `Include`. call `includes.map(processInclude)`
                                        
                                        Call augmentItemRecursively with the includes.
                                
                                        */
                                        (0, log_1.log)("auto is not supported yet", { type: "warning" });
                                        augmentedItems = augmentedItems;
                                    }
                                    return [2 /*return*/, (_a = {}, _a[dbFileLocation.absolutePath] = augmentedItems, _a)];
                            }
                        });
                    }); });
                    performance.push((0, measure_performance_1.getNewPerformance)("dbContentPromises", executionId));
                    return [4 /*yield*/, Promise.all(dbContentPromises)];
                case 3:
                    dbContent = (_a.sent()).filter(js_util_1.notEmpty);
                    performance.push((0, measure_performance_1.getNewPerformance)("dbContent", executionId));
                    dbContentObject = (0, js_util_1.mergeObjectsArray)(dbContent);
                    performance.push((0, measure_performance_1.getNewPerformance)("dbContentObject", executionId));
                    // console.log("get performance", performance);
                    (0, measure_performance_1.cleanupTimer)(executionId);
                    // console.log({ dbContentObject });
                    return [2 /*return*/, dbContentObject];
            }
        });
    }); };
    var get = function (modelName, config) { return __awaiter(void 0, void 0, void 0, function () {
        var items, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = (_a = Object).values;
                    return [4 /*yield*/, getByFile(modelName, config)];
                case 1:
                    items = _b.apply(_a, [_c.sent()]).flat();
                    return [2 /*return*/, items];
            }
        });
    }); };
    /**
     *
     */
    var clear = function (modelName, config) { return __awaiter(void 0, void 0, void 0, function () {
        var mergedConfig, locations;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mergedConfig = (0, mergeConfigs_1.mergeConfigs)(modelName, dbConfig, config);
                    return [4 /*yield*/, (0, getDatabaseFiles_1.getDatabaseFiles)(modelName, mergedConfig)];
                case 1:
                    locations = _a.sent();
                    return [4 /*yield*/, (0, js_util_1.mapMany)(locations, function (loc) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, fs_util_1.fs.existsSync(loc.absolutePath) && fs_util_1.fs.rm(loc.absolutePath)];
                        }); }); }, maxConcurrency)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, {
                            amountRemoved: locations.length,
                            isSuccesful: true,
                            message: "".concat(locations.length, " files removed"),
                        }];
            }
        });
    }); };
    var set = function (modelName, data, config) { return __awaiter(void 0, void 0, void 0, function () {
        var mergedConfig, dbStorageMethod, itemsPerFile, locations, upsertResults, amountInserted;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mergedConfig = (0, mergeConfigs_1.mergeConfigs)(modelName, dbConfig, config);
                    dbStorageMethod = mergedConfig.dbStorageMethod;
                    return [4 /*yield*/, (0, groupByFile_1.groupByFile)(data, mergedConfig, modelName)];
                case 1:
                    itemsPerFile = _a.sent();
                    return [4 /*yield*/, (0, getDatabaseFiles_1.getDatabaseFiles)(modelName, mergedConfig)];
                case 2:
                    locations = _a.sent();
                    return [4 /*yield*/, (0, js_util_1.mapMany)(locations, function (dbFileLocation) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!fs_util_1.fs.existsSync(dbFileLocation.absolutePath)) return [3 /*break*/, 2];
                                        (0, log_1.log)("Removing ".concat(dbFileLocation.absolutePath), { type: "debug" });
                                        return [4 /*yield*/, fs_util_1.fs.rm(dbFileLocation.absolutePath)];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); }, maxConcurrency)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, (0, js_util_1.mapMany)(Object.keys(itemsPerFile), function (fileKey) { return __awaiter(void 0, void 0, void 0, function () {
                            var value, dbFileLocation, items, result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        value = itemsPerFile[fileKey];
                                        if (!value)
                                            return [2 /*return*/];
                                        dbFileLocation = value.dbFileLocation, items = value.items;
                                        (0, log_1.log)("set new values to there: ".concat(items.length), {
                                            type: "debug",
                                        });
                                        // if the item-array is empty, upsert nothing.
                                        if (items.length === 0)
                                            return [2 /*return*/];
                                        return [4 /*yield*/, (0, alter_functions_1.upsertItems)(dbStorageMethod, dbFileLocation, items)];
                                    case 1:
                                        result = _a.sent();
                                        return [2 /*return*/, result];
                                }
                            });
                        }); })];
                case 4:
                    upsertResults = (_a.sent()).filter(js_util_1.notEmpty);
                    amountInserted = (0, js_util_1.sum)(upsertResults.map(function (x) { return x.amountInserted || 0; }));
                    return [2 /*return*/, {
                            isSuccesful: true,
                            amountInserted: amountInserted,
                        }];
            }
        });
    }); };
    /**
     * TODO: currently very memorry inefficient
     * cannot even update
     */
    var upsert = function (modelName, data, config) { return __awaiter(void 0, void 0, void 0, function () {
        var mergedConfig, dbStorageMethod, creationItems, dataPerStorageFile, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mergedConfig = (0, mergeConfigs_1.mergeConfigs)(modelName, dbConfig, config);
                    dbStorageMethod = mergedConfig.dbStorageMethod;
                    creationItems = (0, js_util_1.makeArray)(data);
                    return [4 /*yield*/, (0, groupByFile_1.groupByFile)(creationItems, mergedConfig, modelName)];
                case 1:
                    dataPerStorageFile = _a.sent();
                    return [4 /*yield*/, (0, js_util_1.mapMany)(Object.keys(dataPerStorageFile), function (absolutePath) { return __awaiter(void 0, void 0, void 0, function () {
                            var itemsObject, dbFileLocation, items, lockfilePath, result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        itemsObject = dataPerStorageFile[absolutePath];
                                        dbFileLocation = itemsObject.dbFileLocation, items = itemsObject.items;
                                        if (!((config === null || config === void 0 ? void 0 : config.removeUntouched) && fs_util_1.fs.existsSync(absolutePath))) return [3 /*break*/, 2];
                                        return [4 /*yield*/, fs_util_1.fs.rm(absolutePath)];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        lockfilePath = dbFileLocation.absolutePath + ".lock";
                                        return [4 /*yield*/, (0, waitForLockfile_1.waitForLockfile)(lockfilePath)];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, (0, alter_functions_1.upsertItems)(dbStorageMethod, dbFileLocation, items, config === null || config === void 0 ? void 0 : config.onlyInsert)];
                                    case 4:
                                        result = _a.sent();
                                        return [4 /*yield*/, fs_util_1.fs.rm(lockfilePath)];
                                    case 5:
                                        _a.sent();
                                        // delete lockfile
                                        return [2 /*return*/, result];
                                }
                            });
                        }); }, maxConcurrency)];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, {
                            isSuccesful: true,
                            message: "Upserted into ".concat(result.length, " files"),
                        }];
            }
        });
    }); };
    var remove = function (modelName, removeWhere, config) { return __awaiter(void 0, void 0, void 0, function () {
        var mergedQueryConfig, dbFiles, amountRemovedArray, amountRemoved;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mergedQueryConfig = (0, mergeConfigs_1.mergeConfigs)(modelName, dbConfig, config);
                    return [4 /*yield*/, (0, getDatabaseFiles_1.getDatabaseFiles)(modelName, mergedQueryConfig)];
                case 1:
                    dbFiles = _a.sent();
                    return [4 /*yield*/, (0, js_util_1.mapMany)(dbFiles, function (dbFileLocation) { return __awaiter(void 0, void 0, void 0, function () {
                            var amountRemoved;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, (0, alter_functions_1.removeMultiple)(mergedQueryConfig.dbStorageMethod, dbFileLocation, function (content) { return removeWhere(content); })];
                                    case 1:
                                        amountRemoved = (_a.sent()).amountRemoved;
                                        // console.log({ amountRemoved });
                                        return [2 /*return*/, amountRemoved || 0];
                                }
                            });
                        }); }, maxConcurrency)];
                case 2:
                    amountRemovedArray = _a.sent();
                    amountRemoved = (0, js_util_1.sum)(amountRemovedArray);
                    if (amountRemoved === 0) {
                        return [2 /*return*/, { isSuccesful: false, message: "Nothing removed", amountRemoved: amountRemoved }];
                    }
                    return [2 /*return*/, {
                            amountRemoved: amountRemoved,
                            isSuccesful: true,
                            message: "Items removed",
                        }];
            }
        });
    }); };
    var update = function (modelName, updateWhere, map, config) { return __awaiter(void 0, void 0, void 0, function () {
        var data, amountUpdated, newData, _a, isSuccesful, message, result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, get(modelName, config)];
                case 1:
                    data = _b.sent();
                    amountUpdated = 0;
                    newData = data.map(function (item) {
                        var needsUpdate = updateWhere ? updateWhere(item) : true;
                        if (needsUpdate) {
                            amountUpdated++;
                        }
                        return needsUpdate ? map(item) : item;
                    });
                    return [4 /*yield*/, set(modelName, newData, config)];
                case 2:
                    _a = _b.sent(), isSuccesful = _a.isSuccesful, message = _a.message;
                    result = {
                        amountUpdated: amountUpdated,
                        message: message,
                        isSuccesful: isSuccesful,
                    };
                    return [2 /*return*/, result];
            }
        });
    }); };
    return {
        get: get,
        getDbFileLocationPath: getDbFileLocationPath,
        getByFile: getByFile,
        clear: clear,
        upsert: upsert,
        set: set,
        remove: remove,
        // uses set
        update: update,
    };
};
exports.createDb = createDb;
//# sourceMappingURL=createDb.js.map