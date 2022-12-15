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
exports.Tooltip = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var core_1 = require("@popperjs/core");
var Tooltip = function (props) {
    var _a = (0, react_1.useState)(false), hoverLink = _a[0], setHoverLink = _a[1];
    var _b = (0, react_1.useState)(null), tooltipTimeout = _b[0], setTooltipTimeout = _b[1];
    var _c = (0, react_1.useState)(null), linkTimeout = _c[0], setLinkTimeout = _c[1];
    var btnRef = (0, react_1.createRef)();
    var popoverRef = (0, react_1.createRef)();
    var _d = (0, react_1.useState)(false), hoverTooltip = _d[0], setHoverTooltip = _d[1];
    var onEnterLink = function () {
        if (!btnRef.current || !popoverRef.current)
            return;
        (0, core_1.createPopper)(btnRef.current, popoverRef.current, {
            placement: props.placement || "auto",
        });
        setHoverLink(true);
        if (linkTimeout) {
            clearTimeout(linkTimeout);
        }
    };
    var onLeaveLink = function () {
        var timeout = setTimeout(function () { return setHoverLink(false); }, 500);
        setLinkTimeout(timeout);
    };
    var popoverShow = hoverTooltip || hoverLink;
    var onEnterTooltip = function () {
        if (tooltipTimeout) {
            clearTimeout(tooltipTimeout);
        }
        setHoverTooltip(true);
    };
    var onLeaveTooltip = function () {
        var timeout = setTimeout(function () { return setHoverTooltip(false); }, 500);
        setTooltipTimeout(timeout);
    };
    return ((0, jsx_runtime_1.jsxs)("span", { children: [props.tooltip ? ((0, jsx_runtime_1.jsx)("span", __assign({ onMouseEnter: onEnterTooltip, onMouseLeave: onLeaveTooltip, className: "mb-8 dark:text-gray-100 text-black bg-slate-200 dark:bg-slate-800 p-2 z-30 text-sm max-w-xs break-words rounded-md".concat(popoverShow ? " block" : " hidden"), ref: popoverRef }, { children: props.tooltip }))) : null, (0, jsx_runtime_1.jsx)("span", __assign({ onMouseEnter: onEnterLink, onMouseLeave: onLeaveLink, ref: btnRef }, { children: props.children }))] }));
};
exports.Tooltip = Tooltip;
//# sourceMappingURL=Tooltip.js.map