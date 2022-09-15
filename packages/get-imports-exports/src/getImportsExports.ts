#!/usr/bin/env node
import { SourceFile, ImportDeclaration, Symbol } from "ts-morph";
import { kebabCase } from "convert-case";
import { exploreOperationFolders } from "k-explore";
import { log } from "log";
import {
  TsExport,
  TsImport,
  ImportClassification,
  PackageJson,
} from "code-types";
import { Creation } from "model-types";
import { readJsonFile } from "read-json-file";
import { path, getLastFolder } from "fs-util";
import { findOperationBasePath, makeRelative } from "get-path";
import { mapMany, notEmpty } from "js-util";
import {
  getExportSymbolTypeRecursive,
  getTypeFromImportSpecifierRecursive,
  ImportsAndExports,
  isAbsoluteImport,
  NamedImport,
} from "./util";

/**
 * Uses ts-morph to get all exports inside all files in a project or an array of source files.
 * Doesn't use index, it actually looks in all files except index,
 * so some of them may not be exported from the package itself depending on your indexing strategy!
 **/
export const getImportsExports = async ({
  sourceFiles,
  debug,
  manualProjectRoot,
}: {
  /**
   * if given, only these sourcefiles are used, otherwise takes all source files from project.
   */
  sourceFiles: SourceFile[];
  debug?: boolean;
  manualProjectRoot?: string;
}): Promise<ImportsAndExports | undefined> => {
  if (sourceFiles.length === 0) {
    log("No source files provided", { type: "warning" });
    return;
  }

  const allOperationsPaths = await exploreOperationFolders({
    basePath: manualProjectRoot,
  });
  const allOperations = allOperationsPaths.map(getLastFolder);
  const firstFilePath = sourceFiles[0].getFilePath();
  if (!firstFilePath) return;

  const operationBasePath = findOperationBasePath(firstFilePath);
  if (!operationBasePath) return;

  const packageJson = await readJsonFile<PackageJson>(
    path.join(operationBasePath, "package.json")
  );

  if (!packageJson) {
    log("PackageJson could not be found", { type: "error" });
    return;
  }

  const allTsExports = (
    await mapMany(
      sourceFiles,
      async (sourceFile) => {
        const absoluteFilePath = sourceFile.getFilePath();
        if (!absoluteFilePath) return;

        const operationRelativeTypescriptFilePath = makeRelative(
          absoluteFilePath,
          operationBasePath
        );

        const exportSymbols: Symbol[] = sourceFile.getExportSymbols();
        const tsExports: Creation<TsExport>[] = exportSymbols.map((symbol) => {
          const name = symbol.getName();
          const typeSpecifier = getExportSymbolTypeRecursive(
            symbol,
            sourceFile,
            debug
          );

          const exportObject: Creation<TsExport> = {
            name,
            slug: kebabCase(name),
            operationRelativeTypescriptFilePath,
            // TODO:
            comments: [],
            type: typeSpecifier?.type,
            hasGeneric: typeSpecifier?.hasGeneric,
          };
          return exportObject;
        });

        return tsExports;
      },
      10
    )
  )
    .filter(notEmpty)
    .flat();

  const allTsImports = (
    await mapMany(
      sourceFiles,
      async (sourceFile) => {
        const absoluteFilePath = sourceFile.getFilePath();
        if (!absoluteFilePath) return;
        const operationRelativeTypescriptFilePath = makeRelative(
          absoluteFilePath,
          operationBasePath
        );

        try {
          const importDeclarations: ImportDeclaration[] =
            sourceFile.getImportDeclarations();

          const importInfos = importDeclarations
            .map((importDeclaration) => {
              try {
                const module = String(
                  importDeclaration.getModuleSpecifier().getLiteralText()
                );
                const namedImports: NamedImport[] = importDeclaration
                  .getNamedImports()
                  .map((x) => {
                    const name = x.getName();

                    const isOperation = allOperations.includes(module);

                    const typeSpecifier = isOperation
                      ? getTypeFromImportSpecifierRecursive(x, debug)
                      : undefined;

                    const namedImport: NamedImport = {
                      name,
                      slug: kebabCase(name),
                      type: typeSpecifier?.type,
                      hasGeneric: typeSpecifier?.hasGeneric,
                    };

                    return namedImport;
                  });

                const isModuleResolved =
                  !!importDeclaration.getModuleSpecifierSourceFile();

                return { namedImports, module, isModuleResolved };
              } catch (e) {
                console.log(
                  `catched generating import-info for import-declaration`
                );
              }
            })
            .filter(notEmpty);

          const tsImports: Creation<TsImport>[] = importInfos
            .map((importInfo) => {
              const { module, namedImports, isModuleResolved } = importInfo;

              const nodeModules = ["fs", "path"];
              const reactModules = [
                "react",
                "react-dom",
                "react-native",
                "expo",
              ];

              const classification: ImportClassification = nodeModules.includes(
                module
              )
                ? "node"
                : reactModules.includes(module)
                ? "react"
                : allOperations.includes(module)
                ? "operation"
                : !isAbsoluteImport(module)
                ? "internal"
                : "package";

              const importObjects: Creation<TsImport>[] = namedImports.map(
                (namedImport) => ({
                  ...namedImport,
                  module,
                  isModuleResolved,
                  // TODO
                  comments: [],
                  operationRelativeTypescriptFilePath,
                  classification,
                  isAbsolute: isAbsoluteImport(module),
                  isModuleFromMonorepo: allOperations.includes(module),
                  // NB: will not be resolved if build folder doesn't exist or if entry file doesn't exist
                })
              );

              return importObjects;
            })
            .filter(notEmpty)
            .flat();

          return tsImports;
        } catch (e) {
          return;
        }
      },
      10
    )
  )
    .filter(notEmpty)
    .flat();

  return { imports: allTsImports, exports: allTsExports };
};
