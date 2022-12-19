import { codestoriesGetPages } from "codestorys-node";
import { codestoriesGetStaticPaths } from "codestorys-node";
import { codestoriesGetStaticProps } from "codestorys-node";
import { copyCopyPairs } from "collect-static-assets";
import { copyReaderStaticAssets } from "collect-static-assets";
import { findReaderStaticAssets } from "collect-static-assets";
import { findStaticAssets } from "collect-static-assets";
import { addCodestoryToSection } from "make-codestory";
import { addModelName } from "make-codestory";
import { findCodestories } from "make-codestory";
import { makeCodespanMappedObject } from "make-codestory";
import { makeCodestory } from "make-codestory";
import { mapChunkRecursively } from "make-codestory";
import { mapMarkdownParseSections } from "make-codestory";
import { writeAllCodestories } from "make-codestory";
import { writeCodespanDetails } from "make-codestory";
import { addStatement } from "ai-functions-node";
import { addWord } from "ai-functions-node";
import { biggestFunctionName } from "ai-functions-node";
import { checkQueue } from "ai-functions-node";
import { cleanup } from "ai-functions-node";
import { controlChatGptWrapper } from "ai-functions-node";
import { controlChatGpt } from "ai-functions-node";
import { convertTo1337speak } from "ai-functions-node";
import { deletePromptResult } from "ai-functions-node";
import { developersQuote } from "ai-functions-node";
import { diaryToInstagram } from "ai-functions-node";
import { documentationWriting } from "ai-functions-node";
import { emojiAugmentation } from "ai-functions-node";
import { explainInDutch } from "ai-functions-node";
import { explainInNepali } from "ai-functions-node";
import { explainInPortuguese } from "ai-functions-node";
import { explain } from "ai-functions-node";
import { fixGrammarAndSpellingMistakes } from "ai-functions-node";
import { getContextualPromptCategories } from "ai-functions-node";
import { getContextualPromptResultJsonFilePath } from "ai-functions-node";
import { getContextualPrompt } from "ai-functions-node";
import { getObjectForkKeyRecursively } from "ai-functions-node";
import { gptIdeasRegisterWithContext } from "ai-functions-node";
import { haiku } from "ai-functions-node";
import { improveCode } from "ai-functions-node";
import { keywords } from "ai-functions-node";
import { marcusAurelius } from "ai-functions-node";
import { poem } from "ai-functions-node";
import { processChatGptPrompt } from "ai-functions-node";
import { processPromptOnFile } from "ai-functions-node";
import { processPromptOnFolder } from "ai-functions-node";
import { removeAllFake } from "ai-functions-node";
import { rickAndMortyRick } from "ai-functions-node";
import { rickAndMorty } from "ai-functions-node";
import { setIsFavoritePromptResult } from "ai-functions-node";
import { socratesAndSnoopDogg } from "ai-functions-node";
import { storytelling } from "ai-functions-node";
import { translateEverythingIntoHindi } from "ai-functions-node";
import { translateEverythingPortuguese } from "ai-functions-node";
import { translateEverything } from "ai-functions-node";
import { translateToPortuguese } from "ai-functions-node";
import { typescriptExplain } from "ai-functions-node";
import { williamShakespear } from "ai-functions-node";
import { writeContextualPromptSdk } from "ai-functions-node";
import { writeCreatePromptCode } from "ai-functions-node";
import { ye } from "ai-functions-node";
import { yodafy } from "ai-functions-node";
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
import { getAugmentedWordObject } from "augmented-word-node";
import { getAugmentedWords } from "augmented-word-node";
import { getBundleAugmentedWords } from "augmented-word-node";
import { getBundleSummary } from "bundle-util";
import { getDbModelsForBundle } from "bundle-util";
import { chatGPTAuth } from "chatgpt-controller";
import { detectChatGptPage } from "chatgpt-controller";
import { openAIChat } from "chatgpt-controller";
import { execAsync } from "child-process-helper";
import { spawnAsync } from "child-process-helper";
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
import { filterInterfacesFromOperationNames } from "db-util";
import { getDbModelsFromOperations } from "db-util";
import { comparePassword } from "encrypt-password";
import { encryptPassword } from "encrypt-password";
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
import { compressImage } from "ffmpeg-util";
import { compressImages } from "ffmpeg-util";
import { compressMp4 } from "ffmpeg-util";
import { convertToMp3 } from "ffmpeg-util";
import { convertToMp4 } from "ffmpeg-util";
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
import { waitForLockfile } from "fs-orm";
import { getExtension } from "fs-util-js";
import { getFileOrFolderName } from "fs-util-js";
import { getFolderJs } from "fs-util-js";
import { getSubExtension } from "fs-util-js";
import { isPathRelative } from "fs-util-js";
import { makeRelative } from "fs-util-js";
import { removeTrailingSlash } from "fs-util-js";
import { withoutExtension } from "fs-util-js";
import { getFunctionExecutions } from "function-functions-node";
import { getFunctionQueryPaths } from "function-functions-node";
import { getPublicBundleConfig } from "function-functions-node";
import { getSrcRelativeFolderPath } from "function-functions-node";
import { getTsFunction } from "function-functions-node";
import { calculateDeviceName } from "function-server-endpoints";
import { executeFunctionWithParameters } from "function-server-endpoints";
import { getAuthorizationInfo } from "function-server-endpoints";
import { isGetEndpoint } from "function-server-endpoints";
import { savePageVisit } from "function-server-endpoints";
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
import { findFilesRecursively } from "k-explore";
import { pathArrayIsOperation } from "k-explore";
import { runTestsForOperation } from "k-test";
import { runTests } from "k-test";
import { preIndexLint } from "lint";
import { sendMail } from "mail";
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
import { copyStaticAssets } from "markdown-reader-functions";
import { docsGetPages } from "markdown-reader-functions";
import { docsGetStaticPaths } from "markdown-reader-functions";
import { docsGetStaticProps } from "markdown-reader-functions";
import { getAllMarkdownReaderPages } from "markdown-reader-functions";
import { getChildren } from "markdown-reader-functions";
import { getFolderExplorationInfo } from "markdown-reader-functions";
import { getMarkdownModelPages } from "markdown-reader-functions";
import { getMarkdownPageInfo } from "markdown-reader-functions";
import { getMarkdownReaderPages } from "markdown-reader-functions";
import { getMarkdownReaderQueryPaths } from "markdown-reader-functions";
import { getOperationPages } from "markdown-reader-functions";
import { getPublicMarkdownFilePaths } from "markdown-reader-functions";
import { getReaderTodoPages } from "markdown-reader-functions";
import { markdownReaderGetStaticPaths } from "markdown-reader-functions";
import { markdownReaderGetStaticPropsFromPages } from "markdown-reader-functions";
import { markdownReaderGetStaticProps } from "markdown-reader-functions";
import { putReadmeOnTop } from "markdown-reader-functions";
import { removeExtensionsFromPath } from "markdown-reader-functions";
import { removeNumberPrefix } from "markdown-reader-functions";
import { shouldExposeMarkdownFile } from "markdown-reader-functions";
import { stripReadmeFromFolder } from "markdown-reader-functions";
import { getQueryPath } from "markdown-reader-functions-js";
import { minifyBuild } from "minify-build";
import { getAvailableOperationName } from "new-template";
import { newOperationWithFiles } from "new-template";
import { newOperation } from "new-template";
import { newTemplate } from "new-template";
import { nodemon } from "nodemon";
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
import { sayDutch } from "say";
import { sayLanguage } from "say";
import { sayNepali } from "say";
import { saySomething } from "say";
import { textToMp3 } from "say";
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
import { setJsonKey } from "set-json-key";
import { setKeyAtLocation } from "set-json-key";
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
import { sendSms } from "sms";
import { getAllTsMorphSourceFiles } from "ts-morph-util";
import { getHasGeneric } from "ts-morph-util";
import { getTsMorphProject } from "ts-morph-util";
import { getOpenableFilePath } from "vscode-open";
import { vscodeOpen } from "vscode-open";
import { watchAll } from "watch-all";
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
import { copyPath } from "writer-functions";
import { deleteFileOrFolder } from "writer-functions";
import { getFileContents } from "writer-functions";
import { getFrontmatterSchema } from "writer-functions";
import { getWriterWebPagesMenu } from "writer-functions";
import { getWriterWebPages } from "writer-functions";
import { movePath } from "writer-functions";
import { newFile } from "writer-functions";
import { newFolder } from "writer-functions";
import { processAssetUpload } from "writer-functions";
import { renameFileOrFolder } from "writer-functions";
import { saveFileContents } from "writer-functions";
import { trashFileOrFolder } from "writer-functions";
import { updateFrontmatter } from "writer-functions";
import { getGetApiUrl } from "api";
import { untypedApiFunction } from "api";
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
import { markdownModelTypeToMarkdownString } from "model-types";
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
import { getEncoding } from "text-or-binary";
import { isBinary } from "text-or-binary";
import { isText } from "text-or-binary";
import { tryParseJson } from "try-parse-json";
import { createCodeblockMarkdown } from "ui-util";
import { useCustomUrlStore } from "use-url-store";
import { crudPageToWebPages } from "webpage-types";
import { functionFormPageToWebPage } from "webpage-types";

