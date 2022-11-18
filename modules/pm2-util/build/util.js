"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logTableObject = void 0;
var logTableObject = function (object) {
    if (!object)
        return;
    var table = Object.keys(object).map(function (key) {
        return { property: key, value: object[key] };
    });
    return table;
};
exports.logTableObject = logTableObject;
//# sourceMappingURL=util.js.map