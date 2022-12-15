var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useSelectionPromptsMenu } from "prompt-components";
import * as React from "react";
import { Div } from "react-with-native";
import { MarkdownContentRender } from "./MarkdownContentRender";
/**
Renders a markdown string (without frontmatter)

 */
export var MarkdownContent = function (props) {
    var config = props.config, content = props.content;
    var _a = useSelectionPromptsMenu(config.selectionPrompts || [], {
        contextContent: content,
        context_projectRelativeFilePath: config.projectRelativeMarkdownFilePath,
    }), openContextMenuProps = _a.openContextMenuProps, renderContextMenu = _a.renderContextMenu, isOpen = _a.isOpen;
    if (!content)
        return React.createElement(Div, null, "No content");
    var markdownRender = React.useMemo(function () {
        return React.createElement(MarkdownContentRender, { content: content, config: config });
    }, [
        content,
        isOpen,
        isOpen ? { renderContextMenu: renderContextMenu, openContextMenuProps: openContextMenuProps } : undefined,
    ]);
    if (config.disableSelectionContextMenu) {
        return markdownRender;
    }
    return (React.createElement("div", __assign({}, openContextMenuProps),
        renderContextMenu(),
        markdownRender));
};
//# sourceMappingURL=MarkdownContent.js.map