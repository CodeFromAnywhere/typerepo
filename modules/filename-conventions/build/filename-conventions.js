"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isIndexableFileId=exports.operationUnindexableNamesOrSubExtensions=exports.frontendOptionalFileSubExtensions=exports.projectRelativeGeneratedOperationsFolder=exports.generatedFolders=exports.temporaryConvertedSubextension=exports.movedFileSubextension=exports.sourceFolderName=exports.databaseFolderName=exports.buildFolderName=void 0;var hasSubExtension_1=require("./hasSubExtension");exports.buildFolderName="build",exports.databaseFolderName="db",exports.sourceFolderName="src",
/**
 * subextension indicating that a file has been moved to another location
 *
 * For example, used in `watchAppleMemos`
 */
exports.movedFileSubextension="moved",
/**
 * This is a temporary file for conversion with ffmpeg (see ffmpeg-util)
 */
exports.temporaryConvertedSubextension="converted",exports.generatedFolders=["node_modules",exports.buildFolderName,".next",".git",".turbo"],exports.projectRelativeGeneratedOperationsFolder="operations/tools/generated",
/**
 * these special operations are generated, so should not be copied, but should be generated in the bundle after everything is copied
 */
exports.frontendOptionalFileSubExtensions=["native","ios","android","web"],exports.operationUnindexableNamesOrSubExtensions=["cli","test"];var isIndexableFileId=function(e){var o=(0,hasSubExtension_1.hasSubExtension)(e,exports.operationUnindexableNamesOrSubExtensions,!0),t=(0,hasSubExtension_1.hasSubExtension)(e,exports.frontendOptionalFileSubExtensions,!1);return!("index"===e)&&!t&&!o};exports.isIndexableFileId=isIndexableFileId;
//# sourceMappingURL=filename-conventions.js.map