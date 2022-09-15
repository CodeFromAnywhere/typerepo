import { getLastFolder } from "fs-util";
export const isSdkOperation = (operationBasePath: string) => {
  const operationName = getLastFolder(operationBasePath);

  return operationName.split("-")[0] === "sdk";
};
