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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContextualPromptCategories = exports.getObjectForkKeyRecursively = void 0;
/**
Pretty cool stuff!

I've shown a way to count all nested categories and make a child object based on that

Another, possibly more direct way, would be to traverse the filesystem, in the case of `fs-orm`, because we have files for every item in json-single.

*/
var database_1 = require("database");
var js_util_1 = require("js-util");
var getObjectForkKeyRecursively = function (stackCount, key) {
    var categoryStack = key.split(".");
    if (categoryStack.length !== 1)
        return;
    var firstCategory = categoryStack[0];
    //get all children:
    //1) find all keys that start with firstCategory
    var childrenKeys = Object.keys(stackCount).filter(function (key) {
        return key.startsWith("".concat(firstCategory, "."));
    });
    //2) remove the firstCategory from the keys
    var strippedKeys = childrenKeys.map(function (key) {
        return key.replace("".concat(firstCategory, "."), "");
    });
    // create strippedStackCount
    var strippedStackCount = strippedKeys.reduce(function (newStackCount, key) {
        var _a;
        return __assign(__assign({}, newStackCount), (_a = {}, _a[key] = stackCount["".concat(firstCategory, ".").concat(key)], _a));
    }, {});
    //3) insert into this same function
    var children = strippedKeys
        .map(function (key) { return (0, exports.getObjectForkKeyRecursively)(strippedStackCount, key); })
        .filter(js_util_1.notEmpty);
    var object = {
        category: firstCategory,
        count: stackCount[firstCategory],
    };
    if (children.length)
        object.children = children;
    return object;
};
exports.getObjectForkKeyRecursively = getObjectForkKeyRecursively;
var getContextualPromptCategories = function () { return __awaiter(void 0, void 0, void 0, function () {
    var contextualPrompts, stackCount, __root, stackCountWithoutRoot, categories, rootCategoryChildObject;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1.db.get("ContextualPrompt")];
            case 1:
                contextualPrompts = _a.sent();
                stackCount = contextualPrompts.reduce(function (stackCount, current) {
                    // get the stack for this contextualPrompt
                    var stack = current.categoryStack;
                    if (!stack || stack.length === 0) {
                        var already = stackCount.__root;
                        return __assign(__assign({}, stackCount), { __root: already ? already + 1 : 1 });
                    }
                    var everyStackPart = stack.map(function (_, index, array) {
                        var stackUntilHere = array.slice(0, index + 1).join(".");
                        return stackUntilHere;
                    });
                    var newStackCount = everyStackPart.reduce(function (stackCount, stackPart) {
                        var _a;
                        var already = stackCount[stackPart];
                        return __assign(__assign({}, stackCount), (_a = {}, _a[stackPart] = already ? already + 1 : 1, _a));
                    }, stackCount);
                    return newStackCount;
                }, {});
                __root = stackCount.__root, stackCountWithoutRoot = __rest(stackCount, ["__root"]);
                categories = Object.keys(stackCountWithoutRoot)
                    .map(function (key) { return (0, exports.getObjectForkKeyRecursively)(stackCount, key); })
                    .filter(js_util_1.notEmpty);
                rootCategoryChildObject = {
                    category: "root",
                    count: __root + (0, js_util_1.sum)(categories.map(function (x) { return x.count; })),
                    children: categories,
                };
                return [2 /*return*/, rootCategoryChildObject];
        }
    });
}); };
exports.getContextualPromptCategories = getContextualPromptCategories;
//# sourceMappingURL=getContextualPromptCategories.js.map