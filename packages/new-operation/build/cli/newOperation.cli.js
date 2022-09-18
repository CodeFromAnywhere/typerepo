#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newOperation_1 = require("../newOperation");
var _a = process.argv.slice(2), name = _a[0], description = _a[1], destinationPath = _a[2];
(0, newOperation_1.newOperation)(name, { description: description, destinationPath: destinationPath });
//# sourceMappingURL=newOperation.cli.js.map