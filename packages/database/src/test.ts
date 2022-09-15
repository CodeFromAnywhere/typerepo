import { runModelEndToEndTest } from "./test-e2e";
import {
  generateMarkdownInstance,
  testDb,
  generateCsvInstance,
  generateJsonSingleInstance,
  generateKvmdInstance,
  generateSlugTestModel,
} from "./test-db";
import { testOperationModels } from "./test-operation-models";

/**



 */
const test = async () => {
  const promises = [
    runModelEndToEndTest("CsvTestModel", generateCsvInstance),
    runModelEndToEndTest("DefaultTestModel", generateJsonSingleInstance),
    runModelEndToEndTest("JsonMultipleTestModel", generateSlugTestModel),
    testOperationModels(),
    runModelEndToEndTest("MarkdownTestModel", generateMarkdownInstance),
    // runModelEndToEndTest("KeyValueMarkdownTestModel", generateKvmdInstance),
  ];
  await Promise.all(promises);
};

test();

const migration = async () => {
  const result = await testDb.update(
    "TsConfig",
    () => true,
    (tsConfig) => ({
      ...tsConfig,
      compilerOptions: { ...tsConfig.compilerOptions, resolveJsonModule: true },
    })
  );

  console.dir(result, { depth: 111 });
};
