"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sdk=void 0;var database_1=require("database"),database_2=require("database"),database_3=require("database"),database_4=require("database"),database_5=require("database"),database_6=require("database"),database_7=require("database"),database_8=require("database"),database_9=require("database"),fs_orm_1=require("fs-orm"),fs_orm_2=require("fs-orm"),fs_orm_3=require("fs-orm"),fs_orm_4=require("fs-orm"),fs_orm_5=require("fs-orm"),fs_orm_6=require("fs-orm"),fs_orm_7=require("fs-orm"),fs_orm_8=require("fs-orm"),fs_orm_9=require("fs-orm"),fs_orm_10=require("fs-orm"),fs_orm_11=require("fs-orm"),fs_orm_12=require("fs-orm"),fs_orm_13=require("fs-orm"),fs_orm_14=require("fs-orm"),fs_orm_15=require("fs-orm"),fs_orm_16=require("fs-orm"),fs_orm_17=require("fs-orm"),fs_orm_18=require("fs-orm"),fs_orm_19=require("fs-orm"),fs_orm_20=require("fs-orm"),fs_orm_21=require("fs-orm"),fs_orm_22=require("fs-orm"),fs_orm_23=require("fs-orm"),fs_orm_24=require("fs-orm"),fs_orm_25=require("fs-orm"),fs_orm_26=require("fs-orm"),fs_orm_27=require("fs-orm"),fs_orm_28=require("fs-orm"),generate_index_1=require("generate-index"),generate_index_2=require("generate-index"),generate_index_3=require("generate-index"),generate_index_4=require("generate-index"),generate_sdk_operations_1=require("generate-sdk-operations"),generate_sdk_operations_2=require("generate-sdk-operations"),generate_sdk_operations_3=require("generate-sdk-operations"),generate_sdk_operations_4=require("generate-sdk-operations"),generate_sdk_operations_5=require("generate-sdk-operations"),generate_sdk_operations_6=require("generate-sdk-operations"),generate_sdk_operations_7=require("generate-sdk-operations"),generate_sdk_operations_8=require("generate-sdk-operations"),generate_sdk_operations_9=require("generate-sdk-operations"),generate_sdk_operations_10=require("generate-sdk-operations"),generate_sdk_operations_11=require("generate-sdk-operations"),get_imports_exports_1=require("get-imports-exports"),get_imports_exports_2=require("get-imports-exports"),get_imports_exports_3=require("get-imports-exports"),get_imports_exports_4=require("get-imports-exports"),get_imports_exports_5=require("get-imports-exports"),get_imports_exports_6=require("get-imports-exports"),get_imports_exports_7=require("get-imports-exports"),get_imports_exports_8=require("get-imports-exports"),get_imports_exports_9=require("get-imports-exports"),get_imports_exports_10=require("get-imports-exports"),get_imports_exports_11=require("get-imports-exports"),get_imports_exports_12=require("get-imports-exports"),get_imports_exports_13=require("get-imports-exports"),get_imports_exports_14=require("get-imports-exports"),index_typescript_1=require("index-typescript"),index_typescript_2=require("index-typescript"),index_typescript_3=require("index-typescript"),index_typescript_4=require("index-typescript"),index_typescript_5=require("index-typescript"),index_typescript_6=require("index-typescript"),index_typescript_7=require("index-typescript"),index_typescript_8=require("index-typescript"),index_typescript_9=require("index-typescript"),index_typescript_10=require("index-typescript"),index_typescript_11=require("index-typescript"),index_typescript_12=require("index-typescript"),index_typescript_13=require("index-typescript"),index_typescript_14=require("index-typescript"),index_typescript_15=require("index-typescript"),index_typescript_16=require("index-typescript"),index_typescript_17=require("index-typescript"),index_typescript_18=require("index-typescript"),index_typescript_19=require("index-typescript"),index_typescript_20=require("index-typescript"),index_typescript_21=require("index-typescript"),index_typescript_22=require("index-typescript"),index_typescript_23=require("index-typescript"),index_typescript_24=require("index-typescript"),index_typescript_25=require("index-typescript"),index_typescript_26=require("index-typescript"),k_dev_1=require("k-dev"),minify_build_1=require("minify-build"),new_operation_1=require("new-operation"),new_operation_2=require("new-operation"),new_operation_3=require("new-operation"),new_operation_4=require("new-operation"),nodemon_1=require("nodemon"),rebuild_operation_1=require("rebuild-operation"),rebuild_operation_2=require("rebuild-operation"),rebuild_operation_3=require("rebuild-operation"),rebuild_operation_4=require("rebuild-operation"),rebuild_operation_5=require("rebuild-operation"),rebuild_operation_6=require("rebuild-operation"),rebuild_operation_7=require("rebuild-operation"),rebuild_operation_8=require("rebuild-operation"),rebuild_operation_9=require("rebuild-operation"),rebuild_operation_10=require("rebuild-operation"),rebuild_operation_11=require("rebuild-operation"),rebuild_operation_12=require("rebuild-operation"),all_1=require("all"),all_2=require("all"),all_3=require("all"),all_4=require("all"),all_5=require("all"),all_6=require("all"),all_7=require("all"),all_8=require("all"),all_9=require("all"),all_10=require("all"),all_11=require("all"),all_12=require("all"),all_13=require("all"),all_14=require("all"),all_15=require("all"),all_16=require("all"),ask_1=require("ask"),ask_2=require("ask"),ask_3=require("ask"),bundle_util_1=require("bundle-util"),bundle_util_2=require("bundle-util"),bundle_util_3=require("bundle-util"),bundle_util_4=require("bundle-util"),bundle_util_5=require("bundle-util"),bundle_util_6=require("bundle-util"),bundle_util_7=require("bundle-util"),bundle_util_8=require("bundle-util"),cleanup_typescript_database_1=require("cleanup-typescript-database"),cleanup_typescript_database_2=require("cleanup-typescript-database"),csv_util_1=require("csv-util"),csv_util_2=require("csv-util"),db_util_1=require("db-util"),db_util_2=require("db-util"),find_all_dependency_operations_1=require("find-all-dependency-operations"),find_all_dependency_operations_2=require("find-all-dependency-operations"),find_all_dependency_operations_3=require("find-all-dependency-operations"),find_all_dependency_operations_4=require("find-all-dependency-operations"),find_all_dependency_operations_5=require("find-all-dependency-operations"),find_all_dependency_operations_6=require("find-all-dependency-operations"),find_all_dependency_operations_7=require("find-all-dependency-operations"),folder_get_updated_at_1=require("folder-get-updated-at"),get_all_operation_source_paths_1=require("get-all-operation-source-paths"),get_imported_dependencies_1=require("get-imported-dependencies"),get_imported_dependencies_2=require("get-imported-dependencies"),get_package_json_1=require("get-package-json"),get_package_json_2=require("get-package-json"),get_package_json_3=require("get-package-json"),get_package_source_paths_1=require("get-package-source-paths"),k_explore_1=require("k-explore"),k_explore_2=require("k-explore"),k_explore_3=require("k-explore"),k_explore_4=require("k-explore"),k_explore_5=require("k-explore"),k_explore_6=require("k-explore"),k_explore_7=require("k-explore"),k_explore_8=require("k-explore"),lint_1=require("lint"),markdown_parsings_1=require("markdown-parsings"),markdown_parsings_2=require("markdown-parsings"),markdown_parsings_3=require("markdown-parsings"),markdown_parsings_4=require("markdown-parsings"),markdown_parsings_5=require("markdown-parsings"),markdown_parsings_6=require("markdown-parsings"),markdown_parsings_7=require("markdown-parsings"),markdown_parsings_8=require("markdown-parsings"),markdown_parsings_9=require("markdown-parsings"),markdown_parsings_10=require("markdown-parsings"),markdown_parsings_11=require("markdown-parsings"),markdown_parsings_12=require("markdown-parsings"),markdown_parsings_13=require("markdown-parsings"),markdown_parsings_14=require("markdown-parsings"),markdown_parsings_15=require("markdown-parsings"),markdown_parsings_16=require("markdown-parsings"),markdown_parsings_17=require("markdown-parsings"),markdown_parsings_18=require("markdown-parsings"),markdown_parsings_19=require("markdown-parsings"),markdown_parsings_20=require("markdown-parsings"),markdown_parsings_21=require("markdown-parsings"),markdown_parsings_22=require("markdown-parsings"),markdown_parsings_23=require("markdown-parsings"),markdown_parsings_24=require("markdown-parsings"),markdown_parsings_25=require("markdown-parsings"),markdown_parsings_26=require("markdown-parsings"),markdown_parsings_27=require("markdown-parsings"),markdown_parsings_28=require("markdown-parsings"),read_csv_file_1=require("read-csv-file"),read_csv_file_2=require("read-csv-file"),read_json_file_1=require("read-json-file"),read_json_file_2=require("read-json-file"),read_json_file_3=require("read-json-file"),read_kvmd_file_1=require("read-kvmd-file"),read_markdown_file_1=require("read-markdown-file"),read_markdown_file_2=require("read-markdown-file"),read_markdown_file_3=require("read-markdown-file"),rename_template_files_1=require("rename-template-files"),rename_template_files_2=require("rename-template-files"),rename_template_files_3=require("rename-template-files"),rename_template_files_4=require("rename-template-files"),set_json_key_1=require("set-json-key"),ts_morph_util_1=require("ts-morph-util"),ts_morph_util_2=require("ts-morph-util"),ts_morph_util_3=require("ts-morph-util"),watch_folders_1=require("watch-folders"),watch_folders_2=require("watch-folders"),watch_folders_3=require("watch-folders"),watch_folders_4=require("watch-folders"),watch_operations_1=require("watch-operations"),watch_operations_2=require("watch-operations"),watch_operations_3=require("watch-operations"),write_to_assets_1=require("write-to-assets");exports.sdk={generateCsvInstance:database_1.generateCsvInstance,generateJsonSingleInstance:database_2.generateJsonSingleInstance,generateKvmdInstance:database_3.generateKvmdInstance,generateMarkdownInstance:database_4.generateMarkdownInstance,generateSlugTestModel:database_5.generateSlugTestModel,getMergedQueryConfig:database_6.getMergedQueryConfig,randomName:database_7.randomName,runModelEndToEndTest:database_8.runModelEndToEndTest,testOperationModels:database_9.testOperationModels,addDefaultValues:fs_orm_1.addDefaultValues,alterAny:fs_orm_2.alterAny,alterCsv:fs_orm_3.alterCsv,alterJsonMultiple:fs_orm_4.alterJsonMultiple,alterJsonSingle:fs_orm_5.alterJsonSingle,alterKeyValueMarkdown:fs_orm_6.alterKeyValueMarkdown,alterMarkdown:fs_orm_7.alterMarkdown,augmentItemWithReferencedDataRecursively:fs_orm_8.augmentItemWithReferencedDataRecursively,calculateOperationsObject:fs_orm_9.calculateOperationsObject,createDb:fs_orm_10.createDb,findParent:fs_orm_11.findParent,getAugmentedData:fs_orm_12.getAugmentedData,getDatabaseFiles:fs_orm_13.getDatabaseFiles,getDatabaseRootFolder:fs_orm_14.getDatabaseRootFolder,getDbFileLocation:fs_orm_15.getDbFileLocation,getDbStorageMethodExtension:fs_orm_16.getDbStorageMethodExtension,getItemModelLocation:fs_orm_17.getItemModelLocation,getLength:fs_orm_18.getLength,getLocationPattern:fs_orm_19.getLocationPattern,getParentSlug:fs_orm_20.getParentSlug,groupByFile:fs_orm_21.groupByFile,makeStoringItem:fs_orm_22.makeStoringItem,mergeConfigs:fs_orm_23.mergeConfigs,removeKeyValueMarkdown:fs_orm_24.removeKeyValueMarkdown,removeMultiple:fs_orm_25.removeMultiple,upsertItems:fs_orm_26.upsertItems,upsertKeyValueMarkdown:fs_orm_27.upsertKeyValueMarkdown,upsert:fs_orm_28.upsert,generateNamedIndex:generate_index_1.generateNamedIndex,generateSimpleIndex:generate_index_2.generateSimpleIndex,isTestFn:generate_index_3.isTestFn,mapToImportStatement:generate_index_4.mapToImportStatement,generateDbSdk:generate_sdk_operations_1.generateDbSdk,generateEnvSdks:generate_sdk_operations_2.generateEnvSdks,generateFunctionSdks:generate_sdk_operations_3.generateFunctionSdks,generateOperationsSdk:generate_sdk_operations_4.generateOperationsSdk,generateSdkOperations:generate_sdk_operations_5.generateSdkOperations,getSdkFunctions:generate_sdk_operations_6.getSdkFunctions,isTsFunctionIndexable:generate_sdk_operations_7.isTsFunctionIndexable,newEnvSdk:generate_sdk_operations_8.newEnvSdk,newSdkKeysOperation:generate_sdk_operations_9.newSdkKeysOperation,newSdkOperation:generate_sdk_operations_10.newSdkOperation,tsFunctionIsSdkable:generate_sdk_operations_11.tsFunctionIsSdkable,calculatePackageJsonDependencies:get_imports_exports_1.calculatePackageJsonDependencies,findAndWriteImportsExports:get_imports_exports_2.findAndWriteImportsExports,getDefaultSymbolType:get_imports_exports_3.getDefaultSymbolType,getExportSpecifierNames:get_imports_exports_4.getExportSpecifierNames,getExportSymbolTypeRecursive:get_imports_exports_5.getExportSymbolTypeRecursive,getImportSpecifiersWithNames:get_imports_exports_6.getImportSpecifiersWithNames,getImportsExports:get_imports_exports_7.getImportsExports,getPackageNameFromAbsoluteImport:get_imports_exports_8.getPackageNameFromAbsoluteImport,getSymbolTypeDeclarations:get_imports_exports_9.getSymbolTypeDeclarations,getTypeFromImportSpecifierRecursive:get_imports_exports_10.getTypeFromImportSpecifierRecursive,isAbsoluteImportBuiltin:get_imports_exports_11.isAbsoluteImportBuiltin,isAbsoluteImport:get_imports_exports_12.isAbsoluteImport,isImportFromOptionalFile:get_imports_exports_13.isImportFromOptionalFile,writeResult:get_imports_exports_14.writeResult,findAndUpsertTsInterfaces:index_typescript_1.findAndUpsertTsInterfaces,findCommentTypes:index_typescript_2.findCommentTypes,generateSchema:index_typescript_3.generateSchema,getAllComments:index_typescript_4.getAllComments,getDbStorageMethod:index_typescript_5.getDbStorageMethod,getFrontmatterDbStorageMethod:index_typescript_6.getFrontmatterDbStorageMethod,getIndexId:index_typescript_7.getIndexId,getMaxIndentationDepth:index_typescript_8.getMaxIndentationDepth,getMinMaxValidation:index_typescript_9.getMinMaxValidation,getNumberOfLines:index_typescript_10.getNumberOfLines,getParamSchema:index_typescript_11.getParamSchema,getParametersFromInterfaces:index_typescript_12.getParametersFromInterfaces,getPossibleRefs:index_typescript_13.getPossibleRefs,getSizeSummary:index_typescript_14.getSizeSummary,getSpecialExtensionDbStorageMethod:index_typescript_15.getSpecialExtensionDbStorageMethod,getTsStatements:index_typescript_16.getTsStatements,getTypeInfo:index_typescript_17.getTypeInfo,getValidatedOperationPathParse:index_typescript_18.getValidatedOperationPathParse,hasDefinition:index_typescript_19.hasDefinition,indexTypescriptFile:index_typescript_20.indexTypescriptFile,indexTypescript:index_typescript_21.indexTypescript,isPrimitive:index_typescript_22.isPrimitive,makeTsComment:index_typescript_23.makeTsComment,schemaToTsInterface:index_typescript_24.schemaToTsInterface,tryCreateSchema:index_typescript_25.tryCreateSchema,typeToSchema:index_typescript_26.typeToSchema,dev:k_dev_1.dev,minifyBuild:minify_build_1.minifyBuild,getAvailableOperationName:new_operation_1.getAvailableOperationName,getOperationConfig:new_operation_2.getOperationConfig,newOperationWithFiles:new_operation_3.newOperationWithFiles,newOperation:new_operation_4.newOperation,nodemon:nodemon_1.nodemon,clearTsDatabase:rebuild_operation_1.clearTsDatabase,executeCommandQuietUnlessFail:rebuild_operation_2.executeCommandQuietUnlessFail,exitIfProcessDependenciesChanged:rebuild_operation_3.exitIfProcessDependenciesChanged,getFileIds:rebuild_operation_4.getFileIds,getIndexFileIds:rebuild_operation_5.getIndexFileIds,getSrcIds:rebuild_operation_6.getSrcIds,isOperationBuildNeeded:rebuild_operation_7.isOperationBuildNeeded,isSdkOperation:rebuild_operation_8.isSdkOperation,rebuildAllOperations:rebuild_operation_9.rebuildAllOperations,rebuildOperation:rebuild_operation_10.rebuildOperation,shouldSkip:rebuild_operation_11.shouldSkip,yarnBuild:rebuild_operation_12.yarnBuild,allOperationsRemoveJsSrc:all_1.allOperationsRemoveJsSrc,clearAllTsDatabases:all_2.clearAllTsDatabases,codeAll:all_3.codeAll,forAllFiles:all_4.forAllFiles,forAllFolders:all_5.forAllFolders,getAllOperationClassifications:all_6.getAllOperationClassifications,gitShipAllRepos:all_7.gitShipAllRepos,mdAllOperations:all_8.mdAllOperations,minifyAllOperations:all_9.minifyAllOperations,publishAllOperations:all_10.publishAllOperations,removeAllFiles:all_11.removeAllFiles,removeAllFolders:all_12.removeAllFolders,removeAll:all_13.removeAll,renameAll:all_14.renameAll,runScriptEverywhere:all_15.runScriptEverywhere,setScriptEverywhere:all_16.setScriptEverywhere,askOk:ask_1.askOk,ask:ask_2.ask,getArgumentOrAsk:ask_3.getArgumentOrAsk,getBundleSummary:bundle_util_1.getBundleSummary,getDbModelsForBundle:bundle_util_2.getDbModelsForBundle,getDocsMarkdownReaderPages:bundle_util_3.getDocsMarkdownReaderPages,getInternalLinks:bundle_util_4.getInternalLinks,getMarkdownReaderQueryPaths:bundle_util_5.getMarkdownReaderQueryPaths,getPublicMarkdownFilePaths:bundle_util_6.getPublicMarkdownFilePaths,removeExtensionsFromPath:bundle_util_7.removeExtensionsFromPath,removeNumberPrefix:bundle_util_8.removeNumberPrefix,cleanupTsDatabase:cleanup_typescript_database_1.cleanupTsDatabase,shouldDeleteTsModel:cleanup_typescript_database_2.shouldDeleteTsModel,csvItemArrayToCsvString:csv_util_1.csvItemArrayToCsvString,tryParseCsv:csv_util_2.tryParseCsv,filterInterfacesFromOperationNames:db_util_1.filterInterfacesFromOperationNames,getDbModelsFromOperations:db_util_2.getDbModelsFromOperations,findAllDependencyOperations:find_all_dependency_operations_1.findAllDependencyOperations,findDependantsRecursively:find_all_dependency_operations_2.findDependantsRecursively,findDependants:find_all_dependency_operations_3.findDependants,findDependenciesRecursively:find_all_dependency_operations_4.findDependenciesRecursively,findMonorepoModules:find_all_dependency_operations_5.findMonorepoModules,getDependencyObject:find_all_dependency_operations_6.getDependencyObject,getDependencyTree:find_all_dependency_operations_7.getDependencyTree,folderGetUpdatedAt:folder_get_updated_at_1.folderGetUpdatedAt,getAllOperationSourcePaths:get_all_operation_source_paths_1.getAllOperationSourcePaths,getImportedDependencies:get_imported_dependencies_1.getImportedDependencies,getPackage:get_imported_dependencies_2.getPackage,getOperationBins:get_package_json_1.getOperationBins,getOperationPackageName:get_package_json_2.getOperationPackageName,getPackageJson:get_package_json_3.getPackageJson,getPackageSourcePaths:get_package_source_paths_1.getPackageSourcePaths,determineFileType:k_explore_1.determineFileType,exploreGitRepoFolders:k_explore_2.exploreGitRepoFolders,exploreMultiple:k_explore_3.exploreMultiple,exploreOperationFolders:k_explore_4.exploreOperationFolders,explorePreset:k_explore_5.explorePreset,explore:k_explore_6.explore,findAllDotGitFolders:k_explore_7.findAllDotGitFolders,findAllPackages:k_explore_8.findAllPackages,preIndexLint:lint_1.preIndexLint,bundleFolderWithMarkdown:markdown_parsings_1.bundleFolderWithMarkdown,bundleToBookMarkdown:markdown_parsings_2.bundleToBookMarkdown,bundleToMarkdown:markdown_parsings_3.bundleToMarkdown,deployToVercel:markdown_parsings_4.deployToVercel,emailMarkdownParse:markdown_parsings_5.emailMarkdownParse,generateStaticSite:markdown_parsings_6.generateStaticSite,getFunctionsInfo:markdown_parsings_7.getFunctionsInfo,getOutline:markdown_parsings_8.getOutline,getTitlesRecursively:markdown_parsings_9.getTitlesRecursively,makePropertiesTable:markdown_parsings_10.makePropertiesTable,markdownChunkToMarkdownStringRecursive:markdown_parsings_11.markdownChunkToMarkdownStringRecursive,markdownChunksToMarkdownStringRecursive:markdown_parsings_12.markdownChunksToMarkdownStringRecursive,markdownToSayable:markdown_parsings_13.markdownToSayable,mdToPdf:markdown_parsings_14.mdToPdf,mergeMarkdownParse:markdown_parsings_15.mergeMarkdownParse,noNewlines:markdown_parsings_16.noNewlines,operationRadio:markdown_parsings_17.operationRadio,operationToMarkdown:markdown_parsings_18.operationToMarkdown,printNestedTitles:markdown_parsings_19.printNestedTitles,print:markdown_parsings_20.print,projectToMarkdown:markdown_parsings_21.projectToMarkdown,propertyToTableRow:markdown_parsings_22.propertyToTableRow,sayablesToMp3:markdown_parsings_23.sayablesToMp3,selectRandomOperation:markdown_parsings_24.selectRandomOperation,simplifiedSchemaToMarkdownString:markdown_parsings_25.simplifiedSchemaToMarkdownString,tsFunctionToMarkdownString:markdown_parsings_26.tsFunctionToMarkdownString,tsInterfaceToMarkdownString:markdown_parsings_27.tsInterfaceToMarkdownString,upMarkdownChunkLevelRecursively:markdown_parsings_28.upMarkdownChunkLevelRecursively,readCsvFileSync:read_csv_file_1.readCsvFileSync,readCsvFile:read_csv_file_2.readCsvFile,readJsonFileSync:read_json_file_1.readJsonFileSync,readJsonFile:read_json_file_2.readJsonFile,tryParseJson:read_json_file_3.tryParseJson,readKvmdFile:read_kvmd_file_1.readKvmdFile,omitUndefinedValues:read_markdown_file_1.omitUndefinedValues,readMarkdownFileToModel:read_markdown_file_2.readMarkdownFileToModel,readMarkdownFile:read_markdown_file_3.readMarkdownFile,isEqualArray:rename_template_files_1.isEqualArray,renameTemplateFiles:rename_template_files_2.renameTemplateFiles,renameTemplateToNormalFile:rename_template_files_3.renameTemplateToNormalFile,renameToTemplateFile:rename_template_files_4.renameToTemplateFile,setJsonKey:set_json_key_1.setJsonKey,getAllTsMorphSourceFiles:ts_morph_util_1.getAllTsMorphSourceFiles,getHasGeneric:ts_morph_util_2.getHasGeneric,getTsMorphProject:ts_morph_util_3.getTsMorphProject,initiateWatch:watch_folders_1.initiateWatch,makeSubscription:watch_folders_2.makeSubscription,watchFoldersFs:watch_folders_3.watchFoldersFs,watchFolders:watch_folders_4.watchFolders,exitIfOperationsChange:watch_operations_1.exitIfOperationsChange,gitCommitAllCron:watch_operations_2.gitCommitAllCron,watchOperations:watch_operations_3.watchOperations,writeToAssets:write_to_assets_1.writeToAssets};
//# sourceMappingURL=sdk-api.js.map