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
import { generateCsvInstance } from "database";
import { generateJsonSingleInstance } from "database";
import { generateKvmdInstance } from "database";
import { generateMarkdownInstance } from "database";
import { generateSlugTestModel } from "database";
import { getMergedQueryConfig } from "database";
import { randomName } from "database";
import { runModelEndToEndTest } from "database";
import { testOperationModels } from "database";
import { exploreOperation } from "explore-project";
import { exploreProject } from "explore-project";
import { getExplorationType } from "explore-project";
import { getFileWithExtension } from "explore-project";
import { getFolderExplorationDetails } from "explore-project";
import { getInstanceNames } from "explore-project";
import { hasSameProjectPath } from "explore-project";
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
import { getAllOperationSourcePaths } from "get-all-operation-source-paths";
import { getAssociatedMd } from "get-associated-md";
import { getAvailableFolderPath } from "get-available-folder-path";
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
import { minifyBuild } from "minify-build";
import { readCsvFileSync } from "read-csv-file";
import { readCsvFile } from "read-csv-file";
import { readJsonFileSync } from "read-json-file";
import { readJsonFile } from "read-json-file";
import { tryParseJson } from "read-json-file";
import { readKvmdFile } from "read-kvmd-file";
import { readMarkdownFileToModel } from "read-markdown-file";
import { readMarkdownFile } from "read-markdown-file";
import { getFolderTypescriptIndex } from "read-typescript-file";
import { readTypescriptFile } from "read-typescript-file";
import { clearTsDatabase } from "rebuild-operation";
import { executeCommandQuietUnlessFail } from "rebuild-operation";
import { exitIfProcessDependenciesChanged } from "rebuild-operation";
import { getFileIds } from "rebuild-operation";
import { getIndexFileIds } from "rebuild-operation";
import { getSrcIds } from "rebuild-operation";
import { isGeneratedOperationName } from "rebuild-operation";
import { isGeneratedOperation } from "rebuild-operation";
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
import { setJsonKey } from "set-json-key";
import { validateModel } from "validate-model";
import { validate } from "validate-model";
import { initiateWatch } from "watch-folders";
import { makeSubscription } from "watch-folders";
import { watchFoldersFs } from "watch-folders";
import { watchFolders } from "watch-folders";
import { exitIfOperationsChange } from "watch-operations";
import { gitCommitAllCron } from "watch-operations";
import { watchOperations } from "watch-operations";
import { brigtnessFull } from "brightness";
import { brigtnessZero } from "brightness";
import { decreaseBrightness } from "brightness";
import { increaseBrightness } from "brightness";
import { sensibleSetup } from "clean-macos-setup";
import { playMusic } from "play-music";
import { generateRecurringReminders } from "reminders";
import { remindMeAboutNextMinute } from "reminders";
import { setRandomTimezone } from "set-random-timezone";
import { disableDarkMode } from "toggle-dark-mode";
import { enableDarkMode } from "toggle-dark-mode";
import { setDarkmodeCommand } from "toggle-dark-mode";
import { toggleDarkMode } from "toggle-dark-mode";
import { disableScreenSleep2 } from "toggle-screen-sleep";
import { disableScreenSleep } from "toggle-screen-sleep";
import { enableScreenSleep } from "toggle-screen-sleep";
import { downVolume } from "volume";
import { getVolume } from "volume";
import { setVolume } from "volume";
import { upVolume } from "volume";
import { calculateBbqAbility } from "weather-sensor";
import { calculateCloudyness } from "weather-sensor";
import { calculateCodeFromNatureAbility } from "weather-sensor";
import { calculateDresscode } from "weather-sensor";
import { calculateKiteability } from "weather-sensor";
import { calculateRainyness } from "weather-sensor";
import { calculateSunnyness } from "weather-sensor";
import { calculateWindyness } from "weather-sensor";
import { fetchWeatherStormGlass } from "weather-sensor";
import { fetchWeatherTommorowIOApi } from "weather-sensor";
import { getCustomWeatherData } from "weather-sensor";
import { getBundleSummary } from "bundle-util";
import { getDbModelsForBundle } from "bundle-util";
import { getDocsMarkdownReaderPages } from "bundle-util";
import { getInternalLinks } from "bundle-util";
import { getMarkdownReaderQueryPaths } from "bundle-util";
import { getPublicMarkdownFilePaths } from "bundle-util";
import { removeExtensionsFromPath } from "bundle-util";
import { removeNumberPrefix } from "bundle-util";
import { createBackup } from "create-backup";
import { getHumanReadableDate } from "create-backup";
import { createDistribution } from "create-distribution";
import { filterInterfacesFromOperationNames } from "db-util";
import { getDbModelsFromOperations } from "db-util";
import { calculateBundleOperations } from "generate-bundle";
import { copyAllRelativeFiles } from "generate-bundle";
import { copyDocsAndReadme } from "generate-bundle";
import { copyOperation } from "generate-bundle";
import { copyTemplate } from "generate-bundle";
import { findAndCopyOperations } from "generate-bundle";
import { generateAllBundles } from "generate-bundle";
import { generateBundle } from "generate-bundle";
import { generateBundles } from "generate-bundle";
import { getBundlePaths } from "generate-bundle";
import { getIndirectDependencies } from "generate-bundle";
import { syncInformation } from "generate-bundle";
import { updateBundledFolder } from "generate-bundle";
import { installNodeModules } from "install-node-modules";
import { yarnInstallNewDistribution } from "yarn-install-new-distribution";
import { deleteDbModel } from "db-recipes";
import { functionAuthPlugin } from "db-recipes";
import { functionCacheLookupPlugin } from "db-recipes";
import { functionInputValidationPlugin } from "db-recipes";
import { functionStoreCachePlugin } from "db-recipes";
import { functionStorePerformancePlugin } from "db-recipes";
import { getDatabaseMenu } from "db-recipes";
import { getDbModel } from "db-recipes";
import { getDbModelsForSensibleProject } from "db-recipes";
import { getFunctionIndex } from "db-recipes";
import { hasDbRecipes } from "db-recipes";
import { upsertDbModel } from "db-recipes";
import { detectLanguage } from "detect-language";
import { createWordSimplificationMap } from "simplify-text";
import { findBetterWords } from "simplify-text";
import { getSynonymFrequencyDataset } from "simplify-text";
import { preprocessSynonyms } from "simplify-text";
import { preprocessWordFrequencies } from "simplify-text";
import { speakWordsToLearn } from "speak-words-to-learn";
import { unzip } from "unzip";
import { zip } from "zip";
import { csvItemArrayToCsvString } from "csv-util";
import { tryParseCsv } from "csv-util";
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
import { getLocation } from "get-location";
import { getLight } from "get-light";
import { cleanupTsDatabase } from "cleanup-typescript-database";
import { shouldDeleteTsModel } from "cleanup-typescript-database";
import { findAllDependencyOperations } from "find-all-dependency-operations";
import { findDependantsRecursively } from "find-all-dependency-operations";
import { findDependants } from "find-all-dependency-operations";
import { findDependenciesRecursively } from "find-all-dependency-operations";
import { findMonorepoModules } from "find-all-dependency-operations";
import { getDependencyTree } from "find-all-dependency-operations";
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
import { getMissingDependencies } from "get-missing-dependencies";
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
import { preIndexLint } from "lint";
import { getAvailableOperationName } from "new-operation";
import { getOperationConfig } from "new-operation";
import { newOperationWithFiles } from "new-operation";
import { newOperation } from "new-operation";
import { buildPackage } from "package-scripts";
import { installMissingMonorepoDependencies } from "package-scripts";
import { obfucsate } from "package-scripts";
import { testPackage } from "package-scripts";
import { prettierOperation } from "prettier-operation";
import { renameOperation } from "rename-operation";
import { runTestsForOperation } from "k-test";
import { runTests } from "k-test";
import { getAllTsMorphSourceFiles } from "ts-morph-util";
import { getHasGeneric } from "ts-morph-util";
import { getTsMorphProject } from "ts-morph-util";
import { say } from "say";
import { askOk } from "ask";
import { ask } from "ask";
import { getArgumentOrAsk } from "ask";
import { cliVersionUpdates } from "cli-version-updates";
import { handleVersionUpdates } from "cli-version-updates";
import { remindMeIn } from "remind-me-in";
import { execAsync } from "child-process-helper";
import { spawnAsync } from "child-process-helper";
import { dev } from "k-dev";
import { nodemon } from "nodemon";
import { getCompanies } from "foodchain-recipes";
import { getFinalProducts } from "foodchain-recipes";
import { getIngredientProducts } from "foodchain-recipes";
import { getProductValueChain } from "foodchain-recipes";
import { getSustainabilityPlan } from "foodchain-recipes";

