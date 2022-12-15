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
exports.FormContainer = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var big_button_1 = require("big-button");
/**
 A `FormContainer` is a simple container that can wrap your `SimplifiedSchemaForm` to give it a button that also sends when hitting enter on your keyboard. To achieve this, a `<form>` is created in this component.

 Besides this, you can also add some texts, but styling is not possible to change for this component at this point (except for the form className). If you want a completely different style, it's probably better to build it yourself.

 NB: TODO: There is a bug now where onSubmit gets called too often. Not sure how to fix this. Because of this, I'll simply remove the onSubmit action in the onsubmit for now, and prevent the default.
 */
var FormContainer = function (props) {
    var className = props.className, onSubmit = props.onSubmit, isLoading = props.isLoading, title = props.title, children = props.children, submitButtonText = props.submitButtonText;
    return ((0, jsx_runtime_1.jsxs)("form", __assign({ autoComplete: "off", className: className, onSubmit: function (e) {
            e.preventDefault();
            // onSubmit();
        } }, { children: [title ? (0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-3xl" }, { children: title })) : null, children, (0, jsx_runtime_1.jsx)("button", __assign({ type: "submit" }, { children: (0, jsx_runtime_1.jsx)(big_button_1.BigButton, { isLoading: isLoading, onClick: onSubmit, title: submitButtonText || "Submit" }) }))] })));
};
exports.FormContainer = FormContainer;
//# sourceMappingURL=FormContainer.js.map