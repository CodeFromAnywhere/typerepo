"use strict";
/**
 *
 * not using this anymore!
 */
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
exports.watchFolders = exports.initiateWatch = exports.makeSubscription = void 0;
var fb_watchman_1 = __importDefault(require("fb-watchman"));
var fs_util_1 = require("fs-util");
var uniqueAppKey = "watch-folders";
var getSubInfo = function (subscriptionKey) {
    var _a = subscriptionKey.split(":"), appKey = _a[0], rootPath = _a[1], relativePath = _a[2];
    if (appKey !== uniqueAppKey) {
        return;
    }
    if (!rootPath) {
        console.log("No rootpath found", subscriptionKey);
        return;
    }
    var fullPath = relativePath ? fs_util_1.path.join(rootPath, relativePath) : rootPath;
    return {
        fullPath: fullPath,
        relativePath: relativePath,
        rootPath: rootPath,
    };
};
var getSubName = function (watchBaseFolder, watchRelativePath) {
    return "".concat(uniqueAppKey, ":").concat(watchBaseFolder).concat(watchRelativePath ? ":".concat(watchRelativePath) : "");
};
// `watch` is obtained from `resp.watch` in the `watch-project` response.
// `relative_path` is obtained from `resp.relative_path` in the
// `watch-project` response.
function makeSubscription(client, watchBaseFolder, watchRelativePath, debug) {
    /**
     * this can probably be optimised
     */
    var sub = {
        // Match any `.js` file in the dir_of_interest
        expression: ["allof", ["match", "*.*"]],
        // Which fields we're interested in
        fields: ["name", "size", "mtime_ms", "exists", "type"],
        relative_root: undefined,
        // add our time constraint
    };
    if (watchRelativePath) {
        sub.relative_root = watchRelativePath;
    }
    var subName = getSubName(watchBaseFolder, watchRelativePath);
    client.command(["subscribe", watchBaseFolder, subName, sub], function (error, resp) {
        if (error) {
            // Probably an error in the subscription criteria
            console.error("Failed to subscribe: ", error);
            return;
        }
        if (debug) {
            console.log("New subscription:", "subscription " + resp.subscribe + " established");
        }
    });
    return subName;
}
exports.makeSubscription = makeSubscription;
var initiateWatch = function (_a) {
    var client = _a.client, debug = _a.debug, folderPath = _a.folderPath;
    client.command(["watch-project", folderPath], function (error, resp) {
        if (error) {
            console.error("Error initiating watch:", error);
            return;
        }
        // It is considered to be best practice to show any 'warning' or
        // 'error' information to the user, as it may suggest steps
        // for remediation
        if ("warning" in resp) {
            console.log("Warning initiating watch: ", resp.warning);
        }
        // `watch-project` can consolidate the watch for your
        // dir_of_interest with another watch at a higher level in the
        // tree, so it is very important to record the `relative_path`
        // returned in resp
        if (debug) {
            console.log("New watch:", "watch established on ", resp.relative_path
                ? fs_util_1.path.join(resp.watch, resp.relative_path)
                : resp.watch);
        }
        makeSubscription(client, resp.watch, resp.relative_path, debug);
    });
};
exports.initiateWatch = initiateWatch;
/**
 * checks if watchman client is ok. ends client if it's not ok
 */
var isClientOk = function (client, debug) {
    return new Promise(function (resolve, reject) {
        client.capabilityCheck({ optional: [], required: ["relative_root"] }, function (error, resp) {
            if (error) {
                // error will be an Error object if the watchman service is not
                // installed, or if any of the names listed in the `required`
                // array are not supported by the server
                console.error(error);
                client.end();
                return reject();
            }
            if (debug) {
                console.log("Watchman is ok", resp);
            }
            resolve();
        });
    });
};
/**
 * watches folder paths and executes a callback when something changes in one of them
 *
 * TODO: check fs/promises.watch, that seems like a simple alternative of this! Could it be? Could it remove the need for watchman?
 */
var watchFolders = function (_a) {
    var _b = _a.debug, debug = _b === void 0 ? false : _b, folders = _a.folders, onChange = _a.onChange;
    return __awaiter(void 0, void 0, void 0, function () {
        var client;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    client = new fb_watchman_1.default.Client();
                    return [4 /*yield*/, isClientOk(client, debug)];
                case 1:
                    _c.sent();
                    // Initiate watching each folder
                    folders.forEach(function (folderPath) { return (0, exports.initiateWatch)({ client: client, debug: debug, folderPath: folderPath }); });
                    // whenever there has been a change detected, this function will be called. Beware, can also be from other watch sources!
                    client.on("subscription", function (_a) {
                        var subscription = _a.subscription, files = _a.files, root = _a.root;
                        var subInfo = getSubInfo(subscription);
                        if (!subInfo)
                            return;
                        var fullPath = subInfo.fullPath, relativePath = subInfo.relativePath, rootPath = subInfo.rootPath;
                        var ourWatch = folders.includes(fullPath);
                        if (!ourWatch)
                            return;
                        onChange({ fullPath: fullPath, relativePath: relativePath, rootPath: rootPath, files: files });
                    });
                    return [2 /*return*/];
            }
        });
    });
};
exports.watchFolders = watchFolders;
//# sourceMappingURL=watchman.js.map