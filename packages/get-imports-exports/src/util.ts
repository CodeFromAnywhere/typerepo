#!/usr/bin/env node
import {
  SourceFile,
  Symbol,
  TypeAliasDeclaration,
  InterfaceDeclaration,
  ImportSpecifier,
} from "ts-morph";
import { log } from "log";
import { TsExport, TsImport } from "code-types";
import { Creation } from "model-types";
import { SyntaxKind } from "typescript";
import { notEmpty } from "js-util";
import { getHasGeneric } from "ts-morph-util";

export type TypeSpecifier = {
  type: "type" | "value";
  /**
   * In case it's a type, this tells you whether or not the import type has a generic
   */
  hasGeneric?: boolean;
};

export type ImportsAndExports = {
  imports: Creation<TsImport>[];
  exports: Creation<TsExport>[];
};

export type NamedImport = {
  type: "type" | "value" | undefined;
  name: string;
  slug: string;
  hasGeneric?: boolean;
};

export const getSymbolTypeDeclarations = (symbol: Symbol) => {
  return [
    ...getSymbolDeclarationsOfKind<TypeAliasDeclaration>(
      symbol,
      SyntaxKind.TypeAliasDeclaration
    ),
    ...getSymbolDeclarationsOfKind<InterfaceDeclaration>(
      symbol,
      SyntaxKind.InterfaceDeclaration
    ),
  ];
};

export const getExportSpecifierNames = (symbol: Symbol) => {
  return (
    symbol
      ?.getDeclarations()
      ?.filter((x) => x.isKind(SyntaxKind.ExportSpecifier))
      .map((x) => x.asKind(SyntaxKind.ExportSpecifier))
      .filter(notEmpty)
      .map((x) => x.getName()) || []
  );
};

/**
 * get the ImportSpecifier(s) of with a certain name.
 */
export const getImportSpecifiersWithNames = (
  sourceFile: SourceFile,
  names: string[]
) => {
  return sourceFile
    .getImportDeclarations()
    .map((x) => x.getNamedImports())
    .flat()
    .filter((x) => names.includes(x.getName()));
}; //

/**
 * gets type of a symbol and if the type has a generic, without recursing.
 */
export const getDefaultSymbolType = (
  symbol: Symbol,
  debug?: boolean
): TypeSpecifier => {
  if (debug) {
    console.log({
      kinds: symbol
        .getDeclarations()
        .map((x) => ({ kind: x.getKindName(), name: x.getText() })),
    });
  }
  const symbolTypeDeclarations = getSymbolTypeDeclarations(symbol);

  const type = symbolTypeDeclarations.length > 0 ? "type" : "value";
  /**
   * checks whether the symbol contains a type declaration which has a generic parameter
   */
  const hasGeneric =
    type === "type"
      ? !!symbolTypeDeclarations.find(
          // NB: type parameters gets the generics
          (declaration) => getHasGeneric(declaration)
        )
      : undefined;

  return { type, hasGeneric };
};

/**
 * gets type of exportSymbols. recurses if it's an exportsymbol
 *
 * TODO: NB: exports that come from a destructured initialiser aren't found! fix it
 */
export const getExportSymbolTypeRecursive = (
  symbol: Symbol,
  sourceFile: SourceFile,
  debug?: boolean
): TypeSpecifier | undefined => {
  const exportSpecifierNames = getExportSpecifierNames(symbol);

  if (debug) console.log(exportSpecifierNames);

  if (exportSpecifierNames.length > 0) {
    // get the ImportSpecifier of this ExportSpecifier, and if one exists, recurse this function on it.

    const importSpecifiers = getImportSpecifiersWithNames(
      sourceFile,
      exportSpecifierNames
    );

    if (importSpecifiers.length > 1) {
      // NB: warn if there is more than one as that would be strange

      log(
        `More than one importsSpecifiers with that name: ${exportSpecifierNames.join(
          ","
        )} (imports: ${importSpecifiers
          .map((x) => x.getName())
          .join(",")})... file: ${sourceFile.getFilePath()}`,
        {
          type: "warning",
        }
      );
    }

    if (importSpecifiers.length > 0) {
      return getTypeFromImportSpecifierRecursive(importSpecifiers[0], debug);
    }

    /* REmoved this.... seems that this will make it never do the default one
      else {
        if (debug) {
          console.log(
            "Weird, we couldn't find the importspecifier for exportSpecifiers"
          );
        }
        return { type: undefined };
      }
      */
  }

  return getDefaultSymbolType(symbol, debug);
};

