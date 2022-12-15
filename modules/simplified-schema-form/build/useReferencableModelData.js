"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReferencableModelData = void 0;
var js_util_1 = require("js-util");
var schema_util_1 = require("schema-util");
var api_1 = require("api");
/**
 * Hook to retreive `ReferencableModelData` to supply to `SimplifiedSchemaForm`.
 *
 * Underwater, this calculates all referencableModelNames for a schema, and then it fetches the `ReferencableItem`[] for every one of those models, using `react-query` `useQuery` hooks
 *
 * NB: be careful, not to change the simplifiedSchema after using this hook for the first time. This will change the amount of hooks and this can break react!
 *
 * (it will give `Error: Rendered more hooks than during the previous render`)
 */
var useReferencableModelData = function (simplifiedSchema) {
    var _a;
    var referencableModelNames = (_a = (0, schema_util_1.getReferencableModels)(simplifiedSchema)) === null || _a === void 0 ? void 0 : _a.map(function (x) { return x.interfaceName; }).filter(js_util_1.notEmpty);
    if (!referencableModelNames)
        return;
    /**
     * NB: here we just get the referencable model data for the referencable model names in this form. But since they are decoupled, useQuery is caching them, across forms!
     */
    var referencableModelDataArray = referencableModelNames
        .map(function (dbModelName) {
        var _a;
        var realDbModelName = dbModelName;
        var _b = api_1.queries.useGetReferencableModelData(realDbModelName), apiResult = _b.data, isLoading = _b.isLoading;
        var data = apiResult === null || apiResult === void 0 ? void 0 : apiResult.result;
        return _a = {}, _a[dbModelName] = { data: data, isLoading: isLoading }, _a;
    })
        .filter(js_util_1.notEmpty);
    var referencableModelData = referencableModelDataArray
        ? (0, js_util_1.mergeObjectsArray)(referencableModelDataArray)
        : undefined;
    return referencableModelData;
};
exports.useReferencableModelData = useReferencableModelData;
//# sourceMappingURL=useReferencableModelData.js.map