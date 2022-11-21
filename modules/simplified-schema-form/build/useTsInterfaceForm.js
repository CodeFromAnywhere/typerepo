"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTsInterfaceForm = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var SimplifiedSchemaForm_1 = require("./SimplifiedSchemaForm");
var react_1 = require("react");
var useReferencableModelData_1 = require("./useReferencableModelData");
/**
 * hook to create a form for a TsInterface
 *
 * # Usage
 *
 ```ts
import { useTsInterfaceForm } from "simplified-schema-form";
import DatasetConfigJson from "code-types/db/ts-interfaces/datasetconfig.json";
import { DatasetConfig, TsInterface } from "code-types";
import { Storing } from "model-types";

// in your component:
const initialValue:DatasetConfig = {} as any;
const [Form, value, onChange] = useTsInterfaceForm(DatasetConfigJson as Storing<TsInterface>,initialValue);
```
 */
var useTsInterfaceForm = function (
/**
 * NB: Don't change this! The amount of hooks depends on this
 */
tsInterface, id, 
/**
 * Only works if set on first render
 */
initialValue, 
/**
 * Tell the form where the model will be stored so the form can render assets correctly
 *
 * If not given, it is tried to be taken from tthe initialValue (will only work if it's a db-model instance with a `.projectRelativePath`)
 */
projectRelativeStorageFilePath, 
/**
 * must be provided in case of a db model
 */
modelName) {
    var realId = (0, react_1.useState)(id || "s".concat(String(Math.random())))[0];
    var _a = (0, react_1.useState)([initialValue]), values = _a[0], onChange = _a[1];
    // NB: only the first item matters
    var value = values[0];
    var onChangeValue = function (value) { return onChange([value]); };
    // NB: we must have the simplifiedSchema, it's not always indexed
    var simplifiedSchema = tsInterface.type.simplifiedSchema;
    if (!simplifiedSchema)
        return [];
    var referencableModelData = (0, useReferencableModelData_1.useReferencableModelData)(simplifiedSchema);
    var form = ((0, jsx_runtime_1.jsx)(SimplifiedSchemaForm_1.SimplifiedSchemaForm, { modelName: modelName, id: realId, onChange: onChange, values: values, itemNameOrId: (value === null || value === void 0 ? void 0 : value.name) ||
            (value === null || value === void 0 ? void 0 : value.id), parameters: [
            {
                name: "",
                required: true,
                simplifiedSchema: simplifiedSchema,
                isDbModel: true,
            },
        ], projectRelativeStorageFilePath: projectRelativeStorageFilePath ||
            (initialValue === null || initialValue === void 0 ? void 0 : initialValue.projectRelativePath), referencableModelData: referencableModelData }, realId));
    return [form, value, onChangeValue];
};
exports.useTsInterfaceForm = useTsInterfaceForm;
//# sourceMappingURL=useTsInterfaceForm.js.map