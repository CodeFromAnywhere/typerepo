import { spawnSync } from "child_process";
import { OperationConfig } from "code-types";
import { canRead, fs, getLastFolder, path, writeStringToFile } from "fs-util";
import {
  getProjectRoot,
  getSrcRelativeFileId,
  isSensibleProject,
} from "get-path";
import { objectMapAsync } from "js-util";
import { yarnBuild } from "rebuild-operation";
import { setJsonKey } from "set-json-key";
import { projectRelativeGeneratedOperationsFolder } from "filename-conventions";
import { newOperation } from "./newOperation";
import { db } from "database";
import { log } from "log";

/**
 * Creates a new operation with files with content
 *
 * Returns the final operation base path (or undefined if something went wrong)
 *
 * NB: relative paths must be relative to OPERATION ROOT, not src root! They must also lead to files in src, this thing is still buggy otherwise!
 *
 * TODO: Remove the buggyness
 */
export const newOperationWithFiles = async (
  operationConfig: OperationConfig,
  /**
   * NB: relative paths must be relative to OPERATION ROOT, not src root!
   */
  srcFileContentObject: {
    [operationRelativeTypescriptFilePath: string]: string;
  },
  config?: {
    manualProjectRoot?: string;
    /**
     * folder path without the folder name of the package to be created
     *
     * if given, will place it here, otherwise, will place it in the default location (tools/generated for os projects, packages for sensible projects)
     */
    destinationPath?: string;
    /**
     * if true, overwrites the operation if it already exists. It does this in a way that it does not break the OS very long, because it removes the old one only after the new one has been created. The removal and renaming the new one to this target name happens almost instantaneously
     */
    overwriteIfExists?: boolean;

    /**
     * if the operation did not exist before, `yarn install` will usually be ran.
     *
     * If you want to skip that, set this to `true`
     *
     */
    skipYarnInstall?: boolean;

    /**
     * skips yarn build if `true`
     */
    skipYarnBuild?: boolean;
    /**
     * don't write anything, just return the files to create with the strings
     */
    dryrun?: boolean;
  }
): Promise<undefined | string> => {
  // 1. calculates operation base path
  const projectRoot = config?.manualProjectRoot || getProjectRoot();
  if (!projectRoot) {
    log("Not found projectroot", { type: "error" });
    return;
  }

  const isSensible = isSensibleProject(projectRoot);

  const defaultDestinationPath = isSensible
    ? path.join(projectRoot, "packages")
    : path.join(projectRoot, projectRelativeGeneratedOperationsFolder);
  const destinationPath = config?.destinationPath || defaultDestinationPath;

  // 2. calculate simplest index.ts (no exposure of merged types object or tests)
  const indexFileContent = Object.keys(srcFileContentObject)
    .map((operationRelativeTypescriptFilePath) => {
      return `export * from "./${getSrcRelativeFileId(
        operationRelativeTypescriptFilePath
      )}";`;
    })
    .join("\n");

  const srcFileContentObjectWithIndex: {
    [operationRelativeTypescriptFilePath: string]: string;
    "src/index.ts": string;
  } = { ...srcFileContentObject, "src/index.ts": indexFileContent };

  if (config?.dryrun) {
    await Promise.all(
      Object.keys(srcFileContentObject).map((operationRelativePath) => {
        const assetsPath = path.join(
          __dirname,
          "..",
          "assets",
          operationRelativePath
        );

        console.log(`written to ${assetsPath}`);

        return writeStringToFile(
          assetsPath,
          srcFileContentObject[operationRelativePath]
        );
      })
    );

    return;
  }
  // 3. make new operation

  const actualBasePath = await newOperation(operationConfig.name, {
    destinationPath,
    description: operationConfig.markdown,
    manualProjectRoot: projectRoot,
  });

  if (!actualBasePath) {
    log("Failed creating new operation", { type: "error" });
    return;
  }

  if (!fs.existsSync(actualBasePath)) {
    log(`actualBasePath does not exist: ${actualBasePath}`, { type: "error" });
    return;
  }

  // The wished base path
  const wishedBasePath = path.join(destinationPath, operationConfig.name);

  // 4. write files to src
  await objectMapAsync(
    srcFileContentObjectWithIndex,
    async (operationRelativeTypescriptFilePath, content) => {
      const srcPath = path.join(
        actualBasePath,
        operationRelativeTypescriptFilePath
      );

      await writeStringToFile(srcPath, content);

      return;
    }
  );

  /** NB: if this is true, the operation is new and has a never-used name, this means it also needs to be installed before building! */
  const isOperationNew = wishedBasePath !== actualBasePath;

  const shouldOverwrite =
    isOperationNew &&
    config?.overwriteIfExists &&
    fs.existsSync(wishedBasePath);

  const finalOperationBasePath = shouldOverwrite
    ? wishedBasePath
    : actualBasePath;
  const operationFolder = getLastFolder(finalOperationBasePath);

  // 6. yarn build there

  if (!config?.skipYarnInstall) {
    // in case this operation didn't exist before, run `yarn --offline`
    // NB: this assumes we already have node_modules and the new operation has no weird new dependencies
    spawnSync("yarn --offline", {
      cwd: actualBasePath,
      encoding: "utf8",
      stdio: "inherit",
      shell: true,
    });
  }

  // NB: if skipYarnInstall is enabled, we will also not build
  const noBuild = config?.skipYarnBuild; // || config?.skipYarnInstall;

  if (!noBuild) {
    const isSuccesful = await yarnBuild(actualBasePath);

    if (!isSuccesful) {
      log("Building failed", { type: "error" });
      return;
    }
  }

  // remove operation if it's already there and rename new operation to that target name
  if (shouldOverwrite) {
    /**
     * first set the name to the same as the to be removed folder.
     * NB: there are now two packages with the same name, yarn install will error
     */
    const packageJsonPath = path.join(actualBasePath, "package.json");
    const hasAvailablePackageJson =
      fs.existsSync(packageJsonPath) && (await canRead(packageJsonPath));
    if (!hasAvailablePackageJson) {
      return;
    }

    await setJsonKey({
      jsonPath: packageJsonPath,
      keyLocation: "name",
      value: operationConfig.name,
    });

    if (fs.existsSync(wishedBasePath)) {
      //then remove the original operation
      await fs.rm(wishedBasePath, { recursive: true });
    }

    if (fs.existsSync(actualBasePath)) {
      // then rename the new operation to the original operation path
      await fs.rename(actualBasePath, wishedBasePath);
    }
  }

  // NB: If the operation is new, make sure to push the operationconfig after it is created.
  if (isOperationNew) {
    const newItem = { ...operationConfig, operationName: operationFolder };
    //  @ts-ignore
    const result = await db.upsert("OperationConfig", newItem, {
      operationName: operationFolder,
      manualProjectRoot: projectRoot,
    });

    if (!result.isSuccesful) {
      log("Something went wrong pushing the operationconfig", {
        type: "warning",
      });
      console.log({ result });
    }
  }

  return finalOperationBasePath;
};
