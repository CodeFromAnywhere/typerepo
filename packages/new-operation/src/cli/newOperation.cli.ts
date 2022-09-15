#!/usr/bin/env node
import { newOperation } from "../newOperation";

const [name, description, destinationPath] = process.argv.slice(2);

newOperation(name, { description, destinationPath });
