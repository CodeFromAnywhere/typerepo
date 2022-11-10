import { driverLogin } from "himalayajeep-functions";
import { driverSignup } from "himalayajeep-functions";
import { getMyJeep } from "himalayajeep-functions";
import { getPublicJeeps } from "himalayajeep-functions";
import { updateMyProfile } from "himalayajeep-functions";
import { allOperationsRemoveJsSrc } from "all";
import { allOperationsToMarkdown } from "all";
import { clearAllTsDatabases } from "all";
import { codeAll } from "all";
import { forAllFiles } from "all";
import { forAllFolders } from "all";
import { getAllOperationClassifications } from "all";
import { gitShipAllRepos } from "all";
import { mdAllOperations } from "all";
import { minifyAllOperations } from "all";
import { publishAllOperations } from "all";
import { removeAllFiles } from "all";
import { removeAllFolders } from "all";
import { removeAll } from "all";
import { renameAll } from "all";
import { runScriptEverywhere } from "all";
import { setScriptEverywhere } from "all";
import { askOk } from "ask";
import { ask } from "ask";
import { getArgumentOrAsk } from "ask";
import { compressAsset } from "asset-functions-node";
import { convertToMp3 } from "asset-functions-node";
import { deleteReferencedAsset } from "asset-functions-node";
import { downloadRemoteAsset } from "asset-functions-node";
import { findAbsoluteAssetPathFromReference } from "asset-functions-node";
import { findAllProjectMedia } from "asset-functions-node";
import { findAssetParametersRecursively } from "asset-functions-node";
import { getAssetDirectlyGetApi } from "asset-functions-node";
import { getReferencedAssetGetApi } from "asset-functions-node";
import { getStorageLocationInfo } from "asset-functions-node";
import { getTemporaryAssetsFolderPath } from "asset-functions-node";
import { processAsset } from "asset-functions-node";
import { processItemAssets } from "asset-functions-node";
import { removeOldTemporaryAssets } from "asset-functions-node";
import { serverDownloadReply } from "asset-functions-node";
import { uploadAssetPostApi } from "asset-functions-node";
import { getAugmentedWordObject } from "augmented-words";
import { getAugmentedWords } from "augmented-words";
import { getBundleAugmentedWords } from "augmented-words";
import { getBundleSummary } from "bundle-util";
import { getDbModelsForBundle } from "bundle-util";
import { cleanupTsDatabase } from "cleanup-typescript-database";
import { shouldDeleteTsModel } from "cleanup-typescript-database";
import { csvItemArrayToCsvString } from "csv-util";
import { tryParseCsv } from "csv-util";
import { generateCsvInstance } from "database";
import { generateJsonSingleInstance } from "database";
import { generateKvmdInstance } from "database";
import { generateMarkdownInstance } from "database";
import { generateSlugTestModel } from "database";
import { getMergedQueryConfig } from "database";
import { randomName } from "database";
import { runModelEndToEndTest } from "database";
import { testOperationModels } from "database";
import { cacheLookup } from "db-recipes";
import { calculateOperatingSystemBundle } from "db-recipes";
import { deleteDbModel } from "db-recipes";
import { getDatabaseMenu } from "db-recipes";
import { getDbModelNames } from "db-recipes";
import { getDbModel } from "db-recipes";
import { getFunctionIndex } from "db-recipes";
import { getNestedDatabaseMenu } from "db-recipes";
import { getReferencableModelData } from "db-recipes";
import { hasDbRecipes } from "db-recipes";
import { makeSrcRelativeFolder } from "db-recipes";
import { tsInterfaceToDbMenu } from "db-recipes";
import { upsertDbModel } from "db-recipes";
import { validateInput } from "db-recipes";
import { filterInterfacesFromOperationNames } from "db-util";
import { getDbModelsFromOperations } from "db-util";
import { findAllDependencyOperations } from "find-all-dependency-operations";
import { findDependantsRecursively } from "find-all-dependency-operations";
import { findDependants } from "find-all-dependency-operations";
import { findDependenciesRecursively } from "find-all-dependency-operations";
import { findMonorepoModules } from "find-all-dependency-operations";
import { getDependencyObject } from "find-all-dependency-operations";
import { getDependencyTree } from "find-all-dependency-operations";
import { folderGetUpdatedAt } from "folder-get-updated-at";
import { addDefaultValues } from "fs-orm";
import { alterAny } from "fs-orm";
import { alterCsv } from "fs-orm";
import { alterJsonMultiple } from "fs-orm";
import { alterJsonSingle } from "fs-orm";
import { alterKeyValueMarkdown } from "fs-orm";
import { alterMarkdown } from "fs-orm";
import { augmentItemWithReferencedDataRecursively } from "fs-orm";
import { calculateOperationsObject } from "fs-orm";
import { createDb } from "fs-orm";
import { findParent } from "fs-orm";
import { getAugmentedData } from "fs-orm";
import { getDatabaseFiles } from "fs-orm";
import { getDatabaseRootFolder } from "fs-orm";
import { getDbFileLocation } from "fs-orm";
import { getDbStorageMethodExtension } from "fs-orm";
import { getDefaultLocationPattern } from "fs-orm";
import { getItemModelLocation } from "fs-orm";
import { getLength } from "fs-orm";
import { getLocationPattern } from "fs-orm";
import { getMergedConfigOperationPath } from "fs-orm";
import { getParentSlug } from "fs-orm";
import { getRootFolders } from "fs-orm";
import { getWildcardDbFileLocations__OLD } from "fs-orm";
import { getWildcardDbFileLocations } from "fs-orm";
import { groupByFile } from "fs-orm";
import { makeStoringItem } from "fs-orm";
import { mergeConfigs } from "fs-orm";
import { removeKeyValueMarkdown } from "fs-orm";
import { removeMultiple } from "fs-orm";
import { upsertItems } from "fs-orm";
import { upsertKeyValueMarkdown } from "fs-orm";
import { upsert } from "fs-orm";
import { getExtension } from "fs-util-js";
import { getFolderJs } from "fs-util-js";
import { getSubExtension } from "fs-util-js";
import { isPathRelative } from "fs-util-js";
import { removeTrailingSlash } from "fs-util-js";
import { withoutExtension } from "fs-util-js";
import { calculateDeviceName } from "function-server-endpoints";
import { cleanupTimer } from "function-server-endpoints";
import { executeFunctionWithParameters } from "function-server-endpoints";
import { getHasAuthorization } from "function-server-endpoints";
import { getNewPerformance } from "function-server-endpoints";
import { getTsFunction } from "function-server-endpoints";
import { storeFunctionExecution } from "function-server-endpoints";
import { upsertDevice } from "function-server-endpoints";
import { generateNamedIndex } from "generate-index";
import { generateSimpleIndex } from "generate-index";
import { isTestFn } from "generate-index";
import { mapToImportStatement } from "generate-index";
import { generateDbSdk } from "generate-sdk-operations";
import { generateEnvSdks } from "generate-sdk-operations";
import { generateFunctionPathsSdk } from "generate-sdk-operations";
import { generateFunctionSdks } from "generate-sdk-operations";
import { generateOperationsSdk } from "generate-sdk-operations";
import { generateSdkOperations } from "generate-sdk-operations";
import { getSdkDescription } from "generate-sdk-operations";
import { getSdkFunctions } from "generate-sdk-operations";
import { isTsFunctionIndexable } from "generate-sdk-operations";
import { newEnvSdk } from "generate-sdk-operations";
import { newSdkKeysOperation } from "generate-sdk-operations";
import { newSdkOperation } from "generate-sdk-operations";
import { tsFunctionIsSdkable } from "generate-sdk-operations";
import { getAllOperationSourcePaths } from "get-all-operation-source-paths";
import { getImportedDependencies } from "get-imported-dependencies";
import { getPackage } from "get-imported-dependencies";
import { isAbsoluteImport } from "get-imported-dependencies";
import { calculatePackageJsonDependencies } from "get-imports-exports";
import { findAndWriteImportsExports } from "get-imports-exports";
import { getDefaultSymbolType } from "get-imports-exports";
import { getExportSpecifierNames } from "get-imports-exports";
import { getExportSymbolTypeRecursive } from "get-imports-exports";
import { getImportSpecifiersWithNames } from "get-imports-exports";
import { getImportsExports } from "get-imports-exports";
import { getPackageNameFromAbsoluteImport } from "get-imports-exports";
import { getSymbolTypeDeclarations } from "get-imports-exports";
import { getTypeFromImportSpecifierRecursive } from "get-imports-exports";
import { isAbsoluteImportBuiltin } from "get-imports-exports";
import { isImportFromOptionalFile } from "get-imports-exports";
import { writeResult } from "get-imports-exports";
import { getOperationBins } from "get-package-json";
import { getOperationPackageName } from "get-package-json";
import { getPackageJson } from "get-package-json";
import { getPackageSourcePaths } from "get-package-source-paths";
import { findAndUpsertTsInterfaces } from "index-typescript";
import { findCommentTypes } from "index-typescript";
import { generateSchema } from "index-typescript";
import { getAllComments } from "index-typescript";
import { getDbStorageMethod } from "index-typescript";
import { getFrontmatterDbStorageMethod } from "index-typescript";
import { getFrontmatterFunctionParameters } from "index-typescript";
import { getIndexId } from "index-typescript";
import { getMaxIndentationDepth } from "index-typescript";
import { getMinMaxValidation } from "index-typescript";
import { getNumberOfLines } from "index-typescript";
import { getParamSchema } from "index-typescript";
import { getParametersFromInterfaces } from "index-typescript";
import { getPossibleRefs } from "index-typescript";
import { getSizeSummary } from "index-typescript";
import { getSpecialExtensionDbStorageMethod } from "index-typescript";
import { getTsStatements } from "index-typescript";
import { getTypeInfo } from "index-typescript";
import { getValidatedOperationPathParse } from "index-typescript";
import { hasDefinition } from "index-typescript";
import { indexTypescriptFile } from "index-typescript";
import { indexTypescript } from "index-typescript";
import { isPrimitive } from "index-typescript";
import { makeTsComment } from "index-typescript";
import { schemaToTsInterface } from "index-typescript";
import { tryCreateSchema } from "index-typescript";
import { typeToSchema } from "index-typescript";
import { dev } from "k-dev";
import { determineFileType } from "k-explore";
import { exploreGitRepoFolders } from "k-explore";
import { exploreMultiple } from "k-explore";
import { exploreOperationFolders } from "k-explore";
import { explorePreset } from "k-explore";
import { explore } from "k-explore";
import { findAllDocsFolderPaths } from "k-explore";
import { findAllDotGitFolders } from "k-explore";
import { findAllFoldersWithName } from "k-explore";
import { findAllPackages } from "k-explore";
import { findAllTodoFolderPaths } from "k-explore";
import { pathArrayIsOperation } from "k-explore";
import { runTestsForOperation } from "k-test";
import { runTests } from "k-test";
import { preIndexLint } from "lint";
import { sendMail } from "mail";
import { bundleFolderWithMarkdown } from "markdown-parsings";
import { bundleToBookMarkdown } from "markdown-parsings";
import { bundleToMarkdown } from "markdown-parsings";
import { deployToVercel } from "markdown-parsings";
import { emailMarkdownParse } from "markdown-parsings";
import { generateStaticSite } from "markdown-parsings";
import { getJsonSchemaSummary } from "markdown-parsings";
import { getMergedMarkdownOutlineUrl } from "markdown-parsings";
import { getOutline } from "markdown-parsings";
import { getTitlesRecursively } from "markdown-parsings";
import { getTypeDescriptorRecursive } from "markdown-parsings";
import { isUpperCase } from "markdown-parsings";
import { makeOutlineMarkdownString } from "markdown-parsings";
import { makePropertiesTable } from "markdown-parsings";
import { markdownChunkToMarkdownStringRecursive } from "markdown-parsings";
import { markdownChunksToMarkdownStringRecursive } from "markdown-parsings";
import { markdownToSayable } from "markdown-parsings";
import { mdToPdf } from "markdown-parsings";
import { mergeMarkdownParse } from "markdown-parsings";
import { noNewlines } from "markdown-parsings";
import { operationRadio } from "markdown-parsings";
import { operationToMarkdown } from "markdown-parsings";
import { printNestedTitles } from "markdown-parsings";
import { print } from "markdown-parsings";
import { projectToMarkdown } from "markdown-parsings";
import { propertyToTableRow } from "markdown-parsings";
import { sayablesToMp3 } from "markdown-parsings";
import { selectRandomOperation } from "markdown-parsings";
import { simplifiedSchemaToMarkdownString } from "markdown-parsings";
import { tsFunctionToMarkdownString } from "markdown-parsings";
import { tsInterfaceToMarkdownString } from "markdown-parsings";
import { tsVariableToMarkdownString } from "markdown-parsings";
import { upMarkdownChunkLevelRecursively } from "markdown-parsings";
import { copyStaticAssets } from "markdown-reader-functions";
import { getAllMarkdownReaderPages } from "markdown-reader-functions";
import { getFolderExplorationInfo } from "markdown-reader-functions";
import { getMarkdownModelPages } from "markdown-reader-functions";
import { getMarkdownPageInfo } from "markdown-reader-functions";
import { getMarkdownReaderPages } from "markdown-reader-functions";
import { getMarkdownReaderQueryPaths } from "markdown-reader-functions";
import { getOperationPages } from "markdown-reader-functions";
import { getPublicMarkdownFilePaths } from "markdown-reader-functions";
import { getTodoPages } from "markdown-reader-functions";
import { markdownReaderGetStaticPaths } from "markdown-reader-functions";
import { markdownReaderGetStaticProps } from "markdown-reader-functions";
import { removeExtensionsFromPath } from "markdown-reader-functions";
import { removeNumberPrefix } from "markdown-reader-functions";
import { shouldExposeMarkdownFile } from "markdown-reader-functions";
import { minifyBuild } from "minify-build";
import { getAvailableOperationName } from "new-template";
import { getOperationConfig } from "new-template";
import { newOperationWithFiles } from "new-template";
import { newOperation } from "new-template";
import { newTemplate } from "new-template";
import { nodemon } from "nodemon";
import { addPeerMessage } from "peer-functions";
import { addPeer } from "peer-functions";
import { getAllAppOperations } from "peer-functions";
import { getFirstEmoji } from "peer-functions";
import { getNestedPathObject } from "peer-functions";
import { getPeerMessages } from "peer-functions";
import { getPeersFromPeersRecursively } from "peer-functions";
import { getPeers } from "peer-functions";
import { getPublicFolderNestedPathObjectFromPeer } from "peer-functions";
import { getPublicFolderNestedPathObject } from "peer-functions";
import { getPublicPeers } from "peer-functions";
import { isPortUsed } from "peer-functions";
import { lateFetchPeerMessageSync } from "peer-functions";
import { ping } from "peer-functions";
import { proactivePushAddPeerMessage } from "peer-functions";
import { removePeer } from "peer-functions";
import { updatePeer } from "peer-functions";
import { getPrimaryPersona } from "persona-functions-node";
import { readCsvFileSync } from "read-csv-file";
import { readCsvFile } from "read-csv-file";
import { readJsonFileSync } from "read-json-file";
import { readJsonFile } from "read-json-file";
import { readKvmdFile } from "read-kvmd-file";
import { readMarkdownFileToModel } from "read-markdown-file";
import { readMarkdownFile } from "read-markdown-file";
import { clearTsDatabase } from "rebuild-operation";
import { executeCommandQuietUnlessFail } from "rebuild-operation";
import { exitIfProcessDependenciesChanged } from "rebuild-operation";
import { generateJsonSchemas } from "rebuild-operation";
import { getAllDbModels } from "rebuild-operation";
import { getFileIds } from "rebuild-operation";
import { getIndexFileIds } from "rebuild-operation";
import { getSrcIds } from "rebuild-operation";
import { isOperationBuildNeeded } from "rebuild-operation";
import { isSdkOperation } from "rebuild-operation";
import { rebuildAllOperations } from "rebuild-operation";
import { rebuildOperation } from "rebuild-operation";
import { shouldSkip } from "rebuild-operation";
import { yarnBuild } from "rebuild-operation";
import { isEqualArray } from "rename-template-files";
import { renameTemplateFiles } from "rename-template-files";
import { renameTemplateToNormalFile } from "rename-template-files";
import { renameToTemplateFile } from "rename-template-files";
import { addAuthenticationMethod } from "server-login";
import { addDeviceAuthenticatedMethod } from "server-login";
import { addDeviceAuthenticationMethodConfirm } from "server-login";
import { addPersonAuthenticationMethod } from "server-login";
import { comparePassword } from "server-login";
import { encryptPassword } from "server-login";
import { isPhoneNumber } from "server-login";
import { isValidPassword } from "server-login";
import { login } from "server-login";
import { logoutPostApi } from "server-login";
import { removeDeviceAuthenticationMethod } from "server-login";
import { removePersonAuthenticationMethod } from "server-login";
import { signup } from "server-login";
import { setJsonKey } from "set-json-key";
import { setKeyAtLocation } from "set-json-key";
import { sendSms } from "sms";
import { getAllTsMorphSourceFiles } from "ts-morph-util";
import { getHasGeneric } from "ts-morph-util";
import { getTsMorphProject } from "ts-morph-util";
import { initiateWatch } from "watch-folders";
import { makeSubscription } from "watch-folders";
import { pickWatcher } from "watch-folders";
import { watchFoldersChokidar } from "watch-folders";
import { watchFoldersFs } from "watch-folders";
import { watchFolders } from "watch-folders";
import { exitIfOperationsChange } from "watch-operations";
import { gitCommitAllCron } from "watch-operations";
import { watchOperations } from "watch-operations";
import { writeToAssets } from "write-to-assets";

