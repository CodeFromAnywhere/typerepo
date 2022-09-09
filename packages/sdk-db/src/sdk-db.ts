// THIS FILE HAS BEEN GENERATED

import type { BundleConfig } from "bundle-types";
import type { MarkdownFileConfig } from "code-types";
import type { OperationConfig } from "code-types";
import type { OperationIndex } from "code-types";
import type { PackageJson } from "code-types";
import type { TsBuildError } from "code-types";
import type { TsComment } from "code-types";
import type { TsConfig } from "code-types";
import type { TsExport } from "code-types";
import type { TsFunction } from "code-types";
import type { TsImport } from "code-types";
import type { TsInterface } from "code-types";
import type { TsLintWarning } from "code-types";
import type { TsVariable } from "code-types";
import type { CsvModelType } from "model-types";
import type { SlugModelType } from "model-types";


export type DbModels = { BundleConfig: BundleConfig,MarkdownFileConfig: MarkdownFileConfig,OperationConfig: OperationConfig,OperationIndex: OperationIndex,PackageJson: PackageJson,TsBuildError: TsBuildError,TsComment: TsComment,TsConfig: TsConfig,TsExport: TsExport,TsFunction: TsFunction,TsImport: TsImport,TsInterface: TsInterface,TsLintWarning: TsLintWarning,TsVariable: TsVariable,CsvModelType: CsvModelType,SlugModelType: SlugModelType };
export const dbModelKeys = [ "BundleConfig","MarkdownFileConfig","OperationConfig","OperationIndex","PackageJson","TsBuildError","TsComment","TsConfig","TsExport","TsFunction","TsImport","TsInterface","TsLintWarning","TsVariable","CsvModelType","SlugModelType" ] as const;
export type DbModelEnum = typeof dbModelKeys[number];
export const modelQueryConfig = {
    BundleConfig: {
          dbStorageMethod: "jsonSingle",
          
        },
MarkdownFileConfig: {
          dbStorageMethod: "markdown",
          
        },
OperationConfig: {
          dbStorageMethod: "markdown",
          operationRelativePath: "OPERATION.md",
        },
OperationIndex: {
          dbStorageMethod: "jsonSingle",
          operationRelativePath: "db/operation-index.json",
        },
PackageJson: {
          dbStorageMethod: "jsonSingle",
          operationRelativePath: "package.json",
        },
TsBuildError: {
          dbStorageMethod: "jsonMultiple",
          
        },
TsComment: {
          dbStorageMethod: "jsonMultiple",
          
        },
TsConfig: {
          dbStorageMethod: "jsonSingle",
          operationRelativePath: "tsconfig.json",
        },
TsExport: {
          dbStorageMethod: "jsonMultiple",
          
        },
TsFunction: {
          dbStorageMethod: "jsonSingle",
          
        },
TsImport: {
          dbStorageMethod: "jsonMultiple",
          
        },
TsInterface: {
          dbStorageMethod: "jsonSingle",
          
        },
TsLintWarning: {
          dbStorageMethod: "jsonMultiple",
          
        },
TsVariable: {
          dbStorageMethod: "jsonSingle",
          
        },
CsvModelType: {
          dbStorageMethod: "jsonMultiple",
          
        },
SlugModelType: {
          dbStorageMethod: "jsonMultiple",
          
        }
  };
// THANK YOU
