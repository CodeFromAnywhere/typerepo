#!/usr/bin/env node
import { findAndWriteImportsExports } from "./findAndWriteImportsExports";

const [operationBasePath, manualProjectRoot] = process.argv.slice(2);
findAndWriteImportsExports(operationBasePath, manualProjectRoot);
