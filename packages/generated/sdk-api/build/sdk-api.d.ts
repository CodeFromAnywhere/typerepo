/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { earthDistance } from "himalayajeep-functions";
import { hasDefinition } from "index-typescript";
import { setKeyAtLocation } from "set-json-key";
import { makeSubscription } from "watch-folders";
import { getTypescriptErrorsFromFiles } from "compile-typescript";
import { slugify } from "convert-case";
import { notEmpty } from "js-util";
import { onlyUnique } from "js-util";
import { generatePassword } from "model-types";
import { isEmail } from "model-types";
import { byteCount } from "path-util";
import { getEncoding } from "text-or-binary";
import { isBinary } from "text-or-binary";
import { isText } from "text-or-binary";
export declare const sdk: {
    allOperationsRemoveJsSrc: (debug?: boolean | undefined) => Promise<void>;
    allOperationsToMarkdown: () => Promise<void>;
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
    }, "command" | "type">) => Promise<void>;
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
    }, "command" | "type" | "fileName" | "folderName" | "callback" | "ignore"> | undefined) => Promise<void>;
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
    }, "command" | "type">) => Promise<void>;
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
    compressAsset: (absolutePath: string, compressionConfig: import("asset-type").CompressionConfig) => Promise<string>;
    convertToMp3: (sourcePath: string, destinationPath: string) => Promise<string | undefined>;
    deleteReferencedAsset: (projectRelativeReferencingFilePath: string, referencingFileRelativeAssetPath: string) => Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    downloadRemoteAsset: () => Promise<import("asset-type").UploadAssetResult>;
    findAbsoluteAssetPathFromReference: (projectRelativeReferencingFilePath: string, referencingFileRelativeAssetPath: string) => Promise<{
        isSuccessful: boolean;
        message: string;
        absoluteAssetPath?: string | undefined;
    }>;
    findAllProjectMedia: (searchQuery?: string | undefined, returnType?: "projectRelative" | "absolute" | undefined) => Promise<string[]>;
    findAssetParametersRecursively: (object: {
        [key: string]: any;
    }, stack?: string[] | undefined) => import("asset-functions-node").AssetParameter[];
    getAssetDirectlyGetApi: (serverContext: import("server/typings/common").Context) => void | {
        isSuccessful: boolean;
        message: string;
    };
    getReferencedAssetGetApi: (serverContext: import("server/typings/common").Context) => Promise<{
        isSuccessful: boolean;
        isUnauthorized?: boolean | undefined;
        message: string;
    }>;
    getStorageLocationInfo: (absoluteReferencingFilePath: string, modelName?: string | undefined) => {
        type: "typescript" | "database" | "markdown";
        absoluteAssetBaseFolderPath: string;
    };
    getTemporaryAssetsFolderPath: () => string;
    processAsset: (backendAsset?: import("asset-type").BackendAsset | import("asset-type").BackendAsset[] | undefined) => Promise<import("asset-type").BackendAsset | undefined>;
    processItemAssets: <KInterfaceName extends string | number | symbol>(item: import("model-types").AugmentedAnyModelType, interfaceName: KInterfaceName, operationName: string | null, customQueryConfig: import("fs-orm").CustomQueryConfig) => Promise<import("model-types").AugmentedAnyModelType | undefined>;
    removeOldTemporaryAssets: () => Promise<{
        removedAmount: number;
    }>;
    serverDownloadReply: (absoluteAssetPath: string, isDownload: boolean) => any;
    uploadAssetWithContext: (functionContext: import("function-context-type").FunctionContext) => Promise<import("asset-type").UploadAssetResult>;
    getAugmentedWordObject: (manualProjectRoot?: string | undefined) => Promise<import("js-util").MappedObject<import("augmented-word-types").AugmentedWord> | undefined>;
    getAugmentedWords: (manualProjectRoot?: string | undefined) => Promise<import("augmented-word-types").AugmentedWord[]>;
    getBundleAugmentedWords: () => Promise<import("augmented-word-types").AugmentedWord[]>;
    getBundleSummary: (bundleConfig: import("bundle-types").BundleConfig) => import("bundle-util").BundleSummary;
    getDbModelsForBundle: (bundleConfig: import("bundle-types").BundleConfig) => Promise<import("code-types").TsInterface[]>;
    execAsync: (command: string) => Promise<{
        success: boolean;
        response: string;
    }>;
    spawnAsync: (command: string, options: import("child_process").SpawnOptionsWithoutStdio) => Promise<{
        success: boolean;
        response: string;
        data?: string[] | undefined;
    }>;
    cleanupTsDatabase: (operationName: string, manualProjectRoot?: string | undefined) => Promise<{
        amountRemoved: number;
    } | undefined>;
    shouldDeleteTsModel: (tsModel: import("code-types").TsInterface | import("code-types").TsFunction | import("code-types").TsComment | import("code-types").TsBuildError | import("code-types").TsLintWarning | import("code-types").TsExport | import("code-types").TsImport | import("code-types").TsVariable, operationName: string, operationRelativePaths: string[]) => boolean;
    csvItemArrayToCsvString: <T extends import("csv-util").CsvItemType>(csvModelData: T[]) => string;
    tryParseCsv: <T_1 extends import("csv-util").CsvItemType>(csvString: string) => T_1[] | null;
    generateCsvInstance: () => import("model-types").Creation<import("database").CsvTestModel>;
    generateJsonSingleInstance: () => import("model-types").Creation<import("database").DefaultTestModel>;
    generateKvmdInstance: () => import("model-types").Creation<import("database").KvmdTestModel>;
    generateMarkdownInstance: () => import("model-types").Creation<import("database").MarkdownTestModel>;
    generateSlugTestModel: () => import("model-types").Creation<import("database").SlugTestModel>;
    getMergedQueryConfig: (modelName: string | number | symbol, customQueryConfig?: import("fs-orm").CustomQueryConfig | undefined) => import("fs-orm").MergedQueryConfig;
    randomName: () => string;
    runModelEndToEndTest: (modelName: keyof import("database").TestModels, generateInstance: () => import("model-types").Creation<import("model-types").AnyModelType>) => Promise<boolean>;
    testOperationModels: () => Promise<boolean>;
    cacheLookup: (functionName: string, parameters: any[] | undefined) => import("db-recipes").CacheLookupResult;
    calculateOperatingSystemBundle: (manualProjectRoot?: string | undefined) => Promise<void>;
    deleteDbModel: <KInterface extends "TsConfig" | "SelfSprintReview" | "TodoFile" | "TodoOffer" | "AuthorizationModel" | "Device" | "Group" | "PageVisit" | "PaymentCoupon" | "PaymentEvent" | "PaymentPlan" | "PaymentSubscription" | "PeerMessage" | "Person" | "Persona" | "PersonInformation" | "PersonInformationValue" | "PersonPlatformConnection" | "Platform" | "RecurringReminder" | "Interest" | "MediaChannel" | "MediaCredentail" | "MediaPost" | "Postable" | "BundleConfig" | "Dataset" | "FunctionExecution" | "Operation" | "SocialMediaCallToAction" | "TsBuildError" | "TsComment" | "TsExport" | "TsFunction" | "TsImport" | "TsInterface" | "TsLintWarning" | "TsVariable" | "TypescriptFile" | "WebMarkdownFile" | "WebsiteCallToAction" | "Address" | "Area" | "City" | "Country" | "Location" | "KvmdWord" | "MarkdownWord" | "NepaliEnglishTranslationMatrix" | "Statement" | "TokiPonaMatrix" | "Translation" | "Word" | "WordCategory" | "WordCombination" | "WordMatrix" | "SlugModelType" | "AppDeveloper" | "Assignment" | "Bag" | "Calendar" | "Deliverable" | "Diary" | "Feeling" | "FeelingLog" | "Folder" | "Host" | "Inventory" | "Item" | "ItemCategory" | "KvmdShortcut" | "Label" | "Light" | "Listing" | "LoginCredential" | "Material" | "MessagePreset" | "PersonalCarbonFootprintProfile" | "ProgressReport" | "Question" | "Reservation" | "Resource" | "Shit" | "ShitLog" | "ShoppingList" | "Shortcut" | "Student" | "Student2" | "TaskError" | "Trackable" | "User" | "UserCredential" | "Artist" | "PlayCategory" | "PlayItem" | "PlayList" | "PlaySchedule" | "RelationModelType" | "JeepType" | "LocationType" | "OperationConfig" | "OperationIndex" | "PackageJson" | "Activity" | "CompanyRequirement" | "CompanySize" | "CompanyType" | "Company" | "ContactInformation" | "Contribution" | "EsgMetric" | "ProductCategory" | "Product" | "ProofState" | "Proof" | "SustainabilityPlan" | "ValueChainPhase">(interfaceName: KInterface, id: string) => Promise<import("fs-orm").DbQueryResult>;
    getDatabaseMenu: (config?: {
        bundleId?: string | undefined;
    } | undefined) => Promise<{
        menu: import("code-types").ModelInfo[];
    }>;
    getDbModelMetadata: (modelName: string | undefined) => Promise<{
        tsInterface?: import("code-types").TsInterface | undefined;
        datasets?: import("code-types").Dataset[] | undefined;
        projectRelativeStorageFilePath?: string | undefined;
    }>;
    getDbModelNames: (config?: {
        bundleId?: string | undefined;
    } | undefined) => Promise<(string | number | symbol)[]>;
    getDbModel: <KInterface_1 extends string | number | symbol, TDatasetConfig extends import("code-types").DatasetConfig>(interfaceName: KInterface_1 | null, datasetConfig?: TDatasetConfig | undefined, search?: string | undefined) => Promise<import("db-recipes").GetDbModelResult<KInterface_1>>;
    getFunctionIndex: ({ functionName, }: {
        functionName: string;
    }) => Promise<{
        success: boolean;
        response: string;
        function?: import("code-types").TsFunction | undefined;
    }>;
    getNestedDatabaseMenu: (config?: {
        noOperationPath?: boolean | undefined;
        noOperationName?: boolean | undefined;
        noSrcRelativeFolder?: boolean | undefined;
        noPrefix?: boolean | undefined;
    } | undefined) => Promise<string[]>;
    getReferencableModelData: (dbModelName: string | number | symbol) => Promise<{
        id: string;
        name: any;
        slug: any;
        categoryStackCalculated: any;
    }[]>;
    hasDbRecipes: () => boolean;
    makeSrcRelativeFolder: (operationRelativeTypescriptFilePath: string) => string | undefined;
    tsInterfaceToDbMenu: (tsInterface: import("code-types").TsInterface, type: string) => {
        name: string;
        operationName: string;
        type: string;
        srcRelativeFolder: string | undefined;
    } | undefined;
    upsertDbModel: <KInterfaceName_1 extends string | number | symbol, KItem extends DbModels>(interfaceName: KInterfaceName_1, data: KItem | KItem[], isNew?: boolean | undefined) => Promise<import("fs-orm").DbQueryResult>;
    validateInput: (functionName: string, parameters: any[] | undefined, tsFunction: import("code-types").TsFunction) => {
        isValid: boolean;
        errors?: {
            fieldStack: string[];
            error: string;
        }[] | undefined;
    };
    filterInterfacesFromOperationNames: (tsInterface: import("code-types").TsInterface, operationNames?: string[] | undefined) => boolean | "" | null;
    getDbModelsFromOperations: (operationNames: string[]) => Promise<import("code-types").TsInterface[]>;
    comparePassword: (rawPassword: string, encryptedPassword: string) => Promise<boolean>;
    encryptPassword: (rawPassword: string) => Promise<string>;
    findAllDependencyOperations: ({ imports, operations, operationNames, ignoreOperationNames, ignoreFilter, }: {
        imports: import("code-types").TsImport[];
        operations: import("code-types").Operation[];
        operationNames: string[];
        ignoreOperationNames?: string[] | undefined;
        ignoreFilter?: ((operationName: string) => boolean) | undefined;
    }) => Promise<string[]>;
    findDependantsRecursively: (operationName: string, already?: string[] | undefined) => Promise<string[]>;
    findDependants: (config: {
        operationName: string;
        importName?: string | undefined;
        returnOperationName?: boolean | undefined;
        imports?: import("code-types").TsImport[] | undefined;
        onlyExternal?: boolean | undefined;
    }) => Promise<string[]>;
    findDependenciesRecursively: (imports: import("code-types").TsImport[], operations: import("code-types").Operation[], operationName: string, already: string[], ignore?: string[] | undefined, ignoreFilter?: ((operationName: string) => boolean) | undefined) => Promise<string[]>;
    findMonorepoModules: (operationName: string) => Promise<string[]>;
    getDependencyObject: () => Promise<{
        [x: string]: string[];
    }>;
    getDependencyTree: (operationNames: string[], stack: string[]) => Promise<import("find-all-dependency-operations").DependencyTree | null>;
    folderGetUpdatedAt: ({ folderPath, }: {
        folderPath: string;
    }) => Promise<number>;
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
    getAugmentedData: <T_2>(dbFileLocation: import("model-types").DbFileLocation, dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv") => Promise<T_2[] | null>;
    getDatabaseFiles: (modelName: string, mergedConfig: import("fs-orm").MergedQueryConfig) => Promise<import("model-types").DbFileLocation[]>;
    getDatabaseRootFolder: (operationName: string | null | undefined, manualProjectRoot?: string | undefined) => Promise<string | undefined>;
    getDbFileLocation: (storedItem: import("model-types").Storing<import("model-types").AugmentedAnyModelType>, operationName: string | null, mergedConfig: import("fs-orm").MergedQueryConfig, modelName: string) => Promise<import("model-types").DbFileLocation | undefined>;
    getDbStorageMethodExtension: (dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv") => string;
    getDefaultLocationPattern: (dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv", modelName: string) => string | undefined;
    getItemModelLocation: <T_3 extends {
        [key: string]: any;
    }>(item: T_3) => import("model-types").ModelLocation;
    getLength: (array: any[]) => number;
    getLocationPattern: (dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv", modelName: string, mergedConfig: import("fs-orm").MergedQueryConfig) => string | undefined;
    getMergedConfigOperationPath: (mergedConfig: import("fs-orm").MergedQueryConfig, manualProjectRoot?: string | undefined) => Promise<string | false | undefined>;
    getParentSlug: (item: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>) => string | undefined;
    getRootFolders: (config: {
        manualProjectRoot?: string | undefined;
        projectRoot: string;
        mergedConfig: import("fs-orm").MergedQueryConfig;
        operationPath: string | false;
    }) => Promise<import("fs-orm").RootDbFolder[]>;
    getWildcardDbFileLocations__OLD: (options: {
        modelName: string;
        parsedPath: import("path").ParsedPath;
        operationName: string | null;
        projectRoot: string;
        rootFolder: import("fs-orm").RootDbFolder;
    }) => Promise<import("model-types").DbFileLocation[]>;
    getWildcardDbFileLocations: (options: {
        modelName: string;
        parsedPath: import("path").ParsedPath;
        operationName: string | null;
        projectRoot: string;
        rootFolder: import("fs-orm").RootDbFolder;
    }) => Promise<import("model-types").DbFileLocation[]>;
    groupByFile: <T_4 extends {
        [key: string]: any;
    }>(creationItems: import("model-types").Creation<T_4>[], mergedConfig: import("fs-orm").MergedQueryConfig, modelName: string) => Promise<import("fs-orm").ItemPerFileObject<T_4>>;
    makeStoringItem: <T_5 extends import("model-types").AugmentedAnyModelType>(item: T_5) => import("model-types").Storing<T_5>;
    mergeConfigs: <TModels_1 extends import("fs-orm").AnyModelObject>(modelName: Extract<keyof TModels_1, string>, dbConfig?: import("fs-orm").DbConfig<TModels_1> | undefined, config?: import("fs-orm").CustomQueryConfig | import("fs-orm").GetQueryConfig<TModels_1[keyof TModels_1]> | undefined) => import("fs-orm").MergedQueryConfig;
    removeKeyValueMarkdown: (storedData: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[], slug: string) => import("fs-orm").DbQueryResult & {
        newStoredData: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[];
    };
    removeMultiple: (dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv", dbFileLocation: import("model-types").DbFileLocation, removeWhere: (content: import("model-types").AugmentedAnyModelType) => boolean) => Promise<import("fs-orm").DbQueryResult>;
    upsertItems: <TModels_2 extends import("fs-orm").AnyModelObject = any, TModelName extends string = any>(dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv", dbFileLocation: import("model-types").DbFileLocation, storingItems: import("model-types").Storing<TModels_2[TModelName]> | import("model-types").Storing<TModels_2[TModelName]>[], onlyInsert?: boolean | undefined) => Promise<import("fs-orm").DbQueryResult>;
    upsertKeyValueMarkdown: (storedData: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[], storingItem: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>) => import("fs-orm").DbQueryResult & {
        newStoredData: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[];
    };
    upsert: (storedData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[], storingItems: import("model-types").Storing<import("model-types").AugmentedAnyModelType> | import("model-types").Storing<import("model-types").AugmentedAnyModelType>[], onlyInsert?: boolean | undefined) => import("fs-orm").DbQueryResult & {
        newStoredData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[];
    };
    getExtension: (fileNameOrPath: string) => string;
    getFileOrFolderName: <T_6 extends string | undefined>(fileOrFolderPath: T_6) => T_6;
    getFolderJs: <T_7 extends string | undefined>(filePath: T_7) => T_7;
    getSubExtension: (fileName: string) => string | undefined;
    isPathRelative: (path: string) => boolean;
    removeTrailingSlash: (p: string) => string;
    withoutExtension: (fileName: string) => string;
    getFunctionExecutions: (functionName: string | undefined) => Promise<import("code-types").FunctionExecution[]>;
    getFunctionQueryPaths: (tsFunctions?: import("code-types").TsFunction[] | undefined) => Promise<string[]>;
    getPublicBundleConfig: () => Promise<import("function-types").PublicBundleConfig | undefined>;
    getSrcRelativeFolderPath: (operationRelativeSourcePath: string) => string | undefined;
    getTsFunction: (functionName?: string | undefined) => Promise<import("function-types").FunctionData | undefined>;
    calculateDeviceName: (ipInfo: import("peer-types").IPInfo, userAgent: import("peer-types").IResult) => string;
    executeFunctionWithParameters: (functionName: string | number | symbol, parameters: any[] | undefined, serverContext: import("server/typings/common").Context) => Promise<import("api-types").ApiReturnType<any>>;
    getAuthorizationInfo: (device: import("peer-types").Device, tsFunction: import("code-types").TsFunction) => import("function-server-endpoints").AuthorizationInfo;
    isGetEndpoint: (functionName: string) => boolean;
    savePageVisit: (deviceId: string, ipInfo: import("peer-types").IPInfo, referer: string) => Promise<void>;
    storeFunctionExecution: (tsFunction: import("code-types").TsFunction, inputParameters: any[] | undefined, output: any, performance: import("measure-performance").PerformanceItem[], isResultFromCache: boolean) => Promise<void>;
    upsertDevice: (serverContext: import("server/typings/common").Context) => Promise<import("peer-types").Device | undefined>;
    generateNamedIndex: ({ operationName, manualProjectRoot, }: {
        manualProjectRoot?: string | undefined;
        operationName: string;
    }) => Promise<void>;
    generateSimpleIndex: ({ operationName, manualProjectRoot, }: {
        operationName: string;
        manualProjectRoot?: string | undefined;
    }) => Promise<string | undefined>;
    isTestFn: (x: import("generate-index").ImportStatement) => boolean;
    mapToImportStatement: (item: import("code-types").TsInterface | import("code-types").TsFunction | import("code-types").TsVariable, type: "function" | "variable" | "interface") => import("generate-index").ImportStatement;
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
    generateFunctionPathsSdk: (config?: {
        manualProjectRoot?: string | undefined;
        skipYarnInstall?: boolean | undefined;
        dryrun?: boolean | undefined;
    } | undefined) => Promise<void>;
    generateFunctionSdks: (config?: {
        manualProjectRoot?: string | undefined;
        skipYarnInstall?: boolean | undefined;
        dryrun?: boolean | undefined;
    } | undefined) => Promise<void>;
    generateInterfacePathsSdk: (config?: {
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
    getSdkDescription: (operationName: string) => Promise<string | undefined>;
    getSdkFunctionsPerClassification: (config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => Promise<import("generate-sdk-operations").FunctionsPerClassification | undefined>;
    newEnvSdk: (bundleConfig: import("bundle-types").BundleConfig, type: "public" | "private", config?: {
        manualProjectRoot?: string | undefined;
        skipYarnInstall?: boolean | undefined;
        dryrun?: boolean | undefined;
    } | undefined) => Promise<string | undefined>;
    newFunctionKeysSdkOperation: (operationName: string, keyVariables: {
        variableName: string;
        values: string[];
    }[], config?: {
        manualProjectRoot?: string | undefined;
        skipYarnInstall?: boolean | undefined;
        dryrun?: boolean | undefined;
    } | undefined) => Promise<string | undefined>;
    newFunctionSdkOperation: (operationName: string, tsFunctions: import("code-types").TsFunction[], config?: {
        manualProjectRoot?: string | undefined;
        skipYarnInstall?: boolean | undefined;
        dryrun?: boolean | undefined;
    } | undefined) => Promise<string | undefined>;
    tsFunctionIsIndexable: (tsFunction: import("code-types").TsFunction) => boolean;
    tsFunctionIsSdkable: (tsFunction: import("code-types").TsFunction, operationClassificationObject: import("get-path").OperationClassificationObject, operationClassification: "cjs" | "ts" | "esm" | "node-cjs" | "node-esm" | "node-ts" | "server-cjs" | "ui-web" | "ui-app" | "ui-ts" | "ui-cjs" | "ui-esm") => boolean;
    updateClassifications: () => void;
    getAllOperationSourcePaths: (config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => Promise<string[]>;
    getImportedDependencies: ({ operationFolderPath, }: {
        operationFolderPath: string;
    }) => string[] | undefined;
    getPackage: (absoluteModuleString: string) => string;
    isAbsoluteImport: (moduleString: string) => boolean;
    calculatePackageJsonDependencies: (dependencies: import("code-types").PackageInfoObject | undefined, imports: import("model-types").Creation<import("code-types").TsImport>[], operations: import("code-types").Operation[], operationName: string) => {
        newDependencies: import("code-types").PackageInfoObject;
        hasGeneratedDependenciesIndexed: boolean;
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
    isImportFromOptionalFile: (tsImport: import("model-types").Creation<import("code-types").TsImport>) => boolean;
    writeResult: (options: {
        operationName: string;
        success: boolean;
        message: string;
        manualProjectRoot?: string | undefined;
    }) => Promise<false | undefined>;
    getOperationBins: (operationFolderPath: string) => Promise<string[]>;
    getOperationPackageName: (operationFolderPath: string) => Promise<string | undefined>;
    getPackageJson: (config: {
        operationFolderPath: string;
    }) => Promise<import("code-types").Operation | null>;
    getPackageSourcePaths: ({ operationBasePath, ignoreIndexFiles, allTypes, }: {
        operationBasePath: string;
        ignoreIndexFiles?: boolean | undefined;
        allTypes?: boolean | undefined;
    }) => Promise<string[]>;
    driverLogin: (emailOrPhone: string, password: string) => Promise<{
        isSuccessful: boolean;
        message: string;
        loginToken?: string | undefined;
    }>;
    driverSignup: (driverInfo: import("himalayajeep-types").SignupJeepType) => Promise<{
        isSuccesful: boolean;
        message: string;
    }>;
    earthDistance: typeof earthDistance;
    getMyJeep: (loginToken: string) => Promise<{
        isSuccessful: boolean;
        message?: string | undefined;
        myJeep?: import("himalayajeep-types").MyJeepType | undefined;
    }>;
    getPublicJeeps: (position?: import("geo-types").Position | undefined) => Promise<{
        publicJeeps: import("himalayajeep-types").PublicJeepType[];
    }>;
    updateMyProfile: (loginToken: string, myJeep: Omit<import("himalayajeep-types").MyJeepType, "id" | "createdAt" | "updatedAt" | keyof import("himalayajeep-types").MyJeepAdminTypes>) => Promise<{
        isSuccesful: boolean;
        message: string;
    }>;
    findAndUpsertTsInterfaces: (config: {
        sourceFile?: import("ts-morph").SourceFile | undefined;
        operationName: string;
        filePath: string;
        projectRoot?: string | undefined;
    }) => Promise<import("model-types").Creation<import("code-types").TsInterface>[] | undefined>;
    findCommentTypes: (commentWithoutFrontmatter: string) => ("description" | "todo" | "discussion" | "idea" | "later" | "nb" | "title" | "section")[];
    generateSchema: (filePath: string, morphInterfaceInfo: import("index-typescript").MorphInterfaceInfo[], namedAbsoluteImportNames: string[]) => Promise<import("model-types").Creation<import("code-types").TsInterface>[]>;
    getAllComments: (tsMorphNode: import("ts-morph").VariableDeclaration | import("ts-morph").Statement<import("@ts-morph/common/lib/typescript").Statement> | import("ts-morph").Expression<import("@ts-morph/common/lib/typescript").Expression>, fileContent: string, operationRelativeTypescriptFilePath: string) => import("model-types").Creation<import("code-types").TsComment>[];
    getDbStorageMethod: (config: {
        typeName: string;
        frontmatter: import("matter-types").Frontmatter;
        extensions?: string[] | undefined;
    }) => "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv" | undefined;
    getFrontmatterDbStorageMethod: (parameters: import("matter-types").Frontmatter | null) => "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv" | null | undefined;
    getFrontmatterFunctionParameters: (frontmatter: import("matter-types").Frontmatter) => {
        runEveryPeriod: "minute" | "5-minutes" | "quarter-hour" | "hour" | "6-hours" | "midnight" | "week" | "month" | "3-months" | "year" | undefined;
        isApiExposed: boolean;
    };
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
    indexTypescriptFile: (project: import("ts-morph").Project, file: import("index-typescript").CompleteOperationPathParse, projectRoot: string) => Promise<void>;
    indexTypescript: ({ filePaths, manualProjectRoot, }: {
        filePaths: string[];
        manualProjectRoot: string | null;
    }) => Promise<void>;
    isPrimitive: (type: import("ts-morph").Type<import("@ts-morph/common/lib/typescript").Type>) => boolean;
    makeTsComment: (config: {
        operationRelativeTypescriptFilePath: string;
        commentRange: import("ts-morph").CommentRange;
        statementName: string | undefined;
        rawStatement: string;
        fileContent: string;
    }) => import("model-types").Creation<import("code-types").TsComment>;
    removeTypescriptIndex: import("watch-types").ProjectWatcher;
    schemaToTsInterface: (filePath: string, typeName: string, schema: import("json-schema").JSONSchema7, morphInterfaceInfo: import("index-typescript").MorphInterfaceInfo | undefined) => Promise<import("model-types").Creation<import("code-types").TsInterface> | undefined>;
    setTypescriptIndex: import("watch-types").ProjectWatcher;
    tryCreateSchema: (config: import("ts-json-schema-generator").Config) => {
        schema?: import("json-schema").JSONSchema7 | undefined;
        error?: string | undefined;
    };
    typeToSchema: (type: import("ts-morph").Type<import("@ts-morph/common/lib/typescript").Type>) => import("index-typescript").SimpleJsonSchema | undefined;
    dev: (manualProjectRoot?: string | undefined) => void;
    determineFileType: (filePath: string) => import("filename-conventions").FileType | null;
    exploreGitRepoFolders: (config: import("k-explore").BaseConfig) => Promise<string[]>;
    exploreMultiple: (searchConfigs: import("k-explore").SearchConfig[]) => Promise<import("code-types").TextJson[]>;
    exploreOperationFolders: (config: import("k-explore").BaseConfig) => Promise<string[]>;
    explorePreset: (preset: "git" | "markdown" | "todo" | "packages" | "docs" | "src", config?: import("k-explore").BaseConfig) => Promise<import("code-types").TextJson[]>;
    explore: ({ basePath, searchLevel, debug, ...other }: import("k-explore").SearchConfig) => Promise<import("code-types").TextJson[]>;
    findAllDocsFolderPaths: (ignoreOperations?: boolean | undefined, ignoreFolders?: string[] | undefined) => Promise<string[]>;
    findAllDotGitFolders: (config: import("k-explore").BaseConfig) => Promise<import("code-types").TextJson[]>;
    findAllFoldersWithName: (config: {
        basePath: string;
        folderName: string;
        ignoreOperations?: boolean | undefined;
        ignoreFolders?: string[] | undefined;
    }) => Promise<string[]>;
    findAllPackages: (config?: {
        basePath: string | string[] | undefined;
    } | undefined) => Promise<import("code-types").TextJson[]>;
    findAllTodoFolderPaths: (basePath: string, ignoreOperations?: boolean | undefined) => Promise<string[]>;
    findFilesRecursively: (config: Omit<import("k-explore").SearchConfig, "basePath"> & {
        basePath: string;
    }) => Promise<import("code-types").TextJson[]>;
    pathArrayIsOperation: (pathArray: string[]) => boolean;
    runTestsForOperation: (operationName: string, writeResultsToIndex?: boolean | undefined, manualProjectRoot?: string | undefined) => Promise<boolean | undefined>;
    runTests: (test: import("k-test").Test, operationName?: string | undefined) => Promise<boolean>;
    preIndexLint: ({ operationFolderPath, }: {
        operationFolderPath: string;
    }) => Promise<string[]>;
    sendMail: (mailData: import("mail").MailDataFromOptional | import("mail").MailDataFromOptional[], isMultiple?: boolean | undefined) => Promise<import("@sendgrid/mail").ClientResponse | undefined>;
    addDependantCount: (type: "tsFunction" | "tsVariable" | "tsInterface", imports: import("code-types").TsImport[]) => (item: import("code-types").TsInterface | import("code-types").TsFunction | import("code-types").TsVariable) => Promise<import("markdown-parsings").DependantCountObject>;
    bundleFolderWithMarkdown: (outlineTitle: string, markdownStrings: string[], resultFileName?: string | undefined) => Promise<{
        markdownParse: import("code-types").MarkdownParse;
        outlineString: string;
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
    createMinimizedSectionMarkdown: (markdown: string, expandTitle: string) => string;
    createMinimizedSection: (markdown: string | undefined, title: string, expandTitle: string) => import("code-types").MarkdownParse | undefined;
    deployToVercel: () => void;
    emailMarkdownParse: () => void;
    flattenNestedObject: <T_8>(nestedObject: NestedObject<T_8>, isLeaf?: ((content: any) => boolean) | undefined) => void;
    generateStaticSite: ({ projectRelativeMdFilePath, singlePage, }: {
        singlePage?: boolean | undefined;
        projectRelativeMdFilePath?: string | undefined;
    }) => void;
    getJsonSchemaSummary: (schema: import("json-schema").JSONSchema7 | undefined, isMarkdown: boolean) => {
        typeDescriptor: string;
        description: string | undefined;
    } | undefined;
    getMarkdownContents: (absoluteFolderPath: string) => Promise<{
        content: string;
        relativePath: string;
    }[] | undefined>;
    getMergedMarkdownOutlineUrl: (title: string) => {
        title: string;
        hashtagPath: string;
    };
    getOperationSummary: (config: {
        operationName: string;
        manualProjectRoot?: string | undefined;
    }) => Promise<import("markdown-parsings").OperationSummary | undefined>;
    getOutline: (markdownParse: import("code-types").MarkdownParse) => string | undefined;
    getPublicMarkdownNestedPathObject: (absoluteFolderPath: string) => Promise<NestedObject<string>>;
    getTitlesRecursively: (chunk: import("code-types").MarkdownChunk) => import("markdown-parsings").NestedTitle[];
    getTypeDescriptorRecursive: (schema: import("json-schema").JSONSchema7, isMarkdown: boolean) => string;
    isConventionFileStatement: (item: import("code-types").TsInterface | import("code-types").TsFunction | import("code-types").TsVariable, conventionFile: "test" | "cli") => boolean;
    isUpperCase: (text: string) => boolean;
    makeOutlineMarkdownString: (title: string, urls: import("markdown-parsings").MergedMarkdownOutlineUrl[]) => string;
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
    mergeMarkdownParse: (markdownParses: import("code-types").MarkdownParse[], fileName?: string | undefined) => {
        merged: import("code-types").MarkdownParse;
        outline: import("markdown-parsings").MergedMarkdownOutlineUrl[];
    };
    noNewlines: (markdown: string | undefined) => string | undefined;
    operationRadio: () => void;
    operationToMarkdown: (config: {
        operationSummary: import("markdown-parsings").OperationSummary;
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
    statementItemToMarkdown: (statementItem: import("markdown-parsings").StatementItem) => string | undefined;
    tsFunctionToMarkdownString: (tsFunction: import("code-types").TsFunction) => string;
    tsInterfaceToMarkdownString: (tsInterface: import("code-types").TsInterface) => string;
    tsVariableToMarkdownString: (tsVariable: import("code-types").TsVariable) => string;
    upMarkdownChunkLevelRecursively: (markdownChunks: import("code-types").MarkdownChunk[] | undefined) => import("code-types").MarkdownChunk[] | undefined;
    minifyBuild: ({ operationName, buildFolderPath, }: {
        operationName?: string | undefined;
        buildFolderPath?: string | undefined;
    }) => Promise<true | undefined>;
    getAvailableOperationName: (rootFolderPath: string, preferredFolderName: string, manualProjectRoot?: string | undefined) => Promise<string>;
    newOperationWithFiles: (name: string, description: string | undefined, srcFileContentObject: {
        [operationRelativeTypescriptFilePath: string]: string;
    }, config?: {
        manualProjectRoot?: string | undefined;
        destinationPath?: string | undefined;
        overwriteIfExists?: boolean | undefined;
        overwriteCurrentOperationIfExists?: boolean | undefined;
        skipYarnInstall?: boolean | undefined;
        skipYarnBuild?: boolean | undefined;
        dryrun?: boolean | undefined;
    } | undefined) => Promise<string | undefined>;
    newOperation: (name?: string | undefined, config?: {
        type?: "cjs" | "ts" | "esm" | "node-cjs" | "node-esm" | "node-ts" | "server-cjs" | "ui-web" | "ui-app" | "ui-ts" | "ui-cjs" | "ui-esm" | undefined;
        description?: string | undefined;
        destinationPath?: string | undefined;
        manualProjectRoot?: string | undefined;
    } | undefined) => Promise<string | undefined>;
    newTemplate: (type: string, destinationPath?: string | undefined) => Promise<string | undefined>;
    nodemon: (operationName: string, cliFunctionName: string, vars?: string[] | undefined, manualProjectRoot?: string | undefined) => Promise<void>;
    addPeerMessage: (message: string, peerSlug: string) => Promise<import("fs-orm").DbQueryResult>;
    addPeer: (ip: string, authToken: string, peerName?: string | undefined, force?: boolean | undefined, isMe?: boolean | undefined) => Promise<{
        isSuccesful: boolean;
        message: string;
    } | undefined>;
    augmentDevice: (x: import("peer-types").Device) => import("peer-types").Device;
    deviceGetAppsCalculated: (device: import("peer-types").Device) => Promise<{
        lastOnlineAt: number;
        appOperationsCalculated: import("peer-types").AppOperation[] | undefined;
        authToken: string;
        userAgent: import("peer-types").IResult;
        userAgentString: string;
        name: string;
        previousIps: import("peer-types").IPInfo[];
        origins: string[];
        hasPapi?: boolean | undefined;
        isOnlineCalculated?: boolean | undefined;
        isLocalIpCalculated?: boolean | undefined;
        isFavorite?: boolean | undefined;
        isPrivate?: boolean | undefined;
        lastSyncDatabaseAtObject: {
            [modelName: string]: number;
        };
        personIds?: string[] | undefined;
        persons?: import("peer-types").Person[] | undefined;
        currentPersonId?: string | undefined;
        currentPersonCalculated?: import("peer-types").Person | undefined;
        authenticationMethods: import("peer-types").AuthenticationMethod[];
        categoryStackCalculated?: import("model-types").CategoryStack | undefined;
        id: string;
        operationName: string | null;
        projectRelativePath: string;
        operationRelativePath?: string | undefined;
        createdAt: number;
        updatedAt: number;
        deletedAt: number;
        createdFirstAt: number;
        ip: string;
        city: string | undefined;
        position: import("geo-types").Position | undefined;
        positionRadiusKm: number | undefined;
        country: string | undefined;
        region: string | undefined;
        timezone: string | undefined;
    }>;
    getAllAppOperations: () => Promise<import("peer-types").AppOperation[]>;
    getAugmentedPersons: (devices: import("peer-types").Device[], config?: {
        onlyWithDevices?: boolean | undefined;
        onlyWithPapi?: boolean | undefined;
        onlyOnline?: boolean | undefined;
        withAppsCalculated?: boolean | undefined;
    } | undefined) => Promise<import("peer-types").Person[]>;
    getFirstEmoji: (text?: string | undefined) => string | undefined;
    getNestedPathObject: (baseFolderPath: string) => Promise<NestedPathObject>;
    getPeerMessages: () => Promise<import("peer-types").PeerMessage[]>;
    getPeerPeople: () => Promise<{
        success: boolean;
        peerPeople: import("peer-types").Person[];
    }>;
    getPeersFromPeersRecursively: () => void;
    getPublicFolderNestedPathObjectFromPeer: (peerSlug: string) => Promise<{
        peerApiResult: import("api-types").ApiReturnType<"getPublicFolderNestedPathObject">;
    } | undefined>;
    getPublicFolderNestedPathObject: () => Promise<any>;
    getPublicPeers: () => Promise<import("peer-types").Device[]>;
    isPortUsed: (port: number) => Promise<boolean>;
    lateFetchPeerMessageSync: () => Promise<{
        newMessagesAmount: number;
    }>;
    ping: () => boolean;
    proactivePushAddPeerMessage: (message: string, peerSlug: string) => Promise<boolean>;
    removePeer: (id: string) => Promise<import("fs-orm").DbQueryResult>;
    sortDevices: (a: import("peer-types").Device, b: import("peer-types").Device) => 1 | -1;
    updatePeer: (slug: string, updatedValues: {
        name?: string | undefined;
        description?: string | undefined;
        authToken?: string | undefined;
        isFavorite?: boolean | undefined;
        isMe?: boolean | undefined;
    }) => Promise<{
        isSuccesful: boolean;
        message: string;
    }>;
    getPrimaryPersona: () => Promise<import("peer-types").Persona>;
    deleteApp: (operationName: string) => Promise<{
        isSuccessful: boolean;
        error?: Error | undefined;
        proc?: import("pm2").Proc | undefined;
    }>;
    listApps: () => Promise<import("pm2-util").ListAppsResult>;
    logApp: (operationName: string) => Promise<void>;
    logTableObject: (object: {
        [key: string]: any;
    } | undefined) => {
        property: string;
        value: any;
    }[] | undefined;
    pm2ConnectDisconnect: <TResult extends {
        [key: string]: any;
        isSuccessful: boolean;
        error?: Error | undefined;
        proc?: import("pm2").Proc | undefined;
    }>(action: (resolve: (value: TResult) => void) => void) => Promise<{
        isSuccessful: boolean;
        error?: Error | undefined;
        proc?: import("pm2").Proc | undefined;
    }>;
    pm2Connect: () => Promise<{
        isSuccessful: boolean;
        error?: Error | undefined;
    }>;
    restartApp: (operationName: string) => Promise<{
        isSuccessful: boolean;
        error?: Error | undefined;
        proc?: import("pm2").Proc | undefined;
    }>;
    startApp: (operationName: string, isDev?: boolean | undefined) => Promise<{
        isSuccessful: boolean;
        error?: Error | undefined;
        proc?: import("pm2").Proc | undefined;
        message?: string | undefined;
    }>;
    stopAllAppsExcept: (ignore?: string[] | undefined) => Promise<void>;
    stopApps: (operationNames: string[]) => Promise<{
        isSuccessful: boolean;
        error?: Error | undefined;
        proc?: import("pm2").Proc | undefined;
    }>;
    readCsvFileSync: <T_9 extends import("csv-util").CsvItemType>(filePath: string) => T_9[] | null;
    readCsvFile: <T_10 extends import("csv-util").CsvItemType>(filePath: string | undefined) => Promise<T_10[] | null>;
    readJsonFileSync: <T_11>(filePath: string) => T_11 | null;
    readJsonFile: <T_12>(filePath: string | undefined) => Promise<T_12 | null>;
    readProjectRelativeJsonFile: <T_13>(projectRelativePath: string) => Promise<T_13 | null>;
    readKvmdFile: (filePath: string, dbFileLocation: import("model-types").DbFileLocation) => Promise<import("model-types").KeyValueMarkdownParse | null>;
    readMarkdownFileToModel: (absoluteFilePath: string) => Promise<import("code-types").WebMarkdownFile | null>;
    readMarkdownFile: (filePath: string) => Promise<import("code-types").MarkdownParse | null>;
    clearTsDatabase: (operationName: string | undefined) => Promise<void>;
    executeCommandQuietUnlessFail: (config: {
        command: string;
        cwd?: string | undefined;
        description?: string | undefined;
    }) => boolean;
    exitIfProcessDependenciesChanged: (operationName: string, manualProjectRoot?: string | undefined) => Promise<void>;
    generateJsonSchemas: (manualProjectRoot?: string | undefined, operationName?: string | undefined) => Promise<void>;
    getAllDbModels: (manualProjectRoot?: string | undefined, operationName?: string | undefined) => Promise<import("code-types").TsInterface[]>;
    getFileIds: ({ operationFolderPath, pathSuffix, extension, }: {
        operationFolderPath: string;
        extension?: string | string[] | undefined;
        pathSuffix: string;
    }) => Promise<string[]>;
    getIndexFileIds: (operationFolderPath: string) => Promise<string[]>;
    getSrcIds: (operationFolderPath: string) => Promise<string[]>;
    isOperationBuildNeeded: (operationBasePath: string) => boolean;
    isSdkOperation: (operationBasePath: string) => boolean;
    rebuildAllOperations: (isRebuildingProcessUpdated?: boolean | undefined, manualProjectRoot?: string | undefined) => Promise<void>;
    rebuildOperation: (config: {
        updatedAt?: number | undefined;
        typerepoManualProjectRoot?: string | undefined;
        operationManualProjectRoot?: string | undefined;
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
        operationManualProjectRoot?: string | undefined;
        rebuildUpdatedAt?: number | undefined;
    }) => Promise<boolean>;
    yarnBuild: (operationBasePath: string, config?: {
        rmFirst?: boolean | undefined;
        skipMinify?: boolean | undefined;
    } | undefined) => Promise<boolean>;
    isEqualArray: (array1: unknown[], array2: unknown[]) => boolean;
    renameTemplateFiles: ({ appDir }: {
        appDir: string;
    }) => Promise<void>;
    renameTemplateToNormalFile: (fileName: string) => string;
    renameToTemplateFile: (fileName: string) => string;
    addAuthenticationMethod: (method: import("peer-types").AuthenticationMethodMethod, handle: string, shouldBeUnique?: boolean | undefined, credential?: string | undefined) => Promise<{
        isSuccessful: boolean;
        message: string;
        authenticationMethod?: import("peer-types").AuthenticationMethod | undefined;
    }>;
    addDeviceAuthenticationMethodConfirm: (deviceId: string, method: import("peer-types").AuthenticationMethodMethod, otp: number) => Promise<{
        isSuccessful: boolean;
        message: string;
    } | undefined>;
    addDeviceAuthenticationMethodWithContext: (functionContext: import("function-context-type").FunctionContext, method: import("peer-types").AuthenticationMethodMethod, handle: string, credential?: string | undefined) => Promise<{
        isSuccessful?: boolean | undefined;
        message?: string | undefined;
        functionContext?: import("function-context-type").FunctionContext | undefined;
        authenticationMethod?: import("peer-types").AuthenticationMethod | undefined;
    }>;
    addPersonAuthenticationMethodWithContext: (functionContext: import("function-context-type").FunctionContext, method: import("peer-types").AuthenticationMethodMethod, handle: string, credential?: string | undefined) => Promise<{
        isSuccessful: boolean | undefined;
        message: string;
    }>;
    findAuthenticatedPersonWithHandle: (method: import("peer-types").AuthenticationMethodMethod, handle: string) => Promise<import("peer-types").Person | undefined>;
    findLoggedinPersonsWithContext: (functionContext: import("function-context-type").FunctionContext) => Promise<{
        isSuccessful: boolean;
        persons?: import("peer-types").Person[] | undefined;
        message?: string | undefined;
    }>;
    getMeWithContext: (functionContext: import("function-context-type").FunctionContext) => {
        authorizations?: import("auth-types").Authorization[] | undefined;
        device: import("peer-types").Device;
        groups?: import("peer-types").Group[] | undefined;
    };
    getPublicPerson: (id?: string | undefined) => Promise<import("peer-types").PublicPerson | undefined>;
    getPublicPersons: () => Promise<import("peer-types").PublicPerson[]>;
    isPhoneNumber: (phoneNumber: string) => boolean;
    isValidPassword: (password: string) => boolean;
    loginWithContext: (functionContext: import("function-context-type").FunctionContext) => Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    loginWithPasswordWithContext: (functionContext: import("function-context-type").FunctionContext, username: string, password: string) => Promise<{
        isSuccessful: boolean;
        message?: string | undefined;
    }>;
    logoutWithContext: (functionContext: import("function-context-type").FunctionContext, rememberAuthentication?: boolean | undefined) => Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    removeDeviceAuthenticationMethodWithContext: (functionContext: import("function-context-type").FunctionContext, method: import("peer-types").AuthenticationMethodMethod) => Promise<{
        isSuccessful: boolean | undefined;
        message: string | undefined;
    }>;
    removePersonAuthenticationMethodWithContext: (functionContext: import("function-context-type").FunctionContext, method: import("peer-types").AuthenticationMethodMethod) => Promise<{
        isSuccessful: boolean | undefined;
        message: string | undefined;
    }>;
    signupWithContext: (functionContext: import("function-context-type").FunctionContext, personData: import("server-login").SignupPersonData) => Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    signupWithPasswordWithContext: (functionContext: import("function-context-type").FunctionContext, name: string, handle: string, pictureImage: import("asset-type").BackendAsset | undefined, password: string, repeatPassword: string) => Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    switchCurrentPersonWithContext: (functionContext: import("function-context-type").FunctionContext, newCurentPersonId: string) => Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    updateMeWithContext: (functionContext: import("function-context-type").FunctionContext, details: import("peer-types").PersonProfileDetails) => Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    setJsonKey: ({ jsonPath, keyLocation, value, debug, }: {
        jsonPath: string;
        keyLocation: string;
        value: string;
        debug?: boolean | undefined;
    }) => Promise<void>;
    setKeyAtLocation: typeof setKeyAtLocation;
    sendSms: (options: import("twilio/lib/rest/api/v2010/account/message").MessageListInstanceCreateOptions) => Promise<import("twilio/lib/rest/api/v2010/account/message").MessageInstance | undefined>;
    getAllTsMorphSourceFiles: (operationBasePath: string) => Promise<import("ts-morph").SourceFile[] | undefined>;
    getHasGeneric: (type: import("ts-morph").TypeAliasDeclaration | import("ts-morph").InterfaceDeclaration) => boolean;
    getTsMorphProject: (operationFolderPath: string) => import("ts-morph").Project | undefined;
    getOpenableFilePath: (file: import("vscode-open").OpenableFile) => Promise<string | undefined>;
    vscodeOpen: (config: {
        files?: import("vscode-open").OpenableFile[] | undefined;
    }) => Promise<{
        success: boolean;
        response: string;
    } | undefined>;
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
    exitIfOperationsChange: (allOperationSourcePaths: string[], manualProjectRoot?: string | undefined) => void;
    gitCommitAllCron: (manualProjectRoot?: string | undefined) => void;
    watchOperations: (config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => Promise<void>;
    writeToAssets: (filePath: string, data: any, assetsFileName?: string | undefined) => Promise<boolean | undefined>;
    getGetApiUrl: (apiUrl: string, apiFunctionName: string, query: {
        [name: string]: string | string[] | undefined;
    }) => string;
    untypedApiFunction: (fnName: string, config: import("api-types").ApiConfig, ...parameters: any) => Promise<import("api-types").ApiReturnType<any>>;
    addToken: (name: string, previousToken?: string | undefined, attachTokenToFilename?: boolean | undefined) => string;
    ensureToken: (name: string, newToken?: string | undefined, attachTokenToFilename?: boolean | undefined) => string;
    getAssetDirectlyApiUrl: (projectRelativeAssetPath: string) => string;
    getExtensionFromAsset: (asset: import("asset-type").Asset) => string | undefined;
    getNameFromRelativePath: (relativePath: string) => string;
    getNameWithTokenFromRelativePath: (relativePath: string, attachTokenToFilename?: boolean | undefined, newToken?: string | undefined) => string;
    getPreferredExtensionFromType: (type: string | undefined) => string | undefined;
    getReferencedAssetApiUrl: (apiUrl: string, projectRelativeReferencingFilePath: string, referencingFileRelativeAssetPath: string, isDownload?: boolean | undefined) => string;
    getTypeFromRelativePath: (relativePath: string) => import("asset-type").AssetType;
    readableSize: (sizeBytes: number) => string;
    removeTokenIfPresent: (name: string, attachTokenToFilename?: boolean | undefined) => {
        nameWithoutToken: string;
        token: string | undefined;
    };
    getFunctionExersize: (functionId: string) => Promise<string>;
    markdownParseToMarkdownModelType: (markdownParse: import("code-types").MarkdownParse | null) => import("model-types").Storing<import("model-types").MarkdownModelType> | null;
    parseMarkdownModelTimestamp: (parameters: import("matter-types").Frontmatter, markdownParse: import("code-types").MarkdownParse, parameterName: "createdAt" | "updatedAt" | "deletedAt" | "createdFirstAt" | "openedAt") => number;
    tryParseDate: (dateString: string) => number | undefined;
    stripCommentEnd: (trimmedLine: string) => string;
    stripCommentStart: (trimmedLine: string) => string;
    stripComment: (rawCommentString: string) => string;
    stripSlashes: (trimmedLine: string) => string;
    stripStar: (trimmedLine: string) => string;
    trim: (string: string) => string;
    getCompileErrors: (operationBasePath: string, onlyDependants?: boolean | undefined, manualProjectRoot?: string | undefined) => Promise<import("model-types").Creation<import("code-types").TsBuildError>[]>;
    getTypescriptErrorsFromFiles: typeof getTypescriptErrorsFromFiles;
    writeBuildErrors: (operationBasePath: string, operationManualProjectRoot?: string | undefined, typerepoManualProjectRoot?: string | undefined) => Promise<void>;
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
    getWriterType: (extension: string | undefined) => import("filename-conventions").WriterType;
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
    copyAllRelativeFiles: (relativeFilePaths: string[], absoluteSourceRoot: string, absoluteDestinationRoot: string, force?: boolean | undefined) => Promise<boolean>;
    findFileNameCaseInsensitive: (folderPath: string, fileName: string) => Promise<string | undefined>;
    getAllFoldersUntilFolder: (folderPath: string) => string[];
    getFileName: (pathString: string) => string;
    getFirstAvailableFilename: (absoluteFilePath: string) => string;
    getFolder: (pathString: string) => string;
    getLastFolder: (pathString: string) => string;
    getOneFolderUpPath: (folderPath: string) => string;
    getPathCombinations: (...chunksSegments: (string | string[])[]) => string[];
    oneUp: (filename: string) => string;
    parseMd: (mdFilePath: string) => import("fs-util").Markdown;
    removeAllExcept: (folderPath: string, config?: {
        ignore?: string[] | undefined;
        typeToRemove?: "folder" | "file" | undefined;
    } | undefined) => Promise<{
        name: string;
        removed: boolean;
    }[]>;
    renameAndCreate: (oldPath: string, newPath: string) => Promise<void>;
    writeJsonToFile: <T_14>(p: string, data: T_14) => Promise<boolean>;
    writeStringToFile: (p: string, data: string) => Promise<boolean>;
    writeToFiles: (fileObject: {
        [absoluteFilePath: string]: any;
    }) => Promise<void>;
    findFolderWhereMatch: <T_15>(fullSourcePath: string, matchFunction: (folderPath: string) => T_15) => {
        folderPath: string;
        matchResult: T_15;
    } | undefined;
    findOperationBasePathWithClassification: (startPath: string) => {
        folderPath: string;
        classification: "cjs" | "ts" | "esm" | "node-cjs" | "node-esm" | "node-ts" | "server-cjs" | "ui-web" | "ui-app" | "ui-ts" | "ui-cjs" | "ui-esm";
    } | undefined;
    findOperationBasePath: (startPath: string) => string | undefined;
    getAllPackageJsonDependencies: (operation: import("code-types").Operation) => string[];
    getCommonAncestor: (path1: string, path2: string) => string;
    getOperationClassification: (folderPath: string) => "cjs" | "ts" | "esm" | "node-cjs" | "node-esm" | "node-ts" | "server-cjs" | "ui-web" | "ui-app" | "ui-ts" | "ui-cjs" | "ui-esm" | undefined;
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
    getRelativeLinkPath: (absoluteFromFilePath: string, absoluteToFilePath: string, debug?: boolean | undefined) => string;
    getRelativePath: (absolutePath: string, relativeFrom: "project-root") => string | undefined;
    getRootPath: (name?: "operations" | "text" | "assets" | "backups" | "bundled" | "cloned" | "distributions" | "db" | undefined, config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => string | undefined;
    getSrcRelativeFileId: (operationRelativePath: string) => string;
    hasDependency: (operation: import("code-types").Operation, dependency: string) => boolean;
    isOperation: (absoluteFolderPath: string) => boolean;
    isWorkspaceRoot: (folderPath: string) => {
        isBundle: boolean;
        isWorkspaceRoot: boolean;
    } | undefined;
    makeRelative: (absolutePath: string, baseFolderPath: string) => string;
    getTsConfig: (packageFolder: string) => Promise<import("code-types").TsConfig | null>;
    apply: <T_16>(functions: ((input: T_16) => T_16)[], value: T_16) => T_16;
    createEnum: <T_17 extends readonly string[]>(array: T_17) => { [K in T_17[number]]: K; };
    createMappedObject: <T_18 extends {
        [key: string]: any;
    }, U = T_18>(array: T_18[], mapKey: keyof T_18, mapFn?: ((value: T_18, array: T_18[]) => U) | undefined) => import("js-util").MappedObject<U>;
    destructureOptionalObject: <T_19 extends {
        [key: string]: any;
    }>(object: T_19 | null | undefined) => Partial<T_19>;
    findLastIndex: <T_20>(array: T_20[], findFn: (item: T_20) => boolean) => number | undefined;
    getObjectFromParamsString: (paramsString: string) => {
        [x: string]: string;
    };
    getObjectKeysArray: <TObject extends {
        [key: string]: any;
    }>(object: TObject) => Extract<keyof TObject, string>[];
    getParameterAtLocation: <T_21 = any>(object: {
        [key: string]: any;
    }, location: string[]) => T_21;
    getSubsetFromObject: <T_22, K_1 extends readonly (keyof T_22)[]>(object: T_22, keys: K_1) => Pick<T_22, K_1[number]>;
    groupByKey: <T_23 extends {
        [key: string]: any;
    }>(array: T_23[], key: keyof T_23) => {
        [key: string]: T_23[];
    };
    hasAllLetters: (a: string, b: string) => boolean;
    insertAt: <T_24>(array: T_24[], items: T_24 | T_24[], beforeIndex: number) => T_24[];
    isAllTrue: (array: boolean[]) => boolean;
    makeArray: <T_25>(...arrayOrNotArray: (T_25 | T_25[] | undefined)[]) => T_25[];
    mapAsync: <T_26, U_1>(array: T_26[], callback: (value: T_26, index: number, array: T_26[]) => Promise<U_1>) => Promise<Awaited<U_1>[]>;
    mapKeys: (object: {
        [key: string]: any;
    }, mapFn: (key: string) => string | Promise<string> | undefined) => Promise<{
        [x: string]: any;
    }>;
    mapMany: <T_27, U_2>(array: T_27[], mapFn: (item: T_27, index: number, array: T_27[]) => Promise<U_2>, limit?: number | undefined) => Promise<U_2[]>;
    mapValuesSync: <T_28, U_3>(object: {
        [key: string]: T_28;
    }, mapFn: (value: T_28) => U_3) => {
        [x: string]: U_3;
    };
    mergeNestedObject: <T_29 extends import("js-util").O>(object: T_29, otherObject: import("js-util").NestedPartial<T_29> | undefined) => T_29;
    mergeObjectParameters: <T_30>(config: T_30 | undefined, defaults: T_30 | undefined) => Partial<T_30>;
    mergeObjectsArray: <T_31 extends {
        [key: string]: any;
    }>(objectsArray: T_31[]) => T_31;
    mergeObjects: <T_32 extends {
        [key: string]: any;
    }>(...objects: (Partial<T_32> | undefined)[]) => T_32 | undefined;
    noEmptyString: (input: string | undefined) => string | undefined;
    notEmpty: typeof notEmpty;
    objectMapAsync: <TObject_1 extends {
        [key: string]: any;
    }, TResultValue, TResultObject extends { [key in keyof TObject_1]: TResultValue; }>(object: TObject_1, mapFn: (key: Extract<keyof TObject_1, string>, value: TObject_1[keyof TObject_1]) => Promise<TResultValue>) => Promise<TResultObject>;
    objectMapSync: <TObject_2 extends {
        [key: string]: any;
    }, TMapResult, TResultObject_1 extends { [key_1 in keyof TObject_2]: TMapResult; }>(object: TObject_2, mapFn: (key: keyof TObject_2, value: TObject_2[keyof TObject_2]) => TMapResult) => TResultObject_1;
    objectValuesMap: <T_33 extends {
        [key: string]: T_33[string];
    }, U_4 extends unknown>(object: T_33, mapFn: (key: string, value: T_33[string]) => U_4) => {
        [key: string]: U_4;
    };
    omitUndefinedValues: <T_34 extends {
        [key: string]: any;
    }>(object: T_34) => T_34;
    onlyUnique2: <U_5>(isEqualFn?: ((a: U_5, b: U_5) => boolean) | undefined) => <T_35 extends U_5>(value: T_35, index: number, self: T_35[]) => boolean;
    onlyUnique: typeof onlyUnique;
    pickRandomArrayItem: <T_36>(array: T_36[]) => T_36;
    putIndexAtIndex: <T_37>(array: T_37[], index: number, toIndex: number) => T_37[];
    removeIndexFromArray: <T_38>(array: T_38[], index: number) => T_38[];
    removeOptionalKeysFromObjectStrings: <TObject_3 extends import("js-util").O>(object: TObject_3, keys: string[]) => TObject_3;
    removeOptionalKeysFromObject: <TObject_4 extends import("js-util").O>(object: TObject_4, keys: Exclude<Extract<keyof TObject_4, string>, Exclude<import("js-util").KeysOfType<TObject_4, Exclude<TObject_4[keyof TObject_4], undefined>>, undefined>>[]) => TObject_4;
    replaceLastOccurence: (string: string, searchValue: string, replaceValue: string) => string;
    reverseString: (string: string) => string;
    sumAllKeys: <T_39 extends {
        [key: string]: number | undefined;
    }>(objectArray: T_39[], keys: (keyof T_39)[]) => T_39;
    sumObjectParameters: <TObject_5 extends {
        [key: string]: number;
    }>(object1: TObject_5, object2: TObject_5) => TObject_5;
    sum: (items: number[]) => number;
    takeFirst: <T_40>(arrayOrNot: T_40 | T_40[]) => T_40;
    trimSlashes: (absoluteOrRelativePath: string) => string;
    getSimpleJsonString: (json: import("json-util").Json) => string | undefined;
    flattenMarkdownChunks: (markdownChunks: import("code-types").MarkdownChunk[]) => import("code-types").MarkdownParagraph[];
    getKvmdItemsRecursively: (chunk: import("code-types").MarkdownChunk, categoryStackCalculatedUntilNow?: import("model-types").CategoryStack | undefined) => import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[];
    getParagraphsRecursively: (chunk: import("code-types").MarkdownChunk, categoryStackCalculatedUntilNow?: import("model-types").CategoryStack | undefined) => import("code-types").MarkdownParagraph[];
    kvmdDataMap: <T_41 extends {
        [key: string]: string | string[] | undefined;
    }>(data: import("model-types").KeyValueMarkdownModelType[], { keyName, valueName, categoryStackCalculatedName, commentName, }: {
        keyName?: string | undefined;
        valueName?: string | undefined;
        commentName?: string | undefined;
        categoryStackCalculatedName?: string | undefined;
    }) => T_41[];
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
    isResultOfInterface: <TResult_1>(result: TResult_1, jsonSchema: unknown) => boolean;
    makeTest: <TResult_2>(testFunction: (() => Promise<TResult_2>) | (() => TResult_2), isValid?: ((result: TResult_2) => boolean) | undefined) => () => Promise<boolean>;
    chunkToStringRecursively: (chunk: import("code-types").MarkdownChunk) => string;
    getChunkParagraphsRecursively: (chunk: import("code-types").MarkdownChunk) => string[];
    getImplicitId: (title: string) => string;
    getMarkdownIntro: (markdownParse: import("code-types").MarkdownParse | null) => {
        title: string | undefined;
        firstParagraph: string | null;
    };
    getMarkdownParseParagraphs: (markdownParse: import("code-types").MarkdownParse) => string[];
    getMarkdownReferencePaths: (markdownString: string) => string[];
    getMarkdownReferencesFromParagraph: (paragraph: string) => import("markdown-parse-js").MarkdownReference[];
    markdownParseToMarkdownStringFromContent: (markdownParse: import("code-types").MarkdownParse) => string | undefined;
    markdownParseToMarkdownString: (markdownParse: import("code-types").MarkdownParse) => string;
    mdContentParseRecursively: (markdownString: string, level: number) => import("code-types").MarkdownChunk[];
    mdToJsonParse: (markdownString: string, fileName?: string | undefined, config?: import("markdown-parse-js").MarkdownParseConfig | undefined) => import("code-types").MarkdownParse;
    parseFrontmatterMarkdownString: (markdownWithFrontmatter: string, config?: import("markdown-parse-js").MarkdownParseConfig | undefined) => import("code-types").MarkdownParse;
    parseMarkdownParagraph: (paragraph: string) => import("markdown-parse-js").MarkdownParagraphChunk[];
    parseMdToChunks: (markdownString: string, level: number) => import("code-types").MarkdownChunk[];
    removeHeaderPrefix: (string: string) => string;
    frontmatterParseToString: (frontmatter: import("matter-types").Frontmatter) => string;
    getFrontmatterValueString: (value: import("matter-types").FrontmatterValue) => string | null;
    quotedOrNot: (string: string) => string;
    stringifyNewlines: (string: string) => string;
    cleanupTimer: (uniqueId: string) => void;
    generateUniqueId: () => string;
    getNewPerformance: (label: string, uniqueId: string, isNew?: boolean | undefined) => import("measure-performance").PerformanceItem | undefined;
    generateId: () => string;
    generatePassword: typeof generatePassword;
    generateRandomString: (length: number) => string;
    generateTime: () => number;
    isEmail: typeof isEmail;
    markdownModelTypeToMarkdownString: (markdownModelType: import("model-types").Storing<import("model-types").MarkdownModelType>) => string;
    getAssetInputType: (parameterName: string, valueType?: import("code-types").SimplifiedSchemaType | undefined) => import("name-conventions").AssetInputType | undefined;
    getParameterContentType: (parameterName: string) => void;
    isCalculatedParameter: (parameterName: string) => boolean;
    isGeneratedParameterName: (parameterName: string) => void;
    oneByOne: <T_42, U_6>(array: T_42[], callback: (instance: T_42, index: number) => Promise<U_6>) => Promise<U_6[]>;
    getDependenciesSummary: (operationName: string) => Promise<{
        coreDependencies: string[];
        operationDependencies: string[];
        packageDependencies: string[];
    }>;
    getOperationMetaData: (operationBasePath: string) => Promise<import("operation-util").OperationMetaData | undefined>;
    recalculateOperationIndexJson: (operationBasePath: string, manualProjectRoot?: string | undefined) => Promise<void>;
    parsePrimitiveArray: (string: string) => string[];
    parsePrimitiveBoolean: (string: string) => boolean | undefined;
    parsePrimitiveString: (string: string) => string;
    parsePrimitive: (string: string, simplifiedSchema?: import("code-types").SimplifiedSchema | undefined) => import("parse-primitive").PrimitiveResult;
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
    bodyFromQueryString: (query?: string | undefined) => import("rest-util").QueryableObject | undefined;
    getFirstQueryStrings: (query: import("rest-util").QueryableObject) => (string | undefined)[];
    getQueryPart: (strings: string[], queryKey: string) => string;
    isValidEntry: ([_, value]: [key: string, value: any]) => boolean;
    toQueryString: (query?: any) => string;
    runChildProcess: (config: {
        operationFolderName: string;
        scriptFileName: string;
        args?: (string | undefined)[] | undefined;
    }) => Promise<(string | null)[] | undefined>;
    findFirstCommentTypes: (strippedFullComment?: string | undefined) => import("code-types").CommentTypeObject;
    getDataParameterNames: (item: import("model-types").AugmentedAnyModelType) => string[];
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
    findSentenceMatches: <T_43>(searchMessage: string, array: T_43[], getSentence?: ((x: T_43) => string) | undefined) => T_43[];
    searchRecursiveObjectArray: <T_44 extends {
        children?: T_44[] | undefined;
    } & Object>(array: T_44[], baseMatcher: (item: T_44) => boolean, afterMapper?: ((item: T_44, isMatch: boolean, hasChildMatch: boolean) => T_44) | undefined) => T_44[];
    findPostableToPost: () => void;
    updatePostedStatistics: () => void;
    objectStringToJson: (string: string) => {
        [key: string]: import("string-to-json").JSONValue;
    };
    parseIfJson: (string: string) => any;
    parsePrimitiveJson: <TForceType extends "string" | "number" | "boolean">(value: string, forceType?: TForceType | undefined) => TForceType extends "string" ? string | null | undefined : TForceType extends "number" ? number | null | undefined : TForceType extends "boolean" ? boolean | null | undefined : string | number | boolean | null | undefined;
    stringToJson: (value: string, isObject?: boolean | undefined) => import("string-to-json").JSONValue;
    getEncoding: typeof getEncoding;
    isBinary: typeof isBinary;
    isText: typeof isText;
    tryParseJson: <T_45>(text: string, logParseError?: boolean | undefined) => T_45 | null;
    createCodeblockMarkdown: (text: string, language?: string | null | undefined) => string;
    useCustomUrlStore: <T_46 extends string | number | boolean | string[] | boolean[] | number[] | undefined>(queryKey: string, config: import("use-url-store").CustomUrlStoreConfig) => [T_46, (newValue: T_46 | undefined) => Promise<boolean>];
};
export declare type SdkType = typeof sdk;
//# sourceMappingURL=sdk-api.d.ts.map