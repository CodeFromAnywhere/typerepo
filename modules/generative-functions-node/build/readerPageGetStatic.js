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
exports.readerPageGetStaticPaths = exports.readerPageGetStaticProps = void 0;
var getReaderPageProps_1 = require("./getReaderPageProps");
var fs_util_1 = require("fs-util");
var k_explore_1 = require("k-explore");
var get_path_1 = require("get-path");
var js_util_1 = require("js-util");
var readerPageGetStaticProps = function (context) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, props, basePath, queryPath, realQueryPathArray, realQueryPath, staticPropResult, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot) {
                    // NB: this can happen on revalidation and blocked static requests, because we aren't using .projectRoot file anywhere. It's fine
                    console.log("NO PROJECTROOT");
                    props = {
                        notFound: true,
                        notFoundReason: "This file cannot be found.",
                    };
                    return [2 /*return*/, { props: props }];
                }
                basePath = process.env.NEXT_PUBLIC_BASEPATH;
                queryPath = (_b = context.params) === null || _b === void 0 ? void 0 : _b.queryPath;
                realQueryPathArray = queryPath ? (0, js_util_1.makeArray)(queryPath) : [];
                realQueryPath = realQueryPathArray.join("/");
                _a = js_util_1.omitUndefinedValues;
                return [4 /*yield*/, (0, getReaderPageProps_1.getReaderPageProps)(basePath || "", realQueryPath, false)];
            case 1:
                staticPropResult = _a.apply(void 0, [_c.sent()]);
                return [2 /*return*/, staticPropResult];
        }
    });
}); };
exports.readerPageGetStaticProps = readerPageGetStaticProps;
/**
 * NB: I can't do this with a fallback , because next.js doesn't include my docs folder into the bundle.
 *
 * A solution could be to add the docs folder into the next.js folder or copy it...
 *
 * https://github.com/vercel/next.js/discussions/32236?sort=new#discussioncomment-3029649
 *
 * Ther are other workarounds here to make sure it ends up in the bundle.
 *
 */
var readerPageGetStaticPaths = function () { return __awaiter(void 0, void 0, void 0, function () {
    var basePath, projectRoot, realBasePath, paths;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                basePath = process.env.NEXT_PUBLIC_BASEPATH;
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot) {
                    console.log("NO PROJECTROOT");
                    return [2 /*return*/, { fallback: "blocking", paths: [] }];
                }
                realBasePath = basePath
                    ? fs_util_1.path.join(projectRoot, basePath)
                    : projectRoot;
                return [4 /*yield*/, (0, k_explore_1.explore)({ basePath: realBasePath, includeFoldersWithResults: true })];
            case 1:
                paths = (_a.sent()).map(function (x) { return x.path; });
                // for now, let's just generate the props every time. later we can fetch the actual paths here, but that would require lots of calculation, so this might actually be fine since it will cache the result. We can also make the page load until the props are provided. I need to read the docs about it to make it all super smooth
                return [2 /*return*/, {
                        paths: [],
                        // paths.map((path) => {
                        //   const queryPath = makeRelative(path, realBasePath).split("/");
                        //   return {
                        //     params: {
                        //       queryPath,
                        //     },
                        //   };
                        // }),
                        // TODO: Maybe needs to be "false"?
                        fallback: "blocking",
                    }];
        }
    });
}); };
exports.readerPageGetStaticPaths = readerPageGetStaticPaths;
//# sourceMappingURL=readerPageGetStatic.js.map