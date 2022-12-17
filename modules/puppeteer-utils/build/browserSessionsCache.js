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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBrowserPage = exports.getBrowserPage = exports.setBrowserSession = exports.getBrowserSession = exports.browserSessionsCache = void 0;
var lru_cache_1 = __importDefault(require("lru-cache"));
var uuid_1 = require("uuid");
exports.browserSessionsCache = new lru_cache_1.default({
    max: 1000,
});
var getBrowserSession = function () {
    return exports.browserSessionsCache.get("browser");
};
exports.getBrowserSession = getBrowserSession;
var setBrowserSession = function (browser) {
    exports.browserSessionsCache.set("browser", browser);
};
exports.setBrowserSession = setBrowserSession;
var getBrowserPage = function (pageId) {
    var allPages = exports.browserSessionsCache.get("pages");
    console.log({ allPages: allPages });
    if (allPages) {
        return allPages[pageId];
    }
    return undefined;
};
exports.getBrowserPage = getBrowserPage;
var setBrowserPage = function (page) {
    var _a, _b;
    var pageId = (0, uuid_1.v4)();
    var allPages = exports.browserSessionsCache.get("pages");
    if (allPages) {
        exports.browserSessionsCache.set("pages", __assign(__assign({}, allPages), (_a = {}, _a[pageId] = page, _a)));
    }
    else {
        exports.browserSessionsCache.set("pages", (_b = {}, _b[pageId] = page, _b));
    }
    return pageId;
};
exports.setBrowserPage = setBrowserPage;
//# sourceMappingURL=browserSessionsCache.js.map