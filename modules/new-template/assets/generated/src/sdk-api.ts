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
import { folderGetUpdatedAt } from "folder-get-updated-at";
import { getExtension } from "fs-util-js";
import { getFolderJs } from "fs-util-js";
import { getSubExtension } from "fs-util-js";
import { isPathRelative } from "fs-util-js";
import { removeTrailingSlash } from "fs-util-js";
import { withoutExtension } from "fs-util-js";
import { getAssociatedMd } from "get-associated-md";
import { getAvailableFolderPath } from "get-available-folder-path";
import { getOperationBins } from "get-package-json";
import { getOperationPackageName } from "get-package-json";
import { getPackageJson } from "get-package-json";
import { getPackageSourcePaths } from "get-package-source-paths";
import { isEqualArray } from "rename-template-files";
import { renameTemplateFiles } from "rename-template-files";
import { renameTemplateToNormalFile } from "rename-template-files";
import { renameToTemplateFile } from "rename-template-files";
import { setJsonKey } from "set-json-key";
import { setKeyAtLocation } from "set-json-key";
import { initiateWatch } from "watch-folders";
import { makeSubscription } from "watch-folders";
import { pickWatcher } from "watch-folders";
import { watchFoldersChokidar } from "watch-folders";
import { watchFoldersFs } from "watch-folders";
import { watchFolders } from "watch-folders";
import { writeToAssets } from "write-to-assets";
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
import { exploreOperation } from "explore-project";
import { exploreProject } from "explore-project";
import { getExplorationType } from "explore-project";
import { getFileWithExtension } from "explore-project";
import { getFolderExplorationDetails } from "explore-project";
import { getInstanceNames } from "explore-project";
import { getProjectRelativePaths } from "explore-project";
import { hasSameProjectPath } from "explore-project";
import { getAllOperationSourcePaths } from "get-all-operation-source-paths";
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
import { startApp } from "pm2-util";
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
import { getOpenableFilePath } from "vscode-open";
import { vscodeOpen } from "vscode-open";
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
import { validateModel } from "validate-model";
import { validate } from "validate-model";
import { getBundleSummary } from "bundle-util";
import { getDbModelsForBundle } from "bundle-util";
import { createBackup } from "create-backup";
import { getHumanReadableDate } from "create-backup";
import { createDistribution } from "create-distribution";
import { filterInterfacesFromOperationNames } from "db-util";
import { getDbModelsFromOperations } from "db-util";
import { calculateBundleOperations } from "generate-bundle";
import { calculateToPath } from "generate-bundle";
import { copyDocsAndReadme } from "generate-bundle";
import { copyFromRepoToNiche } from "generate-bundle";
import { copyOperation } from "generate-bundle";
import { copyReadmesBeforeFolderToBundle } from "generate-bundle";
import { copyTodosIntoBundle } from "generate-bundle";
import { findAndCopyOperations } from "generate-bundle";
import { generateAllBundles } from "generate-bundle";
import { generateBundle } from "generate-bundle";
import { generateBundles } from "generate-bundle";
import { getBundlePaths } from "generate-bundle";
import { getIndirectDependencies } from "generate-bundle";
import { mergeBundleConfigs } from "generate-bundle";
import { syncInformation } from "generate-bundle";
import { syncNicheFolder } from "generate-bundle";
import { yarnInstall } from "generate-bundle";
import { installNodeModules } from "install-node-modules";
import { yarnInstallNewDistribution } from "yarn-install-new-distribution";
import { getTsFunction } from "function-recipes";
import { calculateDeviceName } from "function-server-endpoints";
import { cleanupTimer } from "function-server-endpoints";
import { executeFunctionWithParameters } from "function-server-endpoints";
import { getHasAuthorization } from "function-server-endpoints";
import { getNewPerformance } from "function-server-endpoints";
import { storeFunctionExecution } from "function-server-endpoints";
import { upsertDevice } from "function-server-endpoints";
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
import { remindMeIn } from "remind-me-in";
import { sayDutch } from "say";
import { sayLanguage } from "say";
import { sayNepali } from "say";
import { say } from "say";
import { askOk } from "ask";
import { ask } from "ask";
import { getArgumentOrAsk } from "ask";
import { cliVersionUpdates } from "cli-version-updates";
import { handleVersionUpdates } from "cli-version-updates";
import { detectLanguage } from "detect-language";
import { generateSimpleSentence } from "generate-simple-sentence";
import { makeAudioCourse } from "generate-simple-sentence";
import { pickRandomArrayItem } from "generate-simple-sentence";
import { sleep } from "generate-simple-sentence";
import { createWordSimplificationMap } from "simplify-text";
import { findBetterWords } from "simplify-text";
import { getSynonymFrequencyDataset } from "simplify-text";
import { preprocessSynonyms } from "simplify-text";
import { preprocessWordFrequencies } from "simplify-text";
import { speakWordsToLearn } from "speak-words-to-learn";
import { getAugmentedWordObject } from "augmented-words";
import { getAugmentedWords } from "augmented-words";
import { getBundleAugmentedWords } from "augmented-words";
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
import { getQueryPath } from "markdown-reader-functions-js";
import { sendMail } from "mail";
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
import { sendSms } from "sms";
import { mapArrayJson } from "edit-json-file";
import { mapObjectJson } from "edit-json-file";
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
import { readCsvFileSync } from "read-csv-file";
import { readCsvFile } from "read-csv-file";
import { readJsonFileSync } from "read-json-file";
import { readJsonFile } from "read-json-file";
import { readKvmdFile } from "read-kvmd-file";
import { readMarkdownFileToModel } from "read-markdown-file";
import { readMarkdownFile } from "read-markdown-file";
import { getFolderTypescriptIndex } from "read-typescript-file";
import { readTypescriptFile } from "read-typescript-file";
import { getLocation } from "get-location";
import { getLight } from "get-light";
import { getPostableFrontmatterSchema } from "social-media-functions";
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
import { getFrontmatterFunctionParameters } from "index-typescript";
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
import { minifyBuild } from "minify-build";
import { getAvailableOperationName } from "new-template";
import { getOperationConfig } from "new-template";
import { newOperationWithFiles } from "new-template";
import { newOperation } from "new-template";
import { newTemplate } from "new-template";
import { buildPackage } from "package-scripts";
import { installMissingMonorepoDependencies } from "package-scripts";
import { obfucsate } from "package-scripts";
import { testPackage } from "package-scripts";
import { prettierOperation } from "prettier-operation";
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
import { renameOperation } from "rename-operation";
import { runTestsForOperation } from "k-test";
import { runTests } from "k-test";
import { getAllTsMorphSourceFiles } from "ts-morph-util";
import { getHasGeneric } from "ts-morph-util";
import { getTsMorphProject } from "ts-morph-util";
import { exitIfOperationsChange } from "watch-operations";
import { gitCommitAllCron } from "watch-operations";
import { watchOperations } from "watch-operations";
import { execAsync } from "child-process-helper";
import { spawnAsync } from "child-process-helper";
import { getDbPath } from "geo-parse";
import { rawPolygonToPolygon } from "geo-parse";
import { fetchWithTimeout } from "is-online";
import { isOnline } from "is-online";
import { dev } from "k-dev";
import { nodemon } from "nodemon";
import { loginToDevto } from "dev-to-controller";
import { publishBlogOnDevTo } from "dev-to-controller";
import { typeIntoTheField } from "dev-to-controller";
import { facebookPostOnTheGroup } from "facebook-controller";
import { facebookPost } from "facebook-controller";
import { facebookTimeLinePost } from "facebook-controller";
import { getLatestFacebookPostUrl } from "facebook-controller";
import { sendFacebookMessage } from "facebook-controller";
import { searchAndDownloadGifs } from "gif-controller";
import { buildQuery } from "google-translate-controller";
import { errArrayLenZero } from "google-translate-controller";
import { errFileSize } from "google-translate-controller";
import { errFileType } from "google-translate-controller";
import { errInvalidType } from "google-translate-controller";
import { errTextLenZero } from "google-translate-controller";
import { errTextOverflow } from "google-translate-controller";
import { generateArrayFromJson } from "google-translate-controller";
import { getStringForTranslation } from "google-translate-controller";
import { launch } from "google-translate-controller";
import { startTranslation } from "google-translate-controller";
import { storeResult } from "google-translate-controller";
import { translateText } from "google-translate-controller";
import { publishBlogOnMedium } from "medium-controller";
import { publishBlogOnReddit } from "reddit-controller";
import { addSocialMediaCredential } from "social-media-controller";
import { canBePosted } from "social-media-controller";
import { createAllSocialMediaPost } from "social-media-controller";
import { createSocialMediaPost } from "social-media-controller";
import { devtoCotentAnalyzer } from "social-media-controller";
import { facebookContentAnalyzer } from "social-media-controller";
import { getSocialMediaCredentials } from "social-media-controller";
import { mediumCotentAnalyzer } from "social-media-controller";
import { postSocialMediaPostToDevto } from "social-media-controller";
import { postSocialMediaPostToFacebook } from "social-media-controller";
import { postSocialMediaPostToMedium } from "social-media-controller";
import { postSocialMediaPostToReddit } from "social-media-controller";
import { postSocialMediaPostToTwitter } from "social-media-controller";
import { redditContentAnalyzer } from "social-media-controller";
import { socialMediaPostPlanner } from "social-media-controller";
import { startSocialMediaController } from "social-media-controller";
import { twitterContentAnalyzer } from "social-media-controller";
import { updateSocialMediaPost } from "social-media-controller";
import { getTwitterPostUrl } from "twitter-controller";
import { postTweetOnTwitter } from "twitter-controller";
import { youtubeSearchAndDownload } from "youtube-controller";
import { youtubeSearch } from "youtube-controller";
import { youtubeToMp3 } from "youtube-controller";
import { youtubeToMp4 } from "youtube-controller";
import { createFolder } from "markdown-translator";
import { getAllMarkdownFiles } from "markdown-translator";
import { getFileInfo } from "markdown-translator";
import { getTranslatedWord } from "markdown-translator";
import { markdownStoreAndRecord } from "markdown-translator";
import { parseMarkdownWordByWord } from "markdown-translator";
import { recordMdFile } from "markdown-translator";
import { startMarkdownTranslator } from "markdown-translator";
import { translatedArrayToKeyValue } from "markdown-translator";
import { watchMdFile } from "markdown-translator";
import { getFileContents } from "writer-functions";
import { getFrontmatterSchema } from "writer-functions";
import { moveFile } from "writer-functions";
import { newFile } from "writer-functions";
import { newFolder } from "writer-functions";
import { renameFilename } from "writer-functions";
import { saveFileContents } from "writer-functions";
import { makeExercises } from "course-basics";
import { driverLogin } from "himalayajeep-functions";
import { driverSignup } from "himalayajeep-functions";
import { getMyJeep } from "himalayajeep-functions";
import { getPublicJeeps } from "himalayajeep-functions";
import { calculateFullCompany } from "foodchain-recipes";
import { companyAttachContributionInformation } from "foodchain-recipes";
import { companyAttachEsgMetricProofStates } from "foodchain-recipes";
import { companyAttachRequirements } from "foodchain-recipes";
import { companyAttachTransparency } from "foodchain-recipes";
import { concatenateItems } from "foodchain-recipes";
import { contributionAddNextContributions } from "foodchain-recipes";
import { getActivities } from "foodchain-recipes";
import { getAverage } from "foodchain-recipes";
import { getCompanies } from "foodchain-recipes";
import { getCompanyRequirementDescription } from "foodchain-recipes";
import { getFinalProducts } from "foodchain-recipes";
import { getFullCompanyData } from "foodchain-recipes";
import { getIngredientProducts } from "foodchain-recipes";
import { getProductValueChainForProduct } from "foodchain-recipes";
import { getProductValueChain } from "foodchain-recipes";
import { getRequiredValueChainData } from "foodchain-recipes";
import { getSustainabilityPlan } from "foodchain-recipes";
import { hasEsgMetricWithStatus } from "foodchain-recipes";
import { requirementAppliesToCompany } from "foodchain-recipes";
import { requirementAttachProofStates } from "foodchain-recipes";
import { sumEsgMetricProofStates } from "foodchain-recipes";
import { parseAddress } from "parse-address-henrik";

