"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showStandardResponse = exports.infoToast = exports.warningToast = exports.errorToast = exports.successToast = void 0;
var react_with_native_notification_1 = require("react-with-native-notification");
var successToast = function (message) {
    (0, react_with_native_notification_1.toast)({
        title: "",
        body: message || "Done",
    }, { hideProgressBar: true, position: "bottom-right", type: "success" });
};
exports.successToast = successToast;
var errorToast = function (message) {
    (0, react_with_native_notification_1.toast)({
        title: "",
        body: message || "Something went wrong",
    }, { hideProgressBar: true, position: "bottom-right", type: "error" });
};
exports.errorToast = errorToast;
var warningToast = function (message) {
    (0, react_with_native_notification_1.toast)({
        title: "",
        body: message || "This is not a good idea",
    }, { hideProgressBar: true, position: "bottom-right", type: "warning" });
};
exports.warningToast = warningToast;
var infoToast = function (message) {
    (0, react_with_native_notification_1.toast)({
        title: "",
        body: message || "This is interesting",
    }, { hideProgressBar: true, position: "bottom-right", type: "info" });
};
exports.infoToast = infoToast;
/**
 * Useful to show if the api has a standard response
 */
var showStandardResponse = function (apiResult) {
    if (apiResult.errors) {
        console.log({ errors: apiResult.errors });
    }
    if (apiResult.isUnauthorized) {
        (0, exports.errorToast)(apiResult.message);
        return;
    }
    if (apiResult.isNotConnected) {
        (0, exports.warningToast)(apiResult.message || "Not connected");
        return;
    }
    if (!apiResult.isSuccessful) {
        (0, exports.errorToast)(apiResult.message || "Something went wrong");
        return;
    }
    if (!apiResult.result) {
        (0, exports.successToast)("Done");
        return;
    }
    if (!apiResult.result.isSuccessful) {
        (0, exports.errorToast)(apiResult.result.message || "Something went wrong");
        return;
    }
    (0, exports.successToast)(apiResult.result.message || "Done");
};
exports.showStandardResponse = showStandardResponse;
//# sourceMappingURL=cool-toast.js.map