"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRealValue = void 0;
var getRealValue = function (_a) {
    var value = _a.value, selectFirstOption = _a.selectFirstOption, options = _a.options, title = _a.title;
    var result = value
        ? value
        : selectFirstOption
            ? options[0]
            : { label: title, value: "", data: undefined };
    return result;
};
exports.getRealValue = getRealValue;
//# sourceMappingURL=util.js.map