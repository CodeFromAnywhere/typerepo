import { generateCsvInstance } from "database";
import { generateJsonSingleInstance } from "database";
import { generateKvmdInstance } from "database";
import { generateMarkdownInstance } from "database";
import { generateSlugTestModel } from "database";
import { getMergedQueryConfig } from "database";
import { randomName } from "database";
import { runModelEndToEndTest } from "database";
import { testOperationModels } from "database";
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
import { getItemModelLocation } from "fs-orm";
import { getLength } from "fs-orm";
import { getLocationPattern } from "fs-orm";
import { getParentSlug } from "fs-orm";
import { groupByFile } from "fs-orm";
import { makeStoringItem } from "fs-orm";
import { mergeConfigs } from "fs-orm";
import { removeKeyValueMarkdown } from "fs-orm";
import { removeMultiple } from "fs-orm";
import { upsertItems } from "fs-orm";
import { upsertKeyValueMarkdown } from "fs-orm";
import { upsert } from "fs-orm";
import { generateNamedIndex } from "generate-index";
import { generateSimpleIndex } from "generate-index";
import { isTestFn } from "generate-index";
import { mapToImportStatement } from "generate-index";
import { generateDbSdk } from "generate-sdk-operations";
import { generateEnvSdks } from "generate-sdk-operations";
import { generateFunctionSdks } from "generate-sdk-operations";
import { generateOperationsSdk } from "generate-sdk-operations";
import { generateSdkOperations } from "generate-sdk-operations";
import { getSdkFunctions } from "generate-sdk-operations";
import { isTsFunctionIndexable } from "generate-sdk-operations";
import { newEnvSdk } from "generate-sdk-operations";
import { newSdkKeysOperation } from "generate-sdk-operations";
import { newSdkOperation } from "generate-sdk-operations";
import { tsFunctionIsSdkable } from "generate-sdk-operations";
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
import { isAbsoluteImport } from "get-imports-exports";
import { isImportFromOptionalFile } from "get-imports-exports";
import { writeResult } from "get-imports-exports";
import { findAndUpsertTsInterfaces } from "index-typescript";
import { findCommentTypes } from "index-typescript";
import { generateSchema } from "index-typescript";
import { getAllComments } from "index-typescript";
import { getDbStorageMethod } from "index-typescript";
import { getFrontmatterDbStorageMethod } from "index-typescript";
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
import { runTestsForOperation } from "k-test";
import { runTests } from "k-test";
import { minifyBuild } from "minify-build";
import { getAvailableOperationName } from "new-operation";
import { getOperationConfig } from "new-operation";
import { newOperationWithFiles } from "new-operation";
import { newOperation } from "new-operation";
import { nodemon } from "nodemon";
import { clearTsDatabase } from "rebuild-operation";
import { executeCommandQuietUnlessFail } from "rebuild-operation";
import { exitIfProcessDependenciesChanged } from "rebuild-operation";
import { getFileIds } from "rebuild-operation";
import { getIndexFileIds } from "rebuild-operation";
import { getSrcIds } from "rebuild-operation";
import { isOperationBuildNeeded } from "rebuild-operation";
import { isSdkOperation } from "rebuild-operation";
import { rebuildAllOperations } from "rebuild-operation";
import { rebuildOperation } from "rebuild-operation";
import { shouldSkip } from "rebuild-operation";
import { yarnBuild } from "rebuild-operation";
import { initiateWatch } from "watch-folders";
import { makeSubscription } from "watch-folders";
import { watchFoldersFs } from "watch-folders";
import { watchFolders } from "watch-folders";
import { exitIfOperationsChange } from "watch-operations";
import { gitCommitAllCron } from "watch-operations";
import { watchOperations } from "watch-operations";
import { allOperationsRemoveJsSrc } from "all";
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
import { getBundleSummary } from "bundle-util";
import { getDbModelsForBundle } from "bundle-util";
import { getDocsMarkdownReaderPages } from "bundle-util";
import { getInternalLinks } from "bundle-util";
import { getMarkdownReaderQueryPaths } from "bundle-util";
import { getPublicMarkdownFilePaths } from "bundle-util";
import { removeExtensionsFromPath } from "bundle-util";
import { removeNumberPrefix } from "bundle-util";
import { cleanupTsDatabase } from "cleanup-typescript-database";
import { shouldDeleteTsModel } from "cleanup-typescript-database";
import { csvItemArrayToCsvString } from "csv-util";
import { tryParseCsv } from "csv-util";
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
import { getAllOperationSourcePaths } from "get-all-operation-source-paths";
import { getImportedDependencies } from "get-imported-dependencies";
import { getPackage } from "get-imported-dependencies";
import { getOperationBins } from "get-package-json";
import { getOperationPackageName } from "get-package-json";
import { getPackageJson } from "get-package-json";
import { getPackageSourcePaths } from "get-package-source-paths";
import { determineFileType } from "k-explore";
import { exploreGitRepoFolders } from "k-explore";
import { exploreMultiple } from "k-explore";
import { exploreOperationFolders } from "k-explore";
import { explorePreset } from "k-explore";
import { explore } from "k-explore";
import { findAllDotGitFolders } from "k-explore";
import { findAllPackages } from "k-explore";
import { preIndexLint } from "lint";
import { bundleFolderWithMarkdown } from "markdown-parsings";
import { bundleToBookMarkdown } from "markdown-parsings";
import { bundleToMarkdown } from "markdown-parsings";
import { deployToVercel } from "markdown-parsings";
import { emailMarkdownParse } from "markdown-parsings";
import { generateStaticSite } from "markdown-parsings";
import { getFunctionsInfo } from "markdown-parsings";
import { getOutline } from "markdown-parsings";
import { getTitlesRecursively } from "markdown-parsings";
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
import { upMarkdownChunkLevelRecursively } from "markdown-parsings";
import { readCsvFileSync } from "read-csv-file";
import { readCsvFile } from "read-csv-file";
import { readJsonFileSync } from "read-json-file";
import { readJsonFile } from "read-json-file";
import { tryParseJson } from "read-json-file";
import { readKvmdFile } from "read-kvmd-file";
import { omitUndefinedValues } from "read-markdown-file";
import { readMarkdownFileToModel } from "read-markdown-file";
import { readMarkdownFile } from "read-markdown-file";
import { isEqualArray } from "rename-template-files";
import { renameTemplateFiles } from "rename-template-files";
import { renameTemplateToNormalFile } from "rename-template-files";
import { renameToTemplateFile } from "rename-template-files";
import { setJsonKey } from "set-json-key";
import { getAllTsMorphSourceFiles } from "ts-morph-util";
import { getHasGeneric } from "ts-morph-util";
import { getTsMorphProject } from "ts-morph-util";
import { writeToAssets } from "write-to-assets";

