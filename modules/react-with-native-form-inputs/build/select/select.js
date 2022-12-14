"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectInputType = exports.SelectInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_select_1 = require("react-with-native-select");
var react_with_native_ui_1 = require("react-with-native-ui");
var SelectInput = function (props) {
    //console.log({ value, extraOptions: extra.options });
    var value = props.value, extra = props.extra, onChange = props.onChange, className = props.className;
    return ((0, jsx_runtime_1.jsx)(react_with_native_select_1.Select, { autoSuggest: extra.autoSuggest, 
        // containerClassName={UI.input}
        className: className || react_with_native_ui_1.UI.selectInput, title: extra.title || "", options: extra.options, value: value, onChange: function (value) {
            if (value) {
                onChange(value);
            }
        } }));
};
exports.SelectInput = SelectInput;
exports.SelectInput.defaultInitialValue = null;
var SelectInputType = /** @class */ (function () {
    function SelectInputType() {
    }
    return SelectInputType;
}());
exports.SelectInputType = SelectInputType;
//# sourceMappingURL=select.js.map