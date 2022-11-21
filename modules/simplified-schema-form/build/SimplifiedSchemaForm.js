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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimplifiedSchemaForm = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
// modules
var react_1 = require("react");
var name_conventions_1 = require("name-conventions");
var pluralize_1 = require("pluralize");
var writer_input_1 = require("writer-input");
var react_with_native_1 = require("react-with-native");
var convert_case_1 = require("convert-case");
var js_util_1 = require("js-util");
var react_with_native_form_inputs_1 = require("react-with-native-form-inputs");
var dynamic_1 = __importDefault(require("next/dynamic"));
var AssetInput = (0, dynamic_1.default)(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("react-with-native-form-asset-input")); })];
        case 1: return [2 /*return*/, (_a.sent()).AssetInput];
    }
}); }); }, { ssr: false });
var schema_util_1 = require("schema-util");
var name_conventions_2 = require("name-conventions");
// relative
var renderParameterTitle_1 = require("./renderParameterTitle");
var getReferencedModelDataItem_1 = require("./getReferencedModelDataItem");
var ObjectForm_1 = require("./ObjectForm");
var ArrayForm_1 = require("./ArrayForm");
var ReferenceInput_1 = require("./ReferenceInput");
var react_with_native_ui_1 = require("react-with-native-ui");
/**
Recursive component that renders a form for a SimplifiedSchema
 */
