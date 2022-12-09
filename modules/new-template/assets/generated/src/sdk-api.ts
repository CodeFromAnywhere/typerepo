import { controlChatGpt } from "ai-functions-node";
import { getContextualPromptResults } from "ai-functions-node";
import { getContextualPrompt } from "ai-functions-node";
import { getContextualPromptsArray } from "ai-functions-node";
import { getContextualPrompts } from "ai-functions-node";
import { getFolderRelativeScopeDbFilePath } from "ai-functions-node";
import { processChatGptPrompt } from "ai-functions-node";
import { compressAsset } from "asset-functions-node";
import { deleteReferencedAsset } from "asset-functions-node";
import { downloadRemoteAsset } from "asset-functions-node";
import { findAbsoluteAssetPathFromReference } from "asset-functions-node";
import { findAllProjectMedia } from "asset-functions-node";
import { getAssetDirectlyGetApi } from "asset-functions-node";
import { getReferencedAssetGetApi } from "asset-functions-node";
import { getStorageLocationInfo } from "asset-functions-node";
import { getTemporaryAssetsFolderPath } from "asset-functions-node";
import { processAsset } from "asset-functions-node";
import { processItemAssets } from "asset-functions-node";
import { removeOldTemporaryAssets } from "asset-functions-node";
import { serverDownloadReply } from "asset-functions-node";
import { uploadAssetWithContext } from "asset-functions-node";
import { folderGetUpdatedAt } from "folder-get-updated-at";
import { getExtension } from "fs-util-js";
import { getFileOrFolderName } from "fs-util-js";
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
import { getFrontmattersMappedObject } from "explore-project";
import { getInstanceNames } from "explore-project";
import { getProjectRelativePaths } from "explore-project";
import { getTodoPages } from "explore-project";
import { getTodoPaths } from "explore-project";
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
import { findFilesRecursively } from "k-explore";
import { pathArrayIsOperation } from "k-explore";
import { deleteApp } from "pm2-util";
import { listApps } from "pm2-util";
import { logApp } from "pm2-util";
import { logTableObject } from "pm2-util";
import { pm2ConnectDisconnect } from "pm2-util";
import { pm2Connect } from "pm2-util";
import { restartApp } from "pm2-util";
import { startApp } from "pm2-util";
import { stopAllAppsExcept } from "pm2-util";
import { stopApps } from "pm2-util";
import { watchAll } from "watch-all";
import { exitIfOperationsChange } from "watch-operations";
import { gitCommitAllCron } from "watch-operations";
import { watchOperations } from "watch-operations";
import { brigtnessFull } from "brightness";
import { brigtnessZero } from "brightness";
import { decreaseBrightness } from "brightness";
import { increaseBrightness } from "brightness";
import { macosSetup } from "clean-macos-setup";
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
import { sendMail } from "mail";
import { publishBlogOnMedium } from "medium-controller";
import { publishBlogOnReddit } from "reddit-controller";
import { sendSms } from "sms";
import { getTwitterPostUrl } from "twitter-controller";
import { postTweetOnTwitter } from "twitter-controller";
import { youtubeSearchAndDownload } from "youtube-controller";
import { youtubeSearch } from "youtube-controller";
import { youtubeToMp3 } from "youtube-controller";
import { youtubeToMp4 } from "youtube-controller";
import { getPort } from "get-port";
import { getBundleSummary } from "bundle-util";
import { getDbModelsForBundle } from "bundle-util";
import { createBackup } from "create-backup";
import { getHumanReadableDate } from "create-backup";
import { createDistribution } from "create-distribution";
import { filterInterfacesFromOperationNames } from "db-util";
import { getDbModelsFromOperations } from "db-util";
import { applyDataset } from "generate-bundle";
import { calculateBundleDependencies } from "generate-bundle";
import { calculateToPath } from "generate-bundle";
import { copyCodestories } from "generate-bundle";
import { copyDocsAndReadme } from "generate-bundle";
import { copyFromRepoToNiche } from "generate-bundle";
import { copyOperation } from "generate-bundle";
import { copyReadmesBeforeFolderToBundle } from "generate-bundle";
import { copyTodosIntoBundle } from "generate-bundle";
import { findAndCopyOperations } from "generate-bundle";
import { findInherited } from "generate-bundle";
import { generateAllBundles } from "generate-bundle";
import { generateBundle } from "generate-bundle";
import { generateBundles } from "generate-bundle";
import { getBundlePaths } from "generate-bundle";
import { getCompareFn } from "generate-bundle";
import { getDataset } from "generate-bundle";
import { getIndirectDependencies } from "generate-bundle";
import { getMatchingFilters } from "generate-bundle";
import { mergeBundleConfigs } from "generate-bundle";
import { syncInformation } from "generate-bundle";
import { syncNicheFolder } from "generate-bundle";
import { yarnInstall } from "generate-bundle";
import { installNodeModules } from "install-node-modules";
import { yarnInstallNewDistribution } from "yarn-install-new-distribution";
import { detectLanguage } from "detect-language";
import { generateSimpleSentence } from "generate-simple-sentence";
import { makeAudioCourse } from "generate-simple-sentence";
import { sleep } from "generate-simple-sentence";
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
import { createWordSimplificationMap } from "simplify-text";
import { findBetterWords } from "simplify-text";
import { getSynonymFrequencyDataset } from "simplify-text";
import { preprocessSynonyms } from "simplify-text";
import { preprocessWordFrequencies } from "simplify-text";
import { speakWordsToLearn } from "speak-words-to-learn";
import { createPaymentRequestWithContext } from "payment-node";
import { createPaymentTransactionWithContext } from "payment-node";
import { defaultResponse } from "payment-node";
import { fail } from "payment-node";
import { getPaymentWebPages } from "payment-node";
import { succeed } from "payment-node";
import { mapArrayJson } from "edit-json-file";
import { mapObjectJson } from "edit-json-file";
import { videoToMp3 } from "video-to-mp3";
import { unzip } from "unzip";
import { zip } from "zip";
import { csvItemArrayToCsvString } from "csv-util";
import { tryParseCsv } from "csv-util";
import { convertCsvToJson } from "xls-to-csv-json";
import { convertXlsToJson } from "xls-to-csv-json";
import { compressImage } from "ffmpeg-util";
import { compressImages } from "ffmpeg-util";
import { convertToMp3 } from "ffmpeg-util";
import { convertToMp4 } from "ffmpeg-util";
import { copyCopyPairs } from "collect-static-assets";
import { copyReaderStaticAssets } from "collect-static-assets";
import { findReaderStaticAssets } from "collect-static-assets";
import { findStaticAssets } from "collect-static-assets";
import { docToMd } from "doc-to-md";
import { docxToMd } from "doc-to-md";
import { addCodestoryToSection } from "make-codestory";
import { addModelName } from "make-codestory";
import { findCodestories } from "make-codestory";
import { makeCodespanMappedObject } from "make-codestory";
import { makeCodestory } from "make-codestory";
import { mapChunkRecursively } from "make-codestory";
import { mapMarkdownParseSections } from "make-codestory";
import { writeAllCodestories } from "make-codestory";
import { writeCodespanDetails } from "make-codestory";
import { addDependantCount } from "markdown-parsings";
import { bundleFolderWithMarkdown } from "markdown-parsings";
import { bundleToBookMarkdown } from "markdown-parsings";
import { bundleToMarkdown } from "markdown-parsings";
import { createMinimizedSectionMarkdown } from "markdown-parsings";
import { createMinimizedSection } from "markdown-parsings";
import { deployToVercel } from "markdown-parsings";
import { emailMarkdownParse } from "markdown-parsings";
import { flattenNestedObject } from "markdown-parsings";
import { generateStaticSite } from "markdown-parsings";
import { getJsonSchemaSummary } from "markdown-parsings";
import { getMarkdownContents } from "markdown-parsings";
import { getMergedMarkdownOutlineUrl } from "markdown-parsings";
import { getOperationSummary } from "markdown-parsings";
import { getOutline } from "markdown-parsings";
import { getPublicMarkdownNestedPathObject } from "markdown-parsings";
import { getTitlesRecursively } from "markdown-parsings";
import { getTypeDescriptorRecursive } from "markdown-parsings";
import { isConventionFileStatement } from "markdown-parsings";
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
import { statementItemToMarkdown } from "markdown-parsings";
import { tsFunctionToMarkdownString } from "markdown-parsings";
import { tsInterfaceToMarkdownString } from "markdown-parsings";
import { tsVariableToMarkdownString } from "markdown-parsings";
import { upMarkdownChunkLevelRecursively } from "markdown-parsings";
import { findAudioWithViewsArray } from "short-markdown-parser-js";
import { markdownParseToShortMarkdown } from "short-markdown-parser-js";
import { shortMarkdownToMarkdownParse } from "short-markdown-parser-js";
import { augmentShortMarkdown } from "short-markdown-parser-node";
import { fetchVoices } from "short-markdown-parser-node";
import { generateAugmentedShortMarkdown } from "short-markdown-parser-node";
import { getOrGenerateShortMarkdown } from "short-markdown-parser-node";
import { parseDialogue } from "short-markdown-parser-node";
import { uberduckGetPath } from "short-markdown-parser-node";
import { uberduckSpeak } from "short-markdown-parser-node";
import { voiceCloneDialogue } from "short-markdown-parser-node";
import { readCsvFileSync } from "read-csv-file";
import { readCsvFile } from "read-csv-file";
import { readJsonFileSync } from "read-json-file";
import { readJsonFile } from "read-json-file";
import { readProjectRelativeJsonFile } from "read-json-file";
import { readKvmdFile } from "read-kvmd-file";
import { readMarkdownFileToModel } from "read-markdown-file";
import { readMarkdownFile } from "read-markdown-file";
import { getFolderTypescriptIndex } from "read-typescript-file";
import { readTypescriptFile } from "read-typescript-file";
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
import { getDbModelMetadata } from "db-recipes";
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
import { validateResult } from "db-recipes";
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
import { waitForLockfile } from "fs-orm";
import { validateModel } from "validate-model";
import { validate } from "validate-model";
import { getFunctionExecutions } from "function-functions-node";
import { getFunctionQueryPaths } from "function-functions-node";
import { getPublicBundleConfig } from "function-functions-node";
import { getSrcRelativeFolderPath } from "function-functions-node";
import { getTsFunction } from "function-functions-node";
import { getAugmentedWordObject } from "augmented-word-node";
import { getAugmentedWords } from "augmented-word-node";
import { getBundleAugmentedWords } from "augmented-word-node";
import { codestoriesGetPages } from "codestorys-node";
import { codestoriesGetStaticPaths } from "codestorys-node";
import { codestoriesGetStaticProps } from "codestorys-node";
import { addPeerMessage } from "peer-functions";
import { addPeer } from "peer-functions";
import { augmentDevice } from "peer-functions";
import { deviceGetAppsCalculated } from "peer-functions";
import { getAllAppOperations } from "peer-functions";
import { getAugmentedPersons } from "peer-functions";
import { getFirstEmoji } from "peer-functions";
import { getNestedPathObject } from "peer-functions";
import { getPeerMessages } from "peer-functions";
import { getPeerPeople } from "peer-functions";
import { getPeersFromPeersRecursively } from "peer-functions";
import { getPublicFolderNestedPathObjectFromPeer } from "peer-functions";
import { getPublicFolderNestedPathObject } from "peer-functions";
import { getPublicPeers } from "peer-functions";
import { isPortUsed } from "peer-functions";
import { lateFetchPeerMessageSync } from "peer-functions";
import { ping } from "peer-functions";
import { proactivePushAddPeerMessage } from "peer-functions";
import { removePeer } from "peer-functions";
import { sortDevices } from "peer-functions";
import { updatePeer } from "peer-functions";
import { getPrimaryPersona } from "persona-functions-node";
import { youtubeToPlayItem } from "play-import-node";
import { getDayNumber } from "reminder-node";
import { remindMe } from "reminder-node";
import { getPostableFrontmatterSchema } from "social-media-functions";
import { getFileContents } from "writer-functions";
import { getFrontmatterSchema } from "writer-functions";
import { getWriterWebPagesMenu } from "writer-functions";
import { getWriterWebPages } from "writer-functions";
import { moveFile } from "writer-functions";
import { newFile } from "writer-functions";
import { newFolder } from "writer-functions";
import { processAssetUpload } from "writer-functions";
import { renameFilename } from "writer-functions";
import { saveFileContents } from "writer-functions";
import { getLight } from "get-light";
import { getLocation } from "get-location";
import { fetchWithTimeout } from "is-online";
import { isOnline } from "is-online";
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
import { cleanupTsDatabase } from "cleanup-typescript-database";
import { shouldDeleteTsModel } from "cleanup-typescript-database";
import { findAllDependencyOperations } from "find-all-dependency-operations";
import { findDependantsRecursively } from "find-all-dependency-operations";
import { findDependants } from "find-all-dependency-operations";
import { findDependenciesRecursively } from "find-all-dependency-operations";
import { findMonorepoModules } from "find-all-dependency-operations";
import { getDependencyObject } from "find-all-dependency-operations";
import { getDependencyTree } from "find-all-dependency-operations";
import { generateBunMonopackage } from "generate-bun-monopackage";
import { getItemNewPath } from "generate-bun-monopackage";
import { generateNamedIndex } from "generate-index";
import { generateSimpleIndex } from "generate-index";
import { isTestFn } from "generate-index";
import { mapToImportStatement } from "generate-index";
import { generateDbSdk } from "generate-sdk-operations";
import { generateEnvSdks } from "generate-sdk-operations";
import { generateFunctionPathsSdk } from "generate-sdk-operations";
import { generateFunctionSdks } from "generate-sdk-operations";
import { generateInterfacePathsSdk } from "generate-sdk-operations";
import { generateOperationsSdk } from "generate-sdk-operations";
import { generateSdkApiWatcher } from "generate-sdk-operations";
import { generateSdkApi } from "generate-sdk-operations";
import { generateSdkOperations } from "generate-sdk-operations";
import { getFunctionSdksContent } from "generate-sdk-operations";
import { getSdkDescription } from "generate-sdk-operations";
import { getSdkFunctionsPerClassification } from "generate-sdk-operations";
import { isNonUiOperationBuild } from "generate-sdk-operations";
import { newEnvSdk } from "generate-sdk-operations";
import { newFunctionKeysSdkOperation } from "generate-sdk-operations";
import { newFunctionSdkOperation } from "generate-sdk-operations";
import { tsFunctionIsIndexable } from "generate-sdk-operations";
import { tsFunctionIsSdkable } from "generate-sdk-operations";
import { updateClassifications } from "generate-sdk-operations";
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
import { hasTypescriptFileChanged } from "index-typescript";
import { indexImportsExportsForFilePath } from "index-typescript";
import { indexTypescriptFilePath } from "index-typescript";
import { indexTypescriptFile } from "index-typescript";
import { indexTypescript } from "index-typescript";
import { isPrimitive } from "index-typescript";
import { makeTsComment } from "index-typescript";
import { removeTypescriptIndex } from "index-typescript";
import { schemaToTsInterface } from "index-typescript";
import { tryCreateSchema } from "index-typescript";
import { typeToSchema } from "index-typescript";
import { preIndexLint } from "lint";
import { minifyBuild } from "minify-build";
import { getAvailableOperationName } from "new-template";
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
import { createSimpleTypescriptFile } from "simple-typescript-node";
import { runTestsForOperation } from "k-test";
import { runTests } from "k-test";
import { getAllTsMorphSourceFiles } from "ts-morph-util";
import { getHasGeneric } from "ts-morph-util";
import { getTsMorphProject } from "ts-morph-util";
import { comparePassword } from "encrypt-password";
import { encryptPassword } from "encrypt-password";
import { calculateDeviceName } from "function-server-endpoints";
import { executeFunctionWithParameters } from "function-server-endpoints";
import { getAuthorizationInfo } from "function-server-endpoints";
import { isGetEndpoint } from "function-server-endpoints";
import { savePageVisit } from "function-server-endpoints";
import { storeFunctionExecution } from "function-server-endpoints";
import { upsertDevice } from "function-server-endpoints";
import { addAuthenticationMethod } from "server-login";
import { addDeviceAuthenticationMethodConfirm } from "server-login";
import { addDeviceAuthenticationMethodWithContext } from "server-login";
import { addPersonAuthenticationMethodWithContext } from "server-login";
import { findAuthenticatedPersonWithHandle } from "server-login";
import { findLoggedinPersonsWithContext } from "server-login";
import { getMeWithContext } from "server-login";
import { getPublicPerson } from "server-login";
import { getPublicPersons } from "server-login";
import { isPhoneNumber } from "server-login";
import { isValidPassword } from "server-login";
import { loginWithContext } from "server-login";
import { loginWithPasswordWithContext } from "server-login";
import { logoutWithContext } from "server-login";
import { removeDeviceAuthenticationMethodWithContext } from "server-login";
import { removePersonAuthenticationMethodWithContext } from "server-login";
import { signupWithContext } from "server-login";
import { signupWithPasswordWithContext } from "server-login";
import { switchCurrentPersonWithContext } from "server-login";
import { updateMeWithContext } from "server-login";
import { sayDutch } from "say";
import { sayLanguage } from "say";
import { sayNepali } from "say";
import { saySomething } from "say";
import { textToMp3 } from "say";
import { askOk } from "ask";
import { ask } from "ask";
import { getArgumentOrAsk } from "ask";
import { cliVersionUpdates } from "cli-version-updates";
import { handleVersionUpdates } from "cli-version-updates";
import { execAsync } from "child-process-helper";
import { spawnAsync } from "child-process-helper";
import { executeCommand } from "execute-command";
import { getCommand } from "execute-command";
import { isCommandPerOs } from "execute-command";
import { getDbPath } from "geo-parse";
import { rawPolygonToPolygon } from "geo-parse";
import { dev } from "k-dev";
import { nodemon } from "nodemon";
import { checkAndGetFileUrl } from "slack-controller";
import { elementExists } from "slack-controller";
import { getAllMessages } from "slack-controller";
import { getLatestMessages } from "slack-controller";
import { getSlackChannelMemberList } from "slack-controller";
import { getSlackChannels } from "slack-controller";
import { getSlackMessageFrom } from "slack-controller";
import { getSlackWorkspaces } from "slack-controller";
import { scrapeMessage } from "slack-controller";
import { scrollToTop } from "slack-controller";
import { selectChannel } from "slack-controller";
import { selectWorkSpace } from "slack-controller";
import { sendSlackMessage } from "slack-controller";
import { slackLogin } from "slack-controller";
import { storeAllSlackChannel } from "slack-controller";
import { storeSlackChannelMember } from "slack-controller";
import { getSocialMediaMenu } from "social-media-node";
import { addSocialMediaCredential } from "social-media-wrapper";
import { canBePosted } from "social-media-wrapper";
import { createAllSocialMediaPost } from "social-media-wrapper";
import { createSocialMediaPost } from "social-media-wrapper";
import { devtoCotentAnalyzer } from "social-media-wrapper";
import { facebookContentAnalyzer } from "social-media-wrapper";
import { getSocialMediaCredentials } from "social-media-wrapper";
import { getTodoFilePostables } from "social-media-wrapper";
import { getWebMarkdownFilePostables } from "social-media-wrapper";
import { mediumCotentAnalyzer } from "social-media-wrapper";
import { postSocialMediaPostToDevto } from "social-media-wrapper";
import { postSocialMediaPostToFacebook } from "social-media-wrapper";
import { postSocialMediaPostToMedium } from "social-media-wrapper";
import { postSocialMediaPostToReddit } from "social-media-wrapper";
import { postSocialMediaPostToTwitter } from "social-media-wrapper";
import { redditContentAnalyzer } from "social-media-wrapper";
import { socialMediaPostPlanner } from "social-media-wrapper";
import { startSocialMediaController } from "social-media-wrapper";
import { twitterContentAnalyzer } from "social-media-wrapper";
import { updateSocialMediaPost } from "social-media-wrapper";
import { makeExercises } from "course-basics";
import { driverLogin } from "himalayajeep-functions";
import { driverSignup } from "himalayajeep-functions";
import { earthDistance } from "himalayajeep-functions";
import { getMyJeep } from "himalayajeep-functions";
import { getPublicJeeps } from "himalayajeep-functions";
import { updateMyProfile } from "himalayajeep-functions";
import { getAllOperations } from "github-operation-sync";
import { getAllPackagesNames } from "github-operation-sync";
import { getGithubPersonalAccessToken } from "github-operation-sync";
import { getGithubRepoLastCommitInfo } from "github-operation-sync";
import { getRepoNameFromRepositoryUrl } from "github-operation-sync";
import { initializeGitOrUseExistingAndPull } from "github-operation-sync";
import { operationGithubPull } from "github-operation-sync";
import { operationGithubPush } from "github-operation-sync";
import { pullMultipleOperations } from "github-operation-sync";
import { pushMultipleOperations } from "github-operation-sync";
import { readAndWriteToPackageJsonExample } from "github-operation-sync";
import { updateAllOperationStatus } from "github-operation-sync";
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
import { getFinalProducts } from "foodchain-recipes";
import { getFullCompanyData } from "foodchain-recipes";
import { getIngredientProducts } from "foodchain-recipes";
import { getProductValueChainForProduct } from "foodchain-recipes";
import { getProductValueChain } from "foodchain-recipes";
import { getRequiredValueChainData } from "foodchain-recipes";
import { getSustainabilityPlan } from "foodchain-recipes";
import { hasEsgMetricWithStatus } from "foodchain-recipes";
import { requirementAttachProofStates } from "foodchain-recipes";
import { sumEsgMetricProofStates } from "foodchain-recipes";
import { getCompanyRequirementDescription } from "foodchain-recipes-js";
import { requirementAppliesToCompany } from "foodchain-recipes-js";
import { parseAddress } from "parse-address-henrik";
import { addToken } from "asset-functions-js";
import { ensureToken } from "asset-functions-js";
import { findAssetParametersRecursively } from "asset-functions-js";
import { getAssetDirectlyApiUrl } from "asset-functions-js";
import { getConversionInfoFromType } from "asset-functions-js";
import { getExtensionFromAsset } from "asset-functions-js";
import { getNameFromRelativePath } from "asset-functions-js";
import { getNameWithTokenFromRelativePath } from "asset-functions-js";
import { getReferencedAssetApiUrl } from "asset-functions-js";
import { getTypeFromUrlOrPath } from "asset-functions-js";
import { readableSize } from "asset-functions-js";
import { removeTokenIfPresent } from "asset-functions-js";
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
import { makeRelative } from "get-path";
import { packageCompilesTs } from "get-path";
import { tsconfigCompilesEsm } from "get-path";
import { getDependenciesSummary } from "operation-util";
import { getOperationMetaData } from "operation-util";
import { recalculateOperationIndexJson } from "operation-util";
import { getFileTypeFromPath } from "filename-conventions";
import { getWriterType } from "filename-conventions";
import { hasSubExtension } from "filename-conventions";
import { isGeneratedOperationName } from "filename-conventions";
import { isGeneratedOperation } from "filename-conventions";
import { isIndexableFileId } from "filename-conventions";
import { getAssetInputType } from "name-conventions";
import { getParameterContentType } from "name-conventions";
import { isCalculatedParameter } from "name-conventions";
import { isGeneratedParameterName } from "name-conventions";
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
import { findCodespans } from "marked-util";
import { findEmbeds } from "marked-util";
import { findLinks } from "marked-util";
import { flattenMarkdownString } from "marked-util";
import { flattenMarkedTokenRecursive } from "marked-util";
import { parsePrimitiveArray } from "parse-primitive";
import { parsePrimitiveBoolean } from "parse-primitive";
import { parsePrimitiveString } from "parse-primitive";
import { parsePrimitive } from "parse-primitive";
import { tryParseJson } from "try-parse-json";
import { bodyFromQueryString } from "rest-util";
import { getFirstQueryStrings } from "rest-util";
import { getQueryPart } from "rest-util";
import { isValidEntry } from "rest-util";
import { toQueryString } from "rest-util";
import { findSentenceMatches } from "search";
import { searchRecursiveObjectArray } from "search";
import { frontmatterParseToString } from "frontmatter-util";
import { frontmatterToObject } from "frontmatter-util";
import { getFrontmatterValueString } from "frontmatter-util";
import { objectToFrontmatter } from "frontmatter-util";
import { parseFrontmatterString } from "frontmatter-util";
import { quotedOrNot } from "frontmatter-util";
import { stringifyNewlines } from "frontmatter-util";
import { getFunctionExersize } from "code-types";
import { createInvoiceContactMarkdown } from "invoice-types";
import { createInvoiceMarkdown } from "invoice-types";
import { createKeyValueMarkdown } from "invoice-types";
import { money } from "invoice-types";
import { newInvoice } from "invoice-types";
import { printDate } from "invoice-types";
import { markdownParseToMarkdownModelType } from "markdown-types";
import { parseMarkdownModelTimestamp } from "markdown-types";
import { tryParseDate } from "markdown-types";
import { generateId } from "model-types";
import { generatePassword } from "model-types";
import { generateRandomString } from "model-types";
import { generateTime } from "model-types";
import { isEmail } from "model-types";
import { markdownModelTypeToMarkdownString } from "model-types";
import { createUser } from "os-types";
import { getBacktickContents } from "os-types";
import { isInPeriod } from "os-types";
import { isOutOfStock } from "os-types";
import { kvmdToCredential } from "os-types";
import { upcomingOutgoingFlights } from "os-types";
import { whereShouldIgo } from "os-types";
import { crudPageToWebPages } from "webpage-types";
import { functionFormPageToWebPage } from "webpage-types";
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
import { getSimpleTypescriptFileString } from "simple-typescript-js";
import { jsonToString } from "simple-typescript-js";
import { parseRawSimpleTypescriptFile } from "simple-typescript-js";
import { isResultOfInterface } from "make-test";
import { makeTest } from "make-test";
import { getGetApiUrl } from "api";
import { untypedApiFunction } from "api";
import { makeArraysGetEndpoint } from "endpoint-util";
import { makeGetEndpoint } from "endpoint-util";
import { objectStringToJson } from "string-to-json";
import { parseIfJson } from "string-to-json";
import { parsePrimitiveJson } from "string-to-json";
import { stringToJson } from "string-to-json";
import { getFullPath } from "next-paths";
import { getLastPathsChunk } from "next-paths";
import { usePath } from "next-paths";
import { createCodeblockMarkdown } from "ui-util";
import { useCustomUrlStore } from "use-url-store";
import { getKeysAtPathFromNestedObject } from "recursive-util";
import { getMenuPagesObject } from "recursive-util";
import { makeNestedObjectFromQueryPathObject } from "recursive-util";
import { nestedObjectToChildObject } from "recursive-util";
import { nestedPathObjectToNestedMenuRecursive } from "recursive-util";
import { nestifyQueryPathObjectRecursive } from "recursive-util";
import { queryPathsArrayToNestedPathObject } from "recursive-util";
import { reduceQueryPathsRecursively } from "recursive-util";
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
import { getCallerFileName } from "log";
import { log } from "log";
import { parseTitle } from "log";
import { cleanupTimer } from "measure-performance";
import { generateUniqueId } from "measure-performance";
import { getNewPerformance } from "measure-performance";
import { oneByOne } from "one-by-one";
import { isPlural } from "pluralize";
import { isSingular } from "pluralize";
import { pluralize } from "pluralize";
import { singularize } from "pluralize";
import { runChildProcess } from "run-child-process";
import { clickOnSpanTag } from "puppeteer-utils";
import { facebookLogin } from "puppeteer-utils";
import { foundOrNotXpath } from "puppeteer-utils";
import { foundOrNot } from "puppeteer-utils";
import { getChromeExecutablePath } from "puppeteer-utils";
import { gmailLogin } from "puppeteer-utils";
import { logConsoleIfDebug } from "puppeteer-utils";
import { retryClickAndWaitSelector } from "puppeteer-utils";
import { retryWaitSelector } from "puppeteer-utils";
import { setInnerHtml } from "puppeteer-utils";
import { setInputValue } from "puppeteer-utils";
import { trueClick } from "puppeteer-utils";
import { twitterLogin } from "puppeteer-utils";
import { typeInTheInputField } from "puppeteer-utils";
import { typeOnTheTargetWithXpathSelector } from "puppeteer-utils";
import { waitMilliseconds } from "puppeteer-utils";

export const sdk = { controlChatGpt,
getContextualPromptResults,
getContextualPrompt,
getContextualPromptsArray,
getContextualPrompts,
getFolderRelativeScopeDbFilePath,
processChatGptPrompt,
compressAsset,
deleteReferencedAsset,
downloadRemoteAsset,
findAbsoluteAssetPathFromReference,
findAllProjectMedia,
getAssetDirectlyGetApi,
getReferencedAssetGetApi,
getStorageLocationInfo,
getTemporaryAssetsFolderPath,
processAsset,
processItemAssets,
removeOldTemporaryAssets,
serverDownloadReply,
uploadAssetWithContext,
folderGetUpdatedAt,
getExtension,
getFileOrFolderName,
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
getFrontmattersMappedObject,
getInstanceNames,
getProjectRelativePaths,
getTodoPages,
getTodoPaths,
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
findFilesRecursively,
pathArrayIsOperation,
deleteApp,
listApps,
logApp,
logTableObject,
pm2ConnectDisconnect,
pm2Connect,
restartApp,
startApp,
stopAllAppsExcept,
stopApps,
watchAll,
exitIfOperationsChange,
gitCommitAllCron,
watchOperations,
brigtnessFull,
brigtnessZero,
decreaseBrightness,
increaseBrightness,
macosSetup,
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
sendMail,
publishBlogOnMedium,
publishBlogOnReddit,
sendSms,
getTwitterPostUrl,
postTweetOnTwitter,
youtubeSearchAndDownload,
youtubeSearch,
youtubeToMp3,
youtubeToMp4,
getPort,
getBundleSummary,
getDbModelsForBundle,
createBackup,
getHumanReadableDate,
createDistribution,
filterInterfacesFromOperationNames,
getDbModelsFromOperations,
applyDataset,
calculateBundleDependencies,
calculateToPath,
copyCodestories,
copyDocsAndReadme,
copyFromRepoToNiche,
copyOperation,
copyReadmesBeforeFolderToBundle,
copyTodosIntoBundle,
findAndCopyOperations,
findInherited,
generateAllBundles,
generateBundle,
generateBundles,
getBundlePaths,
getCompareFn,
getDataset,
getIndirectDependencies,
getMatchingFilters,
mergeBundleConfigs,
syncInformation,
syncNicheFolder,
yarnInstall,
installNodeModules,
yarnInstallNewDistribution,
detectLanguage,
generateSimpleSentence,
makeAudioCourse,
sleep,
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
createWordSimplificationMap,
findBetterWords,
getSynonymFrequencyDataset,
preprocessSynonyms,
preprocessWordFrequencies,
speakWordsToLearn,
createPaymentRequestWithContext,
createPaymentTransactionWithContext,
defaultResponse,
fail,
getPaymentWebPages,
succeed,
mapArrayJson,
mapObjectJson,
videoToMp3,
unzip,
zip,
csvItemArrayToCsvString,
tryParseCsv,
convertCsvToJson,
convertXlsToJson,
compressImage,
compressImages,
convertToMp3,
convertToMp4,
copyCopyPairs,
copyReaderStaticAssets,
findReaderStaticAssets,
findStaticAssets,
docToMd,
docxToMd,
addCodestoryToSection,
addModelName,
findCodestories,
makeCodespanMappedObject,
makeCodestory,
mapChunkRecursively,
mapMarkdownParseSections,
writeAllCodestories,
writeCodespanDetails,
addDependantCount,
bundleFolderWithMarkdown,
bundleToBookMarkdown,
bundleToMarkdown,
createMinimizedSectionMarkdown,
createMinimizedSection,
deployToVercel,
emailMarkdownParse,
flattenNestedObject,
generateStaticSite,
getJsonSchemaSummary,
getMarkdownContents,
getMergedMarkdownOutlineUrl,
getOperationSummary,
getOutline,
getPublicMarkdownNestedPathObject,
getTitlesRecursively,
getTypeDescriptorRecursive,
isConventionFileStatement,
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
statementItemToMarkdown,
tsFunctionToMarkdownString,
tsInterfaceToMarkdownString,
tsVariableToMarkdownString,
upMarkdownChunkLevelRecursively,
findAudioWithViewsArray,
markdownParseToShortMarkdown,
shortMarkdownToMarkdownParse,
augmentShortMarkdown,
fetchVoices,
generateAugmentedShortMarkdown,
getOrGenerateShortMarkdown,
parseDialogue,
uberduckGetPath,
uberduckSpeak,
voiceCloneDialogue,
readCsvFileSync,
readCsvFile,
readJsonFileSync,
readJsonFile,
readProjectRelativeJsonFile,
readKvmdFile,
readMarkdownFileToModel,
readMarkdownFile,
getFolderTypescriptIndex,
readTypescriptFile,
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
getDbModelMetadata,
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
validateResult,
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
waitForLockfile,
validateModel,
validate,
getFunctionExecutions,
getFunctionQueryPaths,
getPublicBundleConfig,
getSrcRelativeFolderPath,
getTsFunction,
getAugmentedWordObject,
getAugmentedWords,
getBundleAugmentedWords,
codestoriesGetPages,
codestoriesGetStaticPaths,
codestoriesGetStaticProps,
addPeerMessage,
addPeer,
augmentDevice,
deviceGetAppsCalculated,
getAllAppOperations,
getAugmentedPersons,
getFirstEmoji,
getNestedPathObject,
getPeerMessages,
getPeerPeople,
getPeersFromPeersRecursively,
getPublicFolderNestedPathObjectFromPeer,
getPublicFolderNestedPathObject,
getPublicPeers,
isPortUsed,
lateFetchPeerMessageSync,
ping,
proactivePushAddPeerMessage,
removePeer,
sortDevices,
updatePeer,
getPrimaryPersona,
youtubeToPlayItem,
getDayNumber,
remindMe,
getPostableFrontmatterSchema,
getFileContents,
getFrontmatterSchema,
getWriterWebPagesMenu,
getWriterWebPages,
moveFile,
newFile,
newFolder,
processAssetUpload,
renameFilename,
saveFileContents,
getLight,
getLocation,
fetchWithTimeout,
isOnline,
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
cleanupTsDatabase,
shouldDeleteTsModel,
findAllDependencyOperations,
findDependantsRecursively,
findDependants,
findDependenciesRecursively,
findMonorepoModules,
getDependencyObject,
getDependencyTree,
generateBunMonopackage,
getItemNewPath,
generateNamedIndex,
generateSimpleIndex,
isTestFn,
mapToImportStatement,
generateDbSdk,
generateEnvSdks,
generateFunctionPathsSdk,
generateFunctionSdks,
generateInterfacePathsSdk,
generateOperationsSdk,
generateSdkApiWatcher,
generateSdkApi,
generateSdkOperations,
getFunctionSdksContent,
getSdkDescription,
getSdkFunctionsPerClassification,
isNonUiOperationBuild,
newEnvSdk,
newFunctionKeysSdkOperation,
newFunctionSdkOperation,
tsFunctionIsIndexable,
tsFunctionIsSdkable,
updateClassifications,
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
hasTypescriptFileChanged,
indexImportsExportsForFilePath,
indexTypescriptFilePath,
indexTypescriptFile,
indexTypescript,
isPrimitive,
makeTsComment,
removeTypescriptIndex,
schemaToTsInterface,
tryCreateSchema,
typeToSchema,
preIndexLint,
minifyBuild,
getAvailableOperationName,
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
createSimpleTypescriptFile,
runTestsForOperation,
runTests,
getAllTsMorphSourceFiles,
getHasGeneric,
getTsMorphProject,
comparePassword,
encryptPassword,
calculateDeviceName,
executeFunctionWithParameters,
getAuthorizationInfo,
isGetEndpoint,
savePageVisit,
storeFunctionExecution,
upsertDevice,
addAuthenticationMethod,
addDeviceAuthenticationMethodConfirm,
addDeviceAuthenticationMethodWithContext,
addPersonAuthenticationMethodWithContext,
findAuthenticatedPersonWithHandle,
findLoggedinPersonsWithContext,
getMeWithContext,
getPublicPerson,
getPublicPersons,
isPhoneNumber,
isValidPassword,
loginWithContext,
loginWithPasswordWithContext,
logoutWithContext,
removeDeviceAuthenticationMethodWithContext,
removePersonAuthenticationMethodWithContext,
signupWithContext,
signupWithPasswordWithContext,
switchCurrentPersonWithContext,
updateMeWithContext,
sayDutch,
sayLanguage,
sayNepali,
saySomething,
textToMp3,
askOk,
ask,
getArgumentOrAsk,
cliVersionUpdates,
handleVersionUpdates,
execAsync,
spawnAsync,
executeCommand,
getCommand,
isCommandPerOs,
getDbPath,
rawPolygonToPolygon,
dev,
nodemon,
checkAndGetFileUrl,
elementExists,
getAllMessages,
getLatestMessages,
getSlackChannelMemberList,
getSlackChannels,
getSlackMessageFrom,
getSlackWorkspaces,
scrapeMessage,
scrollToTop,
selectChannel,
selectWorkSpace,
sendSlackMessage,
slackLogin,
storeAllSlackChannel,
storeSlackChannelMember,
getSocialMediaMenu,
addSocialMediaCredential,
canBePosted,
createAllSocialMediaPost,
createSocialMediaPost,
devtoCotentAnalyzer,
facebookContentAnalyzer,
getSocialMediaCredentials,
getTodoFilePostables,
getWebMarkdownFilePostables,
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
makeExercises,
driverLogin,
driverSignup,
earthDistance,
getMyJeep,
getPublicJeeps,
updateMyProfile,
getAllOperations,
getAllPackagesNames,
getGithubPersonalAccessToken,
getGithubRepoLastCommitInfo,
getRepoNameFromRepositoryUrl,
initializeGitOrUseExistingAndPull,
operationGithubPull,
operationGithubPush,
pullMultipleOperations,
pushMultipleOperations,
readAndWriteToPackageJsonExample,
updateAllOperationStatus,
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
getFinalProducts,
getFullCompanyData,
getIngredientProducts,
getProductValueChainForProduct,
getProductValueChain,
getRequiredValueChainData,
getSustainabilityPlan,
hasEsgMetricWithStatus,
requirementAttachProofStates,
sumEsgMetricProofStates,
getCompanyRequirementDescription,
requirementAppliesToCompany,
parseAddress,
addToken,
ensureToken,
findAssetParametersRecursively,
getAssetDirectlyApiUrl,
getConversionInfoFromType,
getExtensionFromAsset,
getNameFromRelativePath,
getNameWithTokenFromRelativePath,
getReferencedAssetApiUrl,
getTypeFromUrlOrPath,
readableSize,
removeTokenIfPresent,
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
makeRelative,
packageCompilesTs,
tsconfigCompilesEsm,
getDependenciesSummary,
getOperationMetaData,
recalculateOperationIndexJson,
getFileTypeFromPath,
getWriterType,
hasSubExtension,
isGeneratedOperationName,
isGeneratedOperation,
isIndexableFileId,
getAssetInputType,
getParameterContentType,
isCalculatedParameter,
isGeneratedParameterName,
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
findCodespans,
findEmbeds,
findLinks,
flattenMarkdownString,
flattenMarkedTokenRecursive,
parsePrimitiveArray,
parsePrimitiveBoolean,
parsePrimitiveString,
parsePrimitive,
tryParseJson,
bodyFromQueryString,
getFirstQueryStrings,
getQueryPart,
isValidEntry,
toQueryString,
findSentenceMatches,
searchRecursiveObjectArray,
frontmatterParseToString,
frontmatterToObject,
getFrontmatterValueString,
objectToFrontmatter,
parseFrontmatterString,
quotedOrNot,
stringifyNewlines,
getFunctionExersize,
createInvoiceContactMarkdown,
createInvoiceMarkdown,
createKeyValueMarkdown,
money,
newInvoice,
printDate,
markdownParseToMarkdownModelType,
parseMarkdownModelTimestamp,
tryParseDate,
generateId,
generatePassword,
generateRandomString,
generateTime,
isEmail,
markdownModelTypeToMarkdownString,
createUser,
getBacktickContents,
isInPeriod,
isOutOfStock,
kvmdToCredential,
upcomingOutgoingFlights,
whereShouldIgo,
crudPageToWebPages,
functionFormPageToWebPage,
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
getSimpleTypescriptFileString,
jsonToString,
parseRawSimpleTypescriptFile,
isResultOfInterface,
makeTest,
getGetApiUrl,
untypedApiFunction,
makeArraysGetEndpoint,
makeGetEndpoint,
objectStringToJson,
parseIfJson,
parsePrimitiveJson,
stringToJson,
getFullPath,
getLastPathsChunk,
usePath,
createCodeblockMarkdown,
useCustomUrlStore,
getKeysAtPathFromNestedObject,
getMenuPagesObject,
makeNestedObjectFromQueryPathObject,
nestedObjectToChildObject,
nestedPathObjectToNestedMenuRecursive,
nestifyQueryPathObjectRecursive,
queryPathsArrayToNestedPathObject,
reduceQueryPathsRecursively,
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
getCallerFileName,
log,
parseTitle,
cleanupTimer,
generateUniqueId,
getNewPerformance,
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
waitMilliseconds};

export type SdkType = typeof sdk;