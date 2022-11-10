import { addToken } from "asset-functions-js";
import { ensureToken } from "asset-functions-js";
import { getAssetDirectlyApiUrl } from "asset-functions-js";
import { getExtensionFromAsset } from "asset-functions-js";
import { getNameFromRelativePath } from "asset-functions-js";
import { getNameWithTokenFromRelativePath } from "asset-functions-js";
import { getPreferredExtensionFromType } from "asset-functions-js";
import { getReferencedAssetApiUrl } from "asset-functions-js";
import { getTypeFromRelativePath } from "asset-functions-js";
import { readableSize } from "asset-functions-js";
import { removeTokenIfPresent } from "asset-functions-js";
import { AssetInput } from "asset-input";
import { FileInput } from "asset-input";
import { getTypeFromFileBlob } from "asset-input";
import { makeBackendAsset } from "asset-input";
import { MediaRecorderComponent } from "asset-input";
import { MediaRecorder } from "asset-input";
import { ReactMediaRecorder } from "asset-input";
import { SelectMedia } from "asset-input";
import { useReactMediaRecorder } from "asset-input";
import { WebcamCapture } from "asset-input";
import { AssetView } from "asset-view";
import { InteractiveAsset } from "asset-view";
import { getEncoding } from "text-or-binary";
import { isBinary } from "text-or-binary";
import { isText } from "text-or-binary";
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
import { findAllMd } from "fs-util";
import { findFileNameCaseInsensitive } from "fs-util";
import { findFilesRecursively } from "fs-util";
import { findSensibleFiles } from "fs-util";
import { getAllFoldersUntilFolder } from "fs-util";
import { getFileName } from "fs-util";
import { getFirstAvailableFilename } from "fs-util";
import { getFolder } from "fs-util";
import { getLastFolder } from "fs-util";
import { getOneFolderUpPath } from "fs-util";
import { getPathCombinations } from "fs-util";
import { importFromFiles } from "fs-util";
import { isArrayGuard } from "fs-util";
import { oneUp } from "fs-util";
import { parseMd } from "fs-util";
import { removeAllExcept } from "fs-util";
import { renameAndCreate } from "fs-util";
import { writeJsonToFile } from "fs-util";
import { writeStringToFile } from "fs-util";
import { writeToFiles } from "fs-util";
import { getTsConfig } from "get-ts-config";
import { byteCount } from "path-util";
import { calculatePathMetaData } from "path-util";
import { categorizeFiles } from "path-util";
import { getFolderSummary } from "path-util";
import { getPathMainComment } from "path-util";
import { getSizeSummary } from "path-util";
import { sumSizeSummary } from "path-util";
import { makeFileType } from "make-file-type";
import { findFolderWhereMatch } from "get-path";
import { findOperationBasePathWithClassification } from "get-path";
import { findOperationBasePath } from "get-path";
import { getAllPackageJsonDependencies } from "get-path";
import { getCommonAncestor } from "get-path";
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
import { isOperation } from "get-path";
import { isSensibleProject } from "get-path";
import { isWorkspaceRoot } from "get-path";
import { makeRelative } from "get-path";
import { getDependenciesSummary } from "operation-util";
import { getOperationMetaData } from "operation-util";
import { recalculateOperationIndexJson } from "operation-util";
import { writeKeyToOperationIndexJson } from "operation-util";
import { getWriterType } from "filename-conventions";
import { hasSubExtension } from "filename-conventions";
import { isGeneratedOperationName } from "filename-conventions";
import { isGeneratedOperation } from "filename-conventions";
import { isIndexableFileId } from "filename-conventions";
import { getAssetInputType } from "name-conventions";
import { getParameterContentType } from "name-conventions";
import { isCalculatedParameter } from "name-conventions";
import { isGeneratedParameterName } from "name-conventions";
import { executeCommand } from "sensible";
import { getCommand } from "sensible";
import { getPlatformId } from "sensible";
import { isCommandPerOs } from "sensible";
import { log } from "sensible";
import { makeApi } from "sensible-core";
import { getGetApiUrl } from "api";
import { untypedApiFunction } from "api";
import { makeArraysGetEndpoint } from "endpoint-util";
import { makeGetEndpoint } from "endpoint-util";
import { objectStringToJson } from "string-to-json";
import { parseIfJson } from "string-to-json";
import { parsePrimitiveJson } from "string-to-json";
import { stringToJson } from "string-to-json";
import { FunctionForm } from "function-form";
import { BigButton } from "big-button";
import { ClickableIcon } from "clickable-icon";
import { FancyLoader } from "fancy-loader";
import { LabeledButton } from "labeled-button";
import { checkAuthToken } from "login-form";
import { LoginForm } from "login-form";
import { LoginWrapper } from "login-form";
import { logoutFrontend } from "login-form";
import { Spoiler } from "spoiler";
import { createCodeblockMarkdown } from "ui-util";
import { useCustomUrlStore } from "use-url-store";
import { jsonToMdString } from "json-to-md";
import { jsonToSayString } from "json-to-say-string";
import { getSimpleJsonString } from "json-util";
import { flattenMarkdownChunks } from "key-value-markdown-js";
import { getKvmdItemsRecursively } from "key-value-markdown-js";
import { getParagraphsRecursively } from "key-value-markdown-js";
import { kvmdDataMap } from "key-value-markdown-js";
import { kvmdDataToString } from "key-value-markdown-js";
import { kvmdParseToMarkdownString } from "key-value-markdown-js";
import { markdownStringToKvmdParse } from "key-value-markdown-js";
import { parseKvmdLine } from "key-value-markdown-js";
import { getChunkParagraphsRecursively } from "markdown-parse-js";
import { getImplicitId } from "markdown-parse-js";
import { getMarkdownIntro } from "markdown-parse-js";
import { getMarkdownParseParagraphs } from "markdown-parse-js";
import { getMarkdownReferencePaths } from "markdown-parse-js";
import { getMarkdownReferencesFromParagraph } from "markdown-parse-js";
import { markdownParseToMarkdownString } from "markdown-parse-js";
import { mdContentParseRecursively } from "markdown-parse-js";
import { mdToJsonParse } from "markdown-parse-js";
import { parseFrontmatterMarkdownString } from "markdown-parse-js";
import { parseMarkdownParagraph } from "markdown-parse-js";
import { parseMdToChunks } from "markdown-parse-js";
import { removeHeaderPrefix } from "markdown-parse-js";
import { parsePrimitiveArray } from "parse-primitive";
import { parsePrimitiveBoolean } from "parse-primitive";
import { parsePrimitiveString } from "parse-primitive";
import { parsePrimitive } from "parse-primitive";
import { tryParseJson } from "try-parse-json";
import { bodyFromQueryString } from "rest-util";
import { getFirstQueryStrings } from "rest-util";
import { getQueryPart } from "rest-util";
import { toQueryString } from "rest-util";
import { findSentenceMatches } from "search";
import { searchRecursiveObjectArray } from "search";
import { findPostableToPost } from "social-media-types";
import { updatePostedStatistics } from "social-media-types";
import { getFunctionExersize } from "code-types";
import { markdownParseToMarkdownModelType } from "code-types";
import { parseMarkdownModelTimestamp } from "code-types";
import { tryParseDate } from "code-types";
import { createInvoiceContactMarkdown } from "invoice-types";
import { createInvoiceMarkdown } from "invoice-types";
import { createKeyValueMarkdown } from "invoice-types";
import { money } from "invoice-types";
import { newInvoice } from "invoice-types";
import { printDate } from "invoice-types";
import { frontmatterParseToString } from "matter-types";
import { getFrontmatterValueString } from "matter-types";
import { quotedOrNot } from "matter-types";
import { stringifyNewlines } from "matter-types";
import { generateId } from "model-types";
import { generatePassword } from "model-types";
import { generateRandomString } from "model-types";
import { generateTime } from "model-types";
import { markdownModelTypeToMarkdownString } from "model-types";
import { createUser } from "os-types";
import { getBacktickContents } from "os-types";
import { isInPeriod } from "os-types";
import { isOutOfStock } from "os-types";
import { kvmdToCredential } from "os-types";
import { upcomingOutgoingFlights } from "os-types";
import { whereShouldIgo } from "os-types";
import { stripCommentEnd } from "comment-util";
import { stripCommentStart } from "comment-util";
import { stripComment } from "comment-util";
import { stripSlashes } from "comment-util";
import { stripStar } from "comment-util";
import { trim } from "comment-util";
import { getCompileErrors } from "compile-typescript";
import { getTypescriptErrorsFromFiles } from "compile-typescript";
import { writeBuildErrors } from "compile-typescript";
import { findFirstCommentTypes } from "schema-util";
import { getPossibleReferenceParameterNames } from "schema-util";
import { getProperties } from "schema-util";
import { getReferencableModels } from "schema-util";
import { getReferenceParameterInfo } from "schema-util";
import { simplifiedSchemaToTypeDefinitionString } from "schema-util";
import { simplifySchema } from "schema-util";
import { isResultOfInterface } from "make-test";
import { makeTest } from "make-test";
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
import { apply } from "js-util";
import { createEnum } from "js-util";
import { createMappedObject } from "js-util";
import { findLastIndex } from "js-util";
import { getObjectFromParamsString } from "js-util";
import { getObjectKeysArray } from "js-util";
import { getParameterAtLocation } from "js-util";
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
import { objectMapAsync } from "js-util";
import { objectMapSync } from "js-util";
import { objectValuesMap } from "js-util";
import { omitUndefinedValues } from "js-util";
import { onlyUnique2 } from "js-util";
import { onlyUnique } from "js-util";
import { removeIndexFromArray } from "js-util";
import { replaceLastOccurence } from "js-util";
import { reverseString } from "js-util";
import { sumAllKeys } from "js-util";
import { sumObjectParameters } from "js-util";
import { sum } from "js-util";
import { takeFirst } from "js-util";
import { trimSlashes } from "js-util";
import { getCallerFileName } from "log";
import { parseTitle } from "log";
import { oneByOne } from "one-by-one";
import { isPlural } from "pluralize";
import { isSingular } from "pluralize";
import { pluralize } from "pluralize";
import { singularize } from "pluralize";
import { runChildProcess } from "run-child-process";
import { clickOnSpanTag } from "dt-utils";
import { facebookLogin } from "dt-utils";
import { foundOrNotXpath } from "dt-utils";
import { foundOrNot } from "dt-utils";
import { getChromeExecutablePath } from "dt-utils";
import { gmailLogin } from "dt-utils";
import { logConsoleIfDebug } from "dt-utils";
import { retryClickAndWaitSelector } from "dt-utils";
import { retryWaitSelector } from "dt-utils";
import { setInnerHtml } from "dt-utils";
import { setInputValue } from "dt-utils";
import { trueClick } from "dt-utils";
import { twitterLogin } from "dt-utils";
import { typeInTheInputField } from "dt-utils";
import { typeOnTheTargetWithXpathSelector } from "dt-utils";
import { waitMilliseconds } from "dt-utils";
import { getFileType } from "file-icons";
import { MatchingText } from "file-search";
import { PathSearchResults } from "file-search";
import { FileTabs } from "file-tabs";
import { getOpenPageUrl } from "file-tabs";
import { renderIcon } from "file-tabs";
import { FileWriter } from "file-writer";
import { OpenFileWriterPages } from "file-writer";
import { isAltB } from "hotkeys";
import { isAltN } from "hotkeys";
import { isAltO } from "hotkeys";
import { isAltW } from "hotkeys";
import { isCtrlBacktick } from "hotkeys";
import { isCtrlP } from "hotkeys";
import { isCtrlS } from "hotkeys";
import { isCtrlSpace } from "hotkeys";
import { useHotkey } from "hotkeys";
import { useHotkeys } from "hotkeys";
import { getFullPath } from "next-paths";
import { getLastPathsChunk } from "next-paths";
import { usePath } from "next-paths";
import { createPost } from "linkedin-controller";
import { linkedinPost } from "linkedin-controller";
import { loginLinkedin } from "linkedin-controller";
import { scrapeConnections } from "linkedin-controller";
import { sendMessageLinkedin } from "linkedin-controller";
import { signUpLinkedin } from "linkedin-controller";

