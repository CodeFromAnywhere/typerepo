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
import { apiWithConfig } from "api";
import { ClickableIcon } from "clickable-icon";
import { useFileWriter } from "file-writer";
import { getFileOrFolderName, getFolderJs } from "fs-util-js";
import { MarkdownContent } from "markdown";
import { MarkdownParsePresentation } from "writer-input";
import { processPrompt, usePromptResultAlert } from "prompt-components";
import * as React from "react";
import { useState } from "react";
import { Div, P } from "react-with-native";
import { useAlert } from "react-with-native-alert";
import { useRouter } from "react-with-native-router";
import { Tabs } from "tabs";
import { FileActions } from "./FileActions";
import { Menu } from "./Menu";
import { NavButton } from "./NavButton";
import { PromptButton } from "./PromptButton";
import { SelectionPrompts } from "./SelectionPrompts";
import { useStore } from "./store";
import { useAdmin } from "./useAdmin";
import { useVariantResult } from "./useVariant";
import { VariantSelector } from "./VariantSelector";
import { mdToJsonParse } from "markdown-parse-js";
export var ReaderPage = function (props) {
    var _a = useState(false), sidebarHidden = _a[0], setSidebarHidden = _a[1];
    var router = useRouter();
    var _b = useStore("api.customUrl"), customUrl = _b[0], setCustomUrl = _b[1], customUrlInfo = _b[2];
    var _c = useStore("api.authToken"), _ = _c[0], setAuthToken = _c[1];
    var admin = useAdmin();
    var queryPath = router.asPath.slice(1);
    var showPromptAlert = usePromptResultAlert();
    var alert = useAlert();
    var basePath = process.env.NEXT_PUBLIC_BASEPATH;
    var markdown = props.markdown, actualProjectRelativeFilePath = props.actualProjectRelativeFilePath, contextualPromptResults = props.contextualPromptResults, contextualPromptsObject = props.contextualPromptsObject, navigation = props.navigation, isFolder = props.isFolder, canSeeContent = props.canSeeContent, unauthorizedWarningMessage = props.unauthorizedWarningMessage, notFound = props.notFound;
    var _d = useFileWriter({
        projectRelativeFilePath: actualProjectRelativeFilePath,
        hideButtons: true,
        initialWriterView: "edit",
    }), renderFileWriter = _d.renderFileWriter, save = _d.save, isSaved = _d.isSaved;
    var promo = "**What to do now?**\n- [\uD83E\uDD1D Let's get to know each other! Book a call](https://calendly.com/karsens/30min)\n- [\uD83D\uDD7A Join our discord](https://discord.gg/gehCtKJk)".concat(admin.isAdminActive
        ? ""
        : "\n- [🧪 Install your server](/gpt-ide/README.md)", "\n- [\uD83C\uDFDB See my premium services and offers](/offers)\n- [\uD83E\uDD2F Join our AI hacker villa \uD83C\uDFDD](https://codefrombali.com)");
    var onFocus = function () { return __awaiter(void 0, void 0, void 0, function () {
        var localUrl, isAlive;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!customUrlInfo.hydrated) {
                        return [2 /*return*/];
                    }
                    localUrl = "http://localhost:42000";
                    if (customUrl === localUrl) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, apiWithConfig.ping({ apiUrl: localUrl })];
                case 1:
                    isAlive = (_a.sent()).result;
                    if (isAlive) {
                        setCustomUrl(localUrl);
                        // NB: Hardcoded?
                        setAuthToken("xwjkfycqhakpudymxmysxlei");
                        alert === null || alert === void 0 ? void 0 : alert("Connected to localhost", "It seems your server is running locally, you're now connected. You can now interact with your local file system to apply prompts on your own knowledge base!", [
                            { text: "Okay", style: "default", onPress: function () { return router.reload(); } },
                            {
                                text: "Undo",
                                style: "destructive",
                                onPress: function () {
                                    setCustomUrl(null);
                                },
                            },
                        ]);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    React.useEffect(function () {
        window.addEventListener("focus", onFocus);
        //   window.addEventListener("blur", onBlur);
        // Calls onFocus when the window first loads
        onFocus();
        // Specify how to clean up after this effect:
        return function () {
            window.removeEventListener("focus", onFocus);
            //  window.removeEventListener("blur", onBlur);
        };
    }, []);
    var projectRelativeBaseFolderPath = isFolder
        ? actualProjectRelativeFilePath
        : getFolderJs(actualProjectRelativeFilePath);
    var filename = isFolder
        ? undefined
        : getFileOrFolderName(actualProjectRelativeFilePath);
    var thePrompts = isFolder
        ? (contextualPromptsObject === null || contextualPromptsObject === void 0 ? void 0 : contextualPromptsObject.folderContextualPrompts) || []
        : (contextualPromptsObject === null || contextualPromptsObject === void 0 ? void 0 : contextualPromptsObject.pageContextualPrompts) || [];
    var fileContextualPromptResults = contextualPromptResults === null || contextualPromptResults === void 0 ? void 0 : contextualPromptResults.filter(function (x) { return !x.selectionString; });
    var selectionContextualPromptResults = contextualPromptResults === null || contextualPromptResults === void 0 ? void 0 : contextualPromptResults.filter(function (x) { return !!x.selectionString; });
    var variantResult = useVariantResult(contextualPromptResults);
    // const fileType =
    //   fileTypePerExtension[
    //     getExtension(
    //       props.projectRelativeFilePath
    //     ) as keyof typeof fileTypePerExtension
    //   ] || undefined;
    // NB: this doesn't allow inline links so we cannot use this type of color highlihgting...
    var codeblockWrappedMarkdown = (variantResult === null || variantResult === void 0 ? void 0 : variantResult.resultText)
        ? variantResult === null || variantResult === void 0 ? void 0 : variantResult.resultText
        : // : fileType === "code"
            // ? `\`\`\`tsx\n${markdown}\n\`\`\``
            // : fileType === "data"
            // ? `\`\`\`json\n${markdown}\n\`\`\``
            markdown;
    var contentString = codeblockWrappedMarkdown
        ? codeblockWrappedMarkdown
        : !canSeeContent && unauthorizedWarningMessage
            ? unauthorizedWarningMessage
            : props.notFound
                ? props.notFoundReason || "Not found"
                : "No content";
    var markdownParse = mdToJsonParse(contentString);
    var folderPath = isFolder ? queryPath : getFolderJs(queryPath);
    var markdownContentConfig = {
        fileContextualPromptResults: fileContextualPromptResults,
        selectionContextualPromptResults: selectionContextualPromptResults,
        projectRelativeBaseFolderPath: projectRelativeBaseFolderPath,
        projectRelativeMarkdownFilePath: actualProjectRelativeFilePath,
        disableSelectionContextMenu: true,
        selectionPrompts: contextualPromptsObject === null || contextualPromptsObject === void 0 ? void 0 : contextualPromptsObject.selectionContextualPrompts,
    };
    var renderEditContent = function () {
        return (React.createElement(Div, { className: "flex flex-1 flex-col lg:h-full lg:overflow-y-scroll" },
            React.createElement(FileActions, { projectRelativeFilePath: actualProjectRelativeFilePath, basePath: basePath, navigation: navigation }),
            actualProjectRelativeFilePath ? renderFileWriter() : null));
    };
    var renderPage = function () {
        var _a;
        return (React.createElement(Div, { className: "flex flex-1 flex-col" },
            React.createElement(FileActions, { projectRelativeFilePath: actualProjectRelativeFilePath, basePath: basePath, navigation: navigation }),
            sidebarHidden ? (React.createElement(Div, { className: "max-lg:hidden lg:block flex justify-end" },
                React.createElement(ClickableIcon, { emoji: "<<", onClick: function () { return setSidebarHidden(false); } }))) : null,
            React.createElement(VariantSelector, { projectRelativeFilePath: actualProjectRelativeFilePath, folderPath: folderPath, isFolder: isFolder, filename: filename, contextualPromptResults: fileContextualPromptResults }),
            React.createElement(Div, { className: "p-1" },
                React.createElement(MarkdownContent, { config: markdownContentConfig, content: contentString })),
            React.createElement(SelectionPrompts, { contentString: contentString, projectRelativeFilePath: actualProjectRelativeFilePath, selectionContextualPrompts: (_a = props.contextualPromptsObject) === null || _a === void 0 ? void 0 : _a.selectionContextualPrompts }),
            React.createElement(Div, null,
                React.createElement(P, { className: "font-bold" }, "Apply a prompt on the whole file"),
                React.createElement(Div, { className: "flex flex-row flex-wrap" },
                    React.createElement(NavButton, { title: "\uD83C\uDFA4 Speak", onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                alert === null || alert === void 0 ? void 0 : alert("Coming soon", "coming soon");
                                return [2 /*return*/];
                            });
                        }); } }),
                    isFolder ? null : (React.createElement(NavButton, { title: "\uD83D\uDD4A Free-form prompt", onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                            var question, name, realName, customPromptContent;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        question = prompt("What do you want to ask/prompt about this file?");
                                        if (!question || question === "") {
                                            return [2 /*return*/];
                                        }
                                        name = prompt("If we should add this prompt into the database, how should we call it? (leave empty if you don't want to save it)");
                                        realName = name === "" ? null : name;
                                        customPromptContent = "I am reading this file:\n\n```\n%context\n```\n\n".concat(question);
                                        return [4 /*yield*/, processPrompt({
                                                contextualContent: {
                                                    contextContent: contentString,
                                                    context_projectRelativeFilePath: actualProjectRelativeFilePath,
                                                },
                                                showPromptAlert: showPromptAlert,
                                                customPromptContent: customPromptContent,
                                                saveNewPromptWithName: realName,
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); } })),
                    thePrompts.map(function (prompt) {
                        return (React.createElement(PromptButton, { key: "prompt".concat(prompt.id), item: prompt, markdown: markdown, projectRelativeFilePath: actualProjectRelativeFilePath }));
                    }))),
            isFolder && admin.isAdminActive ? (React.createElement(Div, null,
                "Execute for all files",
                React.createElement(Div, { className: "flex flex-row flex-wrap" }, contextualPromptsObject === null || contextualPromptsObject === void 0 ? void 0 : contextualPromptsObject.pageContextualPrompts.map(function (prompt) {
                    return (React.createElement(NavButton, { onClick: function () {
                            alert === null || alert === void 0 ? void 0 : alert("Not implemented yet", "Execute a certain prompt for all files in a folder, recursively. Should not show the result immediately because these things should be queued and the result is too big to show immediately. There should be settings before you execute all prompts: recursively nested folders? how fast should it be executed? Which model? Etc.");
                        }, title: prompt.title || prompt.name }));
                })))) : null,
            React.createElement(Div, { className: "pt-4 pb-12" },
                React.createElement(MarkdownContent, { content: promo, config: {} }))));
    };
    var variantsOnLg = !fileContextualPromptResults ||
        sidebarHidden ||
        !fileContextualPromptResults.length ? null : (React.createElement(Div, { className: "lg:block max-lg:hidden lg:w-[280px] 2xl:w-[400px] lg:h-full lg:overflow-y-scroll" },
        React.createElement(Div, { className: "flex flex-row ml-3" },
            React.createElement(ClickableIcon, { emoji: "\u2573", onClick: function () { return setSidebarHidden(true); } }),
            React.createElement(P, { className: "ml-2 font-bold" }, "File Prompt Results")), fileContextualPromptResults === null || fileContextualPromptResults === void 0 ? void 0 :
        fileContextualPromptResults.map(function (result) {
            if (!result.resultText)
                return null;
            return (React.createElement(Div, { className: "m-2 p-2 bg-gray-100 dark:bg-slate-800 rounded-lg" },
                React.createElement(Div, { className: "w-full flex justify-between" },
                    React.createElement(P, { className: "font-bold" }, result.contextualPromptSlug),
                    React.createElement(ClickableIcon, { emoji: "\uD83D\uDC40", onClick: function () {
                            var query = {
                                queryPath: router.query.queryPath,
                                variant: result.contextualPromptSlug,
                            };
                            router.push({ query: query }, undefined, { shallow: true });
                        } })),
                React.createElement(MarkdownContent, { config: markdownContentConfig, content: result.resultText })));
        })));
    return true ? (React.createElement(MarkdownParsePresentation, { markdownParse: markdownParse, projectRelativeBaseFolderPath: projectRelativeBaseFolderPath || "/", projectRelativeMarkdownFilePath: actualProjectRelativeFilePath || "/" })) : (React.createElement(Div, { className: "lg:flex lg:flex-row h-full" },
        React.createElement(Menu, { notFound: notFound, projectRelativeFilePath: actualProjectRelativeFilePath, folderPath: folderPath, filename: filename, isFolder: isFolder, navigation: navigation, contextualPromptsObject: contextualPromptsObject, fileContextualPromptResults: fileContextualPromptResults, selectionContextualPromptResults: selectionContextualPromptResults, thePrompts: thePrompts }),
        React.createElement("div", { className: "flex flex-col flex-1 lg:h-full lg:overflow-y-scroll" },
            React.createElement(Tabs, { tabs: [
                    { emoji: "🪄", title: "Generate", renderTab: renderPage },
                    {
                        emoji: "🛝",
                        title: "Slides",
                        renderTab: function () { return (React.createElement(MarkdownParsePresentation, { markdownParse: markdownParse, projectRelativeBaseFolderPath: projectRelativeBaseFolderPath || "/", projectRelativeMarkdownFilePath: actualProjectRelativeFilePath || "/" })); },
                    },
                    { emoji: "✏️", title: "Write", renderTab: renderEditContent },
                ], title: queryPath.split("?")[0] })),
        variantsOnLg));
};
//# sourceMappingURL=ReaderPage.js.map