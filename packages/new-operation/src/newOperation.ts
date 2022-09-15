#!/usr/bin/env node

import { execSync } from "child_process";
import { canRead, path, fs } from "fs-util";
import { setJsonKey } from "set-json-key";
import { renameTemplateFiles } from "rename-template-files";
import { kebabCase } from "convert-case";
import { getAvailableOperationName } from "./getAvailableOperationName";
import { log } from "log";
type NewOperationConfig = {
  description?: string;
  /**
   * destinationPath without the operation folder itself
   *
   *
   * If not provided, uses the working directory from where the process was executed + an inferred foldername
   */
  destinationPath?: string;
  /**
   * folder path (including if given, uses this project root instead of the project root of the executed process
   */
  manualProjectRoot?: string;
};

/**
 * This cli creates the correct tsconfig.json, package.json, .gitignore, folder setup, so you can get started immedeately.
 *
 * Returns either the `operationBasePath` of the created operation, or undefined if something went wrong
 */
export const newOperation = async (
  name?: string,
  config?: NewOperationConfig
): Promise<string | undefined> => {
  const description = config?.description;
  const destinationPath = config?.destinationPath;
  const manualProjectRoot = config?.manualProjectRoot;
  const folder = name ? kebabCase(name) : "untitled-operation";
  const source = path.resolve(__dirname, "..", "template");
  const rootFolderPath = destinationPath ? destinationPath : process.cwd();
  const availableFolderName = await getAvailableOperationName(
    rootFolderPath,
    folder,
    manualProjectRoot
  );

  const operationBasePath = path.join(rootFolderPath, availableFolderName);

  // Make the non-existing folder
  await fs.mkdir(operationBasePath, { recursive: true });
  // Copy the template inthere
  await fs.cpAsync(source, operationBasePath, { recursive: true });
  // Rename templatefiles if needed
  await renameTemplateFiles({ appDir: operationBasePath });

  const packageJsonPath = path.join(operationBasePath, "package.json");

  const hasAvailablePackageJson =
    fs.existsSync(packageJsonPath) && (await canRead(packageJsonPath));
  if (!hasAvailablePackageJson) {
    log("The template package.json was not copied succesfully", {
      type: "error",
    });
    return;
  }

  await setJsonKey({
    jsonPath: packageJsonPath,
    keyLocation: "name",
    value: availableFolderName,
  });

  if (description) {
    await setJsonKey({
      jsonPath: packageJsonPath,
      keyLocation: "description",
      value: description,
    });
  }

  return operationBasePath;
};
