import { getGetApiUrl } from "api";
import { untypedApiFunction } from "api";
import { addToken } from "asset-functions-js";
import { ensureToken } from "asset-functions-js";
import { findAssetParametersRecursively } from "asset-functions-js";
import { getConversionInfoFromType } from "asset-functions-js";
import { getExtensionFromAsset } from "asset-functions-js";
import { getNameFromRelativePath } from "asset-functions-js";
import { getNameWithTokenFromRelativePath } from "asset-functions-js";
import { getReferencedAssetApiUrl } from "asset-functions-js";
import { getTypeFromUrlOrPath } from "asset-functions-js";
import { readableSize } from "asset-functions-js";
import { removeTokenIfPresent } from "asset-functions-js";
import { BreadCrumbs } from "breadcrumbs";
import { renderBreadCrumbs } from "breadcrumbs";
import { ClickableIcon } from "clickable-icon";
import { getFunctionExersize } from "code-types";
import { stripCommentEnd } from "comment-util";
import { stripCommentStart } from "comment-util";
import { stripComment } from "comment-util";
import { stripSlashes } from "comment-util";
import { stripStar } from "comment-util";
import { trim } from "comment-util";
import { getCompileErrors } from "compile-typescript";
import { getTypescriptErrorsFromFiles } from "compile-typescript";
import { writeBuildErrors } from "compile-typescript";
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
import { errorToast } from "cool-toast";
import { infoToast } from "cool-toast";
import { showStandardResponse } from "cool-toast";
import { successToast } from "cool-toast";
import { warningToast } from "cool-toast";
import { FancyLoader } from "fancy-loader";
import { getFileType } from "file-icons";
import { MatchingText } from "file-search";
import { PathSearchResults } from "file-search";
import { getFileTypeFromPath } from "filename-conventions";
import { getWriterType } from "filename-conventions";
import { hasSubExtension } from "filename-conventions";
import { isGeneratedOperationName } from "filename-conventions";
import { isGeneratedOperation } from "filename-conventions";
import { isIndexableFileId } from "filename-conventions";
import { frontmatterParseToString } from "frontmatter-util";
import { frontmatterToObject } from "frontmatter-util";
import { getFrontmatterValueString } from "frontmatter-util";
import { markdownModelTypeToMarkdownString } from "frontmatter-util";
import { objectToFrontmatter } from "frontmatter-util";
import { parseFrontmatterString } from "frontmatter-util";
import { quotedOrNot } from "frontmatter-util";
import { stringifyNewlines } from "frontmatter-util";
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
import { copyAllRelativeFiles } from "fs-util";
import { findFileNameCaseInsensitive } from "fs-util";
import { getAllFoldersUntilFolder } from "fs-util";
import { getFileName } from "fs-util";
import { getFirstAvailableFilename } from "fs-util";
import { getFolderSizeObject } from "fs-util";
import { getFolder } from "fs-util";
import { getLastFolder } from "fs-util";
import { getOneFolderUpPath } from "fs-util";
import { getPathCombinations } from "fs-util";
import { oneUp } from "fs-util";
import { parseMd } from "fs-util";
import { removeAllExcept } from "fs-util";
import { renameAndCreate } from "fs-util";
import { writeJsonToFile } from "fs-util";
import { writeStringToFile } from "fs-util";
import { writeToFiles } from "fs-util";
import { converse } from "function-util";
import { executeSdkFunction } from "function-util";
import { getCachedExportedFunctions } from "function-util";
import { getMenu } from "function-util";
import { getSdkFunctionPaths } from "function-util";
import { findFolderWhereMatch } from "get-path";
import { findOperationBasePathWithClassification } from "get-path";
import { findOperationBasePath } from "get-path";
import { getAllPackageJsonDependencies } from "get-path";
import { getCommonAncestor } from "get-path";
import { getOperationClassificationObject } from "get-path";
import { getOperationClassification } from "get-path";
import { getOperationPathParse } from "get-path";
import { getOperationPath } from "get-path";
import { getOperationRelativePath } from "get-path";
import { getPathParse } from "get-path";
import { getPathsWithOperations } from "get-path";
import { getProjectRoot } from "get-path";
import { getRelativeLinkPath } from "get-path";
import { getRelativePath } from "get-path";
import { getRootPath } from "get-path";
import { getSrcRelativeFileId } from "get-path";
import { hasDependency } from "get-path";
import { isBundle } from "get-path";
import { isOperation } from "get-path";
import { isUiOperation } from "get-path";
import { isWorkspaceRoot } from "get-path";
import { packageCompilesTs } from "get-path";
import { tsconfigCompilesEsm } from "get-path";
import { getTsConfig } from "get-ts-config";
import { apply } from "js-util";
import { createEnum } from "js-util";
import { createMappedObject } from "js-util";
import { destructureOptionalObject } from "js-util";
import { findLastIndex } from "js-util";
import { getObjectFromParamsString } from "js-util";
import { getObjectKeysArray } from "js-util";
import { getParameterAtLocation } from "js-util";
import { getSubsetFromObject } from "js-util";
import { groupByKey } from "js-util";
import { hasAllLetters } from "js-util";
import { insertAt } from "js-util";
import { isAllTrue } from "js-util";
import { isArrayEqual } from "js-util";
import { makeArray } from "js-util";
import { mapAsync } from "js-util";
import { mapKeys } from "js-util";
import { mapMany } from "js-util";
import { mapValuesSync } from "js-util";
import { mergeNestedObject } from "js-util";
import { mergeObjectParameters } from "js-util";
import { mergeObjectsArray } from "js-util";
import { mergeObjects } from "js-util";
import { noEmptyString } from "js-util";
import { notEmpty } from "js-util";
import { objectMapAsync } from "js-util";
import { objectMapSync } from "js-util";
import { objectValuesMap } from "js-util";
import { omitUndefinedValues } from "js-util";
import { onlyUnique2 } from "js-util";
import { onlyUnique } from "js-util";
import { pickRandomArrayItem } from "js-util";
import { putIndexAtIndex } from "js-util";
import { removeIndexFromArray } from "js-util";
import { removeOptionalKeysFromObjectStrings } from "js-util";
import { removeOptionalKeysFromObject } from "js-util";
import { replaceLastOccurence } from "js-util";
import { reverseString } from "js-util";
import { sumAllKeys } from "js-util";
import { sumObjectParameters } from "js-util";
import { sum } from "js-util";
import { takeFirst } from "js-util";
import { trimSlashes } from "js-util";
import { getSimpleJsonString } from "json-util";
import { flattenMarkdownChunks } from "key-value-markdown-js";
import { getKvmdItemsRecursively } from "key-value-markdown-js";
import { getParagraphsRecursively } from "key-value-markdown-js";
import { kvmdDataMap } from "key-value-markdown-js";
import { kvmdDataToString } from "key-value-markdown-js";
import { kvmdParseToMarkdownString } from "key-value-markdown-js";
import { markdownStringToKvmdParse } from "key-value-markdown-js";
import { parseKvmdLine } from "key-value-markdown-js";
import { LabeledButton } from "labeled-button";
import { getCallerFileName } from "log";
import { log } from "log";
import { parseTitle } from "log";
import { makeFileType } from "make-file-type";
import { isResultOfInterface } from "make-test";
import { makeTest } from "make-test";
import { chunkToStringRecursively } from "markdown-parse-js";
import { getChunkParagraphsRecursively } from "markdown-parse-js";
import { getImplicitId } from "markdown-parse-js";
import { getMarkdownIntro } from "markdown-parse-js";
import { getMarkdownParseParagraphs } from "markdown-parse-js";
import { getMarkdownReferencePaths } from "markdown-parse-js";
import { getMarkdownReferencesFromParagraph } from "markdown-parse-js";
import { markdownParseToMarkdownStringFromContent } from "markdown-parse-js";
import { markdownParseToMarkdownString } from "markdown-parse-js";
import { mdContentParseRecursively } from "markdown-parse-js";
import { mdToJsonParse } from "markdown-parse-js";
import { parseFrontmatterMarkdownString } from "markdown-parse-js";
import { parseMarkdownParagraph } from "markdown-parse-js";
import { parseMdToChunks } from "markdown-parse-js";
import { removeHeaderPrefix } from "markdown-parse-js";
import { markdownParseToMarkdownModelType } from "markdown-types";
import { parseMarkdownModelTimestamp } from "markdown-types";
import { tryParseDate } from "markdown-types";
import { findCodespans } from "marked-util";
import { findEmbeds } from "marked-util";
import { findLinks } from "marked-util";
import { flattenMarkdownString } from "marked-util";
import { flattenMarkedTokenRecursive } from "marked-util";
import { cleanupTimer } from "measure-performance";
import { generateUniqueId } from "measure-performance";
import { getNewPerformance } from "measure-performance";
import { generateId } from "model-types";
import { generatePassword } from "model-types";
import { generateRandomString } from "model-types";
import { generateTime } from "model-types";
import { isEmail } from "model-types";
import { getAssetInputType } from "name-conventions";
import { getParameterContentType } from "name-conventions";
import { isCalculatedParameter } from "name-conventions";
import { isGeneratedParameterName } from "name-conventions";
import { getFullPath } from "next-paths";
import { getLastPathsChunk } from "next-paths";
import { usePath } from "next-paths";
import { oneByOne } from "one-by-one";
import { getDependenciesSummary } from "operation-util";
import { getOperationMetaData } from "operation-util";
import { recalculateOperationIndexJson } from "operation-util";
import { parsePrimitiveArray } from "parse-primitive";
import { parsePrimitiveBoolean } from "parse-primitive";
import { parsePrimitiveString } from "parse-primitive";
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
import { clickOnSpanTag } from "puppeteer-utils";
import { delay } from "puppeteer-utils";
import { facebookLogin } from "puppeteer-utils";
import { foundOrNotXpath } from "puppeteer-utils";
import { foundOrNot } from "puppeteer-utils";
import { getBrowserPageById } from "puppeteer-utils";
import { getBrowserTabs } from "puppeteer-utils";
import { getChromeExecutablePath } from "puppeteer-utils";
import { getConnectedBrowsers } from "puppeteer-utils";
import { getIdlePage } from "puppeteer-utils";
import { getNewPage } from "puppeteer-utils";
import { gmailLogin } from "puppeteer-utils";
import { isCaptchaExist } from "puppeteer-utils";
import { logConsoleIfDebug } from "puppeteer-utils";
import { openMultiTabs } from "puppeteer-utils";
import { openNewBrowserOnChildProcess } from "puppeteer-utils";
import { openNewBrowser } from "puppeteer-utils";
import { openPage } from "puppeteer-utils";
import { racePromises } from "puppeteer-utils";
import { retryClickAndWaitSelector } from "puppeteer-utils";
import { retryWaitSelector } from "puppeteer-utils";
import { setBrowserPageIdle } from "puppeteer-utils";
import { setInnerHtml } from "puppeteer-utils";
import { setInputValue } from "puppeteer-utils";
import { solveReptcha } from "puppeteer-utils";
import { trueClick } from "puppeteer-utils";
import { twitterLogin } from "puppeteer-utils";
import { typeInTheInputField } from "puppeteer-utils";
import { typeOnTheTargetWithXpathSelector } from "puppeteer-utils";
import { waitMilliseconds } from "puppeteer-utils";
import { getKeysAtPathFromNestedObject } from "recursive-util";
import { getMenuPagesObject } from "recursive-util";
import { makeNestedObjectFromQueryPathObject } from "recursive-util";
import { mapChildObjectRecursive } from "recursive-util";
import { nestedObjectToChildObject } from "recursive-util";
import { nestedPathObjectToNestedMenuRecursive } from "recursive-util";
import { nestifyQueryPathObjectRecursive } from "recursive-util";
import { queryPathsArrayToNestedPathObject } from "recursive-util";
import { reduceQueryPathsRecursively } from "recursive-util";
import { bodyFromQueryString } from "rest-util";
import { getFirstQueryStrings } from "rest-util";
import { getQueryPart } from "rest-util";
import { isValidEntry } from "rest-util";
import { toQueryString } from "rest-util";
import { runChildProcess } from "run-child-process";
import { findFirstCommentTypes } from "schema-util";
import { getDataParameterNames } from "schema-util";
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
import { objectStringToJson } from "string-to-json";
import { parseIfJson } from "string-to-json";
import { parsePrimitiveJson } from "string-to-json";
import { stringToJson } from "string-to-json";
import { Tabs } from "tabs";
import { getEncoding } from "text-or-binary";
import { isBinary } from "text-or-binary";
import { isText } from "text-or-binary";
import { tryParseJson } from "try-parse-json";
import { createCodeblockMarkdown } from "ui-util";
import { useCustomUrlStore } from "use-url-store";
import { crudPageToWebPages } from "webpage-types";
import { functionFormPageToWebPage } from "webpage-types";

