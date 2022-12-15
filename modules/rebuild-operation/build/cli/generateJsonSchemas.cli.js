#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateJsonSchemas_1 = require("../generateJsonSchemas");
var operationName = process.argv.slice(2)[0];
(0, generateJsonSchemas_1.generateJsonSchemas)(undefined, operationName);
//# sourceMappingURL=generateJsonSchemas.cli.js.map