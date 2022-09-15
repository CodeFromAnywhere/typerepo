import { getImportsExports } from "./getImportsExports";
import { getPackageSourcePaths } from "get-package-source-paths";
import { getOperationPath } from "get-path";
import { getTsMorphProject } from "ts-morph-util";
import { log } from "log";
import { makeTest } from "make-test";

export const getImportsExportsTest = async () => {
  const operationBasePath = await getOperationPath(
    "react-with-native-notification"
  );
  if (!operationBasePath) {
    return console.log("wtf");
  }

  const sourceFilePaths = await getPackageSourcePaths({
    operationBasePath,
  });
  const project = getTsMorphProject(operationBasePath);
  if (!project) {
    return log("couldn't load project", { type: "error" });
  }

  const sourceFiles = project.getSourceFiles(sourceFilePaths);
  if (!sourceFiles) {
    return log(`couldn't load files`, { type: "error" });
  }

  const impexp = await getImportsExports({ sourceFiles });

  return impexp;

  // console.dir(impexp, { depth: 999 });
};

export const test = makeTest(getImportsExportsTest);
