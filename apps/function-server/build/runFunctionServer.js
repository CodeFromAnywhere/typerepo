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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runFunctionServer = exports.executeFunction = void 0;
var server_1 = __importDefault(require("server"));
var one_by_one_1 = require("one-by-one");
var function_server_endpoints_1 = require("function-server-endpoints");
var log_1 = require("log");
var sdk_env_public_1 = require("sdk-env-public");
var sdk_api_1 = require("sdk-api");
var get_path_1 = require("get-path");
var fs_util_1 = require("fs-util");
var node_cron_1 = require("node-cron");
var database_1 = require("database");
var js_util_1 = require("js-util");
var port = sdk_env_public_1.publicEnvironmentVariables.serverPort;
var executeFunction = function (tsFunction) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        //@ts-ignore
        (_a = sdk_api_1.sdk[tsFunction.name]) === null || _a === void 0 ? void 0 : _a.call(sdk_api_1.sdk);
        return [2 /*return*/];
    });
}); };
exports.executeFunction = executeFunction;
/**
 * For every `RunEveryPeriodEnum`, this object provides the interval `cronExpression` string for `node-cron`
 */
var scheduleObject = {
    minute: "* * * * *",
    "5-minutes": "0,5,10,15,20,25,30,35,40,45,50,55 * * * *",
    "quarter-hour": "0,15,30,45 * * * *",
    hour: "0 * * * *",
    "6-hours": "0 0,6,12,18 * * *",
    midnight: "0 0 * * *",
    week: "0 0 * * 1",
    month: "0 0 1 * *",
    "3-months": "0 0 1 1,4,7,10 *",
    year: "0 0 1 1 *",
};
/**
 * runs sdk api server using "server" package.
 *
 * server will be exposed on port 4201
 */
var runFunctionServer = function () {
    var header = server_1.default.reply.header;
    var cors = [
        // see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
        // see https://stackoverflow.com/questions/18642828/origin-origin-is-not-allowed-by-access-control-allow-origin
        // NB: cannot set "*" i.c.m. cookies
        /* a better way to allow multiple origins is probably something like this:
    
          const allowedOrigins = ['http://127.0.0.1:8020', 'http://localhost:8020', 'http://127.0.0.1:9000', 'http://localhost:9000'];
      const origin = req.headers.origin;
      if (allowedOrigins.includes(origin)) {
           res.setHeader('Access-Control-Allow-Origin', origin);
      }
      */
        function () { return header("Access-Control-Allow-Origin", "*"); },
        function () {
            return header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Set-Cookie" // not sure if * can be put here after the others...
            );
        },
        function () {
            return header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE, HEAD");
        },
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials
        // NB: important for cookies!
        function () { return header("Access-Control-Allow-Credentials", "true"); },
        function (ctx) { return (ctx.method.toLowerCase() === "options" ? 200 : false); },
    ];
    var projectRoot = (0, get_path_1.getProjectRoot)();
    var projectPublicFolder = projectRoot
        ? fs_util_1.path.join(projectRoot, "public")
        : fs_util_1.path.join(__dirname, "..", "public");
    // @ts-ignore
    server_1.default.apply(void 0, __spreadArray(__spreadArray(__spreadArray([{
            port: port,
            public: projectPublicFolder,
            security: { csrf: false },
            parser: {
                data: { maxFileSize: 1024 * 1024 * 1024 * 32 },
                cookie: {
                    maxAge: 900000,
                    httpOnly: false,
                },
            },
        },
        // NB: afaik... it DOES NOT matter if you set the cookie before or after CORS!
        cors], function_server_endpoints_1.getApiEndpoints, false), function_server_endpoints_1.postApiEndpoints, false), [function_server_endpoints_1.functionEndpoints,
        server_1.default.router.get("*", function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {
                        success: false,
                        message: "Endpoint does not exist, are you sure it's a GET endpoint?",
                    }];
            });
        }); })], false)).then(function (context) { return __awaiter(void 0, void 0, void 0, function () {
        var tsFunctions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1.db.get("TsFunction")];
                case 1:
                    tsFunctions = _a.sent();
                    if (process.env.NODE_APP_INSTANCE === undefined ||
                        process.env.NODE_APP_INSTANCE === "0") {
                        (0, log_1.log)("Scheduling CRON jobs", { type: "important" });
                        (0, js_util_1.getObjectKeysArray)(scheduleObject).map(function (interval) {
                            var cronExpression = scheduleObject[interval];
                            var functionsToExecute = tsFunctions.filter(function (x) { return x.runEveryPeriod === interval; });
                            if (functionsToExecute.length > 0) {
                                (0, node_cron_1.schedule)(cronExpression, function () {
                                    (0, one_by_one_1.oneByOne)(functionsToExecute, exports.executeFunction);
                                }, { name: interval });
                            }
                        });
                    }
                    console.log("Running on port ".concat(port, ". All node functions are now available through /function/[name] or through the \"api\" object..."));
                    return [2 /*return*/];
            }
        });
    }); });
};
exports.runFunctionServer = runFunctionServer;
//# sourceMappingURL=runFunctionServer.js.map