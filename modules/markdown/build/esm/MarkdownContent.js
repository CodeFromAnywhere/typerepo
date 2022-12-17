import * as React from "react";
import { Div } from "react-with-native";
import { MarkdownContentRender } from "./MarkdownContentRender";
/**
Renders a markdown string (without frontmatter)

 */
export var MarkdownContent = function (props) {
    var config = props.config, content = props.content;
    if (!content)
        return React.createElement(Div, null, "No content");
    return React.createElement(MarkdownContentRender, { content: content, config: config });
};
//# sourceMappingURL=MarkdownContent.js.map