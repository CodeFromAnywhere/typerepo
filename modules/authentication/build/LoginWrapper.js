"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginWrapper = void 0;
var model_types_1 = require("model-types");
var react_1 = require("react");
var store_1 = require("./store");
/**
ensures the auth-token is set

 */
var LoginWrapper = function (props) {
    var children = props.children;
    var _a = (0, store_1.useStore)("api.authToken"), authToken = _a[0], setAuthToken = _a[1], hydrated = _a[2].hydrated;
    // Ensure there is an authToken
    (0, react_1.useEffect)(function () {
        if (!hydrated)
            return;
        if (!authToken || authToken.length === 0) {
            setAuthToken((0, model_types_1.generateId)());
        }
    }, [authToken, hydrated]);
    return children;
};
exports.LoginWrapper = LoginWrapper;
//# sourceMappingURL=LoginWrapper.js.map