export const sdk = { compressAsset,
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
folderGetUpdatedAt,
getExtension,
getFolderJs,
getSubExtension,
isPathRelative,
removeTrailingSlash,
withoutExtension,
getAssociatedMd,
getAvailableFolderPath,
getOperationBins,
getOperationPackageName,
getPackageJson,
getPackageSourcePaths,
isEqualArray,
renameTemplateFiles,
renameTemplateToNormalFile,
renameToTemplateFile,
setJsonKey,
setKeyAtLocation,
initiateWatch,
makeSubscription,
pickWatcher,
watchFoldersChokidar,
watchFoldersFs,
watchFolders,
writeToAssets,
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
exploreOperation,
exploreProject,
getExplorationType,
getFileWithExtension,
getFolderExplorationDetails,
getInstanceNames,
getProjectRelativePaths,
hasSameProjectPath,
getAllOperationSourcePaths,
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
startApp,
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
getOpenableFilePath,
vscodeOpen,
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
validateModel,
validate,
getBundleSummary,
getDbModelsForBundle,
createBackup,
getHumanReadableDate,
createDistribution,
filterInterfacesFromOperationNames,
getDbModelsFromOperations,
calculateBundleOperations,
calculateToPath,
copyDocsAndReadme,
copyFromRepoToNiche,
copyOperation,
copyReadmesBeforeFolderToBundle,
copyTodosIntoBundle,
findAndCopyOperations,
generateAllBundles,
generateBundle,
generateBundles,
getBundlePaths,
getIndirectDependencies,
mergeBundleConfigs,
syncInformation,
syncNicheFolder,
yarnInstall,
installNodeModules,
yarnInstallNewDistribution,
getTsFunction,
calculateDeviceName,
cleanupTimer,
executeFunctionWithParameters,
getHasAuthorization,
getNewPerformance,
storeFunctionExecution,
upsertDevice,
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
remindMeIn,
sayDutch,
sayLanguage,
sayNepali,
say,
askOk,
ask,
getArgumentOrAsk,
cliVersionUpdates,
handleVersionUpdates,
detectLanguage,
generateSimpleSentence,
makeAudioCourse,
pickRandomArrayItem,
sleep,
createWordSimplificationMap,
findBetterWords,
getSynonymFrequencyDataset,
preprocessSynonyms,
preprocessWordFrequencies,
speakWordsToLearn,
getAugmentedWordObject,
getAugmentedWords,
getBundleAugmentedWords,
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
getQueryPath,
sendMail,
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
sendSms,
mapArrayJson,
mapObjectJson,
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
readCsvFileSync,
readCsvFile,
readJsonFileSync,
readJsonFile,
readKvmdFile,
readMarkdownFileToModel,
readMarkdownFile,
getFolderTypescriptIndex,
readTypescriptFile,
getLocation,
getLight,
getPostableFrontmatterSchema,
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
getFrontmatterFunctionParameters,
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
minifyBuild,
getAvailableOperationName,
getOperationConfig,
newOperationWithFiles,
newOperation,
newTemplate,
buildPackage,
installMissingMonorepoDependencies,
obfucsate,
testPackage,
prettierOperation,
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
renameOperation,
runTestsForOperation,
runTests,
getAllTsMorphSourceFiles,
getHasGeneric,
getTsMorphProject,
exitIfOperationsChange,
gitCommitAllCron,
watchOperations,
execAsync,
spawnAsync,
getDbPath,
rawPolygonToPolygon,
fetchWithTimeout,
isOnline,
dev,
nodemon,
loginToDevto,
publishBlogOnDevTo,
typeIntoTheField,
facebookPostOnTheGroup,
facebookPost,
facebookTimeLinePost,
getLatestFacebookPostUrl,
sendFacebookMessage,
searchAndDownloadGifs,
buildQuery,
errArrayLenZero,
errFileSize,
errFileType,
errInvalidType,
errTextLenZero,
errTextOverflow,
generateArrayFromJson,
getStringForTranslation,
launch,
startTranslation,
storeResult,
translateText,
publishBlogOnMedium,
publishBlogOnReddit,
addSocialMediaCredential,
canBePosted,
createAllSocialMediaPost,
createSocialMediaPost,
devtoCotentAnalyzer,
facebookContentAnalyzer,
getSocialMediaCredentials,
mediumCotentAnalyzer,
postSocialMediaPostToDevto,
postSocialMediaPostToFacebook,
postSocialMediaPostToMedium,
postSocialMediaPostToReddit,
postSocialMediaPostToTwitter,
redditContentAnalyzer,
socialMediaPostPlanner,
startSocialMediaController,
twitterContentAnalyzer,
updateSocialMediaPost,
getTwitterPostUrl,
postTweetOnTwitter,
youtubeSearchAndDownload,
youtubeSearch,
youtubeToMp3,
youtubeToMp4,
createFolder,
getAllMarkdownFiles,
getFileInfo,
getTranslatedWord,
markdownStoreAndRecord,
parseMarkdownWordByWord,
recordMdFile,
startMarkdownTranslator,
translatedArrayToKeyValue,
watchMdFile,
getFileContents,
getFrontmatterSchema,
moveFile,
newFile,
newFolder,
renameFilename,
saveFileContents,
makeExercises,
driverLogin,
driverSignup,
getMyJeep,
getPublicJeeps,
calculateFullCompany,
companyAttachContributionInformation,
companyAttachEsgMetricProofStates,
companyAttachRequirements,
companyAttachTransparency,
concatenateItems,
contributionAddNextContributions,
getActivities,
getAverage,
getCompanies,
getCompanyRequirementDescription,
getFinalProducts,
getFullCompanyData,
getIngredientProducts,
getProductValueChainForProduct,
getProductValueChain,
getRequiredValueChainData,
getSustainabilityPlan,
hasEsgMetricWithStatus,
requirementAppliesToCompany,
requirementAttachProofStates,
sumEsgMetricProofStates,
parseAddress};

export type SdkType = typeof sdk;