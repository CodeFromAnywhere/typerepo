"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHasAuthorization = void 0;
var js_util_1 = require("js-util");
var getHasAuthorization = function (device, tsFunction) {
    var _a, _b, _c;
    var publicAuthorization = {
        authorizations: (tsFunction === null || tsFunction === void 0 ? void 0 : tsFunction.publicAuthorization) || [],
        type: "TsFunction",
        value: tsFunction.id,
    };
    // Accumulating all authorizations: the public authorization of the function, the manual person authorizations, and the group authorizations
    var authorizations = __spreadArray(__spreadArray([
        publicAuthorization
    ], (((_a = device === null || device === void 0 ? void 0 : device.persons) === null || _a === void 0 ? void 0 : _a.map(function (x) { return x.authorizations; }).flat()) || []), true), (((_c = (_b = device === null || device === void 0 ? void 0 : device.persons) === null || _b === void 0 ? void 0 : _b.map(function (x) { return x.groups; }).flat().filter(js_util_1.notEmpty)) === null || _c === void 0 ? void 0 : _c.map(function (group) { return group.authorizations; }).flat()) || []), true);
    var hasAuthorization = !!authorizations.find(function (auth) {
        return !auth.authorizations.includes("execute")
            ? false
            : auth.type === "TsFunction"
                ? auth.value === tsFunction.name
                : auth.type === "operationName"
                    ? auth.value === (tsFunction === null || tsFunction === void 0 ? void 0 : tsFunction.operationName)
                    : false;
    });
    return hasAuthorization;
};
exports.getHasAuthorization = getHasAuthorization;
//# sourceMappingURL=getHasAuthorization.js.map