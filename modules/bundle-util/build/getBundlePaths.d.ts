/**
 * removes number prefixes from a file or folder name. Does not remove extension
 *
 * defaults to untitled if the file or folder has no name after removing numbers.
 */
export declare const removeNumberPrefix: (fileOrFolderName: string) => string;
export declare const availableExtensions: string[];
/**
 * - Removes numbers from file or foldernames in a path.
 * - Removes extension of files
 * - Returns the new path without numbers and without extension
 *
 * Works for files and folders
 */
export declare const removeExtensionsFromPath: (relativePath: string) => string;
/**
Gets all query paths of a bundle based on the fs
 
README should always be on top in a folder.

Menu should not show numbers, although sorted on it. Numbers should also not appear in paths

Hide `draft` markdown files (also do not make them accessible)

Also make this thing work for todos! Make a function that aggregates all todos from all operations and build a frontend for it (it's `writer-ui` but different content)

Apply MarkdownFileConfig, ensure `isDraft: true` and `privacy: private` get filtered out

If the docs doesn't have a readme, the /docs path should show the root readme.

## words, statements, internal linking

Make the word + statement database models work, ensure they are connected

Make the reader-ui fetch all words at build-time and match the md file for every page against words, statements, functions, interfaces, variables, operations. This will generate an array of extra information: a `description` and possibly a URL. I think there should be a `/definition/*` page for every word/statement inside of every reader-ui (the glossary)

Link to definitions/statements/functions/interfaces/operations.
 */
export declare const getMarkdownReaderQueryPaths: (config?: {
    manualProjectRoot?: string;
}) => Promise<string[] | undefined>;
export declare type MarkdownReaderPage = {
    /**
     * path to be used as the url
     */
    queryPath: string;
    /**
     *
     */
    filePath?: string;
};
export declare const getMarkdownReaderPages: (config?: {
    manualProjectRoot?: string;
}) => Promise<undefined | MarkdownReaderPage[]>;
//# sourceMappingURL=getBundlePaths.d.ts.map