import { markdownParseToMarkdownModelType } from "code-types";
import { parseMarkdownModelTimestamp } from "code-types";
import { tryParseDate } from "code-types";
import { getCompileErrors } from "compile-typescript";
import { getTypescriptErrorsFromFiles } from "compile-typescript";
import { writeBuildErrors } from "compile-typescript";
import { generateId } from "model-types";
import { generatePassword } from "model-types";
import { generateRandomString } from "model-types";
import { generateTime } from "model-types";
import { isEmail } from "model-types";
import { markdownModelTypeToMarkdownString } from "model-types";
import { stripCommentEnd } from "comment-util";
import { stripCommentStart } from "comment-util";
import { stripComment } from "comment-util";
import { stripSlashes } from "comment-util";
import { stripStar } from "comment-util";
import { trim } from "comment-util";
import { camelCase } from "convert-case";
import { capitalCase } from "convert-case";
import { capitaliseFirstLetter } from "convert-case";
import { convertCase } from "convert-case";
import { getDelimiter } from "convert-case";
import { humanCase } from "convert-case";
import { kebabCase } from "convert-case";
import { lowerCaseArray } from "convert-case";
import { pascalCase } from "convert-case";
import { slugify } from "convert-case";
import { snakeCase } from "convert-case";
import { hasSubExtension } from "filename-conventions";
import { isGeneratedOperationName } from "filename-conventions";
import { isGeneratedOperation } from "filename-conventions";
import { isIndexableFileId } from "filename-conventions";
import { canAccessSync } from "fs-util";
import { canAccess } from "fs-util";
import { canExecuteSync } from "fs-util";
import { canExecute } from "fs-util";
import { canReadSync } from "fs-util";
import { canRead } from "fs-util";
import { canSeeSync } from "fs-util";
import { canSee } from "fs-util";
import { canWriteSync } from "fs-util";
import { canWrite } from "fs-util";
import { findAllMd } from "fs-util";
import { findFileNameCaseInsensitive } from "fs-util";
import { findFilesRecursively } from "fs-util";
import { findSensibleFiles } from "fs-util";
import { getExtension } from "fs-util";
import { getFileName } from "fs-util";
import { getFolder } from "fs-util";
import { getLastFolder } from "fs-util";
import { getPathCombinations } from "fs-util";
import { getSubExtension } from "fs-util";
import { importFromFiles } from "fs-util";
import { isArrayGuard } from "fs-util";
import { parseMd } from "fs-util";
import { removeAllExcept } from "fs-util";
import { removeTrailingSlash } from "fs-util";
import { withoutExtension } from "fs-util";
import { writeJsonToFile } from "fs-util";
import { writeStringToFile } from "fs-util";
import { writeToFiles } from "fs-util";
import { findFolderWhereMatch } from "get-path";
import { findOperationBasePathWithClassification } from "get-path";
import { findOperationBasePath } from "get-path";
import { getAllPackageJsonDependencies } from "get-path";
import { getOperationClassification } from "get-path";
import { getOperationPathParse } from "get-path";
import { getOperationPath } from "get-path";
import { getOperationRelativePath } from "get-path";
import { getPathParse } from "get-path";
import { getPathsWithOperations } from "get-path";
import { getProjectRoot } from "get-path";
import { getRelativePath } from "get-path";
import { getRootPath } from "get-path";
import { getSrcRelativeFileId } from "get-path";
import { hasDependency } from "get-path";
import { isSensibleProject } from "get-path";
import { isWorkspaceRoot } from "get-path";
import { makeRelative } from "get-path";
import { getTsConfig } from "get-ts-config";
import { apply } from "js-util";
import { createEnum } from "js-util";
import { findLastIndex } from "js-util";
import { getObjectFromParamsString } from "js-util";
import { getObjectKeysArray } from "js-util";
import { getSubsetFromObject } from "js-util";
import { groupByKey } from "js-util";
import { insertAt } from "js-util";
import { isAllTrue } from "js-util";
import { makeArray } from "js-util";
import { mapAsync } from "js-util";
import { mapKeys } from "js-util";
import { mapMany } from "js-util";
import { mapValuesSync } from "js-util";
import { mergeObjectParameters } from "js-util";
import { mergeObjectsArray } from "js-util";
import { mergeObjects } from "js-util";
import { notEmpty } from "js-util";
import { objectMapAsync } from "js-util";
import { objectMapSync } from "js-util";
import { objectValuesMap } from "js-util";
import { onlyUnique2 } from "js-util";
import { onlyUnique } from "js-util";
import { removeIndexFromArray } from "js-util";
import { replaceLastOccurence } from "js-util";
import { reverseString } from "js-util";
import { sumAllKeys } from "js-util";
import { sumObjectParameters } from "js-util";
import { sum } from "js-util";
import { takeFirst } from "js-util";
import { getSimpleJsonString } from "json-util";
import { flattenMarkdownChunks } from "key-value-markdown-js";
import { getKvmdItemsRecursively } from "key-value-markdown-js";
import { getParagraphsRecursively } from "key-value-markdown-js";
import { kvmdDataMap } from "key-value-markdown-js";
import { kvmdDataToString } from "key-value-markdown-js";
import { kvmdParseToMarkdownString } from "key-value-markdown-js";
import { markdownStringToKvmdParse } from "key-value-markdown-js";
import { parseKvmdLine } from "key-value-markdown-js";
import { getCallerFileName } from "log";
import { log } from "log";
import { parseTitle } from "log";
import { makeFileType } from "make-file-type";
import { isResultOfInterface } from "make-test";
import { makeTest } from "make-test";
import { markdownParseToMarkdownString } from "markdown-parse-js";
import { mdContentParseRecursively } from "markdown-parse-js";
import { mdToJsonParse } from "markdown-parse-js";
import { parseFrontmatterMarkdownString } from "markdown-parse-js";
import { parseMdToChunks } from "markdown-parse-js";
import { removeHeaderPrefix } from "markdown-parse-js";
import { frontmatterParseToString } from "matter-types";
import { getFrontmatterValueString } from "matter-types";
import { quotedOrNot } from "matter-types";
import { stringifyNewlines } from "matter-types";
import { getParameterContentType } from "name-conventions";
import { isCalculatedParameter } from "name-conventions";
import { isGeneratedParameterName } from "name-conventions";
import { ALink } from "next-a-link";
import { oneByOne } from "one-by-one";
import { getDependenciesSummary } from "operation-util";
import { getOperationMetaData } from "operation-util";
import { recalculateOperationIndexJson } from "operation-util";
import { writeKeyToOperationIndexJson } from "operation-util";
import { parsePrimitive } from "parse-primitive";
import { byteCount } from "path-util";
import { calculatePathMetaData } from "path-util";
import { categorizeFiles } from "path-util";
import { getFolderSummary } from "path-util";
import { getPathMainComment } from "path-util";
import { sumSizeSummary } from "path-util";
import { isPlural } from "pluralize";
import { isSingular } from "pluralize";
import { pluralize } from "pluralize";
import { singularize } from "pluralize";
import { runChildProcess } from "run-child-process";
import { getPossibleReferenceParameterNames } from "schema-util";
import { getProperties } from "schema-util";
import { getRefLink } from "schema-util";
import { getReferencableModels } from "schema-util";
import { getReferenceParameterInfo } from "schema-util";
import { getSchemaItems } from "schema-util";
import { getSchema } from "schema-util";
import { simplifiedSchemaToTypeDefinitionString } from "schema-util";
import { simplifySchema } from "schema-util";
import { findSentenceMatches } from "search";
import { searchRecursiveObjectArray } from "search";