var SimplifiedSchemaForm = function (props) {
    var modelName = props.modelName, itemNameOrId = props.itemNameOrId, id = props.id, onChange = props.onChange, parameters = props.parameters, values = props.values, referencableModelData = props.referencableModelData, projectRelativeStorageFilePath = props.projectRelativeStorageFilePath, parameterNameStack = props.parameterNameStack, isDebug = props.isDebug;
    (0, react_1.useEffect)(function () {
        if (!Array.isArray(values)) {
            var allUndefined = parameters.map(function () { return undefined; });
            onChange(allUndefined);
        }
    }, []);
    if (!values)
        return null;
    /** helper function to change a single parameter */
    var onChangeParameter = function (index, value) {
        // only change the parameter we need to change
        var newValues = values.map(function (v, i) {
            return i === index ? value : v;
        });
        onChange(newValues);
    };
    var parameterNames = parameters.map(function (x) { return x.name; });
    // For every parameter we are going to return elements
    var elements = parameters
        .map(function (parameter, index) {
        var _a, _b, _c, _d, _e;
        if (!parameter.simplifiedSchema)
            return;
        var uniqueFieldId = "".concat(id, ".").concat(parameter.name);
        /**
         * values[index]
         */
        var parameterValue = values[index];
        var defaultInputFields = {
            uniqueFieldId: uniqueFieldId,
            fieldName: uniqueFieldId,
        };
        var assetInputType = (0, name_conventions_2.getAssetInputType)(parameter.name, (_a = parameter.simplifiedSchema) === null || _a === void 0 ? void 0 : _a.type);
        // console.log({
        //   parameter,
        //   assetInputType,
        //   projectRelativeStorageFilePath,
        // });
        if (assetInputType && projectRelativeStorageFilePath) {
            // Something like: [function-name]-[nested]-[property]-[item-name/id]
            var defaultAssetName = __spreadArray(__spreadArray([], (parameterNameStack || []), true), [
                (0, pluralize_1.singularize)(parameter.name),
                itemNameOrId,
            ], false).filter(js_util_1.notEmpty)
                .join("-");
            var assetInputExtra = {
                modelName: modelName,
                defaultAssetName: defaultAssetName,
                size: "lg",
                theme: "Outlined",
                projectRelativeReferencingFilePath: projectRelativeStorageFilePath,
                attachTokenToFilename: true,
                allowMultiple: assetInputType.isMultiple,
                inputTypes: 
                // NB: many things are omitted here since they're still a work in progress
                assetInputType.type === "asset"
                    ? undefined
                    : assetInputType.type === "audio"
                        ? ["recordAudio", "files"]
                        : assetInputType.type === "file"
                            ? ["files"]
                            : assetInputType.type === "image"
                                ? ["camera", "files"]
                                : assetInputType.type === "video"
                                    ? ["files", "recordScreen", "recordVideo"]
                                    : undefined,
            };
            return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, renderParameterTitle_1.renderParameterTitle)(parameter, isDebug), (0, jsx_runtime_1.jsx)(AssetInput, { value: parameterValue ? (0, js_util_1.makeArray)(parameterValue) : [], onChange: function (newValue) {
                            onChangeParameter(index, newValue);
                        }, extra: assetInputExtra, 
                        // parameter={parameter}
                        config: {}, fieldName: parameter.name, uniqueFieldId: parameter.name })] }, uniqueFieldId));
        }
        // First, let's see if the parametername is a reference parameter.
        var referencedModelDataItem = (0, getReferencedModelDataItem_1.getReferencedModelDataItem)(parameter.name, referencableModelData);
        // console.log({ referencedModelDataItem });
        if (referencedModelDataItem === null || referencedModelDataItem === void 0 ? void 0 : referencedModelDataItem.isReferenceParameter) {
            return ((0, jsx_runtime_1.jsx)(ReferenceInput_1.ReferenceInput, { parameter: parameter, parameterValue: parameterValue, onChangeParameter: function (value) { return onChangeParameter(index, value); }, referencedModelDataItem: referencedModelDataItem, defaultInputFields: defaultInputFields, isDebug: isDebug }, uniqueFieldId));
        }
        if (parameter.isDbModel && (0, name_conventions_1.isCalculatedParameter)(parameter.name)) {
            //skip!
            // NB: if you are wondering how to skip model parameters (e.g. todos when there is a todoSlugs, please check `simplifySchema`, as it has this by default.)
            return;
        }
        var possibleReferenceParameterNames = (0, schema_util_1.getPossibleReferenceParameterNames)(parameter.name);
        var hasReferenceParameter = !!parameterNames.find(function (name) {
            return possibleReferenceParameterNames.includes(name);
        });
        // NB: if the property has a model reference, we just need the model reference, not the whole model. This is only for retreiving, it's not present in the database. NB: this is also done when simplifying a schema. Adding it here too is kind of unneccessary if you can assume the schemas are correct, so we should probably remove it later!
        if (hasReferenceParameter)
            return;
        if (parameter.simplifiedSchema.type === "array") {
            return ((0, jsx_runtime_1.jsx)(ArrayForm_1.ArrayForm, { modelName: modelName, parameter: parameter, parameterValue: parameterValue, onChangeParameter: function (value) { return onChangeParameter(index, value); }, 
                // passing props
                itemNameOrId: itemNameOrId, parameterNameStack: parameterNameStack, referencableModelData: referencableModelData, isDebug: isDebug, id: uniqueFieldId, projectRelativeStorageFilePath: projectRelativeStorageFilePath }, uniqueFieldId));
        }
        if (parameter.simplifiedSchema.type === "object") {
            return ((0, jsx_runtime_1.jsx)(ObjectForm_1.ObjectForm, { modelName: modelName, parameter: parameter, parameterValue: parameterValue, onChangeParameter: function (value) { return onChangeParameter(index, value); }, 
                // passing props
                itemNameOrId: itemNameOrId, parameterNameStack: parameterNameStack, referencableModelData: referencableModelData, isDebug: isDebug, id: uniqueFieldId, projectRelativeStorageFilePath: projectRelativeStorageFilePath }, uniqueFieldId));
        }
        if (((_b = parameter.simplifiedSchema) === null || _b === void 0 ? void 0 : _b.type) === "number") {
            var value_1 = values[index];
            var onChangeNumber = function (newNumber) {
                var realNewNumber = !parameter.required &&
                    (newNumber === null || newNumber === undefined)
                    ? undefined
                    : newNumber || 0;
                var newValues = values.map(function (x, i) {
                    // NB: only change the index we are on
                    return i === index ? realNewNumber : x;
                });
                onChange(newValues);
            };
            return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, renderParameterTitle_1.renderParameterTitle)(parameter, isDebug), (0, jsx_runtime_1.jsx)(react_with_native_form_inputs_1.NumberInput, __assign({}, defaultInputFields, { onChange: onChangeNumber, value: value_1, extra: {}, config: {} }))] }, uniqueFieldId));
        }
        if (((_c = parameter.simplifiedSchema) === null || _c === void 0 ? void 0 : _c.type) === "boolean") {
            var value_2 = values[index];
            var onChangeBoolean = function (newBoolean) {
                var newValues = values.map(function (x, i) {
                    // NB: only change the index we are on
                    return i === index
                        ? // NB: ony return undefined for an empty string that's not required
                            !parameter.required && newBoolean === false
                                ? undefined
                                : newBoolean
                        : x;
                });
                onChange(newValues);
            };
            return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: (0, jsx_runtime_1.jsx)(react_with_native_form_inputs_1.ToggleInput, __assign({}, defaultInputFields, { onChange: onChangeBoolean, value: value_2 || false, extra: { label: (0, renderParameterTitle_1.renderParameterTitle)(parameter, isDebug) }, config: {} })) }, uniqueFieldId));
        }
        // NB: only string text left... sometimes it can be markdown though (textArea would be great here)... But we can't see this yet due to indexation
        var value = values[index];
        if ((_d = parameter.simplifiedSchema) === null || _d === void 0 ? void 0 : _d.enum) {
            var onChangeEnum_1 = function (newItemValue) {
                var newValues = values.map(function (x, i) {
                    // NB: only change the index we are on
                    return i === index
                        ? //   NB: ony return undefined for an empty string that's not required
                            !newItemValue
                                ? null
                                : newItemValue
                        : x;
                });
                onChange(newValues);
            };
            var enumItems = parameter.simplifiedSchema.enum.map(function (enumString) {
                return {
                    value: String(enumString),
                    label: (0, convert_case_1.humanCase)(String(enumString)),
                };
            });
            var firstEnumValue = (_e = parameter.simplifiedSchema) === null || _e === void 0 ? void 0 : _e.enum[0];
            var firstEnumValueString = firstEnumValue
                ? String(firstEnumValue)
                : null;
            // NB: we are changing the state here to set the enum to the first value, if it's not specified
            if (value === undefined) {
                onChangeEnum_1(firstEnumValueString);
            }
            var currentEnumItemValue_1 = value || firstEnumValueString;
            var currentEnumItem = enumItems.find(function (x) { return x.value === currentEnumItemValue_1; });
            return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, renderParameterTitle_1.renderParameterTitle)(parameter, isDebug), (0, jsx_runtime_1.jsx)(react_with_native_form_inputs_1.SelectInput, __assign({}, defaultInputFields, { onChange: function (item) { return onChangeEnum_1((item === null || item === void 0 ? void 0 : item.value) || null); }, value: currentEnumItem, extra: { options: enumItems, autoSuggest: enumItems.length > 10 }, config: {} }))] }, uniqueFieldId));
        }
        var onChangeText = function (newText) {
            var newValues = values.map(function (x, i) {
                // NB: only change the index we are on
                return i === index
                    ? //   NB: ony return undefined for an empty string that's not required
                        !parameter.required && newText.length === 0
                            ? undefined
                            : newText
                    : x;
            });
            onChange(newValues);
        };
        var isTextArea = name_conventions_1.markdownTextParameterNames.includes(parameter.name);
        if (isTextArea) {
            return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, renderParameterTitle_1.renderParameterTitle)(parameter, isDebug), (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "w-full h-[300px]" }, { children: (0, jsx_runtime_1.jsx)(writer_input_1.WriterInput, { className: "".concat(react_with_native_ui_1.UI.bareInput, " bg-white h-[300px]"), value: value || "", onChange: onChangeText, hideButtons: true, initialWriterView: "edit", type: "markdown", projectRelativeFilePath: projectRelativeStorageFilePath }) }))] }, uniqueFieldId));
        }
        var RightTextInput = name_conventions_1.passwordTextParameterNames.includes(parameter.name)
            ? react_with_native_form_inputs_1.PasswordInput
            : react_with_native_form_inputs_1.TextInput;
        return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, renderParameterTitle_1.renderParameterTitle)(parameter, isDebug), (0, jsx_runtime_1.jsx)(RightTextInput, __assign({}, defaultInputFields, { onChange: onChangeText, value: value || "", extra: {}, config: {} }))] }, uniqueFieldId));
    })
        .filter(js_util_1.notEmpty);
    return (0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: elements });
};
exports.SimplifiedSchemaForm = SimplifiedSchemaForm;
//# sourceMappingURL=SimplifiedSchemaForm.js.map