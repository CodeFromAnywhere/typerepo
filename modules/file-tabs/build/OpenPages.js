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
exports.OpenPages = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var model_types_1 = require("model-types");
var react_1 = require("react");
var react_with_native_2 = require("react-with-native");
var react_with_native_alert_1 = require("react-with-native-alert");
var react_with_native_router_1 = require("react-with-native-router");
var hotkeys_1 = require("hotkeys");
var file_icons_1 = require("file-icons");
// @ts-ignore
var AiOutlineClose_svg_1 = __importDefault(require("../assets/AiOutlineClose.svg"));
// @ts-ignore
var BsPin_svg_1 = __importDefault(require("../assets/BsPin.svg"));
var next_a_link_1 = require("next-a-link");
var next_paths_1 = require("next-paths");
var getActivePage_1 = require("./getActivePage");
var getOpenPageUrl_1 = require("./getOpenPageUrl");
var renderIcon_1 = require("./renderIcon");
var OpenPages = function (props) {
    var openPagesStore = props.openPagesStore, pagesObject = props.pagesObject;
    var router = (0, react_with_native_router_1.useRouter)();
    var query = router.query;
    var alert = (0, react_with_native_alert_1.useAlert)();
    var fullPath = (0, next_paths_1.usePath)().fullPath;
    var _a = (0, react_1.useState)(true), showOpenPages = _a[0], setShowOpenPages = _a[1];
    var openPages = openPagesStore[0], setOpenPages = openPagesStore[1];
    var currentOpenPage = {
        page: (0, getActivePage_1.getActivePage)(router.pathname, pagesObject),
        query: query,
        lastOpenedAt: 0,
        temporary: true,
        /*** NB: id isn't correct */
        id: (0, model_types_1.generateId)(),
    };
    var already = openPages.find(function (x) {
        var url = (0, getOpenPageUrl_1.getOpenPageUrl)(x, pagesObject);
        var currentUrl = router.asPath.slice(1);
        return url === currentUrl;
    });
    var allOpenPages = !already && router.asPath !== "/"
        ? openPages.concat(currentOpenPage)
        : openPages;
    (0, hotkeys_1.useHotKey)([openPages, already, currentOpenPage], function (_a) {
        var altKey = _a.altKey, code = _a.code, shiftKey = _a.shiftKey;
        // Alt + N: new file
        if (altKey && code === "KeyN") {
            goToOpenPage(undefined);
        }
        // `alt+o` change viewmode for files: hidden or wrapped
        if (altKey && code === "KeyO") {
            setShowOpenPages(function (value) { return !value; });
        }
        // `alt(+shift)+tab` go to next/previous open page
        if (altKey && code === "Tab") {
            if (shiftKey) {
                alert === null || alert === void 0 ? void 0 : alert("Previous page");
            }
            else {
                alert === null || alert === void 0 ? void 0 : alert("Next page");
            }
        }
        // close current page
        if (altKey && code === "KeyW") {
            closeOpenPage(currentOpenPage, true);
        }
    });
    var goToOpenPage = function (openPage) {
        if (openPage) {
            router.push((0, getOpenPageUrl_1.getOpenPageUrl)(openPage, pagesObject));
        }
        else {
            router.push("/");
        }
    };
    var closeOpenPage = function (openPage, isActive) {
        var newOpenPages = openPages.filter(function (x) {
            return x.id === openPage.id ? false : true;
        });
        setOpenPages(newOpenPages);
        // if you were there, go to another page that's open
        if (isActive) {
            var anotherPage = newOpenPages[0];
            goToOpenPage(anotherPage);
        }
    };
    var renderOpenPage = function (openPage, i) {
        var type = (0, file_icons_1.getFileType)((0, getOpenPageUrl_1.getOpenPageUrl)(openPage, pagesObject));
        var typeIcon = file_icons_1.typeIcons[type];
        var isActive = (0, getOpenPageUrl_1.getOpenPageUrl)(openPage, pagesObject) === fullPath;
        var title = openPage.page === "index"
            ? "".concat(typeIcon, " ").concat((0, next_paths_1.getLastPathsChunk)(openPage.query.paths))
            : openPage.page === "menu"
                ? "📁"
                : "?";
        var clickableIcons = [
            {
                visible: openPage.pinned,
                svgSrc: BsPin_svg_1.default,
                // unpin
                onClick: function (e) {
                    var newOpenPages = openPages.map(function (x) {
                        return x.id === openPage.id ? __assign(__assign({}, x), { pinned: false }) : x;
                    });
                    setOpenPages(newOpenPages);
                },
            },
            {
                visible: !openPage.pinned,
                svgSrc: AiOutlineClose_svg_1.default,
                // close
                onClick: function (e) {
                    e.stopPropagation();
                    closeOpenPage(openPage, isActive);
                },
            },
        ];
        return ((0, jsx_runtime_1.jsxs)(react_with_native_2.Div, __assign({ className: "m-0.5 flex flex-row items-center border rounded-md border-gray-900 ".concat(isActive
                ? "light:bg-gray-50 dark:bg-gray-900"
                : "light:bg-gray-200 dark:bg-gray-700") }, { children: [(0, jsx_runtime_1.jsx)(next_a_link_1.ALink, __assign({ onDoubleClick: function () {
                        if (openPage.temporary) {
                            var thisOpenPageNotTemporary = __assign(__assign({}, openPage), { temporary: false });
                            setOpenPages(openPages.concat(thisOpenPageNotTemporary));
                        }
                    }, onContextMenu: function (e) {
                        e.preventDefault();
                        //  pin/unpin
                        var newOpenPages = openPages.map(function (x) {
                            return x.id === openPage.id ? __assign(__assign({}, x), { pinned: !x.pinned }) : x;
                        });
                        setOpenPages(newOpenPages);
                    }, href: (0, getOpenPageUrl_1.getOpenPageUrl)(openPage, pagesObject) }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "".concat(openPage.temporary
                            ? "italic text-black dark:text-gray-200"
                            : "text-black dark:text-gray-200") }, { children: title })) }), "p".concat(i)), clickableIcons.filter(function (x) { return x.visible; }).map(renderIcon_1.renderIcon)] }), "openPage".concat(i)));
    };
    return showOpenPages ? ((0, jsx_runtime_1.jsx)(react_with_native_2.Div, __assign({ className: "bg-gray-100 dark:bg-gray-900" }, { children: (0, jsx_runtime_1.jsx)(react_with_native_2.Div, __assign({ className: "flex flex-row flex-wrap" }, { children: allOpenPages.map(renderOpenPage) })) }))) : null;
};
exports.OpenPages = OpenPages;
//# sourceMappingURL=OpenPages.js.map