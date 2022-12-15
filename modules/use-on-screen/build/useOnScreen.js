"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOnScreen = void 0;
var react_1 = require("react");
/**
 * checks wheter or not a certain element is in the browsers screen view, or not.
 */
function useOnScreen(ref) {
    var _a = (0, react_1.useState)(false), isIntersecting = _a[0], setIntersecting = _a[1];
    var observer = typeof window === "undefined"
        ? null
        : new IntersectionObserver(function (_a) {
            var entry = _a[0];
            return setIntersecting(entry.isIntersecting);
        });
    (0, react_1.useEffect)(function () {
        if (observer) {
            if (ref.current) {
                observer === null || observer === void 0 ? void 0 : observer.observe(ref.current);
            }
            // Remove the observer as soon as the component is unmounted
            return function () {
                observer === null || observer === void 0 ? void 0 : observer.disconnect();
            };
        }
    }, [observer]);
    return isIntersecting;
}
exports.useOnScreen = useOnScreen;
//# sourceMappingURL=useOnScreen.js.map