#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_path_1 = require("get-path");
var rebuildAllOperations_1 = require("../rebuildAllOperations");
var isUpdatedString = process.argv.slice(2)[0];
var isRebuildingProcessUpdated = Boolean(isUpdatedString);
var thisProjectRoot = (0, get_path_1.getProjectRoot)();
var cwdProjectRoot = (0, get_path_1.getProjectRoot)(process.cwd());
var manualProjectRoot = thisProjectRoot !== cwdProjectRoot ? cwdProjectRoot : undefined;
(0, rebuildAllOperations_1.rebuildAllOperations)(isRebuildingProcessUpdated, manualProjectRoot);
//# sourceMappingURL=rebuildAllOperations.cli.js.map