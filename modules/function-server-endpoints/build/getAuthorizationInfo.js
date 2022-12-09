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
exports.getAuthorizationInfo = void 0;
var js_util_1 = require("js-util");
/**
 * returns `AuthorizationInfo` for a device + function
 */
var getAuthorizationInfo = function (device, tsFunction, fn) {
    var _a, _b;
    var everyPersonsGroups = ((_a = device === null || device === void 0 ? void 0 : device.persons) === null || _a === void 0 ? void 0 : _a.map(function (x) { return x.groups; }).flat().filter(js_util_1.notEmpty).filter((0, js_util_1.onlyUnique2)(function (a, b) { return a.slug === b.slug; }))) || [];
    var everyPersonsAuthorizations = ((_b = device === null || device === void 0 ? void 0 : device.persons) === null || _b === void 0 ? void 0 : _b.map(function (x) { return x.authorizations; }).flat()) || [];
    var customGroupAuthorizations = everyPersonsGroups
        .map(function (group) { return group.customAuthorizations; })
        .flat();
    // Accumulating all authorizations: the public authorization of the function, the manual person authorizations, and the group authorizations
    var authorizations = __spreadArray(__spreadArray([], everyPersonsAuthorizations, true), customGroupAuthorizations, true).filter(js_util_1.notEmpty);
    var hasAuthorization = !!authorizations.find(function (auth) {
        var authAppliesToThisFunction = auth.tsFunctionId === tsFunction.id ||
            auth.authorizedOperationName === (tsFunction === null || tsFunction === void 0 ? void 0 : tsFunction.operationName) ||
            (auth.authorizedProjectRelativePath &&
                tsFunction.projectRelativePath.startsWith(auth.authorizedProjectRelativePath));
        return authAppliesToThisFunction && auth.canExecute;
    });
    /**
     * Function might ne an `ApiFunction`
     */
    var isPublic = fn.isPublic;
    return {
        hasAuthorization: isPublic || hasAuthorization,
        authorizations: authorizations,
        groups: everyPersonsGroups,
    };
};
exports.getAuthorizationInfo = getAuthorizationInfo;
//# sourceMappingURL=getAuthorizationInfo.js.map