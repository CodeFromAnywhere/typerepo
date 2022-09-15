#!/usr/bin/env node
import { FileType } from "make-file-type";
import { SearchableExtension } from "k-explore";
/**
 * gets all identifiers of files, which are the relative path to a file without the extension
 */
export declare const getFileIds: ({ operationFolderPath, pathSuffix, extension, }: {
    operationFolderPath: string;
    extension?: string | string[] | undefined;
    pathSuffix: string;
}) => Promise<string[]>;
/**
 * gets identifiers of ts and tsx files, which are the relative path to a file without the extension
 *
 * in order for them to be unique, we assume here that there's never a file with the ts extension when there's also a tsx file in the same folder with the same name. This would create duplicate ids.
 */
export declare const getSrcIds: (operationFolderPath: string) => Promise<string[]>;
/**
 * gets identifiers of ts and tsx files, which are the relative path to a file without the extension
 */
export declare const getIndexFileIds: (operationFolderPath: string) => Promise<string[]>;
/**
 * Remove all files in all index folders that should not exist anymore according to source files
 */
export declare const removeDeletedIndexFiles: (operationBasePath: string, debug?: boolean) => Promise<void>;
/**
 * returns a boolean indicating whether or not the operation should be able to be built, based on the OperationClassification
 */
export declare const isOperationBuildNeeded: (operationBasePath: string) => boolean;
/**
 * if you don't force it, there's an operation index, there's an index folder, the src has not been touched since hte last indexation, and there's a buildfolder (if needed), then the rebuildOperation can be skipped
 **/
export declare const shouldSkip: ({ fullPath, debug, force, }: {
    fullPath: string;
    debug?: boolean | undefined;
    force?: boolean | undefined;
}) => Promise<boolean | undefined>;
/**
 * exits the process if our own dependencies change
 */
export declare const exitIfProcessDependenciesChanged: (operationName: string, manualProjectRoot?: string) => Promise<void>;
declare type Success = boolean;
/**
 * Builds and minifies the src
 */
export declare const yarnBuild: (operationBasePath: string, config?: {
    /**
     * if true, build folder will be removed first
     */
    rmFirst?: boolean;
}) => Promise<Success>;
/**
 * everything needed to be done with a file when rebuilding
 */
export declare const indexFile: ({ file, index, operationBasePath, manualProjectRoot, }: {
    file: FileType;
    operationBasePath: string;
    index: number;
    manualProjectRoot?: string | undefined;
}) => Promise<void>;
export {};
//# sourceMappingURL=general.d.ts.map