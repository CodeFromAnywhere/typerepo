import * as React from "react";
import { queries } from "api";
import { MarkdownContent } from "markdown";
import { Div } from "react-with-native";
export var Dataset = function () {
    var _a;
    var categoriesQuery = queries.useGetContextualPromptCategories();
    return (React.createElement(Div, { id: "dataset", className: "h-screen overflow-y-scroll" },
        React.createElement(MarkdownContent, { config: {}, content: "```json\n".concat(JSON.stringify((_a = categoriesQuery.data) === null || _a === void 0 ? void 0 : _a.result, undefined, 2), "\n```") })));
};
//# sourceMappingURL=Dataset.js.map