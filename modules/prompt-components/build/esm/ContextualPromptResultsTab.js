import * as React from "react";
import { queries } from "api";
import { Div } from "react-with-native";
import { MarkdownContent } from "markdown";
/**
 * Visual to show the different prompt results. Probably deprecated, probably better to show it in a more structured way.
 */
export var ContextualPromptResultsTab = function (props) {
    var _a, _b;
    var prompt_projectRelativePath = props.prompt_projectRelativePath;
    var contextualPromptResultsQuery = queries.useGetContextualPromptResults({
        prompt_projectRelativePath: prompt_projectRelativePath,
    });
    return (React.createElement(Div, null, (_b = (_a = contextualPromptResultsQuery.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.map(function (item) {
        return (React.createElement(Div, null,
            React.createElement("b", null, "prompt"),
            item.prompt ? (React.createElement(MarkdownContent, { content: item.prompt, config: {} })) : null,
            React.createElement("b", null, "result"),
            item.resultText ? (React.createElement(MarkdownContent, { content: item.resultText, config: {} })) : null));
    })));
};
//# sourceMappingURL=ContextualPromptResultsTab.js.map