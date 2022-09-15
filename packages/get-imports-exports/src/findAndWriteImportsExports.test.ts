import { getOperationPath } from "get-path";
import { findAndWriteImportsExports } from "./findAndWriteImportsExports";

const test = async () => {
  const operationBasePath = await getOperationPath("rebuild-operation");
  if (!operationBasePath) {
    console.log("Couldn't find that path");
    return;
  }
  await findAndWriteImportsExports(operationBasePath);
  console.log("DONE");
};

test();
