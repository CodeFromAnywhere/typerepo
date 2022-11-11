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
exports.getPeers = void 0;
var api_1 = require("api");
var database_1 = require("database");
var port_conventions_1 = require("port-conventions");
/**
 * Get peers with person relation and calculated values, sorted (first favorite, then online, then offline)
 */
var getPeers = function () { return __awaiter(void 0, void 0, void 0, function () {
    var peers, augmentedPeers, sortedPeers, peersWithApps;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1.db.get("Peer", { include: { referenceKey: "personId" } })];
            case 1:
                peers = _a.sent();
                augmentedPeers = peers.map(function (peer) {
                    var isOnlineCalculated = peer.lastOnlineAt > Date.now() - 300 * 1000;
                    var isLocalIpCalculated = peer.name.startsWith("192.168.");
                    return __assign(__assign({}, peer), { isOnlineCalculated: isOnlineCalculated, isLocalIpCalculated: isLocalIpCalculated });
                });
                sortedPeers = augmentedPeers.sort(function (a, b) {
                    if (a.isFavorite)
                        return -1;
                    if (b.isFavorite)
                        return 1;
                    if (a.isOnlineCalculated)
                        return -1;
                    if (b.isOnlineCalculated)
                        return 1;
                    return 1;
                });
                return [4 /*yield*/, Promise.all(sortedPeers.map(function (peer) { return __awaiter(void 0, void 0, void 0, function () {
                        var appOperationsCalculated, lastOnlineAt;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, api_1.apiWithConfig.getAllAppOperations({
                                        apiUrl: "http://".concat(peer.name, ":").concat(port_conventions_1.ports["function-server"]),
                                        authToken: peer.authToken,
                                        timeout: 1000,
                                    })];
                                case 1:
                                    appOperationsCalculated = (_a.sent()).result;
                                    lastOnlineAt = Date.now();
                                    if (!!appOperationsCalculated) {
                                        database_1.db.update("Peer", function (p) { return p.id === peer.id; }, function (p) { return (__assign(__assign({}, p), { lastOnlineAt: lastOnlineAt })); });
                                    }
                                    return [2 /*return*/, __assign(__assign({}, peer), { lastOnlineAt: lastOnlineAt, appOperationsCalculated: appOperationsCalculated })];
                            }
                        });
                    }); }))];
            case 2:
                peersWithApps = _a.sent();
                return [2 /*return*/, { success: true, peers: peersWithApps }];
        }
    });
}); };
exports.getPeers = getPeers;
//# sourceMappingURL=getPeers.js.map