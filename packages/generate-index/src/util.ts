import { TsFunction, TsInterface, TsVariable } from "code-types";
import { lowerCaseArray } from "convert-case";
import { getSrcRelativeFileId } from "get-path";

export type ImportStatement = {
  type: "variable" | "function" | "interface";
  name: string;
  srcRelativeFileId: string;
};

export const isTestFn = (x: ImportStatement) => {
  const nameEndsWithTest = lowerCaseArray(x.name).pop() === "test";
  const typeIsFn = x.type === "function";
  return typeIsFn && nameEndsWithTest;
};

export const mapToImportStatement = (
  item: TsFunction | TsVariable | TsInterface,
  type: ImportStatement["type"]
): ImportStatement => {
  const srcRelativeFileId = getSrcRelativeFileId(
    item.operationRelativeTypescriptFilePath
  );

  return { name: item.name, srcRelativeFileId, type };
};
