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
exports.queries = void 0;
var convert_case_1 = require("convert-case");
var react_query_1 = require("react-query");
var js_util_1 = require("js-util");
/**
 * NB: this is the main reason why we have an `sdk-api-keys`
 */
var sdk_api_keys_1 = require("sdk-api-keys");
var api_1 = require("./api");
/**

This object contains a react-query `useQuery` hook for every api function

 */
exports.queries = (0, js_util_1.mergeObjectsArray)(sdk_api_keys_1.functionApiKeys
    .map(function (fnName) { return fnName; })
    .map(function (fnName) {
    var _a;
    var apiFn = api_1.api[fnName];
    var useQueryFunction = function () {
        var parameters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parameters[_i] = arguments[_i];
        }
        var queryResult = (0, react_query_1.useQuery)(__spreadArray([fnName], parameters, true), 
        // @ts-ignore
        function () { return apiFn.apply(void 0, parameters); }, { enabled: true, refetchOnWindowFocus: "always" });
        return queryResult;
    };
    var hookName = (0, convert_case_1.camelCase)("use-".concat(fnName));
    var objectPart = (_a = {}, _a[hookName] = useQueryFunction, _a);
    return objectPart;
}));
//# sourceMappingURL=queries.js.map