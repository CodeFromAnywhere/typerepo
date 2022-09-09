"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.keys=void 0,exports.keys=["allOperationsRemoveJsSrc","clearAllTsDatabases","codeAll","forAllFiles","forAllFolders","getAllOperationClassifications","gitShipAllRepos","mdAllOperations","minifyAllOperations","publishAllOperations","rebuildAllOperations","removeAllFiles","removeAllFolders","removeAll","renameAll","runScriptEverywhere","setScriptEverywhere","getBundleQueryPaths","getBundleSummary","getDbModelsForBundle","getRealPathFromQueryPath","cleanupTsDatabase","shouldDeleteTsModel","csvItemArrayToCsvString","tryParseCsv","generateCsvInstance","generateJsonSingleInstance","generateKvmdInstance","generateMarkdownInstance","generateSlugTestModel","getMergedQueryConfig","randomName","runModelEndToEndTest","testOperationModels","filterInterfacesFromOperationNames","getDbModelsFromOperations","findAllDependencyOperations","findDependantsRecursively","findDependants","findDependenciesRecursively","findMonorepoModules","getDependencyObject","getDependencyTree","folderGetUpdatedAt","addDefaultValues","alterAny","alterCsv","alterJsonMultiple","alterJsonSingle","alterKeyValueMarkdown","alterMarkdown","calculateOperationsObject","createDb","findParent","getAugmentedData","getDatabaseFiles","getDatabaseRootFolder","getDbFileLocation","getDbStorageMethodExtension","getItemModelLocation","getLength","getLocationPattern","getParentSlug","groupByFile","makeStoringItem","mergeConfigs","removeKeyValueMarkdown","removeMultiple","upsertItems","upsertKeyValueMarkdown","upsert","generateNamedIndex","generateSimpleIndex","isTestFn","mapToImportStatement","generateDbSdk","generateEnvSdks","generateFunctionSdks","generateOperationsSdk","generateSdkOperations","getSdkFunctions","isTsFunctionIndexable","newEnvSdk","newSdkKeysOperation","newSdkOperation","tsFunctionIsSdkable","getAllOperationSourcePaths","getImportedDependencies","getPackage","isAbsoluteImport","calculatePackageJsonDependencies","findAndWriteImportsExports","getImportsExports","getPackageNameFromAbsoluteImport","isAbsoluteImportBuiltin","isImportFromOptionalFile","getOperationBins","getOperationPackageName","getPackageJson","getPackageSourcePaths","findAndUpsertTsInterfaces","findCommentTypes","generateSchema","getAllComments","getDbStorageMethod","getFrontmatterDbStorageMethod","getIndexId","getMaxIndentationDepth","getMinMaxValidation","getNumberOfLines","getParamSchema","getParametersFromInterfaces","getPossibleRefs","getSizeSummary","getSpecialExtensionDbStorageMethod","getTsStatements","getTypeInfo","getValidatedOperationPathParse","hasDefinition","indexTypescriptFile","indexTypescript","isPrimitive","makeTsComment","schemaToTsInterface","tryCreateSchema","typeToSchema","dev","determineFileType","exploreGitRepoFolders","exploreMultiple","exploreOperationFolders","explorePreset","explore","findAllDotGitFolders","findAllPackages","preIndexLint","bundleFolderWithMarkdown","bundleToBookMd","bundleToMd","deployToVercel","emailMarkdownParse","generateStaticSite","getOutline","getTitlesRecursively","markdownChunkToMarkdownStringRecursive","markdownChunksToMarkdownStringRecursive","markdownToSayable","mdToPdf","mergeMarkdownParse","operationRadio","operationToMarkdown","printNestedTitles","print","projectToMd","propertyToTableRow","sayablesToMp3","selectRandomOperation","simplifiedSchemaToMarkdownString","tsFunctionToMarkdownString","tsInterfaceToMarkdownString","upMarkdownChunkLevelRecursively","minifyBuild","getAvailableOperationName","getOperationConfig","newOperationWithFiles","newOperation","nodemon","readCsvFileSync","readCsvFile","readJsonFileSync","readJsonFile","tryParseJson","readKvmdFile","readMarkdownFile","clearTsDatabase","executeCommandQuietUnlessFail","exitIfProcessDependenciesChanged","getFileIds","getIndexFileIds","getSrcIds","isGeneratedOperation","isOperationBuildNeeded","isSdkOperation","rebuildOperation","shouldSkip","yarnBuild","isEqualArray","renameTemplateFiles","renameTemplateToNormalFile","renameToTemplateFile","setJsonKey","getAllTsMorphSourceFiles","getHasGeneric","getTsMorphProject","initiateWatch","makeSubscription","watchFoldersFs","watchFolders","exitIfOperationsChange","gitCommitAllEveryMinute","watchOperations","isGeneratedParameterName","markdownParseToMarkdownModelType","parseMarkdownModelTimestamp","tryParseDate","stripCommentEnd","stripCommentStart","stripComment","stripSlashes","stripStar","trim","getCompileErrors","getTypescriptErrorsFromFiles","writeBuildErrors","camelCase","capitalCase","convertCase","humanCase","kebabCase","lowerCaseArray","pascalCase","slugify","snakeCase","hasSubExtension","isIndexableFileId","canAccessSync","canAccess","canExecuteSync","canExecute","canReadSync","canRead","canSeeSync","canSee","canWriteSync","canWrite","findAllMd","findFileNameCaseInsensitive","findFilesRecursively","findSensibleFiles","getExtension","getFileName","getFolder","getLastFolder","getPathCombinations","getSubExtension","importFromFiles","isArrayGuard","parseMd","removeAllExcept","removeTrailingSlash","withoutExtension","writeJsonToFile","writeStringToFile","writeToFiles","findFolderWhereMatch","findOperationBasePathWithClassification","findOperationBasePath","getAllPackageJsonDependencies","getOperationClassification","getOperationPathParse","getOperationPath","getOperationRelativePath","getPathParse","getPathsWithOperations","getProjectRoot","getRelativePath","getRootPath","getSrcRelativeFileId","hasDependency","isSensibleProject","isWorkspaceRoot","makeRelative","getTsConfig","apply","createEnum","findLastIndex","getObjectFromParamsString","getObjectKeysArray","getSubsetFromObject","groupByKey","insertAt","isAllTrue","makeArray","mapAsync","mapKeys","mapMany","mapValuesSync","mergeObjectParameters","mergeObjectsArray","mergeObjects","notEmpty","objectMapAsync","objectMapSync","objectValuesMap","onlyUnique2","onlyUnique","removeIndexFromArray","sumAllKeys","sumObjectParameters","sum","takeFirst","getSimpleJsonString","flattenMarkdownChunks","getKvmdItemsRecursively","getParagraphsRecursively","kvmdDataMap","kvmdDataToString","kvmdParseToMarkdownString","markdownStringToKvmdParse","parseKvmdLine","getCallerFileName","log","parseTitle","makeFileType","isResultOfInterface","makeTest","markdownParseToMarkdownString","mdContentParseRecursively","mdToJsonParse","parseFrontmatterMarkdownString","parseMdToChunks","removeHeaderPrefix","frontmatterParseToString","getFrontmatterValueString","quotedOrNot","stringifyNewlines","generateId","generatePassword","generateRandomString","generateTime","isEmail","markdownModelTypeToMarkdownString","ALink","oneByOne","getDependenciesSummary","getOperationMetaData","recalculateOperationIndexJson","writeKeyToOperationIndexJson","parsePrimitive","byteCount","calculatePathMetaData","categorizeFiles","getFolderSummary","getPathMainComment","sumSizeSummary","pluralize","singularize","runChildProcess","getProperties","getRefLink","getReferencableModels","getReferenceParameterInfo","getSchemaItems","getSchema","simplifiedSchemaToTypeDefinitionString","simplifySchema"];
//# sourceMappingURL=sdk-keys.js.map