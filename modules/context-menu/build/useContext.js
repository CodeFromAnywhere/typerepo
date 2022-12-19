"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useContext = void 0;
var react_1 = require("react");
/**
 * Use this if you want to create a completely custom behavior from a context action. On top of the default `.onContextMenu` behavior, this hook enables the possibility for a custom hold duration on mobile.
 */
var useContext = function (
/**
 * The callback that activates whenever you right-click or long-press
 */
callback, config) {
    var _a = (0, react_1.useState)(null), timeoutRef = _a[0], setTimeoutRef = _a[1];
    var openTouchMenu = function (event) {
        var _a;
        var touch = event.touches.item(event.touches.length - 1);
        var clientX = touch.clientX, clientY = touch.clientY, screenX = touch.screenX, screenY = touch.screenY;
        var id = (_a = event.currentTarget) === null || _a === void 0 ? void 0 : _a.id;
        callback({ clientX: clientX, clientY: clientY, screenX: screenX, screenY: screenY, id: id });
        setTimeoutRef(null);
    };
    var openContextMenu = function (event) {
        var _a;
        var clientX = event.clientX, clientY = event.clientY, screenX = event.screenX, screenY = event.screenY;
        var id = (_a = event.currentTarget) === null || _a === void 0 ? void 0 : _a.id;
        callback({ clientX: clientX, clientY: clientY, screenX: screenX, screenY: screenY, id: id });
    };
    var onTouchStart = function (event) {
        // Only allow for a single timeout
        if (timeoutRef)
            return;
        if (!(config === null || config === void 0 ? void 0 : config.longTouchDurationMs))
            return;
        var timeout = setTimeout(function () { return openTouchMenu(event); }, config.longTouchDurationMs);
        setTimeoutRef(timeout);
    };
    /**
     * Required for ensuring that you don't close  the menu immediately when opening it on mobile, because a click-event is also fired there
     */
    var onClick = function (mouseEvent) {
        // this also makes it impossible to close big markdown files!
        // mouseEvent.stopPropagation();
    };
    var onTouchEnd = function () {
        if (timeoutRef) {
            clearTimeout(timeoutRef);
        }
    };
    var onContextMenu = function (event) {
        event.preventDefault();
        // NB: needed to stop it from opening anywhere above (mobile)
        event.stopPropagation();
        openContextMenu(event);
    };
    //
    var contextProps = {
        onContextMenu: onContextMenu,
        // onContextMenuCapture: (event: React.MouseEvent) => {
        //   event.preventDefault();
        //   event.stopPropagation();
        // },
        onTouchStart: onTouchStart,
        onTouchEnd: onTouchEnd,
        onClick: onClick,
        style: {}, //userSelect: "none" as React.CSSProperties["userSelect"]
    };
    return contextProps;
};
exports.useContext = useContext;
//# sourceMappingURL=useContext.js.map