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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upsertDevice = void 0;
var ua_parser_js_1 = __importDefault(require("ua-parser-js"));
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var measure_performance_1 = require("measure-performance");
var read_json_file_1 = require("read-json-file");
var database_1 = require("database");
/**
 * Returns device with all attached (logged in) `Person`s, and `currentPersonCalculated`
 *
 * Either finds the device and updates it according to the new request metadata, or creates a new device.
 *
 * Should never return `undefined` if the database functions...
 *
 * TODO: Use cookies (https://serverjs.io/documentation/reply/#cookie-) to login
 *
 * Needed for having `authToken` with GET as well in a safe manner (e.g. for images)
 */
var upsertDevice = function (serverContext) { return __awaiter(void 0, void 0, void 0, function () {
    var executionId, performance, authToken, ip, userAgentString, userAgent, origin, referer, dbPath, deviceFilePath, exists, deviceBefore, _a, newDevice, groups, persons, augmentedDevice;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                executionId = (0, measure_performance_1.generateUniqueId)();
                performance = [];
                performance.push((0, measure_performance_1.getNewPerformance)("start", executionId, true));
                authToken = (_b = serverContext.data) === null || _b === void 0 ? void 0 : _b.authToken;
                ip = serverContext.ip;
                if (!authToken || authToken.length < 24) {
                    console.log("warn upsert device: no authToken");
                    return [2 /*return*/];
                }
                userAgentString = serverContext.req.get("User-Agent");
                userAgent = (0, ua_parser_js_1.default)(userAgentString);
                origin = serverContext.req.get("Origin");
                referer = serverContext.req.get("Referrer");
                dbPath = (0, get_path_1.getRootPath)("db");
                if (!dbPath)
                    return [2 /*return*/];
                deviceFilePath = fs_util_1.path.join(dbPath, "devices", "".concat(authToken, ".json"));
                exists = fs_util_1.fs.existsSync(deviceFilePath);
                if (!exists) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, read_json_file_1.readJsonFile)(deviceFilePath)];
            case 1:
                _a = _c.sent();
                return [3 /*break*/, 3];
            case 2:
                _a = null;
                _c.label = 3;
            case 3:
                deviceBefore = _a;
                newDevice = !exists
                    ? {
                        authToken: authToken,
                        authenticationMethods: [],
                        ip: ip,
                        createdAt: Date.now(),
                        createdFirstAt: Date.now(),
                        deletedAt: 0,
                        id: authToken,
                        lastOnlineAt: Date.now(),
                        name: authToken,
                        updatedAt: Date.now(),
                        userAgentString: userAgentString || "no useragent",
                    }
                    : null;
                if (!newDevice) return [3 /*break*/, 5];
                return [4 /*yield*/, (0, fs_util_1.writeJsonToFile)(deviceFilePath, newDevice)];
            case 4:
                _c.sent();
                _c.label = 5;
            case 5: return [4 /*yield*/, database_1.db.get("Group")];
            case 6:
                groups = _c.sent();
                return [4 /*yield*/, database_1.db.get("Person")];
            case 7:
                persons = (_c.sent())
                    .filter(function (x) { var _a; return (_a = deviceBefore === null || deviceBefore === void 0 ? void 0 : deviceBefore.personIds) === null || _a === void 0 ? void 0 : _a.includes(x.id); })
                    .map(function (p) {
                    return __assign(__assign({}, p), { groups: groups.filter(function (g) { var _a; return (_a = p.groupSlugs) === null || _a === void 0 ? void 0 : _a.includes(g.slug); }) });
                });
                augmentedDevice = deviceBefore
                    ? __assign(__assign({}, deviceBefore), { persons: persons }) : newDevice;
                // console.dir({ augmentedDevice }, { depth: 999 });
                return [2 /*return*/, augmentedDevice];
        }
    });
}); };
exports.upsertDevice = upsertDevice;
//# sourceMappingURL=upsertDevice.js.map