export const sdk = { generateCsvInstance,
generateJsonSingleInstance,
generateKvmdInstance,
generateMarkdownInstance,
generateSlugTestModel,
getMergedQueryConfig,
randomName,
runModelEndToEndTest,
testOperationModels,
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
getItemModelLocation,
getLength,
getLocationPattern,
getParentSlug,
groupByFile,
makeStoringItem,
mergeConfigs,
removeKeyValueMarkdown,
removeMultiple,
upsertItems,
upsertKeyValueMarkdown,
upsert,
generateNamedIndex,
generateSimpleIndex,
isTestFn,
mapToImportStatement,
generateDbSdk,
generateEnvSdks,
generateFunctionSdks,
generateOperationsSdk,
generateSdkOperations,
getSdkFunctions,
isTsFunctionIndexable,
newEnvSdk,
newSdkKeysOperation,
newSdkOperation,
tsFunctionIsSdkable,
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
isAbsoluteImport,
isImportFromOptionalFile,
writeResult,
findAndUpsertTsInterfaces,
findCommentTypes,
generateSchema,
getAllComments,
getDbStorageMethod,
getFrontmatterDbStorageMethod,
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
runTestsForOperation,
runTests,
minifyBuild,
getAvailableOperationName,
getOperationConfig,
newOperationWithFiles,
newOperation,
nodemon,
clearTsDatabase,
executeCommandQuietUnlessFail,
exitIfProcessDependenciesChanged,
getFileIds,
getIndexFileIds,
getSrcIds,
isOperationBuildNeeded,
isSdkOperation,
rebuildAllOperations,
rebuildOperation,
shouldSkip,
yarnBuild,
initiateWatch,
makeSubscription,
watchFoldersFs,
watchFolders,
exitIfOperationsChange,
gitCommitAllCron,
watchOperations,
allOperationsRemoveJsSrc,
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
getBundleSummary,
getDbModelsForBundle,
getDocsMarkdownReaderPages,
getInternalLinks,
getMarkdownReaderQueryPaths,
getPublicMarkdownFilePaths,
removeExtensionsFromPath,
removeNumberPrefix,
cleanupTsDatabase,
shouldDeleteTsModel,
csvItemArrayToCsvString,
tryParseCsv,
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
getAllOperationSourcePaths,
getImportedDependencies,
getPackage,
getOperationBins,
getOperationPackageName,
getPackageJson,
getPackageSourcePaths,
determineFileType,
exploreGitRepoFolders,
exploreMultiple,
exploreOperationFolders,
explorePreset,
explore,
findAllDotGitFolders,
findAllPackages,
preIndexLint,
bundleFolderWithMarkdown,
bundleToBookMarkdown,
bundleToMarkdown,
deployToVercel,
emailMarkdownParse,
generateStaticSite,
getFunctionsInfo,
getOutline,
getTitlesRecursively,
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
upMarkdownChunkLevelRecursively,
readCsvFileSync,
readCsvFile,
readJsonFileSync,
readJsonFile,
tryParseJson,
readKvmdFile,
omitUndefinedValues,
readMarkdownFileToModel,
readMarkdownFile,
isEqualArray,
renameTemplateFiles,
renameTemplateToNormalFile,
renameToTemplateFile,
setJsonKey,
getAllTsMorphSourceFiles,
getHasGeneric,
getTsMorphProject,
writeToAssets};

export type SdkType = typeof sdk;