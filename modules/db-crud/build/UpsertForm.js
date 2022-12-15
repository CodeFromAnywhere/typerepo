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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertForm = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var simplified_schema_form_1 = require("simplified-schema-form");
var react_with_native_router_1 = require("react-with-native-router");
var model_types_1 = require("model-types");
var SimplifiedSchemaFormDebug_1 = require("./SimplifiedSchemaFormDebug");
var clickable_icon_1 = require("clickable-icon");
var react_with_native_alert_1 = require("react-with-native-alert");
var api_1 = require("api");
var IndexInstanceContainer_1 = require("./IndexInstanceContainer");
var convert_case_1 = require("convert-case");
var useModelFromUrl_1 = require("./useModelFromUrl");
var useInfiniteGetDbModel_1 = require("./crud/useInfiniteGetDbModel");
var upsertDbModel = api_1.api.upsertDbModel;
/**
TODO: Provide all the fetched data with `hasMore` and `fetchAll` to the `SimplifiedJsonForm`
*/
var UpsertForm = function (props) {
    var _a, _b;
    var instance = props.instance, simplifiedSchema = props.simplifiedSchema, referencableModelNames = props.referencableModelNames, modelName = props.modelName;
    var router = (0, react_with_native_router_1.useRouter)();
    var alert = (0, react_with_native_alert_1.useAlert)();
    var _c = (0, react_1.useState)(false), debug = _c[0], setDebug = _c[1];
    var id = (0, react_1.useState)((0, model_types_1.generateId)())[0];
    var _d = (0, react_1.useState)(false), loading = _d[0], setLoading = _d[1];
    var _e = (0, react_1.useState)(instance), body = _e[0], setBody = _e[1];
    var _f = (0, react_1.useState)(), result = _f[0], setResult = _f[1];
    var modelFromUrl = (0, useModelFromUrl_1.useModelFromUrl)();
    var metadataQuery = api_1.queries.useGetDbModelMetadata(modelFromUrl);
    var model = (0, useInfiniteGetDbModel_1.useInfiniteGetDbModel)();
    var projectRelativeStorageFilePath = (_b = (_a = metadataQuery.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.projectRelativeStorageFilePath;
    // NB: all items that this model has can be referenced to in other forms also need to refresh
    var getReferencableModelDataQuery = api_1.queries.useGetReferencableModelData(modelFromUrl);
    var referencableModelData = (0, simplified_schema_form_1.useReferencableModelData)(simplifiedSchema);
    var parameters = [
        {
            name: "",
            required: true,
            simplifiedSchema: simplifiedSchema,
            renderButtons: function () { return (0, jsx_runtime_1.jsx)(react_with_native_1.Span, {}); },
            isDbModel: true,
        },
    ];
    var values = [body];
    var onSubmitForm = function () {
        if (!modelFromUrl)
            return;
        setLoading(true);
        upsertDbModel(modelFromUrl, body)
            .then(function (result) { return __awaiter(void 0, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                if (!((_a = result.result) === null || _a === void 0 ? void 0 : _a.isSuccesful)) {
                    // If the upsert fails for some reason, this should be made clear
                    alert === null || alert === void 0 ? void 0 : alert("Error", ((_b = result.result) === null || _b === void 0 ? void 0 : _b.message) || result.message);
                    setLoading(false);
                }
                else {
                    // NB: we are not waiting for this, we're going back immediately, assuming that there will be loading indicators
                    getReferencableModelDataQuery.refetch();
                    model.refetch();
                    setLoading(false);
                    router.back();
                }
                return [2 /*return*/];
            });
        }); })
            .catch(function (e) {
            setLoading(false);
            setResult(e);
        });
    };
    var explainButton = {
        onClick: function () {
            setDebug(!debug);
        },
        title: "Explain",
        emoji: "🧐",
    };
    var buttons = [explainButton];
    // console.log({ referencableModelData });
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: (0, jsx_runtime_1.jsx)(IndexInstanceContainer_1.IndexInstanceContainer, __assign({ buttons: buttons, title: (0, convert_case_1.humanCase)(modelFromUrl || "") }, { children: simplifiedSchema ? ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(simplified_schema_form_1.FormContainer, __assign({ onSubmit: onSubmitForm, isLoading: loading }, { children: (0, jsx_runtime_1.jsx)(simplified_schema_form_1.SimplifiedSchemaForm, { modelName: modelName, itemNameOrId: (body === null || body === void 0 ? void 0 : body.name) || (body === null || body === void 0 ? void 0 : body.id), parameterNameStack: undefined, projectRelativeStorageFilePath: projectRelativeStorageFilePath, id: id, parameters: parameters, values: values, onChange: function (values) { return setBody(values[0]); }, referencableModelData: referencableModelData, isDebug: debug }) })), (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "mt-6" }, { children: (0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\u274C Go back", onClick: function () { return router.back(); } }) })), result ? (0, jsx_runtime_1.jsx)(react_with_native_1.P, { children: JSON.stringify(result) }) : null, debug ? ((0, jsx_runtime_1.jsx)(SimplifiedSchemaFormDebug_1.SimplifiedSchemaFormDebug, { parameters: parameters, values: values })) : null] })) : null })) }));
};
exports.UpsertForm = UpsertForm;
//# sourceMappingURL=UpsertForm.js.map