#!/usr/bin/env node
/**
 * opens a file in vscode through the "code" cli
 */
export declare const vscodeOpen: ({ paths, }: {
    /**
     * path of the file to open (defaults to project root dir)
     *
     * should be a relative path from the project root
     *
     * can optionally have the line and character specified as well after the file with [file-path]:[line]:[character]
     *
     */
    paths?: string[] | undefined;
}) => Promise<{
    success: boolean;
    response: string;
} | undefined>;
//# sourceMappingURL=general.d.ts.map