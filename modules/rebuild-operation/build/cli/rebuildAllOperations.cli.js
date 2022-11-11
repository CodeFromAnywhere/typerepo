#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_path_1 = require("get-path");
var rebuildAllOperations_1 = require("../rebuildAllOperations");
var isUpdatedString = process.argv.slice(2)[0];
var isRebuildingProcessUpdated = Boolean(isUpdatedString);
var manualProjectRoot = (0, get_path_1.getProjectRoot)(process.cwd());
(0, rebuildAllOperations_1.rebuildAllOperations)(isRebuildingProcessUpdated, manualProjectRoot);
//# sourceMappingURL=rebuildAllOperations.cli.js.map