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
import { getReaderPageProps } from "generative-functions-node";
import { path } from "fs-util";
import { getProjectRoot } from "get-path";
import { makeRelative } from "fs-util-js";
import { makeArray, omitUndefinedValues } from "js-util";
import { explore } from "k-explore";
// @ts-ignore
export var readerPageGetStaticProps = function (context) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, queryPath, realQueryPath, basePath, realBasePath, absoluteQueryPath, projectRelativeFilePath, props, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                projectRoot = getProjectRoot();
                if (!projectRoot) {
                    console.log("NO PROJECTROOT");
                    return [2 /*return*/, { props: {} }];
                }
                queryPath = (_b = context.params) === null || _b === void 0 ? void 0 : _b.queryPath;
                realQueryPath = queryPath ? makeArray(queryPath).join("/") : "";
                basePath = process.env.NEXT_PUBLIC_BASEPATH;
                realBasePath = basePath
                    ? path.join(projectRoot, basePath)
                    : projectRoot;
                absoluteQueryPath = path.join(realBasePath, realQueryPath);
                projectRelativeFilePath = makeRelative(absoluteQueryPath, projectRoot);
                _a = omitUndefinedValues;
                return [4 /*yield*/, getReaderPageProps(projectRelativeFilePath)];
            case 1:
                props = _a.apply(void 0, [_c.sent()]);
                return [2 /*return*/, __assign({}, props)];
        }
    });
}); };
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
export var readerPageGetStaticPaths = function () { return __awaiter(void 0, void 0, void 0, function () {
    var basePath, projectRoot, realBasePath, paths;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                basePath = process.env.NEXT_PUBLIC_BASEPATH;
                // can probably also fetch the domain using the api, right? I might be able to determine what the basepath is based on an environment variable.
                console.log({ basePath: basePath });
                projectRoot = getProjectRoot();
                if (!projectRoot) {
                    console.log("NO PROJECTROOT");
                    return [2 /*return*/, { fallback: "blocking", paths: [] }];
                }
                realBasePath = basePath
                    ? path.join(projectRoot, basePath)
                    : projectRoot;
                return [4 /*yield*/, explore({ basePath: realBasePath, includeFoldersWithResults: true })];
            case 1:
                paths = (_a.sent()).map(function (x) { return x.path; });
                // for now, let's just generate the props every time. later we can fetch the actual paths here, but that would require lots of calculation, so this might actually be fine since it will cache the result. We can also make the page load until the props are provided. I need to read the docs about it to make it all super smooth
                return [2 /*return*/, {
                        paths: paths.map(function (path) {
                            var queryPath = makeRelative(path, realBasePath).split("/");
                            return {
                                params: {
                                    queryPath: queryPath,
                                },
                            };
                        }),
                        fallback: "blocking",
                    }];
        }
    });
}); };
//# sourceMappingURL=readerPageGetStatic.js.map