"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelect = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Select_1 = require("./Select");
/**
Create a value selector in a single line of code, including its state!

# **Usage**

```ts
const [SelectView, view, setView] = useSelect(views);
```
 */
var useSelect = function (items, initialValue, 
/**
 * Optionally you can do other things with the value as well, like setting it to a global store
 */
withValue) {
    var realItems = items || [];
    var _a = (0, react_1.useState)(initialValue || null), value = _a[0], setValue = _a[1];
    var Component = function () { return ((0, jsx_runtime_1.jsx)(Select_1.Select, { className: "bg-transparent", title: "Test", onChange: function (v) {
            setValue(v);
            if (v) {
                withValue === null || withValue === void 0 ? void 0 : withValue(v);
            }
        }, value: value, options: realItems })); };
    return [Component, value, setValue];
};
exports.useSelect = useSelect;
//# sourceMappingURL=useSelect.js.map