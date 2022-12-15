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
exports.TableRow = exports.TableHeadItem = exports.Table = exports.useIsInViewport = exports.getColumns = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var convert_case_1 = require("convert-case");
var js_util_1 = require("js-util");
var schema_util_1 = require("schema-util");
var asset_view_1 = require("asset-view");
var react_1 = require("react");
var tdClassName = "whitespace-nowrap py-4 pr-3 text-sm first-of-type:font-medium text-gray-500 dark:text-gray-200 first-of-type:text-gray-900 first-of-type:dark:text-gray-100 first-of-type:sm:pl-6 first-of-type:md:pl-0";
/**
 * gets all columns you can present based on a modelname, the interfaces of that model, and the data
 */
var getColumns = function (modelName, interfaces, data) {
    var _a, _b;
    /**
     * needed in case something goes wrong with the index
     */
    var getDumbColumns = function () {
        return data[0] && typeof data[0] === "object"
            ? Object.keys(data[0])
                .map(function (objectParameterKey) {
                var value = data[0][objectParameterKey];
                if (!["string", "boolean", "number", "null"].includes(typeof value)) {
                    return null;
                }
                return {
                    name: (0, convert_case_1.humanCase)(objectParameterKey),
                    objectParameterKey: objectParameterKey,
                    presentationType: "text",
                };
            })
                .filter(js_util_1.notEmpty)
            : [];
    };
    if (!interfaces)
        return getDumbColumns();
    var properties = (_b = (_a = interfaces.find(function (x) { return x.name === modelName; })) === null || _a === void 0 ? void 0 : _a.type.typeDefinition) === null || _b === void 0 ? void 0 : _b.properties;
    if (!properties)
        return getDumbColumns();
    var columns = Object.keys(properties)
        .map(function (objectParameterKey) {
        var maybeProperty = properties[objectParameterKey];
        var property = typeof maybeProperty !== "boolean" ? maybeProperty : undefined;
        if (!property)
            return;
        if ((0, js_util_1.makeArray)(property.type).find(function (x) { return ["object", "array"].includes(x); })) {
            // there are arrays or objects among the type of this property
            return;
        }
        var column = {
            name: (0, convert_case_1.humanCase)(objectParameterKey),
            objectParameterKey: objectParameterKey,
            presentationType: "text",
        };
        return column;
    })
        .filter(js_util_1.notEmpty);
    return columns;
};
exports.getColumns = getColumns;
function useIsInViewport(ref) {
    var _a = (0, react_1.useState)(false), isIntersecting = _a[0], setIsIntersecting = _a[1];
    var observer = (0, react_1.useMemo)(function () {
        return new IntersectionObserver(function (_a) {
            var entry = _a[0];
            return setIsIntersecting(entry.isIntersecting);
        });
    }, []);
    (0, react_1.useEffect)(function () {
        if (!ref.current)
            return;
        observer.observe(ref.current);
        return function () {
            observer.disconnect();
        };
    }, [ref, observer]);
    return isIntersecting;
}
exports.useIsInViewport = useIsInViewport;
var Table = function (_a) {
    var data = _a.data, columns = _a.columns, renderExtraColumns = _a.renderExtraColumns, extraColumnsAtStart = _a.extraColumnsAtStart, onEndReached = _a.onEndReached, shouldHighlightItem = _a.shouldHighlightItem;
    var endOfTableDiv = (0, react_1.useRef)(null);
    var isEndReached = useIsInViewport(endOfTableDiv);
    (0, react_1.useEffect)(function () {
        // console.log("END REACHED");
        onEndReached === null || onEndReached === void 0 ? void 0 : onEndReached();
    }, [isEndReached]);
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "px-4 sm:px-6 lg:px-8" }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "mt-8 flex flex-col" }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8" }, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8" }, { children: [(0, jsx_runtime_1.jsxs)("table", __assign({ className: "min-w-full divide-y divide-gray-300" }, { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [extraColumnsAtStart ? ((0, jsx_runtime_1.jsx)(exports.TableHeadItem, { name: "", objectParameterKey: "" })) : null, columns.map(function (column, index) { return (
                                            // NB: here we are destructuring column to provide all the props to a component
                                            (0, jsx_runtime_1.jsx)(exports.TableHeadItem, __assign({}, column))); }), renderExtraColumns && !extraColumnsAtStart ? ((0, jsx_runtime_1.jsx)(exports.TableHeadItem, { objectParameterKey: "", name: "" })) : null] }) }), (0, jsx_runtime_1.jsx)("tbody", __assign({ className: "divide-y divide-gray-200" }, { children: data
                                        ? // If data is undefined, we have to render the skelletonview
                                            data.map(function (item, index) {
                                                var shouldHighlight = shouldHighlightItem === null || shouldHighlightItem === void 0 ? void 0 : shouldHighlightItem(item);
                                                return ((0, jsx_runtime_1.jsx)(exports.TableRow, { shouldHighlight: shouldHighlight, row: item, columns: columns, renderExtraColumns: renderExtraColumns, extraColumnsAtStart: extraColumnsAtStart }, "row".concat(index)));
                                            })
                                        : // Without data we are assuming it's still loading and show 10 skelletons, which are simply TableRow's without any data
                                            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (_, index) { return ((0, jsx_runtime_1.jsx)(exports.TableRow, { row: undefined, columns: columns }, "skeleton".concat(index))); }) }))] })), (0, jsx_runtime_1.jsx)("div", __assign({ ref: endOfTableDiv }, { children: "\u00A0" }))] })) })) })) })));
};
exports.Table = Table;
var TableHeadItem = function (column) { return ((0, jsx_runtime_1.jsx)("th", __assign({ scope: "col", className: "whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 sm:pl-6 md:pl-0" }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: column.name }) }))); };
exports.TableHeadItem = TableHeadItem;
var Skeleton = function () { return ((0, jsx_runtime_1.jsx)("td", __assign({ className: tdClassName }, { children: (0, jsx_runtime_1.jsx)("div", { className: "bg-gray-200 w-full p-2 animate-pulse rounded-lg h-5" }) }))); };
var renderColumn = function (column, row, index) {
    if (column.presentationType === "text") {
        var rawValue = row[column.objectParameterKey];
        var value = rawValue === undefined ? "" : rawValue === "" ? "''" : String(rawValue);
        /**
         * This is a text item that presents just one string
         */
        return (0, jsx_runtime_1.jsx)("td", __assign({ className: tdClassName }, { children: value }));
    }
    else if (column.presentationType === "backendAsset") {
        var backendAssets = row[column.objectParameterKey]
            ? (0, js_util_1.makeArray)(row[column.objectParameterKey])
            : undefined;
        return ((0, jsx_runtime_1.jsx)("td", __assign({ className: tdClassName }, { children: backendAssets
                ? backendAssets.map(function (backendAsset) {
                    return ((0, jsx_runtime_1.jsx)(asset_view_1.ModelItemAssetView, { item: row, backendAsset: backendAsset }));
                })
                : null })));
    }
    else if (column.presentationType === "referenceSingle") {
        // Any parameter with pattern xxxSlug or xxxId should link to that instance in the referred model (link to `db?model={model}#{id}`)
        var referenceId = row[column.objectParameterKey];
        var referenceParameterInfo = (0, schema_util_1.getReferenceParameterInfo)(column.objectParameterKey);
        return ((0, jsx_runtime_1.jsx)("td", __assign({ className: tdClassName }, { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "/".concat(referenceParameterInfo.interfaceName, "?").concat(referenceParameterInfo.keyInModel, "=").concat(referenceId) }, { children: referenceId })) })));
    }
    else if (column.presentationType === "referenceMultiple") {
        // Any parameter with pattern xxxSlugs or xxxIds should link to those instance in the referred model (link to `db?model={model}&xxx={id}`) for every instance
        // NB: it can also be a string in case markdown storage format is used, if there is just one...
        var referenceIds = row[column.objectParameterKey];
        var referenceIdsArray = referenceIds
            ? (0, js_util_1.makeArray)(referenceIds)
            : undefined;
        var referenceParameterInfo_1 = (0, schema_util_1.getReferenceParameterInfo)(column.objectParameterKey);
        return ((0, jsx_runtime_1.jsx)("td", __assign({ className: tdClassName }, { children: referenceIdsArray === null || referenceIdsArray === void 0 ? void 0 : referenceIdsArray.map(function (referenceId) {
                return ((0, jsx_runtime_1.jsx)("a", __assign({ href: "/".concat(referenceParameterInfo_1.interfaceName, "?").concat(referenceParameterInfo_1.keyInModel, "=").concat(referenceId) }, { children: referenceId })));
            }) })));
    }
    else {
        return (0, jsx_runtime_1.jsx)("td", __assign({ className: tdClassName }, { children: "Unknown Presentation Type" }));
    }
};
var TableRow = function (_a) {
    var row = _a.row, columns = _a.columns, renderExtraColumns = _a.renderExtraColumns, extraColumnsAtStart = _a.extraColumnsAtStart, shouldHighlight = _a.shouldHighlight;
    /**
     * Check which presentation type is set for this column and return this component
     */
    return ((0, jsx_runtime_1.jsxs)("tr", __assign({ className: shouldHighlight ? "bg-blue-300" : undefined }, { children: [extraColumnsAtStart && ((0, jsx_runtime_1.jsx)("td", __assign({ className: tdClassName }, { children: renderExtraColumns === null || renderExtraColumns === void 0 ? void 0 : renderExtraColumns(row) }))), columns.map(function (column, index) {
                if (!row) {
                    return (0, jsx_runtime_1.jsx)(Skeleton, {});
                }
                // we can optionally have a custom presentation for any column
                if (column.customPresentation) {
                    return column.customPresentation(row);
                }
                return renderColumn(column, row, index);
            }), !extraColumnsAtStart && ((0, jsx_runtime_1.jsx)("td", __assign({ className: tdClassName }, { children: renderExtraColumns === null || renderExtraColumns === void 0 ? void 0 : renderExtraColumns(row) })))] })));
};
exports.TableRow = TableRow;
//# sourceMappingURL=Table.js.map