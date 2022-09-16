/**
 * TODO: should make this a js package... I can just externalize certain things from nodejs because they should also be able to be done on frontends...
 *
 */
/**
 gets combinations for paths

 input: [["operation1","operation2"], "db/value-export", ["index.ts","test.ts","cli.ts"]]
 output: ["operation1/db/value-export/index.ts","operation2/db/value-export/index.ts","operation1/db/value-export/test.ts","operation2/db/value-export/test.ts","operation1/db/value-export/cli.ts","operation2/db/value-export/cli.ts"]
 */
export declare const getPathCombinations: (...chunksSegments: (string[] | string)[]) => string[];
export declare const removeTrailingSlash: (p: string) => string;
export declare const getSubExtension: (fileName: string) => string | undefined;
/**
 * removes everything after the last slash to get folder path
 *
 * input: /Users/king/Documents/some/folder/xyz
 * output: xyz
 *
 * input: /Users/king/Documents/some/folder/xyz.txt
 * output: folder
 */
export declare const getLastFolder: (pathString: string) => string;
/**
 if the path exists:
    - if the pathString is a folder, that is returned.
    - if the pathstring is not a folder, returns the pathstring without the file suffix
    
if the path doesn't exist: returns pathString witout last chunk (this would only work for file paths)
 */
export declare const getFolder: (pathString: string) => string;
/**
 * removes everything before the last slash to get file name
 */
export declare const getFileName: (pathString: string) => string;
/**
 * removes extension from the filename
 *
 */
export declare const withoutExtension: (fileName: string) => string;
/**
 * returns the extension of the filename or path
 *
 * NB: not sure, but could be nice to replace this with path.extname(pathString)
 */
export declare const getExtension: (fileNameOrPath: string) => string;
//# sourceMappingURL=js.d.ts.map