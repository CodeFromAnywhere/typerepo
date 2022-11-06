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
var geoip_lite_1 = __importDefault(require("geoip-lite"));
var ua_parser_js_1 = __importDefault(require("ua-parser-js"));
var database_1 = require("database");
var calculateDeviceName_1 = require("./calculateDeviceName");
var deviceInclude = {
    referenceKey: "personId",
    include: { referenceKey: "groupSlugs" },
};
/**
 * Either finds the device and updates it according to the new request metadata, or creates a new device.
 *
 * Should never return `undefined` if the database functions...
 *
 *
 * TODO: Use cookies (https://serverjs.io/documentation/reply/#cookie-) to login
 *
 * Needed for having `authToken` with GET as well in a safe manner (e.g. for images)

 */
var upsertDevice = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var authToken, ip, ipLookup, city, positionRadiusKm, ll, country, region, timezone, position, userAgent, alreadyDevice, ipInfo, origin, referer, pageVisit, currentIpInfo_1, previousIpsHasAlready, newPreviousIps, newIpStuff, newOrigins, updatedDevice_1, newDevice, fullNewDevice;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                authToken = (_b = (_a = ctx.data) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.authToken;
                ip = ctx.ip;
                if (!authToken) {
                    return [2 /*return*/];
                }
                ipLookup = (geoip_lite_1.default.lookup(ip) || {});
                city = ipLookup.city, positionRadiusKm = ipLookup.area, ll = ipLookup.ll, country = ipLookup.country, region = ipLookup.region, timezone = ipLookup.timezone;
                position = !!(ll === null || ll === void 0 ? void 0 : ll[0]) && !!(ll === null || ll === void 0 ? void 0 : ll[1]) ? { latitude: ll[0], longitude: ll[1] } : undefined;
                userAgent = (0, ua_parser_js_1.default)(ctx.req.get("User-Agent"));
                return [4 /*yield*/, database_1.db.get("Device", { include: deviceInclude })];
            case 1:
                alreadyDevice = (_c.sent()).find(function (x) { return x.id === authToken; });
                ipInfo = {
                    ip: ip,
                    city: city,
                    position: position,
                    positionRadiusKm: positionRadiusKm,
                    country: country,
                    region: region,
                    timezone: timezone,
                };
                origin = ctx.req.get("Origin");
                referer = ctx.req.get("Referrer");
                pageVisit = { ipInfo: ipInfo, path: referer };
                // @ts-ignore
                return [4 /*yield*/, database_1.db.upsert("PageVisit", pageVisit, { onlyInsert: true })];
            case 2:
                // @ts-ignore
                _c.sent();
                if (!alreadyDevice) return [3 /*break*/, 4];
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
                updatedDevice_1 = __assign(__assign(__assign({}, alreadyDevice), newIpStuff), { origins: newOrigins, userAgent: userAgent, userAgentString: userAgent.ua });
                return [4 /*yield*/, database_1.db.update("Device", function (item) { return item.id === authToken; }, function () { return updatedDevice_1; })];
            case 3:
                _c.sent();
                return [2 /*return*/, updatedDevice_1];
            case 4:
                newDevice = __assign(__assign({ authToken: authToken, authenticationMethods: [] }, ipInfo), { lastOnlineAt: 0, lastSyncDatabaseAtObject: {}, name: (0, calculateDeviceName_1.calculateDeviceName)(ipInfo, userAgent), origins: [origin], previousIps: [], userAgent: userAgent, userAgentString: userAgent.ua, hasPapi: false });
                // Create new device
                return [4 /*yield*/, database_1.db.upsert("Device", newDevice, { onlyInsert: true })];
            case 5:
                // Create new device
                _c.sent();
                return [4 /*yield*/, database_1.db.get("Device", { include: deviceInclude })];
            case 6:
                fullNewDevice = (_c.sent()).find(function (x) { return x.id === authToken; });
                return [2 /*return*/, fullNewDevice];
        }
    });
}); };
exports.upsertDevice = upsertDevice;
//# sourceMappingURL=upsertDevice.js.map