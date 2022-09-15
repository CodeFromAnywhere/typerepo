#!/usr/bin/env node

import { getOperationPath } from "get-path";
import { log } from "log";
import { oneByOne } from "one-by-one";
import { rebuildOperation } from "../rebuildOperation";

const main = async () => {
  const operationNames = process.argv.slice(2);

  if (operationNames.length > 0) {
    oneByOne(operationNames, async (operationName) => {
      const operationBasePath = await getOperationPath(operationName);
      if (!operationBasePath) {
        log("couldn't find that operation");
        return;
      }

      // console.log({ operationNames, operationName });

      const x = await rebuildOperation({
        operationBasePath,
        force: true,
        debug: true,
        noExit: true,
      });
    });
  }
};

main();