/**
 * Recursive function that gets the type specifier from an import specifier
 */
export const getTypeFromImportSpecifierRecursive = (
  importSpecifier: ImportSpecifier,
  debug?: boolean,
  /**
   * Files it was already in (to prevent infinite loops)
   */
  fileStack?: string[]
): TypeSpecifier | undefined => {
  // NB: find the file where the import is defined

  try {
    const fileOfExport = importSpecifier
      .getImportDeclaration()
      .getModuleSpecifierSourceFile();

    // NB: without the module source we can't know the type of this importspecifier
    if (!fileOfExport) return;
    const filePath = fileOfExport.getFilePath();
    if (!filePath) return;

    const realFileStack = fileStack || [];

    if (realFileStack.includes(filePath)) {
      console.log("Infinite loop found, returning...", { filePath, fileStack });
      return;
    }

    const newFileStack = realFileStack.concat(filePath);

    // NB: in the source, find all exported stuff
    const exportSymbols: Symbol[] = fileOfExport.getExportSymbols();

    // NB: find the export with the same name as the import
    const importedSymbol = exportSymbols.find(
      (x) => x.getName() === importSpecifier.getName()
    );

    // NB: if the source doesn't contain any export with that name, we can't know its type
    if (!importedSymbol) return;

    /**
     * NB: all ExportSpecifiers don't have a more specific SyntaxKind because they are imported.
     * If there are any ExportSpecifiers with a matching ImportSpecifier, recurse on that!
     */
    const exportSpecifierNames = getExportSpecifierNames(importedSymbol);

    if (exportSpecifierNames.length > 0) {
      const importSpecifiers = getImportSpecifiersWithNames(
        fileOfExport,
        exportSpecifierNames
      );

      if (importSpecifiers.length > 1) {
        // NB: warn if there is more than one as that would be strange

        log("More than one importsSpecifiers with that name", {
          type: "warning",
        });
      }

      if (importSpecifiers.length > 0 && newFileStack.length < 10) {
        // console.log(`recursing`, { newFileStack, filePath });

        // NB: recursion!
        const first = importSpecifiers[0];
        return getTypeFromImportSpecifierRecursive(first, debug, newFileStack);
      } else {
        if (debug)
          console.log("Weird, no importspecifiers found for exportSpecifier!!");
        return;
      }
    }

    // console.log({
    //   fileOfExport: fileOfExport?.getFilePath(),
    //   exportSymbols: exportSymbols?.map((x) => x.getName()),
    //   importSpecifier: importSpecifier.getName(),
    //   importedSymbol: importedSymbol?.getName(),
    //   name: importSpecifier.getName(),
    // });

    return getDefaultSymbolType(importedSymbol, debug);
  } catch (e) {
    console.log("failed");
    return;
  }
};

export const isAbsoluteImport = (moduleString: string | undefined) =>
  moduleString ? !moduleString.startsWith(".") : false;

const getSymbolDeclarationsOfKind = <T>(symbol: Symbol, kind: SyntaxKind) => {
  const declarations = symbol
    .getDeclarations()
    .filter((x) => x.getKind() === kind)
    .map((x) => x.asKind(kind))
    .filter(notEmpty) as unknown as T[];

  return declarations;
};
