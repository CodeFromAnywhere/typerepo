export declare const buildFolderName = "build";
export declare const databaseFolderName = "db";
export declare const sourceFolderName = "src";
/**
 * subextension indicating that a file has been moved to another location
 *
 * For example, used in `watchAppleMemos`
 */
export declare const movedFileSubextension = "moved";
/**
 * This is a temporary file for conversion with ffmpeg (see ffmpeg-util)
 */
export declare const temporaryConvertedSubextension = "converted";
export declare const generatedFolders: string[];
export declare const projectRelativeGeneratedOperationsFolder = "operations/tools/generated";
/**
 * these special operations are generated, so should not be copied, but should be generated in the bundle after everything is copied
 */
export declare const frontendOptionalFileSubExtensions: string[];
export declare const operationUnindexableNamesOrSubExtensions: string[];
export declare const isIndexableFileId: (fileId: string) => boolean;
//# sourceMappingURL=filename-conventions.d.ts.map