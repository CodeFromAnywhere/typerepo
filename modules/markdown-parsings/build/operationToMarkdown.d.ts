import { MarkdownParse, TsFunction, TsInterface, TsVariable } from "code-types";
export declare const getMergedMarkdownOutlineUrl: (title: string) => {
    title: string;
    hashtagPath: string;
};
/**
 * interface that lets us count the amount of dependant files in different item types
 */
export declare type DependantCountObject = {
    externalDependantFiles: string[];
} & StatementItem;
export declare type StatementItem = {
    tsFunction?: TsFunction;
    tsInterface?: TsInterface;
    tsVariable?: TsVariable;
};
export declare const statementItemToMarkdown: (statementItem: StatementItem) => string | undefined;
/**
 * converts an operation and all its contents into a flat markdown file that contains the needed information. configurable.
 *
 * markdown for reading (so there are no links)
 */
export declare const operationToMarkdown: (config: {
    operationName: string;
    manualProjectRoot?: string | undefined;
    /**
     * if true, just returns the outline of the operation (function + interface names, size, deps)
     */
    isSummary?: boolean | undefined;
    /**
     * if true, it will merge all docs into the readme, not linking to them (by default, docs will be linked to)
     */
    mergeDocsInline?: boolean | undefined;
    /**
     * - save: saves the result in the operation `README.md` and `CONTRIBUTING.md` and other default md files
     * - string: returns the full markdown string
     * - parse: returns the `MarkdownParse`
     */
    returnType?: "string" | "parse" | "save" | undefined;
}) => Promise<string | MarkdownParse | undefined>;
//# sourceMappingURL=operationToMarkdown.d.ts.map