import { SourceFile, VariableDeclaration } from "ts-morph";
import { TsVariable, TsFunction, TsInterface } from "code-types";
import { Creation } from "model-types";
import { Frontmatter } from "matter-types";
export declare const getFrontmatterFunctionParameters: (frontmatter: Frontmatter) => {
    runEveryPeriod: "minute" | "5-minutes" | "quarter-hour" | "hour" | "6-hours" | "midnight" | "week" | "month" | "3-months" | "year" | undefined;
    isApiExposed: boolean;
};
export declare type VariableDeclarationInfo = {
    isExported: boolean;
    variableDeclarations: VariableDeclaration[];
    kindName: string;
    isArrowFunction: boolean;
    names: string[];
    comments: string[];
    explicitTypeName?: string;
};
/**
 Gets functions and variables from a tsmorph sourcefile
 */
export declare const getTsStatements: (sourceFile: SourceFile, tsInterfaces: Creation<TsInterface>[], operationRelativeTypescriptFilePath: string, fileContent: string) => Promise<{
    tsFunctions: Creation<TsFunction>[];
    tsVariables: Creation<TsVariable>[];
}>;
//# sourceMappingURL=getTsStatements.d.ts.map