export const sdk = { markdownParseToMarkdownModelType,
parseMarkdownModelTimestamp,
tryParseDate,
getCompileErrors,
getTypescriptErrorsFromFiles,
writeBuildErrors,
generateId,
generatePassword,
generateRandomString,
generateTime,
isEmail,
markdownModelTypeToMarkdownString,
stripCommentEnd,
stripCommentStart,
stripComment,
stripSlashes,
stripStar,
trim,
camelCase,
capitalCase,
capitaliseFirstLetter,
convertCase,
getDelimiter,
humanCase,
kebabCase,
lowerCaseArray,
pascalCase,
slugify,
snakeCase,
hasSubExtension,
isGeneratedOperationName,
isGeneratedOperation,
isIndexableFileId,
canAccessSync,
canAccess,
canExecuteSync,
canExecute,
canReadSync,
canRead,
canSeeSync,
canSee,
canWriteSync,
canWrite,
findAllMd,
findFileNameCaseInsensitive,
findFilesRecursively,
findSensibleFiles,
getExtension,
getFileName,
getFolder,
getLastFolder,
getPathCombinations,
getSubExtension,
importFromFiles,
isArrayGuard,
parseMd,
removeAllExcept,
removeTrailingSlash,
withoutExtension,
writeJsonToFile,
writeStringToFile,
writeToFiles,
findFolderWhereMatch,
findOperationBasePathWithClassification,
findOperationBasePath,
getAllPackageJsonDependencies,
getOperationClassification,
getOperationPathParse,
getOperationPath,
getOperationRelativePath,
getPathParse,
getPathsWithOperations,
getProjectRoot,
getRelativePath,
getRootPath,
getSrcRelativeFileId,
hasDependency,
isSensibleProject,
isWorkspaceRoot,
makeRelative,
getTsConfig,
apply,
createEnum,
findLastIndex,
getObjectFromParamsString,
getObjectKeysArray,
getSubsetFromObject,
groupByKey,
insertAt,
isAllTrue,
makeArray,
mapAsync,
mapKeys,
mapMany,
mapValuesSync,
mergeObjectParameters,
mergeObjectsArray,
mergeObjects,
notEmpty,
objectMapAsync,
objectMapSync,
objectValuesMap,
onlyUnique2,
onlyUnique,
removeIndexFromArray,
replaceLastOccurence,
reverseString,
sumAllKeys,
sumObjectParameters,
sum,
takeFirst,
getSimpleJsonString,
flattenMarkdownChunks,
getKvmdItemsRecursively,
getParagraphsRecursively,
kvmdDataMap,
kvmdDataToString,
kvmdParseToMarkdownString,
markdownStringToKvmdParse,
parseKvmdLine,
getCallerFileName,
log,
parseTitle,
makeFileType,
isResultOfInterface,
makeTest,
markdownParseToMarkdownString,
mdContentParseRecursively,
mdToJsonParse,
parseFrontmatterMarkdownString,
parseMdToChunks,
removeHeaderPrefix,
frontmatterParseToString,
getFrontmatterValueString,
quotedOrNot,
stringifyNewlines,
getParameterContentType,
isCalculatedParameter,
isGeneratedParameterName,
ALink,
oneByOne,
getDependenciesSummary,
getOperationMetaData,
recalculateOperationIndexJson,
writeKeyToOperationIndexJson,
parsePrimitive,
byteCount,
calculatePathMetaData,
categorizeFiles,
getFolderSummary,
getPathMainComment,
sumSizeSummary,
isPlural,
isSingular,
pluralize,
singularize,
runChildProcess,
getPossibleReferenceParameterNames,
getProperties,
getRefLink,
getReferencableModels,
getReferenceParameterInfo,
getSchemaItems,
getSchema,
simplifiedSchemaToTypeDefinitionString,
simplifySchema,
findSentenceMatches,
searchRecursiveObjectArray};

export type SdkType = typeof sdk;