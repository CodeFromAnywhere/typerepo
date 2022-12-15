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
exports.SearchBar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var react_1 = require("react");
var store_1 = require("../store");
var SearchBar = function (props) {
    var initialValue = props.initialValue, placeholder = props.placeholder;
    var _a = (0, react_1.useState)(initialValue || ""), tempSearch = _a[0], setTempSearch = _a[1];
    var _b = (0, store_1.useStore)("db-crud.search"), search = _b[0], setSearch = _b[1];
    var go = function () {
        setSearch(tempSearch);
    };
    var clearSearch = function () { return setSearch(""); };
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "rounded-full border border-zinc-700 dark:border-zinc-300 p-1 px-3 text-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 bg-zinc-100 dark:bg-zinc-600 dark flex flex-row max-w-xl mx-4" }, { children: [search.length > 0 ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "cursor-pointer pr-2", onClick: function () {
                    setSearch("");
                    setTempSearch("");
                } }, { children: "\uD83D\uDDD1" }))) : null, (0, jsx_runtime_1.jsx)(react_with_native_1.Form, __assign({ onSubmit: function (e) {
                    e.preventDefault();
                    go();
                } }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.Input, { placeholder: placeholder || "Search", className: "flex flex-1 bg-transparent focus:outline-none", value: tempSearch, onChange: function (e) { return setTempSearch(e.target.value); } }) })), (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: tempSearch.length === 0 ? "cursor-default" : "cursor-pointer", onClick: go }, { children: "\uD83D\uDD0E" }))] })));
};
exports.SearchBar = SearchBar;
//# sourceMappingURL=SearchBar.js.map