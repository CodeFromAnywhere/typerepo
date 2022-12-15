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
exports.UpsertPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("api");
var fancy_loader_1 = require("fancy-loader");
var js_util_1 = require("js-util");
var react_with_native_1 = require("react-with-native");
var react_with_native_router_1 = require("react-with-native-router");
var schema_util_1 = require("schema-util");
var useInfiniteGetDbModel_1 = require("./crud/useInfiniteGetDbModel");
var UpsertForm_1 = require("./UpsertForm");
var useModelFromUrl_1 = require("./useModelFromUrl");
var UpsertPage = function () {
    var _a, _b, _c, _d, _e;
    var router = (0, react_with_native_router_1.useRouter)();
    var query = (0, js_util_1.mapValuesSync)(router.query, function (value) { return (0, js_util_1.takeFirst)(value); });
    var model = (0, useInfiniteGetDbModel_1.useInfiniteGetDbModel)();
    var allItems = (_b = (_a = model === null || model === void 0 ? void 0 : model.data) === null || _a === void 0 ? void 0 : _a.pages) === null || _b === void 0 ? void 0 : _b.map(function (x) { var _a; return (_a = x.result) === null || _a === void 0 ? void 0 : _a.data; }).flat().filter(js_util_1.notEmpty);
    var instance = allItems === null || allItems === void 0 ? void 0 : allItems.find(function (x) { return x.id === query.id; });
    var modelName = (0, useModelFromUrl_1.useModelFromUrl)();
    var metadataQuery = api_1.queries.useGetDbModelMetadata(modelName);
    var tsInterface = (0, js_util_1.destructureOptionalObject)((_c = metadataQuery.data) === null || _c === void 0 ? void 0 : _c.result).tsInterface;
    var simplifiedSchema = (_d = tsInterface === null || tsInterface === void 0 ? void 0 : tsInterface.type) === null || _d === void 0 ? void 0 : _d.simplifiedSchema;
    var referencableModelNames = (_e = (0, schema_util_1.getReferencableModels)(simplifiedSchema)) === null || _e === void 0 ? void 0 : _e.map(function (x) { return x.interfaceName; }).filter(js_util_1.notEmpty);
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ scroll: true, className: "py-4 px-8 lg:px-20" }, { children: model.isLoading ? ((0, jsx_runtime_1.jsx)(fancy_loader_1.FancyLoader, {})) : !simplifiedSchema || !modelName ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: "Something's wrong" })) : ((0, jsx_runtime_1.jsx)(UpsertForm_1.UpsertForm, { modelName: modelName, simplifiedSchema: simplifiedSchema, instance: instance, referencableModelNames: referencableModelNames })) })));
};
exports.UpsertPage = UpsertPage;
//# sourceMappingURL=UpsertPage.js.map