export const sdk = { addToken,
ensureToken,
getAssetDirectlyApiUrl,
getExtensionFromAsset,
getNameFromRelativePath,
getNameWithTokenFromRelativePath,
getPreferredExtensionFromType,
getReferencedAssetApiUrl,
getTypeFromRelativePath,
readableSize,
removeTokenIfPresent,
AssetInput,
FileInput,
getTypeFromFileBlob,
makeBackendAsset,
MediaRecorderComponent,
MediaRecorder,
ReactMediaRecorder,
SelectMedia,
useReactMediaRecorder,
WebcamCapture,
AssetView,
InteractiveAsset,
getEncoding,
isBinary,
isText,
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
findAllMd,
findFileNameCaseInsensitive,
findFilesRecursively,
findSensibleFiles,
getAllFoldersUntilFolder,
getFileName,
getFirstAvailableFilename,
getFolder,
getLastFolder,
getOneFolderUpPath,
getPathCombinations,
importFromFiles,
isArrayGuard,
oneUp,
parseMd,
removeAllExcept,
renameAndCreate,
writeJsonToFile,
writeStringToFile,
writeToFiles,
getTsConfig,
byteCount,
calculatePathMetaData,
categorizeFiles,
getFolderSummary,
getPathMainComment,
getSizeSummary,
sumSizeSummary,
makeFileType,
findFolderWhereMatch,
findOperationBasePathWithClassification,
findOperationBasePath,
getAllPackageJsonDependencies,
getCommonAncestor,
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
isOperation,
isSensibleProject,
isWorkspaceRoot,
makeRelative,
getDependenciesSummary,
getOperationMetaData,
recalculateOperationIndexJson,
writeKeyToOperationIndexJson,
getWriterType,
hasSubExtension,
isGeneratedOperationName,
isGeneratedOperation,
isIndexableFileId,
getAssetInputType,
getParameterContentType,
isCalculatedParameter,
isGeneratedParameterName,
executeCommand,
getCommand,
getPlatformId,
isCommandPerOs,
log,
makeApi,
getGetApiUrl,
untypedApiFunction,
makeArraysGetEndpoint,
makeGetEndpoint,
objectStringToJson,
parseIfJson,
parsePrimitiveJson,
stringToJson,
FunctionForm,
BigButton,
ClickableIcon,
FancyLoader,
LabeledButton,
checkAuthToken,
LoginForm,
LoginWrapper,
logoutFrontend,
Spoiler,
createCodeblockMarkdown,
useCustomUrlStore,
jsonToMdString,
jsonToSayString,
getSimpleJsonString,
flattenMarkdownChunks,
getKvmdItemsRecursively,
getParagraphsRecursively,
kvmdDataMap,
kvmdDataToString,
kvmdParseToMarkdownString,
markdownStringToKvmdParse,
parseKvmdLine,
getChunkParagraphsRecursively,
getImplicitId,
getMarkdownIntro,
getMarkdownParseParagraphs,
getMarkdownReferencePaths,
getMarkdownReferencesFromParagraph,
markdownParseToMarkdownString,
mdContentParseRecursively,
mdToJsonParse,
parseFrontmatterMarkdownString,
parseMarkdownParagraph,
parseMdToChunks,
removeHeaderPrefix,
parsePrimitiveArray,
parsePrimitiveBoolean,
parsePrimitiveString,
parsePrimitive,
tryParseJson,
bodyFromQueryString,
getFirstQueryStrings,
getQueryPart,
toQueryString,
findSentenceMatches,
searchRecursiveObjectArray,
findPostableToPost,
updatePostedStatistics,
getFunctionExersize,
markdownParseToMarkdownModelType,
parseMarkdownModelTimestamp,
tryParseDate,
createInvoiceContactMarkdown,
createInvoiceMarkdown,
createKeyValueMarkdown,
money,
newInvoice,
printDate,
frontmatterParseToString,
getFrontmatterValueString,
quotedOrNot,
stringifyNewlines,
generateId,
generatePassword,
generateRandomString,
generateTime,
markdownModelTypeToMarkdownString,
createUser,
getBacktickContents,
isInPeriod,
isOutOfStock,
kvmdToCredential,
upcomingOutgoingFlights,
whereShouldIgo,
stripCommentEnd,
stripCommentStart,
stripComment,
stripSlashes,
stripStar,
trim,
getCompileErrors,
getTypescriptErrorsFromFiles,
writeBuildErrors,
findFirstCommentTypes,
getPossibleReferenceParameterNames,
getProperties,
getReferencableModels,
getReferenceParameterInfo,
simplifiedSchemaToTypeDefinitionString,
simplifySchema,
isResultOfInterface,
makeTest,
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
apply,
createEnum,
createMappedObject,
findLastIndex,
getObjectFromParamsString,
getObjectKeysArray,
getParameterAtLocation,
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
objectMapAsync,
objectMapSync,
objectValuesMap,
omitUndefinedValues,
onlyUnique2,
onlyUnique,
removeIndexFromArray,
replaceLastOccurence,
reverseString,
sumAllKeys,
sumObjectParameters,
sum,
takeFirst,
trimSlashes,
getCallerFileName,
parseTitle,
oneByOne,
isPlural,
isSingular,
pluralize,
singularize,
runChildProcess,
clickOnSpanTag,
facebookLogin,
foundOrNotXpath,
foundOrNot,
getChromeExecutablePath,
gmailLogin,
logConsoleIfDebug,
retryClickAndWaitSelector,
retryWaitSelector,
setInnerHtml,
setInputValue,
trueClick,
twitterLogin,
typeInTheInputField,
typeOnTheTargetWithXpathSelector,
waitMilliseconds,
getFileType,
MatchingText,
PathSearchResults,
FileTabs,
getOpenPageUrl,
renderIcon,
FileWriter,
OpenFileWriterPages,
isAltB,
isAltN,
isAltO,
isAltW,
isCtrlBacktick,
isCtrlP,
isCtrlS,
isCtrlSpace,
useHotkey,
useHotkeys,
getFullPath,
getLastPathsChunk,
usePath,
createPost,
linkedinPost,
loginLinkedin,
scrapeConnections,
sendMessageLinkedin,
signUpLinkedin};

export type SdkType = typeof sdk;