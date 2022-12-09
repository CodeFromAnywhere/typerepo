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
/**
 * To look up more info about an IP
 *
 * https://github.com/geoip-lite/node-geoip
 */
var database_1 = require("database");
var geoip_lite_1 = __importDefault(require("geoip-lite"));
var model_types_1 = require("model-types");
var ua_parser_js_1 = __importDefault(require("ua-parser-js"));
var calculateDeviceName_1 = require("./calculateDeviceName");
var savePageVisit_1 = require("./savePageVisit");
var measure_performance_1 = require("measure-performance");
var deviceInclude = {
    referenceKey: "personIds",
    include: { referenceKey: "groupSlugs" },
};
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
    var executionId, performance, authToken, ip, ipLookup, city, positionRadiusKm, ll, country, region, timezone, position, userAgent, devices, alreadyDevice, ipInfo, origin, referer, currentIpInfo_1, previousIpsHasAlready, newPreviousIps, newIpStuff, newOrigins, currentPersonCalculated_1, updatedDevice_1, newDevice, upsertResult, fullNewDevice, currentPersonCalculated, finalNewDevice;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                executionId = (0, measure_performance_1.generateUniqueId)();
                performance = [];
                performance.push((0, measure_performance_1.getNewPerformance)("start", executionId, true));
                authToken = (_a = serverContext.data) === null || _a === void 0 ? void 0 : _a.authToken;
                ip = serverContext.ip;
                if (!authToken || authToken.length < 24) {
                    console.log("warn upsert device: no authToken");
                    return [2 /*return*/];
                }
                ipLookup = (geoip_lite_1.default.lookup(ip) || {});
                city = ipLookup.city, positionRadiusKm = ipLookup.area, ll = ipLookup.ll, country = ipLookup.country, region = ipLookup.region, timezone = ipLookup.timezone;
                position = !!(ll === null || ll === void 0 ? void 0 : ll[0]) && !!(ll === null || ll === void 0 ? void 0 : ll[1]) ? { latitude: ll[0], longitude: ll[1] } : undefined;
                userAgent = (0, ua_parser_js_1.default)(serverContext.req.get("User-Agent"));
                performance.push((0, measure_performance_1.getNewPerformance)("lookupIp", executionId));
                return [4 /*yield*/, database_1.db.get("Device", { include: deviceInclude })];
            case 1:
                devices = _d.sent();
                alreadyDevice = devices.find(function (x) { return x.authToken === authToken; });
                performance.push((0, measure_performance_1.getNewPerformance)("findAlreadyDevice", executionId));
                ipInfo = {
                    ip: ip,
                    city: city,
                    position: position,
                    positionRadiusKm: positionRadiusKm,
                    country: country,
                    region: region,
                    timezone: timezone,
                };
                origin = serverContext.req.get("Origin");
                referer = serverContext.req.get("Referrer");
                // server.reply
                //   .cookie(
                //     "testje",
                //     authToken,
                //     {
                //       /**
                //        * NB: VERY IMPORTANT In order to receive the cookie at other port or domain
                //        */
                //       sameSite: "none",
                //       secure: true,
                //       /**
                //        * It turned out that Chrome won't set the cookie if the domain contains a port. Setting it for localhost (without port) is not a problem
                //        */
                //       domain: "localhost",
                //     }
                //   )
                performance.push((0, measure_performance_1.getNewPerformance)("gatherIpInfo", executionId));
                if (!alreadyDevice) return [3 /*break*/, 3];
                currentIpInfo_1 = {
                    ip: alreadyDevice.ip,
                    city: alreadyDevice.city,
                    position: alreadyDevice.position,
                    positionRadiusKm: alreadyDevice.positionRadiusKm,
                    country: alreadyDevice.country,
                    region: alreadyDevice.region,
                    timezone: alreadyDevice.timezone,
                };
                previousIpsHasAlready = !currentIpInfo_1.ip ||
                    alreadyDevice.previousIps.find(function (x) { return x.ip === currentIpInfo_1.ip; });
                newPreviousIps = previousIpsHasAlready
                    ? alreadyDevice.previousIps
                    : alreadyDevice.previousIps.concat(currentIpInfo_1);
                newIpStuff = alreadyDevice.ip === ip ? {} : __assign(__assign({}, ipInfo), { previousIps: newPreviousIps });
                newOrigins = alreadyDevice.origins.includes(origin)
                    ? alreadyDevice.origins
                    : alreadyDevice.origins.concat(origin);
                currentPersonCalculated_1 = alreadyDevice.currentPersonId
                    ? (_b = alreadyDevice.persons) === null || _b === void 0 ? void 0 : _b.find(function (x) { return x.id === alreadyDevice.currentPersonId; })
                    : undefined;
                updatedDevice_1 = __assign(__assign(__assign({}, alreadyDevice), newIpStuff), { currentPersonCalculated: currentPersonCalculated_1, origins: newOrigins, userAgent: userAgent, userAgentString: userAgent.ua });
                performance.push((0, measure_performance_1.getNewPerformance)("alreadyDevice_makeUpdatedDevice", executionId));
                return [4 /*yield*/, database_1.db.update("Device", function (item) { return item.authToken === authToken; }, function () { return updatedDevice_1; })];
            case 2:
                _d.sent();
                performance.push((0, measure_performance_1.getNewPerformance)("alreadyDevice_updateDevice", executionId));
                (0, savePageVisit_1.savePageVisit)(alreadyDevice.id, ipInfo, referer);
                // console.log("upsertDevice, already device", performance);
                return [2 /*return*/, updatedDevice_1];
            case 3:
                newDevice = __assign(__assign({ id: (0, model_types_1.generateId)(), authToken: authToken, authenticationMethods: [] }, ipInfo), { lastOnlineAt: 0, lastSyncDatabaseAtObject: {}, name: (0, calculateDeviceName_1.calculateDeviceName)(ipInfo, userAgent), origins: [origin], previousIps: [], userAgent: userAgent, userAgentString: userAgent.ua, hasPapi: false });
                performance.push((0, measure_performance_1.getNewPerformance)("calculateNewDevice", executionId));
                return [4 /*yield*/, database_1.db.upsert("Device", newDevice, {
                        onlyInsert: true,
                    })];
            case 4:
                upsertResult = _d.sent();
                console.log({ upsertResult: upsertResult });
                performance.push((0, measure_performance_1.getNewPerformance)("upsertNewDevice", executionId));
                return [4 /*yield*/, database_1.db.get("Device", { include: deviceInclude })];
            case 5:
                fullNewDevice = (_d.sent()).find(function (x) { return x.authToken === authToken; });
                performance.push((0, measure_performance_1.getNewPerformance)("getFullNewDevice", executionId));
                if (fullNewDevice) {
                    (0, savePageVisit_1.savePageVisit)(fullNewDevice.id, ipInfo, referer);
                }
                currentPersonCalculated = (fullNewDevice === null || fullNewDevice === void 0 ? void 0 : fullNewDevice.currentPersonId)
                    ? (_c = fullNewDevice.persons) === null || _c === void 0 ? void 0 : _c.find(function (x) { return x.id === fullNewDevice.currentPersonId; })
                    : undefined;
                finalNewDevice = fullNewDevice
                    ? __assign(__assign({}, fullNewDevice), { currentPersonCalculated: currentPersonCalculated }) : undefined;
                performance.push((0, measure_performance_1.getNewPerformance)("calculateMetadata", executionId));
                // console.log("upsertDevice", performance);
                return [2 /*return*/, finalNewDevice];
        }
    });
}); };
exports.upsertDevice = upsertDevice;
//# sourceMappingURL=upsertDevice.js.map