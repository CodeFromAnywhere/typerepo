"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeCreatePromptCode = void 0;
var convert_case_1 = require("convert-case");
var js_util_1 = require("js-util");
var writeCreatePromptCode = function (contextualPrompt) {
    var parameters = [
        contextualPrompt.usesAnyContext ? "anyContext" : undefined,
        ,
        contextualPrompt.usesContext ? "contextContent" : undefined,
        contextualPrompt.usesSelection ? "selectionContent" : undefined,
        contextualPrompt.folderContentContext ? "projectRelativePath" : undefined,
    ].filter(js_util_1.notEmpty);
    var functionLineParametersString = parameters
        .map(function (x) { return "".concat(x, ": string"); })
        .join(", ");
    var objectParametersString = parameters.join(",\n");
    var contextType = contextualPrompt.contextType, instantExecution = contextualPrompt.instantExecution, isFavorite = contextualPrompt.isFavorite, categoryStackCalculated = contextualPrompt.categoryStackCalculated;
    var contextualPromptInfo = {
        contextType: contextType,
        instantExecution: instantExecution,
        isFavorite: isFavorite,
        categoryStackCalculated: categoryStackCalculated,
    };
    var functionName = (0, convert_case_1.camelCase)(contextualPrompt.name);
    return "\n  ".concat(contextualPrompt.title
        ? "/**\n  ".concat(contextualPrompt.title, "\n  */")
        : "", "\n  export const ").concat(functionName, ": PromptFunction = async (").concat(functionLineParametersString, ", isDeferred?: boolean) => {\n\n    const result = await processChatGptPrompt({\n      isDeferred,\n      contextualPromptSlug: \"").concat(contextualPrompt.slug, "\",\n      ").concat(objectParametersString, "\n    });\n\n    return result;\n\n  }\n\n").concat(functionName, ".contextualPromptInfo = ").concat(JSON.stringify(contextualPromptInfo));
};
exports.writeCreatePromptCode = writeCreatePromptCode;
//# sourceMappingURL=writeCreatePromptCode.js.map