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
exports.getTodoPaths = void 0;
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var js_util_1 = require("js-util");
var fs_util_js_1 = require("fs-util-js");
var getProjectRelativePaths_1 = require("./getProjectRelativePaths");
var getFrontmattersMappedObject_1 = require("./getFrontmattersMappedObject");
var getTodoPaths = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, _a, recency, categoryStack, personId, priority, subExtension, sort, todayTimestamp, thisWeekTimestamp, earliestUpdatedAt, todoPaths, frontmatterObject_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/, []];
                _a = (0, js_util_1.destructureOptionalObject)(config), recency = _a.recency, categoryStack = _a.categoryStack, personId = _a.personId, priority = _a.priority, subExtension = _a.subExtension, sort = _a.sort;
                todayTimestamp = 0;
                thisWeekTimestamp = 0;
                earliestUpdatedAt = recency === "24-hours"
                    ? Date.now() - 86400000
                    : recency === "7-days"
                        ? Date.now() - 86400000 * 7
                        : recency === "today"
                            ? todayTimestamp
                            : recency === "this-week"
                                ? thisWeekTimestamp
                                : undefined;
                return [4 /*yield*/, (0, getProjectRelativePaths_1.getProjectRelativePaths)({
                        type: "todo",
                        filterPrivate: true,
                        filterDraft: true,
                        filterGenerated: true,
                        earliestUpdatedAt: earliestUpdatedAt,
                        sort: sort,
                    })];
            case 1:
                todoPaths = _b.sent();
                // filter on categoryStack, if it's there. Filter BEFORE getting the markdown frontmatter, that's slow...
                if (categoryStack && categoryStack.length === 0) {
                    todoPaths = todoPaths === null || todoPaths === void 0 ? void 0 : todoPaths.filter(function (todoPath) {
                        var lastIndexTodoFolder = todoPath.lastIndexOf("todo/");
                        if (lastIndexTodoFolder === -1) {
                            return false;
                        }
                        var todoRelativeFileId = todoPath.slice(lastIndexTodoFolder + "todo/".length);
                        var depth = todoRelativeFileId.split("/").length - 1;
                        return depth === 0;
                    });
                }
                if (categoryStack && categoryStack.length > 0) {
                    todoPaths = todoPaths === null || todoPaths === void 0 ? void 0 : todoPaths.filter(function (todoPath) {
                        var lastIndexTodoFolder = todoPath.lastIndexOf("todo/");
                        if (lastIndexTodoFolder === -1) {
                            return false;
                        }
                        var todoRelativeFileId = todoPath.slice(lastIndexTodoFolder + "todo/".length);
                        // console.log({ todoRelativeFileId });
                        var categoryStackPrefix = categoryStack.join("/") + "/";
                        if (!todoRelativeFileId.startsWith(categoryStackPrefix)) {
                            return false;
                        }
                        return true;
                    });
                }
                if (subExtension) {
                    todoPaths = todoPaths === null || todoPaths === void 0 ? void 0 : todoPaths.filter(function (filePath) {
                        var filename = fs_util_1.path.parse(filePath).base;
                        var thisSubExtension = (0, fs_util_js_1.getSubExtension)(filename);
                        if (subExtension !== thisSubExtension) {
                            return false;
                        }
                        return true;
                    });
                }
                if (!(personId || priority)) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, getFrontmattersMappedObject_1.getFrontmattersMappedObject)(projectRoot, todoPaths)];
            case 2:
                frontmatterObject_1 = _b.sent();
                if (priority) {
                    todoPaths = todoPaths === null || todoPaths === void 0 ? void 0 : todoPaths.filter(function (todoPath) {
                        var _a;
                        var frontmatterPriority = (_a = frontmatterObject_1[todoPath]) === null || _a === void 0 ? void 0 : _a.priority;
                        var matchPriority = priority === String(frontmatterPriority);
                        return matchPriority;
                    });
                }
                if (personId) {
                    todoPaths = todoPaths === null || todoPaths === void 0 ? void 0 : todoPaths.filter(function (todoPath) {
                        var _a;
                        var frontmatterOwner_personId = (_a = frontmatterObject_1[todoPath]) === null || _a === void 0 ? void 0 : _a.owner_personId;
                        var matchPerson = personId === String(frontmatterOwner_personId);
                        return matchPerson;
                    });
                }
                _b.label = 3;
            case 3: return [2 /*return*/, todoPaths || []];
        }
    });
}); };
exports.getTodoPaths = getTodoPaths;
//# sourceMappingURL=getTodoPaths.js.map