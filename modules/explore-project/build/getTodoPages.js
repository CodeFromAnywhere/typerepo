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
exports.getTodoPages = void 0;
var convert_case_1 = require("convert-case");
var database_1 = require("database");
var fs_util_1 = require("fs-util");
var fs_util_js_1 = require("fs-util-js");
var get_path_1 = require("get-path");
var recursive_util_1 = require("recursive-util");
var getTodoPaths_1 = require("./getTodoPaths");
/**

`getTodoPages(): WebPage[]` function:

- use getProjectRelativePaths, map the result to a queryPath + file
- [operation-name]/[todo-relative-file-id] for operations
- [folder-name]/[todo-relative-file-id] for todos within folders


 */
var getTodoPages = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, todoOffers, todoPaths, todoPages, otherPages, flat;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/, { nested: [], flat: [] }];
                return [4 /*yield*/, database_1.db.get("TodoOffer")];
            case 1:
                todoOffers = _a.sent();
                return [4 /*yield*/, (0, getTodoPaths_1.getTodoPaths)(config)];
            case 2:
                todoPaths = _a.sent();
                todoPages = (todoPaths === null || todoPaths === void 0 ? void 0 : todoPaths.map(function (projectRelativeFilePath) {
                    var _a = projectRelativeFilePath.split("/todo/"), before = _a[0], after = _a[1];
                    var lastFolderBeforeTodo = (0, fs_util_1.getLastFolder)(before);
                    var todoRelativeFileId = (0, fs_util_js_1.withoutExtension)(after);
                    var fileName = (0, fs_util_1.getLastFolder)(todoRelativeFileId);
                    /**
                     * Idea: parsing the file for amount of items with and without checkmark, showing the % done and (x/y)
                     */
                    var menuTitle = (0, convert_case_1.humanCase)(fileName);
                    var hasTodoOffers = !!todoOffers.find(function (x) { return x.todoFileId === projectRelativeFilePath; });
                    /**
                     * showing an emoji the status of the todo-offers
                     */
                    var menuTitleAugmentation = hasTodoOffers ? "🔥" : undefined;
                    /**
                     * Idea: showing a summary, more about the progress and owner(s), and anything you just quickly wanna see
                     */
                    var menuTitleTooltip = "Tooltip example\n\nShould render markdown\n\n**Say,this is great, no?**";
                    var page = {
                        pageData: {
                            projectRelativeFilePath: projectRelativeFilePath,
                        },
                        queryPath: "".concat(lastFolderBeforeTodo, "/").concat(todoRelativeFileId),
                        menuTitle: menuTitle,
                        menuTitleAugmentation: menuTitleAugmentation,
                        menuTitleTooltip: menuTitleTooltip,
                        isMenuHidden: false,
                    };
                    return page;
                })) || [];
                otherPages = [
                    {
                        queryPath: "stats",
                        menuTitle: "Statistics",
                        menuTitleTooltip: "Some stats about cool stuff",
                        pageData: undefined,
                    },
                    {
                        queryPath: "SelfSprintReview",
                        menuTitle: "Sprint review",
                        menuTitleTooltip: "Let's do this every friday, 3PM CET",
                        pageData: undefined,
                    },
                    {
                        queryPath: "TodoOffer",
                        isMenuHidden: true,
                        pageData: undefined,
                    },
                    {
                        queryPath: "upsert/TodoOffer",
                        isMenuHidden: true,
                        pageData: undefined,
                    },
                    {
                        queryPath: "upsert/SelfSprintReview",
                        isMenuHidden: true,
                        pageData: undefined,
                    },
                ];
                flat = otherPages.concat(todoPages);
                // nestifyQueryPathObjectRecursive(flatWithoutPageData);
                return [2 /*return*/, (0, recursive_util_1.getMenuPagesObject)(flat)];
        }
    });
}); };
exports.getTodoPages = getTodoPages;
//# sourceMappingURL=getTodoPages.js.map