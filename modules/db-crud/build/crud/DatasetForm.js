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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetForm = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("api");
var clickable_icon_1 = require("clickable-icon");
var datasetconfig_json_1 = __importDefault(require("code-types/db/ts-interfaces/datasetconfig.json"));
var cool_toast_1 = require("cool-toast");
var js_util_1 = require("js-util");
var react_with_native_1 = require("react-with-native");
var schema_util_1 = require("schema-util");
var simplified_schema_form_1 = require("simplified-schema-form");
var store_1 = require("../store");
var DatasetForm = function (props) {
    var _a, _b;
    var modelName = props.modelName;
    var _c = (0, store_1.useStore)("db-crud.datasetConfig"), datasetConfig = _c[0], setDatasetConfig = _c[1];
    var _d = (0, simplified_schema_form_1.useTsInterfaceForm)(datasetconfig_json_1.default, (datasetConfig === null || datasetConfig === void 0 ? void 0 : datasetConfig.id) || "noid", datasetConfig), form = _d[0], datasetConfigForm = _d[1];
    var addDatasetFromDatasetConfig = function () { return __awaiter(void 0, void 0, void 0, function () {
        var name, dataset, _a, isSuccessful, result, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!modelName)
                        return [2 /*return*/];
                    name = prompt("What should be the name?", "untitled");
                    dataset = __assign(__assign({}, datasetConfigForm), { modelName: modelName, name: name || "untitled" });
                    return [4 /*yield*/, api_1.api.upsertDbModel("Dataset", 
                        //@ts-ignore
                        dataset, true)];
                case 1:
                    _a = _b.sent(), isSuccessful = _a.isSuccessful, result = _a.result, message = _a.message;
                    metadataQuery.refetch();
                    (0, cool_toast_1.successToast)(isSuccessful && (result === null || result === void 0 ? void 0 : result.isSuccesful)
                        ? "Succesfully added"
                        : (result === null || result === void 0 ? void 0 : result.message) || message || "Error");
                    return [2 /*return*/];
            }
        });
    }); };
    var metadataQuery = api_1.queries.useGetDbModelMetadata(modelName);
    var _e = (0, js_util_1.destructureOptionalObject)((_a = metadataQuery.data) === null || _a === void 0 ? void 0 : _a.result), datasets = _e.datasets, tsInterface = _e.tsInterface;
    var removeDataset = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, isSuccessful, result, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(datasetConfig === null || datasetConfig === void 0 ? void 0 : datasetConfig.id))
                        return [2 /*return*/];
                    return [4 /*yield*/, api_1.api.deleteDbModel("Dataset", datasetConfig.id)];
                case 1:
                    _a = _b.sent(), isSuccessful = _a.isSuccessful, result = _a.result, message = _a.message;
                    // refetch datasets
                    metadataQuery.refetch();
                    setDatasetConfig(null);
                    (0, cool_toast_1.successToast)(isSuccessful && (result === null || result === void 0 ? void 0 : result.isSuccesful)
                        ? "Succesfully removed"
                        : (result === null || result === void 0 ? void 0 : result.message) || message || "Error");
                    return [2 /*return*/];
            }
        });
    }); };
    var properties = (0, schema_util_1.getProperties)((_b = tsInterface === null || tsInterface === void 0 ? void 0 : tsInterface.type) === null || _b === void 0 ? void 0 : _b.typeDefinition);
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "border rounded-md border-gray-700" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-3xl" }, { children: "Dataset Configuration" })), form, (0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\u2795 New dataset", onClick: addDatasetFromDatasetConfig }), (0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\uD83E\uDDEA Apply", onClick: function () {
                    return datasetConfigForm !== undefined
                        ? setDatasetConfig(datasetConfigForm)
                        : null;
                } }), (0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\uD83E\uDDF9 Clear dataset", onClick: function () { return setDatasetConfig(null); } }), (datasetConfig === null || datasetConfig === void 0 ? void 0 : datasetConfig.id) ? ((0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\uD83D\uDDD1 Remove dataset", onClick: removeDataset })) : null] })));
};
exports.DatasetForm = DatasetForm;
//# sourceMappingURL=DatasetForm.js.map