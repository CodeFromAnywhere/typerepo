import { mergeObjectsArray, notEmpty, onlyUnique2 } from "js-util";
import { PackageInfoObject, PackageJson, TsImport } from "code-types";
import { Creation } from "model-types";
import { builtinModules } from "module";
import { getSrcRelativeFileId } from "get-path";
import {
  frontendOptionalFileSubExtensions,
  hasSubExtension,
  isGeneratedOperationName,
} from "filename-conventions";
/**
 * parses the absolute import name into the actual package name
 *
 * - removes internal navigation in the package (everything after the package name)
 * - assumes packages don't have slashes in their names, execpt that it takes into account scoped packages (e.g. `@company/package`)
 * - removes things that come before any column (`:`) e.g. `node:fs` becomes `fs`
 */
export const getPackageNameFromAbsoluteImport = (
  absoluteImportName: string
) => {
  const slashParts = absoluteImportName.split("/");
  const beforeSlash = slashParts[0];

  if (!beforeSlash || beforeSlash.length === 0) return;

  // NB: scoped packages look like `@company/package` and should be parsed correctly as well
  const withoutInternalNavigation = beforeSlash.startsWith("@")
    ? slashParts.slice(0, 2).join("/")
    : beforeSlash;

  const columnParts = withoutInternalNavigation.split(":");

  const partAfterColumns = columnParts.pop()!;

  return partAfterColumns;
};

/**
 * returns true if the absolute import is built in into node
 */
export const isAbsoluteImportBuiltin = (absoluteImportName: string) => {
  const realModuleName = getPackageNameFromAbsoluteImport(absoluteImportName);
  return realModuleName ? builtinModules.includes(realModuleName) : false;
};

/**
 * returns true if the import was found in an optional file, e.g. this import is not always included in the bundle, so should not be a dependency
 */
export const isImportFromOptionalFile = (tsImport: Creation<TsImport>) => {
  const srcRelativeFileId = getSrcRelativeFileId(
    tsImport.operationRelativeTypescriptFilePath
  );
  return hasSubExtension(srcRelativeFileId, frontendOptionalFileSubExtensions);
};
/**
 * Calculates new packageJson dependencies object based on imports found in the whole operation.
 *
 * For monorepo modules, uses the version inside its packagejson (Uses the database to obtain the package.json)
 *
 * Generated packages are not added to dependencies. Instead a sensible config prop is added to state that this operation only works within a monorepo since it has generated operation deps that are not on the npm registry
 *
 * For external modules, uses the version that was already present in dependencies, or uses "*"
 *
 * Also keeps the dependencies that were already there, nothing is removed.
 *
 *
 */
export const calculatePackageJsonDependencies = (
  /**
   * Current dependencies object in your operation
   */
  dependencies: PackageInfoObject | undefined,
  /**
   * All imports found in your operation
   */
  imports: Creation<TsImport>[],
  /**
   * All package-json's in your monorepo
   */
  packageJsons: PackageJson[]
) => {
  const dependencyImports = imports
    // NB: imports of types are removed and need not to be installed for running this package
    .filter((x) => x.type === "value")
    .filter((x) => x.isAbsolute)
    .filter((x) => !isAbsoluteImportBuiltin(x.module))
    .filter((x) => !isImportFromOptionalFile(x))
    .filter(onlyUnique2<Creation<TsImport>>((a, b) => a.module === b.module));

  const monorepoImports = dependencyImports.filter(
    (x) =>
      x.operationName &&
      x.isModuleFromMonorepo &&
      !isGeneratedOperationName(x.operationName)
  );

  const hasGeneratedDependencies =
    dependencyImports.filter(
      (x) =>
        x.operationName &&
        x.isModuleFromMonorepo &&
        isGeneratedOperationName(x.operationName)
    ).length > 0;

  const externalImports = dependencyImports.filter(
    (x) => !x.isModuleFromMonorepo
  );

  const externalDependencyObject = mergeObjectsArray(
    externalImports
      .map((x) => {
        const moduleName = getPackageNameFromAbsoluteImport(x.module);
        if (!moduleName) return;
        const already = dependencies?.[moduleName];
        /**
         * TODO: fetch this from monorepo
         */
        const calculatedVersion = "*";

        /**
         * NB: Minimize the use of "*"
         */
        const version =
          already !== "*" && already !== undefined
            ? already
            : calculatedVersion;
        return { [moduleName]: version };
      })
      .filter(notEmpty)
  );

  const monorepoDependencyObject = mergeObjectsArray(
    monorepoImports
      .map((x) => {
        const moduleName = getPackageNameFromAbsoluteImport(x.module);
        if (!moduleName) return;
        const packageJson = packageJsons.find((x) => x.name === moduleName);
        if (!packageJson) return;
        const { version } = packageJson;
        if (!version) return;
        return { [moduleName]: version };
      })
      .filter(notEmpty)
  );

  const newDependencies: PackageInfoObject = {
    ...dependencies,
    ...monorepoDependencyObject,
    ...externalDependencyObject,
  };

  return { newDependencies, hasGeneratedDependencies };
};
