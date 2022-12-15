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
exports.CrudTable = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("api");
var convert_case_1 = require("convert-case");
var js_util_1 = require("js-util");
var labeled_button_1 = require("labeled-button");
var name_conventions_1 = require("name-conventions");
var react_with_native_1 = require("react-with-native");
var react_with_native_alert_1 = require("react-with-native-alert");
var react_with_native_table_1 = require("react-with-native-table");
var schema_util_1 = require("schema-util");
var getPropertiesDataParameterNames_1 = require("./getPropertiesDataParameterNames");
var deleteDbModel = api_1.api.deleteDbModel;
var CrudTable = function (props) {
    var _a;
    var tsInterface = props.tsInterface, onEndReached = props.onEndReached, data = props.data, highlight = props.highlight, actions = props.actions;
    var alert = (0, react_with_native_alert_1.useAlert)();
    var properties = (0, schema_util_1.getProperties)((_a = tsInterface === null || tsInterface === void 0 ? void 0 : tsInterface.type) === null || _a === void 0 ? void 0 : _a.typeDefinition);
    var dataParameterNames = (0, getPropertiesDataParameterNames_1.getPropertiesDataParameterNames)(properties);
    var columns = properties
        // Omit referenced data
        .filter(function (property) { return !dataParameterNames.includes(property.name); })
        .map(function (property) {
        var referenceParameterInfo = (0, schema_util_1.getReferenceParameterInfo)(property.name);
        var descriptor = referenceParameterInfo.descriptor, interfaceName = referenceParameterInfo.interfaceName, isReferenceMultipleParameter = referenceParameterInfo.isReferenceMultipleParameter, isReferenceParameter = referenceParameterInfo.isReferenceParameter, isReferenceSingleParameter = referenceParameterInfo.isReferenceSingleParameter;
        var isBackendAssetParameter = (0, name_conventions_1.getAssetInputType)(property.name);
        var presentationType = isReferenceSingleParameter
            ? "referenceSingle"
            : isReferenceMultipleParameter
                ? "referenceMultiple"
                : isBackendAssetParameter
                    ? "backendAsset"
                    : "text";
        var name = isReferenceParameter && interfaceName
            ? descriptor
                ? (0, convert_case_1.humanCase)("".concat(descriptor, "-").concat(interfaceName))
                : (0, convert_case_1.humanCase)(interfaceName)
            : (0, convert_case_1.humanCase)(property.name);
        var column = {
            name: name,
            objectParameterKey: property.name,
            presentationType: presentationType,
        };
        return column;
    })
        .filter(js_util_1.notEmpty);
    return ((0, jsx_runtime_1.jsx)(react_with_native_table_1.Table, { data: data, onEndReached: onEndReached, shouldHighlightItem: function (item) {
            return !!((highlight.id && item.id === highlight.id) ||
                (highlight.slug && item.slug === highlight.slug));
        }, columns: columns, renderExtraColumns: function (item) {
            return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex flex-row" }, { children: item
                    ? actions.map(function (action) {
                        return ((0, jsx_runtime_1.jsx)(labeled_button_1.LabeledButton, { onClick: function () { return action.action(item); }, title: action.name, emoji: action.emoji, size: "small" }));
                    })
                    : null })));
        }, extraColumnsAtStart: true }));
};
exports.CrudTable = CrudTable;
//# sourceMappingURL=CrudTable.js.map