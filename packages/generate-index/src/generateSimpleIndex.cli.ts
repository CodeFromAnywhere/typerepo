#!/usr/bin/env node

import { generateSimpleIndex } from "./generateSimpleIndex";

const [operationName] = process.argv.slice(2);
generateSimpleIndex({ operationName });
