"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemModelLocation = exports.makeStoringItem = void 0;
var js_util_1 = require("js-util");
var schema_util_1 = require("schema-util");
/**
 * Three things need to happen in order to store an item
 *
 * 1) keys that can be inferred from the file path are omitted
 * 2) referenced data is omitted
 * 3) calculated data is omitted
 */
var makeStoringItem = function (item) {
    // remove location related stuff
    var operationName = item.operationName, projectRelativePath = item.projectRelativePath, operationRelativePath = item.operationRelativePath, rest = __rest(item, ["operationName", "projectRelativePath", "operationRelativePath"]);
    // remove referenced model data
    var dataParameterNames = (0, schema_util_1.getDataParameterNames)(item);
    var restWithoutDataParameters = (0, js_util_1.removeOptionalKeysFromObject)(rest, dataParameterNames);
    // remove `.xyzCalculated` keys
    var calculatedKeys = Object.keys(restWithoutDataParameters).filter(function (key) {
        return key.endsWith("Calculated");
    });
    var finalItem = (0, js_util_1.removeOptionalKeysFromObject)(restWithoutDataParameters, calculatedKeys);
    return finalItem;
};
exports.makeStoringItem = makeStoringItem;
var getItemModelLocation = function (item) {
    var operationName = item.operationName, projectRelativePath = item.projectRelativePath, operationRelativePath = item.operationRelativePath, rest = __rest(item, ["operationName", "projectRelativePath", "operationRelativePath"]);
    return { operationName: operationName, projectRelativePath: projectRelativePath, operationRelativePath: operationRelativePath };
};
exports.getItemModelLocation = getItemModelLocation;
//# sourceMappingURL=storing-items.js.map