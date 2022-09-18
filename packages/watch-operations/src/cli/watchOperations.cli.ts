#!/usr/bin/env node

import { watchOperations } from "../watchOperations";

const main = async () => {
  const [manualProjectRoot] = process.argv.slice(2);
  watchOperations({ manualProjectRoot });
};

main();
