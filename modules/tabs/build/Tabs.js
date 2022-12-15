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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var labeled_button_1 = require("labeled-button");
var store_1 = require("./store");
/** Container for tabs */
var Tabs = function (props) {
    var title = props.title, tabs = props.tabs;
    var _a = (0, store_1.useStore)("tabs.currentTab"), currentTab = _a[0], setCurrentTab = _a[1];
    var buttons = tabs.map(function (_a, index) {
        var emoji = _a.emoji, title = _a.title;
        var isActive = currentTab === index;
        return {
            emoji: emoji,
            title: title,
            onClick: function () {
                setCurrentTab(index);
            },
            isActive: isActive,
        };
    });
    var activeTab = tabs.find(function (_, index) { return currentTab === index; });
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "p-2 m-2 border rounded-xl border-gray-500" }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row justify-between items-center" }, { children: [title ? (0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-3xl" }, { children: title })) : null, (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex flex-row gap-3" }, { children: buttons.map(labeled_button_1.LabeledButton) }))] })), activeTab === null || activeTab === void 0 ? void 0 : activeTab.renderTab()] })));
};
exports.Tabs = Tabs;
//# sourceMappingURL=Tabs.js.map