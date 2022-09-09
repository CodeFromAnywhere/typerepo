#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clearTsDatabase_1 = require("../clearTsDatabase");
var operationName = process.argv.slice(2)[0];
(0, clearTsDatabase_1.clearTsDatabase)(operationName);
//# sourceMappingURL=clearTsDatabase.cli.js.map