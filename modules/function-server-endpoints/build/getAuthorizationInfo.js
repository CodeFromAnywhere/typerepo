"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthorizationInfo = void 0;
var js_util_1 = require("js-util");
/**
 * returns `AuthorizationInfo` for a device + function
 */
var getAuthorizationInfo = function (device, tsFunction, fn) {
    var _a;
    var everyPersonsGroups = ((_a = device === null || device === void 0 ? void 0 : device.persons) === null || _a === void 0 ? void 0 : _a.map(function (x) { return x.groups; }).flat().filter(js_util_1.notEmpty).filter((0, js_util_1.onlyUnique2)(function (a, b) { return a.slug === b.slug; }))) || [];
    // Accumulating all authorizations: the public authorization of the function, the manual person authorizations, and the group authorizations
    var authorizations = everyPersonsGroups
        .map(function (group) { return group.customAuthorizations; })
        .flat()
        .filter(js_util_1.notEmpty);
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
    var result = {
        hasAuthorization: isPublic || hasAuthorization,
        authorizations: authorizations,
        groups: everyPersonsGroups,
    };
    // console.log({ getAuthorizationInfo: result });
    return result;
};
exports.getAuthorizationInfo = getAuthorizationInfo;
//# sourceMappingURL=getAuthorizationInfo.js.map