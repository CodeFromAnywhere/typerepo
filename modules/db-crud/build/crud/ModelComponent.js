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
exports.ModelComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("api");
var code_types_1 = require("code-types");
var fancy_loader_1 = require("fancy-loader");
var fs_util_js_1 = require("fs-util-js");
var js_util_1 = require("js-util");
var labeled_button_1 = require("labeled-button");
var markdown_1 = require("markdown");
var react_with_native_1 = require("react-with-native");
var react_with_native_alert_1 = require("react-with-native-alert");
var react_with_native_router_1 = require("react-with-native-router");
var react_with_native_select_1 = require("react-with-native-select");
var store_1 = require("../store");
var CrudGrid_1 = require("./CrudGrid");
var CrudTable_1 = require("./CrudTable");
var CrudTimeline_1 = require("./CrudTimeline");
var CrudTree_1 = require("./CrudTree");
var useInfiniteGetDbModel_1 = require("./useInfiniteGetDbModel");
var SearchBar_1 = require("./SearchBar");
var deleteDbModel = api_1.api.deleteDbModel;
/**
 
In the table headings, all xxxSlug, xxxId etc should be called xxx.

In the table values, all slugs and ids should show the name of the instance of the refered model.

It has to be possible to navigate to an id or slug using `#[id] or #[slug]` in the URL, just add div ids to all rows

 */
var ModelComponent = function (props) {
    var _a, _b;
    var modelName = props.modelName, highlight = props.highlight;
    var alert = (0, react_with_native_alert_1.useAlert)();
    var router = (0, react_with_native_router_1.useRouter)();
    var views = code_types_1.modelViews.map(function (modelView) { return ({
        value: modelView.view,
        label: "".concat(modelView.emoji, " ").concat(modelView.view),
    }); });
    var _c = (0, react_with_native_select_1.useSelect)(views, views[0]), SelectView = _c[0], viewItem = _c[1];
    var view = viewItem.value;
    var metadataQuery = api_1.queries.useGetDbModelMetadata(modelName);
    var _d = (0, js_util_1.destructureOptionalObject)((_a = metadataQuery.data) === null || _a === void 0 ? void 0 : _a.result), datasets = _d.datasets, tsInterface = _d.tsInterface;
    var datasetItems = datasets === null || datasets === void 0 ? void 0 : datasets.map(function (dataset) { return ({
        label: dataset.name,
        value: dataset.id,
        data: dataset,
    }); });
    var datasetSelectItems = __spreadArray(__spreadArray([
        { value: "", label: "Select a dataset" }
    ], (datasetItems || []), true), [
        { value: "new", label: "(+) New dataset" },
    ], false);
    var SelectDataset = (0, react_with_native_select_1.useSelect)(datasetSelectItems, undefined, function (newValue) {
        if ((newValue === null || newValue === void 0 ? void 0 : newValue.value) === "new") {
            // show a blank screen
            setDatasetConfig({ key: "config".concat(Math.random()) });
            return;
        }
        if ((newValue === null || newValue === void 0 ? void 0 : newValue.value) === "") {
            setDatasetConfig(null);
            return;
        }
        if (newValue === null || newValue === void 0 ? void 0 : newValue.data) {
            setDatasetConfig(__assign(__assign({}, newValue.data), { key: "config".concat(Math.random()) }));
            return;
        }
    })[0];
    var _e = (0, store_1.useStore)("db-crud.datasetConfig"), datasetConfig = _e[0], setDatasetConfig = _e[1];
    var model = (0, useInfiniteGetDbModel_1.useInfiniteGetDbModel)();
    var modelReferences = api_1.queries.useGetReferencableModelData(modelName);
    var isLoading = model.isLoading || model.isRefetching || model.isFetching;
    var allData = (_b = model === null || model === void 0 ? void 0 : model.data) === null || _b === void 0 ? void 0 : _b.pages.map(function (x) { var _a; return (_a = x.result) === null || _a === void 0 ? void 0 : _a.data; }).flat().filter(js_util_1.notEmpty);
    // const  count = sum(model.data?.pages.map((x) => x.result?.data.length || 0) || []);
    var indexDescription = tsInterface ? ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "font-bold" }, { children: tsInterface.name })), (0, jsx_runtime_1.jsx)(markdown_1.MarkdownContent, { content: tsInterface.description || "no description", config: {
                    projectRelativeBaseFolderPath: (0, fs_util_js_1.getFolderJs)(tsInterface.projectRelativePath),
                    projectRelativeMarkdownFilePath: tsInterface.projectRelativePath,
                } })] })) : isLoading ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, {})) : ("No index found");
    var headerButtons = ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row items-center" }, { children: [(0, jsx_runtime_1.jsx)(labeled_button_1.LabeledButton, { onClick: function () { return router.push("/upsert/".concat(modelName)); }, title: "New", emoji: "\u2795" }), (0, jsx_runtime_1.jsx)(labeled_button_1.LabeledButton, __assign({}, {
                onClick: function () { return model.refetch(); },
                title: "Reload",
                emoji: isLoading ? undefined : "🔄",
                component: isLoading ? function () { return (0, jsx_runtime_1.jsx)(fancy_loader_1.FancyLoader, { medium: true }); } : undefined,
            })), (0, jsx_runtime_1.jsx)(SearchBar_1.SearchBar, {})] })));
    var onEndReached = function () {
        var _a, _b;
        var pages = (_a = model.data) === null || _a === void 0 ? void 0 : _a.pages;
        var lastPage = pages ? pages[pages.length - 1] : undefined;
        var hasMore = (_b = lastPage === null || lastPage === void 0 ? void 0 : lastPage.result) === null || _b === void 0 ? void 0 : _b.hasMore;
        if (hasMore && !model.isFetchingNextPage) {
            model.fetchNextPage();
        }
    };
    var deleteItem = function (item) {
        alert === null || alert === void 0 ? void 0 : alert("Are you sure?", "Do you want to delete this one?", [
            {
                text: "Yes",
                style: "destructive",
                onPress: function () {
                    if (item === null || item === void 0 ? void 0 : item.id) {
                        // console.log({ id: item.id });
                        deleteDbModel(modelName, item.id).then(function (result) {
                            model.refetch();
                            modelReferences.refetch();
                        });
                    }
                },
            },
            { text: "Cancel", style: "cancel" },
        ]);
    };
    var deleteAction = {
        action: deleteItem,
        emoji: "❌",
        name: "Delete",
    };
    var updateItem = function (item) {
        return router.push("/upsert/".concat(modelName, "?id=").concat(item === null || item === void 0 ? void 0 : item.id));
    };
    var updateAction = {
        name: "Update",
        emoji: "✏️",
        action: updateItem,
    };
    var actions = [deleteAction, updateAction];
    var CrudView = {
        table: CrudTable_1.CrudTable,
        grid: CrudGrid_1.CrudGrid,
        timeline: CrudTimeline_1.CrudTimeline,
        tree: CrudTree_1.CrudTree,
    }[view];
    var crudViewProps = {
        actions: actions,
        data: allData,
        highlight: highlight,
        tsInterface: tsInterface,
        onEndReached: onEndReached,
    };
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "px-8 lg:px-20 py-4" }, { children: [headerButtons, indexDescription] })), Array.isArray(allData) && allData.length > 0 && CrudView ? ((0, jsx_runtime_1.jsx)(CrudView, __assign({}, crudViewProps))) : null] }));
};
exports.ModelComponent = ModelComponent;
//# sourceMappingURL=ModelComponent.js.map