export const sdk = { getGetApiUrl,
untypedApiFunction,
addToken,
ensureToken,
findAssetParametersRecursively,
getConversionInfoFromType,
getExtensionFromAsset,
getNameFromRelativePath,
getNameWithTokenFromRelativePath,
getReferencedAssetApiUrl,
getTypeFromUrlOrPath,
readableSize,
removeTokenIfPresent,
BreadCrumbs,
renderBreadCrumbs,
ClickableIcon,
getFunctionExersize,
stripCommentEnd,
stripCommentStart,
stripComment,
stripSlashes,
stripStar,
trim,
getCompileErrors,
getTypescriptErrorsFromFiles,
writeBuildErrors,
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
errorToast,
infoToast,
showStandardResponse,
successToast,
warningToast,
FancyLoader,
getFileType,
MatchingText,
PathSearchResults,
getFileTypeFromPath,
getWriterType,
hasSubExtension,
isGeneratedOperationName,
isGeneratedOperation,
isIndexableFileId,
frontmatterParseToString,
frontmatterToObject,
getFrontmatterValueString,
markdownModelTypeToMarkdownString,
objectToFrontmatter,
parseFrontmatterString,
quotedOrNot,
stringifyNewlines,
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
copyAllRelativeFiles,
findFileNameCaseInsensitive,
getAllFoldersUntilFolder,
getFileName,
getFirstAvailableFilename,
getFolderSizeObject,
getFolder,
getLastFolder,
getOneFolderUpPath,
getPathCombinations,
oneUp,
parseMd,
removeAllExcept,
renameAndCreate,
writeJsonToFile,
writeStringToFile,
writeToFiles,
converse,
executeSdkFunction,
getCachedExportedFunctions,
getMenu,
getSdkFunctionPaths,
findFolderWhereMatch,
findOperationBasePathWithClassification,
findOperationBasePath,
getAllPackageJsonDependencies,
getCommonAncestor,
getOperationClassificationObject,
getOperationClassification,
getOperationPathParse,
getOperationPath,
getOperationRelativePath,
getPathParse,
getPathsWithOperations,
getProjectRoot,
getRelativeLinkPath,
getRelativePath,
getRootPath,
getSrcRelativeFileId,
hasDependency,
isBundle,
isOperation,
isUiOperation,
isWorkspaceRoot,
packageCompilesTs,
tsconfigCompilesEsm,
getTsConfig,
apply,
createEnum,
createMappedObject,
destructureOptionalObject,
findLastIndex,
getObjectFromParamsString,
getObjectKeysArray,
getParameterAtLocation,
getSubsetFromObject,
groupByKey,
hasAllLetters,
insertAt,
isAllTrue,
isArrayEqual,
makeArray,
mapAsync,
mapKeys,
mapMany,
mapValuesSync,
mergeNestedObject,
mergeObjectParameters,
mergeObjectsArray,
mergeObjects,
noEmptyString,
notEmpty,
objectMapAsync,
objectMapSync,
objectValuesMap,
omitUndefinedValues,
onlyUnique2,
onlyUnique,
pickRandomArrayItem,
putIndexAtIndex,
removeIndexFromArray,
removeOptionalKeysFromObjectStrings,
removeOptionalKeysFromObject,
replaceLastOccurence,
reverseString,
sumAllKeys,
sumObjectParameters,
sum,
takeFirst,
trimSlashes,
getSimpleJsonString,
flattenMarkdownChunks,
getKvmdItemsRecursively,
getParagraphsRecursively,
kvmdDataMap,
kvmdDataToString,
kvmdParseToMarkdownString,
markdownStringToKvmdParse,
parseKvmdLine,
LabeledButton,
getCallerFileName,
log,
parseTitle,
makeFileType,
isResultOfInterface,
makeTest,
chunkToStringRecursively,
getChunkParagraphsRecursively,
getImplicitId,
getMarkdownIntro,
getMarkdownParseParagraphs,
getMarkdownReferencePaths,
getMarkdownReferencesFromParagraph,
markdownParseToMarkdownStringFromContent,
markdownParseToMarkdownString,
mdContentParseRecursively,
mdToJsonParse,
parseFrontmatterMarkdownString,
parseMarkdownParagraph,
parseMdToChunks,
removeHeaderPrefix,
markdownParseToMarkdownModelType,
parseMarkdownModelTimestamp,
tryParseDate,
findCodespans,
findEmbeds,
findLinks,
flattenMarkdownString,
flattenMarkedTokenRecursive,
cleanupTimer,
generateUniqueId,
getNewPerformance,
generateId,
generatePassword,
generateRandomString,
generateTime,
isEmail,
getAssetInputType,
getParameterContentType,
isCalculatedParameter,
isGeneratedParameterName,
getFullPath,
getLastPathsChunk,
usePath,
oneByOne,
getDependenciesSummary,
getOperationMetaData,
recalculateOperationIndexJson,
parsePrimitiveArray,
parsePrimitiveBoolean,
parsePrimitiveString,
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
clickOnSpanTag,
delay,
facebookLogin,
foundOrNotXpath,
foundOrNot,
getBrowserPageById,
getBrowserTabs,
getChromeExecutablePath,
getConnectedBrowsers,
getIdlePage,
getNewPage,
gmailLogin,
isCaptchaExist,
logConsoleIfDebug,
openMultiTabs,
openNewBrowserOnChildProcess,
openNewBrowser,
openPage,
racePromises,
retryClickAndWaitSelector,
retryWaitSelector,
setBrowserPageIdle,
setInnerHtml,
setInputValue,
solveReptcha,
trueClick,
twitterLogin,
typeInTheInputField,
typeOnTheTargetWithXpathSelector,
waitMilliseconds,
getKeysAtPathFromNestedObject,
getMenuPagesObject,
makeNestedObjectFromQueryPathObject,
mapChildObjectRecursive,
nestedObjectToChildObject,
nestedPathObjectToNestedMenuRecursive,
nestifyQueryPathObjectRecursive,
queryPathsArrayToNestedPathObject,
reduceQueryPathsRecursively,
bodyFromQueryString,
getFirstQueryStrings,
getQueryPart,
isValidEntry,
toQueryString,
runChildProcess,
findFirstCommentTypes,
getDataParameterNames,
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
searchRecursiveObjectArray,
objectStringToJson,
parseIfJson,
parsePrimitiveJson,
stringToJson,
Tabs,
getEncoding,
isBinary,
isText,
tryParseJson,
createCodeblockMarkdown,
useCustomUrlStore,
crudPageToWebPages,
functionFormPageToWebPage};

export type SdkType = typeof sdk;