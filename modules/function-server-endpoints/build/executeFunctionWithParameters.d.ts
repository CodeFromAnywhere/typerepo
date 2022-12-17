import { Context } from "server/typings/common";
import { RealApiReturnType } from "api-types";
/**
steps for someone to use the API

1) auth
2) cache lookup
3) input validation
4) running function
5) store cache
6) store performance
7) returning result

TODO: make it possible to return result BEFORE storing cache and performance. we probably need to use the server.reply for this, which makes this function unusable in any other setting than an api, so let's make it optional

*/
export declare const executeFunctionWithParameters: <TFunctionName extends "trim" | "canExecute" | "canRead" | "addStatement" | "addWord" | "biggestFunctionName" | "cleanup" | "controlChatGptWrapper" | "controlChatGpt" | "convertTo1337speak" | "deletePromptResult" | "developersQuote" | "diaryToInstagram" | "documentationWriting" | "emojiAugmentation" | "explainInDutch" | "explainInNepali" | "explainInPortuguese" | "explain" | "fixGrammarAndSpellingMistakes" | "getContextualPromptCategories" | "getContextualPromptResultJsonFilePath" | "getContextualPrompt" | "getObjectForkKeyRecursively" | "gptIdeasRegisterWithContext" | "haiku" | "improveCode" | "keywords" | "marcusAurelius" | "poem" | "processChatGptPrompt" | "removeAllFake" | "rickAndMortyRick" | "rickAndMorty" | "setIsFavoritePromptResult" | "socratesAndSnoopDogg" | "storytelling" | "translateEverythingIntoHindi" | "translateEverythingPortuguese" | "translateEverything" | "translateToPortuguese" | "typescriptExplain" | "williamShakespear" | "writeContextualPromptSdk" | "writeCreatePromptCode" | "ye" | "yodafy" | "augmentMarkdown" | "canSeeFileContent" | "canSeeFile" | "expandFrontmatter" | "getContextualPromptResults" | "getContextualPromptsArray" | "getContextualPrompts" | "getFirstFile" | "getFolderRelativeScopeDbFilePath" | "getReaderPageProps" | "makeMarkdownLink" | "readerPageGetStaticPaths" | "readerPageGetStaticProps" | "addToken" | "ensureToken" | "findAssetParametersRecursively" | "getAssetDirectlyApiUrl" | "getConversionInfoFromType" | "getExtensionFromAsset" | "getNameFromRelativePath" | "getNameWithTokenFromRelativePath" | "getReferencedAssetApiUrl" | "getTypeFromUrlOrPath" | "readableSize" | "removeTokenIfPresent" | "compressAsset" | "deleteReferencedAsset" | "downloadRemoteAsset" | "findAbsoluteAssetPathFromReference" | "findAllProjectMedia" | "getAssetDirectlyGetApi" | "getReferencedAssetGetApi" | "getStorageLocationInfo" | "getTemporaryAssetsFolderPath" | "processAsset" | "processItemAssets" | "removeOldTemporaryAssets" | "serverDownloadReply" | "uploadAssetWithContext" | "getEncoding" | "isBinary" | "isText" | "folderGetUpdatedAt" | "canAccessSync" | "canAccess" | "canExecuteSync" | "canReadSync" | "canSeeSync" | "canSee" | "canWriteSync" | "canWrite" | "copyAllRelativeFiles" | "findFileNameCaseInsensitive" | "getAllFoldersUntilFolder" | "getFileName" | "getFirstAvailableFilename" | "getFolderSizeObject" | "getFolder" | "getLastFolder" | "getOneFolderUpPath" | "getPathCombinations" | "oneUp" | "parseMd" | "removeAllExcept" | "renameAndCreate" | "writeJsonToFile" | "writeStringToFile" | "writeToFiles" | "getExtension" | "getFileOrFolderName" | "getFolderJs" | "getSubExtension" | "isPathRelative" | "makeRelative" | "removeTrailingSlash" | "withoutExtension" | "getAssociatedMd" | "getAvailableFolderPath" | "getOperationBins" | "getOperationPackageName" | "getPackageJson" | "getPackageSourcePaths" | "getTsConfig" | "byteCount" | "calculatePathMetaData" | "categorizeFiles" | "getFolderSummary" | "getPathMainComment" | "getSizeSummary" | "sumSizeSummary" | "isEqualArray" | "renameTemplateFiles" | "renameTemplateToNormalFile" | "renameToTemplateFile" | "setJsonKey" | "setKeyAtLocation" | "initiateWatch" | "makeSubscription" | "pickWatcher" | "watchFoldersChokidar" | "watchFoldersFs" | "watchFolders" | "writeToAssets" | "allOperationsRemoveJsSrc" | "allOperationsToMarkdown" | "clearAllTsDatabases" | "codeAll" | "forAllFiles" | "forAllFolders" | "getAllOperationClassifications" | "gitShipAllRepos" | "mdAllOperations" | "minifyAllOperations" | "publishAllOperations" | "removeAllFiles" | "removeAllFolders" | "removeAll" | "renameAll" | "runScriptEverywhere" | "setScriptEverywhere" | "makeFileType" | "exploreOperation" | "exploreProject" | "getExplorationType" | "getFileWithExtension" | "getFolderExplorationDetails" | "getFrontmattersMappedObject" | "getInstanceNames" | "getProjectRelativePaths" | "getTodoPages" | "getTodoPaths" | "hasSameProjectPath" | "getAllOperationSourcePaths" | "findFolderWhereMatch" | "findOperationBasePathWithClassification" | "findOperationBasePath" | "getAllPackageJsonDependencies" | "getCommonAncestor" | "getOperationClassificationObject" | "getOperationClassification" | "getOperationPathParse" | "getOperationPath" | "getOperationRelativePath" | "getPathParse" | "getPathsWithOperations" | "getProjectRoot" | "getRelativeLinkPath" | "getRelativePath" | "getRootPath" | "getSrcRelativeFileId" | "hasDependency" | "isBundle" | "isOperation" | "isUiOperation" | "isWorkspaceRoot" | "packageCompilesTs" | "tsconfigCompilesEsm" | "determineFileType" | "exploreGitRepoFolders" | "exploreMultiple" | "exploreOperationFolders" | "explorePreset" | "explore" | "findAllDocsFolderPaths" | "findAllDotGitFolders" | "findAllFoldersWithName" | "findAllPackages" | "findAllTodoFolderPaths" | "findFilesRecursively" | "getOutline" | "pathArrayIsOperation" | "getDependenciesSummary" | "getOperationMetaData" | "recalculateOperationIndexJson" | "deleteApp" | "listApps" | "logApp" | "logTableObject" | "pm2ConnectDisconnect" | "pm2Connect" | "restartApp" | "startApp" | "stopAllAppsExcept" | "stopApps" | "watchAll" | "exitIfOperationsChange" | "gitCommitAllCron" | "watchOperations" | "brigtnessFull" | "brigtnessZero" | "decreaseBrightness" | "increaseBrightness" | "macosSetup" | "fileExplorerOpen" | "playMusic" | "generateRecurringReminders" | "remindMeAboutNextMinute" | "setRandomTimezone" | "disableDarkMode" | "enableDarkMode" | "setDarkmodeCommand" | "toggleDarkMode" | "disableScreenSleep2" | "disableScreenSleep" | "enableScreenSleep" | "downVolume" | "getVolume" | "setVolume" | "upVolume" | "getOpenableFilePath" | "vscodeOpen" | "loginToDevto" | "publishBlogOnDevTo" | "typeIntoTheField" | "facebookPostOnTheGroup" | "facebookPost" | "facebookTimeLinePost" | "getLatestFacebookPostUrl" | "sendFacebookMessage" | "searchAndDownloadGifs" | "buildQuery" | "errArrayLenZero" | "errFileSize" | "errFileType" | "errInvalidType" | "errTextLenZero" | "errTextOverflow" | "generateArrayFromJson" | "getStringForTranslation" | "launch" | "startTranslation" | "storeResult" | "translateText" | "sendMail" | "publishBlogOnMedium" | "publishBlogOnReddit" | "sendSms" | "getTwitterPostUrl" | "postTweetOnTwitter" | "youtubeSearchAndDownload" | "youtubeSearch" | "youtubeToMp3" | "youtubeToMp4" | "getFileTypeFromPath" | "getWriterType" | "hasSubExtension" | "isGeneratedOperationName" | "isGeneratedOperation" | "isIndexableFileId" | "getPort" | "getAssetInputType" | "getParameterContentType" | "isCalculatedParameter" | "isGeneratedParameterName" | "getBundleSummary" | "getDbModelsForBundle" | "createBackup" | "getHumanReadableDate" | "createDistribution" | "filterInterfacesFromOperationNames" | "getDbModelsFromOperations" | "applyDataset" | "calculateBundleDependencies" | "calculateToPath" | "copyCodestories" | "copyDocsAndReadme" | "copyFromRepoToNiche" | "copyOperation" | "copyReadmesBeforeFolderToBundle" | "copyTodosIntoBundle" | "findAndCopyOperations" | "findInherited" | "generateAllBundles" | "generateBundle" | "generateBundles" | "getBundlePaths" | "getCompareFn" | "getDataset" | "getIndirectDependencies" | "getMatchingFilters" | "mergeBundleConfigs" | "syncInformation" | "syncNicheFolder" | "yarnInstall" | "installNodeModules" | "yarnInstallNewDistribution" | "detectLanguage" | "generateSimpleSentence" | "makeAudioCourse" | "sleep" | "createFolder" | "getAllMarkdownFiles" | "getFileInfo" | "getTranslatedWord" | "markdownStoreAndRecord" | "parseMarkdownWordByWord" | "recordMdFile" | "startMarkdownTranslator" | "translatedArrayToKeyValue" | "watchMdFile" | "createWordSimplificationMap" | "findBetterWords" | "getSynonymFrequencyDataset" | "preprocessSynonyms" | "preprocessWordFrequencies" | "speakWordsToLearn" | "createPaymentRequestWithContext" | "createPaymentTransactionWithContext" | "defaultResponse" | "fail" | "getPaymentWebPages" | "succeed" | "mapArrayJson" | "mapObjectJson" | "videoToMp3" | "unzip" | "zip" | "csvItemArrayToCsvString" | "tryParseCsv" | "convertCsvToJson" | "convertXlsToJson" | "compressImage" | "compressImages" | "convertToMp3" | "convertToMp4" | "jsonToMdString" | "jsonToSayString" | "getSimpleJsonString" | "copyCopyPairs" | "copyReaderStaticAssets" | "findReaderStaticAssets" | "findStaticAssets" | "docToMd" | "docxToMd" | "runTests" | "waitMilliseconds" | "flattenMarkdownChunks" | "getKvmdItemsRecursively" | "getParagraphsRecursively" | "kvmdDataMap" | "kvmdDataToString" | "kvmdParseToMarkdownString" | "markdownStringToKvmdParse" | "parseKvmdLine" | "addCodestoryToSection" | "addModelName" | "findCodestories" | "makeCodespanMappedObject" | "makeCodestory" | "mapChunkRecursively" | "mapMarkdownParseSections" | "writeAllCodestories" | "writeCodespanDetails" | "chunkToStringRecursively" | "getChunkParagraphsRecursively" | "getImplicitId" | "getMarkdownIntro" | "getMarkdownParseParagraphs" | "getMarkdownReferencePaths" | "getMarkdownReferencesFromParagraph" | "markdownParseToMarkdownStringFromContent" | "markdownParseToMarkdownString" | "mdContentParseRecursively" | "mdToJsonParse" | "parseFrontmatterMarkdownString" | "parseMarkdownParagraph" | "parseMdToChunks" | "removeHeaderPrefix" | "addDependantCount" | "bundleFolderWithMarkdown" | "bundleToBookMarkdown" | "bundleToMarkdown" | "createMinimizedSectionMarkdown" | "createMinimizedSection" | "deployToVercel" | "emailMarkdownParse" | "flattenNestedObject" | "generateStaticSite" | "getJsonSchemaSummary" | "getMarkdownContents" | "getMergedMarkdownOutlineUrl" | "getOperationSummary" | "getPublicMarkdownNestedPathObject" | "getTitlesRecursively" | "getTypeDescriptorRecursive" | "isConventionFileStatement" | "isUpperCase" | "makeOutlineMarkdownString" | "makePropertiesTable" | "markdownChunkToMarkdownStringRecursive" | "markdownChunksToMarkdownStringRecursive" | "markdownToSayable" | "mdToPdf" | "mergeMarkdownParse" | "noNewlines" | "operationRadio" | "operationToMarkdown" | "printNestedTitles" | "print" | "projectToMarkdown" | "propertyToTableRow" | "sayablesToMp3" | "selectRandomOperation" | "simplifiedSchemaToMarkdownString" | "statementItemToMarkdown" | "tsFunctionToMarkdownString" | "tsInterfaceToMarkdownString" | "tsVariableToMarkdownString" | "upMarkdownChunkLevelRecursively" | "findCodespans" | "findEmbeds" | "findLinks" | "flattenMarkdownString" | "flattenMarkedTokenRecursive" | "findAudioWithViewsArray" | "markdownParseToShortMarkdown" | "shortMarkdownToMarkdownParse" | "augmentShortMarkdown" | "fetchVoices" | "generateAugmentedShortMarkdown" | "getOrGenerateShortMarkdown" | "parseDialogue" | "uberduckGetPath" | "uberduckSpeak" | "voiceCloneDialogue" | "parsePrimitiveArray" | "parsePrimitiveBoolean" | "parsePrimitiveString" | "parsePrimitive" | "readCsvFileSync" | "readCsvFile" | "readJsonFileSync" | "readJsonFile" | "readProjectRelativeJsonFile" | "readKvmdFile" | "readMarkdownFileToModel" | "readMarkdownFile" | "getFolderTypescriptIndex" | "readTypescriptFile" | "tryParseJson" | "bodyFromQueryString" | "getFirstQueryStrings" | "getQueryPart" | "isValidEntry" | "toQueryString" | "generateCsvInstance" | "generateJsonSingleInstance" | "generateKvmdInstance" | "generateMarkdownInstance" | "generateSlugTestModel" | "getMergedQueryConfig" | "randomName" | "runModelEndToEndTest" | "testOperationModels" | "upsert" | "cacheLookup" | "calculateOperatingSystemBundle" | "deleteDbModel" | "getDatabaseMenu" | "getDbModelMetadata" | "getDbModelNames" | "getDbModel" | "getFunctionIndex" | "getNestedDatabaseMenu" | "getReferencableModelData" | "hasDbRecipes" | "makeSrcRelativeFolder" | "tsInterfaceToDbMenu" | "upsertDbModel" | "validateInput" | "validateResult" | "addDefaultValues" | "alterAny" | "alterCsv" | "alterJsonMultiple" | "alterJsonSingle" | "alterKeyValueMarkdown" | "alterMarkdown" | "augmentItemWithReferencedDataRecursively" | "calculateOperationsObject" | "createDb" | "findParent" | "getAugmentedData" | "getDatabaseFiles" | "getDatabaseRootFolder" | "getDbFileLocation" | "getDbStorageMethodExtension" | "getDefaultLocationPattern" | "getItemModelLocation" | "getLength" | "getLocationPattern" | "getMergedConfigOperationPath" | "getParentSlug" | "getRootFolders" | "getWildcardDbFileLocations__OLD" | "getWildcardDbFileLocations" | "groupByFile" | "makeStoringItem" | "mergeConfigs" | "removeKeyValueMarkdown" | "removeMultiple" | "upsertItems" | "upsertKeyValueMarkdown" | "waitForLockfile" | "validateModel" | "validate" | "getFunctionExecutions" | "getFunctionQueryPaths" | "getPublicBundleConfig" | "getSrcRelativeFolderPath" | "getTsFunction" | "getAugmentedWordObject" | "getAugmentedWords" | "getBundleAugmentedWords" | "codestoriesGetPages" | "codestoriesGetStaticPaths" | "codestoriesGetStaticProps" | "copyStaticAssets" | "docsGetPages" | "docsGetStaticPaths" | "docsGetStaticProps" | "getAllMarkdownReaderPages" | "getChildren" | "getFolderExplorationInfo" | "getMarkdownModelPages" | "getMarkdownPageInfo" | "getMarkdownReaderPages" | "getMarkdownReaderQueryPaths" | "getOperationPages" | "getPublicMarkdownFilePaths" | "getReaderTodoPages" | "markdownReaderGetStaticPaths" | "markdownReaderGetStaticPropsFromPages" | "markdownReaderGetStaticProps" | "putReadmeOnTop" | "removeExtensionsFromPath" | "removeNumberPrefix" | "shouldExposeMarkdownFile" | "stripReadmeFromFolder" | "getQueryPath" | "addPeerMessage" | "addPeer" | "augmentDevice" | "deviceGetAppsCalculated" | "getAllAppOperations" | "getAugmentedPersons" | "getFirstEmoji" | "getNestedPathObject" | "getPeerMessages" | "getPeerPeople" | "getPeersFromPeersRecursively" | "getPublicFolderNestedPathObjectFromPeer" | "getPublicFolderNestedPathObject" | "getPublicPeers" | "isPortUsed" | "lateFetchPeerMessageSync" | "ping" | "proactivePushAddPeerMessage" | "removePeer" | "sortDevices" | "updatePeer" | "getPrimaryPersona" | "youtubeToPlayItem" | "getDayNumber" | "remindMe" | "MatchingText" | "PathSearchResults" | "findSentenceMatches" | "searchRecursiveObjectArray" | "getPostableFrontmatterSchema" | "frontmatterParseToString" | "frontmatterToObject" | "getFrontmatterValueString" | "objectToFrontmatter" | "parseFrontmatterString" | "quotedOrNot" | "stringifyNewlines" | "copyPath" | "deleteFileOrFolder" | "getFileContents" | "getFrontmatterSchema" | "getWriterWebPagesMenu" | "getWriterWebPages" | "movePath" | "newFile" | "newFolder" | "processAssetUpload" | "renameFileOrFolder" | "saveFileContents" | "trashFileOrFolder" | "updateFrontmatter" | "getLight" | "getLocation" | "fetchWithTimeout" | "isOnline" | "calculateBbqAbility" | "calculateCloudyness" | "calculateCodeFromNatureAbility" | "calculateDresscode" | "calculateKiteability" | "calculateRainyness" | "calculateSunnyness" | "calculateWindyness" | "fetchWeatherStormGlass" | "fetchWeatherTommorowIOApi" | "getCustomWeatherData" | "getFunctionExersize" | "createInvoiceContactMarkdown" | "createInvoiceMarkdown" | "createKeyValueMarkdown" | "money" | "newInvoice" | "printDate" | "markdownParseToMarkdownModelType" | "parseMarkdownModelTimestamp" | "tryParseDate" | "generateId" | "generatePassword" | "generateRandomString" | "generateTime" | "isEmail" | "markdownModelTypeToMarkdownString" | "createUser" | "encryptPassword" | "getBacktickContents" | "isInPeriod" | "isOutOfStock" | "kvmdToCredential" | "upcomingOutgoingFlights" | "whereShouldIgo" | "crudPageToWebPages" | "functionFormPageToWebPage" | "cleanupTsDatabase" | "shouldDeleteTsModel" | "stripCommentEnd" | "stripCommentStart" | "stripComment" | "stripSlashes" | "stripStar" | "getCompileErrors" | "getTypescriptErrorsFromFiles" | "writeBuildErrors" | "findAllDependencyOperations" | "findDependantsRecursively" | "findDependants" | "findDependenciesRecursively" | "findMonorepoModules" | "getDependencyObject" | "getDependencyTree" | "generateBunMonopackage" | "getItemNewPath" | "generateNamedIndex" | "generateSimpleIndex" | "isTestFn" | "mapToImportStatement" | "generateDbSdk" | "generateEnvSdks" | "generateFunctionPathsSdk" | "generateFunctionSdks" | "generateInterfacePathsSdk" | "generateOperationsSdk" | "generateSdkApiWatcher" | "generateSdkApi" | "generateSdkOperations" | "getFunctionSdksContent" | "getSdkDescription" | "getSdkFunctionsPerClassification" | "isNonUiOperationBuild" | "newEnvSdk" | "newFunctionKeysSdkOperation" | "newFunctionSdkOperation" | "tsFunctionIsIndexable" | "tsFunctionIsSdkable" | "updateClassifications" | "getImportedDependencies" | "getPackage" | "isAbsoluteImport" | "calculatePackageJsonDependencies" | "findAndWriteImportsExports" | "getDefaultSymbolType" | "getExportSpecifierNames" | "getExportSymbolTypeRecursive" | "getImportSpecifiersWithNames" | "getImportsExports" | "getPackageNameFromAbsoluteImport" | "getSymbolTypeDeclarations" | "getTypeFromImportSpecifierRecursive" | "isAbsoluteImportBuiltin" | "isImportFromOptionalFile" | "writeResult" | "getMissingDependencies" | "findAndUpsertTsInterfaces" | "findCommentTypes" | "generateSchema" | "getAllComments" | "getDbStorageMethod" | "getFrontmatterDbStorageMethod" | "getFrontmatterFunctionParameters" | "getIndexId" | "getMaxIndentationDepth" | "getMinMaxValidation" | "getNumberOfLines" | "getParamSchema" | "getParametersFromInterfaces" | "getPossibleRefs" | "getSpecialExtensionDbStorageMethod" | "getTsStatements" | "getTypeInfo" | "getValidatedOperationPathParse" | "hasDefinition" | "hasTypescriptFileChanged" | "indexImportsExportsForFilePath" | "indexTypescriptFilePath" | "indexTypescriptFile" | "indexTypescript" | "isPrimitive" | "makeTsComment" | "removeTypescriptIndex" | "schemaToTsInterface" | "tryCreateSchema" | "typeToSchema" | "preIndexLint" | "minifyBuild" | "getAvailableOperationName" | "newOperationWithFiles" | "newOperation" | "newTemplate" | "buildPackage" | "installMissingMonorepoDependencies" | "obfucsate" | "testPackage" | "prettierOperation" | "clearTsDatabase" | "executeCommandQuietUnlessFail" | "exitIfProcessDependenciesChanged" | "generateJsonSchemas" | "getAllDbModels" | "getFileIds" | "getIndexFileIds" | "getSrcIds" | "isOperationBuildNeeded" | "isSdkOperation" | "rebuildAllOperations" | "rebuildOperation" | "shouldSkip" | "yarnBuild" | "renameOperation" | "findFirstCommentTypes" | "getDataParameterNames" | "getPossibleReferenceParameterNames" | "getProperties" | "getRefLink" | "getReferencableModels" | "getReferenceParameterInfo" | "getSchemaItems" | "getSchema" | "simplifiedSchemaToTypeDefinitionString" | "simplifySchema" | "getSimpleTypescriptFileString" | "jsonToString" | "parseRawSimpleTypescriptFile" | "createSimpleTypescriptFile" | "runTestsForOperation" | "sum" | "isResultOfInterface" | "makeTest" | "getAllTsMorphSourceFiles" | "getHasGeneric" | "getTsMorphProject" | "getGetApiUrl" | "untypedApiFunction" | "makeArraysGetEndpoint" | "makeGetEndpoint" | "comparePassword" | "calculateDeviceName" | "executeFunctionWithParameters" | "getAuthorizationInfo" | "isGetEndpoint" | "savePageVisit" | "storeFunctionExecution" | "upsertDevice" | "addAuthenticationMethod" | "addDeviceAuthenticationMethodConfirm" | "addDeviceAuthenticationMethodWithContext" | "addPersonAuthenticationMethodWithContext" | "findAuthenticatedPersonWithHandle" | "findLoggedinPersonsWithContext" | "getMeWithContext" | "getPublicPerson" | "getPublicPersons" | "isPhoneNumber" | "isValidPassword" | "loginWithContext" | "loginWithPasswordWithContext" | "logoutWithContext" | "removeDeviceAuthenticationMethodWithContext" | "removePersonAuthenticationMethodWithContext" | "signupWithContext" | "signupWithPasswordWithContext" | "switchCurrentPersonWithContext" | "updateMeWithContext" | "sayDutch" | "sayLanguage" | "sayNepali" | "saySomething" | "textToMp3" | "askOk" | "ask" | "getArgumentOrAsk" | "cliVersionUpdates" | "handleVersionUpdates" | "converse" | "executeSdkFunction" | "getCachedExportedFunctions" | "getMenu" | "getSdkFunctionPaths" | "objectStringToJson" | "parseIfJson" | "parsePrimitiveJson" | "stringToJson" | "BreadCrumbs" | "renderBreadCrumbs" | "ClickableIcon" | "errorToast" | "infoToast" | "showStandardResponse" | "successToast" | "warningToast" | "FancyLoader" | "getFileType" | "LabeledButton" | "getFullPath" | "getLastPathsChunk" | "usePath" | "createCodeblockMarkdown" | "useCustomUrlStore" | "getKeysAtPathFromNestedObject" | "getMenuPagesObject" | "makeNestedObjectFromQueryPathObject" | "nestedObjectToChildObject" | "nestedPathObjectToNestedMenuRecursive" | "nestifyQueryPathObjectRecursive" | "queryPathsArrayToNestedPathObject" | "reduceQueryPathsRecursively" | "execAsync" | "spawnAsync" | "camelCase" | "capitalCase" | "capitaliseFirstLetter" | "convertCase" | "getDelimiter" | "humanCase" | "kebabCase" | "lowerCaseArray" | "pascalCase" | "slugify" | "snakeCase" | "executeCommand" | "getCommand" | "isCommandPerOs" | "getDbPath" | "rawPolygonToPolygon" | "apply" | "createEnum" | "createMappedObject" | "destructureOptionalObject" | "findLastIndex" | "getObjectFromParamsString" | "getObjectKeysArray" | "getParameterAtLocation" | "getSubsetFromObject" | "groupByKey" | "hasAllLetters" | "insertAt" | "isAllTrue" | "makeArray" | "mapAsync" | "mapKeys" | "mapMany" | "mapValuesSync" | "mergeNestedObject" | "mergeObjectParameters" | "mergeObjectsArray" | "mergeObjects" | "noEmptyString" | "objectMapAsync" | "objectMapSync" | "objectValuesMap" | "omitUndefinedValues" | "onlyUnique2" | "onlyUnique" | "pickRandomArrayItem" | "putIndexAtIndex" | "removeIndexFromArray" | "removeOptionalKeysFromObjectStrings" | "removeOptionalKeysFromObject" | "replaceLastOccurence" | "reverseString" | "sumAllKeys" | "sumObjectParameters" | "takeFirst" | "trimSlashes" | "dev" | "getCallerFileName" | "log" | "parseTitle" | "cleanupTimer" | "generateUniqueId" | "getNewPerformance" | "nodemon" | "oneByOne" | "isPlural" | "isSingular" | "pluralize" | "singularize" | "runChildProcess" | "chatGPTAuth" | "detectChatGptPage" | "openAIChat" | "clickOnSpanTag" | "facebookLogin" | "foundOrNotXpath" | "foundOrNot" | "getBrowserPage" | "getBrowserSession" | "getBrowserTabs" | "getChromeExecutablePath" | "getConnectedBrowsers" | "gmailLogin" | "isCaptchaExist" | "logConsoleIfDebug" | "openNewBrowser" | "openPage" | "racePromises" | "retryClickAndWaitSelector" | "retryWaitSelector" | "runBrowser" | "setBrowserPage" | "setBrowserSession" | "setInnerHtml" | "setInputValue" | "solveReptcha" | "trueClick" | "twitterLogin" | "typeInTheInputField" | "typeOnTheTargetWithXpathSelector" | "checkAndGetSlackFileUrl" | "elementExists" | "getAllMessages" | "getLatestMessages" | "getSlackChannelMemberList" | "getSlackChannels" | "getSlackMessageFrom" | "getSlackWorkspaces" | "scrapeSlackMessage" | "scrollToTop" | "selectSlackChannel" | "selectSlackWorkspace" | "sendSlackMessage" | "slackLogin" | "storeAllSlackChannel" | "storeSlackChannelMember" | "getAbsolutePathMdFileName" | "getAllPostables" | "getPersonDetails" | "getPersonsMenu" | "getSocialMediaChannelsMenu" | "getSocialMediaMenu" | "getSubExtensions" | "addSocialMediaCredential" | "canBePosted" | "createAllSocialMediaPost" | "createSocialMediaPost" | "devtoCotentAnalyzer" | "facebookContentAnalyzer" | "getSocialMediaCredentials" | "mediumCotentAnalyzer" | "postSocialMediaPostToDevto" | "postSocialMediaPostToFacebook" | "postSocialMediaPostToMedium" | "postSocialMediaPostToReddit" | "postSocialMediaPostToTwitter" | "redditContentAnalyzer" | "socialMediaPostPlanner" | "startSocialMediaController" | "twitterContentAnalyzer" | "updateSocialMediaPost" | "makeExercises" | "driverLogin" | "driverSignup" | "earthDistance" | "getMyJeep" | "getPublicJeeps" | "updateMyProfile" | "getAllOperations" | "getAllPackagesNames" | "getGithubPersonalAccessToken" | "getGithubRepoLastCommitInfo" | "getRepoNameFromRepositoryUrl" | "initializeGitOrUseExistingAndPull" | "operationGithubPull" | "operationGithubPush" | "pullMultipleOperations" | "pushMultipleOperations" | "readAndWriteToPackageJsonExample" | "updateAllOperationStatus" | "calculateFullCompany" | "companyAttachContributionInformation" | "companyAttachEsgMetricProofStates" | "companyAttachRequirements" | "companyAttachTransparency" | "concatenateItems" | "contributionAddNextContributions" | "getActivities" | "getAverage" | "getCompanies" | "getFinalProducts" | "getFullCompanyData" | "getIngredientProducts" | "getProductValueChainForProduct" | "getProductValueChain" | "getRequiredValueChainData" | "getSustainabilityPlan" | "hasEsgMetricWithStatus" | "requirementAttachProofStates" | "sumEsgMetricProofStates" | "getCompanyRequirementDescription" | "requirementAppliesToCompany" | "parseAddress">(functionName: TFunctionName, parameters: undefined | any[], serverContext: Context) => Promise<RealApiReturnType<any>>;
//# sourceMappingURL=executeFunctionWithParameters.d.ts.map