import { db } from "database";
import { typescriptIndexModels } from "code-types";
export const clearTsDatabase = async (operationName: string | undefined) => {
  const result = await Promise.all(
    typescriptIndexModels.map((modelName) => {
      return db.clear(modelName, { operationName });
    })
  );

  await db.clear("OperationIndex", { operationName });
};
