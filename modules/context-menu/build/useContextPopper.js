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
exports.useContextPopper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_popper_1 = require("react-popper");
var react_1 = require("react");
var useContext_1 = require("./useContext");
/**
 * Use this hook if you want to create your own custom render that opens on the right location once the `.onContextMenu` is fired.
 */
var useContextPopper = function (props) {
    var longTouchDurationMs = props.longTouchDurationMs;
    var _a = (0, react_1.useState)(null), contextEvent = _a[0], setContextEvent = _a[1];
    (0, react_1.useEffect)(function () {
        if (typeof window === "undefined")
            return;
        // Needed to make it go away when clicking outside of the popper, doesn't work for textarea though
        window.addEventListener("click", function () {
            setContextEvent(null);
        });
    }, []);
    var contextProps = (0, useContext_1.useContext)(function (contextEvent) {
        setContextEvent(contextEvent);
        console.log("callback called", props, contextEvent);
    }, { longTouchDurationMs: longTouchDurationMs });
    var virtualReference = (0, react_1.useMemo)(function () {
        if (!contextEvent) {
            //   console.log("NO context event,SHOULD NOT HAPPEN");
            return;
        }
        // console.log("YAY");
        // console.log({
        //   contextEvent,
        //   x: contextEvent?.clientX,
        //   y: contextEvent?.clientY,
        // });
        return {
            // This is going to create a virtual reference element
            getBoundingClientRect: function () {
                // console.log({ contextEvent });
                var clientRect = {
                    top: (contextEvent === null || contextEvent === void 0 ? void 0 : contextEvent.clientY) || 10,
                    left: (contextEvent === null || contextEvent === void 0 ? void 0 : contextEvent.clientX) || 10,
                    bottom: 0,
                    right: 0,
                    width: 0,
                    height: 0,
                    x: 0,
                    y: 0,
                    toJSON: function () {
                        return "";
                    },
                };
                return clientRect;
            },
        };
    }, [contextEvent]);
    var popperRef = (0, react_1.useRef)(null);
    var _b = (0, react_popper_1.usePopper)(virtualReference, popperRef.current, {
        strategy: "fixed",
        placement: "auto-start",
        modifiers: [{ name: "preventOverflow", enabled: false }],
    }), styles = _b.styles, attributes = _b.attributes;
    var renderContextPopper = function () {
        return virtualReference && contextEvent ? ((0, jsx_runtime_1.jsx)("div", __assign({ onClick: function (e) {
                // NB: needed to ensure it doesn't close due to the window.click
                e.stopPropagation();
            }, style: styles.popper }, attributes.popper, { children: props.renderPopper({ id: contextEvent.id }) }))) : null;
    };
    var openContextPopperProps = __assign(__assign({}, contextProps), { ref: popperRef });
    var onClose = function () { return setContextEvent(null); };
    return {
        openContextPopperProps: openContextPopperProps,
        renderContextPopper: renderContextPopper,
        onClose: onClose,
        isOpen: !!contextEvent,
    };
};
exports.useContextPopper = useContextPopper;
//# sourceMappingURL=useContextPopper.js.map