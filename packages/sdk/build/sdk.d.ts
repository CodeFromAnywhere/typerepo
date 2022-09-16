/// <reference types="node" />
/// <reference types="react" />
import { hasDefinition } from "index-typescript";
import { makeSubscription } from "watch-folders";
import { getTypescriptErrorsFromFiles } from "compile-typescript";
import { generatePassword } from "model-types";
import { isEmail } from "model-types";
import { slugify } from "convert-case";
import { notEmpty } from "js-util";
import { onlyUnique } from "js-util";
import { byteCount } from "path-util";
export declare const sdk: {
    generateCsvInstance: () => import("model-types").Creation<import("database").CsvTestModel>;
    generateJsonSingleInstance: () => import("model-types").Creation<import("database").DefaultTestModel>;
    generateKvmdInstance: () => import("model-types").Creation<import("database").KvmdTestModel>;
    generateMarkdownInstance: () => import("model-types").Creation<import("database").MarkdownTestModel>;
    generateSlugTestModel: () => import("model-types").Creation<import("database").SlugTestModel>;
    getMergedQueryConfig: (modelName: string | number | symbol, customQueryConfig?: import("fs-orm").CustomQueryConfig | undefined) => import("fs-orm").MergedQueryConfig;
    randomName: () => string;
    runModelEndToEndTest: (modelName: keyof import("database").TestModels, generateInstance: () => import("model-types").Creation<import("model-types").AnyModelType>) => Promise<boolean>;
    testOperationModels: () => Promise<boolean>;
    addDefaultValues: (bareItem: import("model-types").Creation<import("model-types").AugmentedAnyModelType>, isKvmdStorage?: boolean | undefined) => import("model-types").AugmentedAnyModelType;
    alterAny: (dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv", dbFileLocation: import("model-types").DbFileLocation, alterFn: (storedData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[]) => {
        newStoredData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[];
    } & import("fs-orm").DbQueryResult) => Promise<import("fs-orm").DbQueryResult>;
    alterCsv: (dbFileLocation: import("model-types").DbFileLocation, alterFn: (storedData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[]) => {
        newStoredData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[];
    } & import("fs-orm").DbQueryResult) => Promise<import("fs-orm").DbQueryResult>;
    alterJsonMultiple: (dbFileLocation: import("model-types").DbFileLocation, alterFn: (storedData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[]) => {
        newStoredData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[];
    } & import("fs-orm").DbQueryResult) => Promise<import("fs-orm").DbQueryResult>;
    alterJsonSingle: (dbFileLocation: import("model-types").DbFileLocation, alterFn: (storedData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[]) => {
        newStoredData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[];
    } & import("fs-orm").DbQueryResult) => Promise<import("fs-orm").DbQueryResult>;
    alterKeyValueMarkdown: (dbFileLocation: import("model-types").DbFileLocation, alterFn: (storedData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[]) => {
        newStoredData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[];
    } & import("fs-orm").DbQueryResult) => Promise<import("fs-orm").DbQueryResult>;
    alterMarkdown: (dbFileLocation: import("model-types").DbFileLocation, alterFn: (storedData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[]) => {
        newStoredData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[];
    } & import("fs-orm").DbQueryResult) => Promise<import("fs-orm").DbQueryResult>;
    augmentItemWithReferencedDataRecursively: (item: import("model-types").AugmentedAnyModelType, includeArray: import("fs-orm").Include[], includeData: import("fs-orm").IncludeDataObject) => import("model-types").AugmentedAnyModelType;
    calculateOperationsObject: (manualProjectRoot: string) => Promise<{
        [x: string]: string;
    }>;
    createDb: <TModels extends import("fs-orm").AnyModelObject>(dbConfig?: import("fs-orm").DbConfig<TModels> | undefined) => import("fs-orm").Db<TModels>;
    findParent: (arrayItem: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>, newCategoryStack: import("model-types").CategoryStack) => boolean;
    getAugmentedData: <T>(dbFileLocation: import("model-types").DbFileLocation, dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv") => Promise<T[] | null>;
    getDatabaseFiles: (modelName: string, mergedConfig: import("fs-orm").MergedQueryConfig) => Promise<import("model-types").DbFileLocation[]>;
    getDatabaseRootFolder: (operationName: string | null | undefined, manualProjectRoot?: string | undefined) => Promise<string | undefined>;
    getDbFileLocation: (storedItem: import("model-types").Storing<import("model-types").AugmentedAnyModelType>, itemModelLocation: import("model-types").ModelLocation, mergedConfig: import("fs-orm").MergedQueryConfig, modelName: string) => Promise<import("model-types").DbFileLocation | undefined>;
    getDbStorageMethodExtension: (dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv") => string;
    getItemModelLocation: <T_1 extends {
        [key: string]: any;
    }>(item: T_1) => import("model-types").ModelLocation;
    getLength: (array: any[]) => number;
    getLocationPattern: (dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv", modelName: string, mergedConfig: import("fs-orm").MergedQueryConfig) => string | undefined;
    getParentSlug: (item: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>) => string | undefined;
    groupByFile: <T_2 extends {
        [key: string]: any;
    }>(creationItems: import("model-types").Creation<T_2>[], mergedConfig: import("fs-orm").MergedQueryConfig, modelName: string) => Promise<import("fs-orm").ItemPerFileObject<T_2>>;
    makeStoringItem: <T_3 extends {
        [key: string]: any;
    }>(item: T_3) => import("model-types").Storing<T_3>;
    mergeConfigs: <TModels_1 extends import("fs-orm").AnyModelObject>(modelName: Extract<keyof TModels_1, string>, dbConfig?: import("fs-orm").DbConfig<TModels_1> | undefined, config?: import("fs-orm").CustomQueryConfig | import("fs-orm").GetQueryConfig<TModels_1[keyof TModels_1]> | undefined) => import("fs-orm").MergedQueryConfig;
    removeKeyValueMarkdown: (storedData: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[], slug: string) => import("fs-orm").DbQueryResult & {
        newStoredData: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[];
    };
    removeMultiple: (dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv", dbFileLocation: import("model-types").DbFileLocation, removeWhere: (content: import("model-types").AugmentedAnyModelType) => boolean) => Promise<import("fs-orm").DbQueryResult>;
    upsertItems: <TModels_2 extends import("fs-orm").AnyModelObject = any, TModelName extends string = any>(dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv", dbFileLocation: import("model-types").DbFileLocation, storingItems: import("model-types").Storing<TModels_2[TModelName]> | import("model-types").Storing<TModels_2[TModelName]>[]) => Promise<import("fs-orm").DbQueryResult>;
    upsertKeyValueMarkdown: (storedData: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[], storingItem: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>) => import("fs-orm").DbQueryResult & {
        newStoredData: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[];
    };
    upsert: (storedData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[], storingItems: import("model-types").Storing<import("model-types").AugmentedAnyModelType> | import("model-types").Storing<import("model-types").AugmentedAnyModelType>[]) => import("fs-orm").DbQueryResult & {
        newStoredData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[];
    };
    generateNamedIndex: ({ operationName, manualProjectRoot, }: {
        manualProjectRoot?: string | undefined;
        operationName: string;
    }) => Promise<void>;
    generateSimpleIndex: ({ operationName, manualProjectRoot, }: {
        operationName: string;
        manualProjectRoot?: string | undefined;
    }) => Promise<string | undefined>;
    isTestFn: (x: import("generate-index").ImportStatement) => boolean;
    mapToImportStatement: (item: import("code-types").TsFunction | import("code-types").TsVariable | import("code-types").TsInterface, type: "function" | "variable" | "interface") => import("generate-index").ImportStatement;
    generateDbSdk: (config?: {
        manualProjectRoot?: string | undefined;
        skipYarnInstall?: boolean | undefined;
        dryrun?: boolean | undefined;
    } | undefined) => Promise<void>;
    generateEnvSdks: (bundleConfig: import("bundle-types").BundleConfig, config?: {
        manualProjectRoot?: string | undefined;
        skipYarnInstall?: boolean | undefined;
        dryrun?: boolean | undefined;
    } | undefined) => Promise<(string | undefined)[]>;
    generateFunctionSdks: (config?: {
        manualProjectRoot?: string | undefined;
        skipYarnInstall?: boolean | undefined;
        dryrun?: boolean | undefined;
    } | undefined) => Promise<void>;
    generateOperationsSdk: (config?: {
        manualProjectRoot?: string | undefined;
        skipYarnInstall?: boolean | undefined;
        dryrun?: boolean | undefined;
    } | undefined) => Promise<void>;
    generateSdkOperations: (bundleConfig?: import("bundle-types").BundleConfig | undefined, config?: {
        yarnInstallBefore?: boolean | undefined;
        yarnInstallAfter?: boolean | undefined;
        manualProjectRoot?: string | undefined;
        dryrun?: boolean | undefined;
    } | undefined) => Promise<boolean>;
    getSdkFunctions: (config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => Promise<import("generate-sdk-operations").FunctionsPerClassification | undefined>;
    isTsFunctionIndexable: (tsFunction: import("code-types").TsFunction) => boolean;
    newEnvSdk: (bundleConfig: import("bundle-types").BundleConfig, type: "public" | "private", config?: {
        manualProjectRoot?: string | undefined;
        skipYarnInstall?: boolean | undefined;
        dryrun?: boolean | undefined;
    } | undefined) => Promise<string | undefined>;
    newSdkKeysOperation: (operationName: string, tsFunctions: import("code-types").TsFunction[], config?: {
        manualProjectRoot?: string | undefined;
        skipYarnInstall?: boolean | undefined;
        dryrun?: boolean | undefined;
    } | undefined) => Promise<string | undefined>;
    newSdkOperation: (operationName: string, tsFunctions: import("code-types").TsFunction[], config?: {
        manualProjectRoot?: string | undefined;
        skipYarnInstall?: boolean | undefined;
        dryrun?: boolean | undefined;
    } | undefined) => Promise<string | undefined>;
    tsFunctionIsSdkable: (tsFunction: import("code-types").TsFunction, operationClassificationObject: import("generate-sdk-operations").OperationClassificationObject, operationClassification: "js" | "ts" | "node" | "server" | "web" | "app" | "ui-es6" | "ui-es5") => boolean;
    calculatePackageJsonDependencies: (dependencies: import("code-types").PackageInfoObject | undefined, imports: import("model-types").Creation<import("code-types").TsImport>[], packageJsons: import("code-types").PackageJson[]) => {
        newDependencies: import("code-types").PackageInfoObject;
        hasGeneratedDependencies: boolean;
    };
    findAndWriteImportsExports: (operationBasePath: string, manualProjectRoot?: string | undefined) => Promise<void>;
    getDefaultSymbolType: (symbol: import("ts-morph").Symbol, debug?: boolean | undefined) => import("get-imports-exports").TypeSpecifier;
    getExportSpecifierNames: (symbol: import("ts-morph").Symbol) => string[];
    getExportSymbolTypeRecursive: (symbol: import("ts-morph").Symbol, sourceFile: import("ts-morph").SourceFile, debug?: boolean | undefined) => import("get-imports-exports").TypeSpecifier | undefined;
    getImportSpecifiersWithNames: (sourceFile: import("ts-morph").SourceFile, names: string[]) => import("ts-morph").ImportSpecifier[];
    getImportsExports: ({ sourceFiles, debug, manualProjectRoot, }: {
        sourceFiles: import("ts-morph").SourceFile[];
        debug?: boolean | undefined;
        manualProjectRoot?: string | undefined;
    }) => Promise<import("get-imports-exports").ImportsAndExports | undefined>;
    getPackageNameFromAbsoluteImport: (absoluteImportName: string) => string | undefined;
    getSymbolTypeDeclarations: (symbol: import("ts-morph").Symbol) => (import("ts-morph").TypeAliasDeclaration | import("ts-morph").InterfaceDeclaration)[];
    getTypeFromImportSpecifierRecursive: (importSpecifier: import("ts-morph").ImportSpecifier, debug?: boolean | undefined, fileStack?: string[] | undefined) => import("get-imports-exports").TypeSpecifier | undefined;
    isAbsoluteImportBuiltin: (absoluteImportName: string) => boolean;
    isAbsoluteImport: (moduleString: string | undefined) => boolean;
    isImportFromOptionalFile: (tsImport: import("model-types").Creation<import("code-types").TsImport>) => boolean;
    writeResult: (options: {
        operationName: string;
        success: boolean;
        message: string;
    }) => Promise<false | undefined>;
    findAndUpsertTsInterfaces: ({ filePath, operationName, sourceFile, }: {
        sourceFile?: import("ts-morph").SourceFile | undefined;
        operationName: string;
        filePath: string;
    }) => Promise<import("model-types").Creation<import("code-types").TsInterface>[] | undefined>;
    findCommentTypes: (commentWithoutFrontmatter: string) => ("todo" | "discussion" | "idea" | "later" | "nb")[];
    generateSchema: (filePath: string, morphInterfaceInfo: import("index-typescript").MorphInterfaceInfo[], namedAbsoluteImportNames: string[]) => Promise<import("model-types").Creation<import("code-types").TsInterface>[]>;
    getAllComments: (tsMorphNode: import("ts-morph").VariableDeclaration | import("ts-morph").Statement<import("@ts-morph/common/lib/typescript").Statement> | import("ts-morph").Expression<import("@ts-morph/common/lib/typescript").Expression>, fileContent: string, operationRelativeTypescriptFilePath: string) => import("model-types").Creation<import("code-types").TsComment>[];
    getDbStorageMethod: ({ typeName, frontmatter, extensions, }: {
        typeName: string;
        frontmatter: import("matter-types").Frontmatter;
        extensions?: string[] | undefined;
    }) => "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv" | undefined;
    getFrontmatterDbStorageMethod: (parameters: import("matter-types").Frontmatter | null) => "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv" | null | undefined;
    getIndexId: (filePath: string, name: string) => Promise<import("model-types").TsIndexModelType | undefined>;
    getMaxIndentationDepth: (functionText: string) => number;
    getMinMaxValidation: (keyword: "min" | "max", type: string, value: number) => {};
    getNumberOfLines: (string: string) => number;
    getParamSchema: (type: import("ts-morph").Type<import("@ts-morph/common/lib/typescript").Type>, decorators?: import("ts-morph").Decorator[] | undefined, prop?: import("ts-morph").Symbol | undefined) => import("index-typescript").SimpleJsonSchema | undefined;
    getParametersFromInterfaces: (functionName: string, interfaces: import("model-types").Creation<import("code-types").TsInterface>[]) => import("code-types").FunctionParameter[];
    getPossibleRefs: (interfaces: import("model-types").Creation<import("code-types").TsInterface>[]) => {
        name: string;
        schema: import("json-schema").JSONSchema7;
    }[];
    getSizeSummary: (string: string) => import("code-types").SizeSummary;
    getSpecialExtensionDbStorageMethod: (extensions?: string[] | undefined) => "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv" | undefined;
    getTsStatements: (sourceFile: import("ts-morph").SourceFile, tsInterfaces: import("model-types").Creation<import("code-types").TsInterface>[], operationRelativeTypescriptFilePath: string, fileContent: string) => Promise<{
        tsFunctions: import("model-types").Creation<import("code-types").TsFunction>[];
        tsVariables: import("model-types").Creation<import("code-types").TsVariable>[];
    }>;
    getTypeInfo: (type: import("ts-morph").Type<import("@ts-morph/common/lib/typescript").Type>, schema?: import("json-schema").JSONSchema7 | undefined) => import("code-types").TypeInfo;
    getValidatedOperationPathParse: (filePath: string) => import("index-typescript").CompleteOperationPathParse | undefined;
    hasDefinition: typeof hasDefinition;
    indexTypescriptFile: (project: import("ts-morph").Project, file: import("index-typescript").CompleteOperationPathParse) => Promise<void>;
    indexTypescript: ({ filePaths, manualProjectRoot, }: {
        filePaths: string[];
        manualProjectRoot: string | null;
    }) => Promise<void>;
    isPrimitive: (type: import("ts-morph").Type<import("@ts-morph/common/lib/typescript").Type>) => boolean;
    makeTsComment: ({ commentRange, rawStatement, statementName, fileContent, operationRelativeTypescriptFilePath, }: {
        operationRelativeTypescriptFilePath: string;
        commentRange: import("ts-morph").CommentRange;
        statementName: string | undefined;
        rawStatement: string;
        fileContent: string;
    }) => import("model-types").Creation<import("code-types").TsComment>;
    schemaToTsInterface: (filePath: string, typeName: string, schema: import("json-schema").JSONSchema7, morphInterfaceInfo: import("index-typescript").MorphInterfaceInfo | undefined) => Promise<import("model-types").Creation<import("code-types").TsInterface> | undefined>;
    tryCreateSchema: (config: import("ts-json-schema-generator").Config) => {
        schema?: import("json-schema").JSONSchema7 | undefined;
        error?: string | undefined;
    };
    typeToSchema: (type: import("ts-morph").Type<import("@ts-morph/common/lib/typescript").Type>) => import("index-typescript").SimpleJsonSchema | undefined;
    dev: (manualProjectRoot?: string | undefined) => void;
    minifyBuild: ({ operationName, buildFolderPath, }: {
        operationName?: string | undefined;
        buildFolderPath?: string | undefined;
    }) => Promise<true | undefined>;
    getAvailableOperationName: (rootFolderPath: string, preferredFolderName: string, manualProjectRoot?: string | undefined) => Promise<string>;
    getOperationConfig: (operationName: string, description?: string | undefined) => Promise<import("code-types").OperationConfig>;
    newOperationWithFiles: (operationConfig: import("code-types").OperationConfig, srcFileContentObject: {
        [operationRelativeTypescriptFilePath: string]: string;
    }, config?: {
        manualProjectRoot?: string | undefined;
        destinationPath?: string | undefined;
        overwriteIfExists?: boolean | undefined;
        skipYarnInstall?: boolean | undefined;
        skipYarnBuild?: boolean | undefined;
        dryrun?: boolean | undefined;
    } | undefined) => Promise<string | undefined>;
    newOperation: (name?: string | undefined, config?: {
        description?: string | undefined;
        destinationPath?: string | undefined;
        manualProjectRoot?: string | undefined;
    } | undefined) => Promise<string | undefined>;
    nodemon: (operationName: string, cliFunctionName: string, vars?: string[] | undefined, manualProjectRoot?: string | undefined) => Promise<void>;
    clearTsDatabase: (operationName: string | undefined) => Promise<void>;
    executeCommandQuietUnlessFail: (config: {
        command: string;
        cwd?: string | undefined;
        description?: string | undefined;
    }) => boolean;
    exitIfProcessDependenciesChanged: (operationName: string, manualProjectRoot?: string | undefined) => Promise<void>;
    getFileIds: ({ operationFolderPath, pathSuffix, extension, }: {
        operationFolderPath: string;
        extension?: string | string[] | undefined;
        pathSuffix: string;
    }) => Promise<string[]>;
    getIndexFileIds: (operationFolderPath: string) => Promise<string[]>;
    getSrcIds: (operationFolderPath: string) => Promise<string[]>;
    isOperationBuildNeeded: (operationBasePath: string) => boolean;
    isSdkOperation: (operationBasePath: string) => boolean;
    rebuildAllOperations: (isRebuildingProcessUpdated?: boolean | undefined) => Promise<void>;
    rebuildOperation: ({ operationBasePath, manualProjectRoot, filePaths, force, debug, noExit, stack, updatedAt, noUnresolvedRebuilding, }: {
        updatedAt?: number | undefined;
        manualProjectRoot?: string | undefined;
        operationBasePath: string;
        filePaths?: string[] | undefined;
        noUnresolvedRebuilding?: boolean | undefined;
        force?: boolean | undefined;
        debug?: boolean | undefined;
        noExit?: boolean | undefined;
        stack?: string[] | undefined;
    }) => Promise<boolean>;
    shouldSkip: (config: {
        operationBasePath: string;
        debug?: boolean | undefined;
        force?: boolean | undefined;
        rebuildUpdatedAt?: number | undefined;
    }) => Promise<boolean>;
    yarnBuild: (operationBasePath: string, config?: {
        rmFirst?: boolean | undefined;
    } | undefined) => Promise<boolean>;
    allOperationsRemoveJsSrc: (debug?: boolean | undefined) => Promise<void>;
    clearAllTsDatabases: () => Promise<void>;
    codeAll: (search: string) => Promise<void>;
    forAllFiles: ({ filePaths, callback, command, }: import("all").ForAllFilesConfig) => Promise<void>;
    forAllFolders: ({ type, callback, basePath, onlyRoot, command, shell, fileName, folderName, ignore, }: {
        basePath?: string | string[] | undefined;
    } & {
        onlyRoot?: boolean | undefined;
        type?: import("all").DirectoryType | undefined;
        fileName?: string | undefined;
        folderName?: string | undefined;
        callback?: ((folderPath: string, index: number) => void) | undefined;
        command?: string | undefined;
        shell?: boolean | undefined;
        ignore?: string | string[] | undefined;
    }) => Promise<void>;
    getAllOperationClassifications: () => Promise<void>;
    gitShipAllRepos: ({ basePath, callback, fileName, folderName, shell, }: Omit<{
        basePath?: string | string[] | undefined;
    } & {
        onlyRoot?: boolean | undefined;
        type?: import("all").DirectoryType | undefined;
        fileName?: string | undefined;
        folderName?: string | undefined;
        callback?: ((folderPath: string, index: number) => void) | undefined;
        command?: string | undefined;
        shell?: boolean | undefined;
        ignore?: string | string[] | undefined;
    }, "type" | "command">) => Promise<void>;
    mdAllOperations: (debug?: boolean | undefined) => Promise<void>;
    minifyAllOperations: (config?: Omit<{
        basePath?: string | string[] | undefined;
    } & {
        onlyRoot?: boolean | undefined;
        type?: import("all").DirectoryType | undefined;
        fileName?: string | undefined;
        folderName?: string | undefined;
        callback?: ((folderPath: string, index: number) => void) | undefined;
        command?: string | undefined;
        shell?: boolean | undefined;
        ignore?: string | string[] | undefined;
    }, "type" | "command" | "fileName" | "folderName" | "callback" | "ignore"> | undefined) => Promise<void>;
    publishAllOperations: ({ basePath, callback, fileName, folderName, shell, }: Omit<{
        basePath?: string | string[] | undefined;
    } & {
        onlyRoot?: boolean | undefined;
        type?: import("all").DirectoryType | undefined;
        fileName?: string | undefined;
        folderName?: string | undefined;
        callback?: ((folderPath: string, index: number) => void) | undefined;
        command?: string | undefined;
        shell?: boolean | undefined;
        ignore?: string | string[] | undefined;
    }, "type" | "command">) => Promise<void>;
    removeAllFiles: (search: string) => Promise<void>;
    removeAllFolders: (config: {
        basePath: string;
        folderNames: string[];
        ignore?: string | string[] | undefined;
        onlyRoot?: boolean | undefined;
    }) => Promise<boolean>;
    removeAll: ({ basePath, fileName, folderName, type, shell, ignore, onlyRoot, }: Omit<{
        basePath?: string | string[] | undefined;
    } & {
        onlyRoot?: boolean | undefined;
        type?: import("all").DirectoryType | undefined;
        fileName?: string | undefined;
        folderName?: string | undefined;
        callback?: ((folderPath: string, index: number) => void) | undefined;
        command?: string | undefined;
        shell?: boolean | undefined;
        ignore?: string | string[] | undefined;
    }, "command">) => Promise<void>;
    renameAll: ({ filePaths, newFileName, newFilePath, }: {
        filePaths: string[];
        newFileName?: string | undefined;
        newFilePath?: ((oldPath: string) => string) | undefined;
    }) => Promise<void>;
    runScriptEverywhere: (script: string, startIndex?: number | undefined) => Promise<void>;
    setScriptEverywhere: (script: string, value: string) => Promise<void>;
    askOk: (question: string) => Promise<boolean>;
    ask: (question: string) => Promise<string>;
    getArgumentOrAsk: (argumentPosition: number, question: string, isNonInteractive?: boolean | undefined) => Promise<string>;
    getBundleSummary: (bundleConfig: import("bundle-types").BundleConfig) => import("bundle-util").BundleSummary;
    getDbModelsForBundle: (bundleConfig: import("bundle-types").BundleConfig) => Promise<import("code-types").TsInterface[]>;
    getDocsMarkdownReaderPages: (config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => Promise<import("bundle-util").MarkdownReaderPage[] | undefined>;
    getInternalLinks: (pages: import("bundle-util").MarkdownReaderPage[]) => void;
    getMarkdownReaderQueryPaths: (config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => Promise<string[] | undefined>;
    getPublicMarkdownFilePaths: (baseFolderPath: string, includeFoldersWithResults?: boolean | undefined) => Promise<{
        path: string;
        isFolder: boolean;
    }[]>;
    removeExtensionsFromPath: (relativePath: string) => string;
    removeNumberPrefix: (fileOrFolderName: string) => string;
    cleanupTsDatabase: (operationName: string) => Promise<{
        amountRemoved: number;
    } | undefined>;
    shouldDeleteTsModel: (tsModel: import("code-types").TsFunction | import("code-types").TsVariable | import("code-types").TsInterface | import("code-types").TsImport | import("code-types").TsComment | import("code-types").TsBuildError | import("code-types").TsLintWarning | import("code-types").TsExport, operationName: string, operationRelativePaths: string[]) => boolean;
    csvItemArrayToCsvString: <T_4 extends import("csv-util").CsvItemType>(csvModelData: T_4[]) => string;
    tryParseCsv: <T_5 extends import("csv-util").CsvItemType>(csvString: string) => T_5[] | null;
    filterInterfacesFromOperationNames: (tsInterface: import("code-types").TsInterface, operationNames?: string[] | undefined) => boolean | "" | null;
    getDbModelsFromOperations: (operationNames: string[]) => Promise<import("code-types").TsInterface[]>;
    findAllDependencyOperations: ({ operationNames, ignoreOperationNames, ignoreFilter, }: {
        operationNames: string[];
        ignoreOperationNames?: string[] | undefined;
        ignoreFilter?: ((operationName: string) => boolean) | undefined;
    }) => Promise<string[]>;
    findDependantsRecursively: (operationName: string, already?: string[] | undefined) => Promise<string[]>;
    findDependants: ({ operationName, importName, returnOperationName, }: {
        operationName: string;
        importName?: string | undefined;
        returnOperationName?: boolean | undefined;
    }) => Promise<string[]>;
    findDependenciesRecursively: (operationName: string, already: string[], ignore?: string[] | undefined, ignoreFilter?: ((operationName: string) => boolean) | undefined) => Promise<string[]>;
    findMonorepoModules: (operationName: string) => Promise<string[]>;
    getDependencyObject: () => Promise<{
        [x: string]: string[];
    }>;
    getDependencyTree: (operationNames: string[], stack: string[]) => Promise<import("find-all-dependency-operations").DependencyTree | null>;
    folderGetUpdatedAt: ({ folderPath, }: {
        folderPath: string;
    }) => Promise<number>;
    getAllOperationSourcePaths: (config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => Promise<string[]>;
    getImportedDependencies: ({ operationFolderPath, }: {
        operationFolderPath: string;
    }) => string[] | undefined;
    getPackage: (absoluteModuleString: string) => string;
    getOperationBins: (operationFolderPath: string) => Promise<string[]>;
    getOperationPackageName: (operationFolderPath: string) => Promise<string | undefined>;
    getPackageJson: (config: {
        operationFolderPath: string;
    }) => Promise<import("code-types").PackageJson | null>;
    getPackageSourcePaths: ({ operationBasePath, ignoreIndexFiles, allTypes, }: {
        operationBasePath: string;
        ignoreIndexFiles?: boolean | undefined;
        allTypes?: boolean | undefined;
    }) => Promise<string[]>;
    determineFileType: (filePath: string) => import("k-explore").FileType | null;
    exploreGitRepoFolders: (config: import("k-explore").BaseConfig) => Promise<string[]>;
    exploreMultiple: (searchConfigs: import("k-explore").SearchConfig[]) => Promise<import("code-types").TextJson[]>;
    exploreOperationFolders: (config: import("k-explore").BaseConfig) => Promise<string[]>;
    explorePreset: (preset: "markdown" | "todo" | "git" | "packages" | "docs" | "src", config?: import("k-explore").BaseConfig) => Promise<import("code-types").TextJson[]>;
    explore: ({ basePath, searchLevel, debug, ...other }: import("k-explore").SearchConfig) => Promise<import("code-types").TextJson[]>;
    findAllDotGitFolders: (config: import("k-explore").BaseConfig) => Promise<import("code-types").TextJson[]>;
    findAllPackages: (config?: {
        basePath: string | string[] | undefined;
    } | undefined) => Promise<import("code-types").TextJson[]>;
    preIndexLint: ({ operationFolderPath, }: {
        operationFolderPath: string;
    }) => Promise<string[]>;
    bundleFolderWithMarkdown: (absoluteFolderPath: string, fileName?: string | undefined) => Promise<{
        markdownParse: import("code-types").MarkdownParse;
        outline: string;
    }>;
    bundleToBookMarkdown: (config: {
        bundleConfig: import("bundle-types").BundleConfig;
        title?: string | undefined;
        coverImagePath?: string | undefined;
        isModulesIncluded?: boolean | undefined;
        manualProjectRoot?: string | undefined;
    }) => Promise<void>;
    bundleToMarkdown: ({ bundleConfigId, includeModules, }: {
        bundleConfigId: string;
        includeModules?: boolean | undefined;
    }) => string;
    deployToVercel: () => void;
    emailMarkdownParse: () => void;
    generateStaticSite: ({ projectRelativeMdFilePath, singlePage, }: {
        singlePage?: boolean | undefined;
        projectRelativeMdFilePath?: string | undefined;
    }) => void;
    getFunctionsInfo: (operationName: string) => Promise<{
        functionsOutline: string;
        functionsMarkdownParse: import("code-types").MarkdownParse | undefined;
        functionsMarkdownString: string | undefined;
    }>;
    getOutline: (markdownParse: import("code-types").MarkdownParse) => string | undefined;
    getTitlesRecursively: (chunk: import("code-types").MarkdownChunk) => import("markdown-parsings").NestedTitle[];
    makePropertiesTable: (properties: import("code-types").SimplifiedSchemaProperty[] | undefined) => string;
    markdownChunkToMarkdownStringRecursive: (markdownChunk: import("code-types").MarkdownChunk) => string;
    markdownChunksToMarkdownStringRecursive: (markdownChunks: import("code-types").MarkdownChunk[]) => string;
    markdownToSayable: ({ markdown, markdownFilePath, }: {
        markdownFilePath: string;
        markdown: import("code-types").MarkdownParse;
    }) => import("markdown-parsings").Sayable[];
    mdToPdf: ({ absoluteFilePath, markdown, markdownParse, pdfAbsoluteFilePath, }: {
        absoluteFilePath?: string | undefined;
        markdown?: string | undefined;
        markdownParse?: import("code-types").MarkdownParse | undefined;
        pdfAbsoluteFilePath?: string | undefined;
    }) => void;
    mergeMarkdownParse: (markdownParses: import("code-types").MarkdownParse[], fileName?: string | undefined) => import("code-types").MarkdownParse;
    noNewlines: (markdown: string | undefined) => string | undefined;
    operationRadio: () => void;
    operationToMarkdown: (config: {
        operationName: string;
        manualProjectRoot?: string | undefined;
        isSummary?: boolean | undefined;
        mergeDocsInline?: boolean | undefined;
        returnType?: "string" | "parse" | "save" | undefined;
    }) => Promise<string | import("code-types").MarkdownParse | undefined>;
    printNestedTitles: (nestedTitles: import("markdown-parsings").NestedTitle[] | undefined, depth?: number | undefined) => string | undefined;
    print: ({ absoluteFilePath }: {
        absoluteFilePath: string;
    }) => void;
    projectToMarkdown: ({ includeTodo, }: {
        includeTodo?: boolean | undefined;
        includeOperationDetails?: boolean | undefined;
    }) => string;
    propertyToTableRow: (property: import("code-types").SimplifiedSchemaProperty) => string;
    sayablesToMp3: ({ sayables, destinationAbsoluteFilePath, }: {
        destinationAbsoluteFilePath: string;
        sayables: import("markdown-parsings").Sayable[];
    }) => void;
    selectRandomOperation: (baseFolderPath?: string | undefined) => Promise<string>;
    simplifiedSchemaToMarkdownString: (simplifiedSchema: import("code-types").SimplifiedSchema | undefined, name: string | undefined, isRequired: boolean, level?: number | undefined) => string;
    tsFunctionToMarkdownString: (tsFunction: import("code-types").TsFunction) => string;
    tsInterfaceToMarkdownString: (tsInterface: import("code-types").TsInterface) => string;
    upMarkdownChunkLevelRecursively: (markdownChunks: import("code-types").MarkdownChunk[] | undefined) => import("code-types").MarkdownChunk[] | undefined;
    readCsvFileSync: <T_6 extends import("csv-util").CsvItemType>(filePath: string) => T_6[] | null;
    readCsvFile: <T_7 extends import("csv-util").CsvItemType>(filePath: string | undefined) => Promise<T_7[] | null>;
    readJsonFileSync: <T_8>(filePath: string) => T_8 | null;
    readJsonFile: <T_9>(filePath: string | undefined) => Promise<T_9 | null>;
    tryParseJson: <T_10>(text: string, logParseError?: boolean | undefined) => T_10 | null;
    readKvmdFile: (filePath: string, dbFileLocation: import("model-types").DbFileLocation) => Promise<import("model-types").KeyValueMarkdownParse | null>;
    omitUndefinedValues: <T_11 extends {
        [key: string]: any;
    }>(object: T_11) => T_11;
    readMarkdownFileToModel: (absoluteFilePath: string) => Promise<import("code-types").MarkdownFile | null>;
    readMarkdownFile: (filePath: string) => Promise<import("code-types").MarkdownParse | null>;
    isEqualArray: (array1: unknown[], array2: unknown[]) => boolean;
    renameTemplateFiles: ({ appDir }: {
        appDir: string;
    }) => Promise<void>;
    renameTemplateToNormalFile: (fileName: string) => string;
    renameToTemplateFile: (fileName: string) => string;
    setJsonKey: ({ jsonPath, keyLocation, value, debug, }: {
        jsonPath: string;
        keyLocation: string;
        value: string;
        debug?: boolean | undefined;
    }) => Promise<void>;
    getAllTsMorphSourceFiles: (operationBasePath: string) => Promise<import("ts-morph").SourceFile[] | undefined>;
    getHasGeneric: (type: import("ts-morph").TypeAliasDeclaration | import("ts-morph").InterfaceDeclaration) => boolean;
    getTsMorphProject: (operationFolderPath: string) => import("ts-morph").Project | undefined;
    initiateWatch: ({ client, debug, folderPath, }: {
        client: import("fb-watchman").Client;
        debug: boolean;
        folderPath: string;
    }) => void;
    makeSubscription: typeof makeSubscription;
    watchFoldersFs: ({ debug, folders, onChange, takeLatest, }: {
        debug?: boolean | undefined;
        folders: string[];
        takeLatest?: boolean | undefined;
        onChange: (event: {
            eventType: "rename" | "change";
            filePaths: string[];
            operationBasePath: string;
        }) => Promise<void>;
    }) => Promise<void>;
    watchFolders: ({ debug, folders, onChange, }: {
        debug?: boolean | undefined;
        folders: string[];
        onChange: import("watch-folders").OnChangeDetected;
    }) => Promise<void>;
    exitIfOperationsChange: (allOperationSourcePaths: string[]) => void;
    gitCommitAllCron: () => void;
    watchOperations: (config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => Promise<void>;
    writeToAssets: (filePath: string, data: any, assetsFileName?: string | undefined) => Promise<boolean | undefined>;
    markdownParseToMarkdownModelType: (markdownParse: import("code-types").MarkdownParse | null) => import("model-types").Storing<import("model-types").MarkdownModelType> | null;
    parseMarkdownModelTimestamp: (parameters: import("matter-types").Frontmatter, markdownParse: import("code-types").MarkdownParse, parameterName: "createdAt" | "updatedAt" | "deletedAt" | "createdFirstAt" | "openedAt") => number;
    tryParseDate: (dateString: string) => number | undefined;
    getCompileErrors: (operationBasePath: string, onlyDependants?: boolean | undefined) => Promise<import("model-types").Creation<import("code-types").TsBuildError>[]>;
    getTypescriptErrorsFromFiles: typeof getTypescriptErrorsFromFiles;
    writeBuildErrors: (operationBasePath: string, manualProjectRoot?: string | undefined) => Promise<void>;
    generateId: () => string;
    generatePassword: typeof generatePassword;
    generateRandomString: (length: number) => string;
    generateTime: () => number;
    isEmail: typeof isEmail;
    markdownModelTypeToMarkdownString: (markdownModelType: import("model-types").Storing<import("model-types").MarkdownModelType>) => string;
    ClickableIcon: (button: import("clickable-icon").ClickableIconType) => JSX.Element;
    stripCommentEnd: (trimmedLine: string) => string;
    stripCommentStart: (trimmedLine: string) => string;
    stripComment: (rawCommentString: string) => string;
    stripSlashes: (trimmedLine: string) => string;
    stripStar: (trimmedLine: string) => string;
    trim: (string: string) => string;
    camelCase: (text: string) => string;
    capitalCase: (text: string) => string;
    capitaliseFirstLetter: (word: string) => string;
    convertCase: (text: string, target: import("convert-case").Casing) => string;
    getDelimiter: (target: import("convert-case").Casing) => "" | "_" | " " | "-";
    humanCase: (text: string) => string;
    kebabCase: (text: string) => string;
    lowerCaseArray: (text: string) => string[];
    pascalCase: (text: string) => string;
    slugify: typeof slugify;
    snakeCase: (text: string) => string;
    hasSubExtension: (srcRelativeFileId: string, subExtensions: string | string[], includeRootName?: boolean | undefined) => boolean;
    isGeneratedOperationName: (operationName: string) => boolean;
    isGeneratedOperation: (operationBasePath: string) => boolean;
    isIndexableFileId: (fileId: string) => boolean;
    canAccessSync: (p: import("fs").PathLike, mode: number) => boolean;
    canAccess: (p: import("fs").PathLike, mode: number) => Promise<boolean>;
    canExecuteSync: (p: import("fs").PathLike) => boolean;
    canExecute: (p: import("fs").PathLike) => Promise<boolean>;
    canReadSync: (p: import("fs").PathLike) => boolean;
    canRead: (p: import("fs").PathLike) => Promise<boolean>;
    canSeeSync: (p: import("fs").PathLike) => Promise<boolean>;
    canSee: (p: import("fs").PathLike) => Promise<boolean>;
    canWriteSync: (p: import("fs").PathLike) => boolean;
    canWrite: (p: import("fs").PathLike) => Promise<boolean>;
    findAllMd: (folderPath: string, onlyInCurrentFolder?: boolean | undefined) => import("fs-util").Markdown[];
    findFileNameCaseInsensitive: (folderPath: string, fileName: string) => Promise<string | undefined>;
    findFilesRecursively: ({ match, basePath, relativePath, onlyInSubFolders, onlyInCurrentFolder, }: {
        match: (fileName: string, extension: string) => boolean;
        basePath: string;
        relativePath?: string | undefined;
        onlyInSubFolders?: boolean | undefined;
        onlyInCurrentFolder?: boolean | undefined;
    }) => import("fs-util").FolderPath[];
    findSensibleFiles: (slug: string, basePath: string) => import("fs-util").FolderPath[];
    getExtension: (fileNameOrPath: string) => string;
    getFileName: (pathString: string) => string;
    getFolder: (pathString: string) => string;
    getLastFolder: (pathString: string) => string;
    getPathCombinations: (...chunksSegments: (string | string[])[]) => string[];
    getSubExtension: (fileName: string) => string | undefined;
    importFromFiles: <T_12>({ files, importStrategy, list, guard, }: {
        files: string[];
        importStrategy?: "fileName" | "default" | "list" | undefined;
        list?: string[] | undefined;
        guard?: ((moduleExports: any) => boolean) | undefined;
    }) => T_12[];
    isArrayGuard: (moduleExports: any) => boolean;
    parseMd: (mdFilePath: string) => import("fs-util").Markdown;
    removeAllExcept: (folderPath: string, config?: {
        ignore?: string[] | undefined;
        typeToRemove?: "folder" | "file" | undefined;
    } | undefined) => Promise<{
        name: string;
        removed: boolean;
    }[]>;
    removeTrailingSlash: (p: string) => string;
    withoutExtension: (fileName: string) => string;
    writeJsonToFile: <T_13>(p: string, data: T_13) => Promise<boolean>;
    writeStringToFile: (p: string, data: string) => Promise<boolean>;
    writeToFiles: (fileObject: {
        [filePath: string]: any;
    }) => Promise<void>;
    findFolderWhereMatch: <T_14>(fullSourcePath: string, matchFunction: (folderPath: string) => T_14) => {
        folderPath: string;
        matchResult: T_14;
    } | undefined;
    findOperationBasePathWithClassification: (startPath: string) => {
        folderPath: string;
        classification: "js" | "ts" | "node" | "server" | "web" | "app" | "ui-es6" | "ui-es5";
    } | undefined;
    findOperationBasePath: (startPath: string) => string | undefined;
    getAllPackageJsonDependencies: (p: import("code-types").PackageJson) => string[];
    getOperationClassification: (folderPath: string) => "js" | "ts" | "node" | "server" | "web" | "app" | "ui-es6" | "ui-es5" | undefined;
    getOperationPathParse: (absolutePath: string) => import("code-types").OperationPathParse | undefined;
    getOperationPath: (operationName: string, config?: {
        manualProjectRoot?: string | undefined;
        notUseSdk?: boolean | undefined;
    } | undefined) => Promise<string | undefined>;
    getOperationRelativePath: (absolutePath: string, operationBasePath: string) => string;
    getPathParse: (absolutePath: string) => import("code-types").PathParse | undefined;
    getPathsWithOperations: (config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => string[];
    getProjectRoot: (fullSourcePath?: string | undefined) => string | undefined;
    getRelativePath: (absolutePath: string, relativeFrom: "project-root") => string | undefined;
    getRootPath: (name?: "operations" | "text" | "assets" | "backups" | "bundled" | "cloned" | "distributions" | "db" | undefined, config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => string | undefined;
    getSrcRelativeFileId: (operationRelativePath: string) => string;
    hasDependency: (packageJson: import("code-types").PackageJson, dependency: string) => boolean;
    isSensibleProject: (folderPath?: string | undefined) => boolean;
    isWorkspaceRoot: (folderPath: string) => {
        isSensibleProject: boolean;
        isWorkspaceRoot: boolean;
    } | undefined;
    makeRelative: (absolutePath: string, baseFolderPath: string) => string;
    getTsConfig: (packageFolder: string) => Promise<import("code-types").TsConfig | null>;
    apply: <T_15>(functions: ((input: T_15) => T_15)[], value: T_15) => T_15;
    createEnum: <T_16 extends readonly string[]>(array: T_16) => { [K in T_16[number]]: K; };
    findLastIndex: <T_17>(array: T_17[], findFn: (item: T_17) => boolean) => number | undefined;
    getObjectFromParamsString: (paramsString: string) => {
        [x: string]: string;
    };
    getObjectKeysArray: <TObject extends {
        [key: string]: any;
    }>(object: TObject) => Extract<keyof TObject, string>[];
    getSubsetFromObject: <T_18>(object: {
        [key: string]: T_18;
    }, keys: string[]) => {
        [key: string]: T_18;
    };
    groupByKey: <T_19 extends {
        [key: string]: any;
    }>(array: T_19[], key: keyof T_19) => {
        [key: string]: T_19[];
    };
    insertAt: <T_20>(array: T_20[], items: T_20 | T_20[], beforeIndex: number) => T_20[];
    isAllTrue: (array: boolean[]) => boolean;
    makeArray: <T_21>(...arrayOrNotArray: (T_21 | T_21[] | undefined)[]) => T_21[];
    mapAsync: <T_22, U>(array: T_22[], callback: (value: T_22, index: number, array: T_22[]) => Promise<U>) => Promise<Awaited<U>[]>;
    mapKeys: (object: {
        [key: string]: any;
    }, mapFn: (key: string) => string | Promise<string> | undefined) => Promise<{
        [x: string]: any;
    }>;
    mapMany: <T_23, U_1>(array: T_23[], mapFn: (item: T_23, index: number, array: T_23[]) => Promise<U_1>, limit?: number | undefined) => Promise<U_1[]>;
    mapValuesSync: <T_24, U_2>(object: {
        [key: string]: T_24;
    }, mapFn: (value: T_24) => U_2) => {
        [x: string]: U_2;
    };
    mergeObjectParameters: <T_25>(config: T_25 | undefined, defaults: T_25 | undefined) => Partial<T_25>;
    mergeObjectsArray: <T_26 extends {
        [key: string]: any;
    }>(objectsArray: T_26[]) => T_26;
    mergeObjects: <T_27 extends {
        [key: string]: any;
    }>(...objects: (Partial<T_27> | undefined)[]) => T_27 | undefined;
    notEmpty: typeof notEmpty;
    objectMapAsync: <TObject_1 extends {
        [key: string]: any;
    }, TResultValue, TResultObject extends { [key in keyof TObject_1]: TResultValue; }>(object: TObject_1, mapFn: (key: Extract<keyof TObject_1, string>, value: TObject_1[keyof TObject_1]) => Promise<TResultValue>) => Promise<TResultObject>;
    objectMapSync: <TObject_2 extends {
        [key: string]: any;
    }, TMapResult, TResultObject_1 extends { [key_1 in keyof TObject_2]: TMapResult; }>(object: TObject_2, mapFn: (key: keyof TObject_2, value: TObject_2[keyof TObject_2]) => TMapResult) => TResultObject_1;
    objectValuesMap: <T_28 extends {
        [key: string]: T_28[string];
    }, U_3 extends unknown>(object: T_28, mapFn: (key: string, value: T_28[string]) => U_3) => {
        [key: string]: U_3;
    };
    onlyUnique2: <U_4>(isEqualFn?: ((a: U_4, b: U_4) => boolean) | undefined) => <T_29 extends U_4>(value: T_29, index: number, self: T_29[]) => boolean;
    onlyUnique: typeof onlyUnique;
    removeIndexFromArray: <T_30>(array: T_30[], index: number) => T_30[];
    replaceLastOccurence: (string: string, searchValue: string, replaceValue: string) => string;
    reverseString: (string: string) => string;
    sumAllKeys: <T_31 extends {
        [key: string]: number | undefined;
    }>(objectArray: T_31[], keys: (keyof T_31)[]) => T_31;
    sumObjectParameters: <TObject_3 extends {
        [key: string]: number;
    }>(object1: TObject_3, object2: TObject_3) => TObject_3;
    sum: (items: number[]) => number;
    takeFirst: <T_32>(arrayOrNot: T_32 | T_32[]) => T_32;
    getSimpleJsonString: (json: import("json-util").Json) => string | undefined;
    flattenMarkdownChunks: (markdownChunks: import("code-types").MarkdownChunk[]) => import("code-types").MarkdownParagraph[];
    getKvmdItemsRecursively: (chunk: import("code-types").MarkdownChunk, categoryStackCalculatedUntilNow?: import("model-types").CategoryStack | undefined) => import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[];
    getParagraphsRecursively: (chunk: import("code-types").MarkdownChunk, categoryStackCalculatedUntilNow?: import("model-types").CategoryStack | undefined) => import("code-types").MarkdownParagraph[];
    kvmdDataMap: <T_33 extends {
        [key: string]: string | string[] | undefined;
    }>(data: import("model-types").KeyValueMarkdownModelType[], { keyName, valueName, categoryStackCalculatedName, commentName, }: {
        keyName?: string | undefined;
        valueName?: string | undefined;
        commentName?: string | undefined;
        categoryStackCalculatedName?: string | undefined;
    }) => T_33[];
    kvmdDataToString: (kvmdData: import("model-types").KeyValueMarkdownModelType, previous: import("model-types").KeyValueMarkdownModelType | undefined) => string;
    kvmdParseToMarkdownString: (keyValueMarkdownParse: import("model-types").KeyValueMarkdownParse) => string;
    markdownStringToKvmdParse: (kvMdString: string, dbFileLocation: import("model-types").DbFileLocation) => import("model-types").KeyValueMarkdownParse;
    parseKvmdLine: (string: string) => import("model-types").KvmdLine | undefined;
    getCallerFileName: () => string | undefined;
    log: (message: string, config?: import("log").LogConfig | undefined, data?: any) => void;
    parseTitle: (markdown: string) => {
        title: string;
        rest: string;
    };
    makeFileType: (filePath: string) => Promise<import("make-file-type").FileType | undefined>;
    isResultOfInterface: <TResult>(result: TResult, jsonSchema: unknown) => boolean;
    makeTest: <TResult_1>(testFunction: (() => Promise<TResult_1>) | (() => TResult_1), isValid?: ((result: TResult_1) => boolean) | undefined) => () => Promise<boolean>;
    markdownParseToMarkdownString: (markdownParse: import("code-types").MarkdownParse) => string;
    mdContentParseRecursively: (markdownString: string, level: number) => import("code-types").MarkdownChunk[];
    mdToJsonParse: (markdownString: string, fileName?: string | undefined) => import("code-types").MarkdownParse;
    parseFrontmatterMarkdownString: (markdownWithFrontmatter: string) => import("code-types").MarkdownParse;
    parseMdToChunks: (markdownString: string, level: number) => import("code-types").MarkdownChunk[];
    removeHeaderPrefix: (string: string) => string;
    frontmatterParseToString: (frontmatter: import("matter-types").Frontmatter) => string;
    getFrontmatterValueString: (value: import("matter-types").FrontmatterValue) => string | null;
    quotedOrNot: (string: string) => string;
    stringifyNewlines: (string: string) => string;
    getParameterContentType: (parameterName: string) => void;
    isCalculatedParameter: (parameterName: string) => boolean;
    isGeneratedParameterName: (parameterName: string) => void;
    ALink: ({ children, href, target, rel, linkProps, ...otherAProps }: {
        linkProps?: {
            href: string | import("url").UrlObject;
            as?: string | import("url").UrlObject | undefined;
            replace?: boolean | undefined;
            scroll?: boolean | undefined;
            shallow?: boolean | undefined;
            passHref?: boolean | undefined;
            prefetch?: boolean | undefined;
            locale?: string | false | undefined;
            legacyBehavior?: boolean | undefined;
            onMouseEnter?: ((e: any) => void) | undefined;
            onClick?: ((e: any) => void) | undefined;
        } | undefined;
    } & import("react").ClassAttributes<HTMLAnchorElement> & import("react").AnchorHTMLAttributes<HTMLAnchorElement> & {
        native?: import("react-native").TextProps | undefined;
        textClassName?: string | undefined;
    }) => JSX.Element;
    oneByOne: <T_34, U_5>(array: T_34[], callback: (instance: T_34, index: number) => Promise<U_5>) => Promise<U_5[]>;
    getDependenciesSummary: (operationName: string) => Promise<{
        coreDependencies: string[];
        operationDependencies: string[];
        packageDependencies: string[];
    }>;
    getOperationMetaData: (operationBasePath: string) => Promise<import("operation-util").OperationMetaData | undefined>;
    recalculateOperationIndexJson: (operationBasePath: string) => Promise<void>;
    writeKeyToOperationIndexJson: <K_1 extends keyof import("code-types").OperationIndex>(absolutePath: string, key: K_1, value: import("code-types").OperationIndex[K_1]) => Promise<void>;
    parsePrimitive: (string: string) => string | number | boolean | null | undefined;
    byteCount: typeof byteCount;
    calculatePathMetaData: (absolutePath: string) => Promise<import("code-types").PathMetaData | undefined>;
    categorizeFiles: ({ basePath, type, ignoreIndexFiles, }: {
        basePath: string | string[];
        ignoreIndexFiles?: boolean | undefined;
        type?: "code" | "data" | "text" | undefined;
    }) => Promise<import("code-types").CategorizedFilePaths>;
    getFolderSummary: (categorizedFiles: import("code-types").CategorizedFilePaths) => Promise<import("code-types").FolderSummary>;
    getPathMainComment: (absolutePath: string) => Promise<import("code-types").TsComment | undefined>;
    sumSizeSummary: (filePaths: string[]) => Promise<import("code-types").SizeSummary>;
    isPlural: (parameterName: string) => boolean;
    isSingular: (parameterName: string) => boolean;
    pluralize: (parameterName: string) => string;
    singularize: (parameterName: string) => string;
    runChildProcess: ({ operationFolderName, scriptFileName, args, }: {
        operationFolderName: string;
        scriptFileName: string;
        args?: string[] | undefined;
    }) => Promise<(string | null)[] | undefined>;
    getPossibleReferenceParameterNames: (parameterName: string) => string[];
    getProperties: (schema: import("json-schema").JSONSchema7 | undefined) => import("schema-util").SchemaProperty[];
    getRefLink: (ref?: string | undefined) => string | undefined;
    getReferencableModels: (simplifiedSchema?: import("code-types").SimplifiedSchema | undefined) => import("schema-util").ReferenceParameterInfo[] | undefined;
    getReferenceParameterInfo: (parameterName: string) => import("schema-util").ReferenceParameterInfo;
    getSchemaItems: (schema: import("json-schema").JSONSchema7 | undefined) => import("json-schema").JSONSchema7[];
    getSchema: (maybeSchema: import("json-schema").JSONSchema7Definition | undefined) => import("json-schema").JSONSchema7 | undefined;
    simplifiedSchemaToTypeDefinitionString: (simplifiedSchema?: import("code-types").SimplifiedSchema | undefined) => string;
    simplifySchema: (name: string | null, schema: import("json-schema").JSONSchema7, possibleRefs: {
        name: string;
        schema: import("json-schema").JSONSchema7;
    }[], rootStack: string[]) => import("code-types").SimplifiedSchema | undefined;
    findSentenceMatches: <T_35>(searchMessage: string, array: T_35[], getSentence?: ((x: T_35) => string) | undefined) => T_35[];
    searchRecursiveObjectArray: <T_36 extends {
        children?: T_36[] | undefined;
    } & Object>(array: T_36[], baseMatcher: (item: T_36) => boolean, afterMapper?: ((item: T_36, isMatch: boolean, hasChildMatch: boolean) => T_36) | undefined) => T_36[];
};
export declare type SdkType = typeof sdk;
//# sourceMappingURL=sdk.d.ts.map