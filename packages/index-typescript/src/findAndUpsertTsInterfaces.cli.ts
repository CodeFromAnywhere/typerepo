import { getLastFolder } from "fs-util";
import { findOperationBasePath } from "get-path";
import { findAndUpsertTsInterfaces } from "./findAndUpsertTsInterfaces";

const cli = async () => {
  const [filePath] = process.argv.slice(2);

  const operationBasePath = findOperationBasePath(filePath);
  if (!operationBasePath) {
    console.log("Please provide a filePath that is part of an operation");
    return;
  }
  const operationName = getLastFolder(operationBasePath);

  // NB: last argument has been removed, which should be the manualProjectRoot
  await findAndUpsertTsInterfaces({ filePath, operationName });
};

cli();