export const sdk = { driverLogin,
driverSignup,
getMyJeep,
getPublicJeeps,
updateMyProfile,
allOperationsRemoveJsSrc,
allOperationsToMarkdown,
clearAllTsDatabases,
codeAll,
forAllFiles,
forAllFolders,
getAllOperationClassifications,
gitShipAllRepos,
mdAllOperations,
minifyAllOperations,
publishAllOperations,
removeAllFiles,
removeAllFolders,
removeAll,
renameAll,
runScriptEverywhere,
setScriptEverywhere,
askOk,
ask,
getArgumentOrAsk,
compressAsset,
convertToMp3,
deleteReferencedAsset,
downloadRemoteAsset,
findAbsoluteAssetPathFromReference,
findAllProjectMedia,
findAssetParametersRecursively,
getAssetDirectlyGetApi,
getReferencedAssetGetApi,
getStorageLocationInfo,
getTemporaryAssetsFolderPath,
processAsset,
processItemAssets,
removeOldTemporaryAssets,
serverDownloadReply,
uploadAssetPostApi,
getAugmentedWordObject,
getAugmentedWords,
getBundleAugmentedWords,
getBundleSummary,
getDbModelsForBundle,
cleanupTsDatabase,
shouldDeleteTsModel,
csvItemArrayToCsvString,
tryParseCsv,
generateCsvInstance,
generateJsonSingleInstance,
generateKvmdInstance,
generateMarkdownInstance,
generateSlugTestModel,
getMergedQueryConfig,
randomName,
runModelEndToEndTest,
testOperationModels,
cacheLookup,
calculateOperatingSystemBundle,
deleteDbModel,
getDatabaseMenu,
getDbModelNames,
getDbModel,
getFunctionIndex,
getNestedDatabaseMenu,
getReferencableModelData,
hasDbRecipes,
makeSrcRelativeFolder,
tsInterfaceToDbMenu,
upsertDbModel,
validateInput,
filterInterfacesFromOperationNames,
getDbModelsFromOperations,
findAllDependencyOperations,
findDependantsRecursively,
findDependants,
findDependenciesRecursively,
findMonorepoModules,
getDependencyObject,
getDependencyTree,
folderGetUpdatedAt,
addDefaultValues,
alterAny,
alterCsv,
alterJsonMultiple,
alterJsonSingle,
alterKeyValueMarkdown,
alterMarkdown,
augmentItemWithReferencedDataRecursively,
calculateOperationsObject,
createDb,
findParent,
getAugmentedData,
getDatabaseFiles,
getDatabaseRootFolder,
getDbFileLocation,
getDbStorageMethodExtension,
getDefaultLocationPattern,
getItemModelLocation,
getLength,
getLocationPattern,
getMergedConfigOperationPath,
getParentSlug,
getRootFolders,
getWildcardDbFileLocations__OLD,
getWildcardDbFileLocations,
groupByFile,
makeStoringItem,
mergeConfigs,
removeKeyValueMarkdown,
removeMultiple,
upsertItems,
upsertKeyValueMarkdown,
upsert,
getExtension,
getFolderJs,
getSubExtension,
isPathRelative,
removeTrailingSlash,
withoutExtension,
calculateDeviceName,
cleanupTimer,
executeFunctionWithParameters,
getHasAuthorization,
getNewPerformance,
getTsFunction,
storeFunctionExecution,
upsertDevice,
generateNamedIndex,
generateSimpleIndex,
isTestFn,
mapToImportStatement,
generateDbSdk,
generateEnvSdks,
generateFunctionPathsSdk,
generateFunctionSdks,
generateOperationsSdk,
generateSdkOperations,
getSdkDescription,
getSdkFunctions,
isTsFunctionIndexable,
newEnvSdk,
newSdkKeysOperation,
newSdkOperation,
tsFunctionIsSdkable,
getAllOperationSourcePaths,
getImportedDependencies,
getPackage,
isAbsoluteImport,
calculatePackageJsonDependencies,
findAndWriteImportsExports,
getDefaultSymbolType,
getExportSpecifierNames,
getExportSymbolTypeRecursive,
getImportSpecifiersWithNames,
getImportsExports,
getPackageNameFromAbsoluteImport,
getSymbolTypeDeclarations,
getTypeFromImportSpecifierRecursive,
isAbsoluteImportBuiltin,
isImportFromOptionalFile,
writeResult,
getOperationBins,
getOperationPackageName,
getPackageJson,
getPackageSourcePaths,
findAndUpsertTsInterfaces,
findCommentTypes,
generateSchema,
getAllComments,
getDbStorageMethod,
getFrontmatterDbStorageMethod,
getFrontmatterFunctionParameters,
getIndexId,
getMaxIndentationDepth,
getMinMaxValidation,
getNumberOfLines,
getParamSchema,
getParametersFromInterfaces,
getPossibleRefs,
getSizeSummary,
getSpecialExtensionDbStorageMethod,
getTsStatements,
getTypeInfo,
getValidatedOperationPathParse,
hasDefinition,
indexTypescriptFile,
indexTypescript,
isPrimitive,
makeTsComment,
schemaToTsInterface,
tryCreateSchema,
typeToSchema,
dev,
determineFileType,
exploreGitRepoFolders,
exploreMultiple,
exploreOperationFolders,
explorePreset,
explore,
findAllDocsFolderPaths,
findAllDotGitFolders,
findAllFoldersWithName,
findAllPackages,
findAllTodoFolderPaths,
pathArrayIsOperation,
runTestsForOperation,
runTests,
preIndexLint,
sendMail,
bundleFolderWithMarkdown,
bundleToBookMarkdown,
bundleToMarkdown,
deployToVercel,
emailMarkdownParse,
generateStaticSite,
getJsonSchemaSummary,
getMergedMarkdownOutlineUrl,
getOutline,
getTitlesRecursively,
getTypeDescriptorRecursive,
isUpperCase,
makeOutlineMarkdownString,
makePropertiesTable,
markdownChunkToMarkdownStringRecursive,
markdownChunksToMarkdownStringRecursive,
markdownToSayable,
mdToPdf,
mergeMarkdownParse,
noNewlines,
operationRadio,
operationToMarkdown,
printNestedTitles,
print,
projectToMarkdown,
propertyToTableRow,
sayablesToMp3,
selectRandomOperation,
simplifiedSchemaToMarkdownString,
tsFunctionToMarkdownString,
tsInterfaceToMarkdownString,
tsVariableToMarkdownString,
upMarkdownChunkLevelRecursively,
copyStaticAssets,
getAllMarkdownReaderPages,
getFolderExplorationInfo,
getMarkdownModelPages,
getMarkdownPageInfo,
getMarkdownReaderPages,
getMarkdownReaderQueryPaths,
getOperationPages,
getPublicMarkdownFilePaths,
getTodoPages,
markdownReaderGetStaticPaths,
markdownReaderGetStaticProps,
removeExtensionsFromPath,
removeNumberPrefix,
shouldExposeMarkdownFile,
minifyBuild,
getAvailableOperationName,
getOperationConfig,
newOperationWithFiles,
newOperation,
newTemplate,
nodemon,
addPeerMessage,
addPeer,
getAllAppOperations,
getFirstEmoji,
getNestedPathObject,
getPeerMessages,
getPeersFromPeersRecursively,
getPeers,
getPublicFolderNestedPathObjectFromPeer,
getPublicFolderNestedPathObject,
getPublicPeers,
isPortUsed,
lateFetchPeerMessageSync,
ping,
proactivePushAddPeerMessage,
removePeer,
updatePeer,
getPrimaryPersona,
readCsvFileSync,
readCsvFile,
readJsonFileSync,
readJsonFile,
readKvmdFile,
readMarkdownFileToModel,
readMarkdownFile,
clearTsDatabase,
executeCommandQuietUnlessFail,
exitIfProcessDependenciesChanged,
generateJsonSchemas,
getAllDbModels,
getFileIds,
getIndexFileIds,
getSrcIds,
isOperationBuildNeeded,
isSdkOperation,
rebuildAllOperations,
rebuildOperation,
shouldSkip,
yarnBuild,
isEqualArray,
renameTemplateFiles,
renameTemplateToNormalFile,
renameToTemplateFile,
addAuthenticationMethod,
addDeviceAuthenticatedMethod,
addDeviceAuthenticationMethodConfirm,
addPersonAuthenticationMethod,
comparePassword,
encryptPassword,
isPhoneNumber,
isValidPassword,
login,
logoutPostApi,
removeDeviceAuthenticationMethod,
removePersonAuthenticationMethod,
signup,
setJsonKey,
setKeyAtLocation,
sendSms,
getAllTsMorphSourceFiles,
getHasGeneric,
getTsMorphProject,
initiateWatch,
makeSubscription,
pickWatcher,
watchFoldersChokidar,
watchFoldersFs,
watchFolders,
exitIfOperationsChange,
gitCommitAllCron,
watchOperations,
writeToAssets};

export type SdkType = typeof sdk;