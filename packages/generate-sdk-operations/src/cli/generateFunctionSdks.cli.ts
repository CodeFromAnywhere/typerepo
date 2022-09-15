#!/usr/bin/env node

import { generateFunctionSdks } from "../generateFunctionSdks";

const [manualProjectRoot] = process.argv.slice(2);
generateFunctionSdks({ manualProjectRoot });
