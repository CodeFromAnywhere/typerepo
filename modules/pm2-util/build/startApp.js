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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startApp = void 0;
var pm2_1 = __importDefault(require("pm2"));
var get_path_1 = require("get-path");
var get_package_json_1 = require("get-package-json");
var types_1 = require("./types");
var pm2ConnectDisconnect_1 = require("./pm2ConnectDisconnect");
var peer_functions_1 = require("peer-functions");
var startApp = function (operationName, isDev) { return __awaiter(void 0, void 0, void 0, function () {
    var operationFolderPath, packageJson, port, isAlready, action, result;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, get_path_1.getOperationPath)(operationName)];
            case 1:
                operationFolderPath = _b.sent();
                if (!operationFolderPath) {
                    return [2 /*return*/, { isSuccessful: false, message: "No operation folder path" }];
                }
                return [4 /*yield*/, (0, get_package_json_1.getPackageJson)({ operationFolderPath: operationFolderPath })];
            case 2:
                packageJson = _b.sent();
                if (!packageJson) {
                    return [2 /*return*/, { isSuccessful: false, message: "no package json found" }];
                }
                port = (_a = packageJson === null || packageJson === void 0 ? void 0 : packageJson.operation) === null || _a === void 0 ? void 0 : _a.port;
                if (!port) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "Operation must have a port assigned",
                        }];
                }
                return [4 /*yield*/, (0, peer_functions_1.isPortUsed)(port)];
            case 3:
                isAlready = _b.sent();
                if (isAlready) {
                    return [2 /*return*/, {
                            isSuccessful: true,
                            message: "App was already running (port ".concat(port, ")"),
                        }];
                }
                action = function (resolve) {
                    pm2_1.default.start({
                        time: true,
                        name: "".concat(types_1.appPrefix).concat(operationName),
                        output: undefined,
                        error: undefined,
                        script: isDev ? "yarn dev" : "yarn start",
                        cwd: operationFolderPath,
                    }, function (error, proc) {
                        if (error) {
                            resolve({ isSuccessful: false, error: error });
                        }
                        resolve({ isSuccessful: true, proc: proc });
                    });
                };
                return [4 /*yield*/, (0, pm2ConnectDisconnect_1.pm2ConnectDisconnect)(action)];
            case 4:
                result = _b.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.startApp = startApp;
//# sourceMappingURL=startApp.js.map