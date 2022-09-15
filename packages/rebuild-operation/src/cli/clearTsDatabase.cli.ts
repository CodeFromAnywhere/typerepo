#!/usr/bin/env node
import { clearTsDatabase } from "../clearTsDatabase";

const [operationName] = process.argv.slice(2);

clearTsDatabase(operationName);
