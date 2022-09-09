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
export declare type DbModels = {
    BundleConfig: BundleConfig;
    MarkdownFileConfig: MarkdownFileConfig;
    OperationConfig: OperationConfig;
    OperationIndex: OperationIndex;
    PackageJson: PackageJson;
    TsBuildError: TsBuildError;
    TsComment: TsComment;
    TsConfig: TsConfig;
    TsExport: TsExport;
    TsFunction: TsFunction;
    TsImport: TsImport;
    TsInterface: TsInterface;
    TsLintWarning: TsLintWarning;
    TsVariable: TsVariable;
    CsvModelType: CsvModelType;
    SlugModelType: SlugModelType;
};
export declare const dbModelKeys: readonly ["BundleConfig", "MarkdownFileConfig", "OperationConfig", "OperationIndex", "PackageJson", "TsBuildError", "TsComment", "TsConfig", "TsExport", "TsFunction", "TsImport", "TsInterface", "TsLintWarning", "TsVariable", "CsvModelType", "SlugModelType"];
export declare type DbModelEnum = typeof dbModelKeys[number];
export declare const modelQueryConfig: {
    BundleConfig: {
        dbStorageMethod: string;
    };
    MarkdownFileConfig: {
        dbStorageMethod: string;
    };
    OperationConfig: {
        dbStorageMethod: string;
        operationRelativePath: string;
    };
    OperationIndex: {
        dbStorageMethod: string;
        operationRelativePath: string;
    };
    PackageJson: {
        dbStorageMethod: string;
        operationRelativePath: string;
    };
    TsBuildError: {
        dbStorageMethod: string;
    };
    TsComment: {
        dbStorageMethod: string;
    };
    TsConfig: {
        dbStorageMethod: string;
        operationRelativePath: string;
    };
    TsExport: {
        dbStorageMethod: string;
    };
    TsFunction: {
        dbStorageMethod: string;
    };
    TsImport: {
        dbStorageMethod: string;
    };
    TsInterface: {
        dbStorageMethod: string;
    };
    TsLintWarning: {
        dbStorageMethod: string;
    };
    TsVariable: {
        dbStorageMethod: string;
    };
    CsvModelType: {
        dbStorageMethod: string;
    };
    SlugModelType: {
        dbStorageMethod: string;
    };
};
//# sourceMappingURL=sdk-db.d.ts.map