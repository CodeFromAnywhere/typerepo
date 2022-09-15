import { OperationConfig } from "code-types";
import { generateId } from "model-types";
import { db } from "database";
/**
 * Either finds the operation config in the database or creates a new one
 *
 * NB: it does not push it into the database yet because the operation might not exist yet
 */
export const getOperationConfig = async (
  operationName: string,
  /**
   * If you want to create one, set a description here.
   */
  description?: string
): Promise<OperationConfig> => {
  const sdkOperationConfig: OperationConfig | undefined = (
    await db.get("OperationConfig", { operationName })
  )[0];

  if (sdkOperationConfig) {
    return sdkOperationConfig;
  }

  const now = Date.now();
  // If we don't have an operation config yet, let's create it.
  const newOperationConfig: OperationConfig = {
    id: generateId(),
    createdAt: now,
    updatedAt: now,
    deletedAt: 0,
    createdFirstAt: now,
    markdown: description || "Default description",
    operationName,
    slug: operationName,
    name: operationName,
    // TODO: NB: we need a better way for this because this is unknown yet it needs to be defined.
    projectRelativePath: "",
    operationRelativePath: "",
  };

  return newOperationConfig;
};
