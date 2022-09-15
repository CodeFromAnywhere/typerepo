#!/usr/bin/env node
import { rebuildAllOperations } from "../rebuildAllOperations";
const [isUpdatedString] = process.argv.slice(2);

const isRebuildingProcessUpdated = Boolean(isUpdatedString);
rebuildAllOperations(isRebuildingProcessUpdated);
