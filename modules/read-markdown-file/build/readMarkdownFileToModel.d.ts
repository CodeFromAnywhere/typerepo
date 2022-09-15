import { MarkdownFile } from "code-types";
export declare const readMarkdownFileToModel: (absoluteFilePath: string) => Promise<null | MarkdownFile>;
export declare const omitUndefinedValues: <T extends {
    [key: string]: any;
}>(object: T) => T;
//# sourceMappingURL=readMarkdownFileToModel.d.ts.map