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
import { api } from "api";
import { useContextMenu } from "context-menu";
import { showStandardResponse, warningToast } from "cool-toast";
import { getFolderJs } from "fs-util-js";
import { notEmpty } from "js-util";
import * as React from "react";
import { Div, P } from "react-with-native";
import { useRouter } from "react-with-native-router";
import { NavButton } from "./NavButton";
import { useAdmin } from "./useAdmin";
import { useFileActions } from "./useFileActions";
export var Menu = function (props) {
    var isFolder = props.isFolder, navigation = props.navigation, folderPath = props.folderPath, filename = props.filename, contextualPromptsObject = props.contextualPromptsObject, fileContextualPromptResults = props.fileContextualPromptResults, selectionContextualPromptResults = props.selectionContextualPromptResults, thePrompts = props.thePrompts, notFound = props.notFound;
    var admin = useAdmin();
    var basePath = process.env.NEXT_PUBLIC_BASEPATH;
    var items = useFileActions(basePath, navigation);
    var _a = useContextMenu({ items: items }), openContextMenuProps = _a.openContextMenuProps, renderContextMenu = _a.renderContextMenu;
    var router = useRouter();
    var queryPath = router.asPath.slice(1);
    var basePathRelativeFolderPath = notFound
        ? "/"
        : isFolder
            ? queryPath
            : getFolderJs(queryPath);
    var folders = basePathRelativeFolderPath === null || basePathRelativeFolderPath === void 0 ? void 0 : basePathRelativeFolderPath.split("/").filter(function (x) { return !!x && x !== ""; });
    var canGoBack = notFound
        ? false
        : queryPath.includes("/") || (isFolder && queryPath !== "");
    return (React.createElement(Div, { className: "lg:w-48 lg:h-full lg:overflow-y-scroll" },
        renderContextMenu(),
        React.createElement("div", { className: "flex sm:flex-row lg:flex-col flex-wrap lg:flex-nowrap" },
            canGoBack ? React.createElement(NavButton, { href: "/README.md", title: "\uD83C\uDFE0" }) : null, folders === null || folders === void 0 ? void 0 :
            folders.map(function (folder, index, array) {
                var isActive = index === array.length - 1 &&
                    (!filename || (filename === null || filename === void 0 ? void 0 : filename.toLowerCase()) === "readme.md");
                var pathUntilHere = array.slice(0, index + 1).join("/");
                return (React.createElement(NavButton, { isActive: isActive, href: "/".concat(pathUntilHere), title: "\u2B06\uFE0F ".concat(folder) }));
            }), navigation === null || navigation === void 0 ? void 0 :
            navigation.map(function (navItem) {
                // if it's a file, we need to remove the name
                var href = "".concat(notFound ? "" : folderPath, "/").concat(navItem.name).concat(navItem.type === "folder" && navItem.firstFile
                    ? "/".concat(navItem.firstFile)
                    : "");
                var extraIcons = [
                    navItem.isDraft ? "🧪" : undefined,
                    navItem.isPrivate ? "🔑" : undefined,
                    navItem.isSecret ? "🔒" : undefined,
                    navItem.authorizedGroup === "premium"
                        ? "🏛"
                        : navItem.authorizedGroup === "enterprise"
                            ? "🚀"
                            : undefined,
                ]
                    .filter(notEmpty)
                    .join("");
                var extension = navItem.name.split(".").pop();
                var extensionIcons = {
                    ts: "⌘",
                    tsx: "⌘",
                    json: "💿",
                    md: "📄",
                };
                var icon = navItem.type === "file"
                    ? Object.keys(extensionIcons).includes(extension)
                        ? extensionIcons[extension]
                        : "📄"
                    : "📂";
                var basePath = process.env.NEXT_PUBLIC_BASEPATH;
                var projectRelativePath = "".concat(basePath || "").concat(href.startsWith("/") ? href : "/".concat(href));
                return (React.createElement(NavButton, { openContextMenuProps: admin.isAdminActive ? openContextMenuProps : undefined, isActive: filename === navItem.name, href: href, id: projectRelativePath, title: "".concat(icon, " ").concat(navItem.name, " ").concat(extraIcons) }));
            }),
            React.createElement(NavButton, { isDisabled: !admin.isAdminActive, onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                    var filename, projectRelativePath, apiResult;
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                if (!admin.isAdminActive) {
                                    warningToast("You can't do this yet! Please install the server first, and ensure you're connected with it.");
                                    return [2 /*return*/];
                                }
                                if (!basePath)
                                    return [2 /*return*/];
                                filename = prompt("What should be the name (including extension)?", "untitled.md");
                                if (!filename || filename === "")
                                    return [2 /*return*/];
                                projectRelativePath = "".concat(basePath, "/").concat(basePathRelativeFolderPath, "/").concat(filename);
                                return [4 /*yield*/, api.newFile(projectRelativePath)];
                            case 1:
                                apiResult = _c.sent();
                                showStandardResponse(apiResult);
                                if ((_a = apiResult === null || apiResult === void 0 ? void 0 : apiResult.result) === null || _a === void 0 ? void 0 : _a.isSuccessful) {
                                    (_b = admin.refetch) === null || _b === void 0 ? void 0 : _b.call(admin);
                                }
                                return [2 /*return*/];
                        }
                    });
                }); }, title: "+ New file" }),
            React.createElement(NavButton, { isDisabled: !admin.isAdminActive, onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                    var folderName, projectRelativeBasePath, apiResult;
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                if (!admin.isAdminActive) {
                                    warningToast("You can't do this yet! Please install the server first, and ensure you're connected with it.");
                                    return [2 /*return*/];
                                }
                                if (!basePath)
                                    return [2 /*return*/];
                                folderName = prompt("What should be the name?", "");
                                if (!folderName || folderName === "")
                                    return [2 /*return*/];
                                projectRelativeBasePath = "".concat(basePath, "/").concat(basePathRelativeFolderPath);
                                return [4 /*yield*/, api.newFolder(projectRelativeBasePath, folderName)];
                            case 1:
                                apiResult = _c.sent();
                                showStandardResponse(apiResult);
                                if ((_a = apiResult === null || apiResult === void 0 ? void 0 : apiResult.result) === null || _a === void 0 ? void 0 : _a.isSuccessful) {
                                    (_b = admin.refetch) === null || _b === void 0 ? void 0 : _b.call(admin);
                                }
                                return [2 /*return*/];
                        }
                    });
                }); }, title: "+ New folder" })),
        admin.isAdminActive ? (React.createElement(Div, { className: "mx-2" },
            React.createElement(P, null,
                "selectionResults: ",
                (selectionContextualPromptResults === null || selectionContextualPromptResults === void 0 ? void 0 : selectionContextualPromptResults.length) || 0),
            React.createElement(P, null,
                "fileResults: ",
                (fileContextualPromptResults === null || fileContextualPromptResults === void 0 ? void 0 : fileContextualPromptResults.length) || 0),
            React.createElement(P, null,
                isFolder ? "folderPrompts" : "pagePrompts",
                ": ",
                thePrompts.length,
                ", selectionPrompts:",
                " ",
                (contextualPromptsObject === null || contextualPromptsObject === void 0 ? void 0 : contextualPromptsObject.selectionContextualPrompts.length) || 0),
            React.createElement("div", { className: "cursor-pointer", onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                    var apiResult;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, api.removeAllFake(process.env.NEXT_PUBLIC_BASEPATH)];
                            case 1:
                                apiResult = _a.sent();
                                showStandardResponse(apiResult);
                                return [2 /*return*/];
                        }
                    });
                }); } }, "Delete all fake results"))) : null));
};
//# sourceMappingURL=Menu.js.map