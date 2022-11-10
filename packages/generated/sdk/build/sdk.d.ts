/// <reference types="node" />
/// <reference types="ua-parser-js" />
/// <reference types="node" />
/// <reference types="react" />
/// <reference types="node" />
/// <reference types="node" />
import { hasDefinition } from "index-typescript";
import { setKeyAtLocation } from "set-json-key";
import { makeSubscription } from "watch-folders";
import { useReactMediaRecorder } from "asset-input";
import { BigButton } from "big-button";
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
    driverLogin: (emailOrPhone: string, password: string) => Promise<{
        isSuccessful: boolean;
        message: string;
        loginToken?: string | undefined;
    }>;
    driverSignup: (driverInfo: import("himalayajeep-types").SignupJeepType) => Promise<{
        isSuccesful: boolean;
        message: string;
    }>;
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
    getAssetDirectlyGetApi: (ctx: import("server/typings/common").Context) => void | {
        isSuccessful: boolean;
        isUnauthorized?: boolean | undefined;
        message: string;
    };
    getReferencedAssetGetApi: (ctx: import("server/typings/common").Context) => Promise<{
        isSuccessful: boolean;
        isUnauthorized?: boolean | undefined;
        message: string;
    }>;
    getStorageLocationInfo: (absoluteReferencingFilePath: string, config: import("asset-functions-node").ProcessAssetConfig) => {
        type: "typescript" | "database" | "markdown";
        absoluteAssetBaseFolderPath: string;
    };
    getTemporaryAssetsFolderPath: () => string;
    processAsset: (backendAsset: import("asset-type").BackendAsset, absoluteReferencingFilePath: string, config: import("asset-functions-node").ProcessAssetConfig) => Promise<import("asset-type").BackendAsset | undefined>;
    processItemAssets: <KInterfaceName extends string | number | symbol>(item: import("model-types").AugmentedAnyModelType, interfaceName: KInterfaceName, operationName: string | null, customQueryConfig: import("fs-orm").CustomQueryConfig) => Promise<import("model-types").AugmentedAnyModelType>;
    removeOldTemporaryAssets: () => Promise<{
        removedAmount: number;
    }>;
    serverDownloadReply: (absoluteAssetPath: string, isDownload: boolean) => any;
    uploadAssetPostApi: (ctx: import("server/typings/common").Context) => Promise<import("asset-type").UploadAssetResult>;
    getAugmentedWordObject: (manualProjectRoot?: string | undefined) => Promise<import("js-util").MappedObject<import("markdown-reader-types").AugmentedWord> | undefined>;
    getAugmentedWords: (manualProjectRoot?: string | undefined) => Promise<import("markdown-reader-types").AugmentedWord[]>;
    getBundleAugmentedWords: () => Promise<import("markdown-reader-types").AugmentedWord[]>;
    getBundleSummary: (bundleConfig: import("bundle-types").BundleConfig) => import("bundle-util").BundleSummary;
    getDbModelsForBundle: (bundleConfig: import("bundle-types").BundleConfig) => Promise<import("code-types").TsInterface[]>;
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
    deleteDbModel: <KInterface extends "OperationConfig" | "TsConfig" | "PackageJson" | "OperationIndex" | "Device" | "Group" | "PageVisit" | "PeerMessage" | "Person" | "PersonInformation" | "PersonInformationValue" | "PersonPlatformConnection" | "Platform" | "Interest" | "MediaChannel" | "MediaCredentail" | "MediaPost" | "Postable" | "BundleConfig" | "FunctionExecution" | "MarkdownFileConfig" | "SocialMediaCallToAction" | "TsBuildError" | "TsComment" | "TsExport" | "TsFunction" | "TsImport" | "TsInterface" | "TsLintWarning" | "TsVariable" | "WebsiteCallToAction" | "Address" | "Area" | "City" | "Country" | "Location" | "KvmdWord" | "MarkdownWord" | "NepaliEnglishTranslationMatrix" | "Statement" | "TokiPonaMatrix" | "Translation" | "Word" | "WordCategory" | "WordMatrix" | "SlugModelType" | "AppDeveloper" | "Assignment" | "Bag" | "Calendar" | "DataPoint" | "Deliverable" | "Diary" | "Feeling" | "FeelingLog" | "Folder" | "Host" | "Inventory" | "Item" | "ItemCategory" | "KvmdShortcut" | "Label" | "Light" | "Listing" | "LoginCredential" | "Material" | "MessagePreset" | "ProgressReport" | "Question" | "Reservation" | "Resource" | "Shit" | "ShitLog" | "ShoppingList" | "Shortcut" | "Student" | "Student2" | "TaskError" | "Thing" | "TodoFile" | "Trackable" | "User" | "UserCredential" | "JeepType" | "LocationType" | "Activity" | "CompanyRequirement" | "CompanySize" | "CompanyType" | "Company" | "ContactInformation" | "Contribution" | "EsgMetric" | "ProductCategory" | "Product" | "ProofState" | "Proof" | "SustainabilityPlan" | "ValueChainPhase">(interfaceName: KInterface, id: string) => Promise<import("fs-orm").DbQueryResult>;
    getDatabaseMenu: (config?: {
        bundleId?: string | undefined;
    } | undefined) => Promise<{
        menu: import("code-types").ModelInfo[];
    }>;
    getDbModelNames: (config?: {
        bundleId?: string | undefined;
    } | undefined) => Promise<(string | number | symbol)[]>;
    getDbModel: <KInterface_1 extends string | number | symbol>(interfaceName: KInterface_1, config?: import("db-recipes").GetDbModelConfig | undefined) => Promise<import("db-recipes").GetDbModelResult<KInterface_1>>;
    getFunctionIndex: ({ functionName, }: {
        functionName: string;
    }) => Promise<{
        success: boolean;
        response: string;
        function?: import("code-types").TsFunction | undefined;
    }>;
    getNestedDatabaseMenu: () => Promise<import("db-recipes").NestedDatabaseMenu>;
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
    findAllDependencyOperations: ({ imports, packageJsons, operationNames, ignoreOperationNames, ignoreFilter, }: {
        imports: import("code-types").TsImport[];
        packageJsons: import("code-types").PackageJson[];
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
    findDependenciesRecursively: (imports: import("code-types").TsImport[], packageJsons: import("code-types").PackageJson[], operationName: string, already: string[], ignore?: string[] | undefined, ignoreFilter?: ((operationName: string) => boolean) | undefined) => Promise<string[]>;
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
    makeStoringItem: <T_5 extends {
        [key: string]: any;
    }>(item: T_5) => import("model-types").Storing<T_5>;
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
    getFolderJs: <T_6 extends string | undefined>(filePath: T_6) => T_6;
    getSubExtension: (fileName: string) => string | undefined;
    isPathRelative: (path: string) => boolean;
    removeTrailingSlash: (p: string) => string;
    withoutExtension: (fileName: string) => string;
    calculateDeviceName: (ipInfo: import("peer-types").IPInfo, userAgent: import("ua-parser-js").IResult) => string;
    cleanupTimer: (uniqueId: string) => void;
    executeFunctionWithParameters: (functionName: string | number | symbol, authToken: string | undefined, parameters: any[] | undefined, ctx: import("server/typings/common").Context) => Promise<import("api-types").RealApiReturnType<any>>;
    getHasAuthorization: (device: import("peer-types").Device, tsFunction: import("code-types").TsFunction) => boolean;
    getNewPerformance: (label: string, uniqueId: string, isNew?: boolean | undefined) => import("code-types").PerformanceItem | undefined;
    getTsFunction: (functionName: string) => Promise<import("code-types").TsFunction | null>;
    storeFunctionExecution: (tsFunction: import("code-types").TsFunction, inputParameters: any[] | undefined, output: any, performance: import("code-types").PerformanceItem[], isResultFromCache: boolean) => Promise<void>;
    upsertDevice: (ctx: import("server/typings/common").Context) => Promise<import("peer-types").Device | undefined>;
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
    getSdkFunctions: (config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => Promise<import("generate-sdk-operations").FunctionsPerClassification | undefined>;
    isTsFunctionIndexable: (tsFunction: import("code-types").TsFunction) => boolean;
    newEnvSdk: (bundleConfig: import("bundle-types").BundleConfig, type: "public" | "private", config?: {
        manualProjectRoot?: string | undefined;
        skipYarnInstall?: boolean | undefined;
        dryrun?: boolean | undefined;
    } | undefined) => Promise<string | undefined>;
    newSdkKeysOperation: (operationName: string, keyVariables: {
        variableName: string;
        values: string[];
    }[], config?: {
        manualProjectRoot?: string | undefined;
        skipYarnInstall?: boolean | undefined;
        dryrun?: boolean | undefined;
    } | undefined) => Promise<string | undefined>;
    newSdkOperation: (operationName: string, tsFunctions: import("code-types").TsFunction[], config?: {
        manualProjectRoot?: string | undefined;
        skipYarnInstall?: boolean | undefined;
        dryrun?: boolean | undefined;
    } | undefined) => Promise<string | undefined>;
    tsFunctionIsSdkable: (tsFunction: import("code-types").TsFunction, operationClassificationObject: import("generate-sdk-operations").OperationClassificationObject, operationClassification: "js" | "ts" | "node" | "server" | "web" | "app" | "ui-es6" | "ui-es5" | "ui-esm") => boolean;
    getAllOperationSourcePaths: (config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => Promise<string[]>;
    getImportedDependencies: ({ operationFolderPath, }: {
        operationFolderPath: string;
    }) => string[] | undefined;
    getPackage: (absoluteModuleString: string) => string;
    isAbsoluteImport: (moduleString: string) => boolean;
    calculatePackageJsonDependencies: (dependencies: import("code-types").PackageInfoObject | undefined, imports: import("model-types").Creation<import("code-types").TsImport>[], packageJsons: import("code-types").PackageJson[], operationName: string) => {
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
    }) => Promise<import("code-types").PackageJson | null>;
    getPackageSourcePaths: ({ operationBasePath, ignoreIndexFiles, allTypes, }: {
        operationBasePath: string;
        ignoreIndexFiles?: boolean | undefined;
        allTypes?: boolean | undefined;
    }) => Promise<string[]>;
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
        publicAuthorization: ("search" | "execute" | "write-create" | "write-update" | "write-delete" | "read")[];
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
    schemaToTsInterface: (filePath: string, typeName: string, schema: import("json-schema").JSONSchema7, morphInterfaceInfo: import("index-typescript").MorphInterfaceInfo | undefined) => Promise<import("model-types").Creation<import("code-types").TsInterface> | undefined>;
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
    findAllDocsFolderPaths: (ignoreOperations?: boolean | undefined) => Promise<string[]>;
    findAllDotGitFolders: (config: import("k-explore").BaseConfig) => Promise<import("code-types").TextJson[]>;
    findAllFoldersWithName: (config: {
        basePath: string;
        folderName: string;
        ignoreOperations?: boolean | undefined;
    }) => Promise<string[]>;
    findAllPackages: (config?: {
        basePath: string | string[] | undefined;
    } | undefined) => Promise<import("code-types").TextJson[]>;
    findAllTodoFolderPaths: (basePath: string, ignoreOperations?: boolean | undefined) => Promise<string[]>;
    pathArrayIsOperation: (pathArray: string[]) => boolean;
    runTestsForOperation: (operationName: string, writeResultsToIndex?: boolean | undefined, manualProjectRoot?: string | undefined) => Promise<boolean | undefined>;
    runTests: (test: import("k-test").Test, operationName?: string | undefined) => Promise<boolean>;
    preIndexLint: ({ operationFolderPath, }: {
        operationFolderPath: string;
    }) => Promise<string[]>;
    sendMail: (mailData: import("mail").MailDataFromOptional | import("mail").MailDataFromOptional[], isMultiple?: boolean | undefined) => Promise<import("@sendgrid/mail").ClientResponse | undefined>;
    bundleFolderWithMarkdown: (outlineTitle: string, absoluteFolderPath: string, fileName?: string | undefined) => Promise<{
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
    deployToVercel: () => void;
    emailMarkdownParse: () => void;
    generateStaticSite: ({ projectRelativeMdFilePath, singlePage, }: {
        singlePage?: boolean | undefined;
        projectRelativeMdFilePath?: string | undefined;
    }) => void;
    getJsonSchemaSummary: (schema: import("json-schema").JSONSchema7 | undefined, isMarkdown: boolean) => {
        typeDescriptor: string;
        description: string | undefined;
    } | undefined;
    getMergedMarkdownOutlineUrl: (title: string) => {
        title: string;
        hashtagPath: string;
    };
    getOutline: (markdownParse: import("code-types").MarkdownParse) => string | undefined;
    getTitlesRecursively: (chunk: import("code-types").MarkdownChunk) => import("markdown-parsings").NestedTitle[];
    getTypeDescriptorRecursive: (schema: import("json-schema").JSONSchema7, isMarkdown: boolean) => string;
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
    tsVariableToMarkdownString: (tsVariable: import("code-types").TsVariable) => string;
    upMarkdownChunkLevelRecursively: (markdownChunks: import("code-types").MarkdownChunk[] | undefined) => import("code-types").MarkdownChunk[] | undefined;
    copyStaticAssets: (markdownReaderPages: import("markdown-reader-types").MarkdownReaderPage[], config?: {
        operationName?: string | undefined;
    } | undefined) => Promise<boolean | undefined>;
    getAllMarkdownReaderPages: (config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => Promise<import("markdown-reader-types").MarkdownReaderPage[] | undefined>;
    getFolderExplorationInfo: (nestedPathObject: import("nested-menu").NestedPathObject, queryPath: string, projectRoot: string) => Promise<{
        title: string | undefined;
        description: string | null;
        descriptionProjectRelativeMarkdownPath: string | null;
        children: {
            projectRelativeMarkdownPath: string | null;
            title: string;
            firstParagraph: string | null;
            folderName: string;
        }[];
    }>;
    getMarkdownModelPages: (projectRoot: string) => Promise<import("markdown-reader-types").MarkdownReaderPage[]>;
    getMarkdownPageInfo: (projectRoot: string, nestedPathObject: import("nested-menu").NestedPathObject, queryPath: string, contentPage: import("markdown-reader-types").MarkdownReaderPage) => Promise<{
        markdownFile: import("code-types").WebMarkdownFile | null;
        nextQueryPath: string | null;
        previousQueryPath: string | null;
        projectRelativeMarkdownPath: string | null;
    }>;
    getMarkdownReaderPages: (config: {
        projectRoot: string;
        basePaths: string[];
        mapQueryPath?: ((queryPath: string) => string) | undefined;
    }) => Promise<import("markdown-reader-types").MarkdownReaderPage[]>;
    getMarkdownReaderQueryPaths: (config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => Promise<string[] | undefined>;
    getOperationPages: (projectRoot: string, bundleMarkdownReaderConfig?: import("bundle-types").BundleMarkdownReaderConfig | undefined) => Promise<import("markdown-reader-types").MarkdownReaderPage[]>;
    getPublicMarkdownFilePaths: (baseFolderPath: string, includeFoldersWithResults?: boolean | undefined) => Promise<{
        path: string;
        isFolder: boolean;
    }[]>;
    getTodoPages: (projectRoot: string) => Promise<import("markdown-reader-types").MarkdownReaderPage[]>;
    markdownReaderGetStaticPaths: import("next").GetStaticPaths<import("querystring").ParsedUrlQuery>;
    markdownReaderGetStaticProps: (context: import("next").GetStaticPropsContext<import("querystring").ParsedUrlQuery, import("next").PreviewData>) => Promise<{
        props: import("markdown-reader-types").MarkdownReaderPageProps;
    }>;
    removeExtensionsFromPath: (relativePath: string) => string;
    removeNumberPrefix: (fileOrFolderName: string) => string;
    shouldExposeMarkdownFile: (parameters: import("matter-types").Frontmatter) => boolean;
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
        type?: "js" | "ts" | "node" | "server" | "web" | "app" | "ui-es6" | "ui-es5" | "ui-esm" | undefined;
        operationConfig?: import("code-types").OperationConfig | undefined;
        description?: string | undefined;
        destinationPath?: string | undefined;
        manualProjectRoot?: string | undefined;
    } | undefined) => Promise<string | undefined>;
    newTemplate: (type: string, destinationPath?: string | undefined) => Promise<string | undefined>;
    nodemon: (operationName: string, cliFunctionName: string, vars?: string[] | undefined, manualProjectRoot?: string | undefined) => Promise<void>;
    addPeerMessage: (message: string, peerSlug: string) => Promise<import("fs-orm").DbQueryResult>;
    addPeer: (ip: string, authToken?: string | undefined, peerName?: string | undefined, force?: boolean | undefined, isMe?: boolean | undefined) => Promise<{
        isSuccesful: boolean;
        message: string;
    }>;
    getAllAppOperations: () => Promise<import("peer-types").AppOperation[]>;
    getFirstEmoji: (text?: string | undefined) => string | undefined;
    getNestedPathObject: (baseFolderPath: string) => Promise<import("nested-menu").NestedPathObject>;
    getPeerMessages: () => Promise<import("peer-types").PeerMessage[]>;
    getPeersFromPeersRecursively: () => void;
    getPeers: () => Promise<{
        success: boolean;
        peers: Peer[];
    }>;
    getPublicFolderNestedPathObjectFromPeer: (peerSlug: string) => Promise<{
        peerApiResult: import("api-types").RealApiReturnType<"getPublicFolderNestedPathObject">;
    } | undefined>;
    getPublicFolderNestedPathObject: () => Promise<import("nested-menu").NestedPathObject | undefined>;
    getPublicPeers: () => Promise<any[]>;
    isPortUsed: (port: number) => Promise<boolean>;
    lateFetchPeerMessageSync: () => Promise<{
        newMessagesAmount: number;
    }>;
    ping: () => boolean;
    proactivePushAddPeerMessage: (message: string, peerSlug: string) => Promise<boolean>;
    removePeer: (slug: string) => Promise<import("fs-orm").DbQueryResult>;
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
    readCsvFileSync: <T_7 extends import("csv-util").CsvItemType>(filePath: string) => T_7[] | null;
    readCsvFile: <T_8 extends import("csv-util").CsvItemType>(filePath: string | undefined) => Promise<T_8[] | null>;
    readJsonFileSync: <T_9>(filePath: string) => T_9 | null;
    readJsonFile: <T_10>(filePath: string | undefined) => Promise<T_10 | null>;
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
    addAuthenticationMethod: () => void;
    addDeviceAuthenticatedMethod: (deviceId: string, method: import("peer-types").AuthenticationMethodMethod, handle: string, credential?: string | undefined) => Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    addDeviceAuthenticationMethodConfirm: (deviceId: string, method: import("peer-types").AuthenticationMethodMethod, otp: number) => Promise<{
        isSuccessful: boolean;
        message: string;
    } | undefined>;
    addPersonAuthenticationMethod: () => Promise<void>;
    comparePassword: (rawPassword: string, encryptedPassword: string) => Promise<boolean>;
    encryptPassword: (rawPassword: string) => Promise<string>;
    isPhoneNumber: (phoneNumber: string) => boolean;
    isValidPassword: (password: string) => boolean;
    login: (deviceId: string) => Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    logoutPostApi: () => any;
    removeDeviceAuthenticationMethod: () => void;
    removePersonAuthenticationMethod: () => void;
    signup: (deviceId: string, personData: Pick<import("peer-types").Person, "name" | "slug" | "authorizations" | "credits" | "dataEntries" | "interestSlugs" | "media" | "pictureImage" | "groupSlugs" | "requiredAuthenticationMethods" | "amountAuthenticationMethodsRequired">) => Promise<{
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
    untypedApiFunction: (fnName: string, config: import("api-types").ApiConfig, ...parameters: any) => Promise<import("api-types").RealApiReturnType<any>>;
    addToken: (name: string, previousToken?: string | undefined, attachTokenToFilename?: boolean | undefined) => string;
    ensureToken: (name: string, newToken?: string | undefined, attachTokenToFilename?: boolean | undefined) => string;
    getAssetDirectlyApiUrl: (apiUrl: string, projectRelativeAssetPath: string) => string;
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
    AssetInput: (props: {
        attachTokenToFilename?: boolean | undefined;
        defaultAssetName: string;
        allowMultiple?: boolean | undefined;
        inputTypes?: import("asset-type").NewAssetType[] | undefined;
        value?: import("asset-type").BackendAsset[] | undefined;
        onChange: (value: import("asset-type").BackendAsset[]) => void;
        projectRelativeReferencingFilePath: string;
    }) => JSX.Element;
    FileInput: (props: {
        setBlobs: (blobs: import("asset-type").Asset[]) => void;
    }) => JSX.Element;
    getTypeFromFileBlob: (file: File) => import("asset-type").AssetType;
    makeBackendAsset: (asset: import("asset-type").Asset) => import("asset-type").BackendAsset;
    MediaRecorderComponent: (props: import("asset-input").ReactMediaRecorderRenderProps & {
        type: import("asset-input").MediaRecorderType;
    }) => JSX.Element;
    MediaRecorder: (props: {
        type: import("asset-input").MediaRecorderType;
        withBlob: (blobUrl: string, blob: Blob) => void;
    }) => JSX.Element;
    ReactMediaRecorder: (props: import("asset-input").ReactMediaRecorderProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    SelectMedia: (props: {
        source: import("asset-input").MediaSourceEnum;
    }) => JSX.Element;
    useReactMediaRecorder: typeof useReactMediaRecorder;
    WebcamCapture: (props: {
        withBlob: (blobUrl: string, blob: Blob) => void;
    }) => JSX.Element;
    AssetView: (props: {
        asset: import("asset-type").Asset;
        className?: string | undefined;
        projectRelativeReferencingFilePath: string;
        hideDownloadLink?: boolean | undefined;
    }) => JSX.Element;
    InteractiveAsset: (props: {
        asset: import("asset-type").Asset;
        attachTokenToFilename?: boolean | undefined;
        projectRelativeReferencingFilePath: string;
        remove: () => void;
        onChange: (newAsset: import("asset-type").Asset) => void;
    }) => JSX.Element;
    BigButton: (button: BigButton) => JSX.Element;
    BreadCrumbs: (props: {
        path: string;
    }) => JSX.Element;
    renderBreadCrumbs: (chunks: string[]) => JSX.Element[];
    ClickableIcon: (button: import("clickable-icon").ClickableIconType) => JSX.Element;
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
    FancyLoader: ({ big, medium, }: {
        big?: boolean | undefined;
        medium?: boolean | undefined;
    }) => JSX.Element;
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
    getAllFoldersUntilFolder: (folderPath: string) => string[];
    getFileName: (pathString: string) => string;
    getFirstAvailableFilename: (absoluteFilePath: string) => string;
    getFolder: (pathString: string) => string;
    getLastFolder: (pathString: string) => string;
    getOneFolderUpPath: (folderPath: string) => string;
    getPathCombinations: (...chunksSegments: (string | string[])[]) => string[];
    importFromFiles: <T_11>({ files, importStrategy, list, guard, }: {
        files: string[];
        importStrategy?: "fileName" | "default" | "list" | undefined;
        list?: string[] | undefined;
        guard?: ((moduleExports: any) => boolean) | undefined;
    }) => T_11[];
    isArrayGuard: (moduleExports: any) => boolean;
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
    writeJsonToFile: <T_12>(p: string, data: T_12) => Promise<boolean>;
    writeStringToFile: (p: string, data: string) => Promise<boolean>;
    writeToFiles: (fileObject: {
        [filePath: string]: any;
    }) => Promise<void>;
    FunctionForm: <T_13 extends (...params: any[]) => any>(props: {
        tsFunction: any;
        submitFunction?: T_13 | undefined;
        withResult?: ((result: import("api-types").WithoutPromise<ReturnType<T_13>>) => void) | undefined;
        withApiResult?: ((result: any) => void) | undefined;
        initialValues?: any[] | undefined;
        hideResult?: boolean | undefined;
    }) => JSX.Element;
    findFolderWhereMatch: <T_14>(fullSourcePath: string, matchFunction: (folderPath: string) => T_14) => {
        folderPath: string;
        matchResult: T_14;
    } | undefined;
    findOperationBasePathWithClassification: (startPath: string) => {
        folderPath: string;
        classification: "js" | "ts" | "node" | "server" | "web" | "app" | "ui-es6" | "ui-es5" | "ui-esm";
    } | undefined;
    findOperationBasePath: (startPath: string) => string | undefined;
    getAllPackageJsonDependencies: (p: import("code-types").PackageJson) => string[];
    getCommonAncestor: (path1: string, path2: string) => string;
    getOperationClassification: (folderPath: string) => "js" | "ts" | "node" | "server" | "web" | "app" | "ui-es6" | "ui-es5" | "ui-esm" | undefined;
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
    hasDependency: (packageJson: import("code-types").PackageJson, dependency: string) => boolean;
    isOperation: (absoluteFolderPath: string) => boolean;
    isSensibleProject: (folderPath?: string | undefined) => boolean;
    isWorkspaceRoot: (folderPath: string) => {
        isSensibleProject: boolean;
        isWorkspaceRoot: boolean;
    } | undefined;
    makeRelative: (absolutePath: string, baseFolderPath: string) => string;
    getTsConfig: (packageFolder: string) => Promise<import("code-types").TsConfig | null>;
    isAltB: (keyboardEvent: KeyboardEvent) => boolean;
    isAltN: (keyboardEvent: KeyboardEvent) => boolean;
    isAltO: (keyboardEvent: KeyboardEvent) => boolean;
    isAltW: (keyboardEvent: KeyboardEvent) => boolean;
    isCtrlBacktick: (keyboardEvent: KeyboardEvent) => boolean;
    isCtrlP: (keyboardEvent: KeyboardEvent) => boolean;
    isCtrlS: (keyboardEvent: KeyboardEvent) => boolean;
    isCtrlSpace: (keyboardEvent: KeyboardEvent) => boolean;
    useHotkey: (isRightKey: (keyboardEvent: KeyboardEvent) => boolean, callback: () => void, dependencies: any[]) => void;
    useHotkeys: (dependencies: any[], callback: (keyboardEvent: KeyboardEvent) => void) => void;
    apply: <T_15>(functions: ((input: T_15) => T_15)[], value: T_15) => T_15;
    createEnum: <T_16 extends readonly string[]>(array: T_16) => { [K in T_16[number]]: K; };
    createMappedObject: <T_17 extends {
        [key: string]: any;
    }>(array: T_17[], mapKey: keyof T_17) => import("js-util").MappedObject<T_17>;
    findLastIndex: <T_18>(array: T_18[], findFn: (item: T_18) => boolean) => number | undefined;
    getObjectFromParamsString: (paramsString: string) => {
        [x: string]: string;
    };
    getObjectKeysArray: <TObject extends {
        [key: string]: any;
    }>(object: TObject) => Extract<keyof TObject, string>[];
    getParameterAtLocation: <T_19 = any>(object: {
        [key: string]: any;
    }, location: string[]) => T_19;
    getSubsetFromObject: <T_20>(object: {
        [key: string]: T_20;
    }, keys: string[]) => {
        [key: string]: T_20;
    };
    groupByKey: <T_21 extends {
        [key: string]: any;
    }>(array: T_21[], key: keyof T_21) => {
        [key: string]: T_21[];
    };
    insertAt: <T_22>(array: T_22[], items: T_22 | T_22[], beforeIndex: number) => T_22[];
    isAllTrue: (array: boolean[]) => boolean;
    makeArray: <T_23>(...arrayOrNotArray: (T_23 | T_23[] | undefined)[]) => T_23[];
    mapAsync: <T_24, U>(array: T_24[], callback: (value: T_24, index: number, array: T_24[]) => Promise<U>) => Promise<Awaited<U>[]>;
    mapKeys: (object: {
        [key: string]: any;
    }, mapFn: (key: string) => string | Promise<string> | undefined) => Promise<{
        [x: string]: any;
    }>;
    mapMany: <T_25, U_1>(array: T_25[], mapFn: (item: T_25, index: number, array: T_25[]) => Promise<U_1>, limit?: number | undefined) => Promise<U_1[]>;
    mapValuesSync: <T_26, U_2>(object: {
        [key: string]: T_26;
    }, mapFn: (value: T_26) => U_2) => {
        [x: string]: U_2;
    };
    mergeObjectParameters: <T_27>(config: T_27 | undefined, defaults: T_27 | undefined) => Partial<T_27>;
    mergeObjectsArray: <T_28 extends {
        [key: string]: any;
    }>(objectsArray: T_28[]) => T_28;
    mergeObjects: <T_29 extends {
        [key: string]: any;
    }>(...objects: (Partial<T_29> | undefined)[]) => T_29 | undefined;
    notEmpty: typeof notEmpty;
    objectMapAsync: <TObject_1 extends {
        [key: string]: any;
    }, TResultValue, TResultObject extends { [key in keyof TObject_1]: TResultValue; }>(object: TObject_1, mapFn: (key: Extract<keyof TObject_1, string>, value: TObject_1[keyof TObject_1]) => Promise<TResultValue>) => Promise<TResultObject>;
    objectMapSync: <TObject_2 extends {
        [key: string]: any;
    }, TMapResult, TResultObject_1 extends { [key_1 in keyof TObject_2]: TMapResult; }>(object: TObject_2, mapFn: (key: keyof TObject_2, value: TObject_2[keyof TObject_2]) => TMapResult) => TResultObject_1;
    objectValuesMap: <T_30 extends {
        [key: string]: T_30[string];
    }, U_3 extends unknown>(object: T_30, mapFn: (key: string, value: T_30[string]) => U_3) => {
        [key: string]: U_3;
    };
    omitUndefinedValues: <T_31 extends {
        [key: string]: any;
    }>(object: T_31) => T_31;
    onlyUnique2: <U_4>(isEqualFn?: ((a: U_4, b: U_4) => boolean) | undefined) => <T_32 extends U_4>(value: T_32, index: number, self: T_32[]) => boolean;
    onlyUnique: typeof onlyUnique;
    removeIndexFromArray: <T_33>(array: T_33[], index: number) => T_33[];
    replaceLastOccurence: (string: string, searchValue: string, replaceValue: string) => string;
    reverseString: (string: string) => string;
    sumAllKeys: <T_34 extends {
        [key: string]: number | undefined;
    }>(objectArray: T_34[], keys: (keyof T_34)[]) => T_34;
    sumObjectParameters: <TObject_3 extends {
        [key: string]: number;
    }>(object1: TObject_3, object2: TObject_3) => TObject_3;
    sum: (items: number[]) => number;
    takeFirst: <T_35>(arrayOrNot: T_35 | T_35[]) => T_35;
    trimSlashes: (absoluteOrRelativePath: string) => string;
    getSimpleJsonString: (json: import("json-util").Json) => string | undefined;
    flattenMarkdownChunks: (markdownChunks: import("code-types").MarkdownChunk[]) => import("code-types").MarkdownParagraph[];
    getKvmdItemsRecursively: (chunk: import("code-types").MarkdownChunk, categoryStackCalculatedUntilNow?: import("model-types").CategoryStack | undefined) => import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[];
    getParagraphsRecursively: (chunk: import("code-types").MarkdownChunk, categoryStackCalculatedUntilNow?: import("model-types").CategoryStack | undefined) => import("code-types").MarkdownParagraph[];
    kvmdDataMap: <T_36 extends {
        [key: string]: string | string[] | undefined;
    }>(data: import("model-types").KeyValueMarkdownModelType[], { keyName, valueName, categoryStackCalculatedName, commentName, }: {
        keyName?: string | undefined;
        valueName?: string | undefined;
        commentName?: string | undefined;
        categoryStackCalculatedName?: string | undefined;
    }) => T_36[];
    kvmdDataToString: (kvmdData: import("model-types").KeyValueMarkdownModelType, previous: import("model-types").KeyValueMarkdownModelType | undefined) => string;
    kvmdParseToMarkdownString: (keyValueMarkdownParse: import("model-types").KeyValueMarkdownParse) => string;
    markdownStringToKvmdParse: (kvMdString: string, dbFileLocation: import("model-types").DbFileLocation) => import("model-types").KeyValueMarkdownParse;
    parseKvmdLine: (string: string) => import("model-types").KvmdLine | undefined;
    LabeledButton: (button: import("labeled-button").LabeledButtonType, index: number) => JSX.Element;
    getCallerFileName: () => string | undefined;
    log: (message: string, config?: import("log").LogConfig | undefined, data?: any) => void;
    parseTitle: (markdown: string) => {
        title: string;
        rest: string;
    };
    checkAuthToken: (password: string) => Promise<{
        isSuccessful: boolean;
        message: string;
        authToken: string;
    }>;
    LoginForm: (props: {
        title?: string | undefined;
    }) => JSX.Element;
    LoginWrapper: (props: {
        title?: string | undefined;
        children: JSX.Element;
    }) => JSX.Element;
    logoutFrontend: () => Promise<void>;
    makeFileType: (filePath: string) => Promise<import("make-file-type").FileType | undefined>;
    isResultOfInterface: <TResult>(result: TResult, jsonSchema: unknown) => boolean;
    makeTest: <TResult_1>(testFunction: (() => Promise<TResult_1>) | (() => TResult_1), isValid?: ((result: TResult_1) => boolean) | undefined) => () => Promise<boolean>;
    getChunkParagraphsRecursively: (chunk: import("code-types").MarkdownChunk) => string[];
    getImplicitId: (title: string) => string;
    getMarkdownIntro: (markdownParse: import("code-types").MarkdownParse | null) => {
        title: string | undefined;
        firstParagraph: string | null;
    };
    getMarkdownParseParagraphs: (markdownParse: import("code-types").MarkdownParse) => string[];
    getMarkdownReferencePaths: (markdownString: string) => string[];
    getMarkdownReferencesFromParagraph: (paragraph: string) => import("markdown-parse-js").MarkdownReference[];
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
    oneByOne: <T_37, U_5>(array: T_37[], callback: (instance: T_37, index: number) => Promise<U_5>) => Promise<U_5[]>;
    getDependenciesSummary: (operationName: string) => Promise<{
        coreDependencies: string[];
        operationDependencies: string[];
        packageDependencies: string[];
    }>;
    getOperationMetaData: (operationBasePath: string) => Promise<import("operation-util").OperationMetaData | undefined>;
    recalculateOperationIndexJson: (operationBasePath: string, manualProjectRoot?: string | undefined) => Promise<void>;
    writeKeyToOperationIndexJson: <K_1 extends keyof import("code-types").OperationIndex>(absolutePath: string, key: K_1, value: import("code-types").OperationIndex[K_1]) => Promise<void>;
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
    bodyFromQueryString: (query?: string | undefined) => {
        [key: string]: string | string[] | undefined;
    } | undefined;
    getFirstQueryStrings: (query: {
        [key: string]: string | string[] | undefined;
    }) => (string | undefined)[];
    getQueryPart: (strings: string[], queryKey: string) => string;
    toQueryString: (query?: any) => string;
    runChildProcess: (config: {
        operationFolderName: string;
        scriptFileName: string;
        args?: (string | undefined)[] | undefined;
    }) => Promise<(string | null)[] | undefined>;
    findFirstCommentTypes: (strippedFullComment?: string | undefined) => import("code-types").CommentTypeObject;
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
    findSentenceMatches: <T_38>(searchMessage: string, array: T_38[], getSentence?: ((x: T_38) => string) | undefined) => T_38[];
    searchRecursiveObjectArray: <T_39 extends {
        children?: T_39[] | undefined;
    } & Object>(array: T_39[], baseMatcher: (item: T_39) => boolean, afterMapper?: ((item: T_39, isMatch: boolean, hasChildMatch: boolean) => T_39) | undefined) => T_39[];
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
    tryParseJson: <T_40>(text: string, logParseError?: boolean | undefined) => T_40 | null;
    createCodeblockMarkdown: (text: string, language?: string | null | undefined) => string;
    useCustomUrlStore: <T_41 extends string | number | boolean | string[] | boolean[] | number[] | undefined>(queryKey: string, config: import("use-url-store").CustomUrlStoreConfig) => [T_41, (newValue: T_41 | undefined) => Promise<boolean>];
};
export declare type SdkType = typeof sdk;
//# sourceMappingURL=sdk.d.ts.map