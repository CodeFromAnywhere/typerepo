import { testDb } from "./test-db";

/**
 * Test if it can find all `OperationIndex`, `OperationConfig`, `PackageJson`, `TsConfig`
 */
export const testOperationModels = async () => {
  const operationIndexs = await testDb.get("OperationIndex");
  const operationConfigs = await testDb.get("OperationConfig");
  const packageJsons = await testDb.get("PackageJson");
  const tsConfigs = await testDb.get("TsConfig");

  console.dir({ operationConfigs, operationIndexs, packageJsons, tsConfigs });

  return true;
};
