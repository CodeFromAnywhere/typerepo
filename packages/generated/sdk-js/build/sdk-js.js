"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sdk=void 0;var api_1=require("api"),api_2=require("api"),asset_functions_js_1=require("asset-functions-js"),asset_functions_js_2=require("asset-functions-js"),asset_functions_js_3=require("asset-functions-js"),asset_functions_js_4=require("asset-functions-js"),asset_functions_js_5=require("asset-functions-js"),asset_functions_js_6=require("asset-functions-js"),asset_functions_js_7=require("asset-functions-js"),asset_functions_js_8=require("asset-functions-js"),asset_functions_js_9=require("asset-functions-js"),asset_functions_js_10=require("asset-functions-js"),asset_functions_js_11=require("asset-functions-js"),asset_functions_js_12=require("asset-functions-js"),code_types_1=require("code-types"),comment_util_1=require("comment-util"),comment_util_2=require("comment-util"),comment_util_3=require("comment-util"),comment_util_4=require("comment-util"),comment_util_5=require("comment-util"),comment_util_6=require("comment-util"),compile_typescript_1=require("compile-typescript"),compile_typescript_2=require("compile-typescript"),compile_typescript_3=require("compile-typescript"),convert_case_1=require("convert-case"),convert_case_2=require("convert-case"),convert_case_3=require("convert-case"),convert_case_4=require("convert-case"),convert_case_5=require("convert-case"),convert_case_6=require("convert-case"),convert_case_7=require("convert-case"),convert_case_8=require("convert-case"),convert_case_9=require("convert-case"),convert_case_10=require("convert-case"),convert_case_11=require("convert-case"),filename_conventions_1=require("filename-conventions"),filename_conventions_2=require("filename-conventions"),filename_conventions_3=require("filename-conventions"),filename_conventions_4=require("filename-conventions"),filename_conventions_5=require("filename-conventions"),frontmatter_util_1=require("frontmatter-util"),frontmatter_util_2=require("frontmatter-util"),frontmatter_util_3=require("frontmatter-util"),frontmatter_util_4=require("frontmatter-util"),frontmatter_util_5=require("frontmatter-util"),frontmatter_util_6=require("frontmatter-util"),frontmatter_util_7=require("frontmatter-util"),fs_util_1=require("fs-util"),fs_util_2=require("fs-util"),fs_util_3=require("fs-util"),fs_util_4=require("fs-util"),fs_util_5=require("fs-util"),fs_util_6=require("fs-util"),fs_util_7=require("fs-util"),fs_util_8=require("fs-util"),fs_util_9=require("fs-util"),fs_util_10=require("fs-util"),fs_util_11=require("fs-util"),fs_util_12=require("fs-util"),fs_util_13=require("fs-util"),fs_util_14=require("fs-util"),fs_util_15=require("fs-util"),fs_util_16=require("fs-util"),fs_util_17=require("fs-util"),fs_util_18=require("fs-util"),fs_util_19=require("fs-util"),fs_util_20=require("fs-util"),fs_util_21=require("fs-util"),fs_util_22=require("fs-util"),fs_util_23=require("fs-util"),fs_util_24=require("fs-util"),fs_util_25=require("fs-util"),fs_util_26=require("fs-util"),get_path_1=require("get-path"),get_path_2=require("get-path"),get_path_3=require("get-path"),get_path_4=require("get-path"),get_path_5=require("get-path"),get_path_6=require("get-path"),get_path_7=require("get-path"),get_path_8=require("get-path"),get_path_9=require("get-path"),get_path_10=require("get-path"),get_path_11=require("get-path"),get_path_12=require("get-path"),get_path_13=require("get-path"),get_path_14=require("get-path"),get_path_15=require("get-path"),get_path_16=require("get-path"),get_path_17=require("get-path"),get_path_18=require("get-path"),get_path_19=require("get-path"),get_path_20=require("get-path"),get_path_21=require("get-path"),get_path_22=require("get-path"),get_path_23=require("get-path"),get_path_24=require("get-path"),get_path_25=require("get-path"),get_ts_config_1=require("get-ts-config"),js_util_1=require("js-util"),js_util_2=require("js-util"),js_util_3=require("js-util"),js_util_4=require("js-util"),js_util_5=require("js-util"),js_util_6=require("js-util"),js_util_7=require("js-util"),js_util_8=require("js-util"),js_util_9=require("js-util"),js_util_10=require("js-util"),js_util_11=require("js-util"),js_util_12=require("js-util"),js_util_13=require("js-util"),js_util_14=require("js-util"),js_util_15=require("js-util"),js_util_16=require("js-util"),js_util_17=require("js-util"),js_util_18=require("js-util"),js_util_19=require("js-util"),js_util_20=require("js-util"),js_util_21=require("js-util"),js_util_22=require("js-util"),js_util_23=require("js-util"),js_util_24=require("js-util"),js_util_25=require("js-util"),js_util_26=require("js-util"),js_util_27=require("js-util"),js_util_28=require("js-util"),js_util_29=require("js-util"),js_util_30=require("js-util"),js_util_31=require("js-util"),js_util_32=require("js-util"),js_util_33=require("js-util"),js_util_34=require("js-util"),js_util_35=require("js-util"),js_util_36=require("js-util"),js_util_37=require("js-util"),js_util_38=require("js-util"),js_util_39=require("js-util"),js_util_40=require("js-util"),js_util_41=require("js-util"),js_util_42=require("js-util"),json_util_1=require("json-util"),key_value_markdown_js_1=require("key-value-markdown-js"),key_value_markdown_js_2=require("key-value-markdown-js"),key_value_markdown_js_3=require("key-value-markdown-js"),key_value_markdown_js_4=require("key-value-markdown-js"),key_value_markdown_js_5=require("key-value-markdown-js"),key_value_markdown_js_6=require("key-value-markdown-js"),key_value_markdown_js_7=require("key-value-markdown-js"),key_value_markdown_js_8=require("key-value-markdown-js"),log_1=require("log"),log_2=require("log"),log_3=require("log"),make_file_type_1=require("make-file-type"),make_test_1=require("make-test"),make_test_2=require("make-test"),markdown_parse_js_1=require("markdown-parse-js"),markdown_parse_js_2=require("markdown-parse-js"),markdown_parse_js_3=require("markdown-parse-js"),markdown_parse_js_4=require("markdown-parse-js"),markdown_parse_js_5=require("markdown-parse-js"),markdown_parse_js_6=require("markdown-parse-js"),markdown_parse_js_7=require("markdown-parse-js"),markdown_parse_js_8=require("markdown-parse-js"),markdown_parse_js_9=require("markdown-parse-js"),markdown_parse_js_10=require("markdown-parse-js"),markdown_parse_js_11=require("markdown-parse-js"),markdown_parse_js_12=require("markdown-parse-js"),markdown_parse_js_13=require("markdown-parse-js"),markdown_parse_js_14=require("markdown-parse-js"),markdown_parse_js_15=require("markdown-parse-js"),markdown_types_1=require("markdown-types"),markdown_types_2=require("markdown-types"),markdown_types_3=require("markdown-types"),marked_util_1=require("marked-util"),marked_util_2=require("marked-util"),marked_util_3=require("marked-util"),marked_util_4=require("marked-util"),marked_util_5=require("marked-util"),measure_performance_1=require("measure-performance"),measure_performance_2=require("measure-performance"),measure_performance_3=require("measure-performance"),model_types_1=require("model-types"),model_types_2=require("model-types"),model_types_3=require("model-types"),model_types_4=require("model-types"),model_types_5=require("model-types"),model_types_6=require("model-types"),name_conventions_1=require("name-conventions"),name_conventions_2=require("name-conventions"),name_conventions_3=require("name-conventions"),name_conventions_4=require("name-conventions"),next_paths_1=require("next-paths"),next_paths_2=require("next-paths"),next_paths_3=require("next-paths"),one_by_one_1=require("one-by-one"),operation_util_1=require("operation-util"),operation_util_2=require("operation-util"),operation_util_3=require("operation-util"),parse_primitive_1=require("parse-primitive"),parse_primitive_2=require("parse-primitive"),parse_primitive_3=require("parse-primitive"),parse_primitive_4=require("parse-primitive"),path_util_1=require("path-util"),path_util_2=require("path-util"),path_util_3=require("path-util"),path_util_4=require("path-util"),path_util_5=require("path-util"),path_util_6=require("path-util"),pluralize_1=require("pluralize"),pluralize_2=require("pluralize"),pluralize_3=require("pluralize"),pluralize_4=require("pluralize"),recursive_util_1=require("recursive-util"),recursive_util_2=require("recursive-util"),recursive_util_3=require("recursive-util"),recursive_util_4=require("recursive-util"),recursive_util_5=require("recursive-util"),recursive_util_6=require("recursive-util"),recursive_util_7=require("recursive-util"),recursive_util_8=require("recursive-util"),rest_util_1=require("rest-util"),rest_util_2=require("rest-util"),rest_util_3=require("rest-util"),rest_util_4=require("rest-util"),rest_util_5=require("rest-util"),run_child_process_1=require("run-child-process"),schema_util_1=require("schema-util"),schema_util_2=require("schema-util"),schema_util_3=require("schema-util"),schema_util_4=require("schema-util"),schema_util_5=require("schema-util"),schema_util_6=require("schema-util"),schema_util_7=require("schema-util"),schema_util_8=require("schema-util"),schema_util_9=require("schema-util"),schema_util_10=require("schema-util"),schema_util_11=require("schema-util"),search_1=require("search"),search_2=require("search"),string_to_json_1=require("string-to-json"),string_to_json_2=require("string-to-json"),string_to_json_3=require("string-to-json"),string_to_json_4=require("string-to-json"),text_or_binary_1=require("text-or-binary"),text_or_binary_2=require("text-or-binary"),text_or_binary_3=require("text-or-binary"),try_parse_json_1=require("try-parse-json"),ui_util_1=require("ui-util"),use_url_store_1=require("use-url-store"),webpage_types_1=require("webpage-types"),webpage_types_2=require("webpage-types");exports.sdk={getGetApiUrl:api_1.getGetApiUrl,untypedApiFunction:api_2.untypedApiFunction,addToken:asset_functions_js_1.addToken,ensureToken:asset_functions_js_2.ensureToken,findAssetParametersRecursively:asset_functions_js_3.findAssetParametersRecursively,getAssetDirectlyApiUrl:asset_functions_js_4.getAssetDirectlyApiUrl,getConversionInfoFromType:asset_functions_js_5.getConversionInfoFromType,getExtensionFromAsset:asset_functions_js_6.getExtensionFromAsset,getNameFromRelativePath:asset_functions_js_7.getNameFromRelativePath,getNameWithTokenFromRelativePath:asset_functions_js_8.getNameWithTokenFromRelativePath,getReferencedAssetApiUrl:asset_functions_js_9.getReferencedAssetApiUrl,getTypeFromUrlOrPath:asset_functions_js_10.getTypeFromUrlOrPath,readableSize:asset_functions_js_11.readableSize,removeTokenIfPresent:asset_functions_js_12.removeTokenIfPresent,getFunctionExersize:code_types_1.getFunctionExersize,stripCommentEnd:comment_util_1.stripCommentEnd,stripCommentStart:comment_util_2.stripCommentStart,stripComment:comment_util_3.stripComment,stripSlashes:comment_util_4.stripSlashes,stripStar:comment_util_5.stripStar,trim:comment_util_6.trim,getCompileErrors:compile_typescript_1.getCompileErrors,getTypescriptErrorsFromFiles:compile_typescript_2.getTypescriptErrorsFromFiles,writeBuildErrors:compile_typescript_3.writeBuildErrors,camelCase:convert_case_1.camelCase,capitalCase:convert_case_2.capitalCase,capitaliseFirstLetter:convert_case_3.capitaliseFirstLetter,convertCase:convert_case_4.convertCase,getDelimiter:convert_case_5.getDelimiter,humanCase:convert_case_6.humanCase,kebabCase:convert_case_7.kebabCase,lowerCaseArray:convert_case_8.lowerCaseArray,pascalCase:convert_case_9.pascalCase,slugify:convert_case_10.slugify,snakeCase:convert_case_11.snakeCase,getWriterType:filename_conventions_1.getWriterType,hasSubExtension:filename_conventions_2.hasSubExtension,isGeneratedOperationName:filename_conventions_3.isGeneratedOperationName,isGeneratedOperation:filename_conventions_4.isGeneratedOperation,isIndexableFileId:filename_conventions_5.isIndexableFileId,frontmatterParseToString:frontmatter_util_1.frontmatterParseToString,frontmatterToObject:frontmatter_util_2.frontmatterToObject,getFrontmatterValueString:frontmatter_util_3.getFrontmatterValueString,objectToFrontmatter:frontmatter_util_4.objectToFrontmatter,parseFrontmatterString:frontmatter_util_5.parseFrontmatterString,quotedOrNot:frontmatter_util_6.quotedOrNot,stringifyNewlines:frontmatter_util_7.stringifyNewlines,canAccessSync:fs_util_1.canAccessSync,canAccess:fs_util_2.canAccess,canExecuteSync:fs_util_3.canExecuteSync,canExecute:fs_util_4.canExecute,canReadSync:fs_util_5.canReadSync,canRead:fs_util_6.canRead,canSeeSync:fs_util_7.canSeeSync,canSee:fs_util_8.canSee,canWriteSync:fs_util_9.canWriteSync,canWrite:fs_util_10.canWrite,copyAllRelativeFiles:fs_util_11.copyAllRelativeFiles,findFileNameCaseInsensitive:fs_util_12.findFileNameCaseInsensitive,getAllFoldersUntilFolder:fs_util_13.getAllFoldersUntilFolder,getFileName:fs_util_14.getFileName,getFirstAvailableFilename:fs_util_15.getFirstAvailableFilename,getFolder:fs_util_16.getFolder,getLastFolder:fs_util_17.getLastFolder,getOneFolderUpPath:fs_util_18.getOneFolderUpPath,getPathCombinations:fs_util_19.getPathCombinations,oneUp:fs_util_20.oneUp,parseMd:fs_util_21.parseMd,removeAllExcept:fs_util_22.removeAllExcept,renameAndCreate:fs_util_23.renameAndCreate,writeJsonToFile:fs_util_24.writeJsonToFile,writeStringToFile:fs_util_25.writeStringToFile,writeToFiles:fs_util_26.writeToFiles,findFolderWhereMatch:get_path_1.findFolderWhereMatch,findOperationBasePathWithClassification:get_path_2.findOperationBasePathWithClassification,findOperationBasePath:get_path_3.findOperationBasePath,getAllPackageJsonDependencies:get_path_4.getAllPackageJsonDependencies,getCommonAncestor:get_path_5.getCommonAncestor,getOperationClassificationObject:get_path_6.getOperationClassificationObject,getOperationClassification:get_path_7.getOperationClassification,getOperationPathParse:get_path_8.getOperationPathParse,getOperationPath:get_path_9.getOperationPath,getOperationRelativePath:get_path_10.getOperationRelativePath,getPathParse:get_path_11.getPathParse,getPathsWithOperations:get_path_12.getPathsWithOperations,getProjectRoot:get_path_13.getProjectRoot,getRelativeLinkPath:get_path_14.getRelativeLinkPath,getRelativePath:get_path_15.getRelativePath,getRootPath:get_path_16.getRootPath,getSrcRelativeFileId:get_path_17.getSrcRelativeFileId,hasDependency:get_path_18.hasDependency,isBundle:get_path_19.isBundle,isOperation:get_path_20.isOperation,isUiOperation:get_path_21.isUiOperation,isWorkspaceRoot:get_path_22.isWorkspaceRoot,makeRelative:get_path_23.makeRelative,packageCompilesTs:get_path_24.packageCompilesTs,tsconfigCompilesEsm:get_path_25.tsconfigCompilesEsm,getTsConfig:get_ts_config_1.getTsConfig,apply:js_util_1.apply,createEnum:js_util_2.createEnum,createMappedObject:js_util_3.createMappedObject,destructureOptionalObject:js_util_4.destructureOptionalObject,findLastIndex:js_util_5.findLastIndex,getObjectFromParamsString:js_util_6.getObjectFromParamsString,getObjectKeysArray:js_util_7.getObjectKeysArray,getParameterAtLocation:js_util_8.getParameterAtLocation,getSubsetFromObject:js_util_9.getSubsetFromObject,groupByKey:js_util_10.groupByKey,hasAllLetters:js_util_11.hasAllLetters,insertAt:js_util_12.insertAt,isAllTrue:js_util_13.isAllTrue,makeArray:js_util_14.makeArray,mapAsync:js_util_15.mapAsync,mapKeys:js_util_16.mapKeys,mapMany:js_util_17.mapMany,mapValuesSync:js_util_18.mapValuesSync,mergeNestedObject:js_util_19.mergeNestedObject,mergeObjectParameters:js_util_20.mergeObjectParameters,mergeObjectsArray:js_util_21.mergeObjectsArray,mergeObjects:js_util_22.mergeObjects,noEmptyString:js_util_23.noEmptyString,notEmpty:js_util_24.notEmpty,objectMapAsync:js_util_25.objectMapAsync,objectMapSync:js_util_26.objectMapSync,objectValuesMap:js_util_27.objectValuesMap,omitUndefinedValues:js_util_28.omitUndefinedValues,onlyUnique2:js_util_29.onlyUnique2,onlyUnique:js_util_30.onlyUnique,pickRandomArrayItem:js_util_31.pickRandomArrayItem,putIndexAtIndex:js_util_32.putIndexAtIndex,removeIndexFromArray:js_util_33.removeIndexFromArray,removeOptionalKeysFromObjectStrings:js_util_34.removeOptionalKeysFromObjectStrings,removeOptionalKeysFromObject:js_util_35.removeOptionalKeysFromObject,replaceLastOccurence:js_util_36.replaceLastOccurence,reverseString:js_util_37.reverseString,sumAllKeys:js_util_38.sumAllKeys,sumObjectParameters:js_util_39.sumObjectParameters,sum:js_util_40.sum,takeFirst:js_util_41.takeFirst,trimSlashes:js_util_42.trimSlashes,getSimpleJsonString:json_util_1.getSimpleJsonString,flattenMarkdownChunks:key_value_markdown_js_1.flattenMarkdownChunks,getKvmdItemsRecursively:key_value_markdown_js_2.getKvmdItemsRecursively,getParagraphsRecursively:key_value_markdown_js_3.getParagraphsRecursively,kvmdDataMap:key_value_markdown_js_4.kvmdDataMap,kvmdDataToString:key_value_markdown_js_5.kvmdDataToString,kvmdParseToMarkdownString:key_value_markdown_js_6.kvmdParseToMarkdownString,markdownStringToKvmdParse:key_value_markdown_js_7.markdownStringToKvmdParse,parseKvmdLine:key_value_markdown_js_8.parseKvmdLine,getCallerFileName:log_1.getCallerFileName,log:log_2.log,parseTitle:log_3.parseTitle,makeFileType:make_file_type_1.makeFileType,isResultOfInterface:make_test_1.isResultOfInterface,makeTest:make_test_2.makeTest,chunkToStringRecursively:markdown_parse_js_1.chunkToStringRecursively,getChunkParagraphsRecursively:markdown_parse_js_2.getChunkParagraphsRecursively,getImplicitId:markdown_parse_js_3.getImplicitId,getMarkdownIntro:markdown_parse_js_4.getMarkdownIntro,getMarkdownParseParagraphs:markdown_parse_js_5.getMarkdownParseParagraphs,getMarkdownReferencePaths:markdown_parse_js_6.getMarkdownReferencePaths,getMarkdownReferencesFromParagraph:markdown_parse_js_7.getMarkdownReferencesFromParagraph,markdownParseToMarkdownStringFromContent:markdown_parse_js_8.markdownParseToMarkdownStringFromContent,markdownParseToMarkdownString:markdown_parse_js_9.markdownParseToMarkdownString,mdContentParseRecursively:markdown_parse_js_10.mdContentParseRecursively,mdToJsonParse:markdown_parse_js_11.mdToJsonParse,parseFrontmatterMarkdownString:markdown_parse_js_12.parseFrontmatterMarkdownString,parseMarkdownParagraph:markdown_parse_js_13.parseMarkdownParagraph,parseMdToChunks:markdown_parse_js_14.parseMdToChunks,removeHeaderPrefix:markdown_parse_js_15.removeHeaderPrefix,markdownParseToMarkdownModelType:markdown_types_1.markdownParseToMarkdownModelType,parseMarkdownModelTimestamp:markdown_types_2.parseMarkdownModelTimestamp,tryParseDate:markdown_types_3.tryParseDate,findCodespans:marked_util_1.findCodespans,findEmbeds:marked_util_2.findEmbeds,findLinks:marked_util_3.findLinks,flattenMarkdownString:marked_util_4.flattenMarkdownString,flattenMarkedTokenRecursive:marked_util_5.flattenMarkedTokenRecursive,cleanupTimer:measure_performance_1.cleanupTimer,generateUniqueId:measure_performance_2.generateUniqueId,getNewPerformance:measure_performance_3.getNewPerformance,generateId:model_types_1.generateId,generatePassword:model_types_2.generatePassword,generateRandomString:model_types_3.generateRandomString,generateTime:model_types_4.generateTime,isEmail:model_types_5.isEmail,markdownModelTypeToMarkdownString:model_types_6.markdownModelTypeToMarkdownString,getAssetInputType:name_conventions_1.getAssetInputType,getParameterContentType:name_conventions_2.getParameterContentType,isCalculatedParameter:name_conventions_3.isCalculatedParameter,isGeneratedParameterName:name_conventions_4.isGeneratedParameterName,getFullPath:next_paths_1.getFullPath,getLastPathsChunk:next_paths_2.getLastPathsChunk,usePath:next_paths_3.usePath,oneByOne:one_by_one_1.oneByOne,getDependenciesSummary:operation_util_1.getDependenciesSummary,getOperationMetaData:operation_util_2.getOperationMetaData,recalculateOperationIndexJson:operation_util_3.recalculateOperationIndexJson,parsePrimitiveArray:parse_primitive_1.parsePrimitiveArray,parsePrimitiveBoolean:parse_primitive_2.parsePrimitiveBoolean,parsePrimitiveString:parse_primitive_3.parsePrimitiveString,parsePrimitive:parse_primitive_4.parsePrimitive,byteCount:path_util_1.byteCount,calculatePathMetaData:path_util_2.calculatePathMetaData,categorizeFiles:path_util_3.categorizeFiles,getFolderSummary:path_util_4.getFolderSummary,getPathMainComment:path_util_5.getPathMainComment,sumSizeSummary:path_util_6.sumSizeSummary,isPlural:pluralize_1.isPlural,isSingular:pluralize_2.isSingular,pluralize:pluralize_3.pluralize,singularize:pluralize_4.singularize,getKeysAtPathFromNestedObject:recursive_util_1.getKeysAtPathFromNestedObject,getMenuPagesObject:recursive_util_2.getMenuPagesObject,makeNestedObjectFromQueryPathObject:recursive_util_3.makeNestedObjectFromQueryPathObject,nestedObjectToChildObject:recursive_util_4.nestedObjectToChildObject,nestedPathObjectToNestedMenuRecursive:recursive_util_5.nestedPathObjectToNestedMenuRecursive,nestifyQueryPathObjectRecursive:recursive_util_6.nestifyQueryPathObjectRecursive,queryPathsArrayToNestedPathObject:recursive_util_7.queryPathsArrayToNestedPathObject,reduceQueryPathsRecursively:recursive_util_8.reduceQueryPathsRecursively,bodyFromQueryString:rest_util_1.bodyFromQueryString,getFirstQueryStrings:rest_util_2.getFirstQueryStrings,getQueryPart:rest_util_3.getQueryPart,isValidEntry:rest_util_4.isValidEntry,toQueryString:rest_util_5.toQueryString,runChildProcess:run_child_process_1.runChildProcess,findFirstCommentTypes:schema_util_1.findFirstCommentTypes,getDataParameterNames:schema_util_2.getDataParameterNames,getPossibleReferenceParameterNames:schema_util_3.getPossibleReferenceParameterNames,getProperties:schema_util_4.getProperties,getRefLink:schema_util_5.getRefLink,getReferencableModels:schema_util_6.getReferencableModels,getReferenceParameterInfo:schema_util_7.getReferenceParameterInfo,getSchemaItems:schema_util_8.getSchemaItems,getSchema:schema_util_9.getSchema,simplifiedSchemaToTypeDefinitionString:schema_util_10.simplifiedSchemaToTypeDefinitionString,simplifySchema:schema_util_11.simplifySchema,findSentenceMatches:search_1.findSentenceMatches,searchRecursiveObjectArray:search_2.searchRecursiveObjectArray,objectStringToJson:string_to_json_1.objectStringToJson,parseIfJson:string_to_json_2.parseIfJson,parsePrimitiveJson:string_to_json_3.parsePrimitiveJson,stringToJson:string_to_json_4.stringToJson,getEncoding:text_or_binary_1.getEncoding,isBinary:text_or_binary_2.isBinary,isText:text_or_binary_3.isText,tryParseJson:try_parse_json_1.tryParseJson,createCodeblockMarkdown:ui_util_1.createCodeblockMarkdown,useCustomUrlStore:use_url_store_1.useCustomUrlStore,crudPageToWebPages:webpage_types_1.crudPageToWebPages,functionFormPageToWebPage:webpage_types_2.functionFormPageToWebPage};
//# sourceMappingURL=sdk-js.js.map