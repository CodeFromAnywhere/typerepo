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
exports.useContextMenu = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var ContextMenuItemComponent_1 = require("./ContextMenuItemComponent");
var useContextPopper_1 = require("./useContextPopper");
var react_1 = require("react");
/**
 * Use this if you want to render a context menu where the menu closes if you click one of the items.
 *
 * Optionally, you can create a custom renderer for it.
 *
 * id can be provided by the contextEvent.
 */
var useContextMenu = function (props) {
    var items = props.items, longTouchDurationMs = props.longTouchDurationMs, className = props.className, customItemRender = props.customItemRender, itemClassName = props.itemClassName;
    var _a = (0, useContextPopper_1.useContextPopper)({
        longTouchDurationMs: longTouchDurationMs,
        renderPopper: function (props) {
            var id = props.id;
            return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: 
                // className ||
                "bg-white dark:bg-gray-700 border border-black max-h-80 overflow-y-scroll" }, { children: items
                    .filter(function (x) { return (x.getIsEnabled ? x.getIsEnabled(id) : true); })
                    .map(function (contextMenuItem, index) {
                    if (customItemRender) {
                        return customItemRender(contextMenuItem, index, onClose, id);
                    }
                    return ((0, jsx_runtime_1.jsx)(ContextMenuItemComponent_1.ContextMenuItemComponent, { id: id, item: contextMenuItem, onClose: onClose, itemClassName: itemClassName }, "menuItem".concat(index)));
                }) })));
        },
    }), renderContextMenu = _a.renderContextPopper, openContextMenuProps = _a.openContextPopperProps, onClose = _a.onClose, isOpen = _a.isOpen;
    // ensure it only updates when you open the menu. this breaks the whole thing! lol.
    var result = (0, react_1.useMemo)(function () { return ({ renderContextMenu: renderContextMenu, openContextMenuProps: openContextMenuProps, onClose: onClose, isOpen: isOpen }); }, [isOpen]);
    return { renderContextMenu: renderContextMenu, openContextMenuProps: openContextMenuProps, onClose: onClose, isOpen: isOpen };
};
exports.useContextMenu = useContextMenu;
//# sourceMappingURL=useContextMenu.js.map