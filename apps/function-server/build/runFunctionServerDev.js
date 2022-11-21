"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runFunctionServerDev = void 0;
var nodemon_1 = require("nodemon");
var runFunctionServerDev = function () {
    (0, nodemon_1.nodemon)({
        operationName: "function-server",
        cliFunctionName: "runFunctionServer",
        vars: ["true", "false"],
        restartVars: ["true", "true"],
    });
};
exports.runFunctionServerDev = runFunctionServerDev;
//# sourceMappingURL=runFunctionServerDev.js.map