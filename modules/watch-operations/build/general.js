#!/usr/bin/env node
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
exports.gitCommitAllEveryMinute = exports.exitIfOperationsChange = void 0;
var get_all_operation_source_paths_1 = require("get-all-operation-source-paths");
var log_1 = require("log");
var child_process_1 = require("child_process");
var get_path_1 = require("get-path");
/**
 * every 5 seconds compares if the operationsourcepaths have changed. If so, exits the process
 */
var exitIfOperationsChange = function (allOperationSourcePaths) {
    setInterval(function () { return __awaiter(void 0, void 0, void 0, function () {
        var newOperationSourcePaths, isSame;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, get_all_operation_source_paths_1.getAllOperationSourcePaths)()];
                case 1:
                    newOperationSourcePaths = _a.sent();
                    isSame = allOperationSourcePaths.reduce(function (same, p, i) { return (newOperationSourcePaths[i] === p ? same : false); }, true);
                    //TODO: if you change a folder name, it's not detected now.
                    if (!isSame) {
                        (0, log_1.log)("new package? ok bye", { type: "error" });
                        process.exit();
                    }
                    return [2 /*return*/];
            }
        });
    }); }, 5000);
};
exports.exitIfOperationsChange = exitIfOperationsChange;
/*

const pushPosition = async () => {
  const position = await getLocation();
  if (position) {
    push("Position", {
      ...position,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      createdFirstAt: Date.now(),
      deletedAt: 0,
      id: generateId(),
    });
  }
};

const pushLight = async () => {
  const light = 1;
  if (light) {
    push("Light", {
      id: generateId(),
      createdFirstAt: Date.now(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      deletedAt: 0,
      light,
    });
  }
};

const watchLocation = async () => {
  pushPosition();
  setInterval(() => {
    pushPosition();
  }, 60000);
};

const watchLight = async () => {
  pushLight();
  setInterval(() => {
    pushLight();
  }, 60000);
};*/
var gitCommitAllEveryMinute = function () {
    setInterval(function () {
        try {
            // NB: This doesn't work well with nested .git folders!
            (0, child_process_1.execSync)("[[ `git status --porcelain .` ]] && git add . && git commit -m 'Automatic commit'", { cwd: (0, get_path_1.getProjectRoot)(), stdio: "inherit" });
        }
        catch (_a) { }
    }, 60000);
};
exports.gitCommitAllEveryMinute = gitCommitAllEveryMinute;
//# sourceMappingURL=general.js.map