export const sdk = { allOperationsRemoveJsSrc,
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
generateCsvInstance,
generateJsonSingleInstance,
generateKvmdInstance,
generateMarkdownInstance,
generateSlugTestModel,
getMergedQueryConfig,
randomName,
runModelEndToEndTest,
testOperationModels,
exploreOperation,
exploreProject,
getExplorationType,
getFileWithExtension,
getFolderExplorationDetails,
getInstanceNames,
hasSameProjectPath,
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
getAllOperationSourcePaths,
getAssociatedMd,
getAvailableFolderPath,
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
minifyBuild,
readCsvFileSync,
readCsvFile,
readJsonFileSync,
readJsonFile,
tryParseJson,
readKvmdFile,
readMarkdownFileToModel,
readMarkdownFile,
getFolderTypescriptIndex,
readTypescriptFile,
clearTsDatabase,
executeCommandQuietUnlessFail,
exitIfProcessDependenciesChanged,
getFileIds,
getIndexFileIds,
getSrcIds,
isGeneratedOperationName,
isGeneratedOperation,
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
setJsonKey,
validateModel,
validate,
initiateWatch,
makeSubscription,
watchFoldersFs,
watchFolders,
exitIfOperationsChange,
gitCommitAllCron,
watchOperations,
brigtnessFull,
brigtnessZero,
decreaseBrightness,
increaseBrightness,
sensibleSetup,
playMusic,
generateRecurringReminders,
remindMeAboutNextMinute,
setRandomTimezone,
disableDarkMode,
enableDarkMode,
setDarkmodeCommand,
toggleDarkMode,
disableScreenSleep2,
disableScreenSleep,
enableScreenSleep,
downVolume,
getVolume,
setVolume,
upVolume,
calculateBbqAbility,
calculateCloudyness,
calculateCodeFromNatureAbility,
calculateDresscode,
calculateKiteability,
calculateRainyness,
calculateSunnyness,
calculateWindyness,
fetchWeatherStormGlass,
fetchWeatherTommorowIOApi,
getCustomWeatherData,
getBundleSummary,
getDbModelsForBundle,
getDocsMarkdownReaderPages,
getInternalLinks,
getMarkdownReaderQueryPaths,
getPublicMarkdownFilePaths,
removeExtensionsFromPath,
removeNumberPrefix,
createBackup,
getHumanReadableDate,
createDistribution,
filterInterfacesFromOperationNames,
getDbModelsFromOperations,
calculateBundleOperations,
copyAllRelativeFiles,
copyDocsAndReadme,
copyOperation,
copyTemplate,
findAndCopyOperations,
generateAllBundles,
generateBundle,
generateBundles,
getBundlePaths,
getIndirectDependencies,
syncInformation,
updateBundledFolder,
installNodeModules,
yarnInstallNewDistribution,
deleteDbModel,
functionAuthPlugin,
functionCacheLookupPlugin,
functionInputValidationPlugin,
functionStoreCachePlugin,
functionStorePerformancePlugin,
getDatabaseMenu,
getDbModel,
getDbModelsForSensibleProject,
getFunctionIndex,
hasDbRecipes,
upsertDbModel,
detectLanguage,
createWordSimplificationMap,
findBetterWords,
getSynonymFrequencyDataset,
preprocessSynonyms,
preprocessWordFrequencies,
speakWordsToLearn,
unzip,
zip,
csvItemArrayToCsvString,
tryParseCsv,
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
getLocation,
getLight,
cleanupTsDatabase,
shouldDeleteTsModel,
findAllDependencyOperations,
findDependantsRecursively,
findDependants,
findDependenciesRecursively,
findMonorepoModules,
getDependencyTree,
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
getMissingDependencies,
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
preIndexLint,
getAvailableOperationName,
getOperationConfig,
newOperationWithFiles,
newOperation,
buildPackage,
installMissingMonorepoDependencies,
obfucsate,
testPackage,
prettierOperation,
renameOperation,
runTestsForOperation,
runTests,
getAllTsMorphSourceFiles,
getHasGeneric,
getTsMorphProject,
say,
askOk,
ask,
getArgumentOrAsk,
cliVersionUpdates,
handleVersionUpdates,
remindMeIn,
execAsync,
spawnAsync,
dev,
nodemon,
getCompanies,
getFinalProducts,
getIngredientProducts,
getProductValueChain,
getSustainabilityPlan};

export type SdkType = typeof sdk;