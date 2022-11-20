/// <reference types="node" />
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
        typeToRemove?: "file" | "folder" | undefined;
    } | undefined) => Promise<{
        name: string;
        removed: boolean;
    }[]>;
    renameAndCreate: (oldPath: string, newPath: string) => Promise<void>;
    writeJsonToFile: <T>(p: string, data: T) => Promise<boolean>;
    writeStringToFile: (p: string, data: string) => Promise<boolean>;
    writeToFiles: (fileObject: {
        [absoluteFilePath: string]: any;
    }) => Promise<void>;
    findFolderWhereMatch: <T_1>(fullSourcePath: string, matchFunction: (folderPath: string) => T_1) => {
        folderPath: string;
        matchResult: T_1;
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
    getRootPath: (name?: "assets" | "backups" | "bundled" | "cloned" | "distributions" | "operations" | "text" | "db" | undefined, config?: {
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
    apply: <T_2>(functions: ((input: T_2) => T_2)[], value: T_2) => T_2;
    createEnum: <T_3 extends readonly string[]>(array: T_3) => { [K in T_3[number]]: K; };
    createMappedObject: <T_4 extends {
        [key: string]: any;
    }, U = T_4>(array: T_4[], mapKey: keyof T_4, mapFn?: ((value: T_4, array: T_4[]) => U) | undefined) => import("js-util").MappedObject<U>;
    destructureOptionalObject: <T_5 extends {
        [key: string]: any;
    }>(object: T_5 | null | undefined) => Partial<T_5>;
    findLastIndex: <T_6>(array: T_6[], findFn: (item: T_6) => boolean) => number | undefined;
    getObjectFromParamsString: (paramsString: string) => {
        [x: string]: string;
    };
    getObjectKeysArray: <TObject extends {
        [key: string]: any;
    }>(object: TObject) => Extract<keyof TObject, string>[];
    getParameterAtLocation: <T_7 = any>(object: {
        [key: string]: any;
    }, location: string[]) => T_7;
    getSubsetFromObject: <T_8, K_1 extends readonly (keyof T_8)[]>(object: T_8, keys: K_1) => Pick<T_8, K_1[number]>;
    groupByKey: <T_9 extends {
        [key: string]: any;
    }>(array: T_9[], key: keyof T_9) => {
        [key: string]: T_9[];
    };
    hasAllLetters: (a: string, b: string) => boolean;
    insertAt: <T_10>(array: T_10[], items: T_10 | T_10[], beforeIndex: number) => T_10[];
    isAllTrue: (array: boolean[]) => boolean;
    makeArray: <T_11>(...arrayOrNotArray: (T_11 | T_11[] | undefined)[]) => T_11[];
    mapAsync: <T_12, U_1>(array: T_12[], callback: (value: T_12, index: number, array: T_12[]) => Promise<U_1>) => Promise<Awaited<U_1>[]>;
    mapKeys: (object: {
        [key: string]: any;
    }, mapFn: (key: string) => string | Promise<string> | undefined) => Promise<{
        [x: string]: any;
    }>;
    mapMany: <T_13, U_2>(array: T_13[], mapFn: (item: T_13, index: number, array: T_13[]) => Promise<U_2>, limit?: number | undefined) => Promise<U_2[]>;
    mapValuesSync: <T_14, U_3>(object: {
        [key: string]: T_14;
    }, mapFn: (value: T_14) => U_3) => {
        [x: string]: U_3;
    };
    mergeNestedObject: <T_15 extends import("js-util").O>(object: T_15, otherObject: import("js-util").NestedPartial<T_15> | undefined) => T_15;
    mergeObjectParameters: <T_16>(config: T_16 | undefined, defaults: T_16 | undefined) => Partial<T_16>;
    mergeObjectsArray: <T_17 extends {
        [key: string]: any;
    }>(objectsArray: T_17[]) => T_17;
    mergeObjects: <T_18 extends {
        [key: string]: any;
    }>(...objects: (Partial<T_18> | undefined)[]) => T_18 | undefined;
    noEmptyString: (input: string | undefined) => string | undefined;
    notEmpty: typeof notEmpty;
    objectMapAsync: <TObject_1 extends {
        [key: string]: any;
    }, TResultValue, TResultObject extends { [key in keyof TObject_1]: TResultValue; }>(object: TObject_1, mapFn: (key: Extract<keyof TObject_1, string>, value: TObject_1[keyof TObject_1]) => Promise<TResultValue>) => Promise<TResultObject>;
    objectMapSync: <TObject_2 extends {
        [key: string]: any;
    }, TMapResult, TResultObject_1 extends { [key_1 in keyof TObject_2]: TMapResult; }>(object: TObject_2, mapFn: (key: keyof TObject_2, value: TObject_2[keyof TObject_2]) => TMapResult) => TResultObject_1;
    objectValuesMap: <T_19 extends {
        [key: string]: T_19[string];
    }, U_4 extends unknown>(object: T_19, mapFn: (key: string, value: T_19[string]) => U_4) => {
        [key: string]: U_4;
    };
    omitUndefinedValues: <T_20 extends {
        [key: string]: any;
    }>(object: T_20) => T_20;
    onlyUnique2: <U_5>(isEqualFn?: ((a: U_5, b: U_5) => boolean) | undefined) => <T_21 extends U_5>(value: T_21, index: number, self: T_21[]) => boolean;
    onlyUnique: typeof onlyUnique;
    pickRandomArrayItem: <T_22>(array: T_22[]) => T_22;
    putIndexAtIndex: <T_23>(array: T_23[], index: number, toIndex: number) => T_23[];
    removeIndexFromArray: <T_24>(array: T_24[], index: number) => T_24[];
    removeOptionalKeysFromObjectStrings: <TObject_3 extends import("js-util").O>(object: TObject_3, keys: string[]) => TObject_3;
    removeOptionalKeysFromObject: <TObject_4 extends import("js-util").O>(object: TObject_4, keys: Exclude<Extract<keyof TObject_4, string>, Exclude<import("js-util").KeysOfType<TObject_4, Exclude<TObject_4[keyof TObject_4], undefined>>, undefined>>[]) => TObject_4;
    replaceLastOccurence: (string: string, searchValue: string, replaceValue: string) => string;
    reverseString: (string: string) => string;
    sumAllKeys: <T_25 extends {
        [key: string]: number | undefined;
    }>(objectArray: T_25[], keys: (keyof T_25)[]) => T_25;
    sumObjectParameters: <TObject_5 extends {
        [key: string]: number;
    }>(object1: TObject_5, object2: TObject_5) => TObject_5;
    sum: (items: number[]) => number;
    takeFirst: <T_26>(arrayOrNot: T_26 | T_26[]) => T_26;
    trimSlashes: (absoluteOrRelativePath: string) => string;
    getSimpleJsonString: (json: import("json-util").Json) => string | undefined;
    flattenMarkdownChunks: (markdownChunks: import("code-types").MarkdownChunk[]) => import("code-types").MarkdownParagraph[];
    getKvmdItemsRecursively: (chunk: import("code-types").MarkdownChunk, categoryStackCalculatedUntilNow?: import("model-types").CategoryStack | undefined) => import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[];
    getParagraphsRecursively: (chunk: import("code-types").MarkdownChunk, categoryStackCalculatedUntilNow?: import("model-types").CategoryStack | undefined) => import("code-types").MarkdownParagraph[];
    kvmdDataMap: <T_27 extends {
        [key: string]: string | string[] | undefined;
    }>(data: import("model-types").KeyValueMarkdownModelType[], { keyName, valueName, categoryStackCalculatedName, commentName, }: {
        keyName?: string | undefined;
        valueName?: string | undefined;
        commentName?: string | undefined;
        categoryStackCalculatedName?: string | undefined;
    }) => T_27[];
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
    oneByOne: <T_28, U_6>(array: T_28[], callback: (instance: T_28, index: number) => Promise<U_6>) => Promise<U_6[]>;
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
        type?: "text" | "code" | "data" | undefined;
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
    findSentenceMatches: <T_29>(searchMessage: string, array: T_29[], getSentence?: ((x: T_29) => string) | undefined) => T_29[];
    searchRecursiveObjectArray: <T_30 extends {
        children?: T_30[] | undefined;
    } & Object>(array: T_30[], baseMatcher: (item: T_30) => boolean, afterMapper?: ((item: T_30, isMatch: boolean, hasChildMatch: boolean) => T_30) | undefined) => T_30[];
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
    tryParseJson: <T_31>(text: string, logParseError?: boolean | undefined) => T_31 | null;
    createCodeblockMarkdown: (text: string, language?: string | null | undefined) => string;
    useCustomUrlStore: <T_32 extends string | number | boolean | string[] | boolean[] | number[] | undefined>(queryKey: string, config: import("use-url-store").CustomUrlStoreConfig) => [T_32, (newValue: T_32 | undefined) => Promise<boolean>];
};
export declare type SdkType = typeof sdk;
//# sourceMappingURL=sdk-js.d.ts.map