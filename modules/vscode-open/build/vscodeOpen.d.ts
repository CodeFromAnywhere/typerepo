#!/usr/bin/env node
export declare type OpenableFile = {
    projectRelativePath?: string;
    /**
     *
     */
    operationName?: string;
    operationRelativeFilePath?: string;
    line?: number;
};
export declare const getOpenableFilePath: (file: OpenableFile) => Promise<string | undefined>;
/**
 * opens a file in vscode through the "code" cli
 */
export declare const vscodeOpen: (config: {
    /**
    Files to open. Either use a projectRelativePath or an operationName combined with an operationRelativePath.
    
    can optionally have the line and character specified as well after the file with [file-path]:[line]:[character]
     */
    files?: OpenableFile[];
}) => Promise<undefined | {
    success: boolean;
    response: string;
}>;
//# sourceMappingURL=vscodeOpen.d.ts.map