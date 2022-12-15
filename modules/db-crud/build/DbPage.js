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
exports.DbPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var js_util_1 = require("js-util");
var react_with_native_1 = require("react-with-native");
var react_with_native_router_1 = require("react-with-native-router");
var ModelComponent_1 = require("./crud/ModelComponent");
var useUrl_1 = require("./useUrl");
var DbPage = function (props) {
    var router = (0, react_with_native_router_1.useRouter)();
    var modelName = props.modelName, filter = props.filter;
    var paths = router.query.paths ? (0, js_util_1.makeArray)(router.query.paths) : [];
    var modelQuery = modelName || paths.pop();
    var slug = (0, useUrl_1.useUrl)("slug")[0];
    var id = (0, useUrl_1.useUrl)("id")[0];
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ scroll: true }, { children: (0, jsx_runtime_1.jsx)(ModelComponent_1.ModelComponent, { modelName: modelQuery, highlight: { slug: slug, id: id } }) })));
};
exports.DbPage = DbPage;
//# sourceMappingURL=DbPage.js.map