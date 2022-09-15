import { db } from "database";
import { log } from "log";

export const writeResult = async (options: {
  operationName: string;
  success: boolean;
  message: string;
}) => {
  const { message, operationName, success } = options;

  if (!success) {
    log(`Couldn't write imports/exports.`);

    await db.update(
      "OperationIndex",
      () => true,
      (operationIndex) => ({
        ...operationIndex,
        indexImportExportError: message,
      }),
      { operationName }
    );

    return false;
  }
};
