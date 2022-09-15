// NB: I'm creating circular imports if I start using any k-type things in convert-case, so be careful.
import { kebabCase } from "convert-case";

import { TsComment } from "./TsComment";
import { TsInterface } from "./TsInterface";
import { TsFunction } from "./TsFunction";
import { TsIndexModelType } from "model-types";
import { TsVariable } from "./TsVariable";
import { TsImport } from "./TsImport";
import { TsExport } from "./TsExport";
/**
 * TODO:
 *
 * Any interface/type
 * - should be able to have default values
 * - should be able to have validation functions
 * - should be able to have casting functions
 * - some parameters should be hidden upon creation
 * - some should be hidden on updating
 * - some should even be hidden when listing
 *
 * This is mainly for the admin panel, but it could be integrated on the db level as well.
 * The problem is that this behavior may be app-specific, so this becomes rather opinionated if we do it on the OS level
 * Come up with an exact requirement and implementation plan.
 *
 * There are many more functionalities possible here to speed up development, not only for admin use-case.
 */

/**
 * ---
 * isDbModel: false
 * ---
 *
 * Typescript file metadata (all indexes from typescript files, together)
 */
export type TypescriptIndex = {
  tsBuildErrors: TsBuildError[];
  tsLintWarnings: TsLintWarning[];
  tsFunctions: TsFunction[];
  tsVariables: TsVariable[];
  tsInterfaces: TsInterface[];
  tsComments: TsComment[];
  tsImports: TsImport[];
  tsExports: TsExport[];
};

export type IndexModels = {
  TsBuildError: TsBuildError;
  TsLintWarning: TsLintWarning;
  TsFunction: TsFunction;
  TsVariable: TsVariable;
  TsInterface: TsInterface;
  TsComment: TsComment;
  TsImport: TsImport;
  TsExport: TsExport;
};
export const typescriptIndexModels = [
  "TsBuildError",
  "TsLintWarning",
  "TsExport",
  "TsImport",
  "TsComment",
  "TsInterface",
  "TsFunction",
  "TsVariable",
] as const;

/**
 * All type interfaces that are used to index stuff, which are added to the database
 *
 * NB: It's not handy to get this from the database because this is used to generate the database xD
 */
export const indexDbModels = [
  ...typescriptIndexModels,
  "OperationIndex",
] as const;

export const indexDbModelFolders = indexDbModels
  .map(kebabCase)
  .map((f) => `${f}s`);

export interface TsBuildError extends TsIndexModelType {
  line?: number;
  character?: number;
  message: string;
}

export interface TsLintWarning extends TsIndexModelType {
  line: number;
  character: number;
  message: string;
}

/**
 * node: node core packages like fs and path
 *
 * react: react standard packages like react, react-native, expo, react-dom, etc.
 *
 * package: packages from npm that are not classified as operations
 *
 * operation: operations from our monorepo
 *
 * internal: imports from other places in the same operation
 *
 * NB: don't confuse this with OperationClassification
 */
export type ImportClassification =
  | "node"
  | "react"
  | "package"
  | "operation"
  | "internal";
