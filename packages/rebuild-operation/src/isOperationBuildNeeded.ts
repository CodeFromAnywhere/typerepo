import { OperationClassification } from "code-types";
import { getLastFolder } from "fs-util";
import { getOperationClassification } from "get-path";

/**
 * returns a boolean indicating whether or not the operation should be able to be built, based on the OperationClassification
 */
export const isOperationBuildNeeded = (operationBasePath: string) => {
  const classification = getOperationClassification(operationBasePath)!;

  console.log(`${getLastFolder(operationBasePath)}: ${classification}`);

  // NB: server, web, app and ui-es6 have different ways to keep the build up-to-date
  const buildNeededOperatons: OperationClassification[] = [
    "js",
    "node",
    "ui-es5",
  ];
  const isBuildNeeded = buildNeededOperatons.includes(classification);

  return isBuildNeeded;
};
