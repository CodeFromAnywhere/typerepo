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
exports.runFunctionServer = void 0;
var server_1 = __importDefault(require("server"));
var function_server_endpoints_1 = require("function-server-endpoints");
var port_conventions_1 = require("port-conventions");
var get_path_1 = require("get-path");
var fs_util_1 = require("fs-util");
var child_process_helper_1 = require("child-process-helper");
var log_1 = require("log");
var pm2_util_1 = require("pm2-util");
var scheduleCronJobs_1 = require("./scheduleCronJobs");
/**
 * runs sdk api server using "server" package.
 *
 * server will be exposed on port 42000
 */
var runFunctionServer = function () {
    var header = server_1.default.reply.header;
    (0, pm2_util_1.startApp)("search-web", true).then(function (result) {
        if (!(result === null || result === void 0 ? void 0 : result.isSuccessful)) {
            (0, log_1.log)("Something went wrong starting \"search-web\". Maybe you don't have it?", { type: "error" });
            return;
        }
        setTimeout(function () {
            (0, child_process_helper_1.execSync)("open http://localhost:42001");
            (0, log_1.log)("Opened the homepage in your browser", { type: "success" });
        }, 1000);
    });
    var cors = [
        /*
         see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
        see https://stackoverflow.com/questions/18642828/origin-origin-is-not-allowed-by-access-control-allow-origin
        NB: cannot set "*" i.c.m. cookies
    
        a better way to allow multiple origins is probably something like this:
    
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
    var serverOptions = {
        port: port_conventions_1.ports["function-server"],
        public: projectPublicFolder,
        security: { csrf: false },
        parser: {
            // NB: seems the server.js types are not 100% correct
            data: { maxFileSize: 1024 * 1024 * 1024 * 32 },
            cookie: { maxAge: 900000, httpOnly: false },
        },
    };
    // @ts-ignore
    (0, server_1.default)(serverOptions, cors, function_server_endpoints_1.functionPostEndpoints, function_server_endpoints_1.functionGetEndpoints, server_1.default.router.get("*", function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, {
                    success: false,
                    message: "Endpoint does not exist, are you sure it's a GET endpoint?",
                }];
        });
    }); })).then(function (context) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (process.env.NODE_APP_INSTANCE === undefined ||
                process.env.NODE_APP_INSTANCE === "0") {
                (0, scheduleCronJobs_1.scheduleCronJobs)();
            }
            console.log("Running on port ".concat(port_conventions_1.ports["function-server"], ". All node functions are now available through /function/[name] or through the \"api\" object..."));
            return [2 /*return*/];
        });
    }); });
};
exports.runFunctionServer = runFunctionServer;
//# sourceMappingURL=runFunctionServer.js.map