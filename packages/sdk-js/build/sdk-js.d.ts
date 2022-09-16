/// <reference types="node" />
/// <reference types="react" />
import { getTypescriptErrorsFromFiles } from "compile-typescript";
import { generatePassword } from "model-types";
import { isEmail } from "model-types";
import { slugify } from "convert-case";
import { notEmpty } from "js-util";
import { onlyUnique } from "js-util";
import { byteCount } from "path-util";
export declare const sdk: {
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
    importFromFiles: <T>({ files, importStrategy, list, guard, }: {
        files: string[];
        importStrategy?: "default" | "fileName" | "list" | undefined;
        list?: string[] | undefined;
        guard?: ((moduleExports: any) => boolean) | undefined;
    }) => T[];
    isArrayGuard: (moduleExports: any) => boolean;
    parseMd: (mdFilePath: string) => import("fs-util").Markdown;
    removeAllExcept: (folderPath: string, config?: {
        ignore?: string[] | undefined;
        typeToRemove?: "file" | "folder" | undefined;
    } | undefined) => Promise<{
        name: string;
        removed: boolean;
    }[]>;
    removeTrailingSlash: (p: string) => string;
    withoutExtension: (fileName: string) => string;
    writeJsonToFile: <T_1>(p: string, data: T_1) => Promise<boolean>;
    writeStringToFile: (p: string, data: string) => Promise<boolean>;
    writeToFiles: (fileObject: {
        [filePath: string]: any;
    }) => Promise<void>;
    findFolderWhereMatch: <T_2>(fullSourcePath: string, matchFunction: (folderPath: string) => T_2) => {
        folderPath: string;
        matchResult: T_2;
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
    getRootPath: (name?: "assets" | "backups" | "bundled" | "cloned" | "distributions" | "operations" | "text" | "db" | undefined, config?: {
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
    apply: <T_3>(functions: ((input: T_3) => T_3)[], value: T_3) => T_3;
    createEnum: <T_4 extends readonly string[]>(array: T_4) => { [K in T_4[number]]: K; };
    findLastIndex: <T_5>(array: T_5[], findFn: (item: T_5) => boolean) => number | undefined;
    getObjectFromParamsString: (paramsString: string) => {
        [x: string]: string;
    };
    getObjectKeysArray: <TObject extends {
        [key: string]: any;
    }>(object: TObject) => Extract<keyof TObject, string>[];
    getSubsetFromObject: <T_6>(object: {
        [key: string]: T_6;
    }, keys: string[]) => {
        [key: string]: T_6;
    };
    groupByKey: <T_7 extends {
        [key: string]: any;
    }>(array: T_7[], key: keyof T_7) => {
        [key: string]: T_7[];
    };
    insertAt: <T_8>(array: T_8[], items: T_8 | T_8[], beforeIndex: number) => T_8[];
    isAllTrue: (array: boolean[]) => boolean;
    makeArray: <T_9>(...arrayOrNotArray: (T_9 | T_9[] | undefined)[]) => T_9[];
    mapAsync: <T_10, U>(array: T_10[], callback: (value: T_10, index: number, array: T_10[]) => Promise<U>) => Promise<Awaited<U>[]>;
    mapKeys: (object: {
        [key: string]: any;
    }, mapFn: (key: string) => string | Promise<string> | undefined) => Promise<{
        [x: string]: any;
    }>;
    mapMany: <T_11, U_1>(array: T_11[], mapFn: (item: T_11, index: number, array: T_11[]) => Promise<U_1>, limit?: number | undefined) => Promise<U_1[]>;
    mapValuesSync: <T_12, U_2>(object: {
        [key: string]: T_12;
    }, mapFn: (value: T_12) => U_2) => {
        [x: string]: U_2;
    };
    mergeObjectParameters: <T_13>(config: T_13 | undefined, defaults: T_13 | undefined) => Partial<T_13>;
    mergeObjectsArray: <T_14 extends {
        [key: string]: any;
    }>(objectsArray: T_14[]) => T_14;
    mergeObjects: <T_15 extends {
        [key: string]: any;
    }>(...objects: (Partial<T_15> | undefined)[]) => T_15 | undefined;
    notEmpty: typeof notEmpty;
    objectMapAsync: <TObject_1 extends {
        [key: string]: any;
    }, TResultValue, TResultObject extends { [key in keyof TObject_1]: TResultValue; }>(object: TObject_1, mapFn: (key: Extract<keyof TObject_1, string>, value: TObject_1[keyof TObject_1]) => Promise<TResultValue>) => Promise<TResultObject>;
    objectMapSync: <TObject_2 extends {
        [key: string]: any;
    }, TMapResult, TResultObject_1 extends { [key_1 in keyof TObject_2]: TMapResult; }>(object: TObject_2, mapFn: (key: keyof TObject_2, value: TObject_2[keyof TObject_2]) => TMapResult) => TResultObject_1;
    objectValuesMap: <T_16 extends {
        [key: string]: T_16[string];
    }, U_3 extends unknown>(object: T_16, mapFn: (key: string, value: T_16[string]) => U_3) => {
        [key: string]: U_3;
    };
    onlyUnique2: <U_4>(isEqualFn?: ((a: U_4, b: U_4) => boolean) | undefined) => <T_17 extends U_4>(value: T_17, index: number, self: T_17[]) => boolean;
    onlyUnique: typeof onlyUnique;
    removeIndexFromArray: <T_18>(array: T_18[], index: number) => T_18[];
    replaceLastOccurence: (string: string, searchValue: string, replaceValue: string) => string;
    reverseString: (string: string) => string;
    sumAllKeys: <T_19 extends {
        [key: string]: number | undefined;
    }>(objectArray: T_19[], keys: (keyof T_19)[]) => T_19;
    sumObjectParameters: <TObject_3 extends {
        [key: string]: number;
    }>(object1: TObject_3, object2: TObject_3) => TObject_3;
    sum: (items: number[]) => number;
    takeFirst: <T_20>(arrayOrNot: T_20 | T_20[]) => T_20;
    getSimpleJsonString: (json: import("json-util").Json) => string | undefined;
    flattenMarkdownChunks: (markdownChunks: import("code-types").MarkdownChunk[]) => import("code-types").MarkdownParagraph[];
    getKvmdItemsRecursively: (chunk: import("code-types").MarkdownChunk, categoryStackCalculatedUntilNow?: import("model-types").CategoryStack | undefined) => import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[];
    getParagraphsRecursively: (chunk: import("code-types").MarkdownChunk, categoryStackCalculatedUntilNow?: import("model-types").CategoryStack | undefined) => import("code-types").MarkdownParagraph[];
    kvmdDataMap: <T_21 extends {
        [key: string]: string | string[] | undefined;
    }>(data: import("model-types").KeyValueMarkdownModelType[], { keyName, valueName, categoryStackCalculatedName, commentName, }: {
        keyName?: string | undefined;
        valueName?: string | undefined;
        commentName?: string | undefined;
        categoryStackCalculatedName?: string | undefined;
    }) => T_21[];
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
    oneByOne: <T_22, U_5>(array: T_22[], callback: (instance: T_22, index: number) => Promise<U_5>) => Promise<U_5[]>;
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
        type?: "text" | "code" | "data" | undefined;
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
    findSentenceMatches: <T_23>(searchMessage: string, array: T_23[], getSentence?: ((x: T_23) => string) | undefined) => T_23[];
    searchRecursiveObjectArray: <T_24 extends {
        children?: T_24[] | undefined;
    } & Object>(array: T_24[], baseMatcher: (item: T_24) => boolean, afterMapper?: ((item: T_24, isMatch: boolean, hasChildMatch: boolean) => T_24) | undefined) => T_24[];
};
export declare type SdkType = typeof sdk;
//# sourceMappingURL=sdk-js.d.ts.map