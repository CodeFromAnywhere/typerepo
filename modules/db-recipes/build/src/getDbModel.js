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
exports.getDbModel = void 0;
var db_1 = require("db");
var fs_orm_1 = require("fs-orm");
/**
 * gets all instances of an db data interface from the db in a typesafe way
 *
 * TODO: NB: there's a bug because it sometimes finds multiple instances of the TsInterface so sometimes it returns an old version of the TsInterface that was not re-indexed. This happens because all interfaces for db's also appear in sdk-db, but because the files there themselves don't change, that operation is not re-indexed. This leads to outdated indexations.
 *
 * I should find a fix for that.
 */
var getDbModel = function (
/**
 * the interfaceName you want to get
 */
interfaceName, 
/**
 * optionally, provide a configuration
 */
config) { return __awaiter(void 0, void 0, void 0, function () {
    var indexes, index, data, slicedStartData, slicedLimitData, hasMore, filteredData, sortedData, fileLocations;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, db_1.db.get("TsInterface")];
            case 1:
                indexes = (_b.sent()).filter(function (x) { return x.name === interfaceName; });
                index = indexes[0];
                return [4 /*yield*/, db_1.db.get(interfaceName, { folders: config === null || config === void 0 ? void 0 : config.dataFolders })];
            case 2:
                data = _b.sent();
                slicedStartData = data.slice(config === null || config === void 0 ? void 0 : config.start);
                slicedLimitData = (config === null || config === void 0 ? void 0 : config.limit)
                    ? slicedStartData.slice(0, (config === null || config === void 0 ? void 0 : config.limit) ? ((config === null || config === void 0 ? void 0 : config.start) || 0) + (config === null || config === void 0 ? void 0 : config.limit) : undefined)
                    : slicedStartData;
                hasMore = slicedLimitData.length < slicedStartData.length;
                filteredData = ((_a = config === null || config === void 0 ? void 0 : config.dataFilters) === null || _a === void 0 ? void 0 : _a.length)
                    ? config === null || config === void 0 ? void 0 : config.dataFilters.reduce(function (filteredData, dataFilter) {
                        var newFilteredData = filteredData.filter(function (item) {
                            //@ts-ignore
                            var value = item[dataFilter.objectParameterKey];
                            if (dataFilter.operator === "equal") {
                                return value === dataFilter.value;
                            }
                            if (dataFilter.operator === "gt" &&
                                dataFilter.value !== null &&
                                dataFilter.value !== undefined) {
                                return value > dataFilter.value;
                            }
                            if (dataFilter.operator === "lt" &&
                                dataFilter.value !== null &&
                                dataFilter.value !== undefined) {
                                return value < dataFilter.value;
                            }
                            return true;
                        });
                        return newFilteredData;
                    }, slicedLimitData)
                    : slicedLimitData;
                sortedData = (config === null || config === void 0 ? void 0 : config.sortParameter) && (config === null || config === void 0 ? void 0 : config.sortDirection)
                    ? filteredData.sort(function (a, b) {
                        // @ts-ignore
                        var valueA = a[config.sortParameter];
                        // @ts-ignore
                        var valueB = b[config.sortParameter];
                        var directionMultiplier = config.sortDirection === "ascending" ? 1 : -1;
                        return valueA < valueB
                            ? directionMultiplier
                            : directionMultiplier * -1;
                    })
                    : filteredData;
                return [4 /*yield*/, (0, fs_orm_1.getDatabaseFiles)(interfaceName, {}, true)];
            case 3:
                fileLocations = _b.sent();
                // @ts-ignore
                return [2 /*return*/, { data: sortedData, index: index, fileLocations: fileLocations, hasMore: hasMore }];
        }
    });
}); };
exports.getDbModel = getDbModel;
//# sourceMappingURL=getDbModel.js.map