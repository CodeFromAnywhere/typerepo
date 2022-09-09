import { BundleConfig } from "bundle-types";
import { MarkdownParse, SimplifiedSchema, SimplifiedSchemaProperty, TsFunction, TsInterface } from "code-types";
import { Json } from "json-util";
export declare type JsonPart = {
    identifier?: string;
    json: Json;
};
export declare const propertyToTableRow: (property: SimplifiedSchemaProperty) => string;
/**
 * Should render a string with one or more markdown tables to represent the simplifiedSchema
 *
 */
export declare const simplifiedSchemaToMarkdownString: (simplifiedSchema: SimplifiedSchema | undefined, name: string, isRequired: boolean, level?: number) => string;
/**
  TsFunction:
  - name and operation
  - size
  - description (doc-comment)
  - input, output
  */
export declare const tsFunctionToMarkdownString: (tsFunction: TsFunction) => string;
/**
 * properties, their type, and their description
 *
 * use simplifiedJsonSchema, but split up nested things into multiple tables (ive written a thing for splitting up nested objects before, use that)
 */
export declare const tsInterfaceToMarkdownString: (tsInterface: TsInterface) => string;
/**
 * finds all md files in a folder and creates a single MarkdownParse
 *
 * handy for creating a single documentation file or other things that have to include multiple markdown files in a structured way
 *
 * NB: it recursively structures the files and folders with headings
 */
export declare const bundleFolderWithMarkdown: (absoluteFolderPath: string, fileName?: string) => Promise<{
    markdownParse: MarkdownParse;
    outline: string;
}>;
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
     * save: saves the result in the operation `README.md` and `CONTRIBUTING.md` and other default md files
     *
     * string: returns the full markdown string
     *
     * parse: returns the markdownparse
     */
    returnType?: "string" | "parse" | "save" | undefined;
}) => Promise<string | MarkdownParse | undefined>;
/**

Input: BundleConfig (one or more folder(s), readme, operations with a docs folder)

Output should be all md files concatenated in the right order with the right titles

 */
export declare const bundleToBookMd: (config: {
    bundleConfig: BundleConfig;
    title?: string | undefined;
    coverImagePath?: string | undefined;
    isModulesIncluded?: boolean | undefined;
    manualProjectRoot?: string | undefined;
}) => Promise<void>;
/**
 *
 * creates a summary for a whole bundle
 *
 * NB: Related to `bundleToBookMd`
 */
export declare const bundleToMd: ({ bundleConfigId, includeModules, }: {
    bundleConfigId: string;
    /** if true, also includes the private modules */
    includeModules?: boolean | undefined;
}) => string;
/**
 * summarizes the whole OS project into a markdown string
 */
export declare const projectToMd: ({ includeTodo, }: {
    includeTodo?: boolean | undefined;
    includeOperationDetails?: boolean | undefined;
}) => string;
//# sourceMappingURL=bundlings.d.ts.map