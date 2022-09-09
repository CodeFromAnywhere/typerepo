import { Markdown, TsIndexModelType } from "model-types";
import { SizeSummary } from "./FolderSummary";
import { TypeInfo } from "./TypeInfo";
import { TsComment } from "./TsComment";
import { Schema } from "ts-json-schema-generator";
import { SimplifiedSchema } from "./SimplifiedSchema";
export interface FunctionParameter {
    name: string;
    schema?: Schema;
    simplifiedSchema?: SimplifiedSchema;
    required: boolean;
}
/**
 * Still not sure if the user one is a good idea but there are probably some usecases that would really benefit to have a user-layer embedded in the king os system
 *
 *
 */
export declare type ApiAuthenticationStrategy = "none" | "admin" | "user";
/**
 * ---
 * dbStorageMethod: jsonSingle
 * ---
 *
 * Interface for arrow functions and normal functions
 */
export interface TsFunction extends TsIndexModelType {
    /**
     * The function is immediately exported upon creation. If the os dev tools are being used, this means it is also exported from the operation
     */
    isExported: boolean;
    /**
     * for all exported functions in node operations, true by default
     * false for others
     *
     * can be overwritten using frontmatter
     */
    isApiExposed: boolean;
    /**
     * defaults to "admin" (which is a bundle-specific auth token), can be overwritten using frontmatter
     */
    apiAuthenticationStrategy: ApiAuthenticationStrategy;
    /**
     * parsed comment from doc-comment
     */
    description?: Markdown;
    /**
     * raw text of the function
     */
    rawText?: string;
    /**
     * all comments found in a function and the node that they belong to
     */
    commentsInside: TsComment[];
    /**
     * return type JSON Schema definition
     */
    returnType: TypeInfo;
    /**
     * parameters the function takes as its arguments, if any
     */
    parameters?: FunctionParameter[];
    /**
     * size of this function (comments + code)
     */
    size: SizeSummary;
    /**
     * size of the comments of this function (including surrounding comments)
     */
    commentSize?: SizeSummary;
    /**
     * size of the code inside the function (without comments)
     */
    codeSize?: SizeSummary;
    /**
     * tells you the size of itself and all its dependencies that are used that are also part of an operation, recursively
     */
    cumulativeSize?: SizeSummary;
    cumulativeCommentSize?: SizeSummary;
    cumulativeCodeSize?: SizeSummary;
    /**
     * maximum amount of times indedented in this function
     *
     * good for determining the complexity and finding code that can be simplified/destructured into smaller pieces
     */
    maxIndentationDepth: number;
    /**
     * finds all files that import this function
     *
     * NB: this is not indexed because this information has nothing to do with the operation itself, but the exposure to the broader monorepo. This is calculated on the fly.
     */
    dependantFiles?: string[];
}
//# sourceMappingURL=TsFunction.d.ts.map