import { hasDefinition } from "index-typescript";
import { makeSubscription } from "watch-folders";
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
    runTestsForOperation: (operationName: string, writeResultsToIndex?: boolean | undefined, manualProjectRoot?: string | undefined) => Promise<boolean | undefined>;
    runTests: (test: import("k-test").Test, operationName?: string | undefined) => Promise<boolean>;
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
    initiateWatch: ({ client, debug, folderPath, }: {
        client: import("fb-watchman").Client;
        debug: boolean;
        folderPath: string;
    }) => void;
    makeSubscription: typeof makeSubscription;
    pickWatcher: () => ({ debug, folders, onChange, takeLatest, }: {
        debug?: boolean | undefined;
        folders: string[];
        takeLatest?: boolean | undefined;
        onChange: (event: {
            eventType: "rename" | "change";
            filePaths: string[];
            operationBasePath: string;
        }) => Promise<void>;
    }) => Promise<void>;
    watchFoldersChokidar: ({ debug, folders, onChange, takeLatest, }: {
        debug?: boolean | undefined;
        folders: string[];
        takeLatest?: boolean | undefined;
        onChange: (event: {
            eventType: "rename" | "change";
            filePaths: string[];
            operationBasePath: string;
        }) => Promise<void>;
    }) => Promise<void>;
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
    writeToAssets: (filePath: string, data: any, assetsFileName?: string | undefined) => Promise<boolean | undefined>;
};
export declare type SdkType = typeof sdk;
//# sourceMappingURL=sdk-api.d.ts.map