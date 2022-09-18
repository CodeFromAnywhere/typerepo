#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rebuildAllOperations_1 = require("../rebuildAllOperations");
var isUpdatedString = process.argv.slice(2)[0];
var isRebuildingProcessUpdated = Boolean(isUpdatedString);
(0, rebuildAllOperations_1.rebuildAllOperations)(isRebuildingProcessUpdated);
//# sourceMappingURL=rebuildAllOperations.cli.js.map