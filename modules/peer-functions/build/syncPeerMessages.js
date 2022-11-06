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
exports.syncPeerMessages = void 0;
var database_1 = require("database");
var api_1 = require("api");
var js_util_1 = require("js-util");
var port_conventions_1 = require("port-conventions");
/**
 * Should sync messages from all peers that are online into your database
 */
var syncPeerMessages = function () { return __awaiter(void 0, void 0, void 0, function () {
    var peers, newMessagesPerPeerPromises, newMessagesPerPeer, add, sum;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1.db.get("Peer", { include: { referenceKey: "meId" } })];
            case 1:
                peers = _a.sent();
                newMessagesPerPeerPromises = peers.map(function (peer) { return __awaiter(void 0, void 0, void 0, function () {
                    var lastSyncedAt, apiResult, newPeerMessages, upsertResult, updatedResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                lastSyncedAt = peer.lastSyncDatabaseAtObject.PeerMessage;
                                return [4 /*yield*/, api_1.apiWithConfig.getDbModel({
                                        apiUrl: "http://".concat(peer.name, ":").concat(port_conventions_1.ports["function-server"]),
                                        authToken: peer.authToken,
                                    }, "PeerMessage", {
                                        dataFilters: [
                                            {
                                                // updatedAt is better than createdAt because it can also work if the model can be updated and if the messages can be edited for example. The id stays the same so upsert will overwrite it
                                                objectParameterKey: "updatedAt",
                                                operator: "gt",
                                                value: lastSyncedAt,
                                            },
                                        ],
                                    })];
                            case 1:
                                apiResult = _b.sent();
                                newPeerMessages = (_a = apiResult.result) === null || _a === void 0 ? void 0 : _a.data;
                                if (!newPeerMessages) {
                                    // PEER is not online
                                    return [2 /*return*/];
                                }
                                return [4 /*yield*/, database_1.db.upsert("PeerMessage", newPeerMessages)];
                            case 2:
                                upsertResult = _b.sent();
                                updatedResult = database_1.db.update("Peer", function (p) { return p.name === peer.name; }, function (p) { return (__assign(__assign({}, p), { lastOnlineAt: Date.now(), lastSyncDatabaseAtObject: __assign(__assign({}, p.lastSyncDatabaseAtObject), { PeerMessage: Date.now() }) })); });
                                return [2 /*return*/, upsertResult];
                        }
                    });
                }); });
                return [4 /*yield*/, Promise.all(newMessagesPerPeerPromises)];
            case 2:
                newMessagesPerPeer = (_a.sent()).filter(js_util_1.notEmpty);
                add = function (previous, current) { return previous + current; };
                sum = newMessagesPerPeer
                    .map(function (x) { return x.amountInserted; })
                    .filter(js_util_1.notEmpty)
                    .reduce(add, 0);
                return [2 /*return*/, { newMessagesAmount: sum }];
        }
    });
}); };
exports.syncPeerMessages = syncPeerMessages;
//# sourceMappingURL=syncPeerMessages.js.map