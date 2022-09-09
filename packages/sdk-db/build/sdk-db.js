"use strict";
// THIS FILE HAS BEEN GENERATED
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelQueryConfig = exports.dbModelKeys = void 0;
exports.dbModelKeys = ["BundleConfig", "MarkdownFileConfig", "OperationConfig", "OperationIndex", "PackageJson", "TsBuildError", "TsComment", "TsConfig", "TsExport", "TsFunction", "TsImport", "TsInterface", "TsLintWarning", "TsVariable", "CsvModelType", "SlugModelType"];
exports.modelQueryConfig = {
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
//# sourceMappingURL=sdk-db.js.map