export const sdk = { codestoriesGetPages,
codestoriesGetStaticPaths,
codestoriesGetStaticProps,
copyCopyPairs,
copyReaderStaticAssets,
findReaderStaticAssets,
findStaticAssets,
addCodestoryToSection,
addModelName,
findCodestories,
makeCodespanMappedObject,
makeCodestory,
mapChunkRecursively,
mapMarkdownParseSections,
writeAllCodestories,
writeCodespanDetails,
addStatement,
addWord,
biggestFunctionName,
checkQueue,
cleanup,
controlChatGptWrapper,
controlChatGpt,
convertTo1337speak,
deletePromptResult,
developersQuote,
diaryToInstagram,
documentationWriting,
emojiAugmentation,
explainInDutch,
explainInNepali,
explainInPortuguese,
explain,
fixGrammarAndSpellingMistakes,
getContextualPromptCategories,
getContextualPromptResultJsonFilePath,
getContextualPrompt,
getObjectForkKeyRecursively,
gptIdeasRegisterWithContext,
haiku,
improveCode,
keywords,
marcusAurelius,
poem,
processChatGptPrompt,
processPromptOnFile,
processPromptOnFolder,
removeAllFake,
rickAndMortyRick,
rickAndMorty,
setIsFavoritePromptResult,
socratesAndSnoopDogg,
storytelling,
translateEverythingIntoHindi,
translateEverythingPortuguese,
translateEverything,
translateToPortuguese,
typescriptExplain,
williamShakespear,
writeContextualPromptSdk,
writeCreatePromptCode,
ye,
yodafy,
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
getAugmentedWordObject,
getAugmentedWords,
getBundleAugmentedWords,
getBundleSummary,
getDbModelsForBundle,
chatGPTAuth,
detectChatGptPage,
openAIChat,
execAsync,
spawnAsync,
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
filterInterfacesFromOperationNames,
getDbModelsFromOperations,
comparePassword,
encryptPassword,
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
compressImage,
compressImages,
compressMp4,
convertToMp3,
convertToMp4,
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
waitForLockfile,
getExtension,
getFileOrFolderName,
getFolderJs,
getSubExtension,
isPathRelative,
makeRelative,
removeTrailingSlash,
withoutExtension,
getFunctionExecutions,
getFunctionQueryPaths,
getPublicBundleConfig,
getSrcRelativeFolderPath,
getTsFunction,
calculateDeviceName,
executeFunctionWithParameters,
getAuthorizationInfo,
isGetEndpoint,
savePageVisit,
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
findFilesRecursively,
pathArrayIsOperation,
runTestsForOperation,
runTests,
preIndexLint,
sendMail,
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
copyStaticAssets,
docsGetPages,
docsGetStaticPaths,
docsGetStaticProps,
getAllMarkdownReaderPages,
getChildren,
getFolderExplorationInfo,
getMarkdownModelPages,
getMarkdownPageInfo,
getMarkdownReaderPages,
getMarkdownReaderQueryPaths,
getOperationPages,
getPublicMarkdownFilePaths,
getReaderTodoPages,
markdownReaderGetStaticPaths,
markdownReaderGetStaticPropsFromPages,
markdownReaderGetStaticProps,
putReadmeOnTop,
removeExtensionsFromPath,
removeNumberPrefix,
shouldExposeMarkdownFile,
stripReadmeFromFolder,
getQueryPath,
minifyBuild,
getAvailableOperationName,
newOperationWithFiles,
newOperation,
newTemplate,
nodemon,
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
sayDutch,
sayLanguage,
sayNepali,
saySomething,
textToMp3,
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
setJsonKey,
setKeyAtLocation,
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
sendSms,
getAllTsMorphSourceFiles,
getHasGeneric,
getTsMorphProject,
getOpenableFilePath,
vscodeOpen,
watchAll,
initiateWatch,
makeSubscription,
pickWatcher,
watchFoldersChokidar,
watchFoldersFs,
watchFolders,
exitIfOperationsChange,
gitCommitAllCron,
watchOperations,
writeToAssets,
copyPath,
deleteFileOrFolder,
getFileContents,
getFrontmatterSchema,
getWriterWebPagesMenu,
getWriterWebPages,
movePath,
newFile,
newFolder,
processAssetUpload,
renameFileOrFolder,
saveFileContents,
trashFileOrFolder,
updateFrontmatter,
getGetApiUrl,
untypedApiFunction,
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
markdownModelTypeToMarkdownString,
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
getEncoding,
isBinary,
isText,
tryParseJson,
createCodeblockMarkdown,
useCustomUrlStore,
crudPageToWebPages,
functionFormPageToWebPage};

export type SdkType = typeof sdk;