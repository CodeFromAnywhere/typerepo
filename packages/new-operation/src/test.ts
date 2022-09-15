import { getOperationConfig } from "./getOperationConfig";
import { newOperationWithFiles } from "./newOperationWithFiles";

export const main = async () => {
  const operationConfig = await getOperationConfig(
    "test-operation",
    "This is amaaaaazzzz"
  );

  await newOperationWithFiles(
    operationConfig,
    { "src/test-operation.ts": "//this is a file\nexport const x = 1;" },
    { overwriteIfExists: true }
  );
};

main();
