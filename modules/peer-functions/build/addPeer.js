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
exports.addPeer = void 0;
var api_1 = require("api");
var database_1 = require("database");
var port_conventions_1 = require("port-conventions");
var addPeer = function (ip, authToken, peerName, 
/**
 * If true, it does not validate the IP to see if it is online and it is authorized...
 */
force, isMe) { return __awaiter(void 0, void 0, void 0, function () {
    var apiResult, isConnectionEstablished, finalPeerName, peerCreation, upsertResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api_1.apiWithConfig.ping({
                    apiUrl: "http://".concat(ip, ":").concat(port_conventions_1.ports["function-server"]),
                    authToken: authToken,
                    timeout: 2000,
                })];
            case 1:
                apiResult = _a.sent();
                isConnectionEstablished = (apiResult === null || apiResult === void 0 ? void 0 : apiResult.isSuccessful) &&
                    !(apiResult === null || apiResult === void 0 ? void 0 : apiResult.isUnauthorized) &&
                    apiResult.result === true;
                if (!force && !isConnectionEstablished) {
                    return [2 /*return*/, {
                            isSuccesful: false,
                            message: "Peer connection could not be established. Are you sure the peer is online? Use force if you want to add your peer anyway. If you have a node version lower than v17, this will also fail.",
                        }];
                }
                finalPeerName = peerName || ip;
                peerCreation = {
                    peerName: finalPeerName,
                    lastOnlineAt: isConnectionEstablished ? Date.now() : 0,
                    lastSyncDatabaseAtObject: {},
                    name: ip,
                    authToken: authToken,
                    isMe: isMe,
                };
                return [4 /*yield*/, database_1.db.upsert("Peer", peerCreation)];
            case 2:
                upsertResult = _a.sent();
                return [2 /*return*/, {
                        isSuccesful: !!upsertResult.isSuccesful,
                        message: upsertResult.isSuccesful
                            ? "Peer added"
                            : "Something went wrong: ".concat(upsertResult.message),
                    }];
        }
    });
}); };
exports.addPeer = addPeer;
//# sourceMappingURL=addPeer.js.map