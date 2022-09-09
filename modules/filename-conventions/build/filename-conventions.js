"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isIndexableFileId=exports.operationUnindexableNamesOrSubExtensions=exports.frontendOptionalFileSubExtensions=exports.generatedPackageOperations=exports.projectRelativeGeneratedOperationsFolder=exports.buildFolderName=exports.sourceFolderName=exports.databaseFolderName=void 0;var hasSubExtension_1=require("./hasSubExtension");exports.databaseFolderName="db",exports.sourceFolderName="src",exports.buildFolderName="build",exports.projectRelativeGeneratedOperationsFolder="operations/tools/generated",exports.generatedPackageOperations=["sdk","sdk-db","sdk-api","sdk-operations"],
/**
 * these special operations are generated, so should not be copied, but should be generated in the bundle after everything is copied
 */
exports.frontendOptionalFileSubExtensions=["native","ios","android","web"],exports.operationUnindexableNamesOrSubExtensions=["cli","test"];var isIndexableFileId=function(e){var o=(0,hasSubExtension_1.hasSubExtension)(e,exports.operationUnindexableNamesOrSubExtensions,!0),s=(0,hasSubExtension_1.hasSubExtension)(e,exports.frontendOptionalFileSubExtensions,!1);return!("index"===e)&&!s&&!o};exports.isIndexableFileId=isIndexableFileId;
//# sourceMappingURL=filename-